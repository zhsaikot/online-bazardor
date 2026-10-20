import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

          // Appears when scrolled down more than 10% of page height (or > 180px threshold)
          if (scrollableHeight > 0) {
            setIsVisible(scrollY / scrollableHeight > 0.1);
          } else {
            setIsVisible(scrollY > 180);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-36 right-4 sm:bottom-24 sm:right-7 z-40 transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={lang === 'bn' ? 'পেজের শীর্ষে ফিরে যান' : 'Scroll back to top'}
        title={lang === 'bn' ? 'উপরে যান' : 'Scroll to top'}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg shadow-zinc-900/15 dark:shadow-black/40 border border-zinc-200/90 dark:border-zinc-700/80 hover:border-emerald-500/80 dark:hover:border-emerald-500/80 text-zinc-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ring-1 ring-black/5 dark:ring-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.3] transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
