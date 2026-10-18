import React from 'react';
import { Sparkles, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="mt-16 bg-white border-t border-slate-200 pt-12 pb-20 lg:pb-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-lg font-black text-slate-900 tracking-tight">
                {t.brandName}<span className="text-emerald-600">{t.brandAccent}</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-md">
              {t.footerText}
            </p>
            <p className="text-[11px] text-slate-400">
              {t.tcbDisclaimer}
            </p>
          </div>

          {/* Connected Stores */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
              {lang === 'bn' ? 'সংযুক্ত সুপারশপ' : 'Supported Stores'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://chaldal.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 flex items-center gap-1">চালডাল (Chaldal) <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="https://shwapno.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 flex items-center gap-1">স্বপ্ন (Shwapno) <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="https://foodpanda.com.bd" target="_blank" rel="noreferrer" className="hover:text-emerald-700 flex items-center gap-1">পান্ডামার্ট (Pandamart) <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
              <li><a href="https://meenaclick.com" target="_blank" rel="noreferrer" className="hover:text-emerald-700 flex items-center gap-1">মীনা ক্লিক (Meena Click) <ExternalLink className="w-3 h-3 text-slate-400" /></a></li>
            </ul>
          </div>

          {/* Quick links & Contact */}
          <div>
            <h4 className="font-bold text-slate-900 uppercase tracking-wider mb-3 text-xs">
              {lang === 'bn' ? 'দর নির্দেশিকা' : 'Price Index'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-slate-500">কারওয়ান বাজার পাইকারি দর</span></li>
              <li><span className="text-slate-500">টিসিবি দৈনিক মনিটরিং</span></li>
              <li><span className="text-slate-500">ভোক্তা অধিকার সংরক্ষণ অধিদপ্তর</span></li>
              <li><span className="text-slate-500">প্রাইস ট্র্যাকার এপিআই</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} বাজারদর (BazarDor). সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-1">
            <span>বাংলাদেশি ক্রেতাদের জন্য সাশ্রয়ী কেনাকাটার প্ল্যাটফর্ম</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
