import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { syncAllProducts, searchLiveProducts } from './scraper.js';
import { identifyProductFromImage } from './vision.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isVercel = Boolean(process.env.VERCEL);
const DATA_DIR = isVercel ? '/tmp/bazardor_data' : path.join(__dirname, 'data');
const CACHE_FILE = path.join(DATA_DIR, 'live_products.json');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// In-memory cache
let cachedProducts = [];
let lastSyncTime = null;
let isSyncing = false;

// Ensure data directory exists
try {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
} catch (e) {
  console.warn('[Server] Could not create DATA_DIR:', e.message);
}

// Load cached data from disk on startup
if (fs.existsSync(CACHE_FILE)) {
  try {
    const raw = fs.readFileSync(CACHE_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    cachedProducts = parsed.products || [];
    lastSyncTime = parsed.lastSyncTime || null;
    console.log(`[Server] Loaded ${cachedProducts.length} cached products from disk (Last synced: ${lastSyncTime})`);
  } catch (err) {
    console.error('[Server] Failed to read disk cache:', err.message);
  }
}

// Function to perform and persist sync
async function runSync() {
  if (isSyncing) return cachedProducts;
  isSyncing = true;
  try {
    const updated = await syncAllProducts();
    if (updated && updated.length > 0) {
      cachedProducts = updated;
      lastSyncTime = new Date().toISOString();
      try {
        fs.writeFileSync(CACHE_FILE, JSON.stringify({
          lastSyncTime,
          count: cachedProducts.length,
          products: cachedProducts
        }, null, 2));
        console.log(`[Server] Cached ${cachedProducts.length} live products to disk.`);
      } catch (writeErr) {
        console.warn('[Server] Could not write cache to disk:', writeErr.message);
      }
    }
  } catch (err) {
    console.error('[Server] Sync error:', err.message);
  } finally {
    isSyncing = false;
  }
  return cachedProducts;
}

// Initial background sync if empty (in local node environment)
if (cachedProducts.length === 0 && !isVercel) {
  runSync();
}

// Automatic recurring sync every 30 minutes in local environment
if (!isVercel) {
  setInterval(() => {
    console.log('[Server] Running scheduled 30-min price synchronization...');
    runSync();
  }, 30 * 60 * 1000);
}

// API Endpoints
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    service: 'BazarDor Live Price Engine',
    isLiveSyncActive: true,
    isSyncing,
    lastSyncedAt: lastSyncTime,
    productCount: cachedProducts.length
  });
});

app.get('/api/products', async (req, res) => {
  if (cachedProducts.length === 0 && !isSyncing) {
    await runSync();
  }
  res.json({
    success: true,
    count: cachedProducts.length,
    lastSyncedAt: lastSyncTime,
    isSyncing,
    products: cachedProducts
  });
});

app.post('/api/sync', async (req, res) => {
  console.log('[Server] Manual sync requested via POST /api/sync');
  const products = await runSync();
  res.json({
    success: true,
    message: 'Prices synchronized successfully with live supershop catalogs',
    count: products.length,
    lastSyncedAt: lastSyncTime,
    products
  });
});

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  if (!query || !query.trim()) {
    return res.json({ success: true, count: 0, products: [] });
  }

  try {
    const results = await searchLiveProducts(query.trim(), 8);
    let addedCount = 0;
    for (const item of results) {
      const exists = cachedProducts.find(p => p.id === item.id || p.nameEn === item.nameEn);
      if (!exists) {
        cachedProducts.push(item);
        addedCount++;
      }
    }

    if (addedCount > 0) {
      try {
        fs.writeFileSync(CACHE_FILE, JSON.stringify({
          lastSyncTime,
          count: cachedProducts.length,
          products: cachedProducts
        }, null, 2));
        console.log(`[Server] Cached ${addedCount} new search items. Total catalog: ${cachedProducts.length}`);
      } catch (writeErr) {
        console.warn('[Server] Could not write search cache to disk:', writeErr.message);
      }
    }

    res.json({
      success: true,
      query: query.trim(),
      count: results.length,
      products: results
    });
  } catch (err) {
    console.error('[Server] Search error:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Visual Search & Product Recognition Endpoint
app.post('/api/vision-search', async (req, res) => {
  const { imageBase64, filename, sampleHint } = req.body || {};
  if (!imageBase64 && !filename && !sampleHint) {
    return res.status(400).json({ 
      success: false, 
      error: 'Image data, filename or sample hint is required' 
    });
  }

  try {
    console.log('[Server] Processing Visual Search request...');
    const recognition = await identifyProductFromImage({ imageBase64, filename, sampleHint });
    
    // Search live supermarkets for matching products
    const searchQuery = recognition.searchQuery || recognition.detectedProduct;
    let liveResults = await searchLiveProducts(searchQuery, 6);

    // If no live results came back from Chaldal, search existing cached catalog
    if (!liveResults || liveResults.length === 0) {
      const qLower = searchQuery.toLowerCase();
      liveResults = cachedProducts.filter(p => 
        p.nameEn.toLowerCase().includes(qLower) || 
        p.nameBn.includes(recognition.bengaliName || '') ||
        (recognition.category && p.category === recognition.category)
      ).slice(0, 6);
    }

    // Cache any new items discovered
    let addedCount = 0;
    for (const item of liveResults) {
      const exists = cachedProducts.find(p => p.id === item.id || p.nameEn === item.nameEn);
      if (!exists) {
        cachedProducts.push(item);
        addedCount++;
      }
    }

    if (addedCount > 0) {
      try {
        fs.writeFileSync(CACHE_FILE, JSON.stringify({
          lastSyncTime,
          count: cachedProducts.length,
          products: cachedProducts
        }, null, 2));
      } catch (writeErr) {
        console.warn('[Server] Could not write vision cache to disk:', writeErr.message);
      }
    }

    res.json({
      success: true,
      recognition,
      count: liveResults.length,
      products: liveResults,
      matchedProduct: liveResults[0] || null
    });
  } catch (err) {
    console.error('[Server] Visual search error:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

if (!isVercel) {
  app.listen(PORT, '127.0.0.1', () => {
    console.log(`🚀 [BazarDor Scraper Server] Listening on http://127.0.0.1:${PORT}`);
  });
}

export default app;
