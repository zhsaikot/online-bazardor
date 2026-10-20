const fs = require('fs');
const path = require('path');
const https = require('https');

const rootDir = path.resolve(__dirname, '..');

function fetchStatus(url, headers = {}) {
  return new Promise((resolve) => {
    try {
      const u = new URL(url);
      const options = {
        hostname: u.hostname,
        port: 443,
        path: u.pathname + u.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          ...headers
        },
        timeout: 8000
      };

      const req = https.request(options, (res) => {
        resolve({
          statusCode: res.statusCode,
          location: res.headers.location || null,
          contentType: res.headers['content-type'] || ''
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({ statusCode: 408, error: 'Timeout' });
      });

      req.on('error', (err) => {
        resolve({ statusCode: 500, error: err.message });
      });

      req.end();
    } catch (e) {
      resolve({ statusCode: 400, error: e.message });
    }
  });
}

// Prince Bazar API lookup for exact product slug
function getPrinceBazarDirectSlug(query) {
  return new Promise((resolve) => {
    try {
      const apiUrl = `https://ba.princebazarbd.com/api/global-search/${encodeURIComponent(query)}?branch_id=1`;
      https.get(apiUrl, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            const products = json.data?.products || [];
            if (products.length > 0 && products[0].slug) {
              resolve(products[0].slug);
            } else {
              resolve(null);
            }
          } catch (e) {
            resolve(null);
          }
        });
      }).on('error', () => resolve(null));
    } catch (e) {
      resolve(null);
    }
  });
}

async function runStoreLinkAudit() {
  console.log('===============================================================');
  console.log('  🌐 BazarDor Comprehensive Multi-Store Link Quality Audit     ');
  console.log('===============================================================');

  const catalogModule = await import('../src/data/mockCatalog.js');
  const { PRODUCTS } = catalogModule;

  console.log(`Auditing catalog of ${PRODUCTS.length} products across 5 stores...`);

  // Sample representative products across multiple categories
  const sampleIndices = [0, 5, 20, 50, 100, 200, 350, 500, 750, 900, 1050].filter(i => i < PRODUCTS.length);
  const sampleProducts = sampleIndices.map(i => PRODUCTS[i]);

  const storeStats = {
    chaldal: { tested: 0, ok: 0, directCount: 0, searchCount: 0, statusCodes: {} },
    shwapno: { tested: 0, ok: 0, directCount: 0, searchCount: 0, statusCodes: {} },
    daraz: { tested: 0, ok: 0, directCount: 0, searchCount: 0, statusCodes: {} },
    cartup: { tested: 0, ok: 0, directCount: 0, searchCount: 0, statusCodes: {} },
    princebazar: { tested: 0, ok: 0, directCount: 0, searchCount: 0, statusCodes: {} }
  };

  console.log('\nTesting representative product links from each store end:');
  console.log('---------------------------------------------------------------');

  for (const prod of sampleProducts) {
    console.log(`\n📦 Product: "${prod.nameEn}" (${prod.category})`);

    for (const [storeKey, storeData] of Object.entries(prod.prices)) {
      if (!storeStats[storeKey]) continue;
      const url = storeData.url;
      if (!url) continue;

      storeStats[storeKey].tested++;
      const isDirect = url.includes('/product/') || (storeKey === 'chaldal' && !url.includes('/search/'));
      if (isDirect) {
        storeStats[storeKey].directCount++;
      } else {
        storeStats[storeKey].searchCount++;
      }

      const res = await fetchStatus(url);
      const code = res.statusCode || 500;
      storeStats[storeKey].statusCodes[code] = (storeStats[storeKey].statusCodes[code] || 0) + 1;

      // 200, 301, 302, 403 (Cloudflare challenge on bot UA) are active servers
      const isWorking = (code >= 200 && code < 400) || (code === 403 && (storeKey === 'shwapno' || storeKey === 'daraz'));
      if (isWorking) storeStats[storeKey].ok++;

      const typeLabel = isDirect ? '🎯 [Direct Page]' : '🔍 [Store Search]';
      const statusIcon = (code >= 200 && code < 400) ? '✓' : (code === 403 ? '🛡️ (Cloudflare Protected)' : '⚠️');
      console.log(`  ${storeKey.padEnd(12)}: ${statusIcon} HTTP ${code} | ${typeLabel} -> ${url}`);
    }
  }

  // Test Prince Bazar Direct Product Slug discovery
  console.log('\n---------------------------------------------------------------');
  console.log('🔬 Testing Prince Bazar Live API Slug Resolution:');
  const testQueries = ['Rupchanda Soyabean Oil', 'Taaza Tea', 'Dettol Handwash', 'Miniket Rice', 'Aci Salt'];
  for (const tq of testQueries) {
    const slug = await getPrinceBazarDirectSlug(tq);
    if (slug) {
      const directUrl = `https://princebazarbd.com/product/${slug}`;
      const res = await fetchStatus(directUrl);
      console.log(`  Query "${tq}" => Direct Slug: "${slug}" -> HTTP ${res.statusCode} (${directUrl})`);
    } else {
      console.log(`  Query "${tq}" => Fallback to /search/${encodeURIComponent(tq)}`);
    }
  }

  console.log('\n===============================================================');
  console.log('  📊 Store Linking Summary & Health Report                     ');
  console.log('===============================================================');

  for (const [store, s] of Object.entries(storeStats)) {
    const healthPct = s.tested > 0 ? Math.round((s.ok / s.tested) * 100) : 0;
    const directPct = s.tested > 0 ? Math.round((s.directCount / s.tested) * 100) : 0;
    console.log(`Store: ${store.toUpperCase()}`);
    console.log(`  - Tested: ${s.tested} samples | Active/Responding: ${s.ok} (${healthPct}%)`);
    console.log(`  - Direct Product Pages: ${s.directCount} (${directPct}%) | Targeted Search Pages: ${s.searchCount}`);
    console.log(`  - Status Codes: ${JSON.stringify(s.statusCodes)}`);
  }
  console.log('===============================================================\n');
}

runStoreLinkAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
