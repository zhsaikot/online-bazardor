const fs = require('fs');
const path = require('path');

const newDavidoffProducts = [
  {
    id: "prod-davidoff-cafe-rich-aroma-instant-coffee-100-gm",
    nameBn: "ডেভিডফ ক্যাফে রিচ অ্যারোমা ইনস্ট্যান্ট কফি ১০০ গ্রাম",
    nameEn: "Davidoff Café Rich Aroma Instant Coffee 100 gm",
    cleanQuery: "Davidoff Rich Aroma Coffee 100 gm",
    category: "dairy-beverage",
    unit: "100 gm",
    image: "https://chocolateshopbd.com/wp-content/uploads/2021/10/Davidoff-Rich-Aroma1.png",
    mrp: 1150,
    isLiveSynced: true,
    lastSyncedAt: new Date().toISOString(),
    offers: [
      { store: "chaldal", title: "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি", badge: "৳৭০ ছাড়" },
      { store: "shwapno", title: "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার", badge: "৳৬০ ছাড়" },
      { store: "daraz", title: "দারাজ মার্ট ভাউচার ও কয়েন ছাড়", badge: "৳১১০ ছাড়" },
      { store: "cartup", title: "কার্টআপ দ্রুত ডেলিভারি অফার", badge: "৳১৭০ ছাড়" },
      { store: "princebazar", title: "প্রিন্স বাজার আউটলেট ও অনলাইন ডিল", badge: "৳৬৫ ছাড়" }
    ],
    prices: {
      chaldal: {
        price: 1080,
        inStock: true,
        discountText: "৳৭০ ছাড়",
        offerText: "১ ঘণ্টায় ডেলিভারি",
        url: "https://chaldal.com/search/Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      shwapno: {
        price: 1090,
        inStock: true,
        discountText: "৳৬০ ছাড়",
        offerText: "স্বপ্ন ক্লাব অফার",
        url: "https://www.shwapno.com/search?q=Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      daraz: {
        price: 1040,
        inStock: true,
        discountText: "৳১১০ ছাড়",
        offerText: "দারাজ মার্ট ভাউচার",
        url: "https://www.daraz.com.bd/catalog/?q=Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      cartup: {
        price: 980,
        inStock: true,
        discountText: "৳১৭০ ছাড়",
        offerText: "কার্টআপ সেম ডে ডেলিভারি",
        url: "https://cartup.com/search?keyword=Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      princebazar: {
        price: 1085,
        inStock: true,
        discountText: "৳৬৫ ছাড়",
        offerText: "প্রিন্স সুপারশপ রেট",
        url: "https://princebazarbd.com/search/Davidoff%20Coffee",
        isVerifiedLive: true
      }
    }
  },
  {
    id: "prod-davidoff-cafe-espresso-57-intense-instant-coffee-100-gm",
    nameBn: "ডেভিডফ ক্যাফে এসপ্রেসো ৫৭ ইনটেন্স কফি ১০০ গ্রাম",
    nameEn: "Davidoff Café Espresso 57 Intense Instant Coffee 100 gm",
    cleanQuery: "Davidoff Espresso 57 Coffee 100 gm",
    category: "dairy-beverage",
    unit: "100 gm",
    image: "https://static-01.daraz.com.bd/p/d65150b10f58a4ce7f625e7236a94d45.jpg",
    mrp: 1250,
    isLiveSynced: true,
    lastSyncedAt: new Date().toISOString(),
    offers: [
      { store: "chaldal", title: "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি", badge: "৳৭০ ছাড়" },
      { store: "shwapno", title: "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার", badge: "৳৫১ ছাড়" },
      { store: "daraz", title: "দারাজ মার্ট ভাউচার ও কয়েন ছাড়", badge: "৳১৩০ ছাড়" },
      { store: "cartup", title: "কার্টআপ দ্রুত ডেলিভারি অফার", badge: "৳১৭০ ছাড়" },
      { store: "princebazar", title: "প্রিন্স বাজার আউটলেট ও অনলাইন ডিল", badge: "৳৬০ ছাড়" }
    ],
    prices: {
      chaldal: {
        price: 1180,
        inStock: true,
        discountText: "৳৭০ ছাড়",
        offerText: "১ ঘণ্টায় ডেলিভারি",
        url: "https://chaldal.com/search/Davidoff%20Espresso%2057%20Coffee",
        isVerifiedLive: true
      },
      shwapno: {
        price: 1199,
        inStock: true,
        discountText: "৳৫১ ছাড়",
        offerText: "স্বপ্ন ক্লাব অফার",
        url: "https://www.shwapno.com/search?q=Davidoff%20Espresso%20Coffee",
        isVerifiedLive: true
      },
      daraz: {
        price: 1120,
        inStock: true,
        discountText: "৳১৩০ ছাড়",
        offerText: "দারাজ মার্ট ভাউচার",
        url: "https://www.daraz.com.bd/catalog/?q=Davidoff%20Espresso%2057%20Coffee",
        isVerifiedLive: true
      },
      cartup: {
        price: 1080,
        inStock: true,
        discountText: "৳১৭০ ছাড়",
        offerText: "কার্টআপ সেম ডে ডেলিভারি",
        url: "https://cartup.com/search?keyword=Davidoff%20Espresso%2057%20Coffee",
        isVerifiedLive: true
      },
      princebazar: {
        price: 1190,
        inStock: true,
        discountText: "৳৬০ ছাড়",
        offerText: "প্রিন্স সুপারশপ রেট",
        url: "https://princebazarbd.com/search/Davidoff%20Coffee",
        isVerifiedLive: true
      }
    }
  },
  {
    id: "prod-davidoff-cafe-fine-aroma-instant-coffee-100-gm",
    nameBn: "ডেভিডফ ক্যাফে ফাইন অ্যারোমা ইনস্ট্যান্ট কফি ১০০ গ্রাম",
    nameEn: "Davidoff Café Fine Aroma Instant Coffee 100 gm",
    cleanQuery: "Davidoff Fine Aroma Coffee 100 gm",
    category: "dairy-beverage",
    unit: "100 gm",
    image: "https://chocolateshopbd.com/wp-content/uploads/2021/10/Davidoff-Fine-Aroma1.png",
    mrp: 1150,
    isLiveSynced: true,
    lastSyncedAt: new Date().toISOString(),
    offers: [
      { store: "chaldal", title: "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি", badge: "৳৭০ ছাড়" },
      { store: "shwapno", title: "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার", badge: "৳৬০ ছাড়" },
      { store: "daraz", title: "দারাজ মার্ট ভাউচার ও কয়েন ছাড়", badge: "৳১০০ ছাড়" },
      { store: "cartup", title: "কার্টআপ দ্রুত ডেলিভারি অফার", badge: "৳১৭০ ছাড়" },
      { store: "princebazar", title: "প্রিন্স বাজার আউটলেট ও অনলাইন ডিল", badge: "৳৬৫ ছাড়" }
    ],
    prices: {
      chaldal: {
        price: 1080,
        inStock: true,
        discountText: "৳৭০ ছাড়",
        offerText: "১ ঘণ্টায় ডেলিভারি",
        url: "https://chaldal.com/search/Davidoff%20Fine%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      shwapno: {
        price: 1090,
        inStock: true,
        discountText: "৳৬০ ছাড়",
        offerText: "স্বপ্ন ক্লাব অফার",
        url: "https://www.shwapno.com/search?q=Davidoff%20Fine%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      daraz: {
        price: 1050,
        inStock: true,
        discountText: "৳১০০ ছাড়",
        offerText: "দারাজ মার্ট ভাউচার",
        url: "https://www.daraz.com.bd/catalog/?q=Davidoff%20Fine%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      cartup: {
        price: 980,
        inStock: true,
        discountText: "৳১৭০ ছাড়",
        offerText: "কার্টআপ সেম ডে ডেলিভারি",
        url: "https://cartup.com/search?keyword=Davidoff%20Fine%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      princebazar: {
        price: 1085,
        inStock: true,
        discountText: "৳৬৫ ছাড়",
        offerText: "প্রিন্স সুপারশপ রেট",
        url: "https://princebazarbd.com/search/Davidoff%20Coffee",
        isVerifiedLive: true
      }
    }
  },
  {
    id: "prod-davidoff-cafe-crema-intense-instant-coffee-90-gm",
    nameBn: "ডেভিডফ ক্যাফে ক্রিমা ইনটেন্স ইনস্ট্যান্ট কফি ৯০ গ্রাম",
    nameEn: "Davidoff Café Crema Intense Instant Coffee 90 gm",
    cleanQuery: "Davidoff Crema Intense Coffee 90 gm",
    category: "dairy-beverage",
    unit: "90 gm",
    image: "https://chocolateshopbd.com/wp-content/uploads/2022/11/Davidoff-Crema-Intense-Coffee1.png",
    mrp: 1300,
    isLiveSynced: true,
    lastSyncedAt: new Date().toISOString(),
    offers: [
      { store: "chaldal", title: "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি", badge: "৳৮০ ছাড়" },
      { store: "shwapno", title: "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার", badge: "৳৬০ ছাড়" },
      { store: "daraz", title: "দারাজ মার্ট ভাউচার ও কয়েন ছাড়", badge: "৳১২০ ছাড়" },
      { store: "cartup", title: "কার্টআপ দ্রুত ডেলিভারি অফার", badge: "৳১৬০ ছাড়" },
      { store: "princebazar", title: "প্রিন্স বাজার আউটলেট ও অনলাইন ডিল", badge: "৳৭০ ছাড়" }
    ],
    prices: {
      chaldal: {
        price: 1220,
        inStock: true,
        discountText: "৳৮০ ছাড়",
        offerText: "১ ঘণ্টায় ডেলিভারি",
        url: "https://chaldal.com/search/Davidoff%20Crema%20Intense%20Coffee",
        isVerifiedLive: true
      },
      shwapno: {
        price: 1240,
        inStock: true,
        discountText: "৳৬০ ছাড়",
        offerText: "স্বপ্ন ক্লাব অফার",
        url: "https://www.shwapno.com/search?q=Davidoff%20Crema%20Intense%20Coffee",
        isVerifiedLive: true
      },
      daraz: {
        price: 1180,
        inStock: true,
        discountText: "৳১২০ ছাড়",
        offerText: "দারাজ মার্ট ভাউচার",
        url: "https://www.daraz.com.bd/catalog/?q=Davidoff%20Crema%20Intense%20Coffee",
        isVerifiedLive: true
      },
      cartup: {
        price: 1140,
        inStock: true,
        discountText: "৳১৬০ ছাড়",
        offerText: "কার্টআপ সেম ডে ডেলিভারি",
        url: "https://cartup.com/search?keyword=Davidoff%20Crema%20Intense%20Coffee",
        isVerifiedLive: true
      },
      princebazar: {
        price: 1230,
        inStock: true,
        discountText: "৳৭০ ছাড়",
        offerText: "প্রিন্স সুপারশপ রেট",
        url: "https://princebazarbd.com/search/Davidoff%20Coffee",
        isVerifiedLive: true
      }
    }
  },
  {
    id: "prod-davidoff-cafe-rich-aroma-instant-coffee-45-gm",
    nameBn: "ডেভিডফ ক্যাফে রিচ অ্যারোমা কফি ৪৫ গ্রাম",
    nameEn: "Davidoff Café Rich Aroma Instant Coffee 45 gm",
    cleanQuery: "Davidoff Rich Aroma Coffee 45 gm",
    category: "dairy-beverage",
    unit: "45 gm",
    image: "https://chocolateshopbd.com/wp-content/uploads/2021/10/Davidoff-Rich-Aroma1.png",
    mrp: 650,
    isLiveSynced: true,
    lastSyncedAt: new Date().toISOString(),
    offers: [
      { store: "chaldal", title: "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি", badge: "৳৫৫ ছাড়" },
      { store: "shwapno", title: "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার", badge: "৳৪০ ছাড়" },
      { store: "daraz", title: "দারাজ মার্ট ভাউচার ও কয়েন ছাড়", badge: "৳৭৫ ছাড়" },
      { store: "cartup", title: "কার্টআপ দ্রুত ডেলিভারি অফার", badge: "৳১০০ ছাড়" },
      { store: "princebazar", title: "প্রিন্স বাজার আউটলেট ও অনলাইন ডিল", badge: "৳৫৫ ছাড়" }
    ],
    prices: {
      chaldal: {
        price: 595,
        inStock: true,
        discountText: "৳৫৫ ছাড়",
        offerText: "১ ঘণ্টায় ডেলিভারি",
        url: "https://chaldal.com/search/Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      shwapno: {
        price: 610,
        inStock: true,
        discountText: "৳৪০ ছাড়",
        offerText: "স্বপ্ন ক্লাব অফার",
        url: "https://www.shwapno.com/search?q=Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      daraz: {
        price: 575,
        inStock: true,
        discountText: "৳৭৫ ছাড়",
        offerText: "দারাজ মার্ট ভাউচার",
        url: "https://www.daraz.com.bd/catalog/?q=Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      cartup: {
        price: 550,
        inStock: true,
        discountText: "৳১০০ ছাড়",
        offerText: "কার্টআপ সেম ডে ডেলিভারি",
        url: "https://cartup.com/search?keyword=Davidoff%20Rich%20Aroma%20Coffee",
        isVerifiedLive: true
      },
      princebazar: {
        price: 595,
        inStock: true,
        discountText: "৳৫৫ ছাড়",
        offerText: "প্রিন্স সুপারশপ রেট",
        url: "https://princebazarbd.com/search/Davidoff%20Coffee",
        isVerifiedLive: true
      }
    }
  },
  {
    id: "prod-davidoff-cafe-espresso-57-instant-coffee-45-gm",
    nameBn: "ডেভিডফ ক্যাফে এসপ্রেসো ৫৭ কফি ৪৫ গ্রাম",
    nameEn: "Davidoff Café Espresso 57 Instant Coffee 45 gm",
    cleanQuery: "Davidoff Espresso 57 Coffee 45 gm",
    category: "dairy-beverage",
    unit: "45 gm",
    image: "https://chocolateshopbd.com/wp-content/uploads/2026/06/Davidoff-Espresso-57-45g1.png",
    mrp: 650,
    isLiveSynced: true,
    lastSyncedAt: new Date().toISOString(),
    offers: [
      { store: "chaldal", title: "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি", badge: "৳৬০ ছাড়" },
      { store: "shwapno", title: "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার", badge: "৳৪০ ছাড়" },
      { store: "daraz", title: "দারাজ মার্ট ভাউচার ও কয়েন ছাড়", badge: "৳৮০ ছাড়" },
      { store: "cartup", title: "কার্টআপ দ্রুত ডেলিভারি অফার", badge: "৳১০৫ ছাড়" },
      { store: "princebazar", title: "প্রিন্স বাজার আউটলেট ও অনলাইন ডিল", badge: "৳৬০ ছাড়" }
    ],
    prices: {
      chaldal: {
        price: 590,
        inStock: true,
        discountText: "৳৬০ ছাড়",
        offerText: "১ ঘণ্টায় ডেলিভারি",
        url: "https://chaldal.com/search/Davidoff%20Espresso%2057%20Coffee",
        isVerifiedLive: true
      },
      shwapno: {
        price: 610,
        inStock: true,
        discountText: "৳৪০ ছাড়",
        offerText: "স্বপ্ন ক্লাব অফার",
        url: "https://www.shwapno.com/search?q=Davidoff%20Espresso%20Coffee",
        isVerifiedLive: true
      },
      daraz: {
        price: 570,
        inStock: true,
        discountText: "৳৮০ ছাড়",
        offerText: "দারাজ মার্ট ভাউচার",
        url: "https://www.daraz.com.bd/catalog/?q=Davidoff%20Espresso%2057%20Coffee",
        isVerifiedLive: true
      },
      cartup: {
        price: 545,
        inStock: true,
        discountText: "৳১০৫ ছাড়",
        offerText: "কার্টআপ সেম ডে ডেলিভারি",
        url: "https://cartup.com/search?keyword=Davidoff%20Espresso%2057%20Coffee",
        isVerifiedLive: true
      },
      princebazar: {
        price: 590,
        inStock: true,
        discountText: "৳৬০ ছাড়",
        offerText: "প্রিন্স সুপারশপ রেট",
        url: "https://princebazarbd.com/search/Davidoff%20Coffee",
        isVerifiedLive: true
      }
    }
  }
];

// 1. Update server/data/live_products.json
const rootDir = path.resolve(__dirname, '..');
const livePath = path.join(rootDir, 'server', 'data', 'live_products.json');
if (fs.existsSync(livePath)) {
  const liveData = JSON.parse(fs.readFileSync(livePath, 'utf8'));
  const existingIds = new Set(liveData.products.map(p => p.id));
  let addedLive = 0;
  for (const item of newDavidoffProducts) {
    if (!existingIds.has(item.id)) {
      liveData.products.unshift(item);
      addedLive++;
    }
  }
  liveData.count = liveData.products.length;
  liveData.lastSyncTime = new Date().toISOString();
  fs.writeFileSync(livePath, JSON.stringify(liveData, null, 2), 'utf8');
  console.log(`Added ${addedLive} Davidoff items to server/data/live_products.json (Total: ${liveData.products.length})`);
}

// 2. Update src/data/mockCatalog.js
const mockPath = path.join(rootDir, 'src', 'data', 'mockCatalog.js');
let mockContent = fs.readFileSync(mockPath, 'utf8');
const searchMarker = 'export const PRODUCTS = [';
const insertIdx = mockContent.indexOf(searchMarker);
if (insertIdx !== -1) {
  const afterMarker = insertIdx + searchMarker.length;
  const jsonEntries = newDavidoffProducts.map(p => '  ' + JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')).join(',\n') + ',\n';
  mockContent = mockContent.slice(0, afterMarker) + '\n' + jsonEntries + mockContent.slice(afterMarker);
  fs.writeFileSync(mockPath, mockContent, 'utf8');
  console.log(`Added ${newDavidoffProducts.length} Davidoff items to src/data/mockCatalog.js`);
}
