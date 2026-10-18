import React from 'react';
import { X, Clock, Truck, CheckCircle2, ExternalLink } from 'lucide-react';
import { STORES } from '../data/mockCatalog';
import { useLanguage } from '../context/LanguageContext';
import StoreLogo from './StoreLogo';

export default function ProductDetailModal({ product, onClose, onAdd, quantityInBasket = 0 }) {
  const { lang, t } = useLanguage();
  if (!product) return null;

  let minPrice = Infinity;
  let lowestStoreKey = null;

  Object.entries(product.prices).forEach(([storeKey, data]) => {
    if (data.inStock && data.price < minPrice) {
      minPrice = data.price;
      lowestStoreKey = storeKey;
    }
  });

  const lowestStore = lowestStoreKey ? STORES[lowestStoreKey] : null;
  const inStockEntries = Object.entries(product.prices).filter(([_, d]) => d.inStock);
  const allSamePrice = inStockEntries.length > 0 && inStockEntries.every(([_, d]) => d.price === minPrice);
  const hasRealLowest = !allSamePrice;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-zinc-950/70 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-t-3xl sm:rounded-3xl shadow-premium-floating max-h-[90vh] overflow-y-auto overflow-x-hidden safe-bottom border border-zinc-200/80 dark:border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="sticky top-0 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl px-5 sm:px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider font-heading">
              {lang === 'bn' ? 'দরের বিস্তারিত তুলনা' : 'Detailed Price Intelligence'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Main Info */}
          <div className="flex gap-4 items-center p-3 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white dark:bg-zinc-800 border border-zinc-200/70 dark:border-zinc-700 shadow-2xs flex items-center justify-center p-2 shrink-0">
              <img 
                src={product.image} 
                alt={product.nameEn}
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="min-w-0 flex-1">
              <span className="inline-block text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/70 dark:border-emerald-800 px-2 py-0.5 rounded-md mb-1 uppercase tracking-wider">
                {product.unit}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-zinc-50 leading-snug line-clamp-2 font-heading">
                {lang === 'bn' ? product.nameBn : product.nameEn}
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate mt-0.5">
                {lang === 'bn' ? product.nameEn : product.nameBn}
              </p>
              {hasRealLowest && product.mrp && product.mrp > minPrice && (
                <div className="mt-1.5 flex items-baseline gap-2">
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 line-through">MRP: ৳{product.mrp}</span>
                  <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-1.5 py-0.5 rounded">
                    ৳{product.mrp - minPrice} {t.savingsVsMrp}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Store Breakdown List */}
          <div>
            <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-2.5 font-heading">
              {lang === 'bn' ? 'সবগুলো স্টোরের বর্তমান লাইভ দর' : 'Live Rates Across All Stores'}
            </h4>
            <div className="space-y-2.5">
              {Object.entries(product.prices).map(([storeKey, data]) => {
                const store = STORES[storeKey];
                if (!store) return null;
                const isLowest = hasRealLowest && storeKey === lowestStoreKey;

                return (
                  <div 
                    key={storeKey}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isLowest 
                        ? 'border-emerald-500/80 dark:border-emerald-500/80 bg-emerald-50/40 dark:bg-emerald-950/30 shadow-premium-sm ring-1 ring-emerald-500/20' 
                        : 'border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-800/70 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <StoreLogo store={store} size="md" className="rounded-lg shadow-2xs border border-zinc-100 dark:border-zinc-700" />
                        <div>
                          <span className="font-bold text-sm text-zinc-900 dark:text-zinc-100 block leading-tight">
                            {lang === 'bn' ? store.nameBn : store.name}
                          </span>
                          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                            {store.name}
                          </span>
                        </div>
                        {isLowest && (
                          <span className="text-[9px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full ml-1 uppercase tracking-wider">
                            ★ {t.lowestPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`text-base font-black font-heading ${isLowest ? 'text-emerald-700 dark:text-emerald-400' : 'text-zinc-950 dark:text-zinc-100'}`}>
                          {data.inStock ? `৳${data.price}` : t.outOfStock}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-700/60 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                          <Clock className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                          {lang === 'bn' ? store.deliveryTime : store.deliveryTimeEn}
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                          <Truck className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                          {t.deliveryFee}: ৳{store.baseDeliveryFee}
                        </span>
                      </div>
                      
                      <a 
                        href={data.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition shadow-2xs active:scale-95 ${
                          isLowest 
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600' 
                            : 'bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300'
                        }`}
                      >
                        <StoreLogo store={store} size="xs" showBorder={false} className="w-3.5 h-3.5 rounded-xs" />
                        <span>
                          {lang === 'bn' 
                            ? `${store.name}-এ সরাসরি কিনুন` 
                            : `Buy on ${store.name}`}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-2 space-y-2">
            {lowestStore && product.prices[lowestStoreKey]?.inStock && (
              <a
                href={product.prices[lowestStoreKey]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-zinc-950 dark:bg-zinc-800 hover:bg-black dark:hover:bg-zinc-700 text-white font-bold py-3 px-4 rounded-2xl transition flex items-center justify-center gap-2 text-xs shadow-premium-sm border border-transparent dark:border-zinc-700"
              >
                <StoreLogo store={lowestStore} size="xs" showBorder={false} className="w-4 h-4 rounded-xs shrink-0" />
                <span>
                  {lang === 'bn' 
                    ? `${lowestStore.name}-এ সর্বনিম্ন মূল্যে (৳${minPrice}) সরাসরি অর্ডার করুন` 
                    : `Order Directly at ৳${minPrice} on ${lowestStore.name}`}
                </span>
                <ExternalLink className="w-4 h-4 text-emerald-400" />
              </a>
            )}

            <button
              onClick={() => {
                onAdd(product);
                onClose();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl transition shadow-premium-sm active:scale-98 flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
            >
              <CheckCircle2 className="w-4.5 h-4.5" />
              <span>
                {quantityInBasket > 0 
                  ? (lang === 'bn' ? `ব্যাগে আরও যোগ করুন (${quantityInBasket}টি আছে)` : `Add More to Bag (${quantityInBasket} in Bag)`) 
                  : t.addToBag}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
