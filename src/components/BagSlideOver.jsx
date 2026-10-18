import React, { useState } from 'react';
import { 
  X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, 
  Sparkles, CreditCard, Share2, Copy, Check, BookmarkPlus, ExternalLink 
} from 'lucide-react';
import { STORES } from '../data/mockCatalog';
import { calculateBasketOptimization } from '../utils/optimizer';
import { PAYMENT_OFFERS } from '../data/paymentOffers';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';
import StoreLogo from './StoreLogo';

export default function BagSlideOver({ 
  isOpen, 
  onClose, 
  basket, 
  onAdd, 
  onRemove, 
  onClear,
  allProducts 
}) {
  const { lang, t } = useLanguage();
  const { user, saveCurrentBag, openAuthModal } = useAuth();
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [copied, setCopied] = useState(false);
  const [bagSaved, setBagSaved] = useState(false);

  if (!isOpen) return null;

  const optimization = calculateBasketOptimization(basket, selectedOffer);
  const { storeSummaries, bestSingleStore, splitRecommendation, totalMrp } = optimization;

  const triggerConfetti = () => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.8, x: 0.8 } });
  };

  const handleShareWhatsApp = () => {
    if (basket.length === 0) return;
    let text = `🛒 *${lang === 'bn' ? 'বাজারদর - বাজারের ব্যাগ' : 'BazarDor - Grocery Bag'}*\n\n`;
    basket.forEach(({ product, quantity }, idx) => {
      text += `${idx + 1}. ${lang === 'bn' ? product.nameBn : product.nameEn} x ${quantity} (${product.unit})\n`;
    });
    if (bestSingleStore) {
      text += `\n🏆 *${t.bestStore}:* ${bestSingleStore.store.name}\n`;
      text += `পণ্যের দাম: ৳${bestSingleStore.subtotal} | ডেলিভারি: ${bestSingleStore.deliveryFee === 0 ? 'ফ্রি' : `৳${bestSingleStore.deliveryFee}`}\n`;
      text += `👉 *মোট প্রদেয়: ৳${bestSingleStore.netTotal}*\n`;
    }
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyBag = () => {
    if (basket.length === 0) return;
    let text = `🛒 ${lang === 'bn' ? 'বাজারের ব্যাগ' : 'Grocery Bag'}:\n`;
    basket.forEach(({ product, quantity }, idx) => {
      text += `${idx + 1}. ${lang === 'bn' ? product.nameBn : product.nameEn} x ${quantity}\n`;
    });
    if (bestSingleStore) {
      text += `\n${t.bestStore}: ${bestSingleStore.store.name} (৳${bestSingleStore.netTotal})`;
    }
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveBag = () => {
    if (!user) {
      openAuthModal();
      return;
    }
    saveCurrentBag(lang === 'bn' ? 'বাজারের ব্যাগ' : 'Grocery Bag', basket);
    setBagSaved(true);
    setTimeout(() => setBagSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 pointer-events-none">
        <div className="w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-slate-200 pointer-events-auto overflow-x-hidden">
          
          {/* Header */}
          <div className="px-4 sm:px-5 py-3.5 sm:py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900 leading-tight">
                  {t.myBag}
                </h3>
                <span className="text-xs text-slate-500">
                  {basket.reduce((acc, c) => acc + c.quantity, 0)} {t.itemsCount}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {basket.length > 0 && (
                <button
                  onClick={onClear}
                  className="text-xs text-rose-600 hover:text-rose-700 font-semibold p-1.5 rounded-lg hover:bg-rose-50 transition"
                  title={t.clearBag}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
            {basket.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-3xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-slate-800">{t.emptyBagTitle}</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  {t.emptyBagSubtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {allProducts.slice(0, 4).map(prod => (
                    <button
                      key={prod.id}
                      onClick={() => onAdd(prod)}
                      className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 py-1.5 px-3 rounded-full transition flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      <span>{lang === 'bn' ? prod.nameBn.split(' ')[0] : prod.nameEn.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <>
                {/* Product Items List with Direct Original Store Link */}
                <div className="space-y-2.5">
                  {basket.map(({ product, quantity }) => {
                    let minPrice = Infinity;
                    let lowestStoreKey = null;
                    Object.entries(product.prices).forEach(([sKey, sData]) => {
                      if (sData.inStock && sData.price < minPrice) {
                        minPrice = sData.price;
                        lowestStoreKey = sKey;
                      }
                    });
                    const lowestStore = lowestStoreKey ? STORES[lowestStoreKey] : null;
                    const directUrl = lowestStoreKey ? product.prices[lowestStoreKey]?.url : null;

                    return (
                      <div 
                        key={product.id}
                        className="flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img 
                            src={product.image} 
                            alt="" 
                            className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-slate-200 shrink-0" 
                          />
                          <div className="min-w-0">
                            <h5 className="font-bold text-slate-900 truncate text-xs">
                              {lang === 'bn' ? product.nameBn : product.nameEn}
                            </h5>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-[11px] text-slate-400">{product.unit}</span>
                              {directUrl && lowestStore && (
                                <a
                                  href={directUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title={lang === 'bn' ? `${lowestStore.name}-এ সরাসরি দেখুন` : `Open in ${lowestStore.name}`}
                                  className="text-[10px] font-bold text-emerald-800 hover:text-emerald-950 bg-white hover:bg-emerald-50 border border-slate-200 px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow-2xs transition"
                                >
                                  <StoreLogo store={lowestStore} size="xs" showBorder={false} className="w-3 h-3 rounded-xs shrink-0" />
                                  <span>{lowestStore.name} ৳{minPrice}</span>
                                  <ExternalLink className="w-2.5 h-2.5 text-emerald-600" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center bg-white rounded-xl border border-slate-200 p-0.5 shrink-0">
                          <button
                            onClick={() => onRemove(product)}
                            className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-lg active:scale-90"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-bold text-xs text-slate-900">
                            {quantity}
                          </span>
                          <button
                            onClick={() => onAdd(product)}
                            className="w-6 h-6 flex items-center justify-center text-emerald-700 hover:bg-emerald-50 rounded-lg active:scale-90"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Payment Offers Pills */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.paymentDiscounts}</span>
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {PAYMENT_OFFERS.slice(0, 2).map(offer => {
                      const isSelected = selectedOffer?.id === offer.id;
                      return (
                        <button
                          key={offer.id}
                          onClick={() => setSelectedOffer(isSelected ? null : offer)}
                          className={`p-2 rounded-xl border text-left text-xs font-semibold transition ${
                            isSelected 
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-1 ring-emerald-600' 
                              : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
                          }`}
                        >
                          <span className="font-bold block">{offer.provider}</span>
                          <span className="text-[10px] text-slate-500 line-clamp-1">{offer.titleBn}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Best Single Store Card */}
                {bestSingleStore && (
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-5 text-white shadow-lg shadow-emerald-700/10">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-black uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{t.bestSingleStore}</span>
                      </span>
                      <span className="text-emerald-100 font-medium">
                        {bestSingleStore.store.deliveryTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <StoreLogo store={bestSingleStore.store} size="lg" className="rounded-xl shadow-md border-0" />
                        <div>
                          <h4 className="font-black text-xl leading-tight">
                            {lang === 'bn' ? bestSingleStore.store.nameBn : bestSingleStore.store.name}
                          </h4>
                          <span className="text-[11px] text-emerald-100 font-medium">
                            {bestSingleStore.store.deliveryTime}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black">৳{bestSingleStore.netTotal}</span>
                      </div>
                    </div>

                    <div className="text-xs text-emerald-100/90 space-y-1.5 pt-2 border-t border-white/20 mb-4">
                      <div className="flex justify-between">
                        <span>পণ্যের মোট মূল্য:</span>
                        <span className="font-semibold text-white">৳{bestSingleStore.subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ডেলিভারি ফি:</span>
                        <span className="font-semibold text-white">
                          {bestSingleStore.deliveryFee === 0 ? t.freeDelivery + ' 🎉' : `৳${bestSingleStore.deliveryFee}`}
                        </span>
                      </div>
                      {bestSingleStore.discount > 0 && (
                        <div className="flex justify-between text-yellow-300 font-bold">
                          <span>ডিসকাউন্ট:</span>
                          <span>-৳{bestSingleStore.discount}</span>
                        </div>
                      )}
                      {totalMrp > bestSingleStore.netTotal && (
                        <div className="flex justify-between font-bold text-white pt-1">
                          <span>মোট সাশ্রয়:</span>
                          <span className="bg-white/20 px-2 py-0.5 rounded">৳{totalMrp - bestSingleStore.netTotal}</span>
                        </div>
                      )}
                    </div>

                    <a
                      href={
                        bestSingleStore.store.id === 'chaldal' ? 'https://chaldal.com' :
                        bestSingleStore.store.id === 'shwapno' ? 'https://www.shwapno.com' :
                        bestSingleStore.store.id === 'pandamart' ? 'https://www.foodpanda.com.bd/groceries' : 'https://meenabazaronline.com'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={triggerConfetti}
                      className="w-full bg-white text-emerald-800 hover:bg-emerald-50 active:scale-98 font-black py-3 rounded-2xl transition flex items-center justify-center gap-2 text-xs shadow-md"
                    >
                      <StoreLogo store={bestSingleStore.store} size="xs" showBorder={false} className="w-4 h-4 rounded-xs shrink-0" />
                      <span>{bestSingleStore.store.name}-এ সরাসরি অর্ডার করুন</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Split Cart Hint */}
                {splitRecommendation?.isSplitBetter && (
                  <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 space-y-2">
                    <div className="font-bold flex items-center gap-1 text-amber-800">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.splitCartTitle}</span>
                      <span className="ml-auto font-black text-emerald-700 bg-amber-200/80 px-2 py-0.5 rounded-full text-[10px]">
                        +৳{splitRecommendation.splitSavings} সাশ্রয়
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-800 leading-tight">
                      {lang === 'bn' 
                        ? 'আলাদা ২টি স্টোর থেকে ভাঙিয়ে কিনলে ডেলিভারি খরচ দিয়েও কম পড়বে।' 
                        : 'Ordering split items from 2 stores saves more even with delivery charges.'}
                    </p>
                    <div className="pt-1.5 border-t border-amber-200 flex flex-wrap gap-1.5">
                      {splitRecommendation.stores.map(s => (
                        <a
                          key={s.store.id}
                          href={
                            s.store.id === 'chaldal' ? 'https://chaldal.com' :
                            s.store.id === 'shwapno' ? 'https://www.shwapno.com' :
                            s.store.id === 'pandamart' ? 'https://www.foodpanda.com.bd/groceries' : 'https://meenabazaronline.com'
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold bg-white text-amber-900 border border-amber-300 hover:bg-amber-100/70 px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs transition"
                        >
                          <StoreLogo store={s.store} size="xs" showBorder={false} className="w-3.5 h-3.5 rounded-xs shrink-0" />
                          <span>{s.store.name} (৳{s.subtotal})</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Store Comparison Table */}
                <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 text-xs">
                  <h4 className="font-bold text-slate-700 uppercase tracking-wider text-[11px] mb-2">
                    {t.allStoresComparison}
                  </h4>
                  <div className="divide-y divide-slate-100">
                    {Object.entries(storeSummaries).map(([storeKey, summary]) => (
                      <div key={storeKey} className="py-2 flex items-center justify-between">
                        <a
                          href={
                            storeKey === 'chaldal' ? 'https://chaldal.com' :
                            storeKey === 'shwapno' ? 'https://www.shwapno.com' :
                            storeKey === 'pandamart' ? 'https://www.foodpanda.com.bd/groceries' : 'https://meenabazaronline.com'
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${summary.store.name}-এর স্টোর পেজে যান`}
                          className="font-semibold text-slate-800 hover:text-emerald-700 flex items-center gap-2 group transition"
                        >
                          <StoreLogo store={summary.store} size="sm" className="rounded-md shadow-2xs border border-slate-100" />
                          <span className="group-hover:underline">{summary.store.name}</span>
                          <ExternalLink className="w-2.5 h-2.5 text-slate-400 group-hover:text-emerald-600 transition" />
                        </a>
                        <div className="text-right">
                          <span className="font-bold text-slate-900">৳{summary.netTotal}</span>
                          <span className="text-[10px] text-slate-400 block">
                            ({summary.deliveryFee === 0 ? t.freeDelivery : `+৳${summary.deliveryFee} ফি`})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Bottom Fixed Action Buttons */}
          {basket.length > 0 && (
            <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 space-y-2 safe-bottom">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition border border-emerald-300"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>হোয়াটসঅ্যাপ</span>
                </button>
                <button
                  onClick={handleCopyBag}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold transition border border-slate-200"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t.copied : t.copyBag}</span>
                </button>
              </div>

              <button
                onClick={handleSaveBag}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 text-xs font-bold transition"
              >
                {bagSaved ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <BookmarkPlus className="w-3.5 h-3.5 text-slate-500" />}
                <span>{bagSaved ? (lang === 'bn' ? 'ব্যাগ সেভ হয়েছে!' : 'Bag Saved!') : t.saveCurrentBag}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
