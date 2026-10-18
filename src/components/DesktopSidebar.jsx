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
    <aside className="w-60 xl:w-64 shrink-0 space-y-2.5 select-none sticky top-18 self-start max-h-[calc(100vh-4.8rem)] overflow-y-auto no-scrollbar pb-2">
      {/* Category Filter */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-3 sm:p-3.5 border border-zinc-200/70 dark:border-zinc-800 shadow-premium-card transition-colors">
        <h3 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-2 flex items-center justify-between font-heading">
          <span>{t.filterByCategory}</span>
          <span className="text-[9px] text-zinc-400 dark:text-zinc-400 font-semibold px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-transparent dark:border-zinc-700">
            {CATEGORIES.length}
          </span>
        </h3>
        <div className="space-y-0.5">
          {CATEGORIES.map(cat => {
            const isSelected = selectedCategory === cat.id;
            const count = cat.id === 'all' 
              ? productList.length 
              : productList.filter(p => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                  isSelected 
                    ? 'bg-zinc-950 dark:bg-emerald-600 text-white shadow-2xs font-bold' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                <span className="truncate pr-1 text-[11.5px]">{lang === 'bn' ? cat.nameBn : cat.nameEn}</span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
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
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-3 sm:p-3.5 border border-zinc-200/70 dark:border-zinc-800 shadow-premium-card transition-colors">
        <h3 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-2 font-heading">
          {t.filterByStore}
        </h3>
        <div className="space-y-1">
          {Object.values(STORES).map(store => {
            const isChecked = selectedStores.includes(store.id);
            return (
              <button
                key={store.id}
                onClick={() => toggleStoreFilter(store.id)}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition text-left cursor-pointer group"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div 
                    className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition ${
                      isChecked 
                        ? 'bg-zinc-950 dark:bg-emerald-600 border-zinc-950 dark:border-emerald-600 text-white shadow-2xs' 
                        : 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-600'
                    }`}
                  >
                    {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                  <StoreLogo store={store} size="xs" className="w-4 h-4 rounded-xs shadow-2xs border border-zinc-100 dark:border-zinc-700 shrink-0" />
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate group-hover:text-zinc-950 dark:group-hover:text-white">
                    {lang === 'bn' ? store.nameBn : store.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[9px] text-zinc-400 dark:text-zinc-500 hidden xl:inline">
                    {lang === 'bn' ? store.deliveryTime : store.deliveryTimeEn}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: store.accentHex }}></span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Deals Toggle */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-2.5 sm:p-3 border border-zinc-200/70 dark:border-zinc-800 shadow-premium-card transition-colors">
        <button
          onClick={() => setDiscountOnly(!discountOnly)}
          className={`w-full flex items-center justify-between px-2 py-1 rounded-xl transition cursor-pointer ${
            discountOnly 
              ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300' 
              : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <Tag className={`w-3.5 h-3.5 ${discountOnly ? 'text-rose-600 dark:text-rose-400' : 'text-zinc-400 dark:text-zinc-500'}`} />
            <span className="text-xs font-bold">{t.filterByDeals}</span>
          </div>
          <div className={`w-7 h-4 rounded-full p-0.5 transition ${discountOnly ? 'bg-rose-600' : 'bg-zinc-200 dark:bg-zinc-700'}`}>
            <div className={`w-3 h-3 rounded-full bg-white transition transform ${discountOnly ? 'translate-x-3' : ''}`}></div>
          </div>
        </button>
      </div>
    </aside>
  );
}
