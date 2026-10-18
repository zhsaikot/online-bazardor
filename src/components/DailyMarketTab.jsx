import React from 'react';
import { TrendingDown, TrendingUp, Minus, Info, Calendar } from 'lucide-react';
import { DAILY_MARKET_INDEX } from '../data/paymentOffers';
import { useLanguage } from '../context/LanguageContext';

export default function DailyMarketTab() {
  const { lang, t } = useLanguage();

  const currentDate = new Date().toLocaleDateString(lang === 'bn' ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="space-y-6 pb-24 max-w-4xl mx-auto animate-fade-in">
      {/* Header Info Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-900 dark:from-emerald-900 dark:to-teal-950 rounded-3xl p-6 text-white shadow-lg shadow-emerald-900/10">
        <div className="flex items-center gap-1.5 text-xs text-emerald-200 mb-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{currentDate}</span>
        </div>
        <h2 className="text-2xl font-black mb-1.5 font-heading">
          {lang === 'bn' ? 'দৈনিক পাইকারি ও টিসিবি দর সূচক' : 'Daily Wholesale & TCB Price Index'}
        </h2>
        <p className="text-xs text-emerald-100/90 leading-relaxed max-w-xl">
          {lang === 'bn' 
            ? 'কৃষি বিপণন অধিদপ্তর ও পাইকারি বাজারের (কারওয়ান বাজার) সর্বশেষ দরের সাথে সুপারশপের তুলনা।' 
            : 'Benchmark daily retail rates against TCB fair price index and Karwan Bazar wholesale prices.'}
        </p>
      </div>

      {/* Market Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {DAILY_MARKET_INDEX.map(item => {
          return (
            <div 
              key={item.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-4.5 border border-slate-200 dark:border-zinc-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-600/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-zinc-100 font-heading">
                    {lang === 'bn' ? item.nameBn : item.nameEn}
                  </h3>
                  <span className="text-[11px] text-slate-400 dark:text-zinc-500">
                    {lang === 'bn' ? `পরিমাপ: ${item.unit}` : `Unit: ${item.unit}`}
                  </span>
                </div>
                
                {/* Trend Badge */}
                <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  item.trend === 'down' 
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300' 
                    : item.trend === 'up' 
                      ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300' 
                      : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300'
                }`}>
                  {item.trend === 'down' && <TrendingDown className="w-3 h-3 text-emerald-700 dark:text-emerald-400" />}
                  {item.trend === 'up' && <TrendingUp className="w-3 h-3 text-rose-700 dark:text-rose-400" />}
                  {item.trend === 'stable' && <Minus className="w-3 h-3 text-slate-500 dark:text-zinc-400" />}
                  <span>{item.trendText}</span>
                </span>
              </div>

              {/* Three Tier Price Breakdown */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-zinc-800/60 rounded-2xl p-2.5 text-center border border-slate-100 dark:border-zinc-700/60">
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-zinc-400 font-semibold block uppercase">TCB রেট</span>
                  <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">৳{item.tcbRate}</span>
                </div>
                <div className="border-x border-slate-200 dark:border-zinc-700 px-1">
                  <span className="text-[10px] text-slate-400 dark:text-zinc-400 font-semibold block uppercase">কারওয়ান বাজার</span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">৳{item.karwanBazarRate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 dark:text-zinc-400 font-semibold block uppercase">সুপারশপ গড়</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-zinc-100">৳{item.retailRateAvg}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Consumer Tips Alert */}
      <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-3xl p-4 flex gap-3 text-xs text-emerald-900 dark:text-emerald-200">
        <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>{lang === 'bn' ? 'স্মার্ট শপিং টিপস:' : 'Smart Shopping Tip:'}</strong> {lang === 'bn' 
            ? 'কাঁচাবাজারের শাক-সবজি ও মাছ সকালে স্থানীয় পাইকারি বাজারে অপেক্ষাকৃত তাজা ও সস্তা পাওয়া যায়, তবে চাল, তেল ও মসলা অনলাইনে ভাউচার ব্যবহারে বেশি সাশ্রয়ী হয়।' 
            : 'Fresh produce is often cheapest at early morning wholesale markets, whereas packaged oils and staples are cheaper online using digital payment vouchers.'}
        </p>
      </div>
    </div>
  );
}
