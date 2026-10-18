import { ShoppingBag, MapPin, Sparkles, User, Globe, Search, LogOut, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

export default function Header({ 
  selectedLocation, 
  setSelectedLocation, 
  basketCount, 
  onOpenBag,
  searchQuery,
  setSearchQuery,
  onSearchOnline,
  isSearchingOnline
}) {
  const { lang, toggleLanguage, t } = useLanguage();
  const { user, openAuthModal, logout } = useAuth();

  const locations = [
    'ঢাকা - ধানমন্ডি',
    'ঢাকা - মিরপুর',
    'ঢাকা - গুলশান ও বনানী',
    'ঢাকা - উত্তরা',
    'ঢাকা - মোহাম্মদপুর',
    'চট্টগ্রাম - জিইসি'
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black text-slate-900 tracking-tight leading-none">
                {t.brandName}<span className="text-emerald-600">{t.brandAccent}</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Global Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg relative items-center">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
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
            className="w-full bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-emerald-600 rounded-2xl py-2.5 pl-10 pr-24 text-xs font-medium text-slate-900 placeholder:text-slate-400 outline-none transition shadow-2xs"
          />
          {searchQuery && (
            <div className="absolute right-2 flex items-center gap-1">
              <button
                type="button"
                onClick={() => onSearchOnline && onSearchOnline(searchQuery.trim())}
                disabled={isSearchingOnline}
                className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[10px] font-bold shadow-2xs transition disabled:opacity-50 cursor-pointer"
                title={t.searchOnline}
              >
                {isSearchingOnline ? '...' : (lang === 'bn' ? 'অনলাইন' : 'Live')}
              </button>
              <button 
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Location Selector */}
          <div className="flex items-center gap-1 bg-slate-100/90 text-slate-700 text-xs font-medium py-1.5 px-3 rounded-full border border-slate-200/80 transition">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent border-none outline-none text-xs font-semibold cursor-pointer pr-1 text-slate-800 max-w-[105px] sm:max-w-none truncate"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-1.5 px-2.5 rounded-full border border-slate-200 transition active:scale-95"
            title="Switch Language (বাং / EN)"
          >
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
          </button>

          {/* Auth Profile / Login Button */}
          {user ? (
            <div className="flex items-center gap-2 pl-1 border-l border-slate-200">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-8 h-8 rounded-full object-cover border border-emerald-500 ring-2 ring-emerald-100" 
              />
              <button
                onClick={logout}
                className="hidden sm:flex text-slate-400 hover:text-rose-600 p-1 rounded-lg"
                title={t.logout}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-2 px-3 rounded-2xl transition shadow-2xs active:scale-95"
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.login}</span>
            </button>
          )}

          {/* Bag Button (Desktop & Mobile Shortcut) */}
          <button
            onClick={onOpenBag}
            className="relative flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs transition border border-emerald-200 active:scale-95"
            aria-label={t.myBag}
          >
            <ShoppingBag className="w-4 h-4 text-emerald-700" />
            <span className="hidden sm:inline">{t.myBag}</span>
            {basketCount > 0 && (
              <span className="min-w-5 h-5 px-1.5 rounded-full bg-emerald-600 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                {basketCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
