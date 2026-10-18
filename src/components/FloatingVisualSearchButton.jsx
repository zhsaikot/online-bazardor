import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingVisualSearchButton({ onOpen }) {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-7 sm:right-7 z-40 flex items-center group">
      {/* Outer Pulse Animation Glow */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm animate-pulse group-hover:bg-emerald-500/50 transition duration-300" />
      
      {/* Radar Ping Dot */}
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 z-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-zinc-900" />
      </span>

      {/* Main Floating Button */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={lang === 'bn' ? 'ক্যামেরা দিয়ে পণ্য স্ক্যান করুন' : 'Scan product with AI Camera'}
        className="relative flex items-center gap-2.5 px-4 py-3 sm:px-4.5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black shadow-xl shadow-emerald-600/35 hover:shadow-emerald-500/55 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-emerald-300/30 ring-2 ring-white/20"
      >
        <div className="relative">
          <Camera className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white stroke-[2.2]" />
          <Sparkles className="w-2.5 h-2.5 text-amber-300 absolute -top-1 -right-1 animate-spin duration-3000" />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-[13px] font-black tracking-tight leading-none">
            {lang === 'bn' ? 'AI স্ক্যানার' : 'AI Lens'}
          </span>
          <span className="text-[9px] font-medium text-emerald-100/90 leading-tight hidden xs:inline">
            {lang === 'bn' ? 'ছবি তুলে দাম খুঁজুন' : 'Scan & Compare'}
          </span>
        </div>
      </button>
    </div>
  );
}
