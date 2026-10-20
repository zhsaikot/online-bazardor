const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Sort live_products.json
const liveJsonPath = path.join(rootDir, 'server', 'data', 'live_products.json');
if (fs.existsSync(liveJsonPath)) {
  const liveData = JSON.parse(fs.readFileSync(liveJsonPath, 'utf8'));
  if (Array.isArray(liveData.products)) {
    liveData.products.sort((a, b) => {
      const nameA = (a.nameEn || a.nameBn || '').trim();
      const nameB = (b.nameEn || b.nameBn || '').trim();
      return nameA.localeCompare(nameB, 'en', { sensitivity: 'base' });
    });
    liveData.lastSyncTime = new Date().toISOString();
    fs.writeFileSync(liveJsonPath, JSON.stringify(liveData, null, 2), 'utf8');
    console.log(`✓ Sorted ${liveData.products.length} products in server/data/live_products.json (A to Z)`);
  }
}

// 2. Sort mockCatalog.js
const mockPath = path.join(rootDir, 'src', 'data', 'mockCatalog.js');
async function sortMockCatalog() {
  const catalogModule = await import('../src/data/mockCatalog.js');
  const { STORES, CATEGORIES, PRODUCTS } = catalogModule;

  const sortedProducts = [...PRODUCTS].sort((a, b) => {
    const nameA = (a.nameEn || a.nameBn || '').trim();
    const nameB = (b.nameEn || b.nameBn || '').trim();
    return nameA.localeCompare(nameB, 'en', { sensitivity: 'base' });
  });

  const fileContent = `// Comprehensive Realistic Bangladeshi Grocery Dataset (1,000+ Live Products)
// Authentic e-commerce product images from Chaldal CDN
// Pre-sorted Alphabetically (A to Z)

export const STORES = ${JSON.stringify(STORES, null, 2)};

export const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

export const PRODUCTS = ${JSON.stringify(sortedProducts, null, 2)};
`;

  fs.writeFileSync(mockPath, fileContent, 'utf8');
  console.log(`✓ Sorted ${sortedProducts.length} products in src/data/mockCatalog.js (A to Z)`);
  console.log(`- First product: "${sortedProducts[0].nameEn}"`);
  console.log(`- Last product: "${sortedProducts[sortedProducts.length - 1].nameEn}"`);
}

sortMockCatalog().catch(err => {
  console.error('Error sorting catalog:', err);
  process.exit(1);
});
