import React from 'react';
import { Plus, Minus, ChevronRight, ExternalLink } from 'lucide-react';
import { STORES } from '../data/mockCatalog';
import { useLanguage } from '../context/LanguageContext';
import StoreLogo from './StoreLogo';
import { getSanitizedStoreUrl } from '../utils/urlHelper';

export default function ProductCard({ 
  product, 
  quantityInBasket = 0, 
  onAdd, 
  onRemove, 
  onOpenDetails,
  selectedStores = ['chaldal', 'shwapno', 'daraz', 'cartup', 'princebazar']
}) {
  const { lang, t } = useLanguage();

  // Filter stores according to selectedStores
  const activeEntries = Object.entries(product.prices).filter(([storeKey]) => 
    selectedStores.includes(storeKey)
  );
  const availableEntries = activeEntries.length > 0 ? activeEntries : Object.entries(product.prices);

  // Find minimum price among stores in stock
  let minPrice = Infinity;
  let lowestStoreKey = null;

  availableEntries.forEach(([storeKey, data]) => {
    if (data.inStock && data.price < minPrice) {
      minPrice = data.price;
      lowestStoreKey = storeKey;
    }
  });

  const inStockEntries = availableEntries.filter(([_, d]) => d.inStock);
  const allSamePrice = inStockEntries.length > 0 && inStockEntries.every(([_, d]) => d.price === minPrice);
  const hasRealLowest = !allSamePrice;
  const lowestStore = (hasRealLowest && lowestStoreKey) 
    ? STORES[lowestStoreKey] 
    : (lowestStoreKey ? STORES[lowestStoreKey] : null);
  const savingsVsMrp = product.mrp ? Math.max(0, product.mrp - minPrice) : 0;

  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-3xl p-3 sm:p-4 border border-zinc-200/70 dark:border-zinc-800 shadow-premium-card hover:shadow-premium-hover hover:border-zinc-300/90 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between relative">
      <div>
        {/* Product Image & Badges */}
        <div 
          onClick={() => onOpenDetails(product)}
          className="relative mb-3 rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-50/90 via-zinc-50/40 to-zinc-100/50 dark:from-zinc-800/80 dark:via-zinc-800/40 dark:to-zinc-800/60 border border-zinc-100/80 dark:border-zinc-800 aspect-[4/3] cursor-pointer flex items-center justify-center p-2.5 transition-all duration-300 group-hover:bg-zinc-50/60 dark:group-hover:bg-zinc-800/80"
        >
          <img 
            src={product.image} 
            alt={product.nameEn}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          {hasRealLowest && savingsVsMrp > 0 && (
            <span className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs tracking-tight">
              ৳{savingsVsMrp} {t.savingsVsMrp}
            </span>
          )}
          <span className="absolute bottom-2 right-2 bg-zinc-950/70 dark:bg-zinc-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-md border border-white/10 dark:border-white/10">
            {product.unit}
          </span>
        </div>

        {/* Product Title */}
        <h4 
          onClick={() => onOpenDetails(product)}
          className="font-heading font-bold text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm leading-snug line-clamp-2 min-h-[36px] sm:min-h-[40px] cursor-pointer group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors"
          title={lang === 'bn' ? product.nameBn : product.nameEn}
        >
          {lang === 'bn' ? product.nameBn : product.nameEn}
        </h4>

        {/* Best Price & Market Intelligence Box */}
        <div className="my-2.5 py-2 px-2.5 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60 transition-colors group-hover:border-zinc-200 dark:group-hover:border-zinc-700">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {hasRealLowest ? t.lowestPrice : (lang === 'bn' ? 'বর্তমান দর' : 'Price')}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-zinc-950 dark:text-zinc-50 tracking-tight font-heading">
                ৳{minPrice}
              </span>
              {hasRealLowest && product.mrp && product.mrp > minPrice && (
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500 line-through font-normal">
                  ৳{product.mrp}
                </span>
              )}
            </div>
          </div>

          {/* Best Store Tag with Direct Link */}
          <div className="flex items-center justify-between text-[11px] mt-1.5 pt-1.5 border-t border-zinc-200/50 dark:border-zinc-700/50">
            <span className="text-zinc-500 dark:text-zinc-400 text-[10px] font-medium">{t.bestStore}:</span>
            {hasRealLowest && lowestStore ? (
              <a
                href={getSanitizedStoreUrl(product.prices[lowestStoreKey]?.url, lowestStoreKey, product.cleanQuery)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title={lang === 'bn' ? `${lowestStore.name}-এ সরাসরি দেখুন` : `Open in ${lowestStore.name}`}
                className="inline-flex items-center gap-1 font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 transition truncate max-w-[130px] group/link"
              >
                <StoreLogo store={lowestStore} size="xs" showBorder={false} className="w-3.5 h-3.5 rounded-xs shrink-0" />
                <span className="truncate">{lowestStore.name}</span>
                <ExternalLink className="w-2.5 h-2.5 text-zinc-400 group-hover/link:text-emerald-700 dark:group-hover/link:text-emerald-400 shrink-0" />
              </a>
            ) : (
              <span className="font-semibold text-emerald-800 dark:text-emerald-400 text-[10px]">
                {lang === 'bn' ? 'সব স্টোরে নির্ধারিত' : 'Standard Rate'}
              </span>
            )}
          </div>
        </div>

        {/* Multi-Store Comparison Quick Strip */}
        <div 
          onClick={() => onOpenDetails(product)}
          className="flex items-center justify-between px-2.5 py-1.5 rounded-xl bg-white dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-emerald-300 dark:hover:border-emerald-500/50 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/20 transition cursor-pointer my-1 group/strip shadow-premium-sm"
          title={lang === 'bn' ? 'সবগুলো স্টোরের লাইভ দর তুলনা দেখুন' : 'Compare all store live rates'}
        >
          <div className="flex items-center gap-1 min-w-0">
            <div className="flex -space-x-1 shrink-0">
              {inStockEntries.map(([stKey]) => {
                const st = STORES[stKey];
                if (!st) return null;
                return (
                  <StoreLogo 
                    key={st.id} 
                    store={st} 
                    size="xs" 
                    showBorder={true} 
                    className="w-4 h-4 rounded-full border-white dark:border-zinc-800 shadow-2xs shrink-0 ring-1 ring-zinc-200 dark:ring-zinc-700" 
                  />
                );
              })}
            </div>
            <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300 truncate ml-1.5 group-hover/strip:text-emerald-800 dark:group-hover/strip:text-emerald-400">
              {lang === 'bn' ? `${inStockEntries.length} স্টোরে লাইভ দর` : `${inStockEntries.length} stores available`}
            </span>
          </div>
          <div className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold shrink-0">
            <span>{t.viewCompare}</span>
            <ChevronRight className="w-3 h-3 text-emerald-600 dark:text-emerald-400 group-hover/strip:translate-x-0.5 transition" />
          </div>
        </div>
      </div>

      {/* Action Button Area */}
      <div className="pt-2.5 mt-1 border-t border-zinc-100 dark:border-zinc-800">
        {quantityInBasket === 0 ? (
          <button
            onClick={() => onAdd(product)}
            className="w-full h-9 bg-zinc-900 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 active:scale-[0.98] text-white font-bold text-xs rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{t.addToBag}</span>
          </button>
        ) : (
          <div className="w-full h-9 flex items-center justify-between bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-800/80 rounded-xl px-1.5 shadow-2xs">
            <button
              onClick={() => onRemove(product)}
              className="w-7 h-7 rounded-lg bg-white dark:bg-zinc-800 text-emerald-900 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-zinc-700 flex items-center justify-center font-bold text-xs transition shadow-2xs active:scale-90 cursor-pointer"
              aria-label="Remove"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs font-bold text-emerald-950 dark:text-emerald-200 font-heading">
              {quantityInBasket} {t.inBag}
            </span>
            <button
              onClick={() => onAdd(product)}
              className="w-7 h-7 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center font-bold text-xs transition shadow-2xs active:scale-90 cursor-pointer"
              aria-label="Add"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
