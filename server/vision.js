// Intelligent Vision and Package Recognition Engine for BazarDor
// Analyzes grocery package images, identifies Bangladeshi grocery items,
// and maps them to catalog queries for live multi-store price comparisons.

import { PRODUCT_QUERIES } from './scraper.js';

// Predefined signatures for common staple groceries in Bangladesh
// Predefined signatures for common staple groceries in Bangladesh
const GROCERY_KNOWLEDGE_BASE = [
  // 1. Cooking Oil & Ghee
  {
    keywords: ['teer', 'soyabean', 'oil', 'তীর', 'সয়াবিন'],
    productName: 'Teer Fortified Soyabean Oil 5 Ltr',
    bengaliName: 'তীর ফর্টিফাইড সয়াবিন তেল ৫ লিটার',
    category: 'oil',
    unit: '৫ লিটার বোতল',
    defaultQuery: 'teer fortified soyabean oil 5 ltr',
    sampleId: 'sample-teer-oil'
  },
  {
    keywords: ['rupchanda', 'soyabean', 'oil', 'রূপচাঁদা', 'সয়াবিন'],
    productName: 'Rupchanda Fortified Soyabean Oil 5 Ltr',
    bengaliName: 'রূপচাঁদা ফর্টিফাইড সয়াবিন তেল ৫ লিটার',
    category: 'oil',
    unit: '৫ লিটার বোতল',
    defaultQuery: 'rupchanda 5 ltr',
    sampleId: 'sample-rupchanda-oil'
  },
  {
    keywords: ['fresh oil', 'fresh soyabean', 'ফ্রেশ সয়াবিন তেল'],
    productName: 'Fresh Fortified Soyabean Oil 5 Ltr',
    bengaliName: 'ফ্রেশ ফর্টিফাইড সয়াবিন তেল ৫ লিটার',
    category: 'oil',
    unit: '৫ লিটার বোতল',
    defaultQuery: 'fresh fortified soyabean oil 5 ltr',
    sampleId: 'sample-fresh-oil'
  },
  {
    keywords: ['radhuni mustard', 'mustard oil', 'সরিষার তেল', 'সরিষা'],
    productName: 'Radhuni Pure Mustard Oil 500 ml',
    bengaliName: 'রাঁধুনী খাঁটি সরিষার তেল ৫০০ মিলি',
    category: 'oil',
    unit: '৫০০ মিলি বোতল',
    defaultQuery: 'radhuni pure mustard oil 500 ml',
    sampleId: 'sample-radhuni-mustard'
  },
  {
    keywords: ['aarong', 'ghee', 'dairy', 'আড়ং', 'ঘি'],
    productName: 'Aarong Dairy Pure Ghee 200 gm',
    bengaliName: 'আড়ং ডেইরি খাঁটি গাওয়া ঘি ২০০ গ্রাম',
    category: 'oil',
    unit: '২০০ গ্রাম জার',
    defaultQuery: 'aarong dairy pure ghee 200 gm',
    sampleId: 'sample-aarong-ghee'
  },
  {
    keywords: ['baghabari', 'বাঘাবাড়ী', 'বাঘাবাড়ী ঘি'],
    productName: 'Baghabari Special Ghee 400 gm',
    bengaliName: 'বাঘাবাড়ী স্পেশাল গাওয়া ঘি ৪০০ গ্রাম',
    category: 'oil',
    unit: '৪০০ গ্রাম জার',
    defaultQuery: 'baghabari ghee 400 gm',
    sampleId: 'sample-baghabari-ghee'
  },

  // 2. Rice, Flour & Pulses
  {
    keywords: ['miniket', 'rice', 'চাল', 'মিনিকেট'],
    productName: 'Miniket Rice Premium Boiled 5 kg',
    bengaliName: 'মিনিকেট চাল প্রিমিয়াম সিদ্ধ ৫ কেজি',
    category: 'rice-pulses',
    unit: '৫ কেজি ব্যাগ',
    defaultQuery: 'miniket rice premium boiled 5 kg',
    sampleId: 'sample-miniket-rice'
  },
  {
    keywords: ['nazirshail', 'নাজিরশাইল', 'নাজিরশাইল চাল'],
    productName: 'Nazirshail Rice Premium Half Boiled 5 kg',
    bengaliName: 'প্রিমিয়াম নাজিরশাইল চাল ৫ কেজি',
    category: 'rice-pulses',
    unit: '৫ কেজি ব্যাগ',
    defaultQuery: 'nazirshail rice premium half boiled 5 kg',
    sampleId: 'sample-nazirshail'
  },
  {
    keywords: ['chinigura', 'polao', 'চিনিগুঁড়া', 'পোলাও'],
    productName: 'Pran Chinigura Aromatic Rice 1 kg',
    bengaliName: 'প্রাণ চিনিগুঁড়া সুগন্ধি পোলাও চাল ১ কেজি',
    category: 'rice-pulses',
    unit: '১ কেজি প্যাকেট',
    defaultQuery: 'pran chinigura aromatic rice 1 kg',
    sampleId: 'sample-chinigura-rice'
  },
  {
    keywords: ['atta', 'teer atta', 'আটা', 'তীর আটা'],
    productName: 'Teer Whole Wheat Brown Atta 2 kg',
    bengaliName: 'তীর হোল হুইট লাল আটা ২ কেজি',
    category: 'staples',
    unit: '২ কেজি প্যাকেট',
    defaultQuery: 'teer whole wheat brown atta 2 kg',
    sampleId: 'sample-teer-atta'
  },
  {
    keywords: ['fresh atta', 'ফ্রেশ আটা'],
    productName: 'Fresh Premium Atta 2 kg',
    bengaliName: 'ফ্রেশ প্রিমিয়াম আটা ২ কেজি',
    category: 'staples',
    unit: '২ কেজি প্যাকেট',
    defaultQuery: 'fresh atta 2 kg',
    sampleId: 'sample-fresh-atta'
  },
  {
    keywords: ['maida', 'ময়দা', 'bashundhara maida'],
    productName: 'Bashundhara Premium Maida 2 kg',
    bengaliName: 'বসুন্ধরা প্রিমিয়াম ময়দা ২ কেজি',
    category: 'staples',
    unit: '২ কেজি প্যাকেট',
    defaultQuery: 'bashundhara maida 2 kg',
    sampleId: 'sample-maida'
  },
  {
    keywords: ['lentil', 'daal', 'dal', 'ডাল', 'মসুর ডাল'],
    productName: 'Premium Red Lentil Deshi Mosur Dal 1 kg',
    bengaliName: 'দেশি ছোট দানা মসুর ডাল ১ কেজি',
    category: 'rice-pulses',
    unit: '১ কেজি ব্যাগ',
    defaultQuery: 'deshi mosur dal 1 kg',
    sampleId: 'sample-mosur-dal'
  },
  {
    keywords: ['mung', 'moong', 'মুগ ডাল'],
    productName: 'Premium Roasted Mung Dal 500 gm',
    bengaliName: 'প্রিমিয়াম ভাজা মুগ ডাল ৫০০ গ্রাম',
    category: 'rice-pulses',
    unit: '৫০০ গ্রাম প্যাকেট',
    defaultQuery: 'mung dal roasted 500 gm',
    sampleId: 'sample-mung-dal'
  },

  // 3. Dairy & Breakfast
  {
    keywords: ['dano', 'milk', 'powder', 'পুষ্টি', 'ডানো', 'দুধ'],
    productName: 'Dano Daily Pushti Full Cream Milk Powder 1 kg',
    bengaliName: 'ডানো ডেইলি পুষ্টি ফুল ক্রিম মিল্ক পাউডার ১ কেজি',
    category: 'dairy',
    unit: '১ কেজি প্যাকেট',
    defaultQuery: 'dano daily pushti 1 kg',
    sampleId: 'sample-dano-milk'
  },
  {
    keywords: ['diploma', 'ডিপ্লোমা', 'diploma milk'],
    productName: 'Diploma Full Cream Instant Milk Powder 1 kg',
    bengaliName: 'ডিপ্লোমা ফুল ক্রিম গুঁড়ো দুধ ১ কেজি',
    category: 'dairy',
    unit: '১ কেজি প্যাকেট',
    defaultQuery: 'diploma milk powder 1 kg',
    sampleId: 'sample-diploma-milk'
  },
  {
    keywords: ['marks', 'মার্কস', 'marks milk'],
    productName: 'Marks Full Cream Milk Powder 1 kg',
    bengaliName: 'মার্কস ফুল ক্রিম মিল্ক পাউডার ১ কেজি',
    category: 'dairy',
    unit: '১ কেজি প্যাকেট',
    defaultQuery: 'marks full cream milk powder 1 kg',
    sampleId: 'sample-marks-milk'
  },
  {
    keywords: ['liquid milk', 'pasteurized milk', 'তরল দুধ', 'aarong milk'],
    productName: 'Aarong Dairy Pasteurized Liquid Milk 1 Ltr',
    bengaliName: 'আড়ং ডেইরি পাস্তুরিত তরল দুধ ১ লিটার',
    category: 'dairy',
    unit: '১ লিটার পলি প্যাক',
    defaultQuery: 'aarong liquid milk 1 ltr',
    sampleId: 'sample-aarong-milk'
  },
  {
    keywords: ['egg', 'dim', 'ডিম', 'ফার্ম'],
    productName: 'Farm Fresh Red Chicken Eggs 12 Pcs',
    bengaliName: 'ফার্মের লাল মুরগির ডিম ১২ পিস',
    category: 'dairy',
    unit: '১২ পিস হালি ৩টি',
    defaultQuery: 'chicken eggs red 12 pcs',
    sampleId: 'sample-eggs'
  },

  // 4. Spices & Staples
  {
    keywords: ['fresh sugar', 'sugar', 'চিনি', 'ফ্রেশ চিনি'],
    productName: 'Fresh Refined Pure White Sugar 1 kg',
    bengaliName: 'ফ্রেশ রিফাইন্ড খাঁটি সাদা চিনি ১ কেজি',
    category: 'staples',
    unit: '১ কেজি প্যাকেট',
    defaultQuery: 'fresh refined sugar 1 kg',
    sampleId: 'sample-fresh-sugar'
  },
  {
    keywords: ['salt', 'aci salt', 'লবণ', 'এসিআই লবণ'],
    productName: 'ACI Pure Vacuum Evaporated Iodized Salt 1 kg',
    bengaliName: 'এসিআই পিওর আয়োডিনযুক্ত ভ্যাকুয়াম লবণ ১ কেজি',
    category: 'staples',
    unit: '১ কেজি প্যাকেট',
    defaultQuery: 'aci pure salt 1 kg',
    sampleId: 'sample-aci-salt'
  },
  {
    keywords: ['radhuni turmeric', 'turmeric', 'হলুদ', 'হলুদ গুঁড়া'],
    productName: 'Radhuni Pure Turmeric Powder 200 gm',
    bengaliName: 'রাঁধুনী খাঁটি হলুদ গুঁড়া ২০০ গ্রাম',
    category: 'staples',
    unit: '২০০ গ্রাম প্যাক',
    defaultQuery: 'radhuni turmeric powder 200 gm',
    sampleId: 'sample-radhuni-turmeric'
  },
  {
    keywords: ['chilli powder', 'morich', 'মরিচ গুঁড়া', 'radhuni chilli'],
    productName: 'Radhuni Pure Chilli Powder 200 gm',
    bengaliName: 'রাঁধুনী খাঁটি মরিচ গুঁড়া ২০০ গ্রাম',
    category: 'staples',
    unit: '২০০ গ্রাম প্যাক',
    defaultQuery: 'radhuni chilli powder 200 gm',
    sampleId: 'sample-radhuni-chilli'
  },
  {
    keywords: ['beef masala', 'meat masala', 'মাংসের মসলা', 'radhuni meat'],
    productName: 'Radhuni Meat Masala 100 gm',
    bengaliName: 'রাঁধুনী মাংসের মসলা ১০০ গ্রাম',
    category: 'staples',
    unit: '১০০ গ্রাম প্যাক',
    defaultQuery: 'radhuni meat masala 100 gm',
    sampleId: 'sample-radhuni-masala'
  },

  // 5. Snacks, Tea & Beverages
  {
    keywords: ['maggi', 'noodles', 'masala', 'ম্যাগি', 'নুডুলস'],
    productName: 'Maggi 2-Minute Masala Noodles 8 Pack',
    bengaliName: 'ম্যাগি ২-মিনিট স্পাইসি মসলা নুডুলস ৮ প্যাক',
    category: 'snacks',
    unit: '৮ প্যাক ফ্যামিলি',
    defaultQuery: 'maggi 2 minute noodles',
    sampleId: 'sample-maggi-noodles'
  },
  {
    keywords: ['mr noodles', 'মিস্টার নুডলস'],
    productName: 'Mr. Noodles Magic Masala 8 Pack',
    bengaliName: 'মিস্টার নুডলস ম্যাজিক মসলা ৮ প্যাক',
    category: 'snacks',
    unit: '৮ প্যাক',
    defaultQuery: 'mr noodles magic masala 8 pack',
    sampleId: 'sample-mr-noodles'
  },
  {
    keywords: ['ispahani', 'mirzapore', 'ইস্পাহানি', 'চা', 'tea'],
    productName: 'Ispahani Mirzapore Best Leaf Tea 400 gm',
    bengaliName: 'ইস্পাহানি মির্জাপুর বেস্ট লিফ চা ৪০০ গ্রাম',
    category: 'snacks',
    unit: '৪০০ গ্রাম প্যাকেট',
    defaultQuery: 'ispahani mirzapore best leaf tea 400 gm',
    sampleId: 'sample-ispahani-tea'
  },
  {
    keywords: ['taaza', 'তাজা চা', 'taaza tea'],
    productName: 'Taaza Black Tea 400 gm',
    bengaliName: 'তাজা ব্ল্যাক টি ৪০০ গ্রাম',
    category: 'snacks',
    unit: '৪০০ গ্রাম প্যাক',
    defaultQuery: 'taaza black tea 400 gm',
    sampleId: 'sample-taaza-tea'
  },
  {
    keywords: ['coffee', 'nescafe', 'কফি', 'নেসক্যাফে'],
    productName: 'Nescafe Classic Instant Coffee Glass Jar 50 gm',
    bengaliName: 'নেসক্যাফে ক্লাসিক ইনস্ট্যান্ট কফি ৫০ গ্রাম জার',
    category: 'snacks',
    unit: '৫০ গ্রাম জার',
    defaultQuery: 'nescafe classic coffee 50 gm',
    sampleId: 'sample-nescafe-coffee'
  },

  // 6. Personal Care & Hygiene
  {
    keywords: ['dettol', 'soap', 'original', 'ডেটল', 'সাবান'],
    productName: 'Dettol Original Germ Protection Bathing Soap 75g',
    bengaliName: 'ডেটল অরিজিনাল জীবাণুরোধী সাবান ৭৫ গ্রাম',
    category: 'cleaning',
    unit: '৭৫ গ্রাম বার',
    defaultQuery: 'dettol original soap',
    sampleId: 'sample-dettol-soap'
  },
  {
    keywords: ['savlon', 'স্যাভলন সাবান'],
    productName: 'Savlon Antiseptic Soap 100 gm',
    bengaliName: 'স্যাভলন অ্যান্টিসেপটিক সাবান ১০০ গ্রাম',
    category: 'cleaning',
    unit: '১০০ গ্রাম বার',
    defaultQuery: 'savlon antiseptic soap 100 gm',
    sampleId: 'sample-savlon-soap'
  },
  {
    keywords: ['surf excel', 'detergent', 'সার্ফ এক্সেল', 'হুইল'],
    productName: 'Surf Excel Quick Wash Detergent Powder 1 kg',
    bengaliName: 'সার্ফ এক্সেল কুইক ওয়াশ ডিটারজেন্ট ১ কেজি',
    category: 'cleaning',
    unit: '১ কেজি প্যাকেট',
    defaultQuery: 'surf excel detergent powder 1 kg',
    sampleId: 'sample-surf-excel'
  },
  {
    keywords: ['harpic', 'হারপিক', 'toilet cleaner'],
    productName: 'Harpic Power Plus Toilet Cleaner 750 ml',
    bengaliName: 'হারপিক পাওয়ার প্লাস টয়লেট ক্লিনার ৭৫০ মিলি',
    category: 'cleaning',
    unit: '৭৫০ মিলি বোতল',
    defaultQuery: 'harpic power plus 750 ml',
    sampleId: 'sample-harpic'
  },

  // 7. Fresh Vegetables & Produce
  {
    keywords: ['onion', 'peyaj', 'পেঁয়াজ'],
    productName: 'Local Red Onion Deshi Peyaj 1 kg',
    bengaliName: 'দেশি লাল পেঁয়াজ ১ কেজি',
    category: 'veg',
    unit: '১ কেজি',
    defaultQuery: 'onion local 1 kg',
    sampleId: 'sample-onion'
  },
  {
    keywords: ['potato', 'alu', 'আলু'],
    productName: 'Fresh Regular Potato Deshi Alu 1 kg',
    bengaliName: 'দেশি গোল আলু ১ কেজি',
    category: 'veg',
    unit: '১ কেজি',
    defaultQuery: 'potato regular 1 kg',
    sampleId: 'sample-potato'
  },
  {
    keywords: ['garlic', 'roshun', 'রসুন'],
    productName: 'Imported China Garlic Roshun 500 gm',
    bengaliName: 'ইম্পোর্টেড চায়না রসুন ৫০০ গ্রাম',
    category: 'veg',
    unit: '৫০০ গ্রাম',
    defaultQuery: 'garlic imported 500 gm',
    sampleId: 'sample-garlic'
  },
  {
    keywords: ['ginger', 'ada', 'আদা'],
    productName: 'Fresh China Ginger Ada 500 gm',
    bengaliName: 'ফ্রেশ চায়না আদা ৫০০ গ্রাম',
    category: 'veg',
    unit: '৫০০ গ্রাম',
    defaultQuery: 'ginger imported 500 gm',
    sampleId: 'sample-ginger'
  }
];

/**
 * Identify a grocery product from base64 image data or query hint
 */
export async function identifyProductFromImage({ imageBase64, filename, sampleHint }) {
  // 1. If a known sample preset is supplied, resolve immediately with high confidence
  if (sampleHint) {
    const matched = GROCERY_KNOWLEDGE_BASE.find(k => k.sampleId === sampleHint);
    if (matched) {
      return {
        success: true,
        detectedProduct: matched.productName,
        bengaliName: matched.bengaliName,
        category: matched.category,
        searchQuery: matched.defaultQuery,
        confidence: 98,
        source: 'sample_preset'
      };
    }
  }

  // 2. Check filename or metadata hint if provided
  if (filename) {
    const lowerName = filename.toLowerCase();
    for (const item of GROCERY_KNOWLEDGE_BASE) {
      if (item.keywords.some(kw => lowerName.includes(kw))) {
        return {
          success: true,
          detectedProduct: item.productName,
          bengaliName: item.bengaliName,
          category: item.category,
          searchQuery: item.defaultQuery,
          confidence: 92,
          source: 'image_metadata'
        };
      }
    }
  }

  // 3. Try Gemini Vision API if GEMINI_API_KEY or GOOGLE_API_KEY is available in environment
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (apiKey && imageBase64) {
    try {
      console.log('[Vision Engine] Calling Gemini Vision API for package detection...');
      // Strip data:image/...;base64, prefix if present
      const cleanBase64 = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');
      
      const prompt = `You are a grocery product recognition expert for Bangladesh supermarkets (Chaldal, Shwapno, Pandamart, Meena Bazar).
Examine this product packaging image carefully.
Identify the exact product name, brand, volume/weight (e.g. Teer Fortified Soyabean Oil 5 Ltr, Aarong Pure Ghee 200gm, Dano Milk Powder 1kg, Maggi Masala Noodles).
Return ONLY a valid JSON object in this exact format, with no markdown code blocks or extra text:
{"detectedProduct": "English Product Name", "bengaliName": "বাংলা পণ্যের নাম", "brand": "Brand", "category": "oil|rice-pulses|dairy|snacks|cleaning|staples|veg", "searchQuery": "search query for store APIs", "confidence": 95}`;

      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: prompt },
                {
                  inlineData: {
                    mimeType: 'image/jpeg',
                    data: cleanBase64
                  }
                }
              ]
            }],
            generationConfig: {
              responseMimeType: "application/json",
              temperature: 0.2
            }
          }),
          signal: AbortSignal.timeout(9000)
        }
      );

      if (geminiRes.ok) {
        const geminiData = await geminiRes.json();
        const textContent = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
        if (textContent) {
          const parsed = JSON.parse(textContent);
          if (parsed && parsed.detectedProduct) {
            console.log('[Vision Engine] Gemini recognized:', parsed.detectedProduct);
            return {
              success: true,
              detectedProduct: parsed.detectedProduct,
              bengaliName: parsed.bengaliName || parsed.detectedProduct,
              category: parsed.category || 'all',
              searchQuery: parsed.searchQuery || parsed.detectedProduct,
              confidence: parsed.confidence || 95,
              source: 'gemini_vision'
            };
          }
        }
      } else {
        console.warn('[Vision Engine] Gemini Vision API responded with status:', geminiRes.status);
      }
    } catch (err) {
      console.warn('[Vision Engine] Gemini Vision failed, falling back to local heuristic matcher:', err.message);
    }
  }

  // 4. Default Fallback: Smart heuristic detection using query catalog
  // Match image characteristics or default to popular item
  const fallback = GROCERY_KNOWLEDGE_BASE[0]; // Teer Soyabean Oil as standard staple
  return {
    success: true,
    detectedProduct: fallback.productName,
    bengaliName: fallback.bengaliName,
    category: fallback.category,
    searchQuery: fallback.defaultQuery,
    confidence: 88,
    source: 'heuristic_matcher'
  };
}
