import React from 'react';
import { Tag, Sparkles, Plus, CreditCard, ExternalLink } from 'lucide-react';
import { PAYMENT_OFFERS } from '../data/paymentOffers';
import { STORES } from '../data/mockCatalog';
import { useLanguage } from '../context/LanguageContext';
import StoreLogo from './StoreLogo';

export default function DealsTab({ onAddProduct, allProducts }) {
  const { lang, t } = useLanguage();

  const discountedProducts = allProducts
    .map(prod => {
      let minPrice = Infinity;
      let storeName = '';
      let storeKey = '';
      let storeUrl = '';
      Object.entries(prod.prices).forEach(([key, val]) => {
        if (val.inStock && val.price < minPrice) {
          minPrice = val.price;
          storeName = STORES[key]?.name;
          storeKey = key;
          storeUrl = val.url;
        }
      });
      const savings = (prod.mrp || 0) - minPrice;
      return { ...prod, minPrice, storeName, storeKey, storeUrl, savings };
    })
    .filter(p => p.savings > 0)
    .sort((a, b) => b.savings - a.savings);

  return (
    <div className="space-y-6 pb-24 max-w-4xl mx-auto animate-fade-in">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-700 dark:to-pink-800 rounded-3xl p-6 text-white shadow-lg shadow-rose-600/10">
        <div className="flex items-center gap-1.5 text-xs font-bold bg-white/20 px-3 py-1 rounded-full w-max mb-3 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.todaySpecial}</span>
        </div>
        <h2 className="text-2xl font-black mb-1.5 font-heading">
          {lang === 'bn' ? 'বিকাশ, নগদ ও কার্ডে সর্বোচ্চ ১৫% সাশ্রয়' : 'Up to 15% Instant Savings on Cards & MFS'}
        </h2>
        <p className="text-xs text-rose-100 max-w-md">
          {lang === 'bn' 
            ? 'অনলাইন সুপারশপগুলোতে চলতি সপ্তাহের সেরা ভাউচার ও ডিসকাউন্ট অফারগুলো একসাথে' 
            : 'Explore this week’s exclusive supermarket voucher codes and payment partnerships.'}
        </p>
      </div>

      {/* Payment Vouchers Section */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-3 flex items-center gap-2 font-heading">
          <CreditCard className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{lang === 'bn' ? 'পেমেন্ট পার্টনার অফার ও কুপন কোড' : 'Payment Partner Coupons'}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PAYMENT_OFFERS.map(offer => (
            <div 
              key={offer.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-slate-200/90 dark:border-zinc-800 shadow-xs flex flex-col justify-between gap-3 transition-colors"
            >
              <div className="space-y-2">
                <div className={`px-2.5 py-1 rounded-xl font-black text-xs ${offer.badgeColor} w-max shadow-xs`}>
                  {offer.provider}
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 leading-snug">
                  {lang === 'bn' ? offer.titleBn : offer.titleEn}
                </h4>
                <p className="text-[11px] text-slate-400 dark:text-zinc-500">
                  {lang === 'bn' ? `ন্যূনতম খরচ ৳${offer.minSpend}` : `Min Spend ৳${offer.minSpend}`}
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="font-mono text-xs font-bold bg-slate-100 dark:bg-zinc-800 border border-dashed border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 px-2 py-0.5 rounded-lg">
                  {offer.code}
                </span>
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Price Drops */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 mb-3 flex items-center gap-2 font-heading">
          <Tag className="w-4 h-4 text-rose-600 dark:text-rose-400" />
          <span>{lang === 'bn' ? 'আজকের সর্বোচ্চ ডিসকাউন্টের পণ্য' : 'Top Price Drops Today'}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {discountedProducts.slice(0, 6).map(prod => (
            <div 
              key={prod.id}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-3 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between gap-3 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={prod.image} 
                  alt="" 
                  className="w-14 h-14 rounded-xl object-contain bg-white dark:bg-zinc-800 p-1 border border-slate-100 dark:border-zinc-700 shrink-0" 
                />
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-1.5 py-0.5 rounded">
                    ৳{prod.savings} {t.savingsVsMrp.split(' ')[0]}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 truncate mt-1">
                    {lang === 'bn' ? prod.nameBn : prod.nameEn}
                  </h4>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xs font-black text-emerald-700 dark:text-emerald-400">৳{prod.minPrice}</span>
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500 line-through">৳{prod.mrp}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <StoreLogo store={prod.storeKey} size="xs" showBorder={false} className="w-3.5 h-3.5 rounded-xs shrink-0" />
                    <span className="text-[10px] text-slate-500 dark:text-zinc-400 font-semibold">{prod.storeName}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-slate-100 dark:border-zinc-800">
                <button
                  onClick={() => onAddProduct(prod)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-2 rounded-xl transition shadow-xs flex items-center justify-center gap-1 active:scale-95 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{t.addToBag}</span>
                </button>
                {prod.storeUrl && (
                  <a
                    href={prod.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 font-bold text-xs py-2 px-2 rounded-xl transition flex items-center justify-center gap-1 active:scale-95 border border-slate-200 dark:border-zinc-700"
                    title={lang === 'bn' ? `${prod.storeName}-এ সরাসরি অফারটি দেখুন` : `Open in ${prod.storeName}`}
                  >
                    <StoreLogo store={prod.storeKey} size="xs" showBorder={false} className="w-3 h-3 rounded-xs shrink-0" />
                    <span>{t.visitStore}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 dark:text-zinc-400" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
