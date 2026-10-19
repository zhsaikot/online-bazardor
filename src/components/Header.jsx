import { ShoppingBag, MapPin, User, Globe, Search, LogOut, X, Sun, Moon, Settings, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { usePWA } from '../context/PWAContext';
import BazarDorLogo from './BazarDorLogo';

export default function Header({ 
  selectedLocation, 
  setSelectedLocation, 
  basketCount, 
  onOpenBag,
  searchQuery,
  setSearchQuery,
  onSearchOnline,
  isSearchingOnline,
  onOpenVisualSearch
}) {
  const { lang, toggleLanguage, t } = useLanguage();
  const { user, openAuthModal, openProfileModal, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const { isStandalone, promptInstall } = usePWA();

  const locations = [
    'ঢাকা - ধানমন্ডি',
    'ঢাকা - মিরপুর',
    'ঢাকা - গুলশান ও বনানী',
    'ঢাকা - উত্তরা',
    'ঢাকা - মোহাম্মদপুর',
    'চট্টগ্রাম - জিইসি'
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/80 shadow-premium-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <BazarDorLogo size="md" />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-xl font-heading font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight leading-none">
                {t.brandName}<span className="text-emerald-600 dark:text-emerald-400">{t.brandAccent}</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium hidden sm:block mt-0.5">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Global Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg relative items-center group">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 pointer-events-none group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && searchQuery.trim() && onSearchOnline) {
                onSearchOnline(searchQuery.trim());
              }
            }}
            placeholder={t.searchPlaceholder}
            className="w-full bg-zinc-100/70 dark:bg-zinc-900/80 hover:bg-zinc-100/90 dark:hover:bg-zinc-900 focus:bg-white dark:focus:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-700/80 focus:border-zinc-300 dark:focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl py-2.5 pl-10 pr-28 text-xs font-medium text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none transition-all duration-200 shadow-2xs"
          />
          <div className="absolute right-2 flex items-center gap-1">
            {searchQuery ? (
              <>
                <button
                  type="button"
                  onClick={() => onSearchOnline && onSearchOnline(searchQuery.trim())}
                  disabled={isSearchingOnline}
                  className="px-2.5 py-1 bg-zinc-900 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 active:scale-95 text-white rounded-xl text-[10px] font-bold shadow-2xs transition disabled:opacity-50 cursor-pointer"
                  title={t.searchOnline}
                >
                  {isSearchingOnline ? '...' : (lang === 'bn' ? 'অনলাইন' : 'Live')}
                </button>
                <button 
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </>
            ) : null}
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Location Selector */}
          <div className="flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 text-[11px] sm:text-xs font-medium py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full border border-zinc-200/70 dark:border-zinc-800 transition max-w-[95px] xs:max-w-[125px] sm:max-w-none">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent border-none outline-none text-[11px] sm:text-xs font-bold cursor-pointer pr-0.5 text-zinc-800 dark:text-zinc-200 w-full truncate"
            >
              {locations.map(loc => (
                <option key={loc} value={loc} className="dark:bg-zinc-900 dark:text-zinc-200">{loc}</option>
              ))}
            </select>
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center p-1.5 sm:py-1.5 sm:px-2.5 rounded-full bg-zinc-100/80 hover:bg-zinc-200/80 dark:bg-zinc-900/80 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200/70 dark:border-zinc-800 transition-all duration-200 active:scale-95 shrink-0 cursor-pointer shadow-2xs"
            title={isDark ? (lang === 'bn' ? 'লাইট মোড চালু করুন' : 'Switch to Light Mode') : (lang === 'bn' ? 'ডার্ক মোড চালু করুন' : 'Switch to Dark Mode')}
            aria-label="Toggle dark/light theme"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-[11px] sm:text-xs py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full border border-zinc-200/70 dark:border-zinc-800 transition active:scale-95 shrink-0 cursor-pointer shadow-2xs"
            title="Switch Language (বাং / EN)"
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="hidden sm:inline">{lang === 'bn' ? 'English' : 'বাংলা'}</span>
            <span className="sm:hidden">{lang === 'bn' ? 'EN' : 'বাং'}</span>
          </button>

          {/* Desktop Install App Button (When not running in standalone mode) */}
          {!isStandalone && (
            <button
              onClick={promptInstall}
              className="hidden lg:flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-bold text-xs py-1.5 px-3 rounded-full border border-emerald-300/80 dark:border-emerald-800 transition active:scale-95 shrink-0 cursor-pointer shadow-2xs"
              title={lang === 'bn' ? 'বাজারদর অ্যাপ ইনস্টল করুন' : 'Install BazarDor App'}
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{lang === 'bn' ? 'অ্যাপ ইনস্টল' : 'Install App'}</span>
            </button>
          )}

          {/* Auth Profile / Login Button */}
          {user ? (
            <div className="flex items-center gap-1.5 pl-1 border-l border-zinc-200 dark:border-zinc-800 shrink-0">
              <button
                onClick={openProfileModal}
                className="flex items-center gap-1.5 p-0.5 rounded-full hover:ring-2 hover:ring-emerald-500/30 transition group cursor-pointer"
                title={lang === 'bn' ? 'প্রোফাইল ও সেটিংস' : 'Profile & Settings'}
              >
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-emerald-500 ring-2 ring-emerald-100/80 dark:ring-emerald-950/80 group-hover:scale-105 transition-transform" 
                />
              </button>
              <button
                onClick={openProfileModal}
                className="hidden lg:flex flex-col text-left cursor-pointer"
                title={lang === 'bn' ? 'প্রোফাইল ও সেটিংস' : 'Profile & Settings'}
              >
                <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight truncate max-w-[85px]">
                  {user.name.split(' ')[0]}
                </span>
                <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold leading-none">
                  {lang === 'bn' ? 'সেটিংস' : 'Settings'}
                </span>
              </button>
              <button
                onClick={logout}
                className="hidden sm:flex text-zinc-400 dark:text-zinc-500 hover:text-rose-600 dark:hover:text-rose-400 p-1 rounded-lg transition"
                title={t.logout}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-1 pl-1 border-l border-zinc-200 dark:border-zinc-800 shrink-0">
              <button
                onClick={openAuthModal}
                className="flex items-center gap-1 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white active:scale-95 text-white dark:text-zinc-950 font-bold text-xs p-1.5 sm:py-1.5 sm:px-3 rounded-full transition shadow-premium-sm shrink-0 cursor-pointer"
                title={t.login}
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.login}</span>
              </button>
              <button
                onClick={openProfileModal}
                className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
                title={lang === 'bn' ? 'অ্যাপ সেটিংস' : 'App Settings'}
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Bag Button */}
          <button
            onClick={onOpenBag}
            className="hidden sm:flex relative items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-bold text-xs transition shadow-premium-sm active:scale-95 shrink-0 cursor-pointer border border-transparent dark:border-zinc-700"
            aria-label={t.myBag}
          >
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
            <span>{t.myBag}</span>
            {basketCount > 0 && (
              <span className="min-w-5 h-5 px-1.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black flex items-center justify-center shadow-xs">
                {basketCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
