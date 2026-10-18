import React from 'react';
import { Store, ShoppingBag, Tag, TrendingDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BottomNav({ activeTab, setActiveTab, basketCount }) {
  const { lang, t } = useLanguage();

  const tabs = [
    {
      id: 'catalog',
      label: t.catalogTab,
      icon: Store,
    },
    {
      id: 'basket',
      label: t.myBag,
      icon: ShoppingBag,
      badge: basketCount > 0 ? basketCount : null
    },
    {
      id: 'deals',
      label: t.dealsTab,
      icon: Tag,
      hasDot: true
    },
    {
      id: 'daily',
      label: t.dailyRatesTab,
      icon: TrendingDown,
    }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-slate-200/90 dark:border-zinc-800/90 shadow-lg safe-bottom transition-colors">
      <div className="max-w-md mx-auto grid grid-cols-4 px-2 py-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-150 relative ${
                isActive 
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold' 
                  : 'text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'}`} />
                {tab.badge && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-4 h-4 px-1 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {tab.badge}
                  </span>
                )}
                {tab.hasDot && !tab.badge && (
                  <span className="absolute -top-0.5 -right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-zinc-950"></span>
                )}
              </div>
              <span className={`text-[10px] mt-1 tracking-tight leading-none ${isActive ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500 dark:text-zinc-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
