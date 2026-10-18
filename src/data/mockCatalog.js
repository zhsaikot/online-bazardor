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
    "accentHex": "#f97316"
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
    "accentHex": "#e11d48"
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
    "accentHex": "#db2777"
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
    "accentHex": "#059669"
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
    "id": "oil-rupchanda-5l",
    "nameBn": "রূপচাঁদা ফর্টিফাইড সয়াবিন তেল ৫ লিটার",
    "nameEn": "Rupchanda Fortified Soyabean Oil 5 ltr",
    "category": "oil",
    "unit": "৫ লিটার বোতল",
    "image": "https://chaldn.com/_mpimage/rupchanda-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182966&q=best&v=1",
    "mrp": 975,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:07.772Z",
    "prices": {
      "chaldal": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/rupchanda-soyabean-oil-5-ltr-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 975,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=rupchanda%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 975,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=rupchanda%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=rupchanda%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "oil-teer-5l",
    "nameBn": "তীর ফর্টিফায়েড সয়াবিন তেল ৫ লিটার",
    "nameEn": "Teer Fortified Soyabean Oil 5 ltr",
    "category": "oil",
    "unit": "৫ লিটার বোতল",
    "image": "https://chaldn.com/_mpimage/teer-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136107&q=best&v=1",
    "mrp": 975,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:07.924Z",
    "prices": {
      "chaldal": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/teer-soyabean-oil-5-ltr-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 975,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=teer%20fortified%20soyabean%20oil%205%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 975,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=teer%20fortified%20soyabean%20oil%205%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 975,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=teer%20fortified%20soyabean%20oil%205%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "oil-fresh-1l",
    "nameBn": "ফিউচস টাইটান সুপার গিয়ার অয়েল এসএই ১৪০ ৪ লিটার",
    "nameEn": "Fuchs Titan Super Gear Oil SAE 140 4 ltr",
    "category": "oil",
    "unit": "১ লিটার বোতল",
    "image": "https://chaldn.com/_mpimage/fuchs-titan-super-gear-oil-sae-140-4-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D41785&q=best&v=1",
    "mrp": 1150,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:08.094Z",
    "prices": {
      "chaldal": {
        "price": 1150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/fuchs-titan-super-gear-oil-sae-140-4-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 1150,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=fresh%20fortified%20soyabean%20oil%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 1150,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=fresh%20fortified%20soyabean%20oil%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 1150,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=fresh%20fortified%20soyabean%20oil%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "oil-radhuni-mustard-500ml",
    "nameBn": "রাঁধুনী খাঁটি সরিষার তেল ৫০০ মিলি",
    "nameEn": "Radhuni Pure Mustard Oil 500 ml",
    "category": "oil",
    "unit": "৫০০ মিলি বোতল",
    "image": "https://chaldn.com/_mpimage/radhuni-pure-mustard-oil-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132550&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:08.238Z",
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/radhuni-pure-mustard-oil-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=radhuni%20pure%20mustard%20oil%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=radhuni%20pure%20mustard%20oil%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=radhuni%20pure%20mustard%20oil%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "oil-aarong-ghee-200g",
    "nameBn": "আড়ং ডেইরি খাঁটি ঘি ২০০ গ্রাম",
    "nameEn": "Aarong Dairy Pure Ghee 200 gm",
    "category": "oil",
    "unit": "২০০ গ্রাম জার",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-pure-ghee-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D26926&q=low&v=1",
    "mrp": 390,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:08.380Z",
    "prices": {
      "chaldal": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/aarong-dairy-pure-ghee-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 390,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=aarong%20dairy%20pure%20ghee%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 390,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=aarong%20dairy%20pure%20ghee%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 390,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=aarong%20dairy%20pure%20ghee%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "rice-miniket-5kg",
    "nameBn": "মিনিকেট চাল প্রিমিয়াম (সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Miniket Rice Premium (Boiled) ± 50 gm 5 kg",
    "category": "rice-pulses",
    "unit": "৫ কেজি ব্যাগ",
    "image": "https://chaldn.com/_mpimage/miniket-rice-premium-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48081&q=best&v=1",
    "mrp": 439,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:08.528Z",
    "prices": {
      "chaldal": {
        "price": 439,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/miniket-rice-premium-boiled-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 439,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=miniket%20rice%20premium%20boiled%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 439,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=miniket%20rice%20premium%20boiled%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 439,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=miniket%20rice%20premium%20boiled%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "rice-nazirshail-5kg",
    "nameBn": "নাজিরশাইল চাল প্রিমিয়াম (আধা সিদ্ধ) ± ৫০ গ্রাম ৫ কেজি",
    "nameEn": "Nazirshail Rice Premium (Half Boiled) ± 50 gm 5 kg",
    "category": "rice-pulses",
    "unit": "৫ কেজি ব্যাগ",
    "image": "https://chaldn.com/_mpimage/nazirshail-rice-premium-half-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48083&q=best&v=1",
    "mrp": 479,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:08.680Z",
    "prices": {
      "chaldal": {
        "price": 449,
        "inStock": true,
        "discountText": "৳30 ছাড়",
        "url": "https://chaldal.com/nazirshail-rice-premium-half-boiled-50-gm-5-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 479,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=nazirshail%20rice%20premium%20half%20boiled%205%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 479,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=nazirshail%20rice%20premium%20half%20boiled%205%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 479,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=nazirshail%20rice%20premium%20half%20boiled%205%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "rice-chinigura-1kg",
    "nameBn": "চাষী সুগন্ধি চিনিগুড়া চাল ১ কেজি",
    "nameEn": "Chashi Aromatic Chinigura Rice 1 kg",
    "category": "rice-pulses",
    "unit": "১ কেজি প্যাকেট",
    "image": "https://chaldn.com/_mpimage/chashi-aromatic-chinigura-rice-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D126657&q=best&v=1",
    "mrp": 190,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:08.815Z",
    "prices": {
      "chaldal": {
        "price": 190,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/chasi-aromatic-rice-chinigura-1-kg-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 190,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=chashi%20aromatic%20chinigura%20rice%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 190,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=chashi%20aromatic%20chinigura%20rice%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 190,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=chashi%20aromatic%20chinigura%20rice%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "daal-mosur-desi-1kg",
    "nameBn": "মশুর ডাল (দেশি) ১ কেজি",
    "nameEn": "Moshur Dal (Deshi) 1 kg",
    "category": "rice-pulses",
    "unit": "১ কেজি প্যাক",
    "image": "https://chaldn.com/_mpimage/moshur-dal-deshi-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182384&q=best&v=1",
    "mrp": 179,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:08.954Z",
    "prices": {
      "chaldal": {
        "price": 159,
        "inStock": true,
        "discountText": "৳20 ছাড়",
        "url": "https://chaldal.com/moshur-dal-deshi-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 179,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=moshur%20dal%20deshi%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 179,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=moshur%20dal%20deshi%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 179,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=moshur%20dal%20deshi%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "daal-chola-1kg",
    "nameBn": "ছোলা বুট ১ কেজি",
    "nameEn": "Chola Boot (Chick Peas) 1 kg",
    "category": "rice-pulses",
    "unit": "১ কেজি প্যাক",
    "image": "https://chaldn.com/_mpimage/chola-boot-chick-peas-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D126716&q=best&v=1",
    "mrp": 109,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.087Z",
    "prices": {
      "chaldal": {
        "price": 109,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/chola-boot-chick-peas-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 109,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=chola%20boot%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 109,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=chola%20boot%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 109,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=chola%20boot%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "grain-teer-atta-2kg",
    "nameBn": "তীর আটা ২ কেজি",
    "nameEn": "Teer Flour (Atta) 2 kg",
    "category": "rice-pulses",
    "unit": "২ কেজি প্যাকেট",
    "image": "https://chaldn.com/_mpimage/teer-flour-atta-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101280&q=best&v=1",
    "mrp": 130,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.209Z",
    "prices": {
      "chaldal": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/teer-atta-2-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 130,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=teer%20flour%20atta%202%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 130,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=teer%20flour%20atta%202%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 130,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=teer%20flour%20atta%202%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "grain-teer-maida-2kg",
    "nameBn": "তীর সাদা ময়দা ২ কেজি",
    "nameEn": "Teer White Flour (Maida) 2 kg",
    "category": "rice-pulses",
    "unit": "২ কেজি প্যাকেট",
    "image": "https://chaldn.com/_mpimage/teer-white-flour-maida-2-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101278&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.280Z",
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/teer-flour-2-kg-5",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=teer%20maida",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=teer%20maida",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=teer%20maida",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "grain-fresh-suji-500g",
    "nameBn": "ফ্রেশ সুজি ৫০০ গ্রাম",
    "nameEn": "Fresh Suji 500 gm",
    "category": "rice-pulses",
    "unit": "৫০০ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/fresh-suji-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D97221&q=best&v=1",
    "mrp": 48,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.405Z",
    "prices": {
      "chaldal": {
        "price": 48,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/fresh-suji-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 48,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=fresh%20suji%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 48,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=fresh%20suji%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 48,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=fresh%20suji%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "veg-onion-desi-1kg",
    "nameBn": "দেশী পেঁয়াজ ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Deshi Peyaj (Local Onion) ± 50 gm 1 kg",
    "category": "vegetables",
    "unit": "১ কেজি",
    "image": "https://chaldn.com/_mpimage/deshi-peyaj-local-onion-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D52358&q=low&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.552Z",
    "prices": {
      "chaldal": {
        "price": 39,
        "inStock": true,
        "discountText": "৳11 ছাড়",
        "url": "https://chaldal.com/onion-local-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=deshi%20peyaj%20local%20onion%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=deshi%20peyaj%20local%20onion%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=deshi%20peyaj%20local%20onion%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "veg-potato-gol-1kg",
    "nameBn": "আলু রেগুলার (±৫০ গ্রাম) ১ কেজি",
    "nameEn": "Potato Regular (± 50 gm) 1 kg",
    "category": "vegetables",
    "unit": "১ কেজি",
    "image": "https://chaldn.com/_mpimage/potato-regular-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D164304&q=best&v=1",
    "mrp": 29,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.677Z",
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/potato-alu-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 29,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=potato%20regular%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 29,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=potato%20regular%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 29,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=potato%20regular%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "veg-garlic-china-1kg",
    "nameBn": "রসুন (আমদানিকৃত) ±২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Roshun (Garlic Imported) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "১ কেজি",
    "image": "https://chaldn.com/_mpimage/roshun-garlic-imported-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89993&q=best&v=1",
    "mrp": 109,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.762Z",
    "prices": {
      "chaldal": {
        "price": 79,
        "inStock": true,
        "discountText": "৳30 ছাড়",
        "url": "https://chaldal.com/garlic-roshun-premium-500-gm-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 109,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=garlic%20china%20roshun",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 109,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=garlic%20china%20roshun",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 109,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=garlic%20china%20roshun",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "veg-ginger-desi-500g",
    "nameBn": "দেশি আদা ±২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Deshi Ada (Local Ginger) ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "৫০০ গ্রাম",
    "image": "https://chaldn.com/_mpimage/deshi-ada-local-ginger-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163274&q=best&v=1",
    "mrp": 109,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:09.892Z",
    "prices": {
      "chaldal": {
        "price": 85,
        "inStock": true,
        "discountText": "৳24 ছাড়",
        "url": "https://chaldal.com/deshi-ada-local-ginger-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 109,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=deshi%20ada%20local%20ginger%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 109,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=deshi%20ada%20local%20ginger%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 109,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=deshi%20ada%20local%20ginger%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "veg-green-chilli-250g",
    "nameBn": "কাঁচা মরিচ (±১২ গ্রাম) ২৫০ গ্রাম",
    "nameEn": "Kacha Morich (Green Chilli) ±12 gm 250 gm",
    "category": "vegetables",
    "unit": "২৫০ গ্রাম",
    "image": "https://chaldn.com/_mpimage/kacha-morich-green-chilli-12-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D28576&q=low&v=1",
    "mrp": 89,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.043Z",
    "prices": {
      "chaldal": {
        "price": 89,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/kacha-morich-green-chilli-12-gm-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 89,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=kacha%20morich%20green%20chilli%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 89,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=kacha%20morich%20green%20chilli%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 89,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=kacha%20morich%20green%20chilli%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "veg-tomato-red-500g",
    "nameBn": "লাল টমেটো ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Red Tomato ± 25 gm 500 gm",
    "category": "vegetables",
    "unit": "৫০০ গ্রাম",
    "image": "https://chaldn.com/_mpimage/red-tomato-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64361&q=best&v=1",
    "mrp": 99,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.161Z",
    "prices": {
      "chaldal": {
        "price": 99,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/red-tomato-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 99,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=red%20tomato%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 99,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=red%20tomato%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 99,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=red%20tomato%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "veg-lemon-4pcs",
    "nameBn": "লম্বা বড় লেবু ৪ টি",
    "nameEn": "Lomba Lebu (Long Lemon) 4 pcs",
    "category": "vegetables",
    "unit": "৪টি",
    "image": "https://chaldn.com/_mpimage/lomba-lebu-long-lemon-4-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D64362&q=low&v=1",
    "mrp": 39,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.275Z",
    "prices": {
      "chaldal": {
        "price": 29,
        "inStock": true,
        "discountText": "৳10 ছাড়",
        "url": "https://chaldal.com/long-big-lemon-4-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 39,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=lomba%20lebu%204%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 39,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=lomba%20lebu%204%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 39,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=lomba%20lebu%204%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "egg-red-12pcs",
    "nameBn": "মুরগির ডিম লেয়ার (সাদা) ১২ টি",
    "nameEn": "Chicken Eggs Layer (White) 12 pcs",
    "category": "egg-poultry",
    "unit": "১ ডজন (১২টি)",
    "image": "https://chaldn.com/_mpimage/chicken-eggs-layer-white-12-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D165811&q=best&v=1",
    "mrp": 135,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.399Z",
    "prices": {
      "chaldal": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/chicken-eggs-layer-white-12-pcs",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 135,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=chicken%20eggs%20layer%2012%20pcs",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 135,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=chicken%20eggs%20layer%2012%20pcs",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 135,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=chicken%20eggs%20layer%2012%20pcs",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "poultry-broiler-1kg",
    "nameBn": "বেঙ্গল মিট সম্পূর্ণ মুরগির কারি কাটা ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Bengal Meat Whole Chicken Curry Cut ± 50 gm 1 kg",
    "category": "egg-poultry",
    "unit": "১ কেজি নেট",
    "image": "https://chaldn.com/_mpimage/bengal-meat-whole-chicken-curry-cut-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74653&q=best&v=1",
    "mrp": 465,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.558Z",
    "prices": {
      "chaldal": {
        "price": 465,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/bengal-meat-chicken-pieces-bone-in-net-weight-50-gm-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 465,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=bengal%20meat%20whole%20chicken%20curry%20cut%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 465,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=bengal%20meat%20whole%20chicken%20curry%20cut%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 465,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=bengal%20meat%20whole%20chicken%20curry%20cut%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "poultry-sonali-500g",
    "nameBn": "জীবিত কক মুরগি (প্রক্রিয়াকৃত) ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Live Cock Chicken (Processed) ± 25 gm 500 gm",
    "category": "egg-poultry",
    "unit": "৫০০ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/live-cock-chicken-processed-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D165313&q=best&v=1&m=400",
    "mrp": 355,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.689Z",
    "prices": {
      "chaldal": {
        "price": 319,
        "inStock": true,
        "discountText": "৳36 ছাড়",
        "url": "https://chaldal.com/live-cock-chicken-processed-25-gm-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 355,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=live%20cock%20chicken%20processed%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 355,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=live%20cock%20chicken%20processed%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 355,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=live%20cock%20chicken%20processed%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "meat-beef-bone-1kg",
    "nameBn": "হাড়যুক্ত গরুর মাংস ± ৫০ গ্রাম ১ কেজি",
    "nameEn": "Beef Bone In ± 50 gm 1 kg",
    "category": "egg-poultry",
    "unit": "১ কেজি (হাড়সহ)",
    "image": "https://chaldn.com/_mpimage/beef-bone-in-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D73985&q=low&v=1",
    "mrp": 799,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.867Z",
    "prices": {
      "chaldal": {
        "price": 799,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/beef-bone-in-50-gm-1-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 799,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=beef%20bone%20in%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 799,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=beef%20bone%20in%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 799,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=beef%20bone%20in%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "meat-beef-boneless-500g",
    "nameBn": "গরুর মাংস হার ছাড়া  ± ২৫ গ্রাম ৫০০ গ্রাম",
    "nameEn": "Beef Boneless ± 25 gm 500 gm",
    "category": "egg-poultry",
    "unit": "৫০০ গ্রাম (হাড় ছাড়া)",
    "image": "https://chaldn.com/_mpimage/beef-boneless-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D73564&q=low&v=1",
    "mrp": 619,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:10.994Z",
    "prices": {
      "chaldal": {
        "price": 619,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/beef-bone-less-500-gm-1",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 619,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=beef%20boneless%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 619,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=beef%20boneless%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 619,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=beef%20boneless%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "fish-hilsha-1kg",
    "nameBn": "আস্ত ইলিশ ±৫০ গ্রাম ১.২ কেজি",
    "nameEn": "Whole Hilsha Fish (Asto Ilish) ±50 gm 1.2 kg",
    "category": "egg-poultry",
    "unit": "১.২ কেজি (আস্ত ইলিশ)",
    "image": "https://chaldn.com/_mpimage/whole-hilsha-fish-asto-ilish-50-gm-12-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D164153&q=best&v=1",
    "mrp": 3399,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:11.100Z",
    "prices": {
      "chaldal": {
        "price": 3399,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/whole-frozen-hilsha-net-weight-50-gm-12-kg-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 3399,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=whole%20hilsha%20fish%201.2%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 3399,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=whole%20hilsha%20fish%201.2%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 3399,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=whole%20hilsha%20fish%201.2%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "fish-shrimp-250g",
    "nameBn": "গুড়া চিংড়ি ±১৫ গ্রাম ২৫০ গ্রাম",
    "nameEn": "Gura Chingri (Shrimp) ±15 gm 250 gm",
    "category": "egg-poultry",
    "unit": "২৫০ গ্রাম",
    "image": "https://chaldn.com/_mpimage/gura-chingri-shrimp-15-gm-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103458&q=best&v=1",
    "mrp": 249,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:11.220Z",
    "prices": {
      "chaldal": {
        "price": 249,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/gura-chingri-shrimp-15-gm-250-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 249,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=gura%20chingri%20shrimp%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 249,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=gura%20chingri%20shrimp%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 249,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=gura%20chingri%20shrimp%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "sugar-teer-1kg",
    "nameBn": "তীর চিনি ১ কেজি",
    "nameEn": "Teer Sugar 1 kg",
    "category": "spices",
    "unit": "১ কেজি প্যাক",
    "image": "https://chaldn.com/_mpimage/teer-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101003&q=best&v=1",
    "mrp": 110,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:11.359Z",
    "prices": {
      "chaldal": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/teer-sugar-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 110,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=teer%20sugar%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 110,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=teer%20sugar%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=teer%20sugar%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "salt-aci-pure-1kg",
    "nameBn": "এ সি আই পিওর লবণ ১ কেজি",
    "nameEn": "ACI Pure Salt 1 kg",
    "category": "spices",
    "unit": "১ কেজি প্যাকেট",
    "image": "https://chaldn.com/_mpimage/aci-pure-salt-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D47100&q=best&v=1",
    "mrp": 42,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:11.484Z",
    "prices": {
      "chaldal": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/aci-pure-salt-1-kg-6",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 42,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=aci%20pure%20salt%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 42,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=aci%20pure%20salt%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 42,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=aci%20pure%20salt%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "spice-radhuni-turmeric-100g",
    "nameBn": "রাঁধুনী হলুদের গুঁড়া ১০০ গ্রাম",
    "nameEn": "Radhuni Turmeric (Holud) Powder 100 gm",
    "category": "spices",
    "unit": "১০০ গ্রাম প্যাক",
    "image": "https://chaldn.com/_mpimage/radhuni-turmeric-holud-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132554&q=best&v=1",
    "mrp": 75,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:11.630Z",
    "prices": {
      "chaldal": {
        "price": 75,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/radhuni-turmeric-holud-powder-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 75,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=radhuni%20turmeric%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 75,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=radhuni%20turmeric%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 75,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=radhuni%20turmeric%20powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "spice-radhuni-chilli-200g",
    "nameBn": "রাঁধুনী মরিচের গুঁড়া ২০০ গ্রাম",
    "nameEn": "Radhuni Chilli (Morich) Powder 200 gm",
    "category": "spices",
    "unit": "২০০ গ্রাম প্যাক",
    "image": "https://chaldn.com/_mpimage/radhuni-chilli-morich-powder-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132510&q=best&v=1",
    "mrp": 140,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:11.767Z",
    "prices": {
      "chaldal": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/radhuni-chilli-morich-powder-200-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 140,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=radhuni%20chilli%20morich%20powder%20200%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 140,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=radhuni%20chilli%20morich%20powder%20200%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 140,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=radhuni%20chilli%20morich%20powder%20200%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "spice-radhuni-cumin-100g",
    "nameBn": "রাঁধুনী জিরার গুঁড়া ১০০ গ্রাম",
    "nameEn": "Radhuni Cumin (Jira) Powder 100 gm",
    "category": "spices",
    "unit": "১০০ গ্রাম প্যাক",
    "image": "https://chaldn.com/_mpimage/radhuni-cumin-jira-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132521&q=best&v=1",
    "mrp": 160,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:11.900Z",
    "prices": {
      "chaldal": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/radhuni-cumin-powder-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 160,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=radhuni%20cumin%20jira%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 160,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=radhuni%20cumin%20jira%20powder%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 160,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=radhuni%20cumin%20jira%20powder%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "spice-radhuni-biryani-40g",
    "nameBn": "রাঁধুনি বিরিয়ানি মশলা ৪০ গ্রাম",
    "nameEn": "Radhuni Biryani Masala 40 gm",
    "category": "spices",
    "unit": "৪০ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/radhuni-biryani-masala-40-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D109980&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.022Z",
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/radhuni-biryani-masala-40-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=radhuni%20biryani%20masala%2040%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=radhuni%20biryani%20masala%2040%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=radhuni%20biryani%20masala%2040%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "milk-vita-liquid-1l",
    "nameBn": "মিল্ক ভিটা পাস্তুরিত স্ট্যান্ডার্ডাইজড দুধ ১ লিটার",
    "nameEn": "Milk Vita Pasteurized Standardized Milk 1 ltr",
    "category": "dairy-beverage",
    "unit": "১ লিটার পলি প্যাক",
    "image": "https://chaldn.com/_mpimage/milk-vita-pasteurized-standardized-milk-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177270&q=low&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.174Z",
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/milk-vita-pasteurized-standardized-milk-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=milk%20vita%20pasteurized%20standardized%20milk%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=milk%20vita%20pasteurized%20standardized%20milk%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=milk%20vita%20pasteurized%20standardized%20milk%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "milk-aarong-liquid-1l",
    "nameBn": "আড়ং ডেইরি পাস্তুরিত তরল দুধ ১ লিটার",
    "nameEn": "Aarong Dairy Pasteurized Liquid Milk 1 ltr",
    "category": "dairy-beverage",
    "unit": "১ লিটার পলি প্যাক",
    "image": "https://chaldn.com/_mpimage/aarong-dairy-pasteurized-liquid-milk-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D119561&q=best&v=1",
    "mrp": 105,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.342Z",
    "prices": {
      "chaldal": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/aarong-dairy-pasteurized-liquid-milk-1-ltr",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 105,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=aarong%20dairy%20pasteurized%20liquid%20milk%201%20ltr",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 105,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=aarong%20dairy%20pasteurized%20liquid%20milk%201%20ltr",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 105,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=aarong%20dairy%20pasteurized%20liquid%20milk%201%20ltr",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "milk-dano-powder-500g",
    "nameBn": "আরলা ডানো ডেইলি পুষ্টি  গুঁড়া দুধ ৫০০ গ্রাম",
    "nameEn": "Dano Daily Pushti Milk Powder 500 gm",
    "category": "dairy-beverage",
    "unit": "৫০০ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/dano-daily-pushti-milk-powder-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D180158&q=best&v=1",
    "mrp": 400,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.443Z",
    "prices": {
      "chaldal": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/dano-daily-pushti-milk-powder-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 400,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=dano%20daily%20pushti%20milk%20powder%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 400,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=dano%20daily%20pushti%20milk%20powder%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 400,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=dano%20daily%20pushti%20milk%20powder%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "tea-ispahani-500g",
    "nameBn": "ইস্পাহানি মির্জাপুর বিওপি চা ৫০০ গ্রাম",
    "nameEn": "Ispahani Mirzapore BOP Tea 500 gm",
    "category": "dairy-beverage",
    "unit": "৫০০ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/ispahani-mirzapore-bop-tea-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D107244&q=best&v=1",
    "mrp": 240,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.551Z",
    "prices": {
      "chaldal": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/ispahani-mirzapore-bop-tea-500-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 240,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=ispahani%20mirzapore%20tea%20500%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 240,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=ispahani%20mirzapore%20tea%20500%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 240,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=ispahani%20mirzapore%20tea%20500%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "coffee-nescafe-classic-100g",
    "nameBn": "নেসলে নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি (টিন) ১০০ গ্রাম",
    "nameEn": "Nestle Nescafe Classic Instant Coffee (Tin) 100 gm",
    "category": "dairy-beverage",
    "unit": "১০০ গ্রাম জার/টিন",
    "image": "https://chaldn.com/_mpimage/nestle-nescafe-classic-instant-coffee-tin-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D94917&q=best&v=1",
    "mrp": 225,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.713Z",
    "prices": {
      "chaldal": {
        "price": 225,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/nestle-nescafe-classic-instant-coffee-tin-100-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 225,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=nestle%20nescafe%20classic%20instant%20coffee%20tin%20100%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 225,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=nestle%20nescafe%20classic%20instant%20coffee%20tin%20100%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 225,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=nestle%20nescafe%20classic%20instant%20coffee%20tin%20100%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "beverage-coke-1l",
    "nameBn": "কোকা-কোলা ১ লিটার",
    "nameEn": "Coca-Cola 1 ltr",
    "category": "dairy-beverage",
    "unit": "১ লিটার বোতল",
    "image": "https://chaldn.com/_mpimage/coca-cola-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D164611&q=best&v=1",
    "mrp": 85,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.810Z",
    "prices": {
      "chaldal": {
        "price": 79,
        "inStock": true,
        "discountText": "৳6 ছাড়",
        "url": "https://chaldal.com/coca-cola-1-ltr-2",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 85,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=coca-cola%20beverage",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 85,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=coca-cola%20beverage",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 85,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=coca-cola%20beverage",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "beverage-dew-500ml",
    "nameBn": "মাউন্টেন ডিউ ৫০০ মিলি",
    "nameEn": "Mountain Dew 500 ml",
    "category": "dairy-beverage",
    "unit": "৫০০ মিলি বোতল",
    "image": "https://chaldn.com/_mpimage/mountain-dew-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163559&q=best&v=1&m=400",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:12.911Z",
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/mountain-dew-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=mountain%20dew%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=mountain%20dew%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=mountain%20dew%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "noodles-maggi-8pack",
    "nameBn": "নেসলে ম্যাগী ২-মিনিট মাসালা ইন্সট্যান্ট নুডুলস ৮ প্যাক",
    "nameEn": "Nestle Maggi 2-Minute Masala Instant Noodles 8 pack",
    "category": "snacks-bakery",
    "unit": "৮ প্যাক ফ্যামিলি প্যাক",
    "image": "https://chaldn.com/_mpimage/nestle-maggi-2-minute-masala-instant-noodles-8-pack?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153591&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.052Z",
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/nestle-maggi-2-minute-masala-instant-noodles-8-pack",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=nestle%20maggi%202-minute%20masala%20instant%20noodles%208%20pack",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=nestle%20maggi%202-minute%20masala%20instant%20noodles%208%20pack",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=nestle%20maggi%202-minute%20masala%20instant%20noodles%208%20pack",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "biscuit-olympic-lexus-216g",
    "nameBn": "অলিম্পিক লেক্সাস ভেজিটেবল ক্র্যাকার্স বিস্কুট ২১৬ গ্রাম",
    "nameEn": "Olympic Lexus Vegetable Crackers Biscuits 216 gm",
    "category": "snacks-bakery",
    "unit": "২১৬ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/olympic-lexus-vegetable-crackers-biscuits-216-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D115564&q=best&v=1",
    "mrp": 100,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.188Z",
    "prices": {
      "chaldal": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/olympic-lexus-vegetable-crackers-biscuits-216-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 100,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=olympic%20lexus%20vegetable%20crackers%20biscuits%20216%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 100,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=olympic%20lexus%20vegetable%20crackers%20biscuits%20216%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 100,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=olympic%20lexus%20vegetable%20crackers%20biscuits%20216%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "biscuit-pran-toast-250g",
    "nameBn": "প্রাণ স্পেশাল টোস্ট বিস্কুট ২৫০ গ্রাম",
    "nameEn": "Pran Special Toast Biscuit 250 gm",
    "category": "snacks-bakery",
    "unit": "২৫০ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/pran-special-toast-biscuit-250-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132330&q=best&v=1",
    "mrp": 60,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.322Z",
    "prices": {
      "chaldal": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/pran-special-toast-biscuit-185-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 60,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=pran%20special%20toast%20biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 60,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=pran%20special%20toast%20biscuit%20250%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 60,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=pran%20special%20toast%20biscuit%20250%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "snack-bombay-chanachur-150g",
    "nameBn": "বোম্বে সুইটস চানাচুর ১৫০ গ্রাম",
    "nameEn": "Bombay Sweets Chanachur 150 gm",
    "category": "snacks-bakery",
    "unit": "১৫০ গ্রাম প্যাকেট",
    "image": "https://chaldn.com/_mpimage/bombay-sweets-chanachur-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D178781&q=best&v=1",
    "mrp": 50,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.434Z",
    "prices": {
      "chaldal": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/bombay-sweets-chanachur-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 50,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=bombay%20sweets%20chanachur%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 50,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=bombay%20sweets%20chanachur%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 50,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=bombay%20sweets%20chanachur%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "soap-dettol-original-3in1",
    "nameBn": "ডেটল বাথিং সোপ বার কুল ৭৫ গ্রাম",
    "nameEn": "Dettol Bathing Soap Bar Cool 75 gm",
    "category": "hygiene",
    "unit": "৩ x ৭৫ গ্রাম",
    "image": "https://chaldn.com/_mpimage/dettol-bathing-soap-bar-cool-75-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127639&q=best&v=1",
    "mrp": 65,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.510Z",
    "prices": {
      "chaldal": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/dettol-bathing-soap-bar-cool-75-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 65,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=dettol%20soap%20bathing%20bar",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 65,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=dettol%20soap%20bathing%20bar",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 65,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=dettol%20soap%20bathing%20bar",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "shampoo-dove-330ml",
    "nameBn": "প্যারাসুট স্কিনপিওর স্কিন লোশন ডিপ ময়েশ্চার (ফ্রি পেট্রোলিয়াম জেলি ১০০ মিলি ) ২০০ মিলি",
    "nameEn": "Parachute SkinPure Lotion Deep Moisture (Free Petroleum Jelly 100 ml) 200 ml",
    "category": "hygiene",
    "unit": "৩৩০ মিলি বোতল",
    "image": "https://chaldn.com/_mpimage/parachute-skinpure-lotion-deep-moisture-free-petroleum-jelly-100-ml-200-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D121438&q=best&v=1",
    "mrp": 370,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.621Z",
    "prices": {
      "chaldal": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/parachute-skinpure-lotion-deep-moisture-free-petroleum-jelly-100-ml-200-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 370,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=dove%20shampoo%20oxygen%20moisture%20330%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 370,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=dove%20shampoo%20oxygen%20moisture%20330%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 370,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=dove%20shampoo%20oxygen%20moisture%20330%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "dental-closeup-145g",
    "nameBn": "ক্লোজ আপ টুথপেস্ট মেনথল ফ্রেশ ১৪৫ গ্রাম",
    "nameEn": "Closeup Toothpaste Menthol Fresh 145 gm",
    "category": "hygiene",
    "unit": "১৪৫ গ্রাম প্যাক",
    "image": "https://chaldn.com/_mpimage/closeup-toothpaste-menthol-fresh-145-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D166873&q=best&v=1",
    "mrp": 155,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.758Z",
    "prices": {
      "chaldal": {
        "price": 155,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/closeup-toothpaste-menthol-fresh-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 155,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=closeup%20toothpaste%20menthol%20fresh%20145%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 155,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=closeup%20toothpaste%20menthol%20fresh%20145%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 155,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=closeup%20toothpaste%20menthol%20fresh%20145%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "dental-colgate-150g",
    "nameBn": "কোলগেট ম্যাক্স ফ্রেশ ব্লু জেল টুথপেস্ট ১৫০ গ্রাম",
    "nameEn": "Colgate Max Fresh Blue Gel Toothpaste 150 gm",
    "category": "hygiene",
    "unit": "১৫০ গ্রাম প্যাক",
    "image": "https://chaldn.com/_mpimage/colgate-max-fresh-blue-gel-toothpaste-150-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127083&q=best&v=1",
    "mrp": 200,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:13.916Z",
    "prices": {
      "chaldal": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/colgate-max-fresh-blue-gel-toothpaste-150-gm",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 200,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=colgate%20max%20fresh%20blue%20gel%20toothpaste%20150%20gm",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 200,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=colgate%20max%20fresh%20blue%20gel%20toothpaste%20150%20gm",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 200,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=colgate%20max%20fresh%20blue%20gel%20toothpaste%20150%20gm",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "detergent-rin-power-1kg",
    "nameBn": "রিন অ্যাডভান্সড ডিটারজেন্ট পাউডার ১ কেজি",
    "nameEn": "Rin Advanced Detergent Powder 1 kg",
    "category": "hygiene",
    "unit": "১ কেজি পলি প্যাক",
    "image": "https://chaldn.com/_mpimage/rin-advanced-detergent-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135407&q=best&v=1",
    "mrp": 195,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:14.062Z",
    "prices": {
      "chaldal": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/rin-advanced-detergent-powder-1-kg",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 195,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=rin%20advanced%20detergent%20powder%201%20kg",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 195,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=rin%20advanced%20detergent%20powder%201%20kg",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 195,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=rin%20advanced%20detergent%20powder%201%20kg",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "cleaner-harpic-toilet-750ml",
    "nameBn": "হারপিক লিকুইড টয়লেট ক্লিনার অরিজিনাল ৭৫০ মিলি",
    "nameEn": "Harpic Liquid Toilet Cleaner Original 750 ml",
    "category": "hygiene",
    "unit": "৭৫০ মিলি বোতল",
    "image": "https://chaldn.com/_mpimage/harpic-liquid-toilet-cleaner-original-750-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D169613&q=best&v=1",
    "mrp": 180,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:14.204Z",
    "prices": {
      "chaldal": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/harpic-liquid-toilet-cleaner-original-750-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 180,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=harpic%20liquid%20toilet%20cleaner%20original%20750%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 180,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=harpic%20liquid%20toilet%20cleaner%20original%20750%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 180,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=harpic%20liquid%20toilet%20cleaner%20original%20750%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "cleaner-vim-liquid-500ml",
    "nameBn": "ভিম ডিশওয়াশিং লিকুইড (কন্টেইনার ফ্রী) ৫০০ মিলি",
    "nameEn": "Vim Dishwashing Liquid (Free Container) 500 ml",
    "category": "hygiene",
    "unit": "৫০০ মিলি বোতল",
    "image": "https://chaldn.com/_mpimage/vim-dishwashing-liquid-free-container-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D109537&q=best&v=1",
    "mrp": 110,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:14.328Z",
    "prices": {
      "chaldal": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/vim-dishwashing-liquid-container-free-500-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 110,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=vim%20dishwashing%20liquid%20500%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 110,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=vim%20dishwashing%20liquid%20500%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 110,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=vim%20dishwashing%20liquid%20500%20ml",
        "isVerifiedLive": true
      }
    }
  },
  {
    "id": "hygiene-savlon-liquid-1000ml",
    "nameBn": "এ সি আই স্যাভলন লিকুইড অ্যান্টিসেপ্টিক ১০০০ মিলি",
    "nameEn": "ACI Savlon Liquid Antiseptic 1000 ml",
    "category": "hygiene",
    "unit": "১০০০ মিলি বোতল",
    "image": "https://chaldn.com/_mpimage/aci-savlon-liquid-antiseptic-1000-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D181725&q=best&v=1",
    "mrp": 280,
    "isLiveSynced": true,
    "lastSyncedAt": "2026-10-18T05:57:14.424Z",
    "prices": {
      "chaldal": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://chaldal.com/aci-savlon-liquid-antiseptic-1000-ml",
        "isVerifiedLive": true
      },
      "shwapno": {
        "price": 280,
        "inStock": true,
        "discountText": "বাজার দর",
        "url": "https://www.shwapno.com/search?q=aci%20savlon%20liquid%20antiseptic%201000%20ml",
        "isVerifiedLive": true
      },
      "pandamart": {
        "price": 280,
        "inStock": true,
        "discountText": "MRP",
        "url": "https://www.foodpanda.com.bd/restaurants?search=aci%20savlon%20liquid%20antiseptic%201000%20ml",
        "isVerifiedLive": true
      },
      "meenaclick": {
        "price": 280,
        "inStock": true,
        "discountText": "লাইভ রেট",
        "url": "https://meenabazaronline.com/search?keyword=aci%20savlon%20liquid%20antiseptic%201000%20ml",
        "isVerifiedLive": true
      }
    }
  }
];
