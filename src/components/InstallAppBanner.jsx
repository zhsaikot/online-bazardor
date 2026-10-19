import React from 'react';
import { Download, X, Smartphone, Share, PlusSquare, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { usePWA } from '../context/PWAContext';
import { useLanguage } from '../context/LanguageContext';

export default function InstallAppBanner() {
  const { 
    isStandalone, 
    showInstallBanner, 
    dismissBanner, 
    promptInstall, 
    isIOS,
    showIOSGuide,
    setShowIOSGuide
  } = usePWA();
  const { lang } = useLanguage();

  // If already running inside installed standalone app, never render
  if (isStandalone) return null;

  return (
    <>
      {/* Floating Mobile/Desktop Banner */}
      {showInstallBanner && (
        <aside 
          aria-label="Install BazarDor Application"
          className="fixed bottom-20 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-2 border-emerald-500/40 dark:border-emerald-500/30 p-3.5 sm:p-4 shadow-2xl shadow-emerald-950/20 text-zinc-900 dark:text-zinc-100">
            {/* Ambient emerald subtle glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-start gap-3.5 relative z-10">
              {/* App Icon */}
              <div className="relative shrink-0">
                <img 
                  src="/icons/icon-192.png" 
                  alt="BazarDor App Icon" 
                  className="w-12 h-12 rounded-xl shadow-md border border-emerald-500/20 object-cover"
                />
                <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border-2 border-white dark:border-zinc-900 items-center justify-center">
                    <Sparkles className="w-2 h-2 text-white" />
                  </span>
                </span>
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0 pr-5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="font-extrabold text-sm text-zinc-950 dark:text-zinc-50 leading-tight">
                    {lang === 'bn' ? 'বাজারদর অ্যাপ ইনস্টল করুন' : 'Install BazarDor App'}
                  </h4>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    PWA Fast
                  </span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                  {lang === 'bn' 
                    ? 'হোম স্ক্রিনে রাখুন, কোনো ব্রাউজার বার ছাড়াই লাইভ বাজারদর দেখুন।'
                    : 'Add to home screen for 1-tap grocery prices and offline access.'}
                </p>

                {/* Action Buttons */}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={promptInstall}
                    className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/30 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>{lang === 'bn' ? 'ইনস্টল করুন' : 'Install Now'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={dismissBanner}
                    className="px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-semibold transition active:scale-95 cursor-pointer"
                  >
                    {lang === 'bn' ? 'পরে' : 'Later'}
                  </button>
                </div>
              </div>

              {/* Close Button X */}
              <button
                type="button"
                onClick={dismissBanner}
                aria-label="Close install banner"
                className="absolute top-0 right-0 p-1 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* iOS Safari Step-by-Step Installation Modal */}
      {showIOSGuide && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 animate-in fade-in duration-200"
          onClick={() => setShowIOSGuide(false)}
        >
          <div 
            className="w-full max-w-md rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-5 sm:p-6 shadow-2xl space-y-4 animate-in slide-in-from-bottom-6 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="/icons/icon-192.png" 
                  alt="BazarDor Icon" 
                  className="w-12 h-12 rounded-2xl shadow-md border border-emerald-500/20"
                />
                <div>
                  <h3 className="font-extrabold text-base text-zinc-900 dark:text-zinc-100">
                    {lang === 'bn' ? 'আইফোনে বাজারদর ইনস্টল করুন' : 'Install BazarDor on iOS'}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {lang === 'bn' ? 'সাফারি ব্রাউজারে ৩টি সহজ ধাপে যুক্ত করুন' : 'Follow 3 simple steps in Safari'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Visual Steps */}
            <div className="space-y-3 pt-2">
              {/* Step 1 */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-750 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Share className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block">
                    ১. সাফারির Share আইকনে চাপুন
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    স্ক্রিনের একদম নিচে মাঝখানের শেয়ার আইকনটি সিলেক্ট করুন
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-750 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <PlusSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block">
                    ২. "Add to Home Screen" চাপুন
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    শেয়ার শিট স্ক্রল করে "হোম স্ক্রিনে যোগ করুন" (+) বাটনে ক্লিক করুন
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-750 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block">
                    ৩. উপরে ডানে "Add" চাপুন
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    বাজারদর অফিসিয়াল অ্যাপ আইকন আপনার হোম স্ক্রিনে সেভ হয়ে যাবে!
                  </span>
                </div>
              </div>
            </div>

            {/* Confirm button */}
            <div className="pt-2">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md active:scale-98 transition cursor-pointer"
              >
                {lang === 'bn' ? 'বুঝেছি, ধন্যবাদ!' : 'Got it, thanks!'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
