import React from 'react';
import { Plus, Minus, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { STORES } from '../data/mockCatalog';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ 
  product, 
  quantityInBasket = 0, 
  onAdd, 
  onRemove, 
  onOpenDetails 
}) {
  const { lang, t } = useLanguage();

  // Find minimum price among stores in stock
  let minPrice = Infinity;
  let lowestStoreKey = null;

  Object.entries(product.prices).forEach(([storeKey, data]) => {
    if (data.inStock && data.price < minPrice) {
      minPrice = data.price;
      lowestStoreKey = storeKey;
    }
  });

  const inStockEntries = Object.entries(product.prices).filter(([_, d]) => d.inStock);
  const allSamePrice = inStockEntries.length > 0 && inStockEntries.every(([_, d]) => d.price === minPrice);
  const hasRealLowest = !allSamePrice;
  const lowestStore = (hasRealLowest && lowestStoreKey) ? STORES[lowestStoreKey] : null;
  const savingsVsMrp = product.mrp ? Math.max(0, product.mrp - minPrice) : 0;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-2.5 sm:p-3.5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition flex flex-col justify-between">
      <div>
        {/* Product Image & Badges */}
        <div 
          onClick={() => onOpenDetails(product)}
          className="relative mb-2 sm:mb-2.5 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 aspect-4/3 cursor-pointer group flex items-center justify-center p-1.5 sm:p-2"
        >
          <img 
            src={product.image} 
            alt={product.nameEn}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
            loading="lazy"
          />
          {hasRealLowest && savingsVsMrp > 0 && (
            <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 bg-rose-600 text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs">
              ৳{savingsVsMrp} {t.savingsVsMrp}
            </span>
          )}
          <span className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-semibold px-1.5 py-0.5 rounded-md">
            {product.unit}
          </span>
        </div>

        {/* Product Title (2 lines clamp with fixed height for alignment) */}
        <h4 
          onClick={() => onOpenDetails(product)}
          className="font-bold text-slate-900 text-xs sm:text-sm leading-snug line-clamp-2 min-h-[32px] sm:min-h-[38px] cursor-pointer hover:text-emerald-700 transition"
          title={lang === 'bn' ? product.nameBn : product.nameEn}
        >
          {lang === 'bn' ? product.nameBn : product.nameEn}
        </h4>

        {/* Lowest Price Banner with direct store link */}
        <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-xl p-2 my-2">
          <div className="flex items-baseline justify-between gap-1">
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 shrink-0">
              {hasRealLowest ? `${t.lowestPrice}:` : (lang === 'bn' ? 'বর্তমান দর:' : 'Market Price:')}
            </span>
            <div className="text-right flex items-baseline gap-1">
              <span className="text-base sm:text-lg font-black text-emerald-700">
                ৳{minPrice}
              </span>
              {hasRealLowest && product.mrp && product.mrp > minPrice && (
                <span className="text-[10px] sm:text-xs text-slate-400 line-through font-medium">
                  ৳{product.mrp}
                </span>
              )}
            </div>
          </div>
          {hasRealLowest && lowestStore ? (
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-emerald-900 mt-1 pt-1 border-t border-emerald-200/50">
              <span className="text-slate-500 font-medium">{t.bestStore}:</span>
              <a
                href={product.prices[lowestStoreKey]?.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title={lang === 'bn' ? `${lowestStore.name}-এ সরাসরি দেখুন` : `Open in ${lowestStore.name}`}
                className="font-bold px-1.5 py-0.5 rounded bg-white text-emerald-800 hover:text-emerald-950 hover:bg-emerald-100/80 shadow-2xs truncate max-w-[120px] flex items-center gap-1 group/lowest transition"
              >
                <span className="truncate">{lowestStore.name}</span>
                <ExternalLink className="w-2.5 h-2.5 text-emerald-600 shrink-0 group-hover/lowest:translate-x-0.5 transition" />
              </a>
            </div>
          ) : (
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-600 mt-1 pt-1 border-t border-emerald-200/50">
              <span className="text-slate-400 font-medium">{lang === 'bn' ? 'স্ট্যাটাস:' : 'Status:'}</span>
              <span className="font-semibold text-emerald-800">{lang === 'bn' ? 'সব স্টোরে নির্ধারিত দর' : 'Standard store rate'}</span>
            </div>
          )}
        </div>

        {/* Live Store Rates List with Clickable Direct Original Links */}
        <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 my-2 space-y-1">
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 font-medium px-1 pb-0.5">
            <span>{lang === 'bn' ? 'স্টোর ও লাইভ দর' : 'Store & Live Rate'}</span>
            <span className="flex items-center gap-0.5 text-emerald-700 font-semibold">
              <ExternalLink className="w-2.5 h-2.5" />
              {lang === 'bn' ? 'লিঙ্ক' : 'Direct'}
            </span>
          </div>
          {Object.entries(product.prices).map(([storeKey, data]) => {
            const store = STORES[storeKey];
            const isLowest = hasRealLowest && storeKey === lowestStoreKey;
            return (
              <a 
                key={storeKey} 
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title={lang === 'bn' ? `${store.name}-এ সরাসরি দেখুন` : `Open original item in ${store.name}`}
                className={`flex items-center justify-between text-[10px] sm:text-[11px] py-1 px-1.5 rounded-lg transition group/store ${
                  isLowest 
                    ? 'bg-emerald-100/70 font-bold text-emerald-900 hover:bg-emerald-200/80' 
                    : 'text-slate-600 hover:bg-white hover:text-slate-900 shadow-2xs hover:shadow-xs'
                }`}
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <span 
                    className="w-1.5 h-1.5 rounded-full shrink-0" 
                    style={{ backgroundColor: store.accentHex }}
                  ></span>
                  <span className="truncate group-hover/store:underline">{store.name}</span>
                </div>
                <div className="flex items-center gap-1 shrink-0 ml-1">
                  <span className={isLowest ? 'font-black text-emerald-800' : 'font-semibold text-slate-800'}>
                    {data.inStock ? `৳${data.price}` : t.outOfStock}
                  </span>
                  {data.inStock && (
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover/store:text-emerald-700 opacity-60 group-hover/store:opacity-100 shrink-0 transition" />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-2 border-t border-slate-100 space-y-1.5">
        {/* Full-width Add to Bag Button / Stepper */}
        {quantityInBasket === 0 ? (
          <button
            onClick={() => onAdd(product)}
            className="w-full h-8 sm:h-9 bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.addToBag}</span>
          </button>
        ) : (
          <div className="w-full h-8 sm:h-9 flex items-center justify-between bg-emerald-50 border border-emerald-300 rounded-xl px-1 shadow-2xs">
            <button
              onClick={() => onRemove(product)}
              className="w-7 h-7 rounded-lg bg-white text-emerald-800 hover:bg-emerald-100 flex items-center justify-center font-bold text-xs transition shadow-2xs active:scale-90"
              aria-label="Remove one"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs font-black text-emerald-900">
              {quantityInBasket} {t.inBag}
            </span>
            <button
              onClick={() => onAdd(product)}
              className="w-7 h-7 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center font-bold text-xs transition shadow-2xs active:scale-90"
              aria-label="Add one more"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Subtle Compare Link */}
        <button
          onClick={() => onOpenDetails(product)}
          className="w-full text-center text-[10px] sm:text-[11px] font-semibold text-slate-500 hover:text-emerald-700 py-0.5 flex items-center justify-center gap-0.5 transition"
        >
          <span>{t.viewCompare}</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
