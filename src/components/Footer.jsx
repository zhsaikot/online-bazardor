import React from 'react';
import { ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import BazarDorLogo from './BazarDorLogo';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="mt-16 bg-white dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800/80 pt-12 pb-20 lg:pb-12 text-slate-600 dark:text-zinc-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <BazarDorLogo size="sm" />
              <span className="text-lg font-heading font-black text-slate-900 dark:text-zinc-100 tracking-tight">
                {t.brandName}<span className="text-emerald-600 dark:text-emerald-400">{t.brandAccent}</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-zinc-400 text-xs leading-relaxed max-w-md">
              {t.footerText}
            </p>
            <p className="text-[11px] text-slate-400 dark:text-zinc-500">
              {t.tcbDisclaimer}
            </p>
          </div>

          {/* Connected Stores */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider mb-3 text-xs font-heading">
              {lang === 'bn' ? 'সংযুক্ত সুপারশপ' : 'Supported Stores'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://chaldal.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 transition">চালডাল (Chaldal) <ExternalLink className="w-3 h-3 text-slate-400 dark:text-zinc-500" /></a></li>
              <li><a href="https://shwapno.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 transition">স্বপ্ন (Shwapno) <ExternalLink className="w-3 h-3 text-slate-400 dark:text-zinc-500" /></a></li>
              <li><a href="https://www.daraz.com.bd/groceries/" target="_blank" rel="noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 transition">দারাজ মার্ট (Daraz Mart) <ExternalLink className="w-3 h-3 text-slate-400 dark:text-zinc-500" /></a></li>
              <li><a href="https://cartup.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 transition">কার্টআপ (Cartup) <ExternalLink className="w-3 h-3 text-slate-400 dark:text-zinc-500" /></a></li>
              <li><a href="https://princebazarbd.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 flex items-center gap-1 transition">প্রিন্স বাজার (Prince Bazar) <ExternalLink className="w-3 h-3 text-slate-400 dark:text-zinc-500" /></a></li>
            </ul>
          </div>

          {/* Quick links & Contact */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider mb-3 text-xs font-heading">
              {lang === 'bn' ? 'দর নির্দেশিকা' : 'Price Index'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-500 dark:text-zinc-400">
              <li><span>কারওয়ান বাজার পাইকারি দর</span></li>
              <li><span>টিসিবি দৈনিক মনিটরিং</span></li>
              <li><span>ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর</span></li>
              <li><span>প্রাইস ট্র্যাকার এপিআই</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} বাজারদর (BazarDor). সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Created by</span>
            <a 
              href="https://mdziaulhasan.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline transition inline-flex items-center gap-1"
            >
              MD. Ziaul Hasan
              <ExternalLink className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
