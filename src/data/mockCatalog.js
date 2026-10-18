// Comprehensive Realistic Bangladeshi Grocery Dataset
// Mapped with authentic, actual e-commerce product images from Chaldal CDN

export const STORES = {
  chaldal: {
    id: 'chaldal',
    name: 'Chaldal',
    nameBn: 'চালডাল',
    color: '#FF6A00',
    bgColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    lightBg: 'bg-orange-50',
    borderColor: 'border-orange-200',
    baseDeliveryFee: 49,
    freeDeliveryThreshold: 1000,
    deliveryTime: '১-২ ঘণ্টা',
    deliveryTimeEn: '1-2 hrs',
    rating: 4.6,
    logoText: 'Chaldal',
    accentHex: '#f97316'
  },
  shwapno: {
    id: 'shwapno',
    name: 'Shwapno',
    nameBn: 'স্বপ্ন',
    color: '#E11D48',
    bgColor: 'bg-rose-600',
    textColor: 'text-rose-600',
    lightBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    baseDeliveryFee: 50,
    freeDeliveryThreshold: 1500,
    deliveryTime: 'সেম ডে (আজই)',
    deliveryTimeEn: 'Same Day',
    rating: 4.5,
    logoText: 'Shwapno',
    accentHex: '#e11d48'
  },
  pandamart: {
    id: 'pandamart',
    name: 'Pandamart',
    nameBn: 'পান্ডামার্ট',
    color: '#D81B60',
    bgColor: 'bg-pink-600',
    textColor: 'text-pink-600',
    lightBg: 'bg-pink-50',
    borderColor: 'border-pink-200',
    baseDeliveryFee: 39,
    freeDeliveryThreshold: 800,
    deliveryTime: '২৫-৩৫ মিনিট',
    deliveryTimeEn: '25-35 mins',
    rating: 4.4,
    logoText: 'pandamart',
    accentHex: '#db2777'
  },
  meenaclick: {
    id: 'meenaclick',
    name: 'Meena Click',
    nameBn: 'মীনা ক্লিক',
    color: '#059669',
    bgColor: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    lightBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    baseDeliveryFee: 45,
    freeDeliveryThreshold: 1200,
    deliveryTime: '২-৩ ঘণ্টা',
    deliveryTimeEn: '2-3 hrs',
    rating: 4.3,
    logoText: 'MeenaClick',
    accentHex: '#059669'
  }
};

export const CATEGORIES = [
  { id: 'all', nameBn: 'সব পণ্য', nameEn: 'All Items', icon: 'Sparkles' },
  { id: 'oil', nameBn: 'ভোজ্য তেল', nameEn: 'Cooking Oil', icon: 'Droplets' },
  { id: 'rice-pulses', nameBn: 'চাল ও ডাল', nameEn: 'Rice & Pulses', icon: 'Wheat' },
  { id: 'vegetables', nameBn: 'পেঁয়াজ ও সবজি', nameEn: 'Veggies & Onion', icon: 'Carrot' },
  { id: 'egg-poultry', nameBn: 'ডিম ও মাংস', nameEn: 'Eggs & Poultry', icon: 'Egg' },
  { id: 'spices', nameBn: 'মশলা ও চিনি', nameEn: 'Spices & Sugar', icon: 'Flame' },
  { id: 'dairy-beverage', nameBn: 'দুধ ও চা', nameEn: 'Tea & Dairy', icon: 'Coffee' },
  { id: 'hygiene', nameBn: 'সাবান ও ক্লিনিং', nameEn: 'Soap & Cleaning', icon: 'ShieldCheck' },
];

export const PRODUCTS = [
  {
    id: 'oil-rupchanda-5l',
    nameBn: 'রূপচাঁদা ফর্টিফাইড সয়াবিন তেল ৫ লিটার',
    nameEn: 'Rupchanda Fortified Soyabean Oil 5 Ltr',
    keywords: ['oil', 'rupchanda', 'soyabean', 'tel', 'sabin', 'রূপচাঁদা', 'সয়াবিন', 'তেল'],
    category: 'oil',
    unit: '৫ লিটার বোতল',
    image: 'https://i.chaldn.com/_mpimage/rupchanda-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182966&q=best&v=1&m=400',
    mrp: 985,
    prices: {
      chaldal: { price: 975, inStock: true, discountText: '৳১০ ছাড়', url: 'https://chaldal.com/search/rupchanda%20soyabean%20oil%205%20ltr' },
      shwapno: { price: 970, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.shwapno.com/search?q=rupchanda+soyabean+oil+5+ltr' },
      pandamart: { price: 980, inStock: true, discountText: '৳৫ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=rupchanda+5l' },
      meenaclick: { price: 975, inStock: true, discountText: '৳১০ ছাড়', url: 'https://www.meenaclick.com/search?query=rupchanda+soyabean+oil+5+ltr' },
    }
  },
  {
    id: 'oil-teer-5l',
    nameBn: 'তীর ফর্টিফাইড সয়াবিন তেল ৫ লিটার',
    nameEn: 'Teer Fortified Soyabean Oil 5 Ltr',
    keywords: ['oil', 'teer', 'soyabean', 'tel', 'তীর', 'সয়াবিন', 'তেল'],
    category: 'oil',
    unit: '৫ লিটার বোতল',
    image: 'https://i.chaldn.com/_mpimage/teer-fortified-soyabean-oil-5-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D136107&q=best&v=1&m=400',
    mrp: 980,
    prices: {
      chaldal: { price: 975, inStock: true, discountText: '৳৫ ছাড়', url: 'https://chaldal.com/search/teer%20soyabean%20oil%205%20ltr' },
      shwapno: { price: 970, inStock: true, discountText: '৳১০ ছাড়', url: 'https://www.shwapno.com/search?q=teer+soyabean+oil+5+ltr' },
      pandamart: { price: 980, inStock: true, discountText: 'MRP', url: 'https://www.foodpanda.com.bd/darkstore/search?q=teer+oil+5l' },
      meenaclick: { price: 975, inStock: false, discountText: 'স্টক শেষ', url: 'https://www.meenaclick.com/search?query=teer+soyabean+oil+5+ltr' },
    }
  },
  {
    id: 'oil-fresh-1l',
    nameBn: 'ফ্রেশ সয়াবিন তেল ১ লিটার',
    nameEn: 'Fresh Soyabean Oil 1 Ltr',
    keywords: ['oil', 'fresh', 'soyabean', '1l', 'ফ্রেশ', 'তেল'],
    category: 'oil',
    unit: '১ লিটার বোতল',
    image: 'https://i.chaldn.com/_mpimage/fresh-fortified-soyabean-oil-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153828&q=best&v=1&m=400',
    mrp: 205,
    prices: {
      chaldal: { price: 199, inStock: true, discountText: '৳৬ ছাড়', url: 'https://chaldal.com/search/fresh%20soyabean%20oil%201%20ltr' },
      shwapno: { price: 198, inStock: true, discountText: '৳৭ ছাড়', url: 'https://www.shwapno.com/search?q=fresh+soyabean+oil+1+ltr' },
      pandamart: { price: 202, inStock: true, discountText: '৳৩ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=fresh+oil+1l' },
      meenaclick: { price: 199, inStock: true, discountText: '৳৬ ছাড়', url: 'https://www.meenaclick.com/search?query=fresh+soyabean+oil+1+ltr' },
    }
  },
  {
    id: 'rice-miniket-5kg',
    nameBn: 'মিনিকেট চাল প্রিমিয়াম ৫ কেজি',
    nameEn: 'Premium Miniket Rice 5 Kg',
    keywords: ['rice', 'chal', 'miniket', '5kg', 'মিনিকেট', 'চাল'],
    category: 'rice-pulses',
    unit: '৫ কেজি ব্যাগ',
    image: 'https://i.chaldn.com/_mpimage/miniket-rice-premium-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48081&q=best&v=1&m=400',
    mrp: 460,
    prices: {
      chaldal: { price: 439, inStock: true, discountText: '৳২১ ছাড়', url: 'https://chaldal.com/search/miniket%20rice%205%20kg' },
      shwapno: { price: 435, inStock: true, discountText: '৳২৫ ছাড়', url: 'https://www.shwapno.com/search?q=miniket+rice+5+kg' },
      pandamart: { price: 445, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=miniket+rice+5kg' },
      meenaclick: { price: 438, inStock: true, discountText: '৳২২ ছাড়', url: 'https://www.meenaclick.com/search?query=miniket+rice+5+kg' },
    }
  },
  {
    id: 'rice-nazirshail-5kg',
    nameBn: 'নাজিরশাইল চাল স্পেশাল ৫ কেজি',
    nameEn: 'Special Nazirshail Rice 5 Kg',
    keywords: ['rice', 'chal', 'nazirshail', '5kg', 'নাজিরশাইল', 'চাল'],
    category: 'rice-pulses',
    unit: '৫ কেজি ব্যাগ',
    image: 'https://i.chaldn.com/_mpimage/nazirshail-rice-premium-half-boiled-50-gm-5-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D48083&q=best&v=1&m=400',
    mrp: 470,
    prices: {
      chaldal: { price: 449, inStock: true, discountText: '৳২১ ছাড়', url: 'https://chaldal.com/search/nazirshail%20rice%205%20kg' },
      shwapno: { price: 445, inStock: true, discountText: '৳২৫ ছাড়', url: 'https://www.shwapno.com/search?q=nazirshail+rice+5+kg' },
      pandamart: { price: 455, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=nazirshail+rice+5kg' },
      meenaclick: { price: 448, inStock: true, discountText: '৳২২ ছাড়', url: 'https://www.meenaclick.com/search?query=nazirshail+rice+5+kg' },
    }
  },
  {
    id: 'daal-mosur-desi-1kg',
    nameBn: 'দেশি মসুর ডাল ১ কেজি',
    nameEn: 'Deshi Red Lentils (Mosur Daal) 1 Kg',
    keywords: ['daal', 'dal', 'mosur', 'lentils', 'মসুর', 'ডাল'],
    category: 'rice-pulses',
    unit: '১ কেজি প্যাক',
    image: 'https://i.chaldn.com/_mpimage/moshur-dal-deshi-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182384&q=best&v=1&m=400',
    mrp: 179,
    prices: {
      chaldal: { price: 159, inStock: true, discountText: '৳২০ ছাড়', url: 'https://chaldal.com/search/deshi%20moshur%20dal%201%20kg' },
      shwapno: { price: 155, inStock: true, discountText: '৳২৪ ছাড়', url: 'https://www.shwapno.com/search?q=moshur+dal+1+kg' },
      pandamart: { price: 165, inStock: true, discountText: '৳১৪ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=moshur+daal+1kg' },
      meenaclick: { price: 158, inStock: true, discountText: '৳২১ ছাড়', url: 'https://www.meenaclick.com/search?query=deshi+moshur+dal+1+kg' },
    }
  },
  {
    id: 'veg-onion-desi-1kg',
    nameBn: 'দেশি পেঁয়াজ ১ কেজি',
    nameEn: 'Deshi Onion (Peyaj) 1 Kg',
    keywords: ['onion', 'peyaj', 'piyaj', 'পেঁয়াজ', 'পেঁয়াজ'],
    category: 'vegetables',
    unit: '১ কেজি',
    image: 'https://i.chaldn.com/_mpimage/deshi-peyaj-local-onion-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D52358&q=best&v=1&m=400',
    mrp: 50,
    prices: {
      chaldal: { price: 39, inStock: true, discountText: '৳১১ ছাড়', url: 'https://chaldal.com/search/deshi%20onion%201%20kg' },
      shwapno: { price: 42, inStock: true, discountText: '৳৮ ছাড়', url: 'https://www.shwapno.com/search?q=deshi+onion+1+kg' },
      pandamart: { price: 45, inStock: true, discountText: '৳৫ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=local+onion+1kg' },
      meenaclick: { price: 40, inStock: true, discountText: '৳১০ ছাড়', url: 'https://www.meenaclick.com/search?query=deshi+onion+1+kg' },
    }
  },
  {
    id: 'veg-potato-gol-1kg',
    nameBn: 'গোল সাদা আলু ১ কেজি',
    nameEn: 'White Potato (Aloo) 1 Kg',
    keywords: ['potato', 'aloo', 'alu', 'আলু'],
    category: 'vegetables',
    unit: '১ কেজি',
    image: 'https://i.chaldn.com/_mpimage/potato-regular-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D164304&q=best&v=1&m=400',
    mrp: 35,
    prices: {
      chaldal: { price: 29, inStock: true, discountText: '৳৬ ছাড়', url: 'https://chaldal.com/search/potato%201%20kg' },
      shwapno: { price: 30, inStock: true, discountText: '৳৫ ছাড়', url: 'https://www.shwapno.com/search?q=potato+1+kg' },
      pandamart: { price: 32, inStock: true, discountText: '৳৩ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=potato+1kg' },
      meenaclick: { price: 30, inStock: true, discountText: '৳৫ ছাড়', url: 'https://www.meenaclick.com/search?query=potato+1+kg' },
    }
  },
  {
    id: 'veg-garlic-china-1kg',
    nameBn: 'রসুন চায়না ১ কেজি',
    nameEn: 'Garlic China (Roshun) 1 Kg',
    keywords: ['garlic', 'roshun', 'rosun', 'রসুন'],
    category: 'vegetables',
    unit: '১ কেজি',
    image: 'https://i.chaldn.com/_mpimage/roshun-garlic-imported-25-gm-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D89993&q=best&v=1&m=400',
    mrp: 240,
    prices: {
      chaldal: { price: 220, inStock: true, discountText: '৳২০ ছাড়', url: 'https://chaldal.com/search/garlic%20imported%20roshun' },
      shwapno: { price: 215, inStock: true, discountText: '৳২৫ ছাড়', url: 'https://www.shwapno.com/search?q=garlic+china+1+kg' },
      pandamart: { price: 230, inStock: true, discountText: '৳১০ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=garlic+china' },
      meenaclick: { price: 225, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.meenaclick.com/search?query=garlic+china+1+kg' },
    }
  },
  {
    id: 'egg-red-12pcs',
    nameBn: 'ফার্মের লাল ডিম ১ ডজন (১২টি)',
    nameEn: 'Farm Red Eggs 1 Dozen (12 Pcs)',
    keywords: ['egg', 'eggs', 'dim', 'deem', 'ডিম', 'হালি'],
    category: 'egg-poultry',
    unit: '১ ডজন (১২টি)',
    image: 'https://i.chaldn.com/_mpimage/chicken-eggs-layer-12-pcs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D182905&q=best&v=1&m=400',
    mrp: 160,
    prices: {
      chaldal: { price: 145, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://chaldal.com/search/layer%20eggs%2012%20pcs' },
      shwapno: { price: 142, inStock: true, discountText: '৳১৮ ছাড়', url: 'https://www.shwapno.com/search?q=red+eggs+12+pcs' },
      pandamart: { price: 148, inStock: true, discountText: '৳১২ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=eggs+12pcs' },
      meenaclick: { price: 145, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.meenaclick.com/search?query=farm+eggs+12+pcs' },
    }
  },
  {
    id: 'poultry-broiler-1kg',
    nameBn: 'ব্রয়লার মুরগি (ড্রসেড) ১ কেজি',
    nameEn: 'Broiler Chicken (Dressed) 1 Kg',
    keywords: ['chicken', 'murgi', 'broiler', 'মুরগি', 'গোশত', 'মাংস'],
    category: 'egg-poultry',
    unit: '১ কেজি নেট',
    image: 'https://i.chaldn.com/_mpimage/broiler-chicken-skin-off-50-gm-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D163139&q=best&v=1&m=400',
    mrp: 220,
    prices: {
      chaldal: { price: 195, inStock: true, discountText: '৳২৫ ছাড়', url: 'https://chaldal.com/search/broiler%20chicken%20skin%20off' },
      shwapno: { price: 190, inStock: true, discountText: '৳৩০ ছাড়', url: 'https://www.shwapno.com/search?q=broiler+chicken+1+kg' },
      pandamart: { price: 205, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=broiler+chicken' },
      meenaclick: { price: 198, inStock: true, discountText: '৳২২ ছাড়', url: 'https://www.meenaclick.com/search?query=broiler+chicken+1+kg' },
    }
  },
  {
    id: 'sugar-teer-1kg',
    nameBn: 'তীর রিফাইন সাদা চিনি ১ কেজি',
    nameEn: 'Teer Refined White Sugar 1 Kg',
    keywords: ['sugar', 'chini', 'teer', 'চিনি', 'তীর'],
    category: 'spices',
    unit: '১ কেজি প্যাক',
    image: 'https://i.chaldn.com/_mpimage/teer-sugar-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101003&q=best&v=1&m=400',
    mrp: 120,
    prices: {
      chaldal: { price: 110, inStock: true, discountText: '৳১০ ছাড়', url: 'https://chaldal.com/search/teer%20sugar%201%20kg' },
      shwapno: { price: 110, inStock: true, discountText: '৳১০ ছাড়', url: 'https://www.shwapno.com/search?q=teer+sugar+1+kg' },
      pandamart: { price: 115, inStock: true, discountText: '৳৫ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=teer+sugar+1kg' },
      meenaclick: { price: 112, inStock: true, discountText: '৳৮ ছাড়', url: 'https://www.meenaclick.com/search?query=teer+white+sugar+1+kg' },
    }
  },
  {
    id: 'spice-radhuni-turmeric-200g',
    nameBn: 'রাঁধুনী হলুদ গুঁড়া ১০০ গ্রাম',
    nameEn: 'Radhuni Turmeric Powder 100 gm',
    keywords: ['spice', 'holud', 'turmeric', 'radhuni', 'হলুদ', 'রাঁধুনী'],
    category: 'spices',
    unit: '১০০ গ্রাম প্যাক',
    image: 'https://i.chaldn.com/_mpimage/radhuni-turmeric-powder-100-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D132554&q=best&v=1&m=400',
    mrp: 80,
    prices: {
      chaldal: { price: 75, inStock: true, discountText: '৳৫ ছাড়', url: 'https://chaldal.com/search/radhuni%20turmeric%20powder' },
      shwapno: { price: 74, inStock: true, discountText: '৳৬ ছাড়', url: 'https://www.shwapno.com/search?q=radhuni+turmeric+powder+200+gm' },
      pandamart: { price: 78, inStock: true, discountText: '৳২ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=radhuni+turmeric' },
      meenaclick: { price: 75, inStock: true, discountText: '৳৫ ছাড়', url: 'https://www.meenaclick.com/search?query=radhuni+turmeric+powder+200+gm' },
    }
  },
  {
    id: 'tea-ispahani-500g',
    nameBn: 'ইস্পাহানি মির্জাপুর সেরা চা ৫০০ গ্রাম',
    nameEn: 'Ispahani Mirzapore Best Blend Tea 500 gm',
    keywords: ['tea', 'cha', 'ispahani', 'mirzapore', 'চা', 'ইস্পাহানি'],
    category: 'dairy-beverage',
    unit: '৫০০ গ্রাম প্যাকেট',
    image: 'https://i.chaldn.com/_mpimage/ispahani-mirzapore-pd-tea-500-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D107245&q=best&v=1&m=400',
    mrp: 275,
    prices: {
      chaldal: { price: 260, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://chaldal.com/search/ispahani%20mirzapore%20tea%20500%20gm' },
      shwapno: { price: 255, inStock: true, discountText: '৳২০ ছাড়', url: 'https://www.shwapno.com/search?q=ispahani+tea+500+gm' },
      pandamart: { price: 268, inStock: true, discountText: '৳৭ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=ispahani+tea+500g' },
      meenaclick: { price: 260, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.meenaclick.com/search?query=ispahani+tea+500+gm' },
    }
  },
  {
    id: 'milk-vita-liquid-1l',
    nameBn: 'মিল্ক ভিটা পাস্তুরিত তরল দুধ ১ লিটার',
    nameEn: 'Milk Vita Pasteurized Liquid Milk 1 Ltr',
    keywords: ['milk', 'dudh', 'liquid milk', 'milkvita', 'দুধ', 'মিল্ক ভিটা'],
    category: 'dairy-beverage',
    unit: '১ লিটার পলি প্যাক',
    image: 'https://i.chaldn.com/_mpimage/milk-vita-pasteurized-standardized-milk-1-ltr?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D177270&q=best&v=1&m=400',
    mrp: 100,
    prices: {
      chaldal: { price: 100, inStock: true, discountText: 'MRP', url: 'https://chaldal.com/search/milk%20vita%20liquid%20milk%201%20ltr' },
      shwapno: { price: 100, inStock: true, discountText: 'MRP', url: 'https://www.shwapno.com/search?q=milk+vita+liquid+milk+1+ltr' },
      pandamart: { price: 100, inStock: true, discountText: 'MRP', url: 'https://www.foodpanda.com.bd/darkstore/search?q=milkvita+milk+1l' },
      meenaclick: { price: 100, inStock: true, discountText: 'MRP', url: 'https://www.meenaclick.com/search?query=milk+vita+liquid+milk+1+ltr' },
    }
  },
  {
    id: 'soap-dettol-original-3in1',
    nameBn: 'ডেটোল অ্যান্টিব্যাকটেরিয়াল সাবান (৩টির প্যাক)',
    nameEn: 'Dettol Original Soap (3-in-1 Saver Pack)',
    keywords: ['soap', 'shaban', 'dettol', 'sabun', 'ডেটোল', 'সাবান'],
    category: 'hygiene',
    unit: '৩ x ৭৫ গ্রাম',
    image: 'https://i.chaldn.com/_mpimage/dettol-soap-fresh-bathing-bar-125-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D181251&q=best&v=1&m=400',
    mrp: 205,
    prices: {
      chaldal: { price: 190, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://chaldal.com/search/dettol%20soap%20bathing%20bar' },
      shwapno: { price: 185, inStock: true, discountText: '৳২০ ছাড়', url: 'https://www.shwapno.com/search?q=dettol+soap+pack' },
      pandamart: { price: 195, inStock: true, discountText: '৳১০ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=dettol+soap' },
      meenaclick: { price: 190, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.meenaclick.com/search?query=dettol+soap+pack' },
    }
  },
  {
    id: 'detergent-rin-power-1kg',
    nameBn: 'রিন অ্যাডভান্সড ডিটারজেন্ট পাউডার ১ কেজি',
    nameEn: 'Rin Advanced Detergent Powder 1 Kg',
    keywords: ['detergent', 'rin', 'powder', 'washing', 'ডিটারজেন্ট', 'রিন'],
    category: 'hygiene',
    unit: '১ কেজি পলি প্যাক',
    image: 'https://i.chaldn.com/_mpimage/rin-advanced-detergent-powder-1-kg?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D135407&q=best&v=1&m=400',
    mrp: 210,
    prices: {
      chaldal: { price: 195, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://chaldal.com/search/rin%20advanced%20detergent%20powder%201%20kg' },
      shwapno: { price: 190, inStock: true, discountText: '৳২০ ছাড়', url: 'https://www.shwapno.com/search?q=rin+detergent+powder+1+kg' },
      pandamart: { price: 200, inStock: true, discountText: '৳১০ ছাড়', url: 'https://www.foodpanda.com.bd/darkstore/search?q=rin+detergent+1kg' },
      meenaclick: { price: 195, inStock: true, discountText: '৳১৫ ছাড়', url: 'https://www.meenaclick.com/search?query=rin+detergent+powder+1+kg' },
    }
  }
];
