import React, { useState } from 'react';
import { 
  Calendar, ShoppingBag, TrendingUp, ChevronDown, ChevronUp, 
  Trash2, RotateCcw, CheckCircle2, Store, Sparkles, Receipt,
  ArrowRight, DollarSign, Wallet
} from 'lucide-react';
import { useBazaarExpense, formatMonthYear } from '../context/BazaarExpenseContext';
import { useLanguage } from '../context/LanguageContext';

export default function BazaarExpenseHistory({ onRestoreTripToBag, onClose }) {
  const { lang, t } = useLanguage();
  const { 
    history, 
    deleteBazaarTrip, 
    getMonthlySummary, 
    getWeeklyTotal, 
    availableMonths, 
    currentMonthKey 
  } = useBazaarExpense();

  const [selectedMonth, setSelectedMonth] = useState(currentMonthKey);
  const [expandedTripId, setExpandedTripId] = useState(null);
  const [restoredToast, setRestoredToast] = useState(false);

  const summary = getMonthlySummary(selectedMonth);
  const weeklyTotal = getWeeklyTotal();

  const toggleExpand = (id) => {
    setExpandedTripId(prev => prev === id ? null : id);
  };

  const handleRestore = (trip) => {
    if (onRestoreTripToBag) {
      onRestoreTripToBag(trip.items);
      setRestoredToast(true);
      setTimeout(() => setRestoredToast(false), 2500);
    }
  };

  return (
    <div className="space-y-4">
      {/* Month Selector Bar */}
      <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-750">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
            {lang === 'bn' ? 'মাসের খতিয়ান:' : 'Select Month:'}
          </span>
        </div>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-1.5 text-xs font-bold text-zinc-900 dark:text-zinc-100 outline-none focus:border-emerald-600 cursor-pointer shadow-2xs"
        >
          {availableMonths.map(m => (
            <option key={m.key} value={m.key}>
              {lang === 'bn' ? m.labelBn : m.labelEn}
            </option>
          ))}
        </select>
      </div>

      {/* Monthly Statistics Overview Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        {/* Main Monthly Total */}
        <div className="col-span-2 p-4 rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white shadow-lg shadow-emerald-950/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between text-xs text-emerald-100 mb-1 font-medium">
            <span className="flex items-center gap-1.5">
              <Wallet className="w-3.5 h-3.5" />
              <span>{formatMonthYear(selectedMonth, lang)} - মোট বাজার খরচ</span>
            </span>
            <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
              {summary.tripsCount} টি ট্রিপ
            </span>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-3xl font-black font-heading tracking-tight">
              ৳{summary.totalAmount.toLocaleString('bn-BD')}
            </span>
            <span className="text-xs text-emerald-200">মোট খরচ</span>
          </div>

          {/* Breakdown Pills */}
          <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-emerald-100">
            <div>
              <span>অফলাইন কাঁচাবাজার: </span>
              <strong className="text-white">৳{summary.offlineAmount.toLocaleString('bn-BD')}</strong>
            </div>
            <div>
              <span>অনলাইন অর্ডার: </span>
              <strong className="text-white">৳{summary.onlineAmount.toLocaleString('bn-BD')}</strong>
            </div>
          </div>
        </div>

        {/* Weekly Spend Card */}
        <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block mb-1">
            {lang === 'bn' ? 'চলতি সপ্তাহের খরচ (৭ দিন)' : 'Last 7 Days Spend'}
          </span>
          <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 font-heading">
            ৳{weeklyTotal.toLocaleString('bn-BD')}
          </span>
        </div>

        {/* Average Spend per Trip */}
        <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800">
          <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400 block mb-1">
            {lang === 'bn' ? 'গড় প্রতি ট্রিপ খরচ' : 'Avg Spend / Trip'}
          </span>
          <span className="text-lg font-black text-zinc-900 dark:text-zinc-100 font-heading">
            ৳{summary.tripsCount > 0 
              ? Math.round(summary.totalAmount / summary.tripsCount).toLocaleString('bn-BD') 
              : 0}
          </span>
        </div>
      </div>

      {restoredToast && (
        <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{lang === 'bn' ? 'ট্রিপের আইটেমগুলো নতুন ব্যাগে লোড করা হয়েছে!' : 'Items restored into current bag!'}</span>
        </div>
      )}

      {/* Trips Timeline List */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
          <Receipt className="w-3.5 h-3.5 text-emerald-600" />
          <span>{lang === 'bn' ? 'বাজারের ট্রিপ তালিকা' : 'Past Market Trips'}</span>
        </h4>

        {summary.trips.length === 0 ? (
          <div className="py-12 text-center space-y-2.5 rounded-3xl bg-zinc-50 dark:bg-zinc-800/40 border border-dashed border-zinc-300 dark:border-zinc-700/80 p-6">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 flex items-center justify-center mx-auto">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h5 className="font-bold text-xs text-zinc-800 dark:text-zinc-200">
              {lang === 'bn' ? 'এই মাসে কোনো বাজার সম্পন্ন করা হয়নি' : 'No recorded trips for this month'}
            </h5>
            <p className="text-[11px] text-zinc-400 max-w-xs mx-auto leading-relaxed">
              {lang === 'bn' 
                ? 'কাঁচাবাজারে গিয়ে ব্যাগ থেকে "বাজার সম্পন্ন করুন ও খরচ সেভ করুন" চাপলে এখানে স্বয়ংক্রিয়ভাবে খতিয়ান যুক্ত হবে।'
                : 'Complete a bazaar trip from your bag to see your expense receipt and analytics here.'}
            </p>
          </div>
        ) : (
          <div className="space-y-2.5">
            {summary.trips.map(trip => {
              const isExpanded = expandedTripId === trip.id;
              return (
                <div 
                  key={trip.id}
                  className="rounded-2xl bg-white dark:bg-zinc-850 border border-zinc-200/80 dark:border-zinc-750 shadow-2xs overflow-hidden transition hover:border-emerald-500/40"
                >
                  {/* Trip Header Row */}
                  <div 
                    onClick={() => toggleExpand(trip.id)}
                    className="p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        trip.mode === 'offline' 
                          ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300' 
                          : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                      }`}>
                        {trip.mode === 'offline' ? <Store className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-xs text-zinc-950 dark:text-zinc-50 font-heading">
                            {trip.displayDate || new Date(trip.date).toLocaleDateString('bn-BD')}
                          </span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                            trip.mode === 'offline'
                              ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300'
                              : 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300'
                          }`}>
                            {trip.mode === 'offline' ? 'অফলাইন বাজার' : 'অনলাইন'}
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-400 block mt-0.5">
                          {trip.storeName || 'কাঁচাবাজার'} • {trip.itemsCount || trip.items?.length || 0} টি আইটেম {trip.displayTime ? `• ${trip.displayTime}` : ''}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-sm font-black font-heading text-emerald-700 dark:text-emerald-400">
                        ৳{Number(trip.totalAmount).toLocaleString('bn-BD')}
                      </span>
                      <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Items Receipt */}
                  {isExpanded && (
                    <div className="p-3.5 pt-0 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-3">
                      <div className="pt-2 divide-y divide-zinc-200/60 dark:divide-zinc-800/60 text-xs">
                        {trip.items && trip.items.map((it, idx) => (
                          <div key={idx} className="py-2 flex items-center justify-between gap-2">
                            <div className="min-w-0">
                              <span className="font-bold text-zinc-800 dark:text-zinc-200 block truncate">
                                {it.name}
                              </span>
                              <span className="text-[10px] text-zinc-400 block">
                                {it.unit} x {it.quantity} {it.isCustom ? '(কাস্টম যোগ)' : ''}
                              </span>
                            </div>
                            <div className="text-right shrink-0">
                              <span className="font-extrabold text-zinc-900 dark:text-zinc-100 block">
                                ৳{(Number(it.boughtPrice) * Number(it.quantity)).toLocaleString('bn-BD')}
                              </span>
                              {it.originalPrice > 0 && it.originalPrice !== it.boughtPrice && (
                                <span className="text-[10px] text-zinc-400 line-through block">
                                  ৳{(it.originalPrice * it.quantity).toLocaleString('bn-BD')}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Bar for this trip */}
                      <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2">
                        {onRestoreTripToBag && (
                          <button
                            type="button"
                            onClick={() => handleRestore(trip)}
                            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition active:scale-95 cursor-pointer shadow-2xs"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>{lang === 'bn' ? 'ফর্দে লোড করুন' : 'Load to Bag'}</span>
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => {
                            if (window.confirm(lang === 'bn' ? 'এই বাজার ট্রিপটি মুছে ফেলতে চান?' : 'Delete this bazaar trip?')) {
                              deleteBazaarTrip(trip.id);
                            }
                          }}
                          className="px-2.5 py-1.5 rounded-xl text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold transition cursor-pointer flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>{lang === 'bn' ? 'মুছে ফেলুন' : 'Delete'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
