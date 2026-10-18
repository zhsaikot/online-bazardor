import { ShoppingBag, MapPin, User, Globe, Search, LogOut, X, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
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
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-zinc-200/60 shadow-premium-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <BazarDorLogo size="md" />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base sm:text-xl font-heading font-extrabold text-zinc-950 tracking-tight leading-none">
                {t.brandName}<span className="text-emerald-600">{t.brandAccent}</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/80">
                PRO
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 font-medium hidden sm:block mt-0.5">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Global Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg relative items-center group">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none group-focus-within:text-emerald-600 transition-colors" />
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
            className="w-full bg-zinc-100/70 hover:bg-zinc-100/90 focus:bg-white border border-zinc-200/80 focus:border-zinc-300 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl py-2.5 pl-10 pr-28 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 shadow-2xs"
          />
          <div className="absolute right-2 flex items-center gap-1">
            {searchQuery ? (
              <>
                <button
                  type="button"
                  onClick={() => onSearchOnline && onSearchOnline(searchQuery.trim())}
                  disabled={isSearchingOnline}
                  className="px-2.5 py-1 bg-zinc-900 hover:bg-emerald-700 active:scale-95 text-white rounded-xl text-[10px] font-bold shadow-2xs transition disabled:opacity-50 cursor-pointer"
                  title={t.searchOnline}
                >
                  {isSearchingOnline ? '...' : (lang === 'bn' ? 'অনলাইন' : 'Live')}
                </button>
                <button 
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-zinc-400 hover:text-zinc-700 transition"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </>
            ) : null}
            <button
              type="button"
              onClick={onOpenVisualSearch}
              className="p-1.5 rounded-xl bg-white hover:bg-zinc-50 text-zinc-700 hover:text-emerald-700 border border-zinc-200 transition flex items-center gap-1 cursor-pointer shadow-premium-sm active:scale-95 group/cam"
              title={t.visualSearch}
            >
              <Camera className="w-3.5 h-3.5 text-zinc-500 group-hover/cam:text-emerald-600 transition" />
              <span className="hidden lg:inline text-[10px] font-bold">{t.visualSearch}</span>
            </button>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Location Selector */}
          <div className="flex items-center gap-1 bg-zinc-100/80 hover:bg-zinc-100 text-zinc-800 text-[11px] sm:text-xs font-medium py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full border border-zinc-200/70 transition max-w-[95px] xs:max-w-[125px] sm:max-w-none">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-transparent border-none outline-none text-[11px] sm:text-xs font-bold cursor-pointer pr-0.5 text-zinc-800 w-full truncate"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 bg-zinc-100/80 hover:bg-zinc-200/80 text-zinc-800 font-bold text-[11px] sm:text-xs py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-full border border-zinc-200/70 transition active:scale-95 shrink-0 cursor-pointer"
            title="Switch Language (বাং / EN)"
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500" />
            <span className="hidden sm:inline">{lang === 'bn' ? 'English' : 'বাংলা'}</span>
            <span className="sm:hidden">{lang === 'bn' ? 'EN' : 'বাং'}</span>
          </button>

          {/* Auth Profile / Login Button */}
          {user ? (
            <div className="flex items-center gap-1.5 pl-1 border-l border-zinc-200 shrink-0">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-emerald-500 ring-2 ring-emerald-100/80" 
              />
              <button
                onClick={logout}
                className="hidden sm:flex text-zinc-400 hover:text-rose-600 p-1 rounded-lg transition"
                title={t.logout}
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center gap-1 bg-zinc-900 hover:bg-zinc-800 active:scale-95 text-white font-bold text-xs p-1.5 sm:py-1.5 sm:px-3 rounded-full transition shadow-premium-sm shrink-0 cursor-pointer"
              title={t.login}
            >
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.login}</span>
            </button>
          )}

          {/* Bag Button */}
          <button
            onClick={onOpenBag}
            className="hidden sm:flex relative items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs transition shadow-premium-sm active:scale-95 shrink-0 cursor-pointer"
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
