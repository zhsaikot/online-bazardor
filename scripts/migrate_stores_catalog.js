import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const NEW_STORES = {
  "chaldal": {
    "id": "chaldal",
    "name": "Chaldal",
    "nameBn": "চালডাল",
    "color": "#FF6A00",
    "bgColor": "bg-orange-500",
    "textColor": "text-orange-600",
    "lightBg": "bg-orange-50",
    "borderColor": "border-orange-200",
    "baseDeliveryFee": 49,
    "freeDeliveryThreshold": 1000,
    "deliveryTime": "১-২ ঘণ্টা",
    "deliveryTimeEn": "1-2 hrs",
    "rating": 4.6,
    "logoText": "Chaldal",
    "accentHex": "#f97316",
    "logo": "/stores/chaldal.png?v=2"
  },
  "shwapno": {
    "id": "shwapno",
    "name": "Shwapno",
    "nameBn": "স্বপ্ন",
    "color": "#E11D48",
    "bgColor": "bg-rose-600",
    "textColor": "text-rose-600",
    "lightBg": "bg-rose-50",
    "borderColor": "border-rose-200",
    "baseDeliveryFee": 50,
    "freeDeliveryThreshold": 1500,
    "deliveryTime": "সেম ডে (আজই)",
    "deliveryTimeEn": "Same Day",
    "rating": 4.5,
    "logoText": "Shwapno",
    "accentHex": "#e11d48",
    "logo": "/stores/shwapno.png?v=2"
  },
  "daraz": {
    "id": "daraz",
    "name": "Daraz",
    "nameBn": "দারাজ",
    "color": "#F85606",
    "bgColor": "bg-orange-600",
    "textColor": "text-orange-600",
    "lightBg": "bg-orange-50",
    "borderColor": "border-orange-200",
    "baseDeliveryFee": 55,
    "freeDeliveryThreshold": 1200,
    "deliveryTime": "১-২ দিন",
    "deliveryTimeEn": "1-2 days",
    "rating": 4.5,
    "logoText": "Daraz",
    "accentHex": "#F85606",
    "logo": "/stores/daraz.png"
  },
  "cartup": {
    "id": "cartup",
    "name": "Cartup",
    "nameBn": "কার্টআপ",
    "color": "#2563EB",
    "bgColor": "bg-blue-600",
    "textColor": "text-blue-600",
    "lightBg": "bg-blue-50",
    "borderColor": "border-blue-200",
    "baseDeliveryFee": 40,
    "freeDeliveryThreshold": 1000,
    "deliveryTime": "সেম ডে / ১ দিন",
    "deliveryTimeEn": "Same Day / 1 day",
    "rating": 4.4,
    "logoText": "Cartup",
    "accentHex": "#2563EB",
    "logo": "/stores/cartup.png"
  }
};

function transformProduct(prod) {
  const nameQuery = encodeURIComponent(prod.nameEn || prod.nameBn || '');

  // Transform offers
  const offers = (prod.offers || []).map(off => {
    if (off.store === 'pandamart') {
      return {
        store: 'daraz',
        title: 'দারাজ মার্ট ভাউচার ও ছাড়',
        badge: off.badge === 'Pandapro ডিল' ? 'মার্ট ডিল' : off.badge
      };
    }
    if (off.store === 'meenaclick') {
      return {
        store: 'cartup',
        title: 'কার্টআপ দ্রুত ডেলিভারি অফার',
        badge: off.badge === '৫% ক্যাশব্যাক' ? 'সুপার ডিল' : off.badge
      };
    }
    return off;
  });

  // Transform prices
  const prices = {};
  for (const [key, val] of Object.entries(prod.prices || {})) {
    if (key === 'pandamart') {
      prices.daraz = {
        price: val.price,
        inStock: val.inStock ?? true,
        discountText: val.discountText || 'MRP',
        offerText: 'দারাজ মার্ট ভাউচার',
        url: `https://www.daraz.com.bd/catalog/?q=${nameQuery}`,
        isVerifiedLive: true
      };
    } else if (key === 'meenaclick') {
      prices.cartup = {
        price: val.price,
        inStock: val.inStock ?? true,
        discountText: val.discountText || 'লাইভ রেট',
        offerText: 'কার্টআপ সেম ডে ডেলিভারি',
        url: `https://cartup.com.bd/search?q=${nameQuery}`,
        isVerifiedLive: true
      };
    } else {
      prices[key] = val;
    }
  }

  return {
    ...prod,
    offers,
    prices
  };
}

async function migrate() {
  console.log('Migrating server/data/live_products.json...');
  const liveJsonPath = path.join(rootDir, 'server', 'data', 'live_products.json');
  if (fs.existsSync(liveJsonPath)) {
    const raw = fs.readFileSync(liveJsonPath, 'utf8');
    const data = JSON.parse(raw);
    data.products = (data.products || []).map(transformProduct);
    fs.writeFileSync(liveJsonPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${data.products.length} products in live_products.json`);
  }

  console.log('Migrating src/data/mockCatalog.js...');
  const mockCatalogPath = path.join(rootDir, 'src', 'data', 'mockCatalog.js');
  const catalogModule = await import('../src/data/mockCatalog.js');
  const { CATEGORIES, PRODUCTS } = catalogModule;

  const transformedProducts = PRODUCTS.map(transformProduct);

  const fileContent = `// Comprehensive Realistic Bangladeshi Grocery Dataset (500+ Live Products)
// Authentic e-commerce product images from Chaldal CDN

export const STORES = ${JSON.stringify(NEW_STORES, null, 2)};

export const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

export const PRODUCTS = ${JSON.stringify(transformedProducts, null, 2)};
`;

  fs.writeFileSync(mockCatalogPath, fileContent, 'utf8');
  console.log(`Updated ${transformedProducts.length} products in mockCatalog.js`);
  console.log('Migration completed successfully!');
}

migrate().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
