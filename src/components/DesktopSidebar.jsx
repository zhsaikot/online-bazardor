import React from 'react';
import { 
  Sparkles, Store, Filter, Tag, Check, 
  TrendingDown, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { CATEGORIES, STORES, PRODUCTS } from '../data/mockCatalog';
import { useLanguage } from '../context/LanguageContext';
import StoreLogo from './StoreLogo';

export default function DesktopSidebar({ 
  productList = PRODUCTS,
  selectedCategory, 
  setSelectedCategory,
  selectedStores,
  toggleStoreFilter,
  discountOnly,
  setDiscountOnly
}) {
  const { lang, t } = useLanguage();

  return (
    <aside className="w-64 shrink-0 space-y-4 select-none">
      {/* Category Filter */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200/70 dark:border-zinc-800 shadow-premium-card transition-colors">
        <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-3 flex items-center justify-between font-heading">
          <span>{t.filterByCategory}</span>
          <span className="text-[10px] text-zinc-400 dark:text-zinc-400 font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-transparent dark:border-zinc-700">{CATEGORIES.length}</span>
        </h3>
        <div className="space-y-1">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? productList.length 
              : productList.filter(p => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  isSelected 
                    ? 'bg-zinc-950 dark:bg-emerald-600 text-white shadow-premium-sm font-bold' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <span className="truncate pr-1">{lang === 'bn' ? cat.nameBn : cat.nameEn}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0 ${
                  isSelected ? 'bg-zinc-800 dark:bg-emerald-700 text-zinc-200 dark:text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Store Filter */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-zinc-200/70 dark:border-zinc-800 shadow-premium-card transition-colors">
        <h3 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-3 font-heading">
          {t.filterByStore}
        </h3>
        <div className="space-y-1.5">
          {Object.values(STORES).map(store => {
            const isChecked = selectedStores.includes(store.id);
            return (
              <button
                key={store.id}
                onClick={() => toggleStoreFilter(store.id)}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div 
                    className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center shrink-0 transition ${
                      isChecked 
                        ? 'bg-zinc-950 dark:bg-emerald-600 border-zinc-950 dark:border-emerald-600 text-white shadow-2xs' 
                        : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-600'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <StoreLogo store={store} size="sm" className="rounded-lg shadow-2xs border border-zinc-100 dark:border-zinc-700" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 block truncate group-hover:text-zinc-950 dark:group-hover:text-white">
                      {lang === 'bn' ? store.nameBn : store.name}
                    </span>
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-500 block truncate">
                      {lang === 'bn' ? store.deliveryTime : store.deliveryTimeEn}
                    </span>
                  </div>
                </div>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: store.accentHex }}></span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Deals Toggle */}
      <div className="bg-white dark:bg-zinc-900 rounded-3xl p-4 border border-zinc-200/70 dark:border-zinc-800 shadow-premium-card transition-colors">
        <button
          onClick={() => setDiscountOnly(!discountOnly)}
          className={`w-full flex items-center justify-between p-1.5 rounded-xl transition cursor-pointer ${
            discountOnly 
              ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300' 
              : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <Tag className={`w-4 h-4 ${discountOnly ? 'text-rose-600 dark:text-rose-400' : 'text-zinc-400 dark:text-zinc-500'}`} />
            <span className="text-xs font-bold">{t.filterByDeals}</span>
          </div>
          <div className={`w-8 h-4.5 rounded-full p-0.5 transition ${discountOnly ? 'bg-rose-600' : 'bg-zinc-200 dark:bg-zinc-700'}`}>
            <div className={`w-3.5 h-3.5 rounded-full bg-white transition transform ${discountOnly ? 'translate-x-3.5' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Trust & Methodology Card */}
      <div className="bg-zinc-50/80 dark:bg-zinc-900/60 rounded-3xl p-4 border border-zinc-200/60 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs space-y-1.5 transition-colors">
        <div className="flex items-center gap-1.5 font-bold text-zinc-900 dark:text-zinc-200 text-[11px]">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{lang === 'bn' ? 'স্বচ্ছ মূল্য যাচাই' : 'Verified Pricing'}</span>
        </div>
        <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400">
          {lang === 'bn' 
            ? 'প্রতিটি স্টোরের মূল্য প্রতি ২ ঘণ্টায় স্বয়ংক্রিয়ভাবে হালনাগাদ করা হয়।' 
            : 'Store prices are indexed and validated every 2 hours.'}
        </p>
      </div>
    </aside>
  );
}
