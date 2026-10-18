import React, { useState } from 'react';
import { 
  ShoppingBag, Plus, Minus, Trash2, ArrowRight, 
  Sparkles, CreditCard, Share2, Copy, Check, BookmarkPlus 
} from 'lucide-react';
import { calculateBasketOptimization } from '../utils/optimizer';
import { PAYMENT_OFFERS } from '../data/paymentOffers';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import confetti from 'canvas-confetti';

export default function DesktopBagSidebar({ 
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
    <aside className="w-88 shrink-0">
      <div className="sticky top-20 bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4 max-h-[calc(100vh-6rem)] overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 leading-tight">
                {t.myBag}
              </h3>
              <span className="text-[11px] text-slate-400">
                {basket.reduce((acc, c) => acc + c.quantity, 0)} {t.itemsCount}
              </span>
            </div>
          </div>

          {basket.length > 0 && (
            <button
              onClick={onClear}
              className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 p-1.5 rounded-lg hover:bg-rose-50 transition"
              title={t.clearBag}
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Empty State */}
        {basket.length === 0 ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">{t.emptyBagTitle}</h4>
            <p className="text-[11px] text-slate-400 max-w-[200px] mx-auto">
              {t.emptyBagSubtitle}
            </p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1 no-scrollbar">
              {basket.map(({ product, quantity }) => (
                <div 
                  key={product.id}
                  className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <img 
                      src={product.image} 
                      alt="" 
                      className="w-9 h-9 rounded-lg object-cover border border-slate-200 shrink-0" 
                    />
                    <div className="min-w-0">
                      <h5 className="font-bold text-slate-800 truncate text-[11px]">
                        {lang === 'bn' ? product.nameBn : product.nameEn}
                      </h5>
                      <span className="text-[10px] text-slate-400">{product.unit}</span>
                    </div>
                  </div>

                  <div className="flex items-center bg-white rounded-lg border border-slate-200 p-0.5 shrink-0">
                    <button
                      onClick={() => onRemove(product)}
                      className="w-5 h-5 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded"
                    >
                      <Minus className="w-2.5 h-2.5" />
                    </button>
                    <span className="w-5 text-center font-bold text-[11px] text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onAdd(product)}
                      className="w-5 h-5 flex items-center justify-center text-emerald-700 hover:bg-emerald-50 rounded"
                    >
                      <Plus className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Offer Dropdown / Pills */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[11px] font-bold text-slate-600 block mb-1.5 flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.paymentDiscounts}</span>
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {PAYMENT_OFFERS.slice(0, 2).map(offer => {
                  const isSelected = selectedOffer?.id === offer.id;
                  return (
                    <button
                      key={offer.id}
                      onClick={() => setSelectedOffer(isSelected ? null : offer)}
                      className={`p-1.5 rounded-xl border text-left text-[10px] font-semibold transition ${
                        isSelected 
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-900' 
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-white'
                      }`}
                    >
                      <span className="font-bold block">{offer.provider}</span>
                      <span className="text-[9px] text-slate-500 line-clamp-1">{offer.titleBn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Best Single Store Card */}
            {bestSingleStore && (
              <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-4 text-white shadow-md shadow-emerald-700/10">
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.bestSingleStore}</span>
                  </span>
                  <span className="text-emerald-100 font-medium">
                    {bestSingleStore.store.deliveryTime}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-black text-lg">
                    {lang === 'bn' ? bestSingleStore.store.nameBn : bestSingleStore.store.name}
                  </h4>
                  <div className="text-right">
                    <span className="text-xl font-black">৳{bestSingleStore.netTotal}</span>
                  </div>
                </div>

                <div className="text-[11px] text-emerald-100/90 space-y-1 pt-2 border-t border-white/20 mb-3">
                  <div className="flex justify-between">
                    <span>পণ্যের মূল্য:</span>
                    <span className="font-semibold text-white">৳{bestSingleStore.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ডেলিভারি ফি:</span>
                    <span className="font-semibold text-white">
                      {bestSingleStore.deliveryFee === 0 ? t.freeDelivery : `৳${bestSingleStore.deliveryFee}`}
                    </span>
                  </div>
                  {bestSingleStore.discount > 0 && (
                    <div className="flex justify-between text-yellow-300 font-bold">
                      <span>ডিসকাউন্ট:</span>
                      <span>-৳{bestSingleStore.discount}</span>
                    </div>
                  )}
                  {totalMrp > bestSingleStore.netTotal && (
                    <div className="flex justify-between font-bold text-white pt-0.5">
                      <span>মোট সাশ্রয়:</span>
                      <span>৳{totalMrp - bestSingleStore.netTotal}</span>
                    </div>
                  )}
                </div>

                <a
                  href={bestSingleStore.store.id === 'chaldal' ? 'https://chaldal.com' : 'https://shwapno.com'}
                  target="_blank"
                  rel="noreferrer"
                  onClick={triggerConfetti}
                  className="w-full bg-white text-emerald-800 hover:bg-emerald-50 active:scale-98 font-black py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 text-xs shadow-xs"
                >
                  <span>{bestSingleStore.store.name}-এ অর্ডার করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Split Cart Hint if better */}
            {splitRecommendation?.isSplitBetter && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl text-[11px] text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1 text-amber-800">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span>{t.splitCartTitle}</span>
                  <span className="ml-auto font-black text-emerald-700 bg-amber-100 px-1.5 py-0.2 rounded">
                    +৳{splitRecommendation.splitSavings} সেভ
                  </span>
                </div>
                <p className="text-[10px] text-amber-800 leading-tight">
                  {lang === 'bn' 
                    ? 'আলাদা ২টি স্টোর থেকে ভাঙিয়ে কিনলে ডেলিভারি খরচ দিয়েও কম পড়বে।' 
                    : 'Ordering split items from 2 stores saves more even with delivery charges.'}
                </p>
              </div>
            )}

            {/* Action Bar (WhatsApp, Copy, Save Bag) */}
            <div className="pt-2 border-t border-slate-100 space-y-1.5">
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold transition border border-emerald-200"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>হোয়াটসঅ্যাপ</span>
                </button>
                <button
                  onClick={handleCopyBag}
                  className="flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? t.copied : t.copyBag}</span>
                </button>
              </div>

              <button
                onClick={handleSaveBag}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold transition"
              >
                {bagSaved ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <BookmarkPlus className="w-3.5 h-3.5 text-slate-500" />}
                <span>{bagSaved ? (lang === 'bn' ? 'ব্যাগ সেভ হয়েছে!' : 'Bag Saved!') : t.saveCurrentBag}</span>
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
