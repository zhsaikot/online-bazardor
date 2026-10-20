// Daily Wholesale & TCB reference rates for Bangladesh
export const DAILY_MARKET_INDEX = [
  {
    id: 'dm-onion',
    nameBn: 'পেঁয়াজ (দেশি)',
    nameEn: 'Onion (Deshi)',
    unit: '১ কেজি',
    tcbRate: '১০০ - ১১০',
    karwanBazarRate: '১০৫',
    retailRateAvg: '১১৫ - ১২৫',
    trend: 'down',
    trendText: '৳৫ কমেছে',
    alertType: 'success'
  },
  {
    id: 'dm-potato',
    nameBn: 'আলু (সাদা/গোল)',
    nameEn: 'Potato (White)',
    unit: '১ কেজি',
    tcbRate: '৫০ - ৫৫',
    karwanBazarRate: '৫২',
    retailRateAvg: '৫৫ - ৬৫',
    trend: 'stable',
    trendText: 'অপরিবর্তিত',
    alertType: 'neutral'
  },
  {
    id: 'dm-egg',
    nameBn: 'ফার্মের লাল ডিম',
    nameEn: 'Farm Red Eggs',
    unit: '১ ডজন (১২টি)',
    tcbRate: '১৪৫ - ১৫০',
    karwanBazarRate: '১৪৮',
    retailRateAvg: '১৫৫ - ১৬৫',
    trend: 'up',
    trendText: '৳১০ বেড়েছে',
    alertType: 'warning'
  },
  {
    id: 'dm-chicken-broiler',
    nameBn: 'ব্রয়লার মুরগি',
    nameEn: 'Broiler Chicken',
    unit: '১ কেজি',
    tcbRate: '১৭৫ - ১৮৫',
    karwanBazarRate: '১৮০',
    retailRateAvg: '১৯০ - ২১০',
    trend: 'down',
    trendText: '৳১০ কমেছে',
    alertType: 'success'
  },
  {
    id: 'dm-soyabean-oil',
    nameBn: 'খোলা সয়াবিন তেল',
    nameEn: 'Loose Soyabean Oil',
    unit: '১ লিটার',
    tcbRate: '১৫৫ - ১৬০',
    karwanBazarRate: '১৫৮',
    retailRateAvg: '১৬৫ - ১৭০',
    trend: 'stable',
    trendText: 'অপরিবর্তিত',
    alertType: 'neutral'
  },
  {
    id: 'dm-sugar',
    nameBn: 'চিনি (সাদা)',
    nameEn: 'White Sugar',
    unit: '১ কেজি',
    tcbRate: '১৩০ - ১৩৫',
    karwanBazarRate: '১৩২',
    retailRateAvg: '১৩৫ - ১৪০',
    trend: 'stable',
    trendText: 'অপরিবর্তিত',
    alertType: 'neutral'
  }
];

export const PAYMENT_OFFERS = [
  {
    id: 'offer-bkash',
    provider: 'bKash',
    providerBn: 'বিকাশ',
    logo: 'bKash',
    badgeColor: 'bg-pink-500 text-white',
    titleBn: '১০% ক্যাশব্যাক (সর্বোচ্চ ১০০ টাকা)',
    titleEn: '10% Cashback up to ৳100',
    applicableStores: ['chaldal', 'shwapno'],
    minSpend: 1000,
    discountRate: 0.10,
    maxDiscount: 100,
    code: 'BKASH10'
  },
  {
    id: 'offer-nagad',
    provider: 'Nagad',
    providerBn: 'নগদ',
    logo: 'Nagad',
    badgeColor: 'bg-orange-600 text-white',
    titleBn: '১২% ইনস্ট্যান্ট ডিসকাউন্ট দারাজ মার্টে',
    titleEn: '12% Instant Discount on Daraz Mart',
    applicableStores: ['daraz'],
    minSpend: 600,
    discountRate: 0.12,
    maxDiscount: 120,
    code: 'NAGADDARAZ'
  },
  {
    id: 'offer-citybank',
    provider: 'City Bank AMEX',
    providerBn: 'সিটি ব্যাংক এমেক্স',
    logo: 'CityBank',
    badgeColor: 'bg-blue-600 text-white',
    titleBn: '১৫% ক্যাশব্যাক স্বপ্ন ও কার্টআপ অর্ডারে',
    titleEn: '15% Savings at Shwapno & Cartup',
    applicableStores: ['shwapno', 'cartup'],
    minSpend: 1500,
    discountRate: 0.15,
    maxDiscount: 300,
    code: 'AMEXSAVE'
  }
];
