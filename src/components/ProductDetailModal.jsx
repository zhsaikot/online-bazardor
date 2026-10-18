import React from 'react';
import { X, Clock, Truck, CheckCircle2, ExternalLink } from 'lucide-react';
import { STORES } from '../data/mockCatalog';
import { useLanguage } from '../context/LanguageContext';

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

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden safe-bottom border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              {lang === 'bn' ? 'দরের বিস্তারিত তুলনা' : 'Detailed Price Comparison'}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Main Info */}
          <div className="flex gap-4 items-center">
            <img 
              src={product.image} 
              alt={product.nameEn}
              className="w-24 h-24 rounded-2xl object-cover border border-slate-200 shadow-xs" 
            />
            <div>
              <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mb-1">
                {product.unit}
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {lang === 'bn' ? product.nameBn : product.nameEn}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'bn' ? product.nameEn : product.nameBn}
              </p>
              {product.mrp && (
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xs text-slate-400 line-through">MRP: ৳{product.mrp}</span>
                  <span className="text-xs font-bold text-rose-600">
                    ৳{product.mrp - minPrice} {t.savingsVsMrp}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Store Breakdown List */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              {lang === 'bn' ? 'সবগুলো স্টোরের বর্তমান অফার ও দাম' : 'Current Rates Across All Stores'}
            </h4>
            <div className="space-y-2.5">
              {Object.entries(product.prices).map(([storeKey, data]) => {
                const store = STORES[storeKey];
                const isLowest = storeKey === lowestStoreKey;

                return (
                  <div 
                    key={storeKey}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      isLowest 
                        ? 'border-emerald-500 bg-emerald-50/50 shadow-xs' 
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: store.accentHex }}
                        ></span>
                        <span className="font-bold text-sm text-slate-900">
                          {lang === 'bn' ? `${store.name} (${store.nameBn})` : store.name}
                        </span>
                        {isLowest && (
                          <span className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded-full">
                            ★ {t.lowestPrice}
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <span className={`text-base font-black ${isLowest ? 'text-emerald-700' : 'text-slate-900'}`}>
                          {data.inStock ? `৳${data.price}` : t.outOfStock}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between text-xs text-slate-600 pt-2 border-t border-slate-100 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          {lang === 'bn' ? store.deliveryTime : store.deliveryTimeEn}
                        </span>
                        <span className="flex items-center gap-1 text-[11px]">
                          <Truck className="w-3.5 h-3.5 text-slate-400" />
                          {t.deliveryFee}: ৳{store.baseDeliveryFee}
                        </span>
                      </div>
                      
                      <a 
                        href={data.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-xs font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition shadow-2xs active:scale-95 ${
                          isLowest 
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 shadow-emerald-600/20' 
                            : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
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
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 px-4 rounded-2xl transition flex items-center justify-center gap-2 text-xs shadow-xs"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                <span>
                  {lang === 'bn' 
                    ? `${lowestStore.name}-এ সর্বনিম্ন মূল্যে (৳${minPrice}) সরাসরি অর্ডার করুন` 
                    : `Order Directly at ৳${minPrice} on ${lowestStore.name}`}
                </span>
              </a>
            )}

            <button
              onClick={() => {
                onAdd(product);
                onClose();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-2xl transition shadow-md shadow-emerald-600/20 active:scale-98 flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
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
