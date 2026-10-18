import React, { useState } from 'react';
import { 
  Trash2, Plus, Minus, ArrowRight, Share2, 
  Sparkles, Check, ShoppingBag, 
  CreditCard, Copy, BookmarkPlus 
} from 'lucide-react';
import { calculateBasketOptimization } from '../utils/optimizer';
import { PAYMENT_OFFERS } from '../data/paymentOffers';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';

export default function BasketDrawer({ 
  basket, 
  onAdd, 
  onRemove, 
  onClear, 
  onClose,
  allProducts
}) {
  const { lang, t } = useLanguage();
  const { user, saveCurrentBag, openAuthModal } = useAuth();

  const [selectedOffer, setSelectedOffer] = useState(null);
  const [copiedText, setCopiedText] = useState(false);
  const [bagSaved, setBagSaved] = useState(false);

  const optimization = calculateBasketOptimization(basket, selectedOffer);
  const { storeSummaries, bestSingleStore, splitRecommendation, totalMrp } = optimization;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  // Generate WhatsApp Shareable Text
  const generateShareText = () => {
    if (basket.length === 0) return '';
    let text = `🛒 *${lang === 'bn' ? 'বাজারদর - বাজারের ব্যাগ' : 'BazarDor - Grocery Bag'}*\n`;
    text += `তারিখ: ${new Date().toLocaleDateString('bn-BD')}\n\n`;

    basket.forEach(({ product, quantity }, idx) => {
      text += `${idx + 1}. ${lang === 'bn' ? product.nameBn : product.nameEn} x ${quantity} (${product.unit})\n`;
    });

    if (bestSingleStore) {
      text += `\n🏆 *${t.bestStore}:* ${bestSingleStore.store.name}\n`;
      text += `মোট পণ্যের দাম: ৳${bestSingleStore.subtotal}\n`;
      text += `ডেলিভারি ফি: ${bestSingleStore.deliveryFee === 0 ? t.freeDelivery : `৳${bestSingleStore.deliveryFee}`}\n`;
      if (bestSingleStore.discount > 0) {
        text += `পেমেন্ট ডিসকাউন্ট: -৳${bestSingleStore.discount}\n`;
      }
      text += `👉 *সর্বমোট প্রদেয়: ৳${bestSingleStore.netTotal}*\n`;
    }

    if (splitRecommendation?.isSplitBetter) {
      text += `\n💡 *${t.splitCartTitle}:* ভেঙে কিনলে আরও ৳${splitRecommendation.splitSavings} সাশ্রয় হবে!\n`;
    }

    return text;
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(generateShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyList = () => {
    navigator.clipboard.writeText(generateShareText());
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
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
    <div className="space-y-5 pb-24 max-w-3xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <span>{t.myBag}</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
              {basket.reduce((acc, curr) => acc + curr.quantity, 0)} {t.itemsCount}
            </span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">{t.bagSubtitle}</p>
        </div>

        {basket.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 p-1.5 rounded-lg hover:bg-rose-50 transition"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{t.clearBag}</span>
          </button>
        )}
      </div>

      {/* Empty State */}
      {basket.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 text-center border border-slate-200/80 shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-slate-800 text-base mb-1">{t.emptyBagTitle}</h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto mb-5">
            {t.emptyBagSubtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
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
          {/* Basket Items List */}
          <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs space-y-3">
            {basket.map(({ product, quantity }) => (
              <div 
                key={product.id}
                className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img 
                    src={product.image} 
                    alt="" 
                    className="w-12 h-12 rounded-2xl object-cover border border-slate-100 shrink-0" 
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">
                      {lang === 'bn' ? product.nameBn : product.nameEn}
                    </h4>
                    <span className="text-[11px] text-slate-400 block">
                      {product.unit}
                    </span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center bg-slate-100 rounded-xl p-0.5">
                  <button
                    onClick={() => onRemove(product)}
                    className="w-7 h-7 rounded-lg bg-white text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold text-xs shadow-2xs transition active:scale-90"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-7 text-center text-xs font-black text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => onAdd(product)}
                    className="w-7 h-7 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center font-bold text-xs shadow-2xs transition active:scale-90"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Offers Selector */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-2.5">
              <CreditCard className="w-4 h-4 text-emerald-600" />
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {t.paymentDiscounts}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PAYMENT_OFFERS.map(offer => {
                const isSelected = selectedOffer?.id === offer.id;
                return (
                  <button
                    key={offer.id}
                    onClick={() => setSelectedOffer(isSelected ? null : offer)}
                    className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                      isSelected 
                        ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-600' 
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-slate-900">
                        {lang === 'bn' ? offer.providerBn : offer.provider}
                      </span>
                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      {lang === 'bn' ? offer.titleBn : offer.titleEn}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optimization Results */}
          {bestSingleStore && (
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-5 text-white shadow-xl shadow-emerald-700/20">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.bestSingleStore}</span>
                </span>
                <span className="text-xs text-emerald-100 font-medium">
                  {lang === 'bn' ? bestSingleStore.store.deliveryTime : bestSingleStore.store.deliveryTimeEn}
                </span>
              </div>

              <div className="flex items-baseline justify-between mt-3 mb-1">
                <h3 className="text-2xl font-black">
                  {lang === 'bn' ? bestSingleStore.store.nameBn : bestSingleStore.store.name}
                </h3>
                <div className="text-right">
                  <span className="text-2xl font-black">
                    ৳{bestSingleStore.netTotal}
                  </span>
                </div>
              </div>

              <div className="text-xs text-emerald-100 space-y-1 pt-2 border-t border-white/20 mb-4">
                <div className="flex justify-between">
                  <span>পণ্যের মোট দাম:</span>
                  <span className="font-semibold text-white">৳{bestSingleStore.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.deliveryFee}:</span>
                  <span className="font-semibold text-white">
                    {bestSingleStore.deliveryFee === 0 ? t.freeDelivery + ' 🎉' : `৳${bestSingleStore.deliveryFee}`}
                  </span>
                </div>
                {bestSingleStore.discount > 0 && (
                  <div className="flex justify-between text-yellow-300 font-bold">
                    <span>পেমেন্ট ডিসকাউন্ট:</span>
                    <span>-৳{bestSingleStore.discount}</span>
                  </div>
                )}
                {totalMrp > bestSingleStore.netTotal && (
                  <div className="flex justify-between font-bold text-white pt-1">
                    <span>{t.savingsVsMrp}:</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded">৳{totalMrp - bestSingleStore.netTotal}</span>
                  </div>
                )}
              </div>

              <a
                href={bestSingleStore.store.id === 'chaldal' ? 'https://chaldal.com' : 'https://shwapno.com'}
                target="_blank"
                rel="noreferrer"
                onClick={triggerConfetti}
                className="w-full bg-white text-emerald-800 hover:bg-emerald-50 active:scale-98 font-black py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{bestSingleStore.store.name}-এ অর্ডার করুন</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Split Cart Hint */}
          {splitRecommendation && splitRecommendation.isSplitBetter && (
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-4 shadow-xs">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs mb-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{t.splitCartTitle}</span>
                <span className="ml-auto bg-amber-200 text-amber-900 text-[10px] font-black px-2 py-0.5 rounded-full">
                  +{splitRecommendation.splitSavings} {t.splitExtraSavings}
                </span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed mb-3">
                {t.splitCartDesc}
                <strong className="text-emerald-700 font-black"> ৳{splitRecommendation.splitNetTotal}</strong>!
              </p>
            </div>
          )}

          {/* All Stores Comparison */}
          <div className="bg-white rounded-3xl p-4 border border-slate-200/80 shadow-xs">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
              {t.allStoresComparison}
            </h3>
            <div className="divide-y divide-slate-100">
              {Object.entries(storeSummaries).map(([storeKey, summary]) => (
                <div key={storeKey} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: summary.store.accentHex }}
                    ></span>
                    <span className="font-bold text-slate-800">
                      {summary.store.name}
                    </span>
                    {!summary.isAllInStock && (
                      <span className="text-[10px] bg-rose-50 text-rose-600 px-1.5 py-0.2 rounded font-semibold">
                        {summary.outOfStockItems.length} {t.outOfStock}
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="font-black text-slate-900 text-sm">
                      ৳{summary.netTotal}
                    </span>
                    <span className="text-[11px] text-slate-400 block">
                      ({summary.deliveryFee === 0 ? t.freeDelivery : `${t.deliveryFee} ৳${summary.deliveryFee}`})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions: WhatsApp Share, Copy, Save to Account */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
            <button
              onClick={handleShareWhatsApp}
              className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-bold text-xs py-3 px-3 rounded-2xl transition flex items-center justify-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span>{t.shareWhatsApp}</span>
            </button>
            <button
              onClick={handleCopyList}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-3 rounded-2xl transition flex items-center justify-center gap-1.5"
            >
              {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedText ? t.copied : t.copyBag}</span>
            </button>
            <button
              onClick={handleSaveBag}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 px-3 rounded-2xl transition flex items-center justify-center gap-1.5"
            >
              {bagSaved ? <Check className="w-4 h-4 text-emerald-600" /> : <BookmarkPlus className="w-4 h-4 text-slate-500" />}
              <span>{bagSaved ? (lang === 'bn' ? 'ব্যাগ সেভ হয়েছে!' : 'Bag Saved!') : t.saveCurrentBag}</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
