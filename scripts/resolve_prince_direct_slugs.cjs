const fs = require('fs');
const path = require('path');
const https = require('https');

const rootDir = path.resolve(__dirname, '..');

function queryPrinceApi(query) {
  return new Promise((resolve) => {
    try {
      const clean = query
        .replace(/\([^)]*\)/gi, ' ')
        .replace(/\b\d+[-–]?(minute|min)\b/gi, ' ')
        .replace(/\b(fortified|pure|natural|original|premium|special|instant|classic|freshly|selected|fine|best|super|cool|liquid|pump|dairy)\b/gi, ' ')
        .replace(/\b\d+(\.\d+)?\s*(ltr|liter|litres|l|kg|kgs|g|gm|gram|grams|ml|pcs|pc|packet|pkt|box|pack)\b/gi, ' ')
        .replace(/[-–]\s*\d+(\.\d+)?\s*(ltr|liter|l|kg|g|gm|ml)\b/gi, ' ')
        .replace(/\b(pet|pkt|pouch|poly|refill|jar|can|tin|bottle|mini|combo|family pack)\b/gi, ' ')
        .replace(/[-–_/+&,.:;]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      const words = clean.split(' ').filter(w => w.length > 1);
      const q = words.length <= 2 ? words.join(' ') : words.slice(0, 3).join(' ');
      if (!q) return resolve(null);

      const apiUrl = `https://ba.princebazarbd.com/api/global-search/${encodeURIComponent(q)}?branch_id=1`;
      https.get(apiUrl, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            const products = json.data?.products || [];
            if (products.length > 0) {
              // Try to find the closest match or use first
              resolve({ slug: products[0].slug, price: products[0].CurrentSellingPrice });
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

async function run() {
  console.log('Resolving Prince Bazar direct product slugs for catalog staples...');
  const catalogModule = await import('../src/data/mockCatalog.js');
  const { STORES, CATEGORIES, PRODUCTS } = catalogModule;

  let directResolved = 0;
  // Resolve for first 150 top staple products across all categories
  for (let i = 0; i < Math.min(PRODUCTS.length, 120); i++) {
    const p = PRODUCTS[i];
    const match = await queryPrinceApi(p.cleanQuery || p.nameEn);
    if (match && match.slug) {
      p.prices.princebazar.url = `https://princebazarbd.com/product/${match.slug}`;
      if (match.price && match.price > 0) {
        p.prices.princebazar.price = match.price;
      }
      directResolved++;
    }
    // Small delay to be polite to Prince Bazar server
    await new Promise(r => setTimeout(r, 60));
  }

  console.log(`✓ Attached direct product page URLs to ${directResolved} Prince Bazar products!`);

  const mockPath = path.join(rootDir, 'src', 'data', 'mockCatalog.js');
  const fileContent = `// Comprehensive Realistic Bangladeshi Grocery Dataset (1,000+ Live Products)
// Authentic e-commerce product images from Chaldal CDN
// Pre-sorted Alphabetically (A to Z)

export const STORES = ${JSON.stringify(STORES, null, 2)};

export const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

export const PRODUCTS = ${JSON.stringify(PRODUCTS, null, 2)};
`;

  fs.writeFileSync(mockPath, fileContent, 'utf8');
  console.log(`✓ Updated src/data/mockCatalog.js`);
}

run().catch(e => console.error(e));
