import React, { useState, useMemo } from 'react';
import { 
  X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, 
  Sparkles, CreditCard, Share2, Copy, Check, BookmarkPlus, 
  ExternalLink, CheckSquare, Square, Edit2, RotateCcw, 
  Receipt, Store, Globe, PlusCircle, CheckCircle2, ChevronDown
} from 'lucide-react';
import { STORES } from '../data/mockCatalog';
import { calculateBasketOptimization } from '../utils/optimizer';
import { PAYMENT_OFFERS } from '../data/paymentOffers';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useBazaarExpense } from '../context/BazaarExpenseContext';
import confetti from 'canvas-confetti';
import StoreLogo from './StoreLogo';
import BazaarExpenseHistory from './BazaarExpenseHistory';

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
  const { saveBazaarTrip, getMonthlySummary, currentMonthKey } = useBazaarExpense();

  // Top Drawer View: 'bag' (ফর্দ) | 'history' (খরচের খতিয়ান)
  const [activeTab, setActiveTab] = useState('bag');

  // Bag Mode: 'offline' (কাঁচাবাজার চেকলিস্ট ও দাম এডজাস্ট) | 'online' (সুপারশপ তুলনা)
  const [bagMode, setBagMode] = useState('offline');

  // Offline Checklist & Price Adjustment States
  const [checkedMap, setCheckedMap] = useState({});
  const [priceOverrides, setPriceOverrides] = useState({});
  const [editingPriceId, setEditingPriceId] = useState(null);
  const [tempPriceValue, setTempPriceValue] = useState('');

  // Custom Items added on-the-fly for physical bazaar
  const [customItems, setCustomItems] = useState([]);
  const [showAddCustom, setShowAddCustom] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customUnit, setCustomUnit] = useState('১টি / ১ কেজি');
  const [customPrice, setCustomPrice] = useState('');

  // Post-bazaar completion modal
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [savedTripData, setSavedTripData] = useState(null);

  // Online comparison states
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [copied, setCopied] = useState(false);
  const [bagSaved, setBagSaved] = useState(false);

  // Monthly summary for top tab badge
  const currentMonthSummary = getMonthlySummary(currentMonthKey);

  // 1. Calculate online optimization
  const optimization = calculateBasketOptimization(basket, selectedOffer);
  const { storeSummaries, bestSingleStore, splitRecommendation, totalMrp } = optimization;

  // 2. Prepare Offline items list (standard catalog items + custom bazaar items)
  const offlineItems = useMemo(() => {
    const list = basket.map(({ product, quantity }) => {
      // Find lowest available store price as default
      let minPrice = Infinity;
      Object.entries(product.prices || {}).forEach(([_, data]) => {
        if (data.inStock && data.price < minPrice) {
          minPrice = data.price;
        }
      });
      const catalogDefault = minPrice !== Infinity ? minPrice : (product.mrp || 100);
      const actualPrice = priceOverrides[product.id] !== undefined 
        ? Number(priceOverrides[product.id]) 
        : catalogDefault;

      return {
        id: product.id,
        isCustom: false,
        name: lang === 'bn' ? product.nameBn : product.nameEn,
        nameEn: product.nameEn,
        unit: product.unit,
        image: product.image,
        quantity,
        originalPrice: catalogDefault,
        boughtPrice: actualPrice,
        checked: Boolean(checkedMap[product.id]),
        itemTotal: actualPrice * quantity,
        product
      };
    });

    // Append custom items
    customItems.forEach(ci => {
      list.push({
        id: ci.id,
        isCustom: true,
        name: ci.name,
        nameEn: ci.name,
        unit: ci.unit,
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&auto=format&fit=crop&q=80',
        quantity: ci.quantity,
        originalPrice: ci.price,
        boughtPrice: ci.price,
        checked: Boolean(ci.checked),
        itemTotal: ci.price * ci.quantity
      });
    });

    return list;
  }, [basket, customItems, priceOverrides, checkedMap, lang]);

  // Offline stats
  const totalBudget = offlineItems.reduce((acc, it) => acc + it.itemTotal, 0);
  const checkedItems = offlineItems.filter(it => it.checked);
  const totalBought = checkedItems.reduce((acc, it) => acc + it.itemTotal, 0);
  const totalRemaining = totalBudget - totalBought;
  const progressPercent = offlineItems.length > 0 
    ? Math.round((checkedItems.length / offlineItems.length) * 100) 
    : 0;

  // Toggle checklist item
  const toggleItemCheck = (id, isCustom) => {
    if (isCustom) {
      setCustomItems(prev => prev.map(ci => ci.id === id ? { ...ci, checked: !ci.checked } : ci));
    } else {
      setCheckedMap(prev => ({ ...prev, [id]: !prev[id] }));
    }
  };

  // Start editing price
  const handleStartEditPrice = (id, currentPrice) => {
    setEditingPriceId(id);
    setTempPriceValue(String(currentPrice));
  };

  // Save edited price
  const handleSavePrice = (id, isCustom) => {
    const val = Math.max(0, parseInt(tempPriceValue, 10) || 0);
    if (isCustom) {
      setCustomItems(prev => prev.map(ci => ci.id === id ? { ...ci, price: val } : ci));
    } else {
      setPriceOverrides(prev => ({ ...prev, [id]: val }));
    }
    setEditingPriceId(null);
  };

  // Add custom bazaar item
  const handleAddCustomItem = (e) => {
    e.preventDefault();
    if (!customName.trim()) return;
    const priceNum = Math.max(0, parseInt(customPrice, 10) || 0);
    const newItem = {
      id: 'custom_' + Date.now(),
      name: customName.trim(),
      unit: customUnit.trim() || '১টি',
      quantity: 1,
      price: priceNum,
      checked: false
    };
    setCustomItems(prev => [...prev, newItem]);
    setCustomName('');
    setCustomPrice('');
    setShowAddCustom(false);
  };

  // Remove custom item
  const handleRemoveCustomItem = (id) => {
    setCustomItems(prev => prev.filter(ci => ci.id !== id));
  };

  // Trigger Confetti
  const triggerConfetti = () => {
    try {
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.7, x: 0.7 } });
    } catch {}
  };

  // Complete bazaar and save to history
  const handleCompleteBazaar = async () => {
    if (offlineItems.length === 0) return;

    // Use checked amount if any checked, else total budget
    const finalAmount = totalBought > 0 ? totalBought : totalBudget;

    const savedTrip = await saveBazaarTrip({
      items: offlineItems.map(it => ({
        id: it.id,
        name: it.name,
        nameEn: it.nameEn,
        unit: it.unit,
        quantity: it.quantity,
        originalPrice: it.originalPrice,
        boughtPrice: it.boughtPrice,
        checked: it.checked,
        isCustom: it.isCustom
      })),
      totalAmount: finalAmount,
      mode: 'offline',
      storeName: 'কাঁচাবাজার'
    });

    triggerConfetti();
    setSavedTripData(savedTrip);
    setShowCompletionModal(true);
  };

  // Handle post-completion clear choice
  const handleClearAfterComplete = (shouldClear) => {
    if (shouldClear) {
      onClear();
      setCustomItems([]);
      setCheckedMap({});
      setPriceOverrides({});
    }
    setShowCompletionModal(false);
    setActiveTab('history');
  };

  // WhatsApp share
  const handleShareWhatsApp = () => {
    if (offlineItems.length === 0) return;
    let text = `🛒 *${lang === 'bn' ? 'বাজারদর - আজকের বাজার ফর্দ' : 'BazarDor - Bazaar List'}*\n\n`;
    offlineItems.forEach((it, idx) => {
      text += `${idx + 1}. ${it.name} x ${it.quantity} (${it.unit}) - ৳${it.boughtPrice}\n`;
    });
    text += `\n💰 *${lang === 'bn' ? 'মোট আনুমানিক বাজেট' : 'Total Estimated Budget'}: ৳${totalBudget}*\n`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Copy bag
  const handleCopyBag = () => {
    if (offlineItems.length === 0) return;
    let text = `🛒 ${lang === 'bn' ? 'বাজারের ফর্দ' : 'Bazaar List'}:\n`;
    offlineItems.forEach((it, idx) => {
      text += `${idx + 1}. ${it.name} x ${it.quantity} (${it.unit}) - ৳${it.boughtPrice}\n`;
    });
    text += `\nমোট বাজেট: ৳${totalBudget}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Save Bag (as template)
  const handleSaveBag = () => {
    if (!user) {
      openAuthModal();
      return;
    }
    saveCurrentBag(lang === 'bn' ? 'বাজারের ব্যাগ' : 'Grocery Bag', basket);
    setBagSaved(true);
    setTimeout(() => setBagSaved(false), 2000);
  };

  // Restore past trip into bag
  const handleRestoreTripToBag = (tripItems) => {
    onClear();
    setCustomItems([]);
    setCheckedMap({});
    setPriceOverrides({});

    const newCustom = [];
    const newOverrides = {};

    tripItems.forEach(it => {
      const match = allProducts?.find(p => p.id === it.id);
      if (match) {
        for (let q = 0; q < (it.quantity || 1); q++) {
          onAdd(match);
        }
        if (it.boughtPrice) {
          newOverrides[match.id] = it.boughtPrice;
        }
      } else {
        newCustom.push({
          id: it.id || 'custom_' + Date.now(),
          name: it.name,
          unit: it.unit || '১টি',
          quantity: it.quantity || 1,
          price: it.boughtPrice || 0,
          checked: false
        });
      }
    });

    if (newCustom.length > 0) {
      setCustomItems(newCustom);
    }
    if (Object.keys(newOverrides).length > 0) {
      setPriceOverrides(newOverrides);
    }
    setActiveTab('bag');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-over Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 pointer-events-none">
        <div className="w-screen max-w-full sm:max-w-md bg-white dark:bg-zinc-900 shadow-2xl flex flex-col justify-between border-l border-slate-200 dark:border-zinc-800 pointer-events-auto overflow-x-hidden">
          
          {/* Main Top Header */}
          <div className="px-4 sm:px-5 py-3.5 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border-b border-slate-100 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-zinc-100 leading-tight">
                    {lang === 'bn' ? 'বাজারের ব্যাগ ও ফর্দ' : 'Grocery Bag & List'}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    {offlineItems.length} {lang === 'bn' ? 'টি পণ্য ফর্দে আছে' : 'items in list'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {offlineItems.length > 0 && activeTab === 'bag' && (
                  <button
                    onClick={() => {
                      if (window.confirm(lang === 'bn' ? 'আপনি কি পুরো ফর্দ খালি করতে চান?' : 'Clear the entire bag?')) {
                        onClear();
                        setCustomItems([]);
                        setCheckedMap({});
                        setPriceOverrides({});
                      }
                    }}
                    className="text-xs text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 font-semibold p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
                    title={t.clearBag}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full text-slate-400 dark:text-zinc-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* View Switcher: [🛒 ফর্দ] | [📊 খরচের খতিয়ান] */}
            <div className="mt-3 grid grid-cols-2 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-2xl gap-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('bag')}
                className={`py-2 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'bag' 
                    ? 'bg-white dark:bg-zinc-900 text-emerald-700 dark:text-emerald-400 shadow-xs' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'বাজারের ফর্দ' : 'Active Bag'}</span>
                {offlineItems.length > 0 && (
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center">
                    {offlineItems.length}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('history')}
                className={`py-2 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  activeTab === 'history' 
                    ? 'bg-white dark:bg-zinc-900 text-emerald-700 dark:text-emerald-400 shadow-xs' 
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <Receipt className="w-3.5 h-3.5" />
                <span>{lang === 'bn' ? 'খরচের খতিয়ান' : 'Expense History'}</span>
                {currentMonthSummary.totalAmount > 0 && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    ৳{currentMonthSummary.totalAmount.toLocaleString('bn-BD')}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* TAB 1: ACTIVE BAG & CHECKLIST */}
          {activeTab === 'bag' && (
            <>
              {/* Mode Toggle Bar: [🛍️ অফলাইন বাজার ফর্দ] <-> [🌐 অনলাইন ডেলিভারি] */}
              <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200/70 dark:border-zinc-800 flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400">
                  {lang === 'bn' ? 'শপিং মোড:' : 'Shopping Mode:'}
                </span>

                <div className="flex bg-zinc-200/80 dark:bg-zinc-800 p-0.5 rounded-xl text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setBagMode('offline')}
                    className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                      bagMode === 'offline' 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    <Store className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'অফলাইন বাজার' : 'Physical Bazaar'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBagMode('online')}
                    className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 cursor-pointer ${
                      bagMode === 'online' 
                        ? 'bg-emerald-600 text-white shadow-xs' 
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'অনলাইন অর্ডার' : 'Online Store'}</span>
                  </button>
                </div>
              </div>

              {/* Scrollable Content Body */}
              <div className="flex-1 overflow-y-auto p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
                {offlineItems.length === 0 ? (
                  <div className="py-16 text-center space-y-3">
                    <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-zinc-800 text-slate-400 dark:text-zinc-500 flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-zinc-200">{t.emptyBagTitle}</h4>
                    <p className="text-xs text-slate-400 dark:text-zinc-500 max-w-xs mx-auto">
                      {lang === 'bn' 
                        ? 'বাজারে যাওয়ার আগে যেসব পণ্য কেনা লাগবে সেগুলো ক্যাটালগ থেকে ব্যাগে যোগ করুন।'
                        : 'Add products to your list before heading out to the market.'}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {allProducts?.slice(0, 4).map(prod => (
                        <button
                          key={prod.id}
                          onClick={() => onAdd(prod)}
                          className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 py-1.5 px-3 rounded-full transition flex items-center gap-1 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                          <span>{lang === 'bn' ? prod.nameBn.split(' ')[0] : prod.nameEn.split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {/* ================= OFFLINE BAZAAR CHECKLIST MODE ================= */}
                    {bagMode === 'offline' && (
                      <div className="space-y-3">
                        {/* Live Budget & Progress Card */}
                        <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md space-y-2.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold flex items-center gap-1.5 text-emerald-100">
                              <Receipt className="w-3.5 h-3.5" />
                              <span>{lang === 'bn' ? 'বাজারের প্রগ্রেস' : 'Shopping Progress'}</span>
                            </span>
                            <span className="text-[11px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                              {checkedItems.length}/{offlineItems.length} টি কেনা হয়েছে ({progressPercent}%)
                            </span>
                          </div>

                          {/* Progress Track */}
                          <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
                            <div 
                              className="bg-amber-300 h-full rounded-full transition-all duration-300"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/15 text-center">
                            <div>
                              <span className="text-[10px] text-emerald-200 block">{lang === 'bn' ? 'মোট বাজেট' : 'Total'}</span>
                              <span className="text-sm font-black font-heading">৳{totalBudget.toLocaleString('bn-BD')}</span>
                            </div>
                            <div className="border-x border-white/15">
                              <span className="text-[10px] text-emerald-200 block">{lang === 'bn' ? 'কেনা হয়েছে' : 'Bought'}</span>
                              <span className="text-sm font-black font-heading text-amber-300">৳{totalBought.toLocaleString('bn-BD')}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-emerald-200 block">{lang === 'bn' ? 'বাকি আছে' : 'Pending'}</span>
                              <span className="text-sm font-black font-heading text-emerald-100">৳{totalRemaining.toLocaleString('bn-BD')}</span>
                            </div>
                          </div>
                        </div>

                        {/* Tip for Price Adjustments */}
                        <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>
                            {lang === 'bn' 
                              ? 'কাঁচাবাজারে দরদামের পর আসল কেনা দর লিখতে ৳ বাটনে ট্যাপ করুন।'
                              : 'Tap the ৳ price tag to adjust the actual offline price you paid.'}
                          </span>
                        </div>

                        {/* Interactive Checklist Items */}
                        <div className="space-y-2">
                          {offlineItems.map((it) => {
                            const isChecked = it.checked;
                            const isEditingPrice = editingPriceId === it.id;

                            return (
                              <div
                                key={it.id}
                                className={`p-3 rounded-2xl border transition-all ${
                                  isChecked 
                                    ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300/80 dark:border-emerald-800/60 opacity-85' 
                                    : 'bg-white dark:bg-zinc-800/80 border-zinc-200/80 dark:border-zinc-750 shadow-2xs'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-3">
                                  {/* Checkbox + Info */}
                                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                    <button
                                      type="button"
                                      onClick={() => toggleItemCheck(it.id, it.isCustom)}
                                      className="text-emerald-600 dark:text-emerald-400 hover:scale-110 active:scale-95 transition shrink-0 cursor-pointer"
                                      aria-label={isChecked ? 'Mark unbought' : 'Mark bought'}
                                    >
                                      {isChecked ? (
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                                      ) : (
                                        <Square className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                                      )}
                                    </button>

                                    <div className="min-w-0 flex-1">
                                      <h5 className={`font-bold text-xs truncate ${
                                        isChecked 
                                          ? 'line-through text-zinc-400 dark:text-zinc-500' 
                                          : 'text-zinc-900 dark:text-zinc-100'
                                      }`}>
                                        {it.name}
                                      </h5>
                                      <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-zinc-400">
                                        <span>{it.unit}</span>
                                        {it.isCustom && (
                                          <span className="px-1 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-semibold">
                                            কাস্টম
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  {/* Price Adjustment Box */}
                                  <div className="flex items-center gap-2 shrink-0">
                                    {isEditingPrice ? (
                                      <div className="flex items-center gap-1">
                                        <span className="text-xs font-bold text-zinc-500">৳</span>
                                        <input
                                          type="number"
                                          value={tempPriceValue}
                                          onChange={(e) => setTempPriceValue(e.target.value)}
                                          onKeyDown={(e) => {
                                            if (e.key === 'Enter') handleSavePrice(it.id, it.isCustom);
                                          }}
                                          autoFocus
                                          className="w-16 px-1.5 py-1 bg-white dark:bg-zinc-900 border-2 border-emerald-500 rounded-lg text-xs font-bold text-zinc-900 dark:text-zinc-100 outline-none"
                                        />
                                        <button
                                          type="button"
                                          onClick={() => handleSavePrice(it.id, it.isCustom)}
                                          className="p-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
                                        >
                                          <Check className="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => handleStartEditPrice(it.id, it.boughtPrice)}
                                        className="px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-700/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-zinc-200 dark:border-zinc-600 transition flex items-center gap-1 cursor-pointer group"
                                        title={lang === 'bn' ? 'আসল কেনার দর পরিবর্তন করুন' : 'Edit actual bought price'}
                                      >
                                        <span className="text-xs font-extrabold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600">
                                          ৳{it.boughtPrice}
                                        </span>
                                        <Edit2 className="w-2.5 h-2.5 text-zinc-400 group-hover:text-emerald-600" />
                                      </button>
                                    )}

                                    {/* Quantity Controls */}
                                    {!it.isCustom ? (
                                      <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 p-0.5">
                                        <button
                                          onClick={() => onRemove(it.product)}
                                          className="w-5 h-5 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700 rounded active:scale-90"
                                        >
                                          <Minus className="w-2.5 h-2.5" />
                                        </button>
                                        <span className="w-5 text-center font-bold text-xs text-zinc-900 dark:text-zinc-100">
                                          {it.quantity}
                                        </span>
                                        <button
                                          onClick={() => onAdd(it.product)}
                                          className="w-5 h-5 flex items-center justify-center text-emerald-700 dark:text-emerald-400 hover:bg-white dark:hover:bg-zinc-700 rounded active:scale-90"
                                        >
                                          <Plus className="w-2.5 h-2.5" />
                                        </button>
                                      </div>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => handleRemoveCustomItem(it.id)}
                                        className="p-1 text-rose-500 hover:text-rose-700 cursor-pointer"
                                        title="মুছে ফেলুন"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    )}
                                  </div>
                                </div>

                                {/* Total Price for this item */}
                                <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                                  <span>
                                    {it.quantity > 1 ? `মোট (${it.quantity}টি x ৳${it.boughtPrice}):` : 'মূল্য:'}
                                  </span>
                                  <span className="font-extrabold text-zinc-900 dark:text-zinc-100 font-heading">
                                    ৳{it.itemTotal}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Add Custom Bazaar Item Toggle & Form */}
                        <div className="pt-2">
                          {!showAddCustom ? (
                            <button
                              type="button"
                              onClick={() => setShowAddCustom(true)}
                              className="w-full py-2.5 px-3 rounded-2xl border border-dashed border-emerald-500/50 hover:border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5 transition active:scale-98 cursor-pointer"
                            >
                              <PlusCircle className="w-4 h-4" />
                              <span>{lang === 'bn' ? '+ ফর্দে অন্য পণ্য যোগ করুন (কাঁচামরিচ, শাকসবজি ইত্যাদি)' : '+ Add Custom Bazaar Item'}</span>
                            </button>
                          ) : (
                            <form 
                              onSubmit={handleAddCustomItem}
                              className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 space-y-2.5 animate-in fade-in"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                                  {lang === 'bn' ? 'কাস্টম বাজার আইটেম' : 'Add Custom Item'}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => setShowAddCustom(false)}
                                  className="text-zinc-400 hover:text-zinc-600 text-xs"
                                >
                                  {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                                </button>
                              </div>

                              <input
                                type="text"
                                placeholder={lang === 'bn' ? 'পণ্যের নাম (যেমন: কাঁচা মরিচ ও ধনেপাতা)' : 'Item name (e.g. Green Chilli)'}
                                value={customName}
                                onChange={(e) => setCustomName(e.target.value)}
                                className="w-full px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-xs font-semibold outline-none focus:border-emerald-600"
                                autoFocus
                              />

                              <div className="grid grid-cols-2 gap-2">
                                <input
                                  type="text"
                                  placeholder={lang === 'bn' ? 'পরিমাণ (যেমন: ২০ টাকার)' : 'Unit/Qty'}
                                  value={customUnit}
                                  onChange={(e) => setCustomUnit(e.target.value)}
                                  className="px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-xs font-semibold outline-none focus:border-emerald-600"
                                />
                                <div className="relative">
                                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-400">৳</span>
                                  <input
                                    type="number"
                                    placeholder="দাম"
                                    value={customPrice}
                                    onChange={(e) => setCustomPrice(e.target.value)}
                                    className="w-full pl-6 pr-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl text-xs font-bold outline-none focus:border-emerald-600"
                                  />
                                </div>
                              </div>

                              <button
                                type="submit"
                                className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs active:scale-98 transition cursor-pointer"
                              >
                                {lang === 'bn' ? 'ফর্দে যুক্ত করুন' : 'Add to List'}
                              </button>
                            </form>
                          )}
                        </div>
                      </div>
                    )}

                    {/* ================= ONLINE SUPERMARKETS MODE ================= */}
                    {bagMode === 'online' && (
                      <div className="space-y-3.5">
                        {/* Product Items List with Direct Original Store Link */}
                        <div className="space-y-2.5">
                          {basket.map(({ product, quantity }) => {
                            let minPrice = Infinity;
                            let lowestStoreKey = null;
                            Object.entries(product.prices || {}).forEach(([sKey, sData]) => {
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
                                className="flex items-center justify-between gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-800 text-xs"
                              >
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <img 
                                    src={product.image} 
                                    alt="" 
                                    className="w-11 h-11 rounded-xl object-contain bg-white dark:bg-zinc-800 p-1 border border-slate-200 dark:border-zinc-700 shrink-0" 
                                  />
                                  <div className="min-w-0">
                                    <h5 className="font-bold text-slate-900 dark:text-zinc-100 truncate text-xs">
                                      {lang === 'bn' ? product.nameBn : product.nameEn}
                                    </h5>
                                    <div className="flex items-center gap-2 mt-0.5">
                                      <span className="text-[11px] text-slate-400 dark:text-zinc-500">{product.unit}</span>
                                      {directUrl && lowestStore && (
                                        <a
                                          href={directUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          title={lang === 'bn' ? `${lowestStore.name}-এ সরাসরি দেখুন` : `Open in ${lowestStore.name}`}
                                          className="text-[10px] font-bold text-emerald-800 dark:text-emerald-400 hover:text-emerald-950 dark:hover:text-emerald-300 bg-white dark:bg-zinc-800 hover:bg-emerald-50 dark:hover:bg-zinc-700 border border-slate-200 dark:border-zinc-700 px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow-2xs transition"
                                        >
                                          <StoreLogo store={lowestStore} size="xs" showBorder={false} className="w-3 h-3 rounded-xs shrink-0" />
                                          <span>{lowestStore.name} ৳{minPrice}</span>
                                          <ExternalLink className="w-2.5 h-2.5 text-emerald-600 dark:text-emerald-400" />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center bg-white dark:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-700 p-0.5 shrink-0">
                                  <button
                                    onClick={() => onRemove(product)}
                                    className="w-6 h-6 flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-700 rounded-lg active:scale-90 cursor-pointer"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="w-6 text-center font-bold text-xs text-slate-900 dark:text-zinc-100">
                                    {quantity}
                                  </span>
                                  <button
                                    onClick={() => onAdd(product)}
                                    className="w-6 h-6 flex items-center justify-center text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-zinc-700 rounded-lg active:scale-90 cursor-pointer"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Payment Offers Pills */}
                        <div className="pt-2 border-t border-slate-100 dark:border-zinc-800">
                          <span className="text-xs font-bold text-slate-700 dark:text-zinc-300 block mb-2 flex items-center gap-1.5">
                            <CreditCard className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span>{t.paymentDiscounts}</span>
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {PAYMENT_OFFERS.slice(0, 2).map(offer => {
                              const isSelected = selectedOffer?.id === offer.id;
                              return (
                                <button
                                  key={offer.id}
                                  onClick={() => setSelectedOffer(isSelected ? null : offer)}
                                  className={`p-2 rounded-xl border text-left text-xs font-semibold transition cursor-pointer ${
                                    isSelected 
                                      ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 ring-1 ring-emerald-600' 
                                      : 'border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700'
                                  }`}
                                >
                                  <span className="font-bold block">{offer.provider}</span>
                                  <span className="text-[10px] text-slate-500 dark:text-zinc-400 line-clamp-1">{offer.titleBn}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Best Single Store Card */}
                        {bestSingleStore && (
                          <div className="bg-zinc-950 dark:bg-zinc-950/95 rounded-3xl p-5 text-white border border-zinc-800 shadow-premium-card relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="flex items-center justify-between text-xs mb-3">
                              <span className="font-extrabold uppercase tracking-widest text-[9px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-heading">
                                <Sparkles className="w-3 h-3 text-emerald-400" />
                                <span>{t.bestSingleStore}</span>
                              </span>
                              <span className="text-zinc-400 font-medium text-[11px]">
                                {bestSingleStore.store.deliveryTime}
                              </span>
                            </div>

                            <div className="flex items-center justify-between mb-3.5">
                              <div className="flex items-center gap-3">
                                <StoreLogo store={bestSingleStore.store} size="lg" className="rounded-2xl shadow-md border border-white/10" />
                                <div>
                                  <h4 className="font-bold text-lg leading-tight font-heading">
                                    {lang === 'bn' ? bestSingleStore.store.nameBn : bestSingleStore.store.name}
                                  </h4>
                                  <span className="text-[11px] text-zinc-400 font-medium">
                                    {bestSingleStore.store.deliveryTime}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-2xl font-black font-heading text-emerald-400 tracking-tight">৳{bestSingleStore.netTotal}</span>
                              </div>
                            </div>

                            <div className="text-xs text-zinc-300 space-y-1.5 pt-3 border-t border-zinc-800/80 mb-4">
                              <div className="flex justify-between text-[11px]">
                                <span className="text-zinc-400">পণ্যের মোট মূল্য:</span>
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
                              className="w-full bg-white dark:bg-emerald-600 text-emerald-800 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-500 active:scale-98 font-black py-3 rounded-2xl transition flex items-center justify-center gap-2 text-xs shadow-md"
                            >
                              <StoreLogo store={bestSingleStore.store} size="xs" showBorder={false} className="w-4 h-4 rounded-xs shrink-0" />
                              <span>{bestSingleStore.store.name}-এ সরাসরি অর্ডার করুন</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        )}

                        {/* Split Cart Hint */}
                        {splitRecommendation?.isSplitBetter && (
                          <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl text-xs text-amber-900 dark:text-amber-200 space-y-2">
                            <div className="font-bold flex items-center gap-1 text-amber-800 dark:text-amber-300">
                              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                              <span>{t.splitCartTitle}</span>
                              <span className="ml-auto font-black text-emerald-700 dark:text-emerald-300 bg-amber-200/80 dark:bg-amber-900/60 px-2 py-0.5 rounded-full text-[10px]">
                                +৳{splitRecommendation.splitSavings} সাশ্রয়
                              </span>
                            </div>
                            <p className="text-[11px] text-amber-800 dark:text-amber-300/90 leading-tight">
                              {lang === 'bn' 
                                ? 'আলাদা ২টি স্টোর থেকে ভাঙিয়ে কিনলে ডেলিভারি খরচ দিয়েও কম পড়বে।' 
                                : 'Ordering split items from 2 stores saves more even with delivery charges.'}
                            </p>
                          </div>
                        )}

                        {/* Store Comparison Table */}
                        <div className="bg-slate-50 dark:bg-zinc-800/60 rounded-2xl p-3 border border-slate-200/80 dark:border-zinc-800 text-xs">
                          <h4 className="font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider text-[11px] mb-2">
                            {t.allStoresComparison}
                          </h4>
                          <div className="divide-y divide-slate-100 dark:divide-zinc-700/60">
                            {Object.entries(storeSummaries).map(([storeKey, summary]) => (
                              <div key={storeKey} className="py-2 flex items-center justify-between">
                                <div className="font-semibold text-slate-800 dark:text-zinc-200 flex items-center gap-2">
                                  <StoreLogo store={summary.store} size="sm" className="rounded-md shadow-2xs border border-slate-100 dark:border-zinc-700" />
                                  <span>{summary.store.name}</span>
                                </div>
                                <div className="text-right">
                                  <span className="font-bold text-slate-900 dark:text-zinc-100">৳{summary.netTotal}</span>
                                  <span className="text-[10px] text-slate-400 dark:text-zinc-500 block">
                                    ({summary.deliveryFee === 0 ? t.freeDelivery : `+৳${summary.deliveryFee} ফি`})
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Bottom Fixed Action Buttons */}
              {offlineItems.length > 0 && (
                <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800 space-y-2 safe-bottom">
                  {bagMode === 'offline' ? (
                    /* Offline Bazaar Action: Complete Bazaar & Record Expense */
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={handleCompleteBazaar}
                        className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs tracking-wide shadow-lg shadow-emerald-600/30 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                        <span>
                          {lang === 'bn' 
                            ? `বাজার সম্পন্ন করুন ও খরচ সেভ করুন (৳${(totalBought > 0 ? totalBought : totalBudget).toLocaleString('bn-BD')})`
                            : `Complete Bazaar & Save Expense (৳${totalBought > 0 ? totalBought : totalBudget})`}
                        </span>
                      </button>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={handleShareWhatsApp}
                          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 text-xs font-bold transition border border-slate-200 dark:border-zinc-700 cursor-pointer"
                        >
                          <Share2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>হোয়াটসঅ্যাপ ফর্দ</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleCopyBag}
                          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 text-xs font-bold transition border border-slate-200 dark:border-zinc-700 cursor-pointer"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? t.copied : 'কপি করুন'}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Online Actions */
                    <>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={handleShareWhatsApp}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold transition border border-emerald-300 dark:border-emerald-800 cursor-pointer"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                          <span>হোয়াটসঅ্যাপ</span>
                        </button>
                        <button
                          onClick={handleCopyBag}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-white dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 text-xs font-bold transition border border-slate-200 dark:border-zinc-700 cursor-pointer"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copied ? t.copied : t.copyBag}</span>
                        </button>
                      </div>

                      <button
                        onClick={handleSaveBag}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-200/80 dark:bg-zinc-800 hover:bg-slate-300 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 text-xs font-bold transition cursor-pointer"
                      >
                        {bagSaved ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <BookmarkPlus className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />}
                        <span>{bagSaved ? (lang === 'bn' ? 'ব্যাগ সেভ হয়েছে!' : 'Bag Saved!') : t.saveCurrentBag}</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </>
          )}

          {/* TAB 2: EXPENSE HISTORY & MONTHLY ANALYTICS */}
          {activeTab === 'history' && (
            <div className="flex-1 overflow-y-auto p-3.5 sm:p-5">
              <BazaarExpenseHistory 
                onRestoreTripToBag={handleRestoreTripToBag}
                onClose={onClose}
              />
            </div>
          )}

        </div>
      </div>

      {/* Completion Modal: Prompt to Clear Bag or Keep Items */}
      {showCompletionModal && (
        <div 
          className="fixed inset-0 z-60 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setShowCompletionModal(false)}
        >
          <div 
            className="w-full max-w-sm rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-2xl space-y-4 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="font-extrabold text-base text-zinc-950 dark:text-zinc-50 font-heading">
                {lang === 'bn' ? 'বাজারের খরচ সফলভাবে সংরক্ষিত!' : 'Bazaar Expense Saved!'}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {lang === 'bn' 
                  ? `আজকের বাজারের মোট ৳${savedTripData?.totalAmount?.toLocaleString('bn-BD')} টাকা আপনার মাসিক খরচের খতিয়ানে যোগ করা হয়েছে।`
                  : `Total ৳${savedTripData?.totalAmount} has been added to your monthly expense record.`}
              </p>
            </div>

            {/* Clear Bag Question */}
            <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-750 text-center space-y-1">
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 block">
                {lang === 'bn' ? 'আজকের ফর্দ খালি করতে চান?' : 'Clear bag for next market trip?'}
              </span>
              <span className="text-[11px] text-zinc-400 block">
                {lang === 'bn' ? 'পরের বাজারের জন্য নতুন তালিকা তৈরি করতে পারবেন।' : 'Ready to start fresh next time.'}
              </span>
            </div>

            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={() => handleClearAfterComplete(true)}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition active:scale-98 cursor-pointer"
              >
                {lang === 'bn' ? 'হ্যাঁ, ফর্দ খালি করুন' : 'Yes, Clear Bag'}
              </button>

              <button
                type="button"
                onClick={() => handleClearAfterComplete(false)}
                className="w-full py-2.5 rounded-2xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-xs transition active:scale-98 cursor-pointer"
              >
                {lang === 'bn' ? 'না, ফর্দ রেখে দিন' : 'No, Keep Items'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
