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
    <aside className="w-64 shrink-0 space-y-6">
      {/* Category Filter */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>{t.filterByCategory}</span>
          <span className="text-[10px] text-slate-400 font-semibold">{CATEGORIES.length}</span>
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
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-2xl text-xs font-bold transition ${
                  isSelected 
                    ? 'bg-emerald-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{lang === 'bn' ? cat.nameBn : cat.nameEn}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                  isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Store Filter */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs">
        <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-3">
          {t.filterByStore}
        </h3>
        <div className="space-y-2.5">
          {Object.values(STORES).map(store => {
            const isChecked = selectedStores.includes(store.id);
            return (
              <button
                key={store.id}
                onClick={() => toggleStoreFilter(store.id)}
                className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div 
                    className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition ${
                      isChecked 
                        ? 'bg-emerald-600 border-emerald-600 text-white' 
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <StoreLogo store={store} size="md" className="rounded-lg shadow-2xs border border-slate-100" />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 block truncate">
                      {lang === 'bn' ? store.nameBn : store.name}
                    </span>
                    <span className="text-[10px] text-slate-400 block truncate">
                      {lang === 'bn' ? store.deliveryTime : store.deliveryTimeEn}
                    </span>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: store.accentHex }}></span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Deals Toggle */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs">
        <button
          onClick={() => setDiscountOnly(!discountOnly)}
          className={`w-full flex items-center justify-between p-2 rounded-xl transition ${
            discountOnly ? 'bg-rose-50 text-rose-800' : 'text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center gap-2">
            <Tag className={`w-4 h-4 ${discountOnly ? 'text-rose-600' : 'text-slate-400'}`} />
            <span className="text-xs font-bold">{t.filterByDeals}</span>
          </div>
          <div className={`w-8 h-4.5 rounded-full p-0.5 transition ${discountOnly ? 'bg-rose-600' : 'bg-slate-200'}`}>
            <div className={`w-3.5 h-3.5 rounded-full bg-white transition transform ${discountOnly ? 'translate-x-3.5' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Trust & Methodology Card */}
      <div className="bg-slate-50 rounded-3xl p-4 border border-slate-200 text-slate-600 text-xs space-y-2">
        <div className="flex items-center gap-1.5 font-bold text-slate-800 text-[11px]">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{lang === 'bn' ? 'স্বচ্ছ মূল্য যাচাই' : 'Verified Pricing'}</span>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-500">
          {lang === 'bn' 
            ? 'প্রতিটি স্টোরের মূল্য প্রতি ১ ঘণ্টায় স্বয়ংক্রিয়ভাবে হালনাগাদ করা হয়।' 
            : 'Store prices are indexed and validated hourly for accuracy.'}
        </p>
      </div>
    </aside>
  );
}
