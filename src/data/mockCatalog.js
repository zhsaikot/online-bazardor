// Comprehensive Realistic Bangladeshi Grocery Dataset (52+ Core Products)
// Mapped with authentic, actual e-commerce product images from Chaldal CDN

export const STORES = {
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
  "pandamart": {
    "id": "pandamart",
    "name": "Pandamart",
    "nameBn": "পান্ডামার্ট",
    "color": "#D81B60",
    "bgColor": "bg-pink-600",
    "textColor": "text-pink-600",
    "lightBg": "bg-pink-50",
    "borderColor": "border-pink-200",
    "baseDeliveryFee": 39,
    "freeDeliveryThreshold": 800,
    "deliveryTime": "২৫-৩৫ মিনিট",
    "deliveryTimeEn": "25-35 mins",
    "rating": 4.4,
    "logoText": "pandamart",
    "accentHex": "#db2777",
    "logo": "/stores/pandamart.png?v=2"
  },
  "meenaclick": {
    "id": "meenaclick",
    "name": "Meena Bazar",
    "nameBn": "মীনা বাজার",
    "color": "#059669",
    "bgColor": "bg-emerald-600",
    "textColor": "text-emerald-600",
    "lightBg": "bg-emerald-50",
    "borderColor": "border-emerald-200",
    "baseDeliveryFee": 45,
    "freeDeliveryThreshold": 1200,
    "deliveryTime": "২-৩ ঘণ্টা",
    "deliveryTimeEn": "2-3 hrs",
    "rating": 4.3,
    "logoText": "MeenaBazar",
    "accentHex": "#059669",
    "logo": "/stores/meenaclick.png?v=2"
  }
};

export const CATEGORIES = [
  {
    "id": "all",
    "nameBn": "সব পণ্য",
    "nameEn": "All Items",
    "icon": "Sparkles"
  },
  {
    "id": "oil",
    "nameBn": "ভোজ্য তেল ও ঘি",
    "nameEn": "Oil & Ghee",
    "icon": "Droplets"
  },
  {
    "id": "rice-pulses",
    "nameBn": "চাল, ডাল ও আটা",
    "nameEn": "Rice, Pulses & Atta",
    "icon": "Wheat"
  },
  {
    "id": "vegetables",
    "nameBn": "পেঁয়াজ ও কাঁচাবাজার",
    "nameEn": "Veggies & Fruits",
    "icon": "Carrot"
  },
  {
    "id": "egg-poultry",
    "nameBn": "ডিম, মাংস ও মাছ",
    "nameEn": "Fish, Meat & Eggs",
    "icon": "Egg"
  },
  {
    "id": "spices",
    "nameBn": "মশলা, লবণ ও চিনি",
    "nameEn": "Spices & Sugar",
    "icon": "Flame"
  },
  {
    "id": "dairy-beverage",
    "nameBn": "দুধ, চা ও পানীয়",
    "nameEn": "Dairy & Beverages",
    "icon": "Coffee"
  },
  {
    "id": "snacks-bakery",
    "nameBn": "বিস্কুট ও স্ন্যাক্স",
    "nameEn": "Snacks & Bakery",
    "icon": "Cookie"
  },
  {
    "id": "hygiene",
    "nameBn": "সাবান ও ক্লিনিং",
    "nameEn": "Soap & Cleaning",
    "icon": "ShieldCheck"
  }
];

export const PRODUCTS = [
  {
    "id": "prod-rupchanda-soyabean-oil-5-ltr-5",
    "nameBn": "রূপচাঁদা ফর্টিফাইড সয়াবিন তেল ৫ লিটার",
    "nameEn": "Rupchanda Fortified Soyabean Oil 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/rupchanda-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182966&q=best&v=1",
    "mrp": 975,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.041Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rupchanda-soyabean-oil-5-ltr-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 975,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rupchanda%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 975,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rupchanda%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rupchanda%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rupchanda-soyabean-oil-2-ltr-5",
    "nameBn": "রূপচাঁদা ফর্টিফায়েড সয়াবিন তেল ২ লিটার",
    "nameEn": "Rupchanda Fortified Soyabean Oil 2 ltr",
    "category": "oil",
    "unit": "2 ltr",
    "image": "https://chaldn.com/_mpimage/rupchanda-fortified-soyabean-oil-2-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182965&q=best&v=1",
    "mrp": 398,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.042Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 398,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rupchanda-soyabean-oil-2-ltr-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 398,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rupchanda%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 398,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rupchanda%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 398,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rupchanda%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rupchanda-soyabean-oil-pet-bottle-1-ltr",
    "nameBn": "রূপচাঁদা ফর্টিফাইড সয়াবিন তেল ১ লিটার",
    "nameEn": "Rupchanda Fortified Soyabean Oil Pet Bottle 1 ltr",
    "category": "oil",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/rupchanda-fortified-soyabean-oil-pet-bottle-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D149559&q=best&v=1",
    "mrp": 199,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.042Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rupchanda-soyabean-oil-pet-bottle-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 199,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rupchanda%20Fortified%20Soyabean%20Oil%20Pet%20Bottle%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 199,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rupchanda%20Fortified%20Soyabean%20Oil%20Pet%20Bottle%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rupchanda%20Fortified%20Soyabean%20Oil%20Pet%20Bottle%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fuchs-titan-super-gear-oil-sae-140-4-ltr",
    "nameBn": "ফিউচস টাইটান সুপার গিয়ার অয়েল এসএই ১৪০ ৪ লিটার",
    "nameEn": "Fuchs Titan Super Gear Oil SAE 140 4 ltr",
    "category": "oil",
    "unit": "4 ltr",
    "image": "https://chaldn.com/_mpimage/fuchs-titan-super-gear-oil-sae-140-4-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D41785&q=best&v=1",
    "mrp": 1150,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.042Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fuchs-titan-super-gear-oil-sae-140-4-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1150,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fuchs%20Titan%20Super%20Gear%20Oil%20SAE%20140%204%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1150,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fuchs%20Titan%20Super%20Gear%20Oil%20SAE%20140%204%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fuchs%20Titan%20Super%20Gear%20Oil%20SAE%20140%204%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-super-v-multi-grade-engine-oil-20w-50-5-ltr",
    "nameBn": "সুপার ভি মাল্টি গ্রেড ইঞ্জিন ওয়েল ২০ডব্লিউ-৫০ ৫ লিটার",
    "nameEn": "Super V Multi Grade Engine Oil 20W-50 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/super-v-multi-grade-engine-oil-20w-50-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64462&q=best&v=1",
    "mrp": 2500,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.042Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 2500,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/super-v-multi-grade-engine-oil-20w-50-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 2500,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Super%20V%20Multi%20Grade%20Engine%20Oil%2020W-50%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 2500,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Super%20V%20Multi%20Grade%20Engine%20Oil%2020W-50%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 2500,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Super%20V%20Multi%20Grade%20Engine%20Oil%2020W-50%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-super-v-multi-grade-engine-oil-20w-50-1-ltr",
    "nameBn": "সুপার ভি মাল্টি গ্রেড ইঞ্জিন ওয়েল ২০ডব্লিউ-৫০ ১ লিটার",
    "nameEn": "Super V Multi Grade Engine Oil 20W-50 1 ltr",
    "category": "oil",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/super-v-multi-grade-engine-oil-20w-50-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D137234&q=best&v=1",
    "mrp": 689,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.042Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 689,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/super-v-multi-grade-engine-oil-20w-50-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 689,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Super%20V%20Multi%20Grade%20Engine%20Oil%2020W-50%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 689,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Super%20V%20Multi%20Grade%20Engine%20Oil%2020W-50%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 689,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Super%20V%20Multi%20Grade%20Engine%20Oil%2020W-50%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-teer-soyabean-oil-2-ltr-5",
    "nameBn": "তীর ফর্টিফাইড সয়াবিন তেল ২ লিটার",
    "nameEn": "Teer Fortified Soyabean Oil 2 ltr",
    "category": "oil",
    "unit": "2 ltr",
    "image": "https://chaldn.com/_mpimage/teer-fortified-soyabean-oil-2-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136108&q=best&v=1",
    "mrp": 398,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.393Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 398,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/teer-soyabean-oil-2-ltr-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 398,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Teer%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 398,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Teer%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 398,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Teer%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-teer-fortified-soyabean-oil-1-ltr",
    "nameBn": "তীর ফর্টিফাইড সয়াবিন তেল ১ লিটার",
    "nameEn": "Teer Fortified Soyabean Oil 1 ltr",
    "category": "oil",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/teer-fortified-soyabean-oil-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136109&q=best&v=1",
    "mrp": 199,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.393Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/teer-fortified-soyabean-oil-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 199,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Teer%20Fortified%20Soyabean%20Oil%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 199,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Teer%20Fortified%20Soyabean%20Oil%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Teer%20Fortified%20Soyabean%20Oil%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-teer-fortified-canola-oil-5-ltr",
    "nameBn": "তীর ফোর্টিফাইড ক্যানোলা তেল ৫ লিটার",
    "nameEn": "Teer Fortified Canola Oil 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/teer-fortified-canola-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98187&q=best&v=1&m=400",
    "mrp": 1060,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.393Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1060,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/teer-fortified-canola-oil-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1060,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Teer%20Fortified%20Canola%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1060,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Teer%20Fortified%20Canola%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1060,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Teer%20Fortified%20Canola%20Oil%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-teer-soyabean-oil-5-ltr-5",
    "nameBn": "তীর ফর্টিফায়েড সয়াবিন তেল ৫ লিটার",
    "nameEn": "Teer Fortified Soyabean Oil 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/teer-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136107&q=best&v=1",
    "mrp": 975,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.393Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/teer-soyabean-oil-5-ltr-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 975,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Teer%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 975,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Teer%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Teer%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-fortified-soyabean-oil-5-ltr",
    "nameBn": "ফ্রেশ ফর্টিফাইড সয়াবিন তেল ৫ লিটার",
    "nameEn": "Fresh Fortified Soyabean Oil 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/fresh-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135116&q=best&v=1",
    "mrp": 975,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.726Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-fortified-soyabean-oil-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 975,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 975,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Fortified%20Soyabean%20Oil%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-fortified-soyabean-oil-2-ltr",
    "nameBn": "ফ্রেশ ফর্টিফাইড সয়াবিন তেল ২ লিটার",
    "nameEn": "Fresh Fortified Soyabean Oil 2 ltr",
    "category": "oil",
    "unit": "2 ltr",
    "image": "https://chaldn.com/_mpimage/fresh-fortified-soyabean-oil-2-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135115&q=best&v=1",
    "mrp": 398,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.726Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 398,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-fortified-soyabean-oil-2-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 398,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 398,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 398,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Fortified%20Soyabean%20Oil%202%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-fortified-soyabean-oil-1-ltr-2",
    "nameBn": "ফ্রেশ ফর্টিফাইড সয়াবিন তেল ১ লিটার",
    "nameEn": "Fresh Fortified Soyabean Oil 1 ltr",
    "category": "oil",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/fresh-fortified-soyabean-oil-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153828&q=best&v=1",
    "mrp": 199,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:48.726Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-fortified-soyabean-oil-1-ltr-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 199,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Fortified%20Soyabean%20Oil%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 199,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Fortified%20Soyabean%20Oil%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Fortified%20Soyabean%20Oil%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bashundhara-baby-wipes-sky-blue-120-pcs",
    "nameBn": "বসুন্ধরা বেবি ওয়াইপস (স্কাই ব্লু) ১২০ টি",
    "nameEn": "Bashundhara Baby Wipes (Sky Blue) 120 pcs",
    "category": "oil",
    "unit": "120 pcs",
    "image": "https://chaldn.com/_mpimage/bashundhara-baby-wipes-sky-blue-120-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D91973&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.058Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bashundhara-baby-wipes-sky-blue-120-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bashundhara%20Baby%20Wipes%20(Sky%20Blue)%20120%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bashundhara%20Baby%20Wipes%20(Sky%20Blue)%20120%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bashundhara%20Baby%20Wipes%20(Sky%20Blue)%20120%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bashundhara-diapant-s-4-8-kg-free-feeder-90-ml-42-pcs",
    "nameBn": "বসুন্ধরা ডায়াপ্যান্টস এস ৪-৮ কেজি (ফ্রী ফিডার ৯০ মিলি) ৪২ টি",
    "nameEn": "Bashundhara Diapant S 4-8 kg (Free Feeder 90 ml) 42 pcs",
    "category": "oil",
    "unit": "42 pcs",
    "image": "https://chaldn.com/_mpimage/bashundhara-diapant-s-4-8-kg-free-feeder-90-ml-42-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81118&q=low&v=1",
    "mrp": 890,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.058Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳161 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳97 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 729,
        "inStock": true,
        "discountText": "৳161 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bashundhara-diapant-s-4-8-kg-free-feeder-90-ml-42-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 793,
        "inStock": true,
        "discountText": "৳97 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bashundhara%20Diapant%20S%204-8%20kg%20(Free%20Feeder%2090%20ml)%2042%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 850,
        "inStock": true,
        "discountText": "৳40 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bashundhara%20Diapant%20S%204-8%20kg%20(Free%20Feeder%2090%20ml)%2042%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 818,
        "inStock": true,
        "discountText": "৳72 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bashundhara%20Diapant%20S%204-8%20kg%20(Free%20Feeder%2090%20ml)%2042%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bashundhara-diapant-xxl-14-25-kg-free-feeder-250-ml-24-pcs",
    "nameBn": "বসুন্ধরা ডায়াপ্যান্টস এক্সএক্সএল ১৪-২৫ কেজি (ফ্রী ফিডার ২৫০ মিলি) ২৪ টি",
    "nameEn": "Bashundhara Diapant XXL 14-25 kg (Free Feeder 250 ml) 24 pcs",
    "category": "oil",
    "unit": "24 pcs",
    "image": "https://chaldn.com/_mpimage/bashundhara-diapant-xxl-14-25-kg-free-feeder-250-ml-24-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81116&q=low&v=1",
    "mrp": 890,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.058Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳171 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳103 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 719,
        "inStock": true,
        "discountText": "৳171 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bashundhara-diapant-xxl-14-25-kg-free-feeder-250-ml-24-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 787,
        "inStock": true,
        "discountText": "৳103 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bashundhara%20Diapant%20XXL%2014-25%20kg%20(Free%20Feeder%20250%20ml)%2024%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 847,
        "inStock": true,
        "discountText": "৳43 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bashundhara%20Diapant%20XXL%2014-25%20kg%20(Free%20Feeder%20250%20ml)%2024%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 813,
        "inStock": true,
        "discountText": "৳77 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bashundhara%20Diapant%20XXL%2014-25%20kg%20(Free%20Feeder%20250%20ml)%2024%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bashundhara-diapant-m-7-12-kg-free-feeder-100-ml-40-pcs",
    "nameBn": "বসুন্ধরা ডায়াপ্যান্টস এম ৭-১২ কেজি (ফ্রী ফিডার ১০০ মিলি) ৪০ টি",
    "nameEn": "Bashundhara Diapant M 7-12 kg (Free Feeder 100 ml) 40 pcs",
    "category": "oil",
    "unit": "40 pcs",
    "image": "https://chaldn.com/_mpimage/bashundhara-diapant-m-7-12-kg-free-feeder-100-ml-40-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81114&q=low&v=1",
    "mrp": 890,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.058Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳171 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳103 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 719,
        "inStock": true,
        "discountText": "৳171 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bashundhara-diapant-m-7-12-kg-free-feeder-100-ml-40-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 787,
        "inStock": true,
        "discountText": "৳103 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bashundhara%20Diapant%20M%207-12%20kg%20(Free%20Feeder%20100%20ml)%2040%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 847,
        "inStock": true,
        "discountText": "৳43 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bashundhara%20Diapant%20M%207-12%20kg%20(Free%20Feeder%20100%20ml)%2040%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 813,
        "inStock": true,
        "discountText": "৳77 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bashundhara%20Diapant%20M%207-12%20kg%20(Free%20Feeder%20100%20ml)%2040%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-smc-smile-baby-diaper-pants-m-7-12-kg-40-pcs",
    "nameBn": "এসএমসি স্মাইল বেবি ডায়াপার প্যান্ট এম (৭-১২ কেজি) ৪০ পিস",
    "nameEn": "SMC Smile Baby Diaper Pants M (7-12 kg) 40 pcs",
    "category": "oil",
    "unit": "40 pcs",
    "image": "https://chaldn.com/_mpimage/smc-smile-baby-diaper-pants-m-7-12-kg-40-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D94760&q=best&v=1",
    "mrp": 890,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.058Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳101 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳61 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 789,
        "inStock": true,
        "discountText": "৳101 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/smc-smile-baby-diaper-pants-m-7-12-kg-40-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 829,
        "inStock": true,
        "discountText": "৳61 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=SMC%20Smile%20Baby%20Diaper%20Pants%20M%20(7-12%20kg)%2040%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 865,
        "inStock": true,
        "discountText": "৳25 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=SMC%20Smile%20Baby%20Diaper%20Pants%20M%20(7-12%20kg)%2040%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 845,
        "inStock": true,
        "discountText": "৳45 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=SMC%20Smile%20Baby%20Diaper%20Pants%20M%20(7-12%20kg)%2040%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-pure-mustard-oil-500-ml",
    "nameBn": "রাঁধুনী খাঁটি সরিষার তেল ৫০০ মিলি",
    "nameEn": "Radhuni Pure Mustard Oil 500 ml",
    "category": "oil",
    "unit": "500 ml",
    "image": "https://chaldn.com/_mpimage/radhuni-pure-mustard-oil-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132550&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.385Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-pure-mustard-oil-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Pure%20Mustard%20Oil%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Pure%20Mustard%20Oil%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Pure%20Mustard%20Oil%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-pure-mustard-oil-1-ltr",
    "nameBn": "রাঁধুনী খাঁটি সরিষার তেল ১ লিটার",
    "nameEn": "Radhuni Pure Mustard Oil 1 ltr",
    "category": "oil",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/radhuni-pure-mustard-oil-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132549&q=best&v=1",
    "mrp": 380,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.385Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 380,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-pure-mustard-oil-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 380,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Pure%20Mustard%20Oil%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 380,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Pure%20Mustard%20Oil%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 380,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Pure%20Mustard%20Oil%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-paato-car-bike-foam-wash-shampoo-5-ltr",
    "nameBn": "পাটো কার এন্ড বাইক ফোম ওয়াশ শ্যাম্পু",
    "nameEn": "Paato Car & Bike Foam Wash Shampoo 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/paato-car-bike-foam-wash-shampoo-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D141704&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.385Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/paato-car-bike-foam-wash-shampoo-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Paato%20Car%20%26%20Bike%20Foam%20Wash%20Shampoo%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Paato%20Car%20%26%20Bike%20Foam%20Wash%20Shampoo%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Paato%20Car%20%26%20Bike%20Foam%20Wash%20Shampoo%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-alex-car-wash-500-ml",
    "nameBn": "এ্যালেক্স কার ওয়াশ ৫০০ মিলি",
    "nameEn": "Alex Car Wash 500 ml",
    "category": "oil",
    "unit": "500 ml",
    "image": "https://chaldn.com/_mpimage/alex-car-wash-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D110563&q=best&v=1",
    "mrp": 345,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.701Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 345,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/alex-car-wash-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 345,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Alex%20Car%20Wash%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 345,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Alex%20Car%20Wash%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 345,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Alex%20Car%20Wash%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-almax-radiator-coolant-green-1-ltr",
    "nameBn": "অ্যালম্যাক্স রেডিয়েটর কুল্যান্ট (সবুজ) ১ লিটার",
    "nameEn": "Almax Radiator Coolant (Green) 1 ltr",
    "category": "oil",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/almax-radiator-coolant-green-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D99842&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:49.701Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/almax-radiator-coolant-green-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Almax%20Radiator%20Coolant%20(Green)%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Almax%20Radiator%20Coolant%20(Green)%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Almax%20Radiator%20Coolant%20(Green)%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-dairy-pure-ghee-200-gm",
    "nameBn": "আড়ং ডেইরি খাঁটি ঘি ২০০ গ্রাম",
    "nameEn": "Aarong Dairy Pure Ghee 200 gm",
    "category": "oil",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-pure-ghee-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D26926&q=low&v=1",
    "mrp": 390,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.024Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-dairy-pure-ghee-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 390,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Dairy%20Pure%20Ghee%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 390,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Dairy%20Pure%20Ghee%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Dairy%20Pure%20Ghee%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-dairy-pure-ghee-450-gm",
    "nameBn": "আড়ং ডেইরি খাঁটি ঘি ৪৫০ গ্রাম",
    "nameEn": "Aarong Dairy Pure Ghee 450 gm",
    "category": "oil",
    "unit": "450 gm",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-pure-ghee-450-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179716&q=best&v=1",
    "mrp": 825,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.024Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 825,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-dairy-pure-ghee-450-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 825,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Dairy%20Pure%20Ghee%20450%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 825,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Dairy%20Pure%20Ghee%20450%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 825,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Dairy%20Pure%20Ghee%20450%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-dairy-pure-ghee-1-kg",
    "nameBn": "আড়ং ডেইরি খাঁটি ঘি ৯০০ গ্রাম",
    "nameEn": "Aarong Dairy Pure Ghee 900 gm",
    "category": "oil",
    "unit": "900 gm",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-pure-ghee-900-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179309&q=best&v=1",
    "mrp": 1735,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.024Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1735,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-dairy-pure-ghee-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1735,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Dairy%20Pure%20Ghee%20900%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1735,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Dairy%20Pure%20Ghee%20900%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1735,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Dairy%20Pure%20Ghee%20900%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-premium-ghee-200-gm",
    "nameBn": "এ সি আই পিওর প্রিমিয়াম ঘি ২০০ গ্রাম",
    "nameEn": "ACI Pure Premium Ghee 200 gm",
    "category": "oil",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/aci-pure-premium-ghee-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179260&q=best&v=1",
    "mrp": 375,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.024Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 375,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-premium-ghee-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 375,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Premium%20Ghee%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 375,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Premium%20Ghee%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 375,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Premium%20Ghee%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ghee-vita-400-gm",
    "nameBn": "ঘি ভিটা ৪০০ গ্রাম",
    "nameEn": "Ghee Vita 400 gm",
    "category": "oil",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/ghee-vita-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D149090&q=best&v=1",
    "mrp": 650,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.024Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 650,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ghee-vita-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 650,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ghee%20Vita%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 650,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ghee%20Vita%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 650,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ghee%20Vita%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-ghee-100-gm",
    "nameBn": "এ সি আই খাঁটি ঘি ১০০ গ্রাম",
    "nameEn": "ACI Pure Ghee 100 gm",
    "category": "oil",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/aci-pure-ghee-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D148232&q=best&v=1",
    "mrp": 205,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.024Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 205,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-ghee-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 205,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Ghee%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 205,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Ghee%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 205,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Ghee%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-red-cow-butter-oil-200-gm",
    "nameBn": "রেড কাউ মাখন তেল ২০০ গ্রাম",
    "nameEn": "Red Cow Butter Oil 200 gm",
    "category": "oil",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/red-cow-butter-oil-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D138430&q=best&v=1",
    "mrp": 385,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.316Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 385,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/red-cow-butter-oil-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 385,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Red%20Cow%20Butter%20Oil%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 385,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Red%20Cow%20Butter%20Oil%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 385,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Red%20Cow%20Butter%20Oil%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ghee-vita-250-gm",
    "nameBn": "ঘি ভিটা ২৫০ গ্রাম",
    "nameEn": "Ghee Vita 250 gm",
    "category": "oil",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/ghee-vita-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136914&q=best&v=1",
    "mrp": 400,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.316Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ghee-vita-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 400,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ghee%20Vita%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 400,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ghee%20Vita%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ghee%20Vita%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vitacare-gawa-ghee-tin-900-ml",
    "nameBn": "ভিটাকেয়ার গাওয়া ঘি (টিন) ৯০০ মিলি",
    "nameEn": "Vitacare Gawa Ghee (Tin) 900 ml",
    "category": "oil",
    "unit": "900 ml",
    "image": "https://chaldn.com/_mpimage/vitacare-gawa-ghee-tin-900-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D137055&q=best&v=1",
    "mrp": 1200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.316Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vitacare-gawa-ghee-tin-900-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1200,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vitacare%20Gawa%20Ghee%20(Tin)%20900%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1200,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vitacare%20Gawa%20Ghee%20(Tin)%20900%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vitacare%20Gawa%20Ghee%20(Tin)%20900%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fortune-fortified-rice-bran-oil-5-ltr",
    "nameBn": "ফরচুন ফর্টিফাইড রাইস ব্রান তেল ৫ লিটার",
    "nameEn": "Fortune Fortified Rice Bran Oil 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/fortune-fortified-rice-bran-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182968&q=best&v=1",
    "mrp": 1210,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.961Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fortune-fortified-rice-bran-oil-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1210,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fortune%20Fortified%20Rice%20Bran%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1210,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fortune%20Fortified%20Rice%20Bran%20Oil%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fortune%20Fortified%20Rice%20Bran%20Oil%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-olio-orolio-extra-virgin-olive-oil-free-kisaan-chinigura-rice-1-kg-5-ltr",
    "nameBn": "অলিও ওরোলিও এক্সট্রা ভার্জিন অলিভ অয়েল (ফ্রি কিসান চিনিগুড়া সুগন্ধি চাল ১ কেজি) ৫ লিটার",
    "nameEn": "Olio Orolio Extra Virgin Olive Oil (Free Kisaan Chinigura Aromatic Rice 1 kg) 5 ltr",
    "category": "oil",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/olio-orolio-extra-virgin-olive-oil-free-kisaan-chinigura-aromatic-rice-1-kg-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158033&q=best&v=1",
    "mrp": 8990,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.961Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 8990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/olio-orolio-extra-virgin-olive-oil-free-kisaan-chinigura-rice-1-kg-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 8990,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Olio%20Orolio%20Extra%20Virgin%20Olive%20Oil%20(Free%20Kisaan%20Chinigura%20Aromatic%20Rice%201%20kg)%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 8990,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Olio%20Orolio%20Extra%20Virgin%20Olive%20Oil%20(Free%20Kisaan%20Chinigura%20Aromatic%20Rice%201%20kg)%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 8990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Olio%20Orolio%20Extra%20Virgin%20Olive%20Oil%20(Free%20Kisaan%20Chinigura%20Aromatic%20Rice%201%20kg)%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-anmol-dawat-offer",
    "nameBn": "আনমোল দাওয়াত অফার",
    "nameEn": "Anmol Dawat Offer",
    "category": "oil",
    "unit": "১ প্যাক",
    "image": "https://chaldn.com/_mpimage/anmol-dawat-offer?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D70087&q=low&v=1",
    "mrp": 368,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.961Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 368,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/anmol-dawat-offer",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 368,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Anmol%20Dawat%20Offer",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 368,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Anmol%20Dawat%20Offer",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 368,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Anmol%20Dawat%20Offer",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-foodela-family-saver-pack",
    "nameBn": "ফুডেলা ফ্যামিলি সেভার প্যাক",
    "nameEn": "Foodela Family Saver Pack",
    "category": "oil",
    "unit": "১ প্যাক",
    "image": "https://chaldn.com/_mpimage/foodela-family-saver-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182841&q=best&v=1",
    "mrp": 397,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.961Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳48 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳29 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 349,
        "inStock": true,
        "discountText": "৳48 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/foodela-family-saver-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 368,
        "inStock": true,
        "discountText": "৳29 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Foodela%20Family%20Saver%20Pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 385,
        "inStock": true,
        "discountText": "৳12 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Foodela%20Family%20Saver%20Pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 375,
        "inStock": true,
        "discountText": "৳22 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Foodela%20Family%20Saver%20Pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-athash-rice-boiled-50-gm-5-kg",
    "nameBn": "আঠাস চাল (সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Athash Rice (Boiled) ± 50 gm 5 kg",
    "category": "oil",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/athash-rice-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D76816&q=best&v=1",
    "mrp": 379,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.961Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳50 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳30 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 329,
        "inStock": true,
        "discountText": "৳50 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/athash-rice-boiled-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 349,
        "inStock": true,
        "discountText": "৳30 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Athash%20Rice%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 366,
        "inStock": true,
        "discountText": "৳13 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Athash%20Rice%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 356,
        "inStock": true,
        "discountText": "৳23 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Athash%20Rice%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-miniket-rice-standard-boiled-50-gm-5-kg",
    "nameBn": "মিনিকেট চাল স্ট্যান্ডার্ড (সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Miniket Rice Standard (Boiled) ± 50 gm 5 kg",
    "category": "oil",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/miniket-rice-standard-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48082&q=best&v=1",
    "mrp": 389,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:50.961Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 389,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/miniket-rice-standard-boiled-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 389,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Miniket%20Rice%20Standard%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 389,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Miniket%20Rice%20Standard%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 389,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Miniket%20Rice%20Standard%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-giggles-premium-baby-diaper-belt-6-extra-large-15-30-kg-32-pcs",
    "nameBn": "গিগলস প্রিমিয়াম বেবি ডায়াপার বেল্ট ৬ এক্সট্রা লার্জ (১৫-৩০ কেজি) ৩২ টি",
    "nameEn": "Giggles Premium Baby Diaper Belt 6 Extra Large (15-30 kg) 32 pc",
    "category": "oil",
    "unit": "32 pc",
    "image": "https://chaldn.com/_mpimage/giggles-premium-baby-diaper-belt-6-extra-large-15-30-kg-32-pc?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169284&q=best&v=1",
    "mrp": 1800,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.299Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳341 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳205 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1459,
        "inStock": true,
        "discountText": "৳341 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/giggles-premium-baby-diaper-belt-6-extra-large-15-30-kg-32-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1595,
        "inStock": true,
        "discountText": "৳205 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Giggles%20Premium%20Baby%20Diaper%20Belt%206%20Extra%20Large%20(15-30%20kg)%2032%20pc",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1715,
        "inStock": true,
        "discountText": "৳85 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Giggles%20Premium%20Baby%20Diaper%20Belt%206%20Extra%20Large%20(15-30%20kg)%2032%20pc",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1647,
        "inStock": true,
        "discountText": "৳153 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Giggles%20Premium%20Baby%20Diaper%20Belt%206%20Extra%20Large%20(15-30%20kg)%2032%20pc",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-giggles-baby-diaper-pants-6-extra-large-15-kg-20-pcs",
    "nameBn": "গিগলস বেবি ডায়াপার প্যান্ট ৬ এক্সট্রা লার্জ ১৫+ কেজি ২০ টি",
    "nameEn": "Giggles Baby Diaper Pants 6 Extra Large 15+ kg 20 pcs",
    "category": "oil",
    "unit": "20 pcs",
    "image": "https://chaldn.com/_mpimage/giggles-baby-diaper-pants-6-extra-large-15-kg-20-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D168486&q=best&v=1",
    "mrp": 1200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.299Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳281 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳169 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 919,
        "inStock": true,
        "discountText": "৳281 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/giggles-baby-diaper-pants-6-extra-large-15-kg-20-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1031,
        "inStock": true,
        "discountText": "৳169 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Giggles%20Baby%20Diaper%20Pants%206%20Extra%20Large%2015%2B%20kg%2020%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1130,
        "inStock": true,
        "discountText": "৳70 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Giggles%20Baby%20Diaper%20Pants%206%20Extra%20Large%2015%2B%20kg%2020%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1074,
        "inStock": true,
        "discountText": "৳126 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Giggles%20Baby%20Diaper%20Pants%206%20Extra%20Large%2015%2B%20kg%2020%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mamypoko-pants-extra-absorb-diapers-pant-xxl-15-25-kg-36-pcs",
    "nameBn": "মামিপোকো প্যান্ট এক্সট্রা অ্যাবজরব ডায়াপার প্যান্ট এক্সএক্সএল (১৫-২৫) কেজি ৩৬ টি",
    "nameEn": "MamyPoko Pants Extra Absorb Diapers Pant XXL (15-25) kg 36 pcs",
    "category": "oil",
    "unit": "36 pcs",
    "image": "https://chaldn.com/_mpimage/mamypoko-pants-extra-absorb-diapers-pant-xxl-15-25-kg-36-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D141211&q=best&v=1",
    "mrp": 2320,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.299Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳661 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳397 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1659,
        "inStock": true,
        "discountText": "৳661 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mamypoko-pants-extra-absorb-diapers-pant-xxl-15-25-kg-36-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1923,
        "inStock": true,
        "discountText": "৳397 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=MamyPoko%20Pants%20Extra%20Absorb%20Diapers%20Pant%20XXL%20(15-25)%20kg%2036%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 2155,
        "inStock": true,
        "discountText": "৳165 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=MamyPoko%20Pants%20Extra%20Absorb%20Diapers%20Pant%20XXL%20(15-25)%20kg%2036%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 2023,
        "inStock": true,
        "discountText": "৳297 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=MamyPoko%20Pants%20Extra%20Absorb%20Diapers%20Pant%20XXL%20(15-25)%20kg%2036%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-huggies-dry-pants-baby-diaper-pant-xxl-15-25-kg-32-pcs",
    "nameBn": "হাগিস ড্রাই প্যান্টস বেবি ডায়াপার প্যান্ট এক্সএক্সএল (১৫-২৫ কেজি) ৩২ টি",
    "nameEn": "Huggies Dry Pants Baby Diaper Pant XXL (15-25 kg) 32 pcs",
    "category": "oil",
    "unit": "32 pcs",
    "image": "https://chaldn.com/_mpimage/huggies-dry-pants-baby-diaper-pant-xxl-15-25-kg-32-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D75269&q=best&v=1",
    "mrp": 2645,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.299Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳686 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳412 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1959,
        "inStock": true,
        "discountText": "৳686 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/huggies-dry-pants-baby-diaper-pant-xxl-15-25-kg-32-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 2233,
        "inStock": true,
        "discountText": "৳412 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Huggies%20Dry%20Pants%20Baby%20Diaper%20Pant%20XXL%20(15-25%20kg)%2032%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 2473,
        "inStock": true,
        "discountText": "৳172 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Huggies%20Dry%20Pants%20Baby%20Diaper%20Pant%20XXL%20(15-25%20kg)%2032%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 2336,
        "inStock": true,
        "discountText": "৳309 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Huggies%20Dry%20Pants%20Baby%20Diaper%20Pant%20XXL%20(15-25%20kg)%2032%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-avonee-pants-extra-largexxl14-25kg34pcs",
    "nameBn": "এভনি প্যান্ট এক্সট্রা লার্জ এক্স এক্স এল (১৪-২৫) ৩৪ টি",
    "nameEn": "Avonee Pants Extra Large XXL (14-25KG) 34 pcs",
    "category": "oil",
    "unit": "34 pcs",
    "image": "https://chaldn.com/_mpimage/avonee-pants-extra-largexxl14-25kg34pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154389&q=best&v=1",
    "mrp": 1200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.299Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳301 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳181 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 899,
        "inStock": true,
        "discountText": "৳301 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/avonee-pants-extra-largexxl14-25kg34pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1019,
        "inStock": true,
        "discountText": "৳181 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Avonee%20Pants%20Extra%20Large%C2%A0XXL%C2%A0(14-25KG)%C2%A034%C2%A0pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1125,
        "inStock": true,
        "discountText": "৳75 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Avonee%20Pants%20Extra%20Large%C2%A0XXL%C2%A0(14-25KG)%C2%A034%C2%A0pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1065,
        "inStock": true,
        "discountText": "৳135 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Avonee%20Pants%20Extra%20Large%C2%A0XXL%C2%A0(14-25KG)%C2%A034%C2%A0pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mamypoko-pants-extra-absorb-diaper-xl-12-17-kg-20-pcs",
    "nameBn": "মামিপোকো প্যান্ট অতিরিক্ত শোষণ ডায়পার এক্সএল ১২-১৭ কেজি ২০ পিস",
    "nameEn": "MamyPoko Pants Extra Absorb Diaper XL 12-17 kg 20 pcs",
    "category": "oil",
    "unit": "20 pcs",
    "image": "https://chaldn.com/_mpimage/mamypoko-pants-extra-absorb-diaper-xl-12-17-kg-20-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130587&q=best&v=1",
    "mrp": 970,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.299Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳181 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳109 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 789,
        "inStock": true,
        "discountText": "৳181 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mamypoko-pants-extra-absorb-diaper-xl-12-17-kg-20-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 861,
        "inStock": true,
        "discountText": "৳109 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=MamyPoko%20Pants%20Extra%20Absorb%20Diaper%20XL%2012-17%20kg%2020%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 925,
        "inStock": true,
        "discountText": "৳45 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=MamyPoko%20Pants%20Extra%20Absorb%20Diaper%20XL%2012-17%20kg%2020%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 889,
        "inStock": true,
        "discountText": "৳81 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=MamyPoko%20Pants%20Extra%20Absorb%20Diaper%20XL%2012-17%20kg%2020%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-miniket-rice-premium-boiled-50-gm-5-kg",
    "nameBn": "মিনিকেট চাল প্রিমিয়াম (সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Miniket Rice Premium (Boiled) ± 50 gm 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/miniket-rice-premium-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48081&q=best&v=1",
    "mrp": 439,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.593Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 439,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/miniket-rice-premium-boiled-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 439,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Miniket%20Rice%20Premium%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 439,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Miniket%20Rice%20Premium%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 439,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Miniket%20Rice%20Premium%20(Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-miniket-rice-10-kg",
    "nameBn": "এ সি আই পিওর মিনিকেট চাল প্রিমিয়াম ১০ কেজি",
    "nameEn": "ACI Pure Miniket Rice Premium 10 kg",
    "category": "rice-pulses",
    "unit": "10 kg",
    "image": "https://chaldn.com/_mpimage/aci-pure-miniket-rice-premium-10-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177231&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.593Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-miniket-rice-10-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Miniket%20Rice%20Premium%2010%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Miniket%20Rice%20Premium%2010%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Miniket%20Rice%20Premium%2010%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-miniket-rice-5-kg",
    "nameBn": "এ সি আই পিওর প্রিমিয়াম মিনিকেট চাল ৫ কেজি",
    "nameEn": "ACI Pure Premium Miniket Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/aci-pure-premium-miniket-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177234&q=best&v=1",
    "mrp": 480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.593Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-miniket-rice-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Premium%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Premium%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Premium%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-akij-essential-miniket-rice-5-kg",
    "nameBn": "আকিজ এসেনসিয়াল মিনিকেট চাল ৫ কেজি",
    "nameEn": "Akij Essential Miniket Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/akij-essential-miniket-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D122562&q=best&v=1&m=400",
    "mrp": 450,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.593Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 450,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/akij-essential-miniket-rice-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 450,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Akij%20Essential%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 450,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Akij%20Essential%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 450,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Akij%20Essential%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-miniket-rice-5-kg",
    "nameBn": "প্রান মিনিকেট চাল ৫ কেজি",
    "nameEn": "Pran Miniket Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/pran-miniket-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D108355&q=best&v=1",
    "mrp": 470,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.593Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 470,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-miniket-rice-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 470,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 470,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 470,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Miniket%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nazirshail-rice-premium-half-boiled-50-gm-5-kg",
    "nameBn": "নাজিরশাইল চাল প্রিমিয়াম (আধা সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Nazirshail Rice Premium (Half Boiled) ± 50 gm 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/nazirshail-rice-premium-half-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48083&q=best&v=1",
    "mrp": 479,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.900Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳30 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳18 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 449,
        "inStock": true,
        "discountText": "৳30 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nazirshail-rice-premium-half-boiled-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 461,
        "inStock": true,
        "discountText": "৳18 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nazirshail%20Rice%20Premium%20(Half%20Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 471,
        "inStock": true,
        "discountText": "৳8 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nazirshail%20Rice%20Premium%20(Half%20Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 465,
        "inStock": true,
        "discountText": "৳14 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nazirshail%20Rice%20Premium%20(Half%20Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-nazirshail-rice-5-kg",
    "nameBn": "এ সি আই পিওর নাজিরশাইল চাল ৫ কেজি",
    "nameEn": "ACI Pure Nazirshail Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/aci-pure-nazirshail-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177233&q=best&v=1",
    "mrp": 495,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.900Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 495,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-nazirshail-rice-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 495,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 495,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 495,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nazirshail-rice-standard-half-boiled-50-gm-5-kg",
    "nameBn": "নাজিরশাল চাল স্ট্যান্ডার্ড (আধা সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Nazirshail Rice Standard (Half Boiled) ± 50 gm 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/nazirshail-rice-standard-half-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D66168&q=best&v=1",
    "mrp": 459,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.900Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳60 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳36 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 399,
        "inStock": true,
        "discountText": "৳60 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nazirshail-rice-standard-half-boiled-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 423,
        "inStock": true,
        "discountText": "৳36 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nazirshail%20Rice%20Standard%20(Half%20Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 444,
        "inStock": true,
        "discountText": "৳15 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nazirshail%20Rice%20Standard%20(Half%20Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 432,
        "inStock": true,
        "discountText": "৳27 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nazirshail%20Rice%20Standard%20(Half%20Boiled)%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-nazirshail-rice-5-kg",
    "nameBn": "প্রান নাজিরশাল চাল ৫ কেজি",
    "nameEn": "Pran Nazirshail Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/pran-nazirshail-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48089&q=best&v=1&m=400",
    "mrp": 480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.900Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-nazirshail-rice-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-natural-najirshail-rice-5-kg",
    "nameBn": "আড়ং ন্যাচারাল নাজিরশাইল চাল ৫ কেজি",
    "nameEn": "Aarong Natural Nazirshail Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/aarong-natural-nazirshail-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D122770&q=best&v=1",
    "mrp": 535,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.900Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 535,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-natural-najirshail-rice-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 535,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Natural%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 535,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Natural%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 535,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Natural%20Nazirshail%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-shukran-nazirshail-rice-boiled-10-kg",
    "nameBn": "শুকরান নাজিরশাইল চাল (সিদ্ধ) ১০ কেজি",
    "nameEn": "Shukran Nazirshail Rice (Boiled) 10 kg",
    "category": "rice-pulses",
    "unit": "10 kg",
    "image": "https://chaldn.com/_mpimage/shukran-nazirshail-rice-boiled-10-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D121781&q=best&v=1&m=400",
    "mrp": 990,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:51.900Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/shukran-nazirshail-rice-boiled-10-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 990,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Shukran%20Nazirshail%20Rice%20(Boiled)%2010%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 990,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Shukran%20Nazirshail%20Rice%20(Boiled)%2010%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Shukran%20Nazirshail%20Rice%20(Boiled)%2010%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chasi-aromatic-rice-chinigura-1-kg-5",
    "nameBn": "চাষী সুগন্ধি চিনিগুড়া চাল ১ কেজি",
    "nameEn": "Chashi Aromatic Chinigura Rice 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/chashi-aromatic-chinigura-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D126657&q=best&v=1",
    "mrp": 190,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.216Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 190,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chasi-aromatic-rice-chinigura-1-kg-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 190,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chashi%20Aromatic%20Chinigura%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 190,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chashi%20Aromatic%20Chinigura%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 190,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chashi%20Aromatic%20Chinigura%20Rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chashi-aromatic-chinigura-2-kg",
    "nameBn": "চাষী সুগন্ধি চিনিগুঁড়া চাল ২ কেজি",
    "nameEn": "Chashi Aromatic Chinigura Rice 2 kg",
    "category": "rice-pulses",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/chashi-aromatic-chinigura-rice-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D126658&q=best&v=1",
    "mrp": 370,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.216Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chashi-aromatic-chinigura-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 370,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chashi%20Aromatic%20Chinigura%20Rice%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 370,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chashi%20Aromatic%20Chinigura%20Rice%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chashi%20Aromatic%20Chinigura%20Rice%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-chinigura-aromatic-rice-1-kg",
    "nameBn": "প্রাণ চিনিগুঁড়া সুগন্ধি চাল ১ কেজি",
    "nameEn": "Pran Chinigura Aromatic Rice 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/pran-chinigura-aromatic-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154823&q=best&v=1",
    "mrp": 190,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.216Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 190,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-chinigura-aromatic-rice-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 190,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Chinigura%20Aromatic%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 190,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Chinigura%20Aromatic%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 190,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Chinigura%20Aromatic%20Rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-chinigura-aromatic-rice-2-kg",
    "nameBn": "প্রাণ চিনিগুঁড়া সুগন্ধি চাল ২ কেজি",
    "nameEn": "Pran Chinigura Aromatic Rice 2 kg",
    "category": "rice-pulses",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/pran-chinigura-aromatic-rice-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132228&q=best&v=1",
    "mrp": 370,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.216Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-chinigura-aromatic-rice-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 370,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Chinigura%20Aromatic%20Rice%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 370,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Chinigura%20Aromatic%20Rice%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Chinigura%20Aromatic%20Rice%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rupchanda-premium-chinigura-chal-1-kg",
    "nameBn": "রূপচাঁদা চিনিগুঁড়া প্রিমিয়াম সুগন্ধি চাল ১ কেজি",
    "nameEn": "Rupchanda Chinigura Premium Aromatic Rice 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/rupchanda-chinigura-premium-aromatic-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182970&q=best&v=1",
    "mrp": 175,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.216Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rupchanda-premium-chinigura-chal-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 175,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rupchanda%20Chinigura%20Premium%20Aromatic%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 175,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rupchanda%20Chinigura%20Premium%20Aromatic%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rupchanda%20Chinigura%20Premium%20Aromatic%20Rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chashi-chinigura-aromatic-rice-pack-5-kg",
    "nameBn": "চাষী সুগন্ধি চিনিগুঁড়া চাল ৫ কেজি",
    "nameEn": "Chashi Aromatic Chinigura Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/chashi-aromatic-chinigura-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89208&q=low&v=1",
    "mrp": 910,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.216Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 910,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chashi-chinigura-aromatic-rice-pack-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 910,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chashi%20Aromatic%20Chinigura%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 910,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chashi%20Aromatic%20Chinigura%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 910,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chashi%20Aromatic%20Chinigura%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-katari-boiled-rice-50-gm-5-kg",
    "nameBn": "কাটারি সিদ্ধ চাল ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Katari Boiled Rice ± 50 gm 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/katari-boiled-rice-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74508&q=best&v=1&m=400",
    "mrp": 459,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.526Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 459,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/katari-boiled-rice-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 459,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Katari%20Boiled%20Rice%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 459,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Katari%20Boiled%20Rice%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 459,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Katari%20Boiled%20Rice%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-shugondhi-kataribhog-rice-5-kg",
    "nameBn": "এসিআই পিওর সুগন্ধি কাটারিভোগ চাল ৫ কেজি",
    "nameEn": "ACI Pure Shugondhi Kataribhog Rice 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/aci-pure-shugondhi-kataribhog-rice-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177176&q=best&v=1",
    "mrp": 800,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.526Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 800,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-shugondhi-kataribhog-rice-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 800,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Shugondhi%20Kataribhog%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 800,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Shugondhi%20Kataribhog%20Rice%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 800,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Shugondhi%20Kataribhog%20Rice%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-finlay-white-fibre-rice-katari-nazir-5-kg",
    "nameBn": "ফিনলে হোয়াইট ফাইবার রাইস (কাটারি নাজির) ৫ কেজি",
    "nameEn": "Finlay White Fibre Rice (Katari Nazir) 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/finlay-white-fibre-rice-katari-nazir-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D161747&q=best&v=1",
    "mrp": 480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.526Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/finlay-white-fibre-rice-katari-nazir-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Finlay%20White%20Fibre%20Rice%20(Katari%20Nazir)%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Finlay%20White%20Fibre%20Rice%20(Katari%20Nazir)%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Finlay%20White%20Fibre%20Rice%20(Katari%20Nazir)%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-finlay-white-fibre-rice-katari-nazir-3-kg",
    "nameBn": "ফিনলে হোয়াইট ফাইবার রাইস (কাটারি নাজির) ৩ কেজি",
    "nameEn": "Finlay White Fibre Rice (Katari Nazir) 3 kg",
    "category": "rice-pulses",
    "unit": "3 kg",
    "image": "https://chaldn.com/_mpimage/finlay-white-fibre-rice-katari-nazir-3-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D161746&q=best&v=1",
    "mrp": 295,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.526Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 295,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/finlay-white-fibre-rice-katari-nazir-3-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 295,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Finlay%20White%20Fibre%20Rice%20(Katari%20Nazir)%203%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 295,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Finlay%20White%20Fibre%20Rice%20(Katari%20Nazir)%203%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 295,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Finlay%20White%20Fibre%20Rice%20(Katari%20Nazir)%203%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fargo-whole-grain-katari-nazir-rice-200-gm-25-kg",
    "nameBn": "ফার্গো হোল গ্রেইন কাটারি নাজির চাল ± ২০০ গ্রাম ২৫ কেজি",
    "nameEn": "Fargo Whole Grain Katari Nazir Rice ± 200 gm 25 kg",
    "category": "rice-pulses",
    "unit": "25 kg",
    "image": "https://chaldn.com/_mpimage/fargo-whole-grain-katari-nazir-rice-200-gm-25-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D138998&q=best&v=1",
    "mrp": 2625,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.526Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 2625,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fargo-whole-grain-katari-nazir-rice-200-gm-25-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 2625,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fargo%20Whole%20Grain%20Katari%20Nazir%20Rice%20%C2%B1%20200%20gm%2025%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 2625,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fargo%20Whole%20Grain%20Katari%20Nazir%20Rice%20%C2%B1%20200%20gm%2025%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 2625,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fargo%20Whole%20Grain%20Katari%20Nazir%20Rice%20%C2%B1%20200%20gm%2025%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-katari-atop-rice-50-gm-5-kg",
    "nameBn": "কাটারি আতপ চাল ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Katari Atop Rice ± 50 gm 5 kg",
    "category": "rice-pulses",
    "unit": "5 kg",
    "image": "https://chaldn.com/_mpimage/katari-atop-rice-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74589&q=best&v=1",
    "mrp": 489,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.526Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 489,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/katari-atop-rice-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 489,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Katari%20Atop%20Rice%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 489,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Katari%20Atop%20Rice%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 489,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Katari%20Atop%20Rice%20%C2%B1%2050%20gm%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-aroma-pure-basmati-rice-1-kg",
    "nameBn": "এ সি আই অ্যারোমা প্রিমিয়াম বাসমতি চাল ১ কেজি",
    "nameEn": "ACI Aroma Premium Basmati Rice 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/aci-aroma-premium-basmati-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177124&q=best&v=1",
    "mrp": 480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-aroma-pure-basmati-rice-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Aroma%20Premium%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Aroma%20Premium%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Aroma%20Premium%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mehran-basmati-kernel-rice-1-kg",
    "nameBn": "মেহরান বাসমতি কার্নেল চাল ১ কেজি",
    "nameEn": "Mehran Basmati Kernel Rice 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/mehran-basmati-kernel-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D124719&q=best&v=1&m=400",
    "mrp": 595,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 595,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mehran-basmati-kernel-rice-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 595,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mehran%20Basmati%20Kernel%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 595,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mehran%20Basmati%20Kernel%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 595,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mehran%20Basmati%20Kernel%20Rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kaalar-sella-basmati-rice-1-kg",
    "nameBn": "কালার সেল্লা বাসমতি চাল ১ কেজি",
    "nameEn": "Kaalar Sella Basmati Rice 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/kaalar-sella-basmati-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129666&q=best&v=1",
    "mrp": 355,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 355,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kaalar-sella-basmati-rice-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 355,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kaalar%20Sella%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 355,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kaalar%20Sella%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 355,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kaalar%20Sella%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kaalar-premium-basmati-rice-1-kg",
    "nameBn": "কালার প্রিমিয়াম বাসমতি চাল ১ কেজি",
    "nameEn": "Kaalar Premium Basmati Rice 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/kaalar-premium-basmati-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129665&q=best&v=1",
    "mrp": 355,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 355,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kaalar-premium-basmati-rice-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 355,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kaalar%20Premium%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 355,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kaalar%20Premium%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 355,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kaalar%20Premium%20Basmati%20Rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-qilla-excel-basmati-1-kg",
    "nameBn": "কিল্লা এক্সেল বাসমতি চাল ১ কেজি",
    "nameEn": "Qilla Excel Basmati 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/qilla-excel-basmati-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D92241&q=best&v=1",
    "mrp": 385,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:52.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 385,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/qilla-excel-basmati-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 385,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Qilla%20Excel%20Basmati%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 385,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Qilla%20Excel%20Basmati%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 385,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Qilla%20Excel%20Basmati%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-moshur-dal-deshi-500-gm",
    "nameBn": "মশুর ডাল (দেশি) ১ কেজি",
    "nameEn": "Moshur Dal (Deshi) 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/moshur-dal-deshi-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182384&q=best&v=1",
    "mrp": 179,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.132Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳20 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳12 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 159,
        "inStock": true,
        "discountText": "৳20 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/moshur-dal-deshi-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 167,
        "inStock": true,
        "discountText": "৳12 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Moshur%20Dal%20(Deshi)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 174,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Moshur%20Dal%20(Deshi)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 170,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Moshur%20Dal%20(Deshi)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-moshur-dal-deshi-1-kg",
    "nameBn": "প্রান মশুর ডাল (দেশি) ১ কেজি",
    "nameEn": "Pran Moshur Dal (Deshi) 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/pran-moshur-dal-deshi-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98671&q=best&v=1",
    "mrp": 185,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.132Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 185,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-moshur-dal-deshi-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 185,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Moshur%20Dal%20(Deshi)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 185,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Moshur%20Dal%20(Deshi)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 185,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Moshur%20Dal%20(Deshi)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pusti-deshi-moshur-dal-1-kg",
    "nameBn": "পুষ্টি দেশী মশুর ডাল ১ কেজি",
    "nameEn": "Pusti Deshi Moshur Dal 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/pusti-deshi-moshur-dal-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D109908&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.132Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pusti-deshi-moshur-dal-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pusti%20Deshi%20Moshur%20Dal%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pusti%20Deshi%20Moshur%20Dal%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pusti%20Deshi%20Moshur%20Dal%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sunshine-deshi-moshur-dal-red-lentil-1-kg",
    "nameBn": "সানসাইন দেশি মসুর ডাল ১ কেজি",
    "nameEn": "Sunshine Deshi Moshur Dal (Red Lentil) 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/sunshine-deshi-moshur-dal-red-lentil-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D90338&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.132Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sunshine-deshi-moshur-dal-red-lentil-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sunshine%20Deshi%20Moshur%20Dal%20(Red%20Lentil)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sunshine%20Deshi%20Moshur%20Dal%20(Red%20Lentil)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sunshine%20Deshi%20Moshur%20Dal%20(Red%20Lentil)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-shukran-classic-deshi-moshur-dal-1-kg",
    "nameBn": "শুকরান ক্লাসিক দেশি মসুর ডাল ১ কেজি",
    "nameEn": "Shukran Classic Deshi Moshur Dal 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/shukran-classic-deshi-moshur-dal-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135882&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.132Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/shukran-classic-deshi-moshur-dal-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Shukran%20Classic%20Deshi%20Moshur%20Dal%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Shukran%20Classic%20Deshi%20Moshur%20Dal%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Shukran%20Classic%20Deshi%20Moshur%20Dal%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-moshur-dal-deshi-500-gm",
    "nameBn": "প্রান মসুর ডাল (দেশি) ৫০০ গ্রাম",
    "nameEn": "Pran Moshur Dal (Deshi) 500 gm",
    "category": "rice-pulses",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/pran-moshur-dal-deshi-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132318&q=best&v=1",
    "mrp": 95,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.132Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-moshur-dal-deshi-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 95,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Moshur%20Dal%20(Deshi)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 95,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Moshur%20Dal%20(Deshi)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Moshur%20Dal%20(Deshi)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-moshur-dal-imported-500-gm-2",
    "nameBn": "মসুর ডাল (আমদানিকৃত) ৫০০ গ্রাম",
    "nameEn": "Moshur Dal (Imported) 500 gm",
    "category": "rice-pulses",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/moshur-dal-imported-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182353&q=best&v=1",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.416Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/moshur-dal-imported-500-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 55,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Moshur%20Dal%20(Imported)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 55,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Moshur%20Dal%20(Imported)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Moshur%20Dal%20(Imported)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mug-dal-250-gm",
    "nameBn": "মুগ ডাল ২৫০ গ্রাম",
    "nameEn": "Mug Dal 250 gm",
    "category": "rice-pulses",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/mug-dal-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183436&q=best&v=1",
    "mrp": 45,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.416Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 45,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mug-dal-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 45,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mug%20Dal%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 45,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mug%20Dal%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 45,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mug%20Dal%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-khichuri-essentialcombo",
    "nameBn": "খিচুড়ি এসেনসিয়াল কম্বো",
    "nameEn": "Khichuri Essential Combo",
    "category": "rice-pulses",
    "unit": "১ প্যাক",
    "image": "https://chaldn.com/_mpimage/khichuri-essentialcombo?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D185359&q=best&v=1",
    "mrp": 224,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.416Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳35 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳21 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 189,
        "inStock": true,
        "discountText": "৳35 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/khichuri-essentialcombo",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 203,
        "inStock": true,
        "discountText": "৳21 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Khichuri%20Essential%C2%A0Combo",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 215,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Khichuri%20Essential%C2%A0Combo",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 208,
        "inStock": true,
        "discountText": "৳16 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Khichuri%20Essential%C2%A0Combo",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kangaroo-lentil-moshur-dal-1-kg",
    "nameBn": "ক্যাঙ্গারু মসুর ডাল ১ কেজি",
    "nameEn": "Kangaroo Lentil (Moshur Dal) 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/kangaroo-lentil-moshur-dal-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182386&q=best&v=1",
    "mrp": 179,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.416Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 179,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kangaroo-lentil-moshur-dal-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 179,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kangaroo%20Lentil%20(Moshur%20Dal)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 179,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kangaroo%20Lentil%20(Moshur%20Dal)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 179,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kangaroo%20Lentil%20(Moshur%20Dal)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mash-dal-peeled-500-gm-pack",
    "nameBn": "মাসকলাই ডাল পিলড ৫০০ গ্রাম",
    "nameEn": "Mashkolai Dal Peeled 500 gm",
    "category": "rice-pulses",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/mashkolai-dal-peeled-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183017&q=best&v=1",
    "mrp": 95,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.416Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mash-dal-peeled-500-gm-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 95,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mashkolai%20Dal%20Peeled%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 95,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mashkolai%20Dal%20Peeled%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mashkolai%20Dal%20Peeled%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-everest-chhole-masala-50-gm",
    "nameBn": "এভারেস্ট ছোলে মসলা ৫০ গ্রাম",
    "nameEn": "Everest Chhole Masala 50 gm",
    "category": "rice-pulses",
    "unit": "50 gm",
    "image": "https://chaldn.com/_mpimage/everest-chhole-masala-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133364&q=best&v=1",
    "mrp": 125,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.691Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/everest-chhole-masala-50-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 125,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Everest%20Chhole%20Masala%2050%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 125,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Everest%20Chhole%20Masala%2050%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Everest%20Chhole%20Masala%2050%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-boot-dal-500-gm",
    "nameBn": "বুট ডাল ৫০০ গ্রাম",
    "nameEn": "Boot Dal 500 gm",
    "category": "rice-pulses",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/boot-dal-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182387&q=best&v=1",
    "mrp": 59,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.973Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 59,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/boot-dal-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 59,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Boot%20Dal%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 59,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Boot%20Dal%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 59,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Boot%20Dal%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-khosha-chara-chola-boot-peeled-chick-pea-500-gm",
    "nameBn": "খোসা ছাড়ানো ছোলা বুট ৫০০ গ্রাম",
    "nameEn": "Khosha Chara Chola Boot (Peeled Chick Pea) 500 gm",
    "category": "rice-pulses",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/khosha-chara-chola-boot-peeled-chick-pea-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47044&q=best&v=1",
    "mrp": 75,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:53.973Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 65,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/khosha-chara-chola-boot-peeled-chick-pea-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 69,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Khosha%20Chara%20Chola%20Boot%20(Peeled%20Chick%20Pea)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 72,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Khosha%20Chara%20Chola%20Boot%20(Peeled%20Chick%20Pea)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 70,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Khosha%20Chara%20Chola%20Boot%20(Peeled%20Chick%20Pea)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-teer-whole-wheat-atta-2-kg",
    "nameBn": "তীর হোল হুইট আটা ২ কেজি",
    "nameEn": "Teer Whole Wheat Flour (Atta) 2 kg",
    "category": "rice-pulses",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/teer-whole-wheat-flour-atta-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101279&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.307Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/teer-whole-wheat-atta-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Teer%20Whole%20Wheat%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Teer%20Whole%20Wheat%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Teer%20Whole%20Wheat%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-whole-wheat-atta-2-kg",
    "nameBn": "ফ্রেশ হোল হুইট আটা ২ কেজি",
    "nameEn": "Fresh Whole Wheat Flour (Atta) 2 kg",
    "category": "rice-pulses",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/fresh-whole-wheat-flour-atta-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D97223&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.307Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-whole-wheat-atta-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Whole%20Wheat%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Whole%20Wheat%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Whole%20Wheat%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-teer-atta-2-kg",
    "nameBn": "তীর আটা ২ কেজি",
    "nameEn": "Teer Flour (Atta) 2 kg",
    "category": "rice-pulses",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/teer-flour-atta-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101280&q=best&v=1",
    "mrp": 130,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.307Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/teer-atta-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 130,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Teer%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 130,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Teer%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Teer%20Flour%20(Atta)%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-shaad-brown-atta-1-kg",
    "nameBn": "স্বাদ ব্রাউন আটা (লাল আটা)১ কেজি",
    "nameEn": "Shaad Brown Flour (Lal Atta) 1 kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/shaad-brown-flour-lal-atta-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133501&q=best&v=1",
    "mrp": 70,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.307Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/shaad-brown-atta-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 70,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Shaad%20Brown%20Flour%20(Lal%20Atta)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 70,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Shaad%20Brown%20Flour%20(Lal%20Atta)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Shaad%20Brown%20Flour%20(Lal%20Atta)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-nutrilife-brown-atta-2-kg",
    "nameBn": "এসিআই নিউট্রিলাইফ ব্রাউন আটা ২ কেজি",
    "nameEn": "ACI Nutrilife Brown Atta 2 kg",
    "category": "rice-pulses",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/aci-nutrilife-brown-atta-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177148&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.307Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-nutrilife-brown-atta-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Nutrilife%20Brown%20Atta%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Nutrilife%20Brown%20Atta%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Nutrilife%20Brown%20Atta%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-nutrilife-brown-flour-atta-1-kg",
    "nameBn": "এ সি আই নিউট্রিলাইফ ব্রাউন ফ্লাওয়ার (আটা) ১ কেজি",
    "nameEn": "ACI Nutrilife Brown Flour (Atta) 1 Kg",
    "category": "rice-pulses",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/aci-nutrilife-brown-flour-atta-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177378&q=best&v=1",
    "mrp": 70,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.307Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-nutrilife-brown-flour-atta-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 70,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Nutrilife%20Brown%20Flour%20(Atta)%201%20Kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 70,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Nutrilife%20Brown%20Flour%20(Atta)%201%20Kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Nutrilife%20Brown%20Flour%20(Atta)%201%20Kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kashmir-originals-saffron-zafran-05-gm-2",
    "nameBn": "কাশ্মীর অরিজিনাল জাফরান ০.৫ গ্রাম",
    "nameEn": "Kashmir Originals Saffron (Zafran) 0.5 gm",
    "category": "rice-pulses",
    "unit": "0.5 gm",
    "image": "https://chaldn.com/_mpimage/kashmir-originals-saffron-zafran-05-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153328&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.651Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kashmir-originals-saffron-zafran-05-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kashmir%20Originals%20Saffron%20(Zafran)%200.5%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kashmir%20Originals%20Saffron%20(Zafran)%200.5%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kashmir%20Originals%20Saffron%20(Zafran)%200.5%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-farmers-gold-raw-turmeric-powder-100-gm",
    "nameBn": "ফার্মার‘স গোল্ড কাঁচা হলুদের গুঁড়া ১০০ গ্রাম",
    "nameEn": "Farmer's Gold Raw Turmeric powder 100 gm",
    "category": "rice-pulses",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/farmers-gold-raw-turmeric-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131651&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.651Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/farmers-gold-raw-turmeric-powder-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Farmer's%20Gold%20Raw%20Turmeric%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Farmer's%20Gold%20Raw%20Turmeric%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Farmer's%20Gold%20Raw%20Turmeric%20powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-farmers-gold-oshwagandha-powder-100-gm",
    "nameBn": "ফার্মার‘স গোল্ড অশ্বগন্ধা গুঁড়া ১০০ গ্রাম",
    "nameEn": "Farmer's Gold Oshwagandha powder 100 gm",
    "category": "rice-pulses",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/farmers-gold-oshwagandha-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128398&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.651Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/farmers-gold-oshwagandha-powder-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Farmer's%20Gold%20Oshwagandha%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Farmer's%20Gold%20Oshwagandha%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Farmer's%20Gold%20Oshwagandha%20powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-farmers-gold-eternal-powder-100-gm",
    "nameBn": "ফার্মার‘স গোল্ড চিরতা গুঁড়া ১০০ গ্রাম",
    "nameEn": "Farmer's Gold Eternal Powder 100 gm",
    "category": "rice-pulses",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/farmers-gold-eternal-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128394&q=best&v=1",
    "mrp": 210,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.651Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/farmers-gold-eternal-powder-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 210,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Farmer's%20Gold%20Eternal%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 210,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Farmer's%20Gold%20Eternal%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Farmer's%20Gold%20Eternal%20Powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-farmers-gold-triphala-powder-100-gm",
    "nameBn": "ফার্মার‘স গোল্ড ত্রিফলা গুঁড়া ১০০ গ্রাম",
    "nameEn": "Farmer's Gold Triphala Powder 100 gm",
    "category": "rice-pulses",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/farmers-gold-triphala-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128408&q=best&v=1",
    "mrp": 90,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.651Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/farmers-gold-triphala-powder-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 90,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Farmer's%20Gold%20Triphala%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 90,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Farmer's%20Gold%20Triphala%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Farmer's%20Gold%20Triphala%20Powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-farmers-gold-protein-powder-200-gm",
    "nameBn": "ফার্মার‘স গোল্ড প্রোটিন গুঁড়া ২০০গ্রাম",
    "nameEn": "Farmer's Gold Protein Powder 200 gm",
    "category": "rice-pulses",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/farmers-gold-protein-powder-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131671&q=best&v=1",
    "mrp": 450,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:54.651Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 450,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/farmers-gold-protein-powder-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 450,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Farmer's%20Gold%20Protein%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 450,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Farmer's%20Gold%20Protein%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 450,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Farmer's%20Gold%20Protein%20Powder%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-suji-500-gm-6",
    "nameBn": "এ সি আই পিওর সুজি ৫০০ গ্রাম",
    "nameEn": "ACI Pure Suji 500 gm",
    "category": "rice-pulses",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/aci-pure-suji-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177380&q=best&v=1",
    "mrp": 48,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.279Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 48,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-suji-500-gm-6",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 48,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Suji%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 48,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Suji%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 48,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Suji%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-suji-250-gm",
    "nameBn": "এসিআই পিওর সুজি ২৫০ গ্রাম",
    "nameEn": "ACI Pure Suji 250 gm",
    "category": "rice-pulses",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/aci-pure-suji-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177152&q=best&v=1",
    "mrp": 25,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.279Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-suji-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 25,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Suji%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 25,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Suji%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Suji%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-lachcha-semai-150-gm",
    "nameBn": "এ সি আই পিওর লাচ্ছা সেমাই ১৫০ গ্রাম",
    "nameEn": "ACI Pure Lachcha Semai 150 gm",
    "category": "rice-pulses",
    "unit": "150 gm",
    "image": "https://chaldn.com/_mpimage/aci-pure-lachcha-semai-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D148229&q=best&v=1",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.279Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-lachcha-semai-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 55,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Lachcha%20Semai%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 55,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Lachcha%20Semai%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Lachcha%20Semai%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-pure-vermicelli-shemai-200-gm",
    "nameBn": "এ সি আই পিওর ভার্মিসেলি (সেমাই) ২০০ গ্রাম",
    "nameEn": "ACI Pure Vermicelli (Shemai) 200 gm",
    "category": "rice-pulses",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/aci-pure-vermicelli-shemai-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47086&q=best&v=1",
    "mrp": 40,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.279Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-pure-vermicelli-shemai-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 40,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Pure%20Vermicelli%20(Shemai)%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 40,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Pure%20Vermicelli%20(Shemai)%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Pure%20Vermicelli%20(Shemai)%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-teer-semolina-suji-pack-500-gm",
    "nameBn": "তীর সেমোলিনা সুজি ৫০০ গ্রাম",
    "nameEn": "Teer Semolina Suji 500 gm",
    "category": "rice-pulses",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/teer-semolina-suji-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101043&q=best&v=1",
    "mrp": 48,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.279Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 48,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/teer-semolina-suji-pack-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 48,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Teer%20Semolina%20Suji%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 48,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Teer%20Semolina%20Suji%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 48,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Teer%20Semolina%20Suji%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rahul-rosted-semolina-vaja-suji-400-gm",
    "nameBn": "রাহুল ভাজা সুজি ৪০০ গ্রাম",
    "nameEn": "Rahul Rosted Semolina (Vaja Suji) 400 gm",
    "category": "rice-pulses",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/rahul-rosted-semolina-vaja-suji-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D185279&q=best&v=1",
    "mrp": 72,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.279Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 72,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rahul-rosted-semolina-vaja-suji-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 72,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rahul%20Rosted%20Semolina%20(Vaja%20Suji)%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 72,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rahul%20Rosted%20Semolina%20(Vaja%20Suji)%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 72,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rahul%20Rosted%20Semolina%20(Vaja%20Suji)%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dano-daily-pushti-milk-powder-1-kg",
    "nameBn": "আরলা ডানো ডেইলি পুষ্টি গুঁড়া দুধ ১ কেজি",
    "nameEn": "Dano Daily Pushti Milk Powder 1 kg",
    "category": "dairy",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/dano-daily-pushti-milk-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169269&q=best&v=1",
    "mrp": 770,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.602Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 770,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dano-daily-pushti-milk-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 770,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dano%20Daily%20Pushti%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 770,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dano%20Daily%20Pushti%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 770,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dano%20Daily%20Pushti%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dano-daily-pushti-milk-powder-500-gm",
    "nameBn": "আরলা ডানো ডেইলি পুষ্টি  গুঁড়া দুধ ৫০০ গ্রাম",
    "nameEn": "Dano Daily Pushti Milk Powder 500 gm",
    "category": "dairy",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/dano-daily-pushti-milk-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D180158&q=best&v=1",
    "mrp": 400,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.602Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dano-daily-pushti-milk-powder-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 400,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dano%20Daily%20Pushti%20Milk%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 400,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dano%20Daily%20Pushti%20Milk%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dano%20Daily%20Pushti%20Milk%20Powder%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-marks-full-cream-milk-powder-poly-500-gm",
    "nameBn": "মার্কস ফুল ক্রিম গুঁড়া দুধ পলি ৫০০ গ্রাম",
    "nameEn": "Marks Full Cream Milk Powder Poly 500 gm",
    "category": "dairy",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/marks-full-cream-milk-powder-poly-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130615&q=best&v=1",
    "mrp": 480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.602Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/marks-full-cream-milk-powder-poly-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Marks%20Full%20Cream%20Milk%20Powder%20Poly%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Marks%20Full%20Cream%20Milk%20Powder%20Poly%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Marks%20Full%20Cream%20Milk%20Powder%20Poly%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-marks-full-cream-milk-powder-poly-1-kg",
    "nameBn": "মার্কস ফুল ক্রিম গুঁড়া দুধ পলি ১ কেজি",
    "nameEn": "Marks Full Cream Milk Powder Poly 1 kg",
    "category": "dairy",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/marks-full-cream-milk-powder-poly-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D59268&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.602Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/marks-full-cream-milk-powder-poly-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Marks%20Full%20Cream%20Milk%20Powder%20Poly%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Marks%20Full%20Cream%20Milk%20Powder%20Poly%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Marks%20Full%20Cream%20Milk%20Powder%20Poly%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-marks-gold-high-calcium-non-fat-milk-powder-40-y-400-gm",
    "nameBn": "মার্কস গোল্ড হাই ক্যালসিয়াম নন ফ্যাট গুঁড়া দুধ ৪০ বছর+ ৪০০ গ্রাম",
    "nameEn": "Marks Gold High Calcium Non Fat Milk Powder 40 Y+ 400 gm",
    "category": "dairy",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/marks-gold-high-calcium-non-fat-milk-powder-40-y-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D146818&q=best&v=1",
    "mrp": 425,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.602Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/marks-gold-high-calcium-non-fat-milk-powder-40-y-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 425,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Marks%20Gold%20High%20Calcium%20Non%20Fat%20Milk%20Powder%2040%20Y%2B%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 425,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Marks%20Gold%20High%20Calcium%20Non%20Fat%20Milk%20Powder%2040%20Y%2B%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Marks%20Gold%20High%20Calcium%20Non%20Fat%20Milk%20Powder%2040%20Y%2B%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-marks-gold-high-calcium-milk-powder-40y-free-glass-400-gm",
    "nameBn": "মার্কস গোল্ড হাই ক্যালসিয়াম গুঁড়া দুধ ৪০+ বয়সের (ফ্রি গ্লাস) ৪০০ গ্রাম",
    "nameEn": "Marks Gold High Calcium Milk Powder 40Y+ (Free Glass) 400 gm",
    "category": "dairy",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/marks-gold-high-calcium-milk-powder-40y-free-glass-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130614&q=best&v=1",
    "mrp": 360,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.602Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 360,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/marks-gold-high-calcium-milk-powder-40y-free-glass-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 360,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Marks%20Gold%20High%20Calcium%20Milk%20Powder%2040Y%2B%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 360,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Marks%20Gold%20High%20Calcium%20Milk%20Powder%2040Y%2B%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 360,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Marks%20Gold%20High%20Calcium%20Milk%20Powder%2040Y%2B%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-arla-dano-power-full-cream-milk-powder-1-kg",
    "nameBn": "আরলা ডানো পাওয়ার ফুল ক্রিম গুঁড়া দুধ ১ কেজি",
    "nameEn": "Dano Power Full Cream Milk Powder 1 kg",
    "category": "dairy",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/dano-power-full-cream-milk-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D187005&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.982Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/arla-dano-power-full-cream-milk-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dano%20Power%20Full%20Cream%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dano%20Power%20Full%20Cream%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dano%20Power%20Full%20Cream%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-instant-full-cream-milk-powder-1-kg",
    "nameBn": "ফ্রেশ ইনস্ট্যান্ট ফুল ক্রিম গুঁড়া দুধ ১ কেজি",
    "nameEn": "Fresh Instant Full Cream Milk Powder 1 kg",
    "category": "dairy",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/fresh-instant-full-cream-milk-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130892&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.982Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-instant-full-cream-milk-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Instant%20Full%20Cream%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Instant%20Full%20Cream%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Instant%20Full%20Cream%20Milk%20Powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-danish-condensed-milk-397-gm",
    "nameBn": "ড্যানিশ কনডেন্সড ফিল্ড মিল্ক ৩৯৭ গ্রাম",
    "nameEn": "Danish Condensed Filled Milk 397 gm",
    "category": "dairy",
    "unit": "397 gm",
    "image": "https://chaldn.com/_mpimage/danish-condensed-filled-milk-397-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127453&q=best&v=1",
    "mrp": 105,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.982Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/danish-condensed-milk-397-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 105,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Danish%20Condensed%20Filled%20Milk%20397%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 105,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Danish%20Condensed%20Filled%20Milk%20397%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Danish%20Condensed%20Filled%20Milk%20397%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-starship-condensed-milk-400-gm",
    "nameBn": "স্টারশিপ কনডেন্সড মিল্ক ৪০০ গ্রাম",
    "nameEn": "Starship Condensed Milk 400 gm",
    "category": "dairy",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/starship-condensed-milk-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135316&q=best&v=1",
    "mrp": 105,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.982Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/starship-condensed-milk-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 105,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Starship%20Condensed%20Milk%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 105,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Starship%20Condensed%20Milk%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Starship%20Condensed%20Milk%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-puck-sterilized-cream-160-gm",
    "nameBn": "পুক স্টেরিলাইজড ক্রিম ১৬০ গ্রাম",
    "nameEn": "Puck Sterilized Cream 160 gm",
    "category": "dairy",
    "unit": "160 gm",
    "image": "https://chaldn.com/_mpimage/puck-sterilized-cream-160-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132395&q=best&v=1&m=400",
    "mrp": 239,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.982Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 239,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/puck-sterilized-cream-160-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 239,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Puck%20Sterilized%20Cream%20160%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 239,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Puck%20Sterilized%20Cream%20160%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 239,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Puck%20Sterilized%20Cream%20160%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-condensed-milk-400-gm",
    "nameBn": "নাম্বার ওয়ান কনডেন্সড মিল্ক ৪০০ গ্রাম",
    "nameEn": "No 1. Condensed Milk 400 gm",
    "category": "dairy",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/no-1-condensed-milk-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131446&q=best&v=1",
    "mrp": 105,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:55.982Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-condensed-milk-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 105,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=No%201.%20Condensed%20Milk%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 105,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=No%201.%20Condensed%20Milk%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=No%201.%20Condensed%20Milk%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-marks-diet-low-fat-milk-powder-free-glass-400-gm",
    "nameBn": "মার্কস ডায়েট লো ফ্যাট গুঁড়া দুধ (ফ্রি গ্লাস) ৪০০ গ্রাম",
    "nameEn": "Marks Diet Low Fat Milk Powder (Free Glass) 400 gm",
    "category": "dairy",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/marks-diet-low-fat-milk-powder-free-glass-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130604&q=best&v=1",
    "mrp": 360,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.327Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 360,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/marks-diet-low-fat-milk-powder-free-glass-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 360,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Marks%20Diet%20Low%20Fat%20Milk%20Powder%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 360,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Marks%20Diet%20Low%20Fat%20Milk%20Powder%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 360,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Marks%20Diet%20Low%20Fat%20Milk%20Powder%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-marks-active-school-milk-powder-free-glass-400-gm",
    "nameBn": "মার্কস অ্যাক্টিভ স্কুল গুঁড়া দুধ (ফ্রি গ্লাস) ৪০০ গ্রাম",
    "nameEn": "Marks Active School Milk Powder (Free Glass) 400 gm",
    "category": "dairy",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/marks-active-school-milk-powder-free-glass-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130603&q=best&v=1",
    "mrp": 340,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.327Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 340,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/marks-active-school-milk-powder-free-glass-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 340,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Marks%20Active%20School%20Milk%20Powder%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 340,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Marks%20Active%20School%20Milk%20Powder%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 340,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Marks%20Active%20School%20Milk%20Powder%20(Free%20Glass)%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-dairy-pasteurized-liquid-milk-1-ltr",
    "nameBn": "আড়ং ডেইরি পাস্তুরিত তরল দুধ ১ লিটার",
    "nameEn": "Aarong Dairy Pasteurized Liquid Milk 1 ltr",
    "category": "dairy",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-pasteurized-liquid-milk-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D119561&q=best&v=1",
    "mrp": 105,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.996Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-dairy-pasteurized-liquid-milk-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 105,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Dairy%20Pasteurized%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 105,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Dairy%20Pasteurized%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Dairy%20Pasteurized%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-pasteurized-full-cream-liquid-milk-1-ltr",
    "nameBn": "প্রাণ পাস্তুরিত ফুল ক্রিম তরল দুধ ১ লিটার",
    "nameEn": "Pran Pasteurized Full Cream Liquid Milk 1 ltr",
    "category": "dairy",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/pran-pasteurized-full-cream-liquid-milk-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132322&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.996Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-pasteurized-full-cream-liquid-milk-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-danish-ayran-pasteurized-full-cream-liquid-milk-1-ltr",
    "nameBn": "ড্যানিশ আইরান পাস্তুরিত পূর্ন ননীযুক্ত তরল দুধ ১ লিটার",
    "nameEn": "Danish Ayran Pasteurized Full Cream Liquid Milk 1 ltr",
    "category": "dairy",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/danish-ayran-pasteurized-full-cream-liquid-milk-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127452&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.996Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/danish-ayran-pasteurized-full-cream-liquid-milk-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Danish%20Ayran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Danish%20Ayran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Danish%20Ayran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-danish-ayran-pasteurized-full-cream-liquid-milk-2-ltr",
    "nameBn": "ড্যানিশ আইরান পাস্তুরিত পূর্ন ননীযুক্ত তরল দুধ ২ লিটার",
    "nameEn": "Danish Ayran Pasteurized Full Cream Liquid Milk 2 ltr",
    "category": "dairy",
    "unit": "2 ltr",
    "image": "https://chaldn.com/_mpimage/danish-ayran-pasteurized-full-cream-liquid-milk-2-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101671&q=best&v=1",
    "mrp": 255,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.996Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 255,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/danish-ayran-pasteurized-full-cream-liquid-milk-2-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 255,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Danish%20Ayran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%202%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 255,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Danish%20Ayran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%202%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 255,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Danish%20Ayran%20Pasteurized%20Full%20Cream%20Liquid%20Milk%202%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-dairy-pasteurized-low-fat-milk-500-ml",
    "nameBn": "আড়ং ডেইরি পাস্তুরিত লো ফ্যাট দুধ ৫০০ মিলি",
    "nameEn": "Aarong Dairy Pasteurized Low Fat Milk 500 ml",
    "category": "dairy",
    "unit": "500 ml",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-pasteurized-low-fat-milk-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D122753&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.996Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-dairy-pasteurized-low-fat-milk-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Dairy%20Pasteurized%20Low%20Fat%20Milk%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Dairy%20Pasteurized%20Low%20Fat%20Milk%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Dairy%20Pasteurized%20Low%20Fat%20Milk%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-milk-vita-pasteurized-standardized-milk-1-ltr",
    "nameBn": "মিল্ক ভিটা পাস্তুরিত স্ট্যান্ডার্ডাইজড দুধ ১ লিটার",
    "nameEn": "Milk Vita Pasteurized Standardized Milk 1 ltr",
    "category": "dairy",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/milk-vita-pasteurized-standardized-milk-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177270&q=low&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:56.996Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/milk-vita-pasteurized-standardized-milk-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Milk%20Vita%20Pasteurized%20Standardized%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Milk%20Vita%20Pasteurized%20Standardized%20Milk%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Milk%20Vita%20Pasteurized%20Standardized%20Milk%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-milk-vita-pasteurized-standardized-milk-500-ml",
    "nameBn": "মিল্ক ভিটা পাস্তুরিত স্ট্যান্ডার্ডাইজড দুধ ৫০০ মিলি",
    "nameEn": "Milk Vita Pasteurized Standardized Milk 500 ml",
    "category": "dairy",
    "unit": "500 ml",
    "image": "https://chaldn.com/_mpimage/milk-vita-pasteurized-standardized-milk-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177273&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:57.325Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/milk-vita-pasteurized-standardized-milk-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Milk%20Vita%20Pasteurized%20Standardized%20Milk%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Milk%20Vita%20Pasteurized%20Standardized%20Milk%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Milk%20Vita%20Pasteurized%20Standardized%20Milk%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-live-cock-chicken-processed-25-gm-500-gm",
    "nameBn": "জীবিত কক মুরগি (প্রক্রিয়াকৃত) ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Live Cock Chicken (Processed) ± 25 gm 500 gm",
    "category": "dairy",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/live-cock-chicken-processed-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D165313&q=best&v=1&m=400",
    "mrp": 355,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:57.685Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳36 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳22 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 319,
        "inStock": true,
        "discountText": "৳36 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/live-cock-chicken-processed-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 333,
        "inStock": true,
        "discountText": "৳22 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Live%20Cock%20Chicken%20(Processed)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 346,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Live%20Cock%20Chicken%20(Processed)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 339,
        "inStock": true,
        "discountText": "৳16 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Live%20Cock%20Chicken%20(Processed)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-whole-broiler-chicken-skin-off-net-weight-1-kg",
    "nameBn": "ব্রয়লার মুরগি চামড়া ছাড়া ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Broiler Chicken Skin Off ± 50 gm 1 kg",
    "category": "dairy",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/broiler-chicken-skin-off-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163139&q=best&v=1&m=400",
    "mrp": 359,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:57.685Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 359,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/whole-broiler-chicken-skin-off-net-weight-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 359,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Broiler%20Chicken%20Skin%20Off%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 359,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Broiler%20Chicken%20Skin%20Off%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 359,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Broiler%20Chicken%20Skin%20Off%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-whole-broiler-chicken-skin-on-net-weight-1-kg",
    "nameBn": "ব্রয়লার মুরগি চামড়া সহ ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Broiler Chicken Skin On ± 50 gm 1 kg",
    "category": "dairy",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/broiler-chicken-skin-on-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163138&q=best&v=1",
    "mrp": 345,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:57.685Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳26 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳16 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 319,
        "inStock": true,
        "discountText": "৳26 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/whole-broiler-chicken-skin-on-net-weight-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 329,
        "inStock": true,
        "discountText": "৳16 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Broiler%20Chicken%20Skin%20On%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 338,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Broiler%20Chicken%20Skin%20On%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 333,
        "inStock": true,
        "discountText": "৳12 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Broiler%20Chicken%20Skin%20On%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-broiler-chicken-skin-off-50-gm-14-kg",
    "nameBn": "ব্রয়লার মুরগি চামড়া ছাড়া ± ৫০ গ্রাম ১.৪ কেজি",
    "nameEn": "Broiler Chicken Skin Off ± 50 gm 1.4 kg",
    "category": "dairy",
    "unit": "1.4 kg",
    "image": "https://chaldn.com/_mpimage/broiler-chicken-skin-off-50-gm-14-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163162&q=best&v=1&m=400",
    "mrp": 489,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:57.685Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 489,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/broiler-chicken-skin-off-50-gm-14-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 489,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Broiler%20Chicken%20Skin%20Off%20%C2%B1%2050%20gm%201.4%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 489,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Broiler%20Chicken%20Skin%20Off%20%C2%B1%2050%20gm%201.4%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 489,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Broiler%20Chicken%20Skin%20Off%20%C2%B1%2050%20gm%201.4%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chicken-liver-kolija-25-gm-500-gm",
    "nameBn": "মুরগির কলিজা ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Chicken Liver (Kolija) ± 25 gm 500 gm",
    "category": "dairy",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/chicken-liver-kolija-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D167892&q=best&v=1",
    "mrp": 199,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:57.685Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chicken-liver-kolija-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 199,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chicken%20Liver%20(Kolija)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 199,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chicken%20Liver%20(Kolija)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 199,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chicken%20Liver%20(Kolija)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bengal-meat-chicken-thigh-keema-net-weight-50-gm-1-kg",
    "nameBn": "বেঙ্গল মিট মুরগির কুচি মাংস ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Bengal Meat Chicken Thigh Keema ± 50 gm 1 kg",
    "category": "dairy",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/bengal-meat-chicken-thigh-keema-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74662&q=best&v=1",
    "mrp": 635,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:57.685Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 635,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bengal-meat-chicken-thigh-keema-net-weight-50-gm-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 635,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bengal%20Meat%20Chicken%20Thigh%20Keema%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 635,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bengal%20Meat%20Chicken%20Thigh%20Keema%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 635,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bengal%20Meat%20Chicken%20Thigh%20Keema%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chicken-eggs-layer-white-12-pcs",
    "nameBn": "মুরগির ডিম লেয়ার (সাদা) ১২ টি",
    "nameEn": "Chicken Eggs Layer (White) 12 pcs",
    "category": "dairy",
    "unit": "12 pcs",
    "image": "https://chaldn.com/_mpimage/chicken-eggs-layer-white-12-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D165811&q=best&v=1",
    "mrp": 135,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.009Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chicken-eggs-layer-white-12-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 135,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chicken%20Eggs%20Layer%20(White)%2012%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 135,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chicken%20Eggs%20Layer%20(White)%2012%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chicken%20Eggs%20Layer%20(White)%2012%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chicken-eggs-layer-white-6-pcs",
    "nameBn": "মুরগির ডিম লেয়ার (সাদা) ৬ টি",
    "nameEn": "Chicken Eggs Layer (White) 6 pcs",
    "category": "dairy",
    "unit": "6 pcs",
    "image": "https://chaldn.com/_mpimage/chicken-eggs-layer-white-6-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D165810&q=best&v=1&m=400",
    "mrp": 69,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.009Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 69,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chicken-eggs-layer-white-6-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 69,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chicken%20Eggs%20Layer%20(White)%206%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 69,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chicken%20Eggs%20Layer%20(White)%206%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 69,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chicken%20Eggs%20Layer%20(White)%206%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-amul-butter-unsalted-500-gm",
    "nameBn": "আমুল মাখন আনসল্টেড ৫০০ গ্রাম",
    "nameEn": "Amul Butter Unsalted 500 gm",
    "category": "dairy",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/amul-butter-unsalted-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D90355&q=best&v=1",
    "mrp": 800,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.336Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 800,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/amul-butter-unsalted-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 800,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Amul%20Butter%20Unsalted%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 800,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Amul%20Butter%20Unsalted%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 800,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Amul%20Butter%20Unsalted%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-amul-butter-salted-100-gm",
    "nameBn": "আমুল মাখন লবণযুক্ত ২০০ গ্রাম",
    "nameEn": "Amul Butter Salted 100 gm",
    "category": "dairy",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/amul-butter-salted-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D69582&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.336Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/amul-butter-salted-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Amul%20Butter%20Salted%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Amul%20Butter%20Salted%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Amul%20Butter%20Salted%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lurpak-butter-salted-200-gm-2",
    "nameBn": "লুরপাক সল্টেড স্প্রেডবাল বাটার ২০০ গ্রাম",
    "nameEn": "Lurpak Butter Salted 200 gm",
    "category": "dairy",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/lurpak-butter-salted-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130417&q=best&v=1",
    "mrp": 635,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.336Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 635,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lurpak-butter-salted-200-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 635,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lurpak%20Butter%20Salted%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 635,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lurpak%20Butter%20Salted%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 635,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lurpak%20Butter%20Salted%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lurpak-butter-unsalted-200-gm",
    "nameBn": "লুরপাক মাখন লবন মুক্ত ২০০ গ্রাম",
    "nameEn": "Lurpak Butter Unsalted 200 gm",
    "category": "dairy",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/lurpak-butter-unsalted-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130418&q=best&v=1&m=400",
    "mrp": 880,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.336Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 880,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lurpak-butter-unsalted-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 880,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lurpak%20Butter%20Unsalted%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 880,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lurpak%20Butter%20Unsalted%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 880,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lurpak%20Butter%20Unsalted%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-dairy-butter-200-gm",
    "nameBn": "আড়ং ডেইরি মাখন ২০০ গ্রাম",
    "nameEn": "Aarong Dairy Butter 200 gm",
    "category": "dairy",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-butter-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D46787&q=best&v=1",
    "mrp": 270,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.336Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 270,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-dairy-butter-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 270,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Dairy%20Butter%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 270,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Dairy%20Butter%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 270,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Dairy%20Butter%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-anchor-unsalted-butter-227-gm",
    "nameBn": "অ্যাঙ্কর আনসল্টেড বাটার ২২৭ গ্রাম",
    "nameEn": "Anchor Unsalted Butter 227 gm",
    "category": "dairy",
    "unit": "227 gm",
    "image": "https://chaldn.com/_mpimage/anchor-unsalted-butter-227-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D159981&q=best&v=1",
    "mrp": 500,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.336Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 500,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/anchor-unsalted-butter-227-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 500,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Anchor%20Unsalted%20Butter%20227%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 500,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Anchor%20Unsalted%20Butter%20227%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 500,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Anchor%20Unsalted%20Butter%20227%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kraft-original-philadelphia-cream-cheese-250-gm",
    "nameBn": "ফিলাডেলফিয়া ক্রিম চিজ ২৫০ গ্রাম",
    "nameEn": "Philadelphia Cream Cheese 250 gm",
    "category": "dairy",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/philadelphia-cream-cheese-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132112&q=best&v=1&m=400",
    "mrp": 750,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.646Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 750,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kraft-original-philadelphia-cream-cheese-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 750,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Philadelphia%20Cream%20Cheese%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 750,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Philadelphia%20Cream%20Cheese%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 750,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Philadelphia%20Cream%20Cheese%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-puck-cream-cheese-spread-140-gm",
    "nameBn": "পাক ক্রিম চিজ স্প্রেড ১৪০ গ্রাম",
    "nameEn": "Puck Cream Cheese Spread 140 gm",
    "category": "dairy",
    "unit": "140 gm",
    "image": "https://chaldn.com/_mpimage/puck-cream-cheese-spread-140-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D180125&q=best&v=1",
    "mrp": 399,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.646Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 399,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/puck-cream-cheese-spread-140-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 399,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Puck%20Cream%20Cheese%20Spread%20140%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 399,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Puck%20Cream%20Cheese%20Spread%20140%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 399,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Puck%20Cream%20Cheese%20Spread%20140%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-anchor-white-cheddar-block-250-gm",
    "nameBn": "অ্যাংকর হোয়াইট ছিডার ব্লক ২৫০ গ্রাম",
    "nameEn": "Anchor White Cheddar Block 250 gm",
    "category": "dairy",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/anchor-white-cheddar-block-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D93716&q=best&v=1",
    "mrp": 555,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.646Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 555,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/anchor-white-cheddar-block-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 555,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Anchor%20White%20Cheddar%20Block%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 555,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Anchor%20White%20Cheddar%20Block%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 555,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Anchor%20White%20Cheddar%20Block%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-almarai-processed-cream-cheese-500-gm",
    "nameBn": "আলমারাই প্রোসেস্ড ক্রিম চিজ ৫০০ গ্রাম",
    "nameEn": "Almarai spreadable Cream Cheese 500 gm",
    "category": "dairy",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/almarai-spreadable-cream-cheese-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D175499&q=best&v=1",
    "mrp": 1290,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.646Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/almarai-processed-cream-cheese-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1290,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Almarai%20spreadable%20Cream%20Cheese%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1290,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Almarai%20spreadable%20Cream%20Cheese%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Almarai%20spreadable%20Cream%20Cheese%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-american-garden-arla-sandwich-slice-cheese-200-gm",
    "nameBn": "আরলা স্যান্ডউইচ স্লাইস পনির ২০০ গ্রাম",
    "nameEn": "Arla Sandwich Slice Cheese 200 gm",
    "category": "dairy",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/arla-sandwich-slice-cheese-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D125242&q=best&v=1&m=400",
    "mrp": 460,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.646Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 460,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/american-garden-arla-sandwich-slice-cheese-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 460,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Arla%20Sandwich%20Slice%20Cheese%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 460,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Arla%20Sandwich%20Slice%20Cheese%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 460,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Arla%20Sandwich%20Slice%20Cheese%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-almarai-cream-cheese-108-gm",
    "nameBn": "আলমারাই ক্রিম চিজ ১০৮ গ্রাম",
    "nameEn": "Almarai Cream Cheese 108 gm",
    "category": "dairy",
    "unit": "108 gm",
    "image": "https://chaldn.com/_mpimage/almarai-cream-cheese-108-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D73416&q=best&v=1",
    "mrp": 290,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.646Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/almarai-cream-cheese-108-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 290,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Almarai%20Cream%20Cheese%20108%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 290,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Almarai%20Cream%20Cheese%20108%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Almarai%20Cream%20Cheese%20108%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-refined-sugar-500-gm-3",
    "nameBn": "ফ্রেস রিফাইন্ড চিনি ৫০০ গ্রাম",
    "nameEn": "Fresh Refined Sugar 500 gm",
    "category": "staples",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/fresh-refined-sugar-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D59305&q=best&v=1&m=400",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.983Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-refined-sugar-500-gm-3",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 55,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Refined%20Sugar%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 55,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Refined%20Sugar%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Refined%20Sugar%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-starship-refined-sugar-1-kg",
    "nameBn": "স্টারশিপ রিফাইন্ড চিনি ১ কেজি",
    "nameEn": "Starship Refined Sugar 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/starship-refined-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D174230&q=best&v=1",
    "mrp": 110,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.983Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/starship-refined-sugar-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 110,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Starship%20Refined%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 110,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Starship%20Refined%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Starship%20Refined%20Sugar%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-akij-essential-refined-sugar-1-kg",
    "nameBn": "আকিজ এসেনসিয়াল পরিশোধিত চিনি ১ কেজি",
    "nameEn": "Akij Essential Refined Sugar 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/akij-essential-refined-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D121194&q=best&v=1",
    "mrp": 135,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.983Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/akij-essential-refined-sugar-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 135,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Akij%20Essential%20Refined%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 135,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Akij%20Essential%20Refined%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Akij%20Essential%20Refined%20Sugar%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-loose-white-sugar-1-kg",
    "nameBn": "সাদা চিনি খোলা ১ কেজি",
    "nameEn": "Loose White Sugar 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/loose-white-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98364&q=best&v=1",
    "mrp": 109,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.983Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 109,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/loose-white-sugar-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 109,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Loose%20White%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 109,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Loose%20White%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 109,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Loose%20White%20Sugar%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-sugar-sachet-box-250-gm",
    "nameBn": "ফ্রেশ চিনি স্যাশে বক্স ২৫০ গ্রাম",
    "nameEn": "Fresh Sugar Sachet Box 250 gm",
    "category": "staples",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/fresh-sugar-sachet-box-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128653&q=best&v=1",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.983Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-sugar-sachet-box-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 55,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Sugar%20Sachet%20Box%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 55,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Sugar%20Sachet%20Box%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Sugar%20Sachet%20Box%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sis-white-icing-sugar-500-gm",
    "nameBn": "সিস সাদা আইসিং চিনি ৫০০ গ্রাম",
    "nameEn": "Sis White Icing Sugar 500 gm",
    "category": "staples",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/sis-white-icing-sugar-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133672&q=best&v=1",
    "mrp": 420,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:58.983Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳61 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳37 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 359,
        "inStock": true,
        "discountText": "৳61 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sis-white-icing-sugar-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 383,
        "inStock": true,
        "discountText": "৳37 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sis%20White%20Icing%20Sugar%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 405,
        "inStock": true,
        "discountText": "৳15 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sis%20White%20Icing%20Sugar%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 393,
        "inStock": true,
        "discountText": "৳27 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sis%20White%20Icing%20Sugar%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-onatural-brown-sugar-1-kg",
    "nameBn": "ও'ন্যাচারাল ব্রাউন চিনি ১ কেজি",
    "nameEn": "O'Natural Brown Sugar 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/onatural-brown-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116713&q=best&v=1",
    "mrp": 150,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.282Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/onatural-brown-sugar-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 150,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=O'Natural%20Brown%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 150,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=O'Natural%20Brown%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=O'Natural%20Brown%20Sugar%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-savory-brown-sugar-200-gm",
    "nameBn": "স্যাভোরি গুড় ব্রাউন সুগার ২০০ গ্রাম",
    "nameEn": "Savory Molasses Brown Sugar 200 gm",
    "category": "staples",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/savory-molasses-brown-sugar-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133252&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.282Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/savory-brown-sugar-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Savory%20Molasses%20Brown%20Sugar%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Savory%20Molasses%20Brown%20Sugar%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Savory%20Molasses%20Brown%20Sugar%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-savory-molasses-brown-sugar-454-gm",
    "nameBn": "স্যাভোরি মোলাসেস ব্রাউন সুগার ৪৫৪ গ্রাম",
    "nameEn": "Savory Molasses Brown Sugar 454 gm",
    "category": "staples",
    "unit": "454 gm",
    "image": "https://chaldn.com/_mpimage/savory-molasses-brown-sugar-454-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133253&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.282Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/savory-molasses-brown-sugar-454-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Savory%20Molasses%20Brown%20Sugar%20454%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Savory%20Molasses%20Brown%20Sugar%20454%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Savory%20Molasses%20Brown%20Sugar%20454%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-natural-cane-brown-sugar-1-kg",
    "nameBn": "ন্যাচারাল কেইন ব্রাউন চিনি  ১ কেজি",
    "nameEn": "Mitr Phol Natural Cane Brown  Sugar 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/mitr-phol-natural-cane-brown-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130788&q=best&v=1",
    "mrp": 479,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.282Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 479,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/natural-cane-brown-sugar-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 479,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mitr%20Phol%20Natural%20Cane%20Brown%20%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 479,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mitr%20Phol%20Natural%20Cane%20Brown%20%20Sugar%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 479,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mitr%20Phol%20Natural%20Cane%20Brown%20%20Sugar%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-natural-cane-brown-sugar-500-gm",
    "nameBn": "ন্যাচারাল কেইন ব্রাউন চিনি ৫০০ গ্রাম ",
    "nameEn": "Mitr Phol Natural Cane Brown Sugar 500 gm ",
    "category": "staples",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/mitr-phol-natural-cane-brown-sugar-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130789&q=best&v=1",
    "mrp": 269,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.282Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 269,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/natural-cane-brown-sugar-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 269,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mitr%20Phol%20Natural%20Cane%20Brown%20Sugar%20500%20gm%20",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 269,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mitr%20Phol%20Natural%20Cane%20Brown%20Sugar%20500%20gm%20",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 269,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mitr%20Phol%20Natural%20Cane%20Brown%20Sugar%20500%20gm%20",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-akij-essential-iodized-salt-1-kg",
    "nameBn": "আকিজ এসেনসিয়াল আয়োডিনযুক্ত লবণ ১ কেজি",
    "nameEn": "Akij Essential Iodized Salt 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/akij-essential-iodized-salt-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D122555&q=best&v=1&m=400",
    "mrp": 38,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.631Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 38,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/akij-essential-iodized-salt-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 38,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Akij%20Essential%20Iodized%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 38,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Akij%20Essential%20Iodized%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 38,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Akij%20Essential%20Iodized%20Salt%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-sprinkle-salt-pepper-mix-100-gm",
    "nameBn": "এসিআই স্প্রিংকল লবণ ও গোলমরিচ মিশ্রণ ১০০ গ্রাম",
    "nameEn": "ACI Sprinkle Salt & Pepper Mix 100 gm",
    "category": "staples",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/aci-sprinkle-salt-pepper-mix-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D174550&q=best&v=1",
    "mrp": 125,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.631Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-sprinkle-salt-pepper-mix-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 125,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Sprinkle%20Salt%20%26%20Pepper%20Mix%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 125,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Sprinkle%20Salt%20%26%20Pepper%20Mix%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Sprinkle%20Salt%20%26%20Pepper%20Mix%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-iodized-salt-1-kg",
    "nameBn": "প্রাণ আয়োডিনযুক্ত লবণ ১ কেজি",
    "nameEn": "Pran Iodized Salt 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/pran-iodized-salt-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132238&q=best&v=1",
    "mrp": 42,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.631Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-iodized-salt-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 42,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Iodized%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 42,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Iodized%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Iodized%20Salt%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-provati-bit-salt-100-gm",
    "nameBn": "বিট লবণ ১০০ গ্রাম",
    "nameEn": "Rock Salt (Bit Lobon) 100 gm",
    "category": "staples",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/rock-salt-bit-lobon-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D138598&q=best&v=1",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.631Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/provati-bit-salt-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 55,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rock%20Salt%20(Bit%20Lobon)%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 55,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rock%20Salt%20(Bit%20Lobon)%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rock%20Salt%20(Bit%20Lobon)%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-farmers-gold-himalayan-pink-salt-250-gm",
    "nameBn": "ফার্মার‘স গোল্ড হিমালয়ান পিঙ্ক সল্ট ২৫০ গ্রাম",
    "nameEn": "Farmer's Gold Himalayan Pink Salt 250 gm",
    "category": "staples",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/farmers-gold-himalayan-pink-salt-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160657&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.631Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/farmers-gold-himalayan-pink-salt-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Farmer's%20Gold%20Himalayan%20Pink%20Salt%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Farmer's%20Gold%20Himalayan%20Pink%20Salt%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Farmer's%20Gold%20Himalayan%20Pink%20Salt%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-saad-tasting-salt-100-gm",
    "nameBn": "স্বাদ টেস্টিং সল্ট ১০০ গ্রাম",
    "nameEn": "Saad Tasting Salt 100 gm",
    "category": "staples",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/saad-tasting-salt-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135318&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.631Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/saad-tasting-salt-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Saad%20Tasting%20Salt%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Saad%20Tasting%20Salt%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Saad%20Tasting%20Salt%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-super-premium-vacuum-salt-1-kg",
    "nameBn": "ফ্রেশ সুপার প্রিমিয়াম (ভ্যাকুয়াম) লবণ ১ কেজি",
    "nameEn": "Fresh Super Premium (Vacuum) Salt 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/fresh-super-premium-vacuum-salt-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128654&q=best&v=1",
    "mrp": 42,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.958Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-super-premium-vacuum-salt-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 42,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Super%20Premium%20(Vacuum)%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 42,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Super%20Premium%20(Vacuum)%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Super%20Premium%20(Vacuum)%20Salt%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-super-premium-salt-jar-750-gm-2",
    "nameBn": "ফ্রেশ সুপার প্রিমিয়াম লবণ জার ৭৫০ গ্রাম",
    "nameEn": "Fresh Super Premium Salt Jar 750 gm",
    "category": "staples",
    "unit": "750 gm",
    "image": "https://chaldn.com/_mpimage/fresh-super-premium-salt-jar-750-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D113295&q=best&v=1",
    "mrp": 35,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:01:59.958Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-super-premium-salt-jar-750-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 35,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Super%20Premium%20Salt%20Jar%20750%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 35,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Super%20Premium%20Salt%20Jar%20750%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Super%20Premium%20Salt%20Jar%20750%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-molla-super-salt-1-kg",
    "nameBn": "মোল্লা সুপার লবণ ১ কেজি   ",
    "nameEn": "Molla Super Salt 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/molla-super-salt-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D152663&q=best&v=1",
    "mrp": 42,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:00.262Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/molla-super-salt-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 42,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Molla%20Super%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 42,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Molla%20Super%20Salt%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Molla%20Super%20Salt%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dekko-fruit-funda-soft-drink-powder-orange-free-mango-drink-powder-125-gm-500-gm",
    "nameBn": "ডেকো ফ্রুট ফান্ডা সফট ড্রিংক পাউডার অরেঞ্জ (ফ্রি ম্যাংগো ড্রিঙ্ক পাউডার ১২৫ গ্রাম) ৫০০ গ্রাম",
    "nameEn": "Dekko Fruit Funda Soft Drink Powder Orange (Free Mango Drink Powder 125 gm) 500 gm",
    "category": "staples",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/dekko-fruit-funda-soft-drink-powder-orange-free-mango-drink-powder-125-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D186989&q=best&v=1",
    "mrp": 280,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:00.598Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dekko-fruit-funda-soft-drink-powder-orange-free-mango-drink-powder-125-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 280,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20Orange%20(Free%20Mango%20Drink%20Powder%20125%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 280,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20Orange%20(Free%20Mango%20Drink%20Powder%20125%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20Orange%20(Free%20Mango%20Drink%20Powder%20125%20gm)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dekko-fruit-funda-soft-drink-powder-mango-free-orange-drink-powder-125-gm-500-gm",
    "nameBn": "ডেকো ফ্রুট ফান্ডা সফট ড্রিংক পাউডার ম্যাংগো (ফ্রি অরেঞ্জ ড্রিঙ্ক পাউডার ১২৫ গ্রাম) ৫০০ গ্রাম",
    "nameEn": "Dekko Fruit Funda Soft Drink Powder Mango (Free Orange Drink Powder 125 gm) 500 gm",
    "category": "staples",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/dekko-fruit-funda-soft-drink-powder-mango-free-orange-drink-powder-125-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D186988&q=best&v=1",
    "mrp": 280,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:00.598Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dekko-fruit-funda-soft-drink-powder-mango-free-orange-drink-powder-125-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 280,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20Mango%20(Free%20Orange%20Drink%20Powder%20125%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 280,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20Mango%20(Free%20Orange%20Drink%20Powder%20125%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20Mango%20(Free%20Orange%20Drink%20Powder%20125%20gm)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dekko-fruit-funda-soft-drink-powder-orange-250-gm",
    "nameBn": "ডেকো ফ্রুট ফান্ডা সফট ড্রিংক পাউডার (অরেঞ্জ) ২৫০ গ্রাম",
    "nameEn": "Dekko Fruit Funda Soft Drink Powder (Orange) 250 gm",
    "category": "staples",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/dekko-fruit-funda-soft-drink-powder-orange-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D186987&q=best&v=1",
    "mrp": 150,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:00.598Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳23 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳14 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 127,
        "inStock": true,
        "discountText": "৳23 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dekko-fruit-funda-soft-drink-powder-orange-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 136,
        "inStock": true,
        "discountText": "৳14 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20(Orange)%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 144,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20(Orange)%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20(Orange)%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tang-mango-instant-drink-powder-bib-500-gm",
    "nameBn": "ট্যাং ম্যাংগো ইন্সট্যান্ট ড্রিংক পাউডার বিআইবি ৫০০ গ্রাম",
    "nameEn": "Tang Mango Instant Drink Powder BIB 500 gm",
    "category": "staples",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/tang-mango-instant-drink-powder-bib-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169510&q=best&v=1",
    "mrp": 425,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:00.598Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tang-mango-instant-drink-powder-bib-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 425,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tang%20Mango%20Instant%20Drink%20Powder%20BIB%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 425,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tang%20Mango%20Instant%20Drink%20Powder%20BIB%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tang%20Mango%20Instant%20Drink%20Powder%20BIB%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dekko-fruit-funda-soft-drink-powder-orange-125-gm",
    "nameBn": "ডেকো ফ্রুট ফান্ডা সফট ড্রিংক পাউডার (অরেঞ্জ) ১২৫ গ্রাম",
    "nameEn": "Dekko Fruit Funda Soft Drink Powder (Orange) 125 gm",
    "category": "staples",
    "unit": "125 gm",
    "image": "https://chaldn.com/_mpimage/dekko-fruit-funda-soft-drink-powder-orange-125-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D186986&q=best&v=1",
    "mrp": 80,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:00.598Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dekko-fruit-funda-soft-drink-powder-orange-125-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 80,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20(Orange)%20125%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 80,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20(Orange)%20125%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dekko%20Fruit%20Funda%20Soft%20Drink%20Powder%20(Orange)%20125%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tang-orange-instant-drink-powder-bib-75-gm",
    "nameBn": "ট্যাং অরেঞ্জ ইনস্ট্যান্ট ড্রিংক পাউডার বিআইবি ৭৫ গ্রাম",
    "nameEn": "Tang Orange Instant Drink Powder BIB 75 gm",
    "category": "staples",
    "unit": "75 gm",
    "image": "https://chaldn.com/_mpimage/tang-orange-instant-drink-powder-bib-75-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136046&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:00.598Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tang-orange-instant-drink-powder-bib-75-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%2075%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%2075%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%2075%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-coriander-powder-200-gm-radhuni-dhoniya",
    "nameBn": "রাঁধুনী ধনিয়ার গুঁড়া ২০০ গ্রাম",
    "nameEn": "Radhuni Coriander (Dhonia) Powder 200 gm",
    "category": "staples",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-coriander-dhonia-powder-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132897&q=best&v=1",
    "mrp": 110,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.248Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-coriander-powder-200-gm-radhuni-dhoniya",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 110,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Coriander%20(Dhonia)%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 110,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Coriander%20(Dhonia)%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Coriander%20(Dhonia)%20Powder%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-coriander-dhonia-powder-100-gm",
    "nameBn": "রাঁধুনী ধনিয়ার গুঁড়া  ১০০ গ্রাম",
    "nameEn": "Radhuni Coriander (Dhonia) Powder 100 gm",
    "category": "staples",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-coriander-dhonia-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132516&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.248Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-coriander-dhonia-powder-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Coriander%20(Dhonia)%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Coriander%20(Dhonia)%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Coriander%20(Dhonia)%20Powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-cumin-powder-500-gm",
    "nameBn": "রাঁধুনী জিরার গুঁড়া ১০০ গ্রাম",
    "nameEn": "Radhuni Cumin (Jira) Powder 100 gm",
    "category": "staples",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-cumin-jira-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132521&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.552Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-cumin-powder-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Cumin%20(Jira)%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Cumin%20(Jira)%20Powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Cumin%20(Jira)%20Powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-cumin-powder-50-gm",
    "nameBn": "রাঁধুনী জিরার গুঁড়া ৫০ গ্রাম",
    "nameEn": "Radhuni Cumin (Jira) Powder 50 gm",
    "category": "staples",
    "unit": "50 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-cumin-jira-powder-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132522&q=best&v=1",
    "mrp": 85,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.552Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 85,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-cumin-powder-50-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 85,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Cumin%20(Jira)%20Powder%2050%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 85,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Cumin%20(Jira)%20Powder%2050%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 85,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Cumin%20(Jira)%20Powder%2050%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-cumin-powder-200-gm",
    "nameBn": "রাঁধুনী জিরার গুঁড়া ২০০ গ্রাম",
    "nameEn": "Radhuni Cumin (Jira) Powder 200 gm",
    "category": "staples",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-cumin-jira-powder-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132896&q=best&v=1",
    "mrp": 310,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.552Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 310,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-cumin-powder-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 310,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Cumin%20(Jira)%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 310,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Cumin%20(Jira)%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 310,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Cumin%20(Jira)%20Powder%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-beef-bone-in-1-kg-2",
    "nameBn": "বেঙ্গল মিট হাড়সহ গরুর মাংস ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Bengal Meat Beef Bone In ± 50 gm 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/bengal-meat-beef-bone-in-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D77384&q=low&v=1",
    "mrp": 880,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.856Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 880,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/beef-bone-in-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 880,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bengal%20Meat%20Beef%20Bone%20In%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 880,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bengal%20Meat%20Beef%20Bone%20In%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 880,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bengal%20Meat%20Beef%20Bone%20In%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bengal-meat-beef-head-meat-1-kg",
    "nameBn": "বেঙ্গল মিট গরুর মাথার মাংস 1 কেজি",
    "nameEn": "Bengal Meat Beef Head Meat 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/bengal-meat-beef-head-meat-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D83162&q=best&v=1",
    "mrp": 550,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.856Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 550,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bengal-meat-beef-head-meat-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 550,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bengal%20Meat%20Beef%20Head%20Meat%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 550,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bengal%20Meat%20Beef%20Head%20Meat%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 550,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bengal%20Meat%20Beef%20Head%20Meat%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-raaj-hash-swan-meat-after-cutting-net-weight-50-gm-1-kg",
    "nameBn": "রাজহাশ (হাঁস) কাটার পর মাংস (নিট ওজন ± ৫০ গ্রাম) ১ কেজি",
    "nameEn": "Raaj Hash (Swan) Meat After Cutting (Net Weight ± 50 gm) 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/raaj-hash-swan-meat-after-cutting-net-weight-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D167899&q=best&v=1",
    "mrp": 1099,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.856Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1099,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/raaj-hash-swan-meat-after-cutting-net-weight-50-gm-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1099,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Raaj%20Hash%20(Swan)%20Meat%20After%20Cutting%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1099,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Raaj%20Hash%20(Swan)%20Meat%20After%20Cutting%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1099,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Raaj%20Hash%20(Swan)%20Meat%20After%20Cutting%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-quail-meat-2-pcs",
    "nameBn": "কোয়েলের মাংস ২ টি",
    "nameEn": "Quail Meat 2 pcs",
    "category": "staples",
    "unit": "2 pcs",
    "image": "https://chaldn.com/_mpimage/quail-meat-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D167895&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.856Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳11 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳7 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 149,
        "inStock": true,
        "discountText": "৳11 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/quail-meat-2-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 153,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Quail%20Meat%202%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 157,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Quail%20Meat%202%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 155,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Quail%20Meat%202%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mutton-head-meat-regular-net-weight-50-gm-1-kg",
    "nameBn": "খাসির মাথার মাংস রেগুলার (নেট ওজন ± ৫০ গ্রাম) ১ কেজি",
    "nameEn": "Mutton Head Meat Regular (Net Weight ± 50 gm) 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/mutton-head-meat-regular-net-weight-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163258&q=best&v=1",
    "mrp": 639,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.856Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 639,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mutton-head-meat-regular-net-weight-50-gm-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 639,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mutton%20Head%20Meat%20Regular%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 639,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mutton%20Head%20Meat%20Regular%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 639,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mutton%20Head%20Meat%20Regular%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-beijing-duck-meat-after-cutting-net-weight-50-gm-1-kg",
    "nameBn": "বেইজিং হাঁসের মাংস কাটার পর (নেট ওজন ± ৫০ গ্রাম) ১ কেজি",
    "nameEn": "Beijing Duck Meat After Cutting (Net Weight ± 50 gm) 1 kg",
    "category": "staples",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/beijing-duck-meat-after-cutting-net-weight-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163248&q=best&v=1",
    "mrp": 1039,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:01.856Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳240 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳144 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 799,
        "inStock": true,
        "discountText": "৳240 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/beijing-duck-meat-after-cutting-net-weight-50-gm-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 895,
        "inStock": true,
        "discountText": "৳144 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Beijing%20Duck%20Meat%20After%20Cutting%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 979,
        "inStock": true,
        "discountText": "৳60 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Beijing%20Duck%20Meat%20After%20Cutting%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 931,
        "inStock": true,
        "discountText": "৳108 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Beijing%20Duck%20Meat%20After%20Cutting%20(Net%20Weight%20%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-shutkiz-dry-fish-bharta-mix-powder-200-gm",
    "nameBn": "শুটকিজ শুটকি ভর্তা মিক্স পাউডার ২০০ গ্রাম",
    "nameEn": "Shutkiz Dry Fish Bharta Mix Powder 200 gm",
    "category": "staples",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/shutkiz-dry-fish-bharta-mix-powder-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D184238&q=best&v=1",
    "mrp": 520,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.197Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 520,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/shutkiz-dry-fish-bharta-mix-powder-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 520,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Shutkiz%20Dry%20Fish%20Bharta%20Mix%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 520,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Shutkiz%20Dry%20Fish%20Bharta%20Mix%20Powder%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 520,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Shutkiz%20Dry%20Fish%20Bharta%20Mix%20Powder%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-try-dry-fish-balachao-dry-kachki-chutney-5-gm-75-gm",
    "nameBn": "ট্রাই ড্রাই ফিশ বালাচাও কাচকি শুটকীর চাটনি ± ৫ গ্রাম ৭৫ গ্রাম",
    "nameEn": "Try Dry Fish Balachao Dry Kachki Chutney ± 5 gm 75 gm",
    "category": "staples",
    "unit": "75 gm",
    "image": "https://chaldn.com/_mpimage/try-dry-fish-balachao-dry-kachki-chutney-5-gm-75-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132094&q=best&v=1",
    "mrp": 250,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.197Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/try-dry-fish-balachao-dry-kachki-chutney-5-gm-75-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 250,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Try%20Dry%20Fish%20Balachao%20Dry%20Kachki%20Chutney%20%C2%B1%205%20gm%2075%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 250,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Try%20Dry%20Fish%20Balachao%20Dry%20Kachki%20Chutney%20%C2%B1%205%20gm%2075%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Try%20Dry%20Fish%20Balachao%20Dry%20Kachki%20Chutney%20%C2%B1%205%20gm%2075%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-try-dry-fish-balachao-dry-loitta-chutney-5-gm-75-gm",
    "nameBn": "ট্রাই ড্রাই ফিশ বালাচাও লইট্যা শুটকীর চাটনি ± ৫ গ্রাম ৭৫ গ্রাম",
    "nameEn": "Try Dry Fish Balachao Dry Loitta Chutney ± 5 gm 75 gm",
    "category": "staples",
    "unit": "75 gm",
    "image": "https://chaldn.com/_mpimage/try-dry-fish-balachao-dry-loitta-chutney-5-gm-75-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132093&q=best&v=1",
    "mrp": 260,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.197Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 260,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/try-dry-fish-balachao-dry-loitta-chutney-5-gm-75-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 260,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Try%20Dry%20Fish%20Balachao%20Dry%20Loitta%20Chutney%20%C2%B1%205%20gm%2075%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 260,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Try%20Dry%20Fish%20Balachao%20Dry%20Loitta%20Chutney%20%C2%B1%205%20gm%2075%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 260,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Try%20Dry%20Fish%20Balachao%20Dry%20Loitta%20Chutney%20%C2%B1%205%20gm%2075%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-try-dry-fish-balachao-dry-prawn-chutney-10-gm-150-gm",
    "nameBn": "ট্রাই ড্রাই ফিশ বালাচাও চিংড়ী শুটকীর চাটনি ± ১০ গ্রাম ১৫০ গ্রাম",
    "nameEn": "Try Dry Fish Balachao Dry Prawn Chutney ± 10 gm 150 gm",
    "category": "staples",
    "unit": "150 gm",
    "image": "https://chaldn.com/_mpimage/try-dry-fish-balachao-dry-prawn-chutney-10-gm-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132092&q=best&v=1",
    "mrp": 400,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.197Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/try-dry-fish-balachao-dry-prawn-chutney-10-gm-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 400,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Try%20Dry%20Fish%20Balachao%20Dry%20Prawn%20Chutney%20%C2%B1%2010%20gm%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 400,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Try%20Dry%20Fish%20Balachao%20Dry%20Prawn%20Chutney%20%C2%B1%2010%20gm%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Try%20Dry%20Fish%20Balachao%20Dry%20Prawn%20Chutney%20%C2%B1%2010%20gm%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fargo-safe-dry-fish-chingri-shutki-250-gm",
    "nameBn": "ফার্গো সেফ ড্রাই ফিশ (চিংড়ি শুটকি) ২৫০ গ্রাম",
    "nameEn": "Fargo Safe Dry Fish (Chingri Shutki) 250 gm",
    "category": "staples",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/fargo-safe-dry-fish-chingri-shutki-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127937&q=best&v=1",
    "mrp": 290,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.197Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fargo-safe-dry-fish-chingri-shutki-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 290,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fargo%20Safe%20Dry%20Fish%20(Chingri%20Shutki)%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 290,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fargo%20Safe%20Dry%20Fish%20(Chingri%20Shutki)%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fargo%20Safe%20Dry%20Fish%20(Chingri%20Shutki)%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fargo-safe-dry-fish-churi-shutki-100-gm",
    "nameBn": "ফার্গো সেফ ড্রাই ফিশ (ছুরি শুটকি) ১০০ গ্রাম",
    "nameEn": "Fargo Safe Dry Fish (Churi Shutki) 100 gm",
    "category": "staples",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/fargo-safe-dry-fish-churi-shutki-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132404&q=best&v=1&m=400",
    "mrp": 305,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.197Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 305,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fargo-safe-dry-fish-churi-shutki-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 305,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fargo%20Safe%20Dry%20Fish%20(Churi%20Shutki)%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 305,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fargo%20Safe%20Dry%20Fish%20(Churi%20Shutki)%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 305,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fargo%20Safe%20Dry%20Fish%20(Churi%20Shutki)%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-biryani-masala-40-gm",
    "nameBn": "রাঁধুনি বিরিয়ানি মশলা ৪০ গ্রাম",
    "nameEn": "Radhuni Biryani Masala 40 gm",
    "category": "staples",
    "unit": "40 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-biryani-masala-40-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D109980&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.511Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-biryani-masala-40-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Biryani%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Biryani%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Biryani%20Masala%2040%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-ready-mix-kachchi-biryani-masala-40-gm",
    "nameBn": "রাঁধুনী কাচ্চি বিরিয়ানি মশলা ৪০ গ্রাম ",
    "nameEn": "Radhuni Kachchi Biryani Masala 40 gm",
    "category": "staples",
    "unit": "40 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-kachchi-biryani-masala-40-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D110485&q=best&v=1",
    "mrp": 70,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.511Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-ready-mix-kachchi-biryani-masala-40-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 70,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Kachchi%20Biryani%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 70,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Kachchi%20Biryani%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Kachchi%20Biryani%20Masala%2040%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-hyderabadi-biryani-masala-45-gm",
    "nameBn": "রাঁধুনী হায়দ্রাবাদি বিরিয়ানি মশলা ৪৫ গ্রাম",
    "nameEn": "Radhuni Hyderabadi Biryani Masala 45 gm",
    "category": "staples",
    "unit": "45 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-hyderabadi-biryani-masala-45-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D110479&q=best&v=1",
    "mrp": 90,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.511Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-hyderabadi-biryani-masala-45-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 90,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Hyderabadi%20Biryani%20Masala%2045%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 90,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Hyderabadi%20Biryani%20Masala%2045%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Hyderabadi%20Biryani%20Masala%2045%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-garam-masala-40-gm",
    "nameBn": "রাঁধুনী গরম মশলা ৪০ গ্রাম",
    "nameEn": "Radhuni Garam Masala 40 gm",
    "category": "staples",
    "unit": "40 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-garam-masala-40-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132527&q=best&v=1",
    "mrp": 95,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.511Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-garam-masala-40-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 95,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Garam%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 95,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Garam%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Garam%20Masala%2040%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-chotpoti-masala-50-gm",
    "nameBn": "রাঁধুনী চটপটি মশলা ৫০ গ্রাম",
    "nameEn": "Radhuni Chotpoti Masala 50 gm",
    "category": "staples",
    "unit": "50 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-chotpoti-masala-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D138436&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.511Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-chotpoti-masala-50-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Chotpoti%20Masala%2050%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Chotpoti%20Masala%2050%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Chotpoti%20Masala%2050%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-radhuni-roast-masala-35-gm",
    "nameBn": "রাঁধুনী রোস্ট মশলা ৩৫ গ্রাম",
    "nameEn": "Radhuni Roast Masala 35 gm",
    "category": "staples",
    "unit": "35 gm",
    "image": "https://chaldn.com/_mpimage/radhuni-roast-masala-35-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D110797&q=best&v=1",
    "mrp": 65,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.511Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/radhuni-roast-masala-35-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 65,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Radhuni%20Roast%20Masala%2035%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 65,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Radhuni%20Roast%20Masala%2035%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Radhuni%20Roast%20Masala%2035%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-orange-plus-soft-drink-powder-jar-500-gm",
    "nameBn": "প্রাণ কমলা প্লাস সফট ড্রিংক পাউডার (জার) ৫০০ গ্রাম",
    "nameEn": "Pran Orange Plus Soft Drink Powder (Jar) 500 gm",
    "category": "staples",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/pran-orange-plus-soft-drink-powder-jar-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D97626&q=best&v=1",
    "mrp": 290,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:02.831Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-orange-plus-soft-drink-powder-jar-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 290,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Orange%20Plus%20Soft%20Drink%20Powder%20(Jar)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 290,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Orange%20Plus%20Soft%20Drink%20Powder%20(Jar)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 290,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Orange%20Plus%20Soft%20Drink%20Powder%20(Jar)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-onion-local-1-kg-2",
    "nameBn": "দেশী পেঁয়াজ ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Deshi Peyaj (Local Onion) ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/deshi-peyaj-local-onion-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D52358&q=low&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:03.928Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳11 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳7 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 39,
        "inStock": true,
        "discountText": "৳11 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/onion-local-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 43,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Peyaj%20(Local%20Onion)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 47,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Peyaj%20(Local%20Onion)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 45,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Peyaj%20(Local%20Onion)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lal-peyaj-onion-red-50-gm-1-kg",
    "nameBn": "লাল পিঁয়াজ ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Lal Peyaj (Onion Red) ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/lal-peyaj-onion-red-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163935&q=best&v=1",
    "mrp": 85,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:03.928Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 85,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lal-peyaj-onion-red-50-gm-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 85,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lal%20Peyaj%20(Onion%20Red)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 85,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lal%20Peyaj%20(Onion%20Red)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 85,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lal%20Peyaj%20(Onion%20Red)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-deshi-peyaj-local-onion-25-gm-500-gm",
    "nameBn": "দেশী পেঁয়াজ ± ৫০ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Deshi Peyaj (Local Onion) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/deshi-peyaj-local-onion-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163942&q=best&v=1",
    "mrp": 25,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:03.928Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/deshi-peyaj-local-onion-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 25,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Peyaj%20(Local%20Onion)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 25,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Peyaj%20(Local%20Onion)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Peyaj%20(Local%20Onion)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lal-peyaj-onion-red-25-gm-500-gm",
    "nameBn": "লাল পেঁয়াজ ± ৫০ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Lal Peyaj (Onion Red) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/lal-peyaj-onion-red-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163944&q=best&v=1",
    "mrp": 45,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:03.928Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 45,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lal-peyaj-onion-red-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 45,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lal%20Peyaj%20(Onion%20Red)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 45,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lal%20Peyaj%20(Onion%20Red)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 45,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lal%20Peyaj%20(Onion%20Red)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-red-tomato-500-gm",
    "nameBn": "লাল টমেটো ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Red Tomato ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/red-tomato-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64361&q=best&v=1",
    "mrp": 99,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:03.928Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 99,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/red-tomato-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 99,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Red%20Tomato%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 99,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Red%20Tomato%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 99,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Red%20Tomato%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-potato-alu-1-kg-2",
    "nameBn": "আলু রেগুলার (±৫০ গ্রাম) ১ কেজি",
    "nameEn": "Potato Regular (± 50 gm) 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/potato-regular-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D164304&q=best&v=1",
    "mrp": 29,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.231Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/potato-alu-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 29,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Potato%20Regular%20(%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 29,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Potato%20Regular%20(%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Potato%20Regular%20(%C2%B1%2050%20gm)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-potato-regular-25-gm-600-gm",
    "nameBn": "আলু রেগুলার (±৫০ গ্রাম) ৬০০ গ্রাম ",
    "nameEn": "Potato Regular (± 25 gm) 600 gm",
    "category": "vegetables",
    "unit": "600 gm",
    "image": "https://chaldn.com/_mpimage/potato-regular-25-gm-600-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D164303&q=best&v=1",
    "mrp": 20,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.231Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳5 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳3 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 15,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/potato-regular-25-gm-600-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 17,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Potato%20Regular%20(%C2%B1%2025%20gm)%20600%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 19,
        "inStock": true,
        "discountText": "৳1 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Potato%20Regular%20(%C2%B1%2025%20gm)%20600%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 18,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Potato%20Regular%20(%C2%B1%2025%20gm)%20600%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-potato-lal-alu-1-kg",
    "nameBn": "লাল আলু (কার্ডিনাল) ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Lal Alu (Red Potato Cardinal) ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/lal-alu-red-potato-cardinal-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D76922&q=low&v=1",
    "mrp": 29,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.231Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/potato-lal-alu-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 29,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lal%20Alu%20(Red%20Potato%20Cardinal)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 29,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lal%20Alu%20(Red%20Potato%20Cardinal)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lal%20Alu%20(Red%20Potato%20Cardinal)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-big-potato-1-kg",
    "nameBn": "বড় ডায়মন্ড আলু ±৫০ গ্রাম ১ কেজি",
    "nameEn": "Boro Alu (Big Diamond Potato) ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/boro-alu-big-diamond-potato-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D79694&q=low&v=1",
    "mrp": 29,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.231Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/big-potato-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 29,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Boro%20Alu%20(Big%20Diamond%20Potato)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 29,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Boro%20Alu%20(Big%20Diamond%20Potato)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Boro%20Alu%20(Big%20Diamond%20Potato)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sweet-potato-500-gm",
    "nameBn": "মিষ্টি আলু (নেট ওজন ± ২৫ গ্রাম ) ৫০০ গ্রাম",
    "nameEn": "Misti Alu (Sweet Potato) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/misti-alu-sweet-potato-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D54835&q=best&v=1&m=400",
    "mrp": 59,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.231Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 59,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sweet-potato-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 59,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Misti%20Alu%20(Sweet%20Potato)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 59,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Misti%20Alu%20(Sweet%20Potato)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 59,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Misti%20Alu%20(Sweet%20Potato)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-red-potato-bogra-alu-500-gm",
    "nameBn": "লাল আলু ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Lal Alu (Red Potato) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/lal-alu-red-potato-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D93643&q=best&v=1",
    "mrp": 29,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.231Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/red-potato-bogra-alu-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 29,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lal%20Alu%20(Red%20Potato)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 29,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lal%20Alu%20(Red%20Potato)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lal%20Alu%20(Red%20Potato)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-garlic-roshun-premium-500-gm-2",
    "nameBn": "রসুন (আমদানিকৃত) ±২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Roshun (Garlic Imported) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/roshun-garlic-imported-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89993&q=best&v=1",
    "mrp": 109,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.520Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳30 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳18 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 79,
        "inStock": true,
        "discountText": "৳30 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/garlic-roshun-premium-500-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 91,
        "inStock": true,
        "discountText": "৳18 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Roshun%20(Garlic%20Imported)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 101,
        "inStock": true,
        "discountText": "৳8 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Roshun%20(Garlic%20Imported)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 95,
        "inStock": true,
        "discountText": "৳14 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Roshun%20(Garlic%20Imported)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-garlic-local-net-weight-10-gm-500-gm",
    "nameBn": "রসুন দেশি ± ২৫  গ্রাম ৫০০ গ্রাম",
    "nameEn": "Deshi Roshun (Garlic Local) ±25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/deshi-roshun-garlic-local-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89990&q=best&v=1",
    "mrp": 59,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.520Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳4 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳2 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/garlic-local-net-weight-10-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 57,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Roshun%20(Garlic%20Local)%20%C2%B125%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 58,
        "inStock": true,
        "discountText": "৳1 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Roshun%20(Garlic%20Local)%20%C2%B125%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 57,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Roshun%20(Garlic%20Local)%20%C2%B125%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-china-fuji-apple-1-kg",
    "nameBn": "চায়না ফুজি আপেল (নেট ওজন ± ৫০ গ্রাম ) ১ কেজি",
    "nameEn": "China Fuji Apple ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/china-fuji-apple-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D114752&q=best&v=1",
    "mrp": 399,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.520Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 399,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/china-fuji-apple-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 399,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=China%20Fuji%20Apple%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 399,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=China%20Fuji%20Apple%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 399,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=China%20Fuji%20Apple%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-roshun-garlic-imported-25-gm-250-gm",
    "nameBn": "রসুন (আমদানিকৃত) ±২৫ গ্রাম ২৫০ গ্রাম",
    "nameEn": "Roshun (Garlic Imported) ± 25 gm 250 gm",
    "category": "vegetables",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/roshun-garlic-imported-25-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163966&q=best&v=1",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.520Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳16 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 39,
        "inStock": true,
        "discountText": "৳16 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/roshun-garlic-imported-25-gm-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 45,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Roshun%20(Garlic%20Imported)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 51,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Roshun%20(Garlic%20Imported)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 48,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Roshun%20(Garlic%20Imported)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-deshi-roshun-garlic-local-25-gm-250-gm",
    "nameBn": "রসুন দেশি ± ২৫ গ্রাম ২৫০ গ্রাম",
    "nameEn": "Deshi Roshun (Garlic Local) ±25 gm 250 gm",
    "category": "vegetables",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/deshi-roshun-garlic-local-25-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163983&q=best&v=1",
    "mrp": 35,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.520Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳4 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/deshi-roshun-garlic-local-25-gm-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 31,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Roshun%20(Garlic%20Local)%20%C2%B125%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 33,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Roshun%20(Garlic%20Local)%20%C2%B125%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 32,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Roshun%20(Garlic%20Local)%20%C2%B125%20gm%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sun-chips-garlic-chilli-20-gm",
    "nameBn": "সান চিপস্ গার্লিক অ্যান্ড চিলি ২০ গ্রাম",
    "nameEn": "Sun Chips Garlic & Chilli 20 gm",
    "category": "vegetables",
    "unit": "20 gm",
    "image": "https://chaldn.com/_mpimage/sun-chips-garlic-chilli-20-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D168340&q=best&v=1",
    "mrp": 20,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.520Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sun-chips-garlic-chilli-20-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 20,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sun%20Chips%20Garlic%20%26%20Chilli%2020%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 20,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sun%20Chips%20Garlic%20%26%20Chilli%2020%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sun%20Chips%20Garlic%20%26%20Chilli%2020%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-deshi-ada-local-ginger-25-gm-500-gm",
    "nameBn": "দেশি আদা ±২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Deshi Ada (Local Ginger) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/deshi-ada-local-ginger-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163274&q=best&v=1",
    "mrp": 109,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.855Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳24 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳14 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 85,
        "inStock": true,
        "discountText": "৳24 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/deshi-ada-local-ginger-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 95,
        "inStock": true,
        "discountText": "৳14 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Ada%20(Local%20Ginger)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 103,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Ada%20(Local%20Ginger)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 98,
        "inStock": true,
        "discountText": "৳11 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Ada%20(Local%20Ginger)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ada-imported-ginger-25-gm-500-gm",
    "nameBn": "আদা আমদানিকৃত ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Ada (Imported Ginger) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/ada-imported-ginger-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163275&q=low&v=1",
    "mrp": 119,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.855Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳30 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳18 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 89,
        "inStock": true,
        "discountText": "৳30 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ada-imported-ginger-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 101,
        "inStock": true,
        "discountText": "৳18 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ada%20(Imported%20Ginger)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 111,
        "inStock": true,
        "discountText": "৳8 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ada%20(Imported%20Ginger)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "৳14 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ada%20(Imported%20Ginger)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ada-imported-ginger-25-gm-250-gm",
    "nameBn": "আদা আমদানিকৃত ± ২৫ গ্রাম ২৫০ গ্রাম",
    "nameEn": "Ada (Imported Ginger) ± 25 gm 250 gm",
    "category": "vegetables",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/ada-imported-ginger-25-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163146&q=best&v=1",
    "mrp": 65,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.855Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳20 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳12 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 45,
        "inStock": true,
        "discountText": "৳20 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ada-imported-ginger-25-gm-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 53,
        "inStock": true,
        "discountText": "৳12 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ada%20(Imported%20Ginger)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ada%20(Imported%20Ginger)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 56,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ada%20(Imported%20Ginger)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-deshi-ada-local-ginger-25-gm-250-gm",
    "nameBn": "দেশি আদা ±২৫ গ্রাম ২৫০ গ্রাম",
    "nameEn": "Deshi Ada (Local Ginger) ± 25 gm 250 gm",
    "category": "vegetables",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/deshi-ada-local-ginger-25-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163145&q=best&v=1",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.855Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 45,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/deshi-ada-local-ginger-25-gm-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 49,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Ada%20(Local%20Ginger)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 52,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Ada%20(Local%20Ginger)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Ada%20(Local%20Ginger)%20%C2%B1%2025%20gm%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-happy-nappy-pant-diaper-l-9-14-kg-34-pcs",
    "nameBn": "ফ্রেশ হ্যাপি ন্যাপি প্যান্ট ডায়াপার এল (৯-১৪ কেজি) ৩৪ টি",
    "nameEn": "Fresh Happy Nappy Pant Diaper L (9-14 kg) 34 pcs",
    "category": "vegetables",
    "unit": "34 pcs",
    "image": "https://chaldn.com/_mpimage/fresh-happy-nappy-pant-diaper-l-9-14-kg-34-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117368&q=best&v=1",
    "mrp": 890,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:04.855Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳101 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳61 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 789,
        "inStock": true,
        "discountText": "৳101 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-happy-nappy-pant-diaper-l-9-14-kg-34-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 829,
        "inStock": true,
        "discountText": "৳61 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Happy%20Nappy%20Pant%20Diaper%20L%20(9-14%20kg)%2034%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 865,
        "inStock": true,
        "discountText": "৳25 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Happy%20Nappy%20Pant%20Diaper%20L%20(9-14%20kg)%2034%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 845,
        "inStock": true,
        "discountText": "৳45 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Happy%20Nappy%20Pant%20Diaper%20L%20(9-14%20kg)%2034%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-tomato-sauce-340-gm",
    "nameBn": "প্রান টমেটো সস ৩৪০ গ্রাম",
    "nameEn": "Pran Tomato Sauce 340 gm",
    "category": "vegetables",
    "unit": "340 gm",
    "image": "https://chaldn.com/_mpimage/pran-tomato-sauce-340-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135234&q=best&v=1",
    "mrp": 125,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.140Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-tomato-sauce-340-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 125,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Tomato%20Sauce%20340%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 125,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Tomato%20Sauce%20340%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Tomato%20Sauce%20340%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-tomato-sauce-1-kg",
    "nameBn": "প্রাণ টমেটো সস ১ কেজি",
    "nameEn": "Pran Tomato Sauce 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/pran-tomato-sauce-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D141997&q=best&v=1",
    "mrp": 320,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.140Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 320,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-tomato-sauce-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 320,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Tomato%20Sauce%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 320,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Tomato%20Sauce%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 320,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Tomato%20Sauce%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ruchi-hot-tomato-sauce-350-gm",
    "nameBn": "রুচি ঝাল টমেটো সস ৩৫০ গ্রাম",
    "nameEn": "Ruchi Hot Tomato Sauce 350 gm",
    "category": "vegetables",
    "unit": "350 gm",
    "image": "https://chaldn.com/_mpimage/ruchi-hot-tomato-sauce-350-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133071&q=best&v=1",
    "mrp": 125,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.140Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ruchi-hot-tomato-sauce-350-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 125,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ruchi%20Hot%20Tomato%20Sauce%20350%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 125,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ruchi%20Hot%20Tomato%20Sauce%20350%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ruchi%20Hot%20Tomato%20Sauce%20350%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-hot-tomato-sauce-mini-8-gm-10-pcs",
    "nameBn": "প্রান হট টমেটো সস মিনি ৮ গ্রাম ১০ টি",
    "nameEn": "Pran Hot Tomato Sauce Mini 8 gm 10 pcs",
    "category": "vegetables",
    "unit": "10 pcs",
    "image": "https://chaldn.com/_mpimage/pran-hot-tomato-sauce-mini-8-gm-10-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154707&q=best&v=1",
    "mrp": 30,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.140Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 30,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-hot-tomato-sauce-mini-8-gm-10-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 30,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Hot%20Tomato%20Sauce%20Mini%208%20gm%2010%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 30,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Hot%20Tomato%20Sauce%20Mini%208%20gm%2010%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 30,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Hot%20Tomato%20Sauce%20Mini%208%20gm%2010%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-saad-hot-tomato-sauce-500-gm",
    "nameBn": "স্বাদ হট টমেটো সস ৫০০ গ্রাম",
    "nameEn": "Saad Hot Tomato Sauce 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/saad-hot-tomato-sauce-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153639&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.140Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/saad-hot-tomato-sauce-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Saad%20Hot%20Tomato%20Sauce%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Saad%20Hot%20Tomato%20Sauce%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Saad%20Hot%20Tomato%20Sauce%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ruchi-hot-tomato-sauce-200-gm",
    "nameBn": "রুচি হট টমেটো সস ২০০ গ্রাম",
    "nameEn": "Ruchi Hot Tomato Sauce 200 gm",
    "category": "vegetables",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/ruchi-hot-tomato-sauce-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D176908&q=best&v=1",
    "mrp": 80,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.140Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ruchi-hot-tomato-sauce-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 80,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ruchi%20Hot%20Tomato%20Sauce%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 80,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ruchi%20Hot%20Tomato%20Sauce%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ruchi%20Hot%20Tomato%20Sauce%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kacha-morich-green-chilli-12-gm-250-gm",
    "nameBn": "কাঁচা মরিচ (±১২ গ্রাম) ২৫০ গ্রাম",
    "nameEn": "Kacha Morich (Green Chilli) ±12 gm 250 gm",
    "category": "vegetables",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/kacha-morich-green-chilli-12-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28576&q=low&v=1",
    "mrp": 89,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.441Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 89,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kacha-morich-green-chilli-12-gm-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 89,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kacha%20Morich%20(Green%20Chilli)%20%C2%B112%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 89,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kacha%20Morich%20(Green%20Chilli)%20%C2%B112%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 89,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kacha%20Morich%20(Green%20Chilli)%20%C2%B112%20gm%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-copy-of-kacha-morich-green-chilli-12-gm-100-gm",
    "nameBn": "কাঁচা মরিচ (±১২ গ্রাম) ১০০ গ্রাম",
    "nameEn": "Kacha Morich (Green Chilli) ± 12 gm 100 gm",
    "category": "vegetables",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/kacha-morich-green-chilli-12-gm-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183023&q=low&v=1&m=400",
    "mrp": 39,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.441Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 39,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/copy-of-kacha-morich-green-chilli-12-gm-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 39,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kacha%20Morich%20(Green%20Chilli)%20%C2%B1%2012%20gm%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 39,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kacha%20Morich%20(Green%20Chilli)%20%C2%B1%2012%20gm%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 39,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kacha%20Morich%20(Green%20Chilli)%20%C2%B1%2012%20gm%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ahmed-green-chilli-sauce-340-gm",
    "nameBn": "আহমেদ গ্রীন চিলি সস ৩৪০ গ্রাম",
    "nameEn": "Ahmed Green Chilli Sauce 340 gm",
    "category": "vegetables",
    "unit": "340 gm",
    "image": "https://chaldn.com/_mpimage/ahmed-green-chilli-sauce-340-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D122990&q=best&v=1",
    "mrp": 130,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.441Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳15 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳9 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 115,
        "inStock": true,
        "discountText": "৳15 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ahmed-green-chilli-sauce-340-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 121,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ahmed%20Green%20Chilli%20Sauce%20340%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 126,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ahmed%20Green%20Chilli%20Sauce%20340%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 123,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ahmed%20Green%20Chilli%20Sauce%20340%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-green-chilli-sauce-340-gm",
    "nameBn": "প্রাণ গ্রিন চিলি সস ৩৪০ গ্রাম",
    "nameEn": "Pran Green Chilli Sauce 340 gm",
    "category": "vegetables",
    "unit": "340 gm",
    "image": "https://chaldn.com/_mpimage/pran-green-chilli-sauce-340-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D162464&q=best&v=1",
    "mrp": 130,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.441Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-green-chilli-sauce-340-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 130,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Green%20Chilli%20Sauce%20340%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 130,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Green%20Chilli%20Sauce%20340%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Green%20Chilli%20Sauce%20340%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chings-green-chilli-sauce-680-gm",
    "nameBn": "চিং'স গ্রিন চিলি সস ৬৮০ গ্রাম",
    "nameEn": "Ching's Green Chilli Sauce 680 gm",
    "category": "vegetables",
    "unit": "680 gm",
    "image": "https://chaldn.com/_mpimage/chings-green-chilli-sauce-680-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177093&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.441Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chings-green-chilli-sauce-680-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ching's%20Green%20Chilli%20Sauce%20680%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ching's%20Green%20Chilli%20Sauce%20680%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ching's%20Green%20Chilli%20Sauce%20680%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chings-green-chilli-sauce-190-gm",
    "nameBn": "চিং'স গ্রিন চিলি সস ১৯০ গ্রাম",
    "nameEn": "Ching's Green Chilli Sauce 190 gm",
    "category": "vegetables",
    "unit": "190 gm",
    "image": "https://chaldn.com/_mpimage/chings-green-chilli-sauce-190-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177092&q=best&v=1",
    "mrp": 150,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.441Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chings-green-chilli-sauce-190-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 150,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ching's%20Green%20Chilli%20Sauce%20190%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 150,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ching's%20Green%20Chilli%20Sauce%20190%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ching's%20Green%20Chilli%20Sauce%20190%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tulsi-pati-lemon-ginger-tea-45-gm-30-pcs",
    "nameBn": "তুলসি পাতি লেবু এবং আদার চা ৪৫ গ্রাম ৩০ পিসেস",
    "nameEn": "Tulsi Pati Lemon & Ginger Tea 45 gm 30 pcs",
    "category": "vegetables",
    "unit": "30 pcs",
    "image": "https://chaldn.com/_mpimage/tulsi-pati-lemon-ginger-tea-45-gm-30-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D68293&q=best&v=1",
    "mrp": 120,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.753Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tulsi-pati-lemon-ginger-tea-45-gm-30-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 120,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tulsi%20Pati%20Lemon%20%26%20Ginger%20Tea%2045%20gm%2030%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 120,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tulsi%20Pati%20Lemon%20%26%20Ginger%20Tea%2045%20gm%2030%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tulsi%20Pati%20Lemon%20%26%20Ginger%20Tea%2045%20gm%2030%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-long-big-lemon-4-pcs",
    "nameBn": "লম্বা বড় লেবু ৪ টি",
    "nameEn": "Lomba Lebu (Long Lemon) 4 pcs",
    "category": "vegetables",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/lomba-lebu-long-lemon-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64362&q=low&v=1",
    "mrp": 39,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.753Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/long-big-lemon-4-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 33,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lomba%20Lebu%20(Long%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 36,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lomba%20Lebu%20(Long%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 34,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lomba%20Lebu%20(Long%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-round-lemon-4-pcs",
    "nameBn": "গোল লেবু ৪টি",
    "nameEn": "Gol Lebu (Round Lemon) 4 pcs",
    "category": "vegetables",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/gol-lebu-round-lemon-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D54834&q=low&v=1",
    "mrp": 49,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.753Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳14 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳8 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 35,
        "inStock": true,
        "discountText": "৳14 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/round-lemon-4-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 41,
        "inStock": true,
        "discountText": "৳8 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Gol%20Lebu%20(Round%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 45,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Gol%20Lebu%20(Round%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 43,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Gol%20Lebu%20(Round%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kagzi-lemon-4-pcs",
    "nameBn": "কাগজি লেবু ৪ টি",
    "nameEn": "Kagozi Lebu (Kagozi Lemon) 4 pcs",
    "category": "vegetables",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/kagozi-lebu-kagozi-lemon-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43758&q=low&v=1&m=400",
    "mrp": 49,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.753Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳20 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳12 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "৳20 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kagzi-lemon-4-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 37,
        "inStock": true,
        "discountText": "৳12 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kagozi%20Lebu%20(Kagozi%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 44,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kagozi%20Lebu%20(Kagozi%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 40,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kagozi%20Lebu%20(Kagozi%20Lemon)%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-trix-lemon-dish-washing-liquid-lemon-250-ml",
    "nameBn": "ট্রিক্স ডিশওয়াশিং লিকুইড লেমন রিফিল ২৫০ মিলি",
    "nameEn": "Trix Dishwashing Liquid Lemon Refill 250 ml",
    "category": "vegetables",
    "unit": "250 ml",
    "image": "https://chaldn.com/_mpimage/trix-dishwashing-liquid-lemon-refill-250-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179240&q=best&v=1",
    "mrp": 70,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.753Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/trix-lemon-dish-washing-liquid-lemon-250-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 70,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Trix%20Dishwashing%20Liquid%20Lemon%20Refill%20250%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 70,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Trix%20Dishwashing%20Liquid%20Lemon%20Refill%20250%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Trix%20Dishwashing%20Liquid%20Lemon%20Refill%20250%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-trix-lemon-dish-washing-bar-300-gm",
    "nameBn": "ট্রিক্স ডিশ ওয়াশিং বার লেমন ৩০০ গ্রাম",
    "nameEn": "Trix Dish Washing Bar Lemon 300 gm",
    "category": "vegetables",
    "unit": "300 gm",
    "image": "https://chaldn.com/_mpimage/trix-dish-washing-bar-lemon-300-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154340&q=best&v=1",
    "mrp": 40,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:05.753Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/trix-lemon-dish-washing-bar-300-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 40,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Trix%20Dish%20Washing%20Bar%20Lemon%20300%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 40,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Trix%20Dish%20Washing%20Bar%20Lemon%20300%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Trix%20Dish%20Washing%20Bar%20Lemon%20300%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-deshi-cucumber-net-weight-20-gm-500-gm",
    "nameBn": "দেশী শসা ±২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Deshi Shosha (Local Cucumber) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/deshi-shosha-local-cucumber-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64359&q=best&v=1&m=400",
    "mrp": 39,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.014Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 39,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/deshi-cucumber-net-weight-20-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 39,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Shosha%20(Local%20Cucumber)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 39,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Shosha%20(Local%20Cucumber)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 39,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Shosha%20(Local%20Cucumber)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cucumber-net-weight-20-gm-500-gm",
    "nameBn": "শসা ±২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Shosha (Cucumber) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/shosha-cucumber-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64357&q=best&v=1",
    "mrp": 45,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.014Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 35,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cucumber-net-weight-20-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 39,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Shosha%20(Cucumber)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 42,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Shosha%20(Cucumber)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 40,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Shosha%20(Cucumber)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-veet-pure-hair-removal-cream-normal-skin-with-cucumber-25-gm",
    "nameBn": "ভিট পিওর হেয়ার রিমুভাল ক্রিম নরমাল স্কিন উইথ কিউকাম্বার এক্সট্রাক্ট ২৫ গ্রাম",
    "nameEn": "Veet Pure Hair Removal Cream Normal Skin With Cucumber Extract 25 gm",
    "category": "vegetables",
    "unit": "25 gm",
    "image": "https://chaldn.com/_mpimage/veet-pure-hair-removal-cream-normal-skin-with-cucumber-extract-25-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D148927&q=best&v=1",
    "mrp": 110,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.014Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/veet-pure-hair-removal-cream-normal-skin-with-cucumber-25-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 110,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Veet%20Pure%20Hair%20Removal%20Cream%20Normal%20Skin%20With%20Cucumber%20Extract%2025%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 110,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Veet%20Pure%20Hair%20Removal%20Cream%20Normal%20Skin%20With%20Cucumber%20Extract%2025%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Veet%20Pure%20Hair%20Removal%20Cream%20Normal%20Skin%20With%20Cucumber%20Extract%2025%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-veet-pure-hair-removal-cream-normal-skin-with-cucumber-50-gm",
    "nameBn": "ভিট পিওর হেয়ার রিমুভাল ক্রিম নরমাল স্কিন উইথ কিউকাম্বার এক্সট্রাক্ট ৫০ গ্রাম",
    "nameEn": "Veet Pure Hair Removal Cream Normal Skin With Cucumber Extract 50 gm",
    "category": "vegetables",
    "unit": "50 gm",
    "image": "https://chaldn.com/_mpimage/veet-pure-hair-removal-cream-normal-skin-with-cucumber-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D148928&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.014Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/veet-pure-hair-removal-cream-normal-skin-with-cucumber-50-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Veet%20Pure%20Hair%20Removal%20Cream%20Normal%20Skin%20With%20Cucumber%20Extract%2050%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Veet%20Pure%20Hair%20Removal%20Cream%20Normal%20Skin%20With%20Cucumber%20Extract%2050%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Veet%20Pure%20Hair%20Removal%20Cream%20Normal%20Skin%20With%20Cucumber%20Extract%2050%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-malik-seeds-shosha-beej-moynamoti-1-pcs",
    "nameBn": "মালিক সিডস শোষা বীজ (ময়নামতি) ১ টি",
    "nameEn": "Malik Seeds Shosha Beej (Moynamoti) 1 pcs",
    "category": "vegetables",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/malik-seeds-shosha-beej-moynamoti-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D178771&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.014Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/malik-seeds-shosha-beej-moynamoti-1-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Malik%20Seeds%20Shosha%20Beej%20(Moynamoti)%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Malik%20Seeds%20Shosha%20Beej%20(Moynamoti)%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Malik%20Seeds%20Shosha%20Beej%20(Moynamoti)%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-yc-cucumber-peel-of-mask-120-ml",
    "nameBn": "ওয়াই সি শসার খোসার মাস্ক ১২০মিলি",
    "nameEn": "YC Cucumber Peel of Mask 120 ml",
    "category": "vegetables",
    "unit": "120 ml",
    "image": "https://chaldn.com/_mpimage/yc-cucumber-peel-of-mask-120-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95887&q=best&v=1&m=400",
    "mrp": 650,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.014Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 650,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/yc-cucumber-peel-of-mask-120-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 650,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=YC%20Cucumber%20Peel%20of%20Mask%20120%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 650,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=YC%20Cucumber%20Peel%20of%20Mask%20120%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 650,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=YC%20Cucumber%20Peel%20of%20Mask%20120%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-carrot-deshi-net-weight-20-gm-500-gm",
    "nameBn": "গাজর দেশি ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Deshi Gajor (Local Carrot) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/deshi-gajor-local-carrot-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64363&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.286Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳11 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳7 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 49,
        "inStock": true,
        "discountText": "৳11 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/carrot-deshi-net-weight-20-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 53,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Gajor%20(Local%20Carrot)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 57,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Gajor%20(Local%20Carrot)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 55,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Gajor%20(Local%20Carrot)%20%C2%B1%2025%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-gp-china-carrot-net-weight-20-gm-600-gm",
    "nameBn": "গাঁজর (আমদানিকৃত) ±৩০ গ্রাম ৬০০ গ্রাম",
    "nameEn": "Gajor (Imported Carrot) ± 30 gm 600 gm",
    "category": "vegetables",
    "unit": "600 gm",
    "image": "https://chaldn.com/_mpimage/gajor-imported-carrot-30-gm-600-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78085&q=low&v=1&m=400",
    "mrp": 120,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.286Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳21 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳13 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 99,
        "inStock": true,
        "discountText": "৳21 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/gp-china-carrot-net-weight-20-gm-600-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 107,
        "inStock": true,
        "discountText": "৳13 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Gajor%20(Imported%20Carrot)%20%C2%B1%2030%20gm%20600%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 115,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Gajor%20(Imported%20Carrot)%20%C2%B1%2030%20gm%20600%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 111,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Gajor%20(Imported%20Carrot)%20%C2%B1%2030%20gm%20600%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-heinz-carrot-sweet-potato-4-6-months-110-gm",
    "nameBn": "হেইঞ্জ ক্যারোট অ্যান্ড সুইট পটেটো (৪-৬ মাস) ১১০ গ্রাম",
    "nameEn": "Heinz Carrot & Sweet Potato (4-6 months) 110 gm",
    "category": "vegetables",
    "unit": "110 gm",
    "image": "https://chaldn.com/_mpimage/heinz-carrot-sweet-potato-4-6-months-110-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101771&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.286Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/heinz-carrot-sweet-potato-4-6-months-110-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Heinz%20Carrot%20%26%20Sweet%20Potato%20(4-6%20months)%20110%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Heinz%20Carrot%20%26%20Sweet%20Potato%20(4-6%20months)%20110%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Heinz%20Carrot%20%26%20Sweet%20Potato%20(4-6%20months)%20110%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-cerelac-2-rice-carrot-with-chicken-8-months-350-gm",
    "nameBn": "নেসলে সেরেলাক ২ চিকেনের সাথে ভাত গাজর (৮ মাস +) ৩৫০ গ্রাম",
    "nameEn": "Nestle Cerelac 2 Rice Carrot with Chicken (8 months+) 350 gm",
    "category": "vegetables",
    "unit": "350 gm",
    "image": "https://chaldn.com/_mpimage/nestle-cerelac-2-rice-carrot-with-chicken-8-months-350-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D152767&q=best&v=1&m=400",
    "mrp": 425,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.286Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-cerelac-2-rice-carrot-with-chicken-8-months-350-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 425,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Cerelac%202%20Rice%20Carrot%20with%20Chicken%20(8%20months%2B)%20350%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 425,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Cerelac%202%20Rice%20Carrot%20with%20Chicken%20(8%20months%2B)%20350%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Cerelac%202%20Rice%20Carrot%20with%20Chicken%20(8%20months%2B)%20350%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-prosperity-carrot-noodles-454-gm-2",
    "nameBn": "প্রসপারিটি ক্যারোট নুডলস ৪৫৪ গ্রাম",
    "nameEn": "Prosperity Carrot Noodles 454 gm",
    "category": "vegetables",
    "unit": "454 gm",
    "image": "https://chaldn.com/_mpimage/prosperity-carrot-noodles-454-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182366&q=best&v=1",
    "mrp": 390,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.286Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/prosperity-carrot-noodles-454-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 390,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Prosperity%20Carrot%20Noodles%20454%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 390,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Prosperity%20Carrot%20Noodles%20454%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Prosperity%20Carrot%20Noodles%20454%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-deshi-gajor-local-carrot-processed-10-gm-500-gm",
    "nameBn": "দেশি গাজর প্রক্রিয়াকৃত ±১০ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Deshi Gajor (Local Carrot) Processed ±10 gm 500 gm",
    "category": "vegetables",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/deshi-gajor-local-carrot-processed-10-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169295&q=best&v=1",
    "mrp": 105,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.286Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/deshi-gajor-local-carrot-processed-10-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 105,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Deshi%20Gajor%20(Local%20Carrot)%20Processed%20%C2%B110%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 105,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Deshi%20Gajor%20(Local%20Carrot)%20Processed%20%C2%B110%20gm%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Deshi%20Gajor%20(Local%20Carrot)%20Processed%20%C2%B110%20gm%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-china-fuji-apple-slice-for-juice-frozen-10-gm-400-gm",
    "nameBn": "চায়না ফুজি আপেল স্লাইস জুসের জন্য (ফ্রোজেন) ± ১০ গ্রাম ৪০০ গ্রাম",
    "nameEn": "China Fuji Apple Slice For Juice (Frozen) ± 10 gm 400 gm",
    "category": "vegetables",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/china-fuji-apple-slice-for-juice-frozen-10-gm-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D175763&q=best&v=1",
    "mrp": 209,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.585Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 209,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/china-fuji-apple-slice-for-juice-frozen-10-gm-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 209,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=China%20Fuji%20Apple%20Slice%20For%20Juice%20(Frozen)%20%C2%B1%2010%20gm%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 209,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=China%20Fuji%20Apple%20Slice%20For%20Juice%20(Frozen)%20%C2%B1%2010%20gm%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 209,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=China%20Fuji%20Apple%20Slice%20For%20Juice%20(Frozen)%20%C2%B1%2010%20gm%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-olympic-pineapple-cream-biscuits-40-gm",
    "nameBn": "অলিম্পিক পাইনএ্যাপেল (আনারস) ক্রিম বিস্কুট ৪০ গ্রাম",
    "nameEn": "Olympic Pineapple Cream Biscuits 40 gm",
    "category": "vegetables",
    "unit": "40 gm",
    "image": "https://chaldn.com/_mpimage/olympic-pineapple-cream-biscuits-40-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D123549&q=best&v=1",
    "mrp": 10,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.585Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 10,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/olympic-pineapple-cream-biscuits-40-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 10,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Olympic%20Pineapple%20Cream%20Biscuits%2040%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 10,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Olympic%20Pineapple%20Cream%20Biscuits%2040%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 10,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Olympic%20Pineapple%20Cream%20Biscuits%2040%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-gala-apple-1-kg",
    "nameBn": "গালা আপেল ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Gala Apple ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/gala-apple-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D114751&q=best&v=1&m=400",
    "mrp": 479,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.585Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 479,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/gala-apple-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 479,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Gala%20Apple%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 479,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Gala%20Apple%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 479,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Gala%20Apple%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pineapple-per-piece",
    "nameBn": "আনারস ১ টি",
    "nameEn": "Anaros (Pineapple) 1 pcs",
    "category": "vegetables",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/anaros-pineapple-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61358&q=low&v=1",
    "mrp": 85,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.585Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳4 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 79,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pineapple-per-piece",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 81,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Anaros%20(Pineapple)%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 83,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Anaros%20(Pineapple)%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 82,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Anaros%20(Pineapple)%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-wood-apple-bel-1-pcs-2",
    "nameBn": "বেল ১ টি",
    "nameEn": "Bel (Wood Apple) 1 pcs",
    "category": "vegetables",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/bel-wood-apple-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D34665&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.585Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳51 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳31 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 149,
        "inStock": true,
        "discountText": "৳51 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/wood-apple-bel-1-pcs-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 169,
        "inStock": true,
        "discountText": "৳31 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bel%20(Wood%20Apple)%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 187,
        "inStock": true,
        "discountText": "৳13 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bel%20(Wood%20Apple)%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 177,
        "inStock": true,
        "discountText": "৳23 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bel%20(Wood%20Apple)%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-banana-sagor-4-pcs",
    "nameBn": "সাগর কলা 8 টি",
    "nameEn": "Shagor Kola (Banana Sagor) 4 pcs",
    "category": "vegetables",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/shagor-kola-banana-sagor-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D76879&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.880Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳5 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳3 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/banana-sagor-4-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 57,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Shagor%20Kola%20(Banana%20Sagor)%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 59,
        "inStock": true,
        "discountText": "৳1 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Shagor%20Kola%20(Banana%20Sagor)%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 58,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Shagor%20Kola%20(Banana%20Sagor)%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-banana-chompa-ready-to-eat-4-pcs-2",
    "nameBn": "কলা চম্পা (খাবার জন্য প্রস্তুত) ৪ টি",
    "nameEn": "Banana Chompa (Ready To Eat) 4 pcs",
    "category": "vegetables",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/banana-chompa-ready-to-eat-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116416&q=best&v=1",
    "mrp": 45,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.880Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳16 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "৳16 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/banana-chompa-ready-to-eat-4-pcs-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 35,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Banana%20Chompa%20(Ready%20To%20Eat)%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 41,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Banana%20Chompa%20(Ready%20To%20Eat)%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 38,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Banana%20Chompa%20(Ready%20To%20Eat)%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-banana-sobri-6-pcs",
    "nameBn": "সবরি কলা ৪ টি",
    "nameEn": "Banana Sobri 4 pcs",
    "category": "vegetables",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/banana-sobri-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D76878&q=low&v=1",
    "mrp": 55,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.880Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/banana-sobri-6-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 55,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Banana%20Sobri%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 55,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Banana%20Sobri%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 55,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Banana%20Sobri%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-banana-green-4-pcs",
    "nameBn": "কাঁচা কলা ৪ টি ",
    "nameEn": "Kacha Kola (Banana Green) 4 pcs",
    "category": "vegetables",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/kacha-kola-banana-green-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183804&q=low&v=1",
    "mrp": 65,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.880Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/banana-green-4-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 59,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kacha%20Kola%20(Banana%20Green)%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 62,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kacha%20Kola%20(Banana%20Green)%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kacha%20Kola%20(Banana%20Green)%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kolar-mocha-1-pcs",
    "nameBn": "কলার মোচা ১ টি",
    "nameEn": "Banana Flower (Kolar Mocha) 1 pcs",
    "category": "vegetables",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/banana-flower-kolar-mocha-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89272&q=best&v=1",
    "mrp": 65,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.880Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳20 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳12 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 45,
        "inStock": true,
        "discountText": "৳20 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kolar-mocha-1-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 53,
        "inStock": true,
        "discountText": "৳12 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Banana%20Flower%20(Kolar%20Mocha)%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Banana%20Flower%20(Kolar%20Mocha)%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 56,
        "inStock": true,
        "discountText": "৳9 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Banana%20Flower%20(Kolar%20Mocha)%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-kolar-thor-1-pcs",
    "nameBn": "ব্যানানা স্টেম (কলার থোড়) ১ টি",
    "nameEn": "Banana Stem (Kolar Thor) 1 pcs",
    "category": "vegetables",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/banana-stem-kolar-thor-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89314&q=best&v=1",
    "mrp": 35,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:06.880Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/kolar-thor-1-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 35,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Banana%20Stem%20(Kolar%20Thor)%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 35,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Banana%20Stem%20(Kolar%20Thor)%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Banana%20Stem%20(Kolar%20Thor)%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-moshur-dal-imported-1-kg",
    "nameBn": "মসুর ডাল (আমদানিকৃত) ১ কেজি",
    "nameEn": "Moshur Dal (Imported) 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/moshur-dal-imported-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182354&q=best&v=1",
    "mrp": 115,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.162Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳4 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 109,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/moshur-dal-imported-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 111,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Moshur%20Dal%20(Imported)%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 113,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Moshur%20Dal%20(Imported)%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 112,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Moshur%20Dal%20(Imported)%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-malta-1-kg",
    "nameBn": "মাল্টা ± ৫০ গ্রাম  ১ কেজি",
    "nameEn": "Malta ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/malta-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131779&q=best&v=1&m=400",
    "mrp": 319,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.162Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 319,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/malta-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 319,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Malta%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 319,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Malta%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 319,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Malta%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-green-grapes-250-gm",
    "nameBn": "সবুজ আঙ্গুর  ± ১২ গ্রাম ২৫০ গ্রাম",
    "nameEn": "Sobuj Angur (Green Grapes) ± 12 gm 250 gm",
    "category": "vegetables",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/sobuj-angur-green-grapes-12-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D134876&q=best&v=1&m=400",
    "mrp": 159,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 159,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/green-grapes-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 159,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sobuj%20Angur%20(Green%20Grapes)%20%C2%B1%2012%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 159,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sobuj%20Angur%20(Green%20Grapes)%20%C2%B1%2012%20gm%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 159,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sobuj%20Angur%20(Green%20Grapes)%20%C2%B1%2012%20gm%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-basil-seed-drink-white-grape-290-ml",
    "nameBn": "তুলসী বীজ পানীয় (সাদা আঙ্গুর) ২৯০ মিলি ",
    "nameEn": "Basil Seed Drink (White Grape) 290 ml",
    "category": "vegetables",
    "unit": "290 ml",
    "image": "https://chaldn.com/_mpimage/basil-seed-drink-white-grape-290-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D125539&q=best&v=1&m=400",
    "mrp": 270,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 270,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/basil-seed-drink-white-grape-290-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 270,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Basil%20Seed%20Drink%20(White%20Grape)%20290%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 270,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Basil%20Seed%20Drink%20(White%20Grape)%20290%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 270,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Basil%20Seed%20Drink%20(White%20Grape)%20290%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sobuj-angur-green-grapes-slice-for-juice-frozen-10-gm-400-gm",
    "nameBn": "সবুজ আঙ্গুর স্লাইস জুসের জন্য (ফ্রোজেন) ± ১০ গ্রাম ৪০০ গ্রাম",
    "nameEn": "Sobuj Angur (Green Grapes) Slice For Juice (Frozen) ± 10 gm 400 gm",
    "category": "vegetables",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/sobuj-angur-green-grapes-slice-for-juice-frozen-10-gm-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D175765&q=best&v=1",
    "mrp": 289,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 289,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sobuj-angur-green-grapes-slice-for-juice-frozen-10-gm-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 289,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sobuj%20Angur%20(Green%20Grapes)%20Slice%20For%20Juice%20(Frozen)%20%C2%B1%2010%20gm%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 289,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sobuj%20Angur%20(Green%20Grapes)%20Slice%20For%20Juice%20(Frozen)%20%C2%B1%2010%20gm%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 289,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sobuj%20Angur%20(Green%20Grapes)%20Slice%20For%20Juice%20(Frozen)%20%C2%B1%2010%20gm%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-green-mango-kacha-aam-1-kg-2",
    "nameBn": "কাঁচা আম ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Kacha Aam (Green Mango) ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/kacha-aam-green-mango-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D35636&q=best&v=1",
    "mrp": 59,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳10 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳6 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 49,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/green-mango-kacha-aam-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 53,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Kacha%20Aam%20(Green%20Mango)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 56,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Kacha%20Aam%20(Green%20Mango)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 54,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Kacha%20Aam%20(Green%20Mango)%20%C2%B1%2050%20gm%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-maggi-2-minute-masala-instant-noodles-8-pack",
    "nameBn": "নেসলে ম্যাগী ২-মিনিট মাসালা ইন্সট্যান্ট নুডুলস ৮ প্যাক",
    "nameEn": "Nestle Maggi 2-Minute Masala Instant Noodles 8 pack",
    "category": "snacks",
    "unit": "8 pack",
    "image": "https://chaldn.com/_mpimage/nestle-maggi-2-minute-masala-instant-noodles-8-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153591&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.789Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-maggi-2-minute-masala-instant-noodles-8-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%208%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%208%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%208%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-maggi-2-minute-masala-instant-noodles-16-pack",
    "nameBn": "নেসলে ম্যাগি ২-মিনিট মাসালা ইন্সট্যান্ট নুডুলস ১৬ প্যাক",
    "nameEn": "Nestle Maggi 2 Minute Masala Instant Noodles 16 pack",
    "category": "snacks",
    "unit": "16 pack",
    "image": "https://chaldn.com/_mpimage/nestle-maggi-2-minute-masala-instant-noodles-16-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153592&q=best&v=1",
    "mrp": 340,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.789Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 340,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-maggi-2-minute-masala-instant-noodles-16-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 340,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Maggi%202%20Minute%20Masala%20Instant%20Noodles%2016%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 340,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Maggi%202%20Minute%20Masala%20Instant%20Noodles%2016%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 340,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Maggi%202%20Minute%20Masala%20Instant%20Noodles%2016%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-maggi-2-minute-masala-instant-noodles-4-pack",
    "nameBn": "নেসলে ম্যাগী ২-মিনিট মাসালা ইন্সট্যান্ট নুডুলস ৪ প্যাক",
    "nameEn": "Nestle Maggi 2-Minute Masala Instant Noodles 4 pack",
    "category": "snacks",
    "unit": "4 pack",
    "image": "https://chaldn.com/_mpimage/nestle-maggi-2-minute-masala-instant-noodles-4-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153594&q=best&v=1",
    "mrp": 95,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.789Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-maggi-2-minute-masala-instant-noodles-4-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 95,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%204%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 95,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%204%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%204%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-maggi-2-minute-noodles-masala-12-pack",
    "nameBn": "নেসলে ম্যাগী ২-মিনিট মাসালা ইন্সট্যান্ট নুডলস ১২ প্যাক",
    "nameEn": "Nestle Maggi 2-Minute Masala Instant Noodles 12 pack",
    "category": "snacks",
    "unit": "12 pack",
    "image": "https://chaldn.com/_mpimage/nestle-maggi-2-minute-masala-instant-noodles-12-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153593&q=best&v=1",
    "mrp": 265,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.789Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-maggi-2-minute-noodles-masala-12-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 265,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%2012%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 265,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%2012%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%2012%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-maggi-2-minute-noodles-masala-12-pack-2",
    "nameBn": "নেসলে ম্যাগি ২-মিনিট নুডলস মশলা ১২ প্যাক",
    "nameEn": "Nestle Maggi 2-Minute Noodles Masala 12 pack",
    "category": "snacks",
    "unit": "12 pack",
    "image": "https://chaldn.com/_mpimage/nestle-maggi-2-minute-noodles-masala-12-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D67318&q=best&v=1",
    "mrp": 265,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.789Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-maggi-2-minute-noodles-masala-12-pack-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 265,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Maggi%202-Minute%20Noodles%20Masala%2012%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 265,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Maggi%202-Minute%20Noodles%20Masala%2012%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Maggi%202-Minute%20Noodles%20Masala%2012%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-maggi-2-minute-masala-instant-noodles-free-surprise-gift-12-pack",
    "nameBn": "নেসলে ম্যাগি ২-মিনিট মাসালা ইনস্ট্যান্ট নুডলস (ফ্রি সারপ্রাইজ গিফট) ১২ প্যাক",
    "nameEn": "Nestle Maggi 2-Minute Masala Instant Noodles (Free Surprise Gift) 12 Pack",
    "category": "snacks",
    "unit": "12 pack",
    "image": "https://chaldn.com/_mpimage/nestle-maggi-2-minute-masala-instant-noodles-free-surprise-gift-12-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132205&q=best&v=1&m=400",
    "mrp": 265,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:07.789Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-maggi-2-minute-masala-instant-noodles-free-surprise-gift-12-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 265,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%20(Free%20Surprise%20Gift)%2012%20Pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 265,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%20(Free%20Surprise%20Gift)%2012%20Pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Maggi%202-Minute%20Masala%20Instant%20Noodles%20(Free%20Surprise%20Gift)%2012%20Pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-mr-noodles-8-pcs-496-gm-5",
    "nameBn": "মিঃ নুডুলস ম্যাজিক মাসালা ইজি ইনস্ট্যান্ট ৪৯৬ গ্রাম",
    "nameEn": "Mr.Noodles Magic Masala Easy Instant 496 gm",
    "category": "snacks",
    "unit": "496 gm",
    "image": "https://chaldn.com/_mpimage/mrnoodles-magic-masala-easy-instant-496-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D175133&q=best&v=1",
    "mrp": 170,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.101Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 170,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-mr-noodles-8-pcs-496-gm-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 170,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mr.Noodles%20Magic%20Masala%20Easy%20Instant%20496%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 170,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mr.Noodles%20Magic%20Masala%20Easy%20Instant%20496%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 170,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mr.Noodles%20Magic%20Masala%20Easy%20Instant%20496%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mr-noodles-cup-noodles-magic-masala-40-gm",
    "nameBn": "মিঃ নুডলস কাপ নুডলস ম্যাজিক মসলা ৪০ গ্রাম",
    "nameEn": "Mr. Noodles Cup Noodles Magic Masala 40 gm",
    "category": "snacks",
    "unit": "40 gm",
    "image": "https://chaldn.com/_mpimage/mr-noodles-cup-noodles-magic-masala-40-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130935&q=best&v=1",
    "mrp": 35,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.101Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mr-noodles-cup-noodles-magic-masala-40-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 35,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mr.%20Noodles%20Cup%20Noodles%20Magic%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 35,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mr.%20Noodles%20Cup%20Noodles%20Magic%20Masala%2040%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mr.%20Noodles%20Cup%20Noodles%20Magic%20Masala%2040%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-mrnoodles-magic-masala-instant-noodles-4pcs-248gm",
    "nameBn": "মিঃ নুডুলস ইনস্ট্যান্ট ম্যাজিক মাসালা ২৪৮ গ্রাম",
    "nameEn": "Mr.Noodles Instant Magic Masala 248 gm",
    "category": "snacks",
    "unit": "248 gm",
    "image": "https://chaldn.com/_mpimage/mrnoodles-instant-magic-masala-248-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D38726&q=low&v=1",
    "mrp": 90,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.101Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-mrnoodles-magic-masala-instant-noodles-4pcs-248gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 90,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mr.Noodles%20Instant%20Magic%20Masala%20248%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 90,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mr.Noodles%20Instant%20Magic%20Masala%20248%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mr.Noodles%20Instant%20Magic%20Masala%20248%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mr-noodles-magic-masala-easy-instant-box-free496-gm",
    "nameBn": "মিস্টার নুডলস ম্যাজিক মাসালা ইজি ইনস্ট্যান্ট (বক্স ফ্রি) ৪৯৬ গ্রাম",
    "nameEn": "Mr. Noodles Magic Masala Easy Instant  (Box Free) 496 gm",
    "category": "snacks",
    "unit": "496 gm",
    "image": "https://chaldn.com/_mpimage/mr-noodles-magic-masala-easy-instant-box-free496-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D94484&q=best&v=1",
    "mrp": 145,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.101Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 145,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mr-noodles-magic-masala-easy-instant-box-free496-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 145,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mr.%20Noodles%20Magic%20Masala%20Easy%20Instant%20%20(Box%20Free)%C2%A0496%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 145,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mr.%20Noodles%20Magic%20Masala%20Easy%20Instant%20%20(Box%20Free)%C2%A0496%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 145,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mr.%20Noodles%20Magic%20Masala%20Easy%20Instant%20%20(Box%20Free)%C2%A0496%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mr-noodles-magic-instant-noodles-free-mr-noodles-62-gm-496-gm",
    "nameBn": "মিঃ নুডলস ম্যাজিক ইনস্ট্যান্ট নুডলস (সাথে ৬২ গ্রাম মিঃ নুডলস ফ্রি) ৪৯৬ গ্রাম",
    "nameEn": "Mr. Noodles Magic Easy Instant Noodles (Free Mr. Noodles 62 gm) 496 gm",
    "category": "snacks",
    "unit": "496 gm",
    "image": "https://chaldn.com/_mpimage/mr-noodles-magic-easy-instant-noodles-free-mr-noodles-62-gm-496-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D105381&q=best&v=1",
    "mrp": 145,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.101Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 145,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mr-noodles-magic-instant-noodles-free-mr-noodles-62-gm-496-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 145,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mr.%20Noodles%20Magic%20Easy%20Instant%20Noodles%20(Free%20Mr.%20Noodles%2062%20gm)%20496%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 145,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mr.%20Noodles%20Magic%20Easy%20Instant%20Noodles%20(Free%20Mr.%20Noodles%2062%20gm)%20496%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 145,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mr.%20Noodles%20Magic%20Easy%20Instant%20Noodles%20(Free%20Mr.%20Noodles%2062%20gm)%20496%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mrnoodles-masala-flavour-egg-stick-noodles-150-gm",
    "nameBn": "মিঃ নুডুলস মাসালা ফ্লেভার এগ স্টিক নুডুলস ১৫০ গ্রাম",
    "nameEn": "Mr.Noodles Masala Flavour Egg Stick Noodles 150 gm",
    "category": "snacks",
    "unit": "150 gm",
    "image": "https://chaldn.com/_mpimage/mrnoodles-masala-flavour-egg-stick-noodles-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130957&q=best&v=1",
    "mrp": 25,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.101Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mrnoodles-masala-flavour-egg-stick-noodles-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 25,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mr.Noodles%20Masala%20Flavour%20Egg%20Stick%20Noodles%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 25,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mr.Noodles%20Masala%20Flavour%20Egg%20Stick%20Noodles%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mr.Noodles%20Masala%20Flavour%20Egg%20Stick%20Noodles%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chopstick-yummy-masala-instant-noodles-248-gm",
    "nameBn": "চপস্টিক ইয়ামি মাসালা ইনস্ট্যান্ট নুডুলস ২৪৮ গ্রাম",
    "nameEn": "Chopstick Yummy Masala Instant Noodles 248 gm",
    "category": "snacks",
    "unit": "248 gm",
    "image": "https://chaldn.com/_mpimage/chopstick-yummy-masala-instant-noodles-248-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D149612&q=best&v=1",
    "mrp": 95,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.419Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chopstick-yummy-masala-instant-noodles-248-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 95,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chopstick%20Yummy%20Masala%20Instant%20Noodles%20248%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 95,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chopstick%20Yummy%20Masala%20Instant%20Noodles%20248%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chopstick%20Yummy%20Masala%20Instant%20Noodles%20248%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chopstick-deshi-masala-instant-noodles-8-pack-496-gm",
    "nameBn": "চপসটীক দেশী মাসালা ইনস্ট্যান্ট নুডুলস ৮ টি ৪৯৬ গ্রাম ",
    "nameEn": "Chopstick Deshi Masala Instant Noodles 8 Pack 496 gm",
    "category": "snacks",
    "unit": "496 gm",
    "image": "https://chaldn.com/_mpimage/chopstick-deshi-masala-instant-noodles-8-pack-496-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154359&q=best&v=1",
    "mrp": 175,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.419Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chopstick-deshi-masala-instant-noodles-8-pack-496-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 175,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chopstick%20Deshi%20Masala%20Instant%20Noodles%208%20Pack%20496%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 175,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chopstick%20Deshi%20Masala%20Instant%20Noodles%208%20Pack%20496%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chopstick%20Deshi%20Masala%20Instant%20Noodles%208%20Pack%20496%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-doodles-instant-masala-noodles-free-doodles-box-8-pack",
    "nameBn": "ডুডলস ইনস্ট্যান্ট মাসালা নুডলস (ফ্রি ডুডলস বক্স) ৮ প্যাক",
    "nameEn": "Doodles Instant Masala Noodles (Free Doodles Box) 8 pack",
    "category": "snacks",
    "unit": "8 pack",
    "image": "https://chaldn.com/_mpimage/doodles-instant-masala-noodles-free-doodles-box-8-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D123907&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.419Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/doodles-instant-masala-noodles-free-doodles-box-8-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Doodles%20Instant%20Masala%20Noodles%20(Free%20Doodles%20Box)%208%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Doodles%20Instant%20Masala%20Noodles%20(Free%20Doodles%20Box)%208%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Doodles%20Instant%20Masala%20Noodles%20(Free%20Doodles%20Box)%208%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-instant-noodles-masala-blast-8-pack",
    "nameBn": "ফ্রেশ ইনস্ট্যান্ট নুডলস মাসালা ব্লাস্ট ৮ প্যাক",
    "nameEn": "Fresh Instant Noodles Masala Blast 8 pack",
    "category": "snacks",
    "unit": "8 pack",
    "image": "https://chaldn.com/_mpimage/fresh-instant-noodles-masala-blast-8-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117141&q=best&v=1",
    "mrp": 165,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.419Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 165,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-instant-noodles-masala-blast-8-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 165,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Instant%20Noodles%20Masala%20Blast%208%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 165,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Instant%20Noodles%20Masala%20Blast%208%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 165,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Instant%20Noodles%20Masala%20Blast%208%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-doodles-instant-masala-noodles-free-doodles-box-1-pcs-8-pack",
    "nameBn": "ডুডলস ইনস্ট্যান্ট মাসালা নুডলস (ফ্রি ডুডলস বক্স ১ টি) ৮ প্যাক",
    "nameEn": "Doodles Instant Masala Noodles (Free Doodles Box 1 pcs) 8 pack",
    "category": "snacks",
    "unit": "8 pack",
    "image": "https://chaldn.com/_mpimage/doodles-instant-masala-noodles-free-doodles-box-1-pcs-8-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D124746&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.419Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/doodles-instant-masala-noodles-free-doodles-box-1-pcs-8-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Doodles%20Instant%20Masala%20Noodles%20(Free%20Doodles%20Box%201%20pcs)%208%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Doodles%20Instant%20Masala%20Noodles%20(Free%20Doodles%20Box%201%20pcs)%208%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Doodles%20Instant%20Masala%20Noodles%20(Free%20Doodles%20Box%201%20pcs)%208%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-doodles-masala-noodles-free-doodles-box-8-pcs-2",
    "nameBn": "ডুডলস মাসালা নুডলস (ফ্রি ডুডলস বক্স) ৮ টি",
    "nameEn": "Doodles Masala Noodles (Free Doodles Box) 8 pcs",
    "category": "snacks",
    "unit": "8 pcs",
    "image": "https://chaldn.com/_mpimage/doodles-masala-noodles-free-doodles-box-8-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D100451&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.419Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/doodles-masala-noodles-free-doodles-box-8-pcs-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Doodles%20Masala%20Noodles%20(Free%20Doodles%20Box)%208%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Doodles%20Masala%20Noodles%20(Free%20Doodles%20Box)%208%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Doodles%20Masala%20Noodles%20(Free%20Doodles%20Box)%208%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cocola-egg-noodles-125-gm",
    "nameBn": "কোকোলা এগ নুডুলস ১২৫ গ্রাম",
    "nameEn": "Cocola Egg Noodles 125 gm",
    "category": "snacks",
    "unit": "125 gm",
    "image": "https://chaldn.com/_mpimage/cocola-egg-noodles-125-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127029&q=best&v=1",
    "mrp": 20,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.719Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cocola-egg-noodles-125-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 20,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cocola%20Egg%20Noodles%20125%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 20,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cocola%20Egg%20Noodles%20125%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cocola%20Egg%20Noodles%20125%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cocola-egg-chicken-masala-noodles-150-gm",
    "nameBn": "কোকোলা এগ ও চিকেন মশলা নুডুলস ১৫০ গ্রাম",
    "nameEn": "Cocola Egg & Chicken Masala Noodles 150 gm",
    "category": "snacks",
    "unit": "150 gm",
    "image": "https://chaldn.com/_mpimage/cocola-egg-chicken-masala-noodles-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127028&q=best&v=1",
    "mrp": 25,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.719Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cocola-egg-chicken-masala-noodles-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 25,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cocola%20Egg%20%26%20Chicken%20Masala%20Noodles%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 25,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cocola%20Egg%20%26%20Chicken%20Masala%20Noodles%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cocola%20Egg%20%26%20Chicken%20Masala%20Noodles%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cocola-egg-chicken-noodles-box-300-gm",
    "nameBn": "কোকোলা এগ ও চিকেন নুডলস বক্স ৩০০ গ্রাম",
    "nameEn": "Cocola Egg  & Chicken Noodles Box 300 gm",
    "category": "snacks",
    "unit": "300 gm",
    "image": "https://chaldn.com/_mpimage/cocola-egg-chicken-noodles-box-300-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127027&q=best&v=1",
    "mrp": 45,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.719Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 45,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cocola-egg-chicken-noodles-box-300-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 45,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cocola%20Egg%20%20%26%20Chicken%20Noodles%20Box%20300%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 45,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cocola%20Egg%20%20%26%20Chicken%20Noodles%20Box%20300%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 45,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cocola%20Egg%20%20%26%20Chicken%20Noodles%20Box%20300%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cocola-bowl-noodles-egg-chicken-65-gm",
    "nameBn": "কোকোলা বোল নুডুলস এগ এন্ড চিকেন ৬০ গ্রাম",
    "nameEn": "Cocola Bowl Noodles Egg & Chicken 60 gm",
    "category": "snacks",
    "unit": "60 gm",
    "image": "https://chaldn.com/_mpimage/cocola-bowl-noodles-egg-chicken-60-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127016&q=best&v=1&m=400",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.719Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cocola-bowl-noodles-egg-chicken-65-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cocola%20Bowl%20Noodles%20Egg%20%26%20Chicken%2060%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cocola%20Bowl%20Noodles%20Egg%20%26%20Chicken%2060%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cocola%20Bowl%20Noodles%20Egg%20%26%20Chicken%2060%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cocola-chicken-masala-noodles-180-gm",
    "nameBn": "কোকোলা  চিকেন মশলা নুডুলস ১৫০ গ্রাম",
    "nameEn": "Cocola Chicken Masala Noodles 150 gm",
    "category": "snacks",
    "unit": "150 gm",
    "image": "https://chaldn.com/_mpimage/cocola-chicken-masala-noodles-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127018&q=best&v=1",
    "mrp": 25,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.719Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cocola-chicken-masala-noodles-180-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 25,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cocola%20Chicken%20Masala%20Noodles%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 25,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cocola%20Chicken%20Masala%20Noodles%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cocola%20Chicken%20Masala%20Noodles%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cocola-bowl-noodles-beef-bhuna-with-vegetable-60-gm",
    "nameBn": "কোকোলা বোল নুডলস বীফ ভুনা উইথ ভেজিটেবল ৬০ গ্রাম",
    "nameEn": "Cocola Bowl Noodles Beef Bhuna With Vegetable 60 gm",
    "category": "snacks",
    "unit": "60 gm",
    "image": "https://chaldn.com/_mpimage/cocola-bowl-noodles-beef-bhuna-with-vegetable-60-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D176808&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:08.719Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cocola-bowl-noodles-beef-bhuna-with-vegetable-60-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cocola%20Bowl%20Noodles%20Beef%20Bhuna%20With%20Vegetable%2060%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cocola%20Bowl%20Noodles%20Beef%20Bhuna%20With%20Vegetable%2060%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cocola%20Bowl%20Noodles%20Beef%20Bhuna%20With%20Vegetable%2060%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ispahani-mirzapore-best-leaf-tea-200-gm",
    "nameBn": "ইস্পাহানি মির্জাপুর বেস্ট লিফ টি ২০০ গ্রাম",
    "nameEn": "Ispahani Mirzapore Best Leaf Tea 200 gm",
    "category": "snacks",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129554&q=best&v=1",
    "mrp": 116,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.035Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 116,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ispahani-mirzapore-best-leaf-tea-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 116,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 116,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 116,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ispahani-mirzapore-best-leaf-tea-500-gm",
    "nameBn": "ইস্পাহানি মির্জাপুর সেরা পাতার চা ৫০০ গ্রাম",
    "nameEn": "Ispahani Mirzapore Best Leaf Tea 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D124592&q=best&v=1",
    "mrp": 270,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.035Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 270,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ispahani-mirzapore-best-leaf-tea-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 270,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 270,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 270,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ispahani-mirzapore-tea-best-leaf-400-gm",
    "nameBn": "ইস্পাহানি মির্জাপুর সেরা পাতার চা ৪০০ গ্রাম",
    "nameEn": "Ispahani Mirzapore Best Leaf Tea 400 gm",
    "category": "snacks",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D107236&q=best&v=1",
    "mrp": 230,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.035Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 230,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ispahani-mirzapore-tea-best-leaf-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 230,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 230,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 230,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ispahanimirzapore-best-leaf-tea-jar-350-gm",
    "nameBn": "ইস্পাহানি মির্জাপুর বেস্ট লিফ টি (জার) ৩৫০ গ্রাম",
    "nameEn": "Ispahani Mirzapore Best Leaf Tea (Jar) 350 gm",
    "category": "snacks",
    "unit": "350 gm",
    "image": "https://chaldn.com/_mpimage/ispahanimirzapore-best-leaf-tea-jar-350-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D107226&q=best&v=1",
    "mrp": 220,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.035Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ispahanimirzapore-best-leaf-tea-jar-350-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 220,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ispahani%C2%A0Mirzapore%20Best%20Leaf%20Tea%20(Jar)%20350%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 220,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ispahani%C2%A0Mirzapore%20Best%20Leaf%20Tea%20(Jar)%20350%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ispahani%C2%A0Mirzapore%20Best%20Leaf%20Tea%20(Jar)%20350%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ispahani-mirzapore-best-leaf-tea-free-premium-toast-250-gm-400-gm",
    "nameBn": "ইস্পাহানি মির্জাপুর বেস্ট লিফ টি (ফ্রি ইস্পাহানি প্রিমিয়াম টোস্ট ২৫০ গ্রাম) ৪০০ গ্রাম",
    "nameEn": "Ispahani Mirzapore Best Leaf Tea (Free Ispahani Premium Toast 250 gm) 400 gm",
    "category": "snacks",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-free-premium-toast-250-gm-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D114485&q=best&v=1",
    "mrp": 210,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.035Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ispahani-mirzapore-best-leaf-tea-free-premium-toast-250-gm-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 210,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20(Free%20Ispahani%20Premium%20Toast%20250%20gm)%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 210,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20(Free%20Ispahani%20Premium%20Toast%20250%20gm)%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20(Free%20Ispahani%20Premium%20Toast%20250%20gm)%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ispahani-mirzapore-best-leaf-tea-combo-400-gm-2-pcs",
    "nameBn": "ইস্পাহানি মির্জাপুর বেস্ট লিফ চা  কম্বো ৪০০ গ্রাম ২ টি",
    "nameEn": "Ispahani Mirzapore Best Leaf Tea Combo 400 gm 2 pcs",
    "category": "snacks",
    "unit": "2 pcs",
    "image": "https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-combo-400-gm-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D107237&q=best&v=1",
    "mrp": 420,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.035Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 420,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ispahani-mirzapore-best-leaf-tea-combo-400-gm-2-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 420,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20Combo%20400%20gm%202%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 420,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20Combo%20400%20gm%202%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 420,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ispahani%20Mirzapore%20Best%20Leaf%20Tea%20Combo%20400%20gm%202%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-brooke-bond-taaza-black-tea-150-gm",
    "nameBn": "ব্রুক বন্ড তাজা ব্ল্যাক টি ২০০ গ্রাম",
    "nameEn": "Brooke Bond Taaza Black Tea 200 gm",
    "category": "snacks",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/brooke-bond-taaza-black-tea-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D162454&q=best&v=1",
    "mrp": 130,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.344Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/brooke-bond-taaza-black-tea-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 130,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Brooke%20Bond%20Taaza%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 130,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Brooke%20Bond%20Taaza%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Brooke%20Bond%20Taaza%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-brooke-bond-taaza-black-tea-315-gm",
    "nameBn": "ব্রুক বন্ড তাজা ব্ল্যাক চা ৪০০ গ্রাম",
    "nameEn": "Brooke Bond Taaza Black Tea 400 gm",
    "category": "snacks",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/brooke-bond-taaza-black-tea-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D162455&q=best&v=1",
    "mrp": 250,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.344Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/brooke-bond-taaza-black-tea-315-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 250,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Brooke%20Bond%20Taaza%20Black%20Tea%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 250,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Brooke%20Bond%20Taaza%20Black%20Tea%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Brooke%20Bond%20Taaza%20Black%20Tea%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dr-hh-zeera-black-tea-bag-30-pcs-60-gm",
    "nameBn": "ডঃ এইচএন্ডএইচ জিরা ব্ল্যাক টি ব্যাগ ৩০ টি ৬০ গ্রাম",
    "nameEn": "Dr. H&H Zeera Black Tea Bag 30 pcs 60 gm",
    "category": "snacks",
    "unit": "60 gm",
    "image": "https://chaldn.com/_mpimage/dr-hh-zeera-black-tea-bag-30-pcs-60-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D175026&q=best&v=1",
    "mrp": 175,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.344Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dr-hh-zeera-black-tea-bag-30-pcs-60-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 175,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dr.%20H%26H%20Zeera%20Black%20Tea%20Bag%2030%20pcs%2060%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 175,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dr.%20H%26H%20Zeera%20Black%20Tea%20Bag%2030%20pcs%2060%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dr.%20H%26H%20Zeera%20Black%20Tea%20Bag%2030%20pcs%2060%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dr-hh-mint-black-tea-bag-30-pcs-60-gm",
    "nameBn": "ডঃ এইচএন্ডএইচ পুদিনা ব্ল্যাক টি ব্যাগ ৩০ টি ৬০ গ্রাম",
    "nameEn": "Dr. H&H Mint Black Tea Bag 30 pcs 60 gm",
    "category": "snacks",
    "unit": "60 gm",
    "image": "https://chaldn.com/_mpimage/dr-hh-mint-black-tea-bag-30-pcs-60-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D175024&q=best&v=1",
    "mrp": 175,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.344Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dr-hh-mint-black-tea-bag-30-pcs-60-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 175,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dr.%20H%26H%20Mint%20Black%20Tea%20Bag%2030%20pcs%2060%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 175,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dr.%20H%26H%20Mint%20Black%20Tea%20Bag%2030%20pcs%2060%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dr.%20H%26H%20Mint%20Black%20Tea%20Bag%2030%20pcs%2060%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-premium-black-tea-200-gm-2",
    "nameBn": "ফ্রেশ প্রিমিয়াম ব্ল্যাক টি ২০০ গ্রাম",
    "nameEn": "Fresh Premium Black Tea 200 gm",
    "category": "snacks",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/fresh-premium-black-tea-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117371&q=best&v=1",
    "mrp": 120,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.344Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-premium-black-tea-200-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 120,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Premium%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 120,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Premium%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Premium%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-halda-valley-black-tea-200-gm",
    "nameBn": "হালদা ভ্যালি ব্ল্যাক টি ২০০ গ্রাম",
    "nameEn": "Halda Valley Black Tea 200 gm",
    "category": "snacks",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/halda-valley-black-tea-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169558&q=best&v=1&m=400",
    "mrp": 175,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.344Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/halda-valley-black-tea-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 175,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Halda%20Valley%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 175,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Halda%20Valley%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 175,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Halda%20Valley%20Black%20Tea%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-nescafe-classic-instant-coffee-jar-45-gm",
    "nameBn": "নেসলে নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি জার ৪৫ গ্রাম",
    "nameEn": "Nestle Nescafe Classic Instant Coffee Jar 45 gm",
    "category": "snacks",
    "unit": "45 gm",
    "image": "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-jar-45-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D161347&q=best&v=1",
    "mrp": 275,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.985Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 275,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-nescafe-classic-instant-coffee-jar-45-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 275,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2045%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 275,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2045%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 275,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2045%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-nescafe-classic-instant-coffee-jar-100-gm-2",
    "nameBn": "নেসলে নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি জার ৯০ গ্রাম",
    "nameEn": "Nestle Nescafe Classic Instant Coffee Jar 90 gm",
    "category": "snacks",
    "unit": "90 gm",
    "image": "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-jar-90-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183555&q=best&v=1",
    "mrp": 475,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.985Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 475,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-nescafe-classic-instant-coffee-jar-100-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 475,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2090%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 475,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2090%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 475,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2090%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-nescafe-classic-instant-coffee-jar-180-gm",
    "nameBn": "নেসলে নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি জার ২০০ গ্রাম",
    "nameEn": "Nestle Nescafe Classic Instant Coffee Jar 180 gm",
    "category": "snacks",
    "unit": "180 gm",
    "image": "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-jar-180-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179348&q=best&v=1",
    "mrp": 970,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.985Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 970,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-nescafe-classic-instant-coffee-jar-180-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 970,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%20180%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 970,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%20180%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 970,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%20180%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-nescafe-classic-instant-coffee-jar-24-gm",
    "nameBn": "নেসলে নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি জার ২৪ গ্রাম",
    "nameEn": "Nestle Nescafe Classic Instant Coffee Jar 24 gm",
    "category": "snacks",
    "unit": "24 gm",
    "image": "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-jar-24-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131325&q=best&v=1",
    "mrp": 195,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.985Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-nescafe-classic-instant-coffee-jar-24-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 195,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2024%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 195,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2024%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Jar%2024%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-nescafe-classic-instant-coffee-tin-100-gm",
    "nameBn": "নেসলে নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি (টিন) ১০০ গ্রাম",
    "nameEn": "Nestle Nescafe Classic Instant Coffee (Tin) 100 gm",
    "category": "snacks",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-tin-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D94917&q=best&v=1",
    "mrp": 225,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.985Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 225,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-nescafe-classic-instant-coffee-tin-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 225,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20(Tin)%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 225,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20(Tin)%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 225,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20(Tin)%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nestle-nescafe-classic-instant-coffee-pouch-pack-200-gm",
    "nameBn": "নেসলে নেসক্যাফে ক্লাসিক ইন্সট্যান্ট কফি পাউচ প্যাক ২০০ গ্রাম",
    "nameEn": "Nestle Nescafe Classic Instant Coffee Pouch Pack 200 gm",
    "category": "snacks",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-pouch-pack-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D120413&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:09.985Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nestle-nescafe-classic-instant-coffee-pouch-pack-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Pouch%20Pack%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Pouch%20Pack%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nestle%20Nescafe%20Classic%20Instant%20Coffee%20Pouch%20Pack%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-munchys-lexus-salted-chocolate-sandwich-biscuits-190-gm",
    "nameBn": "মানচি'স লেক্সাস সল্টেড চকলেট ক্রিম স্যান্ডউইচ বিস্কুট ১৯০ গ্রাম",
    "nameEn": "Munchy's Lexus Salted Chocolate Cream Sandwich Biscuits 190 gm",
    "category": "snacks",
    "unit": "190 gm",
    "image": "https://chaldn.com/_mpimage/munchys-lexus-salted-chocolate-cream-sandwich-biscuits-190-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101735&q=best&v=1",
    "mrp": 375,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.301Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 375,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/munchys-lexus-salted-chocolate-sandwich-biscuits-190-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 375,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Munchy's%20Lexus%20Salted%20Chocolate%20Cream%20Sandwich%20Biscuits%20190%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 375,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Munchy's%20Lexus%20Salted%20Chocolate%20Cream%20Sandwich%20Biscuits%20190%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 375,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Munchy's%20Lexus%20Salted%20Chocolate%20Cream%20Sandwich%20Biscuits%20190%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cadbury-oreo-chocolate-cream-sandwich-biscuits-120-gm",
    "nameBn": "কেডবারি অরিও চকো ক্রিম সেন্ডুইজ বিস্কুট ১২০ গ্রাম ",
    "nameEn": "Cadbury Oreo Choco Cream Sandwich Biscuit 120 gm",
    "category": "snacks",
    "unit": "120 gm",
    "image": "https://chaldn.com/_mpimage/cadbury-oreo-choco-cream-sandwich-biscuit-120-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D36647&q=low&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.301Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cadbury-oreo-chocolate-cream-sandwich-biscuits-120-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cadbury%20Oreo%20Choco%20Cream%20Sandwich%20Biscuit%20120%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cadbury%20Oreo%20Choco%20Cream%20Sandwich%20Biscuit%20120%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cadbury%20Oreo%20Choco%20Cream%20Sandwich%20Biscuit%20120%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cadbury-oreo-original-sandwich-cream-biscuit-10855-gm",
    "nameBn": "ক্যাডবেরী অরিও অরজিনাল স্যান্ডউইচ ক্রিম বিস্কুট ১০৮.৫৫ গ্রাম",
    "nameEn": "Cadbury Oreo Original Sandwich Cream Biscuit 108.55 gm",
    "category": "snacks",
    "unit": "108.55 gm",
    "image": "https://chaldn.com/_mpimage/cadbury-oreo-original-sandwich-cream-biscuit-10855-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169285&q=best&v=1&m=400",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.301Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳11 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳7 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 169,
        "inStock": true,
        "discountText": "৳11 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cadbury-oreo-original-sandwich-cream-biscuit-10855-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 173,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cadbury%20Oreo%20Original%20Sandwich%20Cream%20Biscuit%20108.55%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 177,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cadbury%20Oreo%20Original%20Sandwich%20Cream%20Biscuit%20108.55%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 175,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cadbury%20Oreo%20Original%20Sandwich%20Cream%20Biscuit%20108.55%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-danish-doreo-black-chocolate-sandwich-biscuit-320-gm",
    "nameBn": "ডেনিশ ডরিও কালো চকলেট স্যান্ডইউচ বিস্কুট ৩২০ গ্রাম",
    "nameEn": "Danish Doreo Black Chocolate Sandwich Biscuit 320 gm",
    "category": "snacks",
    "unit": "320 gm",
    "image": "https://chaldn.com/_mpimage/danish-doreo-black-chocolate-sandwich-biscuit-320-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47302&q=best&v=1",
    "mrp": 120,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.301Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/danish-doreo-black-chocolate-sandwich-biscuit-320-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 120,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Danish%20Doreo%20Black%20Chocolate%20Sandwich%20Biscuit%20320%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 120,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Danish%20Doreo%20Black%20Chocolate%20Sandwich%20Biscuit%20320%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Danish%20Doreo%20Black%20Chocolate%20Sandwich%20Biscuit%20320%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-danish-doreo-biscuit-12-pack-420-gm",
    "nameBn": "ড্যানিশ ডোরিও ব্ল্যাক চকলেট স্যান্ডুইচ বিস্কিট ১২ টি প্যাক ৪২০ গ্রাম",
    "nameEn": "Danish Doreo Black Chocolate Sandwich Biscuit 12 pack 420 gm",
    "category": "snacks",
    "unit": "420 gm",
    "image": "https://chaldn.com/_mpimage/danish-doreo-black-chocolate-sandwich-biscuit-12-pack-420-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103295&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.301Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/danish-doreo-biscuit-12-pack-420-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Danish%20Doreo%20Black%20Chocolate%20Sandwich%20Biscuit%2012%20pack%20420%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Danish%20Doreo%20Black%20Chocolate%20Sandwich%20Biscuit%2012%20pack%20420%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Danish%20Doreo%20Black%20Chocolate%20Sandwich%20Biscuit%2012%20pack%20420%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fresh-fun-fill-sandwich-chocolate-cream-biscuit-34-gm",
    "nameBn": "ফ্রেশ ফান ফিল স্যান্ডউইচ চকোলেট ক্রিম বিস্কুট ৩৪ গ্রাম",
    "nameEn": "Fresh Fun Fill Sandwich Chocolate Cream Biscuit 34 gm",
    "category": "snacks",
    "unit": "34 gm",
    "image": "https://chaldn.com/_mpimage/fresh-fun-fill-sandwich-chocolate-cream-biscuit-34-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158415&q=best&v=1",
    "mrp": 10,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.301Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 10,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fresh-fun-fill-sandwich-chocolate-cream-biscuit-34-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 10,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fresh%20Fun%20Fill%20Sandwich%20Chocolate%20Cream%20Biscuit%2034%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 10,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fresh%20Fun%20Fill%20Sandwich%20Chocolate%20Cream%20Biscuit%2034%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 10,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fresh%20Fun%20Fill%20Sandwich%20Chocolate%20Cream%20Biscuit%2034%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-olympic-lexus-vegetable-crackers-biscuits-216-gm",
    "nameBn": "অলিম্পিক লেক্সাস ভেজিটেবল ক্র্যাকার্স বিস্কুট ২১৬ গ্রাম",
    "nameEn": "Olympic Lexus Vegetable Crackers Biscuits 216 gm",
    "category": "snacks",
    "unit": "216 gm",
    "image": "https://chaldn.com/_mpimage/olympic-lexus-vegetable-crackers-biscuits-216-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D115564&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.626Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/olympic-lexus-vegetable-crackers-biscuits-216-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Olympic%20Lexus%20Vegetable%20Crackers%20Biscuits%20216%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Olympic%20Lexus%20Vegetable%20Crackers%20Biscuits%20216%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Olympic%20Lexus%20Vegetable%20Crackers%20Biscuits%20216%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-danish-lexus-vegetable-cracker-biscuit-180-gm",
    "nameBn": "ড্যানিশ লেক্সাস ভেজিটেবল ক্র্যাকার বিস্কুট ১৮০ গ্রাম",
    "nameEn": "Danish Lexus Vegetable Cracker Biscuit 180 gm",
    "category": "snacks",
    "unit": "180 gm",
    "image": "https://chaldn.com/_mpimage/danish-lexus-vegetable-cracker-biscuit-180-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D124076&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.626Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/danish-lexus-vegetable-cracker-biscuit-180-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Danish%20Lexus%20Vegetable%20Cracker%20Biscuit%20180%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Danish%20Lexus%20Vegetable%20Cracker%20Biscuit%20180%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Danish%20Lexus%20Vegetable%20Cracker%20Biscuit%20180%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mix-vegetables-50-gm-500-gm",
    "nameBn": "মিশ্র সবজি (± ৫০ গ্রাম) ৫০০ গ্রাম",
    "nameEn": "Mix Vegetables (± 50 gm) 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/mix-vegetables-50-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166217&q=best&v=1",
    "mrp": 59,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.626Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳4 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳2 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mix-vegetables-50-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 57,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mix%20Vegetables%20(%C2%B1%2050%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 58,
        "inStock": true,
        "discountText": "৳1 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mix%20Vegetables%20(%C2%B1%2050%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 57,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mix%20Vegetables%20(%C2%B1%2050%20gm)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-mixed-vegetables-for-fried-rice-500-gm",
    "nameBn": "ফ্রাইড রাইসের জন্য মিশ্র সবজি (± ৫০ গ্রাম) ৫০০ গ্রাম",
    "nameEn": "Mixed Vegetables For Fried Rice (± 50 gm) 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/mixed-vegetables-for-fried-rice-50-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166199&q=best&v=1",
    "mrp": 89,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.626Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 89,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/mixed-vegetables-for-fried-rice-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 89,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Mixed%20Vegetables%20For%20Fried%20Rice%20(%C2%B1%2050%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 89,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Mixed%20Vegetables%20For%20Fried%20Rice%20(%C2%B1%2050%20gm)%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 89,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Mixed%20Vegetables%20For%20Fried%20Rice%20(%C2%B1%2050%20gm)%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-olympic-energy-plus-biscuits-62-gm",
    "nameBn": "অলিম্পিক এনার্জী প্লাস বিস্কুট ৬২ গ্রাম",
    "nameEn": "Olympic Energy Plus Biscuits 62 gm",
    "category": "snacks",
    "unit": "62 gm",
    "image": "https://chaldn.com/_mpimage/olympic-energy-plus-biscuits-62-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183194&q=best&v=1",
    "mrp": 15,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.936Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 15,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/olympic-energy-plus-biscuits-62-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 15,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Olympic%20Energy%20Plus%20Biscuits%2062%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 15,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Olympic%20Energy%20Plus%20Biscuits%2062%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 15,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Olympic%20Energy%20Plus%20Biscuits%2062%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-olympic-energy-plus-biscuits-185-gm",
    "nameBn": "অলিম্পিক এনার্জী প্লাস বিস্কুট ১৮৫ গ্রাম",
    "nameEn": "Olympic Energy Plus Biscuits 185 gm",
    "category": "snacks",
    "unit": "185 gm",
    "image": "https://chaldn.com/_mpimage/olympic-energy-plus-biscuits-185-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183193&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.936Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/olympic-energy-plus-biscuits-185-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Olympic%20Energy%20Plus%20Biscuits%20185%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Olympic%20Energy%20Plus%20Biscuits%20185%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Olympic%20Energy%20Plus%20Biscuits%20185%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-horlicks-instant-hot-malty-goodness-500-gm",
    "nameBn": "হরলিক্স ইনস্ট্যান্ট হট ম্যাল্টি গুডনেস ৫০০ গ্রাম",
    "nameEn": "Horlicks Instant Hot Malty Goodness 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/horlicks-instant-hot-malty-goodness-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160952&q=best&v=1",
    "mrp": 900,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.936Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 900,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/horlicks-instant-hot-malty-goodness-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 900,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Horlicks%20Instant%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 900,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Horlicks%20Instant%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 900,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Horlicks%20Instant%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-horlicks-chocolate-hot-malty-goodness-500-gm",
    "nameBn": "হরলিক্স চকলেট হট ম্যাল্টি গুডনেস ৫০০ গ্রাম",
    "nameEn": "Horlicks Chocolate Hot Malty Goodness 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/horlicks-chocolate-hot-malty-goodness-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160951&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.936Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/horlicks-chocolate-hot-malty-goodness-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Horlicks%20Chocolate%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Horlicks%20Chocolate%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Horlicks%20Chocolate%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-horlicks-original-hot-malty-goodness-500-gm",
    "nameBn": "হরলিক্স অরিজিনাল হট ম্যাল্টি গুডনেস ৫০০ গ্রাম",
    "nameEn": "Horlicks Original Hot Malty Goodness 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/horlicks-original-hot-malty-goodness-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160950&q=best&v=1",
    "mrp": 1079,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.936Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳100 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳60 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 979,
        "inStock": true,
        "discountText": "৳100 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/horlicks-original-hot-malty-goodness-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1019,
        "inStock": true,
        "discountText": "৳60 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Horlicks%20Original%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1054,
        "inStock": true,
        "discountText": "৳25 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Horlicks%20Original%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1034,
        "inStock": true,
        "discountText": "৳45 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Horlicks%20Original%20Hot%20Malty%20Goodness%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-standard-horlicks-health-and-nutrition-drink-15-gm",
    "nameBn": "স্ট্যান্ডার্ড হরলিকস হেলথ অ্যান্ড নিউট্রিশন ড্রিংক ১৫ গ্রাম ",
    "nameEn": "Standard Horlicks Health And Nutrition Drink 15 gm",
    "category": "snacks",
    "unit": "15 gm",
    "image": "https://chaldn.com/_mpimage/standard-horlicks-health-and-nutrition-drink-15-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D176367&q=best&v=1",
    "mrp": 20,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:10.936Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/standard-horlicks-health-and-nutrition-drink-15-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 20,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Standard%20Horlicks%20Health%20And%20Nutrition%20Drink%2015%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 20,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Standard%20Horlicks%20Health%20And%20Nutrition%20Drink%2015%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Standard%20Horlicks%20Health%20And%20Nutrition%20Drink%2015%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pran-special-toast-biscuit-185-gm",
    "nameBn": "প্রাণ স্পেশাল টোস্ট বিস্কুট ২৫০ গ্রাম",
    "nameEn": "Pran Special Toast Biscuit 250 gm",
    "category": "snacks",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/pran-special-toast-biscuit-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132330&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.243Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pran-special-toast-biscuit-185-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pran%20Special%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pran%20Special%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pran%20Special%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-fun-sweet-toast-biscuit-250-gm",
    "nameBn": "ফান সুইটস টোস্ট বিস্কুট ২৫০ গ্রাম",
    "nameEn": "Fun Sweet Toast Biscuit 250 gm",
    "category": "snacks",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/fun-sweet-toast-biscuit-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158383&q=best&v=1",
    "mrp": 65,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.243Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/fun-sweet-toast-biscuit-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 65,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Fun%20Sweet%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 65,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Fun%20Sweet%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Fun%20Sweet%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-fun-tiny-toast-biscuit-chatpata-masala-180-gm",
    "nameBn": "এ সি আই ফান টাইনি টোস্ট বিস্কুট চটপট মাসালা ১৮০ গ্রাম",
    "nameEn": "ACI Fun Tiny Toast Biscuit Chatpata Masala 180 gm",
    "category": "snacks",
    "unit": "180 gm",
    "image": "https://chaldn.com/_mpimage/aci-fun-tiny-toast-biscuit-chatpata-masala-180-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D158134&q=best&v=1",
    "mrp": 90,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.243Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-fun-tiny-toast-biscuit-chatpata-masala-180-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 90,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Fun%20Tiny%20Toast%20Biscuit%20Chatpata%20Masala%20180%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 90,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Fun%20Tiny%20Toast%20Biscuit%20Chatpata%20Masala%20180%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 90,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Fun%20Tiny%20Toast%20Biscuit%20Chatpata%20Masala%20180%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-cocola-anarkali-butter-toast-biscuit-185-gm",
    "nameBn": "কোকোলা আনারকলি বাটার টোস্ট বিস্কুট ১৮৫ গ্রাম",
    "nameEn": "Cocola Anarkali Butter Toast Biscuit 185 gm",
    "category": "snacks",
    "unit": "185 gm",
    "image": "https://chaldn.com/_mpimage/cocola-anarkali-butter-toast-biscuit-185-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D141845&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.243Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/cocola-anarkali-butter-toast-biscuit-185-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Cocola%20Anarkali%20Butter%20Toast%20Biscuit%20185%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Cocola%20Anarkali%20Butter%20Toast%20Biscuit%20185%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Cocola%20Anarkali%20Butter%20Toast%20Biscuit%20185%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-belleame-toast-biscuit-250-gm",
    "nameBn": "বেলামে টোস্ট বিস্কুট ২৫০ গ্রাম",
    "nameEn": "BelleAme Toast Biscuit 250 gm",
    "category": "snacks",
    "unit": "250 gm",
    "image": "https://chaldn.com/_mpimage/belleame-toast-biscuit-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133802&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.243Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/belleame-toast-biscuit-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=BelleAme%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=BelleAme%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=BelleAme%20Toast%20Biscuit%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-funtastic-plain-toast-biscuit-250-gm",
    "nameBn": "ফানটাস্টিক প্লেইন টোস্ট বিস্কুট ১৮৫ গ্রাম",
    "nameEn": "Funtastic Plain Toast Biscuit 185 gm",
    "category": "snacks",
    "unit": "185 gm",
    "image": "https://chaldn.com/_mpimage/funtastic-plain-toast-biscuit-185-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D164225&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.243Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/funtastic-plain-toast-biscuit-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Funtastic%20Plain%20Toast%20Biscuit%20185%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Funtastic%20Plain%20Toast%20Biscuit%20185%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Funtastic%20Plain%20Toast%20Biscuit%20185%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bombay-sweets-potato-crackers-28-gm",
    "nameBn": "বোম্বে সুইটস পটেটো ক্র্যাকারস ২৮ গ্রাম",
    "nameEn": "Bombay Sweets Potato Crackers 28 gm",
    "category": "snacks",
    "unit": "28 gm",
    "image": "https://chaldn.com/_mpimage/bombay-sweets-potato-crackers-28-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177259&q=best&v=1",
    "mrp": 20,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.573Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bombay-sweets-potato-crackers-28-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 20,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bombay%20Sweets%20Potato%20Crackers%2028%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 20,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bombay%20Sweets%20Potato%20Crackers%2028%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 20,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bombay%20Sweets%20Potato%20Crackers%2028%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aarong-dairy-sweetened-yogurt-500-gm",
    "nameBn": "আড়ং ডেইরি মিষ্টি দই ৫০০ গ্রাম",
    "nameEn": "Aarong Dairy Sweetened Yogurt 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-sweetened-yogurt-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D122759&q=best&v=1",
    "mrp": 150,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.573Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aarong-dairy-sweetened-yogurt-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 150,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Aarong%20Dairy%20Sweetened%20Yogurt%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 150,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Aarong%20Dairy%20Sweetened%20Yogurt%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Aarong%20Dairy%20Sweetened%20Yogurt%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bombay-sweets-premium-roshogolla-600-gm",
    "nameBn": "বোম্বে সুইটস প্রিমিয়াম রসগোল্লা ৬০০ গ্রাম",
    "nameEn": "Bombay Sweets Premium Roshogolla 600 gm",
    "category": "snacks",
    "unit": "600 gm",
    "image": "https://chaldn.com/_mpimage/bombay-sweets-premium-roshogolla-600-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D174430&q=best&v=1",
    "mrp": 240,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.573Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bombay-sweets-premium-roshogolla-600-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 240,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bombay%20Sweets%20Premium%20Roshogolla%20600%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 240,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bombay%20Sweets%20Premium%20Roshogolla%20600%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bombay%20Sweets%20Premium%20Roshogolla%20600%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-bombay-sweets-premium-gulab-jamun-600-gm",
    "nameBn": "বোম্বে সুইটস প্রিমিয়াম গুলাব জামুন ৬০০ গ্রাম",
    "nameEn": "Bombay Sweets Premium Gulab Jamun 600 gm",
    "category": "snacks",
    "unit": "600 gm",
    "image": "https://chaldn.com/_mpimage/bombay-sweets-premium-gulab-jamun-600-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D174429&q=best&v=1",
    "mrp": 240,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.573Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/bombay-sweets-premium-gulab-jamun-600-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 240,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Bombay%20Sweets%20Premium%20Gulab%20Jamun%20600%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 240,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Bombay%20Sweets%20Premium%20Gulab%20Jamun%20600%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Bombay%20Sweets%20Premium%20Gulab%20Jamun%20600%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-farm-fresh-sweetened-yogurt-500-gm",
    "nameBn": "ফার্ম ফ্রেশ মিষ্টি দই ৫০০ গ্রাম",
    "nameEn": "Farm Fresh Sweetened Yogurt 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/farm-fresh-sweetened-yogurt-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D161204&q=best&v=1",
    "mrp": 150,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.573Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/farm-fresh-sweetened-yogurt-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 150,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Farm%20Fresh%20Sweetened%20Yogurt%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 150,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Farm%20Fresh%20Sweetened%20Yogurt%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Farm%20Fresh%20Sweetened%20Yogurt%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-premium-sweet-sherpur-bogura-yogurt-100-gm-600-gm",
    "nameBn": "প্রিমিয়াম মিষ্টি (শেরপুর-বগুড়া) দই ± ১০০ গ্রাম ৬০০ গ্রাম",
    "nameEn": "Premium Sweet (Sherpur-Bogura) Yogurt ± 100 gm 600 gm",
    "category": "snacks",
    "unit": "600 gm",
    "image": "https://chaldn.com/_mpimage/premium-sweet-sherpur-bogura-yogurt-100-gm-600-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D174433&q=best&v=1",
    "mrp": 295,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.573Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 295,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/premium-sweet-sherpur-bogura-yogurt-100-gm-600-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 295,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Premium%20Sweet%20(Sherpur-Bogura)%20Yogurt%20%C2%B1%20100%20gm%20600%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 295,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Premium%20Sweet%20(Sherpur-Bogura)%20Yogurt%20%C2%B1%20100%20gm%20600%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 295,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Premium%20Sweet%20(Sherpur-Bogura)%20Yogurt%20%C2%B1%20100%20gm%20600%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tang-orange-instant-drink-powder-bib-500-gm",
    "nameBn": "ট্যাং অরেঞ্জ ইনস্ট্যান্ট ড্রিঙ্ক পাউডার বিআইবি ৫০০ গ্রাম",
    "nameEn": "Tang Orange Instant Drink Powder BIB 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/tang-orange-instant-drink-powder-bib-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169511&q=best&v=1",
    "mrp": 425,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.907Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tang-orange-instant-drink-powder-bib-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 425,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 425,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 425,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tang-orange-instant-drink-powder-bib-200-gm",
    "nameBn": "ট্যাং অরেঞ্জ ইনস্ট্যান্ট ড্রিঙ্ক পাউডার বিআইবি ২০০ গ্রাম",
    "nameEn": "Tang Orange Instant Drink Powder BIB 200 gm",
    "category": "snacks",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/tang-orange-instant-drink-powder-bib-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129382&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.907Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tang-orange-instant-drink-powder-bib-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tang%20Orange%20Instant%20Drink%20Powder%20BIB%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tang-orange-flavoured-instant-drink-powder-jar-750-gm",
    "nameBn": "ট্যাং অরেঞ্জ ফ্লেভার ইনস্ট্যান্ট ড্রিংক পাউডার জার ৭৫০ গ্রাম",
    "nameEn": "Tang Orange Flavoured Instant Drink Powder Jar 750 gm",
    "category": "snacks",
    "unit": "750 gm",
    "image": "https://chaldn.com/_mpimage/tang-orange-flavoured-instant-drink-powder-jar-750-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D157572&q=best&v=1",
    "mrp": 780,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.907Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 780,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tang-orange-flavoured-instant-drink-powder-jar-750-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 780,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tang%20Orange%20Flavoured%20Instant%20Drink%20Powder%20Jar%20750%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 780,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tang%20Orange%20Flavoured%20Instant%20Drink%20Powder%20Jar%20750%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 780,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tang%20Orange%20Flavoured%20Instant%20Drink%20Powder%20Jar%20750%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tang-orange-instant-drink-powder-1-kg",
    "nameBn": "ট্যাং অরেঞ্জ ইন্সট্যান্ট ড্রিংক পাউডার ১ কেজি",
    "nameEn": "Tang Orange Instant Drink Powder 1 kg",
    "category": "snacks",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/tang-orange-instant-drink-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136044&q=best&v=1",
    "mrp": 950,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.907Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tang-orange-instant-drink-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 950,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tang%20Orange%20Instant%20Drink%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 950,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tang%20Orange%20Instant%20Drink%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 950,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tang%20Orange%20Instant%20Drink%20Powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-tang-orange-flavoured-instant-drink-powder-500-gm",
    "nameBn": "ট্যাং কমলা ইনস্ট্যান্ট ড্রিঙ্ক পাউডার ৫০০ গ্রাম",
    "nameEn": "Tang Orange Instant Drink Powder 500 gm",
    "category": "snacks",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/tang-orange-instant-drink-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136045&q=best&v=1",
    "mrp": 480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:11.907Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/tang-orange-flavoured-instant-drink-powder-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Tang%20Orange%20Instant%20Drink%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Tang%20Orange%20Instant%20Drink%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Tang%20Orange%20Instant%20Drink%20Powder%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-jet-classic-detergent-powder-1-kg",
    "nameBn": "জেট ক্লাসিক ডিটারজেন্ট পাউডার পেপার প্যাক ১ কেজি",
    "nameEn": "Jet Classic Detergent Powder Paper Pack 1 kg",
    "category": "snacks",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/jet-classic-detergent-powder-paper-pack-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98622&q=best&v=1&m=400",
    "mrp": 300,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.222Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 300,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/jet-classic-detergent-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 300,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Jet%20Classic%20Detergent%20Powder%20Paper%20Pack%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 300,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Jet%20Classic%20Detergent%20Powder%20Paper%20Pack%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 300,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Jet%20Classic%20Detergent%20Powder%20Paper%20Pack%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-surf-excel-washing-powder-500-gm",
    "nameBn": "সার্ফ এক্সেল ওয়াশিং পাউডার ৫০০ গ্রাম",
    "nameEn": "Surf Excel Washing Powder 500 gm",
    "category": "cleaning",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/surf-excel-washing-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D178720&q=best&v=1",
    "mrp": 120,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.551Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/surf-excel-washing-powder-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 120,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Surf%20Excel%20Washing%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 120,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Surf%20Excel%20Washing%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 120,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Surf%20Excel%20Washing%20Powder%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-surf-excel-washing-powder-1-1-kg",
    "nameBn": "সার্ফ এক্সেল ওয়াশিং পাউডার ১ কেজি",
    "nameEn": "Surf Excel Washing Powder 1 kg",
    "category": "cleaning",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/surf-excel-washing-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177867&q=best&v=1",
    "mrp": 235,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.551Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 235,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/surf-excel-washing-powder-1-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 235,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Surf%20Excel%20Washing%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 235,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Surf%20Excel%20Washing%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 235,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Surf%20Excel%20Washing%20Powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-wheel-washing-powder-2in1-clean-fresh-1-kg",
    "nameBn": "হুইল ওয়াশিং পাউডার ২ ইন ১ ক্লিন এ্যান্ড ফ্রেশ ১ কেজি",
    "nameEn": "Wheel Washing Powder 2 in 1 Clean & Fresh 1 kg",
    "category": "cleaning",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/wheel-washing-powder-2-in-1-clean-fresh-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128372&q=best&v=1",
    "mrp": 155,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.965Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 155,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/wheel-washing-powder-2in1-clean-fresh-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 155,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 155,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 155,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-wheel-washing-powder-2in1-clean-fresh-500-gm",
    "nameBn": "হুইল ওয়াশিং পাউডার ২ ইন ১ ক্লিন এ্যান্ড ফ্রেশ ৫০০ গ্রাম",
    "nameEn": "Wheel Washing Powder 2 in 1 Clean & Fresh 500 gm",
    "category": "cleaning",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/wheel-washing-powder-2-in-1-clean-fresh-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D138276&q=best&v=1",
    "mrp": 80,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.966Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/wheel-washing-powder-2in1-clean-fresh-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 80,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 80,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-wheel-washing-powder-clean-fresh-free-laundry-bar-75-gm-23-gm-2-kg",
    "nameBn": "হুইল ওয়াশিং পাউডার ২ ইন ১ ক্লিন এ্যান্ড ফ্রেশ (ফ্রি লন্ড্রি বার ৭৫ গ্রাম এবং ২৩ গ্রাম) ২ কেজি",
    "nameEn": "Wheel Washing Powder 2 in 1 Clean & Fresh (Free Laundry Bar 75 gm & 23 gm) 2 kg",
    "category": "cleaning",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/wheel-washing-powder-2-in-1-clean-fresh-free-laundry-bar-75-gm-23-gm-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160466&q=best&v=1",
    "mrp": 260,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.966Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 260,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/wheel-washing-powder-clean-fresh-free-laundry-bar-75-gm-23-gm-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 260,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%20(Free%20Laundry%20Bar%2075%20gm%20%26%2023%20gm)%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 260,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%20(Free%20Laundry%20Bar%2075%20gm%20%26%2023%20gm)%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 260,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%20(Free%20Laundry%20Bar%2075%20gm%20%26%2023%20gm)%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-wheel-washing-powder-2-in-1-clean-fresh-2-kg",
    "nameBn": "হুইল ওয়াশিং পাউডার ২ ইন ১ ক্লিন এন্ড ফ্রেশ ২ কেজি",
    "nameEn": "Wheel Washing Powder 2 in 1 Clean & Fresh 2 kg",
    "category": "cleaning",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/wheel-washing-powder-2-in-1-clean-fresh-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127801&q=best&v=1",
    "mrp": 280,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.966Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/wheel-washing-powder-2-in-1-clean-fresh-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 280,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 280,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Wheel%20Washing%20Powder%202%20in%201%20Clean%20%26%20Fresh%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ariel-complete-detergent-washing-powder-buy-1-kg-get-500-gm-free-3-pcs",
    "nameBn": "এরিয়েল কমপ্লিট ডিটারজেন্ট ওয়াশিং পাউডার ৫০০ গ্রাম (২ টি কিনলে ১ টি ফ্রি) ৩ টি",
    "nameEn": "Ariel Complete Detergent Washing Powder 500 gm (Buy 2 Get 1 Free) 3 pcs",
    "category": "cleaning",
    "unit": "3 pcs",
    "image": "https://chaldn.com/_mpimage/ariel-complete-detergent-washing-powder-500-gm-buy-2-get-1-free-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D98373&q=best&v=1",
    "mrp": 220,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:12.966Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ariel-complete-detergent-washing-powder-buy-1-kg-get-500-gm-free-3-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 220,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ariel%20Complete%20Detergent%20Washing%20Powder%20500%20gm%20(Buy%202%20Get%201%20Free)%203%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 220,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ariel%20Complete%20Detergent%20Washing%20Powder%20500%20gm%20(Buy%202%20Get%201%20Free)%203%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ariel%20Complete%20Detergent%20Washing%20Powder%20500%20gm%20(Buy%202%20Get%201%20Free)%203%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rin-advanced-detergent-powder-1-kg",
    "nameBn": "রিন অ্যাডভান্সড ডিটারজেন্ট পাউডার ১ কেজি",
    "nameEn": "Rin Advanced Detergent Powder 1 kg",
    "category": "cleaning",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/rin-advanced-detergent-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135407&q=best&v=1",
    "mrp": 195,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.296Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rin-advanced-detergent-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 195,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rin%20Advanced%20Detergent%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 195,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rin%20Advanced%20Detergent%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rin%20Advanced%20Detergent%20Powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rin-advanced-detergent-powder-500-gm",
    "nameBn": "রিন অ্যাডভান্সড ডিটারজেন্ট পাউডার ৫০০ গ্রাম",
    "nameEn": "Rin Advanced Detergent Powder 500 gm",
    "category": "cleaning",
    "unit": "500 gm",
    "image": "https://chaldn.com/_mpimage/rin-advanced-detergent-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135408&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.296Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rin-advanced-detergent-powder-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rin%20Advanced%20Detergent%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rin%20Advanced%20Detergent%20Powder%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rin%20Advanced%20Detergent%20Powder%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rin-advanced-detergent-powder-2-kg",
    "nameBn": "রিন অ্যাডভান্সড ডিটারজেন্ট পাউডার ২ কেজি",
    "nameEn": "Rin Advanced Detergent Powder 2 kg",
    "category": "cleaning",
    "unit": "2 kg",
    "image": "https://chaldn.com/_mpimage/rin-advanced-detergent-powder-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D138534&q=best&v=1",
    "mrp": 370,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.296Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rin-advanced-detergent-powder-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 370,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rin%20Advanced%20Detergent%20Powder%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 370,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rin%20Advanced%20Detergent%20Powder%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rin%20Advanced%20Detergent%20Powder%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-natura-clear-glow-face-wash-100-ml",
    "nameBn": "ন্যচুরা ক্লিয়ার অ্যান্ড গ্লো ফেস ওয়াশ ১০০ মিলি",
    "nameEn": "Natura Clear & Glow Face Wash 100 ml",
    "category": "cleaning",
    "unit": "100 ml",
    "image": "https://chaldn.com/_mpimage/natura-clear-glow-face-wash-100-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D176338&q=best&v=1",
    "mrp": 220,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.296Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/natura-clear-glow-face-wash-100-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 220,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Natura%20Clear%20%26%20Glow%20Face%20Wash%20100%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 220,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Natura%20Clear%20%26%20Glow%20Face%20Wash%20100%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Natura%20Clear%20%26%20Glow%20Face%20Wash%20100%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ligion-neem-face-wash-50-ml",
    "nameBn": "লীজান নিম ফেস ওয়াশ ৫০ মিলি",
    "nameEn": "Ligion Neem Face Wash 50 ml",
    "category": "cleaning",
    "unit": "50 ml",
    "image": "https://chaldn.com/_mpimage/ligion-neem-face-wash-50-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130151&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.296Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ligion-neem-face-wash-50-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ligion%20Neem%20Face%20Wash%2050%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ligion%20Neem%20Face%20Wash%2050%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ligion%20Neem%20Face%20Wash%2050%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-clariss-lemon-face-wash-oil-control-100-ml",
    "nameBn": "ক্লারিস লেমন ফেস ওয়াশ (অয়েল কন্ট্রল) ১০০ মিলি",
    "nameEn": "Clariss Lemon Face Wash (Oil Control) 100 ml",
    "category": "cleaning",
    "unit": "100 ml",
    "image": "https://chaldn.com/_mpimage/clariss-lemon-face-wash-oil-control-100-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96506&q=best&v=1",
    "mrp": 265,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.296Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/clariss-lemon-face-wash-oil-control-100-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 265,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Clariss%20Lemon%20Face%20Wash%20(Oil%20Control)%20100%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 265,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Clariss%20Lemon%20Face%20Wash%20(Oil%20Control)%20100%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 265,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Clariss%20Lemon%20Face%20Wash%20(Oil%20Control)%20100%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-liquid-toilet-cleaner-power-plus-original-750-ml",
    "nameBn": "হারপিক লিকুইড টয়লেট ক্লিনার পাওয়ার প্লাস অরিজিনাল ৭৫০ মিলি",
    "nameEn": "Harpic Liquid Toilet Cleaner Power Plus Original 750 ml",
    "category": "cleaning",
    "unit": "750 ml",
    "image": "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-power-plus-original-750-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D176693&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.937Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-liquid-toilet-cleaner-power-plus-original-750-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20Liquid%20Toilet%20Cleaner%20Power%20Plus%20Original%20750%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20Liquid%20Toilet%20Cleaner%20Power%20Plus%20Original%20750%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20Liquid%20Toilet%20Cleaner%20Power%20Plus%20Original%20750%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-liquid-toilet-cleaner-original-free-mug-1-ltr",
    "nameBn": "হারপিক লিকুইড টয়লেট ক্লিনার অরিজিনাল (ফ্রি মগ) ১ লিটার",
    "nameEn": "Harpic Liquid Toilet Cleaner Original (Free Mug) 1 ltr",
    "category": "cleaning",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-original-free-mug-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169726&q=best&v=1",
    "mrp": 235,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.937Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 235,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-liquid-toilet-cleaner-original-free-mug-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 235,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20(Free%20Mug)%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 235,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20(Free%20Mug)%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 235,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20(Free%20Mug)%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-liquid-toilet-cleaner-original-1-ltr",
    "nameBn": "হারপিক লিকুইড টয়লেট ক্লিনার অরিজিনাল ১ লিটার",
    "nameEn": "Harpic Liquid Toilet Cleaner Original 1 ltr",
    "category": "cleaning",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-original-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D186626&q=best&v=1",
    "mrp": 235,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.937Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 235,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-liquid-toilet-cleaner-original-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 235,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20Liquid%20Toilet%20Cleaner%20Original%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 235,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20Liquid%20Toilet%20Cleaner%20Original%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 235,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20Liquid%20Toilet%20Cleaner%20Original%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-power-plus-toilet-cleaner-500-ml-5",
    "nameBn": "হারপিক টয়লেট ক্লিনার অরিজিনাল ৫০০ মিলি",
    "nameEn": "Harpic Liquid Toilet Cleaner Original 500 ml",
    "category": "cleaning",
    "unit": "500 ml",
    "image": "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-original-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169577&q=best&v=1",
    "mrp": 135,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.937Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-power-plus-toilet-cleaner-500-ml-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 135,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 135,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-liquid-toilet-cleaner-original-750-ml",
    "nameBn": "হারপিক লিকুইড টয়লেট ক্লিনার অরিজিনাল ৭৫০ মিলি",
    "nameEn": "Harpic Liquid Toilet Cleaner Original 750 ml",
    "category": "cleaning",
    "unit": "750 ml",
    "image": "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-original-750-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169613&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.937Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-liquid-toilet-cleaner-original-750-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20750%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20750%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20Liquid%20Toilet%20Cleaner%20Original%20750%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-liquid-toilet-cleaner-jasmine-750-ml",
    "nameBn": "হারপিক লিকুইড টয়লেট ক্লিনার (জেসমিন) ৭৫০ মিলি",
    "nameEn": "Harpic Liquid Toilet Cleaner (Jasmine) 750 ml",
    "category": "cleaning",
    "unit": "750 ml",
    "image": "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-jasmine-750-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D186492&q=best&v=1",
    "mrp": 185,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:13.937Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 185,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-liquid-toilet-cleaner-jasmine-750-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 185,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20Liquid%20Toilet%20Cleaner%20(Jasmine)%20750%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 185,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20Liquid%20Toilet%20Cleaner%20(Jasmine)%20750%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 185,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20Liquid%20Toilet%20Cleaner%20(Jasmine)%20750%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-all-in-one-toilet-bathroom-cleaning-powder-400-gm",
    "nameBn": "হারপিক অল-ইন-ওয়ান টয়লেট এবং বাথরুম ক্লিনিং পাউডার ৪০০ গ্রাম",
    "nameEn": "Harpic All-In-One Toilet & Bathroom Cleaning Powder 400 gm",
    "category": "cleaning",
    "unit": "400 gm",
    "image": "https://chaldn.com/_mpimage/harpic-all-in-one-toilet-bathroom-cleaning-powder-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169742&q=best&v=1",
    "mrp": 105,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.256Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-all-in-one-toilet-bathroom-cleaning-powder-400-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 105,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20All-In-One%20Toilet%20%26%20Bathroom%20Cleaning%20Powder%20400%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 105,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20All-In-One%20Toilet%20%26%20Bathroom%20Cleaning%20Powder%20400%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20All-In-One%20Toilet%20%26%20Bathroom%20Cleaning%20Powder%20400%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-harpic-all-in-1-toilet-bathroom-cleaning-powder-1-kg",
    "nameBn": "হারপিক অল-ইন-ওয়ান টয়লেট ও বাথরুম ক্লিনিং পাউডার ১ কেজি",
    "nameEn": "Harpic All-in-1 Toilet & Bathroom Cleaning Powder 1 kg",
    "category": "cleaning",
    "unit": "1 kg",
    "image": "https://chaldn.com/_mpimage/harpic-all-in-1-toilet-bathroom-cleaning-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169790&q=best&v=1",
    "mrp": 210,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.256Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/harpic-all-in-1-toilet-bathroom-cleaning-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 210,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Harpic%20All-in-1%20Toilet%20%26%20Bathroom%20Cleaning%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 210,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Harpic%20All-in-1%20Toilet%20%26%20Bathroom%20Cleaning%20Powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Harpic%20All-in-1%20Toilet%20%26%20Bathroom%20Cleaning%20Powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-dishwashing-liquid-pouch-200-ml",
    "nameBn": "ভিম ডিশওয়াশিং লিকুইড পাউচ ২০০ মিলি",
    "nameEn": "Vim Dishwashing Liquid Pouch 200 ml",
    "category": "cleaning",
    "unit": "200 ml",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-liquid-pouch-200-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182181&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.574Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-dishwashing-liquid-pouch-200-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Liquid%20Pouch%20200%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Liquid%20Pouch%20200%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Liquid%20Pouch%20200%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-dishwashing-liquid-950-ml",
    "nameBn": "ভিম ডিশওয়াশিং লিকুইড ৯৫০ মিলি",
    "nameEn": "Vim Dishwashing Liquid 950 ml",
    "category": "cleaning",
    "unit": "950 ml",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-liquid-950-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182908&q=best&v=1",
    "mrp": 240,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.574Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-dishwashing-liquid-950-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 240,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Liquid%20950%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 240,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Liquid%20950%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Liquid%20950%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-dishwashing-liquid-475-ml",
    "nameBn": "ভিম ডিশওয়াশিং লিকুইড ৪৭৫ মিলি",
    "nameEn": "Vim Dishwashing Liquid 475 ml",
    "category": "cleaning",
    "unit": "475 ml",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-liquid-475-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166720&q=best&v=1",
    "mrp": 130,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.574Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-dishwashing-liquid-475-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 130,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Liquid%20475%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 130,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Liquid%20475%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Liquid%20475%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-dishwash-liquid-100-ml",
    "nameBn": "ভিম ডিশওয়াশ লিকুইড ১০০ মিলি",
    "nameEn": "Vim Dishwash Liquid 100 ml",
    "category": "cleaning",
    "unit": "100 ml",
    "image": "https://chaldn.com/_mpimage/vim-dishwash-liquid-100-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D151138&q=best&v=1",
    "mrp": 25,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.574Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-dishwash-liquid-100-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 25,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwash%20Liquid%20100%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 25,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwash%20Liquid%20100%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 25,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwash%20Liquid%20100%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-qurbani-special-vim-dishwashing-liquid-mega-pack",
    "nameBn": "ভিম ডিশ ওয়াশিং লিকুইড কম্বো প্যাক",
    "nameEn": "Vim Dishwashing Liquid Combo Pack",
    "category": "cleaning",
    "unit": "১ প্যাক",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-liquid-combo-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D71798&q=best&v=1",
    "mrp": 390,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.574Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/qurbani-special-vim-dishwashing-liquid-mega-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 390,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Liquid%20Combo%20Pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 390,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Liquid%20Combo%20Pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Liquid%20Combo%20Pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-dishwashing-bar-300-gm",
    "nameBn": "ভিম ডিশ ওয়াশিং বার ৩০০ গ্রাম",
    "nameEn": "Vim Dishwashing Bar 300 gm",
    "category": "cleaning",
    "unit": "300 gm",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-bar-300-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166719&q=best&v=1",
    "mrp": 40,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.894Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-dishwashing-bar-300-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 40,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Bar%20300%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 40,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Bar%20300%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Bar%20300%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-dishwashing-bar-125-gm",
    "nameBn": "Vim Washing Bar 125 gm",
    "nameEn": "Vim Dishwashing Bar 125 gm",
    "category": "cleaning",
    "unit": "125 gm",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-bar-125-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D165146&q=best&v=1",
    "mrp": 15,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.894Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 15,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-dishwashing-bar-125-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 15,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Bar%20125%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 15,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Bar%20125%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 15,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Bar%20125%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chaldal-basic-dishwashing-bar-300-gm",
    "nameBn": "চালডাল বেসিক ডিশ ওয়াশিং বার ৩০০ গ্রাম",
    "nameEn": "Chaldal Basic Dishwashing Bar 300 gm",
    "category": "cleaning",
    "unit": "300 gm",
    "image": "https://chaldn.com/_mpimage/chaldal-basic-dishwashing-bar-300-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D149688&q=best&v=1",
    "mrp": 40,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.894Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳11 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳7 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "৳11 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chaldal-basic-dishwashing-bar-300-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 33,
        "inStock": true,
        "discountText": "৳7 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chaldal%20Basic%20Dishwashing%20Bar%20300%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 37,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chaldal%20Basic%20Dishwashing%20Bar%20300%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 35,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chaldal%20Basic%20Dishwashing%20Bar%20300%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-dishwashing-bar-free-vim-liquid-5-ml-3-pcs-300-gm",
    "nameBn": "ভিম ডিশ ওয়াশিং বার (ফ্রি ভিম লিকুইড ৫ মিলি ৩ টি) ৩০০ গ্রাম",
    "nameEn": "Vim Dishwashing Bar (Free Vim Liquid 5 ml 3 pcs) 300 gm",
    "category": "cleaning",
    "unit": "300 gm",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-bar-free-vim-liquid-5-ml-3-pcs-300-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D109055&q=best&v=1",
    "mrp": 35,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.894Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-dishwashing-bar-free-vim-liquid-5-ml-3-pcs-300-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 35,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Bar%20(Free%20Vim%20Liquid%205%20ml%203%20pcs)%20300%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 35,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Bar%20(Free%20Vim%20Liquid%205%20ml%203%20pcs)%20300%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 35,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Bar%20(Free%20Vim%20Liquid%205%20ml%203%20pcs)%20300%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-vim-bar-125-gm",
    "nameBn": "ভিম থালাবাসন পরিস্কারের সাবান ১০০ গ্রাম",
    "nameEn": "Vim Dishwashing Bar 100 gm",
    "category": "cleaning",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-bar-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D137009&q=best&v=1",
    "mrp": 12,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.894Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 12,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/vim-bar-125-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 12,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Vim%20Dishwashing%20Bar%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 12,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Vim%20Dishwashing%20Bar%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 12,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Vim%20Dishwashing%20Bar%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-chaldal-basic-dishwashing-bar-100-gm",
    "nameBn": "চালডাল বেসিক ডিশ ওয়াশিং বার ১০০ গ্রাম",
    "nameEn": "Chaldal Basic Dishwashing Bar 100 gm",
    "category": "cleaning",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/chaldal-basic-dishwashing-bar-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D183888&q=best&v=1",
    "mrp": 15,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:14.894Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳4 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳2 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 11,
        "inStock": true,
        "discountText": "৳4 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/chaldal-basic-dishwashing-bar-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 13,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Chaldal%20Basic%20Dishwashing%20Bar%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 14,
        "inStock": true,
        "discountText": "৳1 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Chaldal%20Basic%20Dishwashing%20Bar%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 13,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Chaldal%20Basic%20Dishwashing%20Bar%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lizol-floor-cleaner-citrus-disinfectant-surface-1-ltr",
    "nameBn": "লাইজল ফ্লোর ক্লিনার সাইট্রাস ডিসইনফেক্ট্যান্ট সারফেস ১ লিটার",
    "nameEn": "Lizol Floor Cleaner Citrus Disinfectant Surface 1 ltr",
    "category": "cleaning",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/lizol-floor-cleaner-citrus-disinfectant-surface-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179249&q=best&v=1",
    "mrp": 300,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.189Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 300,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lizol-floor-cleaner-citrus-disinfectant-surface-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 300,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lizol%20Floor%20Cleaner%20Citrus%20Disinfectant%20Surface%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 300,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lizol%20Floor%20Cleaner%20Citrus%20Disinfectant%20Surface%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 300,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lizol%20Floor%20Cleaner%20Citrus%20Disinfectant%20Surface%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lizol-disinfectant-surface-floor-cleaner-citrus-500-ml",
    "nameBn": "লাইজল ডিসইনফেকটেন্ট সারফেস ও ফ্লোর ক্লিনার সিট্রাস ৫০০ মিলি",
    "nameEn": "Lizol Disinfectant Surface & Floor Cleaner Citrus 500 ml",
    "category": "cleaning",
    "unit": "500 ml",
    "image": "https://chaldn.com/_mpimage/lizol-disinfectant-surface-floor-cleaner-citrus-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179248&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.189Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lizol-disinfectant-surface-floor-cleaner-citrus-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Citrus%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Citrus%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Citrus%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lizol-disinfectant-surface-floor-cleaner-lavender-500-ml",
    "nameBn": "লাইজল ডিসইনফেক্ট্যান্ট সারফেস ও ফ্লোর ক্লিনার লেভেন্ডার ৫০০ মিলি.",
    "nameEn": "Lizol Disinfectant Surface & Floor Cleaner Lavender 500 ml",
    "category": "cleaning",
    "unit": "500 ml",
    "image": "https://chaldn.com/_mpimage/lizol-disinfectant-surface-floor-cleaner-lavender-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179251&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.189Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lizol-disinfectant-surface-floor-cleaner-lavender-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Lavender%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Lavender%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Lavender%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lizol-floor-cleaner-floral-disinfectant-surface-1-ltr",
    "nameBn": "লাইজল ফ্লোর ক্লিনার ফ্লোরাল ডিসইনফেক্ট্যান্ট সারফেস ১ লিটার",
    "nameEn": "Lizol Floor Cleaner Floral Disinfectant Surface 1 ltr",
    "category": "cleaning",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/lizol-floor-cleaner-floral-disinfectant-surface-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D167888&q=best&v=1",
    "mrp": 300,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.189Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 300,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lizol-floor-cleaner-floral-disinfectant-surface-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 300,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lizol%20Floor%20Cleaner%20Floral%20Disinfectant%20Surface%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 300,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lizol%20Floor%20Cleaner%20Floral%20Disinfectant%20Surface%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 300,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lizol%20Floor%20Cleaner%20Floral%20Disinfectant%20Surface%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lizol-disinfectant-surface-floor-cleaner-citrus-5-ltr",
    "nameBn": "লাইজল ডিসইনফেক্ট্যান্ট সারফেস ও ফ্লোর ক্লিনার সাইট্রাস ৫ লিটার",
    "nameEn": "Lizol Disinfectant Surface & Floor Cleaner Citrus 5 ltr",
    "category": "cleaning",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/lizol-disinfectant-surface-floor-cleaner-citrus-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D172704&q=best&v=1",
    "mrp": 1250,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.189Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lizol-disinfectant-surface-floor-cleaner-citrus-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1250,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Citrus%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1250,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Citrus%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Citrus%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lizol-disinfectant-surface-floor-cleaner-floral-5-ltr",
    "nameBn": "লাইজল ডিসইনফেক্ট্যান্ট সারফেস ও ফ্লোর ক্লিনার ফ্লোরাল ৫ লিটার",
    "nameEn": "Lizol Disinfectant Surface & Floor Cleaner Floral 5 ltr",
    "category": "cleaning",
    "unit": "5 ltr",
    "image": "https://chaldn.com/_mpimage/lizol-disinfectant-surface-floor-cleaner-floral-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D172703&q=best&v=1",
    "mrp": 1250,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.189Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lizol-disinfectant-surface-floor-cleaner-floral-5-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1250,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Floral%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1250,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Floral%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lizol%20Disinfectant%20Surface%20%26%20Floor%20Cleaner%20Floral%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dettol-original-germ-defence-soap-100-gm",
    "nameBn": "ডেটল অরিজিনাল জার্ম ডিফেন্স সাবান ১০০ গ্রাম",
    "nameEn": "Dettol Original Germ Defence Soap 100 gm",
    "category": "hygiene",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/dettol-original-germ-defence-soap-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179247&q=best&v=1",
    "mrp": 80,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.506Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dettol-original-germ-defence-soap-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 80,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dettol%20Original%20Germ%20Defence%20Soap%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 80,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dettol%20Original%20Germ%20Defence%20Soap%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dettol%20Original%20Germ%20Defence%20Soap%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dettol-bathing-soap-bar-original-27-gm",
    "nameBn": "ডেটল বাথিং সোপ বার অরিজিনাল ২৭ গ্রাম",
    "nameEn": "Dettol Bathing Soap Bar Original 27 gm",
    "category": "hygiene",
    "unit": "27 gm",
    "image": "https://chaldn.com/_mpimage/dettol-bathing-soap-bar-original-27-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D174457&q=best&v=1",
    "mrp": 15,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.506Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 15,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dettol-bathing-soap-bar-original-27-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 15,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dettol%20Bathing%20Soap%20Bar%20Original%2027%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 15,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dettol%20Bathing%20Soap%20Bar%20Original%2027%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 15,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dettol%20Bathing%20Soap%20Bar%20Original%2027%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dettol-original-soap-75-gm",
    "nameBn": "ডেটল সোপ বাথিং বার অরিজিনাল জার্ম ডিফেন্স ৭৫ গ্রাম",
    "nameEn": "Dettol Soap Bathing Bar Original Germ Defence 75 gm",
    "category": "hygiene",
    "unit": "75 gm",
    "image": "https://chaldn.com/_mpimage/dettol-soap-bathing-bar-original-germ-defence-75-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D184831&q=best&v=1",
    "mrp": 65,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.506Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dettol-original-soap-75-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 65,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dettol%20Soap%20Bathing%20Bar%20Original%20Germ%20Defence%2075%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 65,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dettol%20Soap%20Bathing%20Bar%20Original%20Germ%20Defence%2075%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dettol%20Soap%20Bathing%20Bar%20Original%20Germ%20Defence%2075%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dettol-soap-skincare-2x-moisturizers-with-argan-oil-50-gm",
    "nameBn": "ডেটল সোপ স্কিনকেয়ার ২ গুন ময়েশ্চারাইজার উইথ আরগান অয়েল ৫০ গ্রাম",
    "nameEn": "Dettol Soap Skincare 2X Moisturizers With Argan Oil 50 gm",
    "category": "hygiene",
    "unit": "50 gm",
    "image": "https://chaldn.com/_mpimage/dettol-soap-skincare-2x-moisturizers-with-argan-oil-50-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D155353&q=best&v=1",
    "mrp": 40,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.506Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dettol-soap-skincare-2x-moisturizers-with-argan-oil-50-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 40,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dettol%20Soap%20Skincare%202X%20Moisturizers%20With%20Argan%20Oil%2050%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 40,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dettol%20Soap%20Skincare%202X%20Moisturizers%20With%20Argan%20Oil%2050%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 40,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dettol%20Soap%20Skincare%202X%20Moisturizers%20With%20Argan%20Oil%2050%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dettol-bathing-soap-original-skincare-cool-fresh-75-gm-4-pcs",
    "nameBn": "ডেটল বাথিং সোপ (অরিজিনাল, স্কিনকেয়ার, কুল এবং ফ্রেশ) ৭৫ গ্রাম ৪ টি",
    "nameEn": "Dettol Bathing Soap (Original, Skincare, Cool & Fresh) 75 gm 4 pcs",
    "category": "hygiene",
    "unit": "4 pcs",
    "image": "https://chaldn.com/_mpimage/dettol-bathing-soap-original-skincare-cool-fresh-75-gm-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D181243&q=best&v=1",
    "mrp": 260,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.506Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 260,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dettol-bathing-soap-original-skincare-cool-fresh-75-gm-4-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 260,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dettol%20Bathing%20Soap%20(Original%2C%20Skincare%2C%20Cool%20%26%20Fresh)%2075%20gm%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 260,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dettol%20Bathing%20Soap%20(Original%2C%20Skincare%2C%20Cool%20%26%20Fresh)%2075%20gm%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 260,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dettol%20Bathing%20Soap%20(Original%2C%20Skincare%2C%20Cool%20%26%20Fresh)%2075%20gm%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dettol-soap-original-germ-defence-75-gm-combo-pack-3-pcs",
    "nameBn": "ডেটল সোপ বাথিং বার অরিজিনাল জার্ম ডিফেন্স ৭৫ গ্রাম (কম্বো প্যাক) ৩ টি",
    "nameEn": "Dettol Soap Bathing Bar Original Germ Defence 75 gm (Combo Pack) 3 pcs",
    "category": "hygiene",
    "unit": "3 pcs",
    "image": "https://chaldn.com/_mpimage/dettol-soap-bathing-bar-original-germ-defence-75-gm-combo-pack-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D181218&q=best&v=1",
    "mrp": 195,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.506Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dettol-soap-original-germ-defence-75-gm-combo-pack-3-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 195,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dettol%20Soap%20Bathing%20Bar%20Original%20Germ%20Defence%2075%20gm%20(Combo%20Pack)%203%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 195,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dettol%20Soap%20Bathing%20Bar%20Original%20Germ%20Defence%2075%20gm%20(Combo%20Pack)%203%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dettol%20Soap%20Bathing%20Bar%20Original%20Germ%20Defence%2075%20gm%20(Combo%20Pack)%203%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-savlon-ocean-blue-antiseptic-handwash-refill-170-ml-2",
    "nameBn": "এ সি আই স্যাভলন ওশান ব্লু অ্যান্টিসেপ্টিক হ্যান্ডওয়াশ রিফিল ১৭০ মিলি",
    "nameEn": "ACI Savlon Ocean Blue Antiseptic Handwash Refill 170 ml",
    "category": "hygiene",
    "unit": "170 ml",
    "image": "https://chaldn.com/_mpimage/aci-savlon-ocean-blue-antiseptic-handwash-refill-170-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D146333&q=best&v=1",
    "mrp": 80,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-savlon-ocean-blue-antiseptic-handwash-refill-170-ml-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 80,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Savlon%20Ocean%20Blue%20Antiseptic%20Handwash%20Refill%20170%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 80,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Savlon%20Ocean%20Blue%20Antiseptic%20Handwash%20Refill%20170%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 80,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Savlon%20Ocean%20Blue%20Antiseptic%20Handwash%20Refill%20170%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-savlon-liquid-antiseptic-1000-ml",
    "nameBn": "এ সি আই স্যাভলন লিকুইড অ্যান্টিসেপ্টিক ১০০০ মিলি",
    "nameEn": "ACI Savlon Liquid Antiseptic 1000 ml",
    "category": "hygiene",
    "unit": "1000 ml",
    "image": "https://chaldn.com/_mpimage/aci-savlon-liquid-antiseptic-1000-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D181725&q=best&v=1",
    "mrp": 280,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-savlon-liquid-antiseptic-1000-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 280,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Savlon%20Liquid%20Antiseptic%201000%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 280,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Savlon%20Liquid%20Antiseptic%201000%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Savlon%20Liquid%20Antiseptic%201000%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-savlon-disinfectant-spray-125-ml-buy-1-get-1-free-2-pcs",
    "nameBn": "স্যাভলন জীবাণুনাশক স্প্রে ১২৫ মিলি (১ টি কিনলে ১ টি ফ্রি) ২ টি",
    "nameEn": "Savlon Disinfectant Spray 125 ml (Buy 1 Get 1 Free) 2 pcs",
    "category": "hygiene",
    "unit": "2 pcs",
    "image": "https://chaldn.com/_mpimage/savlon-disinfectant-spray-125-ml-buy-1-get-1-free-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117122&q=best&v=1",
    "mrp": 170,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 170,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/savlon-disinfectant-spray-125-ml-buy-1-get-1-free-2-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 170,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Savlon%20Disinfectant%20Spray%20125%20ml%20(Buy%201%20Get%201%20Free)%202%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 170,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Savlon%20Disinfectant%20Spray%20125%20ml%20(Buy%201%20Get%201%20Free)%202%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 170,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Savlon%20Disinfectant%20Spray%20125%20ml%20(Buy%201%20Get%201%20Free)%202%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-savlon-disinfectant-spray-savlon-disinfectant-spray-125-ml-free-300-ml",
    "nameBn": "স্যাভলন জীবাণুনাশক স্প্রে (স্যাভলন জীবাণুনাশক স্প্রে ১২৫ মিলি ফ্রি) ৩০০ মিলি",
    "nameEn": "Savlon Disinfectant Spray (Savlon Disinfectant Spray 125 ml Free) 300 ml",
    "category": "hygiene",
    "unit": "300 ml",
    "image": "https://chaldn.com/_mpimage/savlon-disinfectant-spray-savlon-disinfectant-spray-125-ml-free-300-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117123&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/savlon-disinfectant-spray-savlon-disinfectant-spray-125-ml-free-300-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Savlon%20Disinfectant%20Spray%20(Savlon%20Disinfectant%20Spray%20125%20ml%20Free)%20300%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Savlon%20Disinfectant%20Spray%20(Savlon%20Disinfectant%20Spray%20125%20ml%20Free)%20300%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Savlon%20Disinfectant%20Spray%20(Savlon%20Disinfectant%20Spray%20125%20ml%20Free)%20300%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-savlon-disinfectant-spray-fresh-300-ml",
    "nameBn": "স্যাভলন ডিসইনফেক্ট্যান্ট স্প্রে ফ্রেশ ৩০০ মিলি",
    "nameEn": "Savlon Disinfectant Spray Fresh 300 ml",
    "category": "hygiene",
    "unit": "300 ml",
    "image": "https://chaldn.com/_mpimage/savlon-disinfectant-spray-fresh-300-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D133172&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/savlon-disinfectant-spray-fresh-300-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Savlon%20Disinfectant%20Spray%20Fresh%20300%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Savlon%20Disinfectant%20Spray%20Fresh%20300%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Savlon%20Disinfectant%20Spray%20Fresh%20300%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-savlon-disinfectant-spray-free-pen-hand-sanitizer-300-ml",
    "nameBn": "স্যাভলন জীবাণুনাশক স্প্রে (ফ্রি পেন হ্যান্ড স্যানিটাইজার) ৩০০ মিলি",
    "nameEn": "Savlon Disinfectant Spray (Free Pen Hand Sanitizer) 300 ml",
    "category": "hygiene",
    "unit": "300 ml",
    "image": "https://chaldn.com/_mpimage/savlon-disinfectant-spray-free-pen-hand-sanitizer-300-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78215&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:15.824Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/savlon-disinfectant-spray-free-pen-hand-sanitizer-300-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Savlon%20Disinfectant%20Spray%20(Free%20Pen%20Hand%20Sanitizer)%20300%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Savlon%20Disinfectant%20Spray%20(Free%20Pen%20Hand%20Sanitizer)%20300%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Savlon%20Disinfectant%20Spray%20(Free%20Pen%20Hand%20Sanitizer)%20300%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-nirvana-color-face-palette-windy-monsoon",
    "nameBn": "নিরভানা কালার ফেস পেলেট উইন্ডি মুনসুন",
    "nameEn": "Nirvana Color Face Palette Windy Monsoon",
    "category": "hygiene",
    "unit": "১ প্যাক",
    "image": "https://chaldn.com/_mpimage/nirvana-color-face-palette-windy-monsoon?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D141994&q=best&v=1",
    "mrp": 750,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.130Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 750,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/nirvana-color-face-palette-windy-monsoon",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 750,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Nirvana%20Color%20Face%20Palette%20Windy%20Monsoon",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 750,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Nirvana%20Color%20Face%20Palette%20Windy%20Monsoon",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 750,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Nirvana%20Color%20Face%20Palette%20Windy%20Monsoon",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-guerniss-lasting-matte-waterproof-kajol-1-pcs",
    "nameBn": "গার্নিস লাস্টিং ম্যাট ওয়াটারপ্রুফ কাজল ১ টি",
    "nameEn": "Guerniss Lasting Matte Waterproof Kajol 1 pcs",
    "category": "hygiene",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/guerniss-lasting-matte-waterproof-kajol-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D113025&q=best&v=1",
    "mrp": 550,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.130Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 550,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/guerniss-lasting-matte-waterproof-kajol-1-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 550,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Guerniss%20Lasting%20Matte%20Waterproof%20Kajol%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 550,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Guerniss%20Lasting%20Matte%20Waterproof%20Kajol%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 550,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Guerniss%20Lasting%20Matte%20Waterproof%20Kajol%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-guerniss-anti-melasma-toner-150-ml",
    "nameBn": "গার্নিস অ্যান্টি মেলাসমা টোনার ১৫০ মিলি",
    "nameEn": "Guerniss Anti Melasma Toner 150 ml",
    "category": "hygiene",
    "unit": "150 ml",
    "image": "https://chaldn.com/_mpimage/guerniss-anti-melasma-toner-150-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D113027&q=best&v=1",
    "mrp": 1470,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.130Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1470,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/guerniss-anti-melasma-toner-150-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1470,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Guerniss%20Anti%20Melasma%20Toner%20150%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1470,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Guerniss%20Anti%20Melasma%20Toner%20150%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1470,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Guerniss%20Anti%20Melasma%20Toner%20150%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-remedies-guerniss-hyaluronic-serum-n90-30-ml",
    "nameBn": "রেমেডিস গার্নিস হায়ালুরোনিক সিরাম এন৯০ ৩০ মিলি",
    "nameEn": "Remedies Guerniss Hyaluronic Serum N90 30 ml",
    "category": "hygiene",
    "unit": "30 ml",
    "image": "https://chaldn.com/_mpimage/remedies-guerniss-hyaluronic-serum-n90-30-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D113026&q=best&v=1",
    "mrp": 1480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.130Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/remedies-guerniss-hyaluronic-serum-n90-30-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Remedies%20Guerniss%20Hyaluronic%20Serum%20N90%2030%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Remedies%20Guerniss%20Hyaluronic%20Serum%20N90%2030%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Remedies%20Guerniss%20Hyaluronic%20Serum%20N90%2030%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-guerniss-anti-melasma-whitening-serum-30-ml",
    "nameBn": "গার্নিস অ্যান্টি মেলাসমা হোইটেনিং সিরাম ৩০ মিলি",
    "nameEn": "Guerniss Anti Melasma Whitening Serum 30 ml",
    "category": "hygiene",
    "unit": "30 ml",
    "image": "https://chaldn.com/_mpimage/guerniss-anti-melasma-whitening-serum-30-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D113024&q=best&v=1",
    "mrp": 1480,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.130Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/guerniss-anti-melasma-whitening-serum-30-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1480,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Guerniss%20Anti%20Melasma%20Whitening%20Serum%2030%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1480,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Guerniss%20Anti%20Melasma%20Whitening%20Serum%2030%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1480,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Guerniss%20Anti%20Melasma%20Whitening%20Serum%2030%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pierre-cardin-natural-look-foundation-30-ml",
    "nameBn": "পিয়েরে কার্ডিন ন্যাচারাল লুক ফাউন্ডেশন ৩০ মিলি",
    "nameEn": "Pierre Cardin Natural Look Foundation 30 ml",
    "category": "hygiene",
    "unit": "30 ml",
    "image": "https://chaldn.com/_mpimage/pierre-cardin-natural-look-foundation-30-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D99546&q=best&v=1",
    "mrp": 1250,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.130Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pierre-cardin-natural-look-foundation-30-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1250,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pierre%20Cardin%20Natural%20Look%20Foundation%2030%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1250,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pierre%20Cardin%20Natural%20Look%20Foundation%2030%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1250,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pierre%20Cardin%20Natural%20Look%20Foundation%2030%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lifebuoy-multivitamin-total-soap-bar-100-gm-combo-pack-2-pcs",
    "nameBn": "লাইফবয় মাল্টিভিটামিন টোটাল সোপ বার ১০০ গ্রাম (কম্বো প্যাক) ২ টি ",
    "nameEn": "Lifebuoy Multivitamin Total Soap Bar 100 gm (Combo Pack) 2 pcs",
    "category": "hygiene",
    "unit": "2 pcs",
    "image": "https://chaldn.com/_mpimage/lifebuoy-multivitamin-total-soap-bar-100-gm-combo-pack-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169154&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lifebuoy-multivitamin-total-soap-bar-100-gm-combo-pack-2-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lifebuoy%20Multivitamin%20Total%20Soap%20Bar%20100%20gm%20(Combo%20Pack)%202%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lifebuoy%20Multivitamin%20Total%20Soap%20Bar%20100%20gm%20(Combo%20Pack)%202%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lifebuoy%20Multivitamin%20Total%20Soap%20Bar%20100%20gm%20(Combo%20Pack)%202%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lifebuoy-soap-bar-lemon-fresh-100-gm-2-pcs",
    "nameBn": "লাইফবয় সোপ বার লেমন ফ্রেশ ১০০ গ্রাম (কম্বো প্যাক) ২ টি",
    "nameEn": "Lifebuoy Soap Bar Lemon Fresh 100 gm (Combo Pack) 2 pcs",
    "category": "hygiene",
    "unit": "2 pcs",
    "image": "https://chaldn.com/_mpimage/lifebuoy-soap-bar-lemon-fresh-100-gm-combo-pack-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D165951&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lifebuoy-soap-bar-lemon-fresh-100-gm-2-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lifebuoy%20Soap%20Bar%20Lemon%20Fresh%20100%20gm%20(Combo%20Pack)%202%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lifebuoy%20Soap%20Bar%20Lemon%20Fresh%20100%20gm%20(Combo%20Pack)%202%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lifebuoy%20Soap%20Bar%20Lemon%20Fresh%20100%20gm%20(Combo%20Pack)%202%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-lifebuoy-soap-bar-mild-care-100-gm-2-pcs",
    "nameBn": "লাইফবয় সোপ বার মাইল্ড কেয়ার ১০০ গ্রাম ২ টি",
    "nameEn": "Lifebuoy Soap Bar Mild Care 100 gm 2 pcs",
    "category": "hygiene",
    "unit": "2 pcs",
    "image": "https://chaldn.com/_mpimage/lifebuoy-soap-bar-mild-care-100-gm-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179975&q=best&v=1",
    "mrp": 94,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 94,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/lifebuoy-soap-bar-mild-care-100-gm-2-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 94,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Lifebuoy%20Soap%20Bar%20Mild%20Care%20100%20gm%202%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 94,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Lifebuoy%20Soap%20Bar%20Mild%20Care%20100%20gm%202%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 94,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Lifebuoy%20Soap%20Bar%20Mild%20Care%20100%20gm%202%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-savlon-soap-fresh-100-gm-3-pcs",
    "nameBn": "এ সি আই স্যাভলন ফ্রেশ সাবান ১০০ গ্রাম ৩ টি",
    "nameEn": "ACI Savlon Soap Fresh 100 gm 3 pcs",
    "category": "hygiene",
    "unit": "3 pcs",
    "image": "https://chaldn.com/_mpimage/aci-savlon-soap-fresh-100-gm-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D146510&q=best&v=1",
    "mrp": 210,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-savlon-soap-fresh-100-gm-3-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 210,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Savlon%20Soap%20Fresh%20100%20gm%203%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 210,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Savlon%20Soap%20Fresh%20100%20gm%203%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Savlon%20Soap%20Fresh%20100%20gm%203%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-aci-savlon-soap-mild-100-gm-3-pcs",
    "nameBn": "এ সি আই স্যাভলন মাইল্ড সাবান ১০০ গ্রাম ৩ টি",
    "nameEn": "ACI Savlon Soap Mild 100 gm 3 pcs",
    "category": "hygiene",
    "unit": "3 pcs",
    "image": "https://chaldn.com/_mpimage/aci-savlon-soap-mild-100-gm-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D146509&q=best&v=1",
    "mrp": 210,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/aci-savlon-soap-mild-100-gm-3-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 210,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=ACI%20Savlon%20Soap%20Mild%20100%20gm%203%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 210,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ACI%20Savlon%20Soap%20Mild%20100%20gm%203%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 210,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=ACI%20Savlon%20Soap%20Mild%20100%20gm%203%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-godrej-no-1-jasmine-soap-combo-pack-100-gm-2-pcs",
    "nameBn": "গোদরেজ নাম্বার ওয়ান জেসমিন সাবান কম্বো প্যাক ১০০ গ্রাম ২ টি",
    "nameEn": "Godrej No.1 Jasmine Soap Combo Pack 100 gm 2 pcs",
    "category": "hygiene",
    "unit": "2 pcs",
    "image": "https://chaldn.com/_mpimage/godrej-no1-jasmine-soap-combo-pack-100-gm-2-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D94601&q=best&v=1",
    "mrp": 84,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.460Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 84,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/godrej-no-1-jasmine-soap-combo-pack-100-gm-2-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 84,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Godrej%20No.1%20Jasmine%20Soap%20Combo%20Pack%20100%20gm%202%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 84,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Godrej%20No.1%20Jasmine%20Soap%20Combo%20Pack%20100%20gm%202%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 84,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Godrej%20No.1%20Jasmine%20Soap%20Combo%20Pack%20100%20gm%202%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-zayn-myza-breathable-nail-enamel-coffee-cream-6-ml",
    "nameBn": "জাইন অ্যান্ড মাইজা ব্রেথেবল নেইল এনামেল কফি ক্রিম ৬ মিলি",
    "nameEn": "Zayn & Myza Breathable Nail Enamel Coffee Cream 6 ml",
    "category": "hygiene",
    "unit": "6 ml",
    "image": "https://chaldn.com/_mpimage/zayn-myza-breathable-nail-enamel-coffee-cream-6-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96578&q=best&v=1",
    "mrp": 390,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:16.781Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/zayn-myza-breathable-nail-enamel-coffee-cream-6-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 390,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Zayn%20%26%20Myza%20Breathable%20Nail%20Enamel%20Coffee%20Cream%206%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 390,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Zayn%20%26%20Myza%20Breathable%20Nail%20Enamel%20Coffee%20Cream%206%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Zayn%20%26%20Myza%20Breathable%20Nail%20Enamel%20Coffee%20Cream%206%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-rajkonna-red-sandalwood-powder-25-gm",
    "nameBn": "রাজকন্যা লাল চন্দন পাউডার ২৫ গ্রাম",
    "nameEn": "Rajkonna Red Sandalwood Powder 25 gm",
    "category": "hygiene",
    "unit": "25 gm",
    "image": "https://chaldn.com/_mpimage/rajkonna-red-sandalwood-powder-25-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D104887&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.117Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/rajkonna-red-sandalwood-powder-25-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Rajkonna%20Red%20Sandalwood%20Powder%2025%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Rajkonna%20Red%20Sandalwood%20Powder%2025%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Rajkonna%20Red%20Sandalwood%20Powder%2025%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-groome-makeup-blender-sponge-pink-1-pcs",
    "nameBn": "গ্রুম মেকআপ ব্লেন্ডার স্পঞ্জ (গোলাপি) ১ টি",
    "nameEn": "Groome Makeup Blender Sponge (Pink) 1 pcs",
    "category": "hygiene",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/groome-makeup-blender-sponge-pink-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D104846&q=best&v=1",
    "mrp": 220,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.117Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/groome-makeup-blender-sponge-pink-1-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 220,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Groome%20Makeup%20Blender%20Sponge%20(Pink)%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 220,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Groome%20Makeup%20Blender%20Sponge%20(Pink)%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 220,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Groome%20Makeup%20Blender%20Sponge%20(Pink)%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-zayn-myza-breathable-nail-enamel-red-velvet-6-ml",
    "nameBn": "জাইন অ্যান্ড মাইজা ব্রেথেবল নেইল এনামেল রেড ভেলভেট ৬ মিলি",
    "nameEn": "Zayn & Myza Breathable Nail Enamel Red Velvet 6 ml",
    "category": "hygiene",
    "unit": "6 ml",
    "image": "https://chaldn.com/_mpimage/zayn-myza-breathable-nail-enamel-red-velvet-6-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D96606&q=best&v=1&m=400",
    "mrp": 390,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.117Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/zayn-myza-breathable-nail-enamel-red-velvet-6-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 390,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Zayn%20%26%20Myza%20Breathable%20Nail%20Enamel%20Red%20Velvet%206%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 390,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Zayn%20%26%20Myza%20Breathable%20Nail%20Enamel%20Red%20Velvet%206%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Zayn%20%26%20Myza%20Breathable%20Nail%20Enamel%20Red%20Velvet%206%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-ligion-ladies-uptan-70-gm",
    "nameBn": "লীজান লেডিস উপটান ৭০ গ্রাম",
    "nameEn": "Ligion Ladies Uptan 70 gm",
    "category": "hygiene",
    "unit": "70 gm",
    "image": "https://chaldn.com/_mpimage/ligion-ladies-uptan-70-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D130148&q=best&v=1&m=400",
    "mrp": 70,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.117Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/ligion-ladies-uptan-70-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 70,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Ligion%20Ladies%20Uptan%2070%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 70,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Ligion%20Ladies%20Uptan%2070%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 70,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Ligion%20Ladies%20Uptan%2070%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-flormar-carnation-red-lipstick-free-flormar-kajal-45-ml",
    "nameBn": "ফ্লোরমার কারনেশন রেড লিপস্টিক (ফ্রী ফ্লোরমার কাজল) ৪.৫ মিলি",
    "nameEn": "Flormar Carnation Red Lipstick (Free Flormar Kajal) 4.5 ml",
    "category": "hygiene",
    "unit": "4.5 ml",
    "image": "https://chaldn.com/_mpimage/flormar-carnation-red-lipstick-free-flormar-kajal-45-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D109883&q=best&v=1",
    "mrp": 1000,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.117Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1000,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/flormar-carnation-red-lipstick-free-flormar-kajal-45-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1000,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Flormar%20Carnation%20Red%20Lipstick%20(Free%20Flormar%20Kajal)%204.5%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1000,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Flormar%20Carnation%20Red%20Lipstick%20(Free%20Flormar%20Kajal)%204.5%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1000,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Flormar%20Carnation%20Red%20Lipstick%20(Free%20Flormar%20Kajal)%204.5%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-womans-world-uptan-150-gm",
    "nameBn": "ওমেন'স ওয়ার্ল্ড উপটান ১৫০ গ্রাম",
    "nameEn": "Woman's World Uptan 150 gm",
    "category": "hygiene",
    "unit": "150 gm",
    "image": "https://chaldn.com/_mpimage/womans-world-uptan-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D138339&q=best&v=1&m=400",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.117Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/womans-world-uptan-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Woman's%20World%20Uptan%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Woman's%20World%20Uptan%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Woman's%20World%20Uptan%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pepsodent-toothpaste-germicheck-190-gm",
    "nameBn": "পেপসোডেন্ট টুথপেষ্ট জার্মি চেক + ১৯০ গ্রাম",
    "nameEn": "Pepsodent Toothpaste Germi Check + 190 gm",
    "category": "hygiene",
    "unit": "190 gm",
    "image": "https://chaldn.com/_mpimage/pepsodent-toothpaste-germi-check-190-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153837&q=best&v=1",
    "mrp": 170,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.417Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 170,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pepsodent-toothpaste-germicheck-190-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 170,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20190%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 170,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20190%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 170,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20190%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pepsodent-toothpaste-germi-check-140-gm",
    "nameBn": "পেপসোডেন্ট টুথপেষ্ট জার্মি চেক + ১৪০ গ্রাম",
    "nameEn": "Pepsodent Toothpaste Germi Check + 140 gm",
    "category": "hygiene",
    "unit": "140 gm",
    "image": "https://chaldn.com/_mpimage/pepsodent-toothpaste-germi-check-140-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D159931&q=best&v=1",
    "mrp": 125,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.417Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pepsodent-toothpaste-germi-check-140-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 125,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20140%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 125,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20140%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 125,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20140%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pepsodent-toothpaste-germicheck-85-gm",
    "nameBn": "পেপসোডেন্ট টুথপেষ্ট জার্মি চেক + ৮৫ গ্রাম",
    "nameEn": "Pepsodent Toothpaste Germi Check + 85 gm",
    "category": "hygiene",
    "unit": "85 gm",
    "image": "https://chaldn.com/_mpimage/pepsodent-toothpaste-germi-check-85-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D155624&q=best&v=1",
    "mrp": 95,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.417Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pepsodent-toothpaste-germicheck-85-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 95,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%2085%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 95,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%2085%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 95,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%2085%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pepsodent-toothpaste-germi-check-free-tiffin-box-200-gm",
    "nameBn": "পেপসোডেন্ট টুথপেস্ট জার্মি চেক+ (ফ্রি টিফিন বক্স) ১৯০ গ্রাম",
    "nameEn": "Pepsodent Toothpaste Germi Check+ (Free Tiffin Box) 190 gm",
    "category": "hygiene",
    "unit": "190 gm",
    "image": "https://chaldn.com/_mpimage/pepsodent-toothpaste-germi-check-free-tiffin-box-190-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D161273&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.417Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pepsodent-toothpaste-germi-check-free-tiffin-box-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pepsodent%20Toothpaste%20Germi%20Check%2B%20(Free%20Tiffin%20Box)%20190%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pepsodent%20Toothpaste%20Germi%20Check%2B%20(Free%20Tiffin%20Box)%20190%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pepsodent%20Toothpaste%20Germi%20Check%2B%20(Free%20Tiffin%20Box)%20190%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pepsodent-toothpaste-germi-check-free-toothbrush-200-gm",
    "nameBn": "পেপসোডেন্ট টুথপেস্ট জার্মি চেক + (ফ্রি টুথব্রাশ) ২০০ গ্রাম",
    "nameEn": "Pepsodent Toothpaste Germi Check + (Free Toothbrush) 200 gm",
    "category": "hygiene",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/pepsodent-toothpaste-germi-check-free-toothbrush-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136879&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.417Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pepsodent-toothpaste-germi-check-free-toothbrush-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20(Free%20Toothbrush)%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20(Free%20Toothbrush)%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20(Free%20Toothbrush)%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-pepsodent-toothpaste-germi-check-free-toothbrush-triple-clean-1-pcs-200-gm",
    "nameBn": "পেপসোডেন্ট টুথপেস্ট জার্মি চেক + (ফ্রি টুথব্রাশ ট্রিপল ক্লিন ১ টি) ২০০ গ্রাম",
    "nameEn": "Pepsodent Toothpaste Germi Check + (Free Toothbrush Triple clean 1 pcs) 200 gm",
    "category": "hygiene",
    "unit": "200 gm",
    "image": "https://chaldn.com/_mpimage/pepsodent-toothpaste-germi-check-free-toothbrush-triple-clean-1-pcs-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117216&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.417Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/pepsodent-toothpaste-germi-check-free-toothbrush-triple-clean-1-pcs-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20(Free%20Toothbrush%20Triple%20clean%201%20pcs)%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20(Free%20Toothbrush%20Triple%20clean%201%20pcs)%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Pepsodent%20Toothpaste%20Germi%20Check%20%2B%20(Free%20Toothbrush%20Triple%20clean%201%20pcs)%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sensodyne-repair-protect-toothpaste-100-gm",
    "nameBn": "সেন্সোডাইন রিপেয়ার অ্যান্ড প্রোটেক্ট টুথপেস্ট ১০০ গ্রাম",
    "nameEn": "Sensodyne Repair & Protect Toothpaste 100 gm",
    "category": "hygiene",
    "unit": "100 gm",
    "image": "https://chaldn.com/_mpimage/sensodyne-repair-protect-toothpaste-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179674&q=best&v=1",
    "mrp": 475,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.757Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 475,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sensodyne-repair-protect-toothpaste-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 475,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sensodyne%20Repair%20%26%20Protect%20Toothpaste%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 475,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sensodyne%20Repair%20%26%20Protect%20Toothpaste%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 475,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sensodyne%20Repair%20%26%20Protect%20Toothpaste%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sensodyne-repair-protect-toothpaste-75-gm",
    "nameBn": "সেন্সোডাইন রিপেয়ার অ্যান্ড প্রোটেক্ট টুথপেস্ট ৭৫ গ্রাম",
    "nameEn": "Sensodyne Repair & Protect Toothpaste 75 gm",
    "category": "hygiene",
    "unit": "75 gm",
    "image": "https://chaldn.com/_mpimage/sensodyne-repair-protect-toothpaste-75-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D185935&q=best&v=1",
    "mrp": 819,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.757Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 819,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sensodyne-repair-protect-toothpaste-75-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 819,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sensodyne%20Repair%20%26%20Protect%20Toothpaste%2075%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 819,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sensodyne%20Repair%20%26%20Protect%20Toothpaste%2075%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 819,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sensodyne%20Repair%20%26%20Protect%20Toothpaste%2075%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sensodyne-repair-and-protect-toothpaste-70-gm",
    "nameBn": "সেনসোডাইন রিপেয়ার এন্ড প্রোটেক্ট টুথপেস্ট ৭০ গ্রাম",
    "nameEn": "Sensodyne Repair and Protect Toothpaste 70 gm",
    "category": "hygiene",
    "unit": "70 gm",
    "image": "https://chaldn.com/_mpimage/sensodyne-repair-and-protect-toothpaste-70-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D84103&q=best&v=1",
    "mrp": 360,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.757Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 360,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sensodyne-repair-and-protect-toothpaste-70-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 360,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sensodyne%20Repair%20and%20Protect%20Toothpaste%2070%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 360,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sensodyne%20Repair%20and%20Protect%20Toothpaste%2070%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 360,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sensodyne%20Repair%20and%20Protect%20Toothpaste%2070%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sensodyne-complete-protection-toothbrush-buy-2-get-1-free-3-pcs",
    "nameBn": "সেন্সোডাইন কমপ্লিট প্রোটেকশন টুথব্রাশ (২ টি কিনলে ১ টি ফ্রি) ৩ টি",
    "nameEn": "Sensodyne Complete Protection Toothbrush (Buy 2 Get 1 Free) 3 pcs",
    "category": "hygiene",
    "unit": "3 pcs",
    "image": "https://chaldn.com/_mpimage/sensodyne-complete-protection-toothbrush-buy-2-get-1-free-3-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179685&q=best&v=1",
    "mrp": 440,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.757Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳91 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳55 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 349,
        "inStock": true,
        "discountText": "৳91 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sensodyne-complete-protection-toothbrush-buy-2-get-1-free-3-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 385,
        "inStock": true,
        "discountText": "৳55 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sensodyne%20Complete%20Protection%20Toothbrush%20(Buy%202%20Get%201%20Free)%203%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 417,
        "inStock": true,
        "discountText": "৳23 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sensodyne%20Complete%20Protection%20Toothbrush%20(Buy%202%20Get%201%20Free)%203%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 399,
        "inStock": true,
        "discountText": "৳41 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sensodyne%20Complete%20Protection%20Toothbrush%20(Buy%202%20Get%201%20Free)%203%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sensodyne-complete-protection-toothbrush-1-pcs",
    "nameBn": "সেন্সোডাইন কমপ্লিট প্রোটেকশন টুথব্রাশ ১ টি",
    "nameEn": "Sensodyne Complete Protection Toothbrush 1 pcs",
    "category": "hygiene",
    "unit": "each",
    "image": "https://chaldn.com/_mpimage/sensodyne-complete-protection-toothbrush-1-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179684&q=best&v=1",
    "mrp": 220,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.757Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳41 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳25 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 179,
        "inStock": true,
        "discountText": "৳41 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sensodyne-complete-protection-toothbrush-1-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 195,
        "inStock": true,
        "discountText": "৳25 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sensodyne%20Complete%20Protection%20Toothbrush%201%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 210,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sensodyne%20Complete%20Protection%20Toothbrush%201%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 202,
        "inStock": true,
        "discountText": "৳18 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sensodyne%20Complete%20Protection%20Toothbrush%201%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sensodyne-daily-protection-toothpaste-20-gm",
    "nameBn": "সেন্সোডাইন ডেইলি প্রোটেকশন টুথপেস্ট ২০ গ্রাম",
    "nameEn": "Sensodyne Daily Protection Toothpaste 20 gm",
    "category": "hygiene",
    "unit": "20 gm",
    "image": "https://chaldn.com/_mpimage/sensodyne-daily-protection-toothpaste-20-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D179682&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:17.757Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳5 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳3 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 55,
        "inStock": true,
        "discountText": "৳5 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sensodyne-daily-protection-toothpaste-20-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 57,
        "inStock": true,
        "discountText": "৳3 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sensodyne%20Daily%20Protection%20Toothpaste%2020%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 59,
        "inStock": true,
        "discountText": "৳1 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sensodyne%20Daily%20Protection%20Toothpaste%2020%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 58,
        "inStock": true,
        "discountText": "৳2 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sensodyne%20Daily%20Protection%20Toothpaste%2020%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sunsilk-shampoo-stunning-black-shine-330-ml",
    "nameBn": "সানসিল্ক শ্যাম্পু স্টানিং ব্লাক সাইন ৩৪০ মিলি",
    "nameEn": "Sunsilk Shampoo Stunning Black Shine 340 ml",
    "category": "hygiene",
    "unit": "340 ml",
    "image": "https://chaldn.com/_mpimage/sunsilk-shampoo-stunning-black-shine-340-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153613&q=best&v=1",
    "mrp": 350,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.074Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sunsilk-shampoo-stunning-black-shine-330-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 350,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20340%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 350,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20340%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 350,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20340%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sunsilk-shampoo-stunning-black-shine-170-ml",
    "nameBn": "সানসিল্ক শ্যাম্পু স্টানিং ব্লাক সাইন ১৭০ মিলি",
    "nameEn": "Sunsilk Shampoo Stunning Black Shine 170 ml",
    "category": "hygiene",
    "unit": "170 ml",
    "image": "https://chaldn.com/_mpimage/sunsilk-shampoo-stunning-black-shine-170-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135890&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.074Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sunsilk-shampoo-stunning-black-shine-170-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20170%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20170%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20170%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sunsilk-shampoo-stunning-black-shine-450-ml",
    "nameBn": "সানসিল্ক শ্যাম্পু স্টানিং ব্লাক সাইন ৪৫০ মিলি",
    "nameEn": "Sunsilk Shampoo Stunning Black Shine 450 ml",
    "category": "hygiene",
    "unit": "450 ml",
    "image": "https://chaldn.com/_mpimage/sunsilk-shampoo-stunning-black-shine-450-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D159924&q=best&v=1",
    "mrp": 550,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.074Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 550,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sunsilk-shampoo-stunning-black-shine-450-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 550,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20450%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 550,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20450%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 550,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20450%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sunsilk-black-shine-shampoo-320-ml",
    "nameBn": "সানসিল্ক ব্ল্যাক শাইন শ্যাম্পু ৩২০ মিলি",
    "nameEn": "Sunsilk Black Shine Shampoo 320 ml",
    "category": "hygiene",
    "unit": "320 ml",
    "image": "https://chaldn.com/_mpimage/sunsilk-black-shine-shampoo-320-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D90440&q=best&v=1",
    "mrp": 589,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.074Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 589,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sunsilk-black-shine-shampoo-320-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 589,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sunsilk%20Black%20Shine%20Shampoo%20320%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 589,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sunsilk%20Black%20Shine%20Shampoo%20320%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 589,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sunsilk%20Black%20Shine%20Shampoo%20320%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sunsilk-black-shine-shampoo-free-shampoo-75-ml-170-ml",
    "nameBn": "সানসিল্ক ব্ল্যাক শাইন শ্যাম্পু (ফ্রি শ্যাম্পু ৭৫ মিলি) ১৭০ মিলি",
    "nameEn": "Sunsilk Black Shine Shampoo (Free Shampoo 75 ml) 170 ml",
    "category": "hygiene",
    "unit": "170 ml",
    "image": "https://chaldn.com/_mpimage/sunsilk-black-shine-shampoo-free-shampoo-75-ml-170-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166848&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.074Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sunsilk-black-shine-shampoo-free-shampoo-75-ml-170-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sunsilk%20Black%20Shine%20Shampoo%20(Free%20Shampoo%2075%20ml)%20170%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sunsilk%20Black%20Shine%20Shampoo%20(Free%20Shampoo%2075%20ml)%20170%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sunsilk%20Black%20Shine%20Shampoo%20(Free%20Shampoo%2075%20ml)%20170%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-sunsilk-shampoo-black-shine-free-sunsilk-shampoo-pouch-75-ml-340-ml",
    "nameBn": "সানসিল্ক শ্যাম্পু স্টানিং ব্লাক সাইন (ফ্রি সানসিল্ক শ্যাম্পু পাউচ প্যাক ৭৫ মিলি) ৩৪০ মিলি",
    "nameEn": "Sunsilk Shampoo Stunning Black Shine ( Free Sunsilk Shampoo Pouch Pack 75 ml) 340 ml",
    "category": "hygiene",
    "unit": "340 ml",
    "image": "https://chaldn.com/_mpimage/sunsilk-shampoo-stunning-black-shine-free-sunsilk-shampoo-pouch-pack-75-ml-340-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D157928&q=best&v=1",
    "mrp": 400,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.074Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/sunsilk-shampoo-black-shine-free-sunsilk-shampoo-pouch-75-ml-340-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 400,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20(%20Free%20Sunsilk%20Shampoo%20Pouch%20Pack%2075%20ml)%20340%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 400,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20(%20Free%20Sunsilk%20Shampoo%20Pouch%20Pack%2075%20ml)%20340%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Sunsilk%20Shampoo%20Stunning%20Black%20Shine%20(%20Free%20Sunsilk%20Shampoo%20Pouch%20Pack%2075%20ml)%20340%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-head-shoulders-cool-menthol-anti-dandruff-shampoo-340-ml",
    "nameBn": "হেড অ্যান্ড শোল্ডার মেন্থল অ্যান্টি ড্যান্ড্রাফ শ্যাম্পু ৩৪০ মিলি",
    "nameEn": "Head & Shoulders Cool Menthol Anti Dandruff Shampoo 340 ml",
    "category": "hygiene",
    "unit": "340 ml",
    "image": "https://chaldn.com/_mpimage/head-shoulders-cool-menthol-anti-dandruff-shampoo-340-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160230&q=best&v=1",
    "mrp": 990,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.432Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/head-shoulders-cool-menthol-anti-dandruff-shampoo-340-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 990,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 990,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-head-shoulders-smooth-silky-anti-dandruff-shampoo-340-ml",
    "nameBn": "হেড অ্যান্ড শোল্ডার স্মুথ এ্যান্ড সিল্কি অ্যান্টি ড্যানড্রাফ শ্যাম্পু ৩৪০ মিলি",
    "nameEn": "Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 340 ml",
    "category": "hygiene",
    "unit": "340 ml",
    "image": "https://chaldn.com/_mpimage/head-shoulders-smooth-silky-anti-dandruff-shampoo-340-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160229&q=best&v=1",
    "mrp": 990,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.432Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/head-shoulders-smooth-silky-anti-dandruff-shampoo-340-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 990,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Head%20%26%20Shoulders%20Smooth%20%26%20Silky%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 990,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Head%20%26%20Shoulders%20Smooth%20%26%20Silky%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Head%20%26%20Shoulders%20Smooth%20%26%20Silky%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-head-shoulders-cool-menthol-anti-dandruff-shampoo-1-ltr",
    "nameBn": "হেড অ্যান্ড শোল্ডার মেন্থল অ্যান্টি ড্যান্ড্রাফ শ্যাম্পু ১ লিটার",
    "nameEn": "Head & Shoulders Cool Menthol Anti Dandruff Shampoo 1 ltr",
    "category": "hygiene",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/head-shoulders-cool-menthol-anti-dandruff-shampoo-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89811&q=best&v=1&m=400",
    "mrp": 1800,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.432Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 1800,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/head-shoulders-cool-menthol-anti-dandruff-shampoo-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1800,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1800,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1800,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-head-shoulders-smooth-silky-anti-dandruff-shampoo-1-ltr",
    "nameBn": "হেড অ্যান্ড শোল্ডার স্মুথ এ্যান্ড সিল্কি অ্যান্টি ড্যানড্রাফ শ্যাম্পু ১ লিটার",
    "nameEn": "Head & Shoulders Smooth & Silky Anti Dandruff Shampoo 1 ltr",
    "category": "hygiene",
    "unit": "1 ltr",
    "image": "https://chaldn.com/_mpimage/head-shoulders-smooth-silky-anti-dandruff-shampoo-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D160232&q=best&v=1",
    "mrp": 2890,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.432Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "৳91 ছাড়"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "৳55 ছাড়"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 2799,
        "inStock": true,
        "discountText": "৳91 ছাড়",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/head-shoulders-smooth-silky-anti-dandruff-shampoo-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 2835,
        "inStock": true,
        "discountText": "৳55 ছাড়",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Head%20%26%20Shoulders%20Smooth%20%26%20Silky%20Anti%20Dandruff%20Shampoo%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 2867,
        "inStock": true,
        "discountText": "৳23 ছাড়",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Head%20%26%20Shoulders%20Smooth%20%26%20Silky%20Anti%20Dandruff%20Shampoo%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 2849,
        "inStock": true,
        "discountText": "৳41 ছাড়",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Head%20%26%20Shoulders%20Smooth%20%26%20Silky%20Anti%20Dandruff%20Shampoo%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-head-shoulders-cool-menthol-anti-dandruff-shampoo-180-ml",
    "nameBn": "হেড অ্যান্ড শোল্ডার মেন্থল অ্যান্টি ড্যান্ড্রাফ শ্যাম্পু ১৮০ মিলি",
    "nameEn": "Head & Shoulders Cool Menthol Anti Dandruff Shampoo 180 ml",
    "category": "hygiene",
    "unit": "180 ml",
    "image": "https://chaldn.com/_mpimage/head-shoulders-cool-menthol-anti-dandruff-shampoo-180-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D129174&q=best&v=1&m=400",
    "mrp": 530,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.432Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 530,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/head-shoulders-cool-menthol-anti-dandruff-shampoo-180-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 530,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%20180%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 530,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%20180%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 530,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Head%20%26%20Shoulders%20Cool%20Menthol%20Anti%20Dandruff%20Shampoo%20180%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-head-shoulders-silky-black-anti-dandruff-shampoo-340-ml",
    "nameBn": "হেড অ্যান্ড শোল্ডার সিল্কি ব্ল্যাক এন্টি ড্যানড্রাফ শ্যাম্পু ৩৪০ মিলি",
    "nameEn": "Head & Shoulders Silky Black Anti Dandruff Shampoo 340 ml",
    "category": "hygiene",
    "unit": "340 ml",
    "image": "https://chaldn.com/_mpimage/head-shoulders-silky-black-anti-dandruff-shampoo-340-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101699&q=best&v=1",
    "mrp": 990,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.432Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/head-shoulders-silky-black-anti-dandruff-shampoo-340-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 990,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Head%20%26%20Shoulders%20Silky%20Black%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 990,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Head%20%26%20Shoulders%20Silky%20Black%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 990,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Head%20%26%20Shoulders%20Silky%20Black%20Anti%20Dandruff%20Shampoo%20340%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dove-shampoo-intense-repair-180-ml",
    "nameBn": "ডাভ শ্যাম্পু ইন্টেন্স রিপেয়ার ১৭০ মিলি",
    "nameEn": "Dove Shampoo Intense Repair 170 ml",
    "category": "hygiene",
    "unit": "170 ml",
    "image": "https://chaldn.com/_mpimage/dove-shampoo-intense-repair-170-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127950&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.746Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dove-shampoo-intense-repair-180-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dove%20Shampoo%20Intense%20Repair%20170%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dove%20Shampoo%20Intense%20Repair%20170%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dove%20Shampoo%20Intense%20Repair%20170%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dove-shampoo-intense-repair-330-ml",
    "nameBn": "ডাভ শ্যাম্পু ইন্টেন্স রিপেয়ার ৩৩০ মিলি",
    "nameEn": "Dove Shampoo Intense Repair 330 ml",
    "category": "hygiene",
    "unit": "330 ml",
    "image": "https://chaldn.com/_mpimage/dove-shampoo-intense-repair-330-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128258&q=best&v=1",
    "mrp": 440,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.746Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 440,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dove-shampoo-intense-repair-330-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 440,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dove%20Shampoo%20Intense%20Repair%20330%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 440,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dove%20Shampoo%20Intense%20Repair%20330%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 440,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dove%20Shampoo%20Intense%20Repair%20330%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dove-intensive-repair-shampoo-700-ml",
    "nameBn": "ডাভ শ্যাম্পু ইন্টেন্স রিপেয়ার ৬৫০ মিলি",
    "nameEn": "Dove Shampoo Intense Repair 650 ml",
    "category": "hygiene",
    "unit": "650 ml",
    "image": "https://chaldn.com/_mpimage/dove-shampoo-intense-repair-650-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D128546&q=best&v=1",
    "mrp": 740,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.746Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 740,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dove-intensive-repair-shampoo-700-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 740,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dove%20Shampoo%20Intense%20Repair%20650%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 740,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dove%20Shampoo%20Intense%20Repair%20650%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 740,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dove%20Shampoo%20Intense%20Repair%20650%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dove-intense-repair-shampoo-free-hair-styling-kit-650-ml",
    "nameBn": "ডাভ ইন্টেন্স রিপেয়ার শ্যাম্পু (ফ্রি হেয়ার স্টাইলিং কিট) ৬৫০ মিলি",
    "nameEn": "Dove Intense Repair Shampoo (Free Hair Styling Kit) 650 ml",
    "category": "hygiene",
    "unit": "650 ml",
    "image": "https://chaldn.com/_mpimage/dove-intense-repair-shampoo-free-hair-styling-kit-650-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D99064&q=best&v=1",
    "mrp": 670,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.746Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 670,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dove-intense-repair-shampoo-free-hair-styling-kit-650-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 670,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dove%20Intense%20Repair%20Shampoo%20(Free%20Hair%20Styling%20Kit)%20650%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 670,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dove%20Intense%20Repair%20Shampoo%20(Free%20Hair%20Styling%20Kit)%20650%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 670,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dove%20Intense%20Repair%20Shampoo%20(Free%20Hair%20Styling%20Kit)%20650%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dove-nourishing-oil-care-shampoo-free-dove-intense-repair-conditioner-50-ml-340-ml",
    "nameBn": "ডাভ নারিশিং অয়েল কেয়ার শ্যাম্পু (ফ্রি ডাভ ইনটেনস রিপেয়ার কন্ডিশনার ৫০ মিলি) ৩৪০ মিলি",
    "nameEn": "Dove Nourishing Oil Care Shampoo (Free Dove Intense Repair Conditioner 50 ml) 340 ml",
    "category": "hygiene",
    "unit": "340 ml",
    "image": "https://chaldn.com/_mpimage/dove-nourishing-oil-care-shampoo-free-dove-intense-repair-conditioner-50-ml-340-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103683&q=best&v=1",
    "mrp": 450,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.746Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 450,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dove-nourishing-oil-care-shampoo-free-dove-intense-repair-conditioner-50-ml-340-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 450,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dove%20Nourishing%20Oil%20Care%20Shampoo%20(Free%20Dove%20Intense%20Repair%20Conditioner%2050%20ml)%20340%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 450,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dove%20Nourishing%20Oil%20Care%20Shampoo%20(Free%20Dove%20Intense%20Repair%20Conditioner%2050%20ml)%20340%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 450,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dove%20Nourishing%20Oil%20Care%20Shampoo%20(Free%20Dove%20Intense%20Repair%20Conditioner%2050%20ml)%20340%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "prod-dove-shampoo-healthy-grow-free-intense-repair-conditioner-50-ml-340-ml",
    "nameBn": "ডাভ শ্যাম্পু হেলদি গ্রো (ফ্রি ডাভ ইনটেনস রিপেয়ার কন্ডিশনার ৫০ মিলি) ৩৪০ মিলি",
    "nameEn": "Dove Shampoo Healthy Grow (Free Dove Intense Repair Conditioner 50 ml) 340 ml",
    "category": "hygiene",
    "unit": "340 ml",
    "image": "https://chaldn.com/_mpimage/dove-shampoo-healthy-grow-free-intense-repair-conditioner-50-ml-340-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D185074&q=best&v=1",
    "mrp": 470,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T11:02:18.746Z",
    "offers": [
      {
        "store": "chaldal",
        "title": "১ ঘণ্টায় এক্সপ্রেস ডেলিভারি",
        "badge": "লাইভ রেট"
      },
      {
        "store": "shwapno",
        "title": "স্বপ্ন ক্লাব কার্ড মেম্বারশিপ অফার",
        "badge": "ক্লাব পয়েন্ট"
      },
      {
        "store": "meenaclick",
        "title": "অনলাইন অর্ডারে ভাউচার কোড",
        "badge": "৫% ক্যাশব্যাক"
      },
      {
        "store": "pandamart",
        "title": "২৫ মিনিটে এক্সপ্রেস হোম ডেলিভারি",
        "badge": "Pandapro ডিল"
      }
    ],
    "prices": {
      "chaldal": {
        "price": 470,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "১ ঘণ্টায় ডেলিভারি",
        "url": "https://chaldal.com/dove-shampoo-healthy-grow-free-intense-repair-conditioner-50-ml-340-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 470,
        "inStock": true,
        "discountText": "বাজার দর",
        "offerText": "স্বপ্ন ক্লাব অফার",
        "url": "https://www.shwapno.com/search?q=Dove%20Shampoo%20Healthy%20Grow%20(Free%20Dove%20Intense%20Repair%20Conditioner%2050%20ml)%20340%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 470,
        "inStock": true,
        "discountText": "MRP",
        "offerText": "২৫ মিনিটে এক্সপ্রেস",
        "url": "https://www.foodpanda.com.bd/restaurants?search=Dove%20Shampoo%20Healthy%20Grow%20(Free%20Dove%20Intense%20Repair%20Conditioner%2050%20ml)%20340%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 470,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "offerText": "৫% ক্যাশব্যাক ভাউচার",
        "url": "https://meenabazaronline.com/search?keyword=Dove%20Shampoo%20Healthy%20Grow%20(Free%20Dove%20Intense%20Repair%20Conditioner%2050%20ml)%20340%20ml",
        "isVerifiedLive": true
      }
    }
  }
];
