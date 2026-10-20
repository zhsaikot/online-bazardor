import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import DesktopSidebar from './components/DesktopSidebar';
import BagSlideOver from './components/BagSlideOver';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import VisualSearchModal from './components/VisualSearchModal';
import DealsTab from './components/DealsTab';
import DailyMarketTab from './components/DailyMarketTab';
import AuthModal from './components/AuthModal';
import ProfileSettingsModal from './components/ProfileSettingsModal';
import FloatingVisualSearchButton from './components/FloatingVisualSearchButton';
import ScrollToTop from './components/ScrollToTop';
import InstallAppBanner from './components/InstallAppBanner';
import Footer from './components/Footer';
import { PRODUCTS, CATEGORIES, STORES } from './data/mockCatalog';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { PWAProvider } from './context/PWAContext';
import { BazaarExpenseProvider } from './context/BazaarExpenseContext';
import StoreLogo from './components/StoreLogo';
import { Search, ShoppingBag, ArrowRight, X, RefreshCw, Sparkles } from 'lucide-react';

function AppContent() {
  const { lang, t } = useLanguage();
  const { user, syncActiveBag, deleteActiveBag, loadActiveBag } = useAuth();

  // Dynamic live synced product list with static catalog as instant fallback
  const [productList, setProductList] = useState(PRODUCTS);
  const [isLiveSynced, setIsLiveSynced] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncedAt, setLastSyncedAt] = useState(null);

  // Persistence for user's grocery bag with automatic image/data refresh
  const [basket, setBasket] = useState(() => {
    try {
      const saved = localStorage.getItem('bazardor_basket');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Refresh product objects with latest catalog images and prices
        return parsed.map(item => {
          const fresh = PRODUCTS.find(p => p.id === item.product?.id);
          return fresh ? { ...item, product: fresh } : item;
        });
      }
      return [
        { product: PRODUCTS[0], quantity: 1 }, // Rupchanda 5L
        { product: PRODUCTS[3], quantity: 1 }, // Miniket 5kg
        { product: PRODUCTS[6], quantity: 2 }, // Onion 1kg
      ];
    } catch {
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState(() => {
    try {
      const saved = localStorage.getItem('bazardor_default_location');
      if (saved) return saved;
    } catch {}
    return 'ঢাকা - ধানমন্ডি';
  });
  const [selectedStores, setSelectedStores] = useState(Object.keys(STORES));
  const [discountOnly, setDiscountOnly] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  
  // Slide-over Bag Drawer state (opened on header click / mobile floating button)
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Visual Product Search modal state (camera & gallery upload)
  const [isVisualSearchOpen, setIsVisualSearchOpen] = useState(false);
  // Sort State (defaults to A to Z)
  const [sortBy, setSortBy] = useState('name-asc');

  // Restore user's active bag from Firestore on login
  useEffect(() => {
    let isMounted = true;
    if (user?.uid) {
      loadActiveBag().then(remoteItems => {
        if (!isMounted) return;
        if (remoteItems && Array.isArray(remoteItems) && remoteItems.length > 0) {
          const refreshed = remoteItems.map(item => {
            const fresh = productList.find(p => p.id === item.product?.id);
            return fresh ? { ...item, product: fresh } : item;
          });
          setBasket(refreshed);
        }
      });
    }
    return () => { isMounted = false; };
  }, [user?.uid]);

  // Sync basket to localStorage and Firestore in real-time
  useEffect(() => {
    try {
      localStorage.setItem('bazardor_basket', JSON.stringify(basket));
    } catch (e) {
      console.error('LocalStorage write failed:', e);
    }

    // Automatically sync or delete in Firestore for authenticated user
    if (user?.uid) {
      if (!basket || basket.length === 0) {
        deleteActiveBag();
      } else {
        syncActiveBag(basket);
      }
    }
  }, [basket, user?.uid]);

  // Fetch real-time live prices from backend scraper on mount (merges with base catalog)
  useEffect(() => {
    async function loadLivePrices() {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          if (data.products && data.products.length > 0) {
            setProductList(prev => {
              const baseCatalog = prev && prev.length > 0 ? prev : PRODUCTS;
              const productMap = new Map();
              baseCatalog.forEach(p => productMap.set(p.id, p));
              data.products.forEach(liveItem => {
                if (productMap.has(liveItem.id)) {
                  productMap.set(liveItem.id, { ...productMap.get(liveItem.id), ...liveItem });
                } else {
                  productMap.set(liveItem.id, liveItem);
                }
              });
              return Array.from(productMap.values());
            });
            setIsLiveSynced(true);
            setLastSyncedAt(data.lastSyncedAt);
            setBasket(prev => prev.map(bItem => {
              const fresh = data.products.find(p => p.id === bItem.product?.id);
              return fresh ? { ...bItem, product: fresh } : bItem;
            }));
          }
        }
      } catch (err) {
        console.log('Running in local/offline fallback mode (static catalog)');
      }
    }
    loadLivePrices();
  }, []);

  // Manual live sync trigger
  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('/api/sync', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        if (data.products && data.products.length > 0) {
          setProductList(prev => {
            const baseCatalog = prev && prev.length > 0 ? prev : PRODUCTS;
            const productMap = new Map();
            baseCatalog.forEach(p => productMap.set(p.id, p));
            data.products.forEach(liveItem => {
              if (productMap.has(liveItem.id)) {
                productMap.set(liveItem.id, { ...productMap.get(liveItem.id), ...liveItem });
              } else {
                productMap.set(liveItem.id, liveItem);
              }
            });
            return Array.from(productMap.values());
          });
          setIsLiveSynced(true);
          setLastSyncedAt(data.lastSyncedAt);
          setBasket(prev => prev.map(bItem => {
            const fresh = data.products.find(p => p.id === bItem.product?.id);
            return fresh ? { ...bItem, product: fresh } : bItem;
          }));
        }
      }
    } catch (err) {
      console.warn('Manual sync failed:', err);
    } finally {
      setIsSyncing(false);
    }
  };

  // Online Live Search across Chaldal & other supermarkets
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [searchNotification, setSearchNotification] = useState(null);

  const handleSearchOnline = async (queryToSearch) => {
    const q = (queryToSearch || searchQuery).trim();
    if (!q) return;
    setIsSearchingOnline(true);
    setSearchNotification(null);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.products && data.products.length > 0) {
          let newlyAdded = 0;
          setProductList(prev => {
            const nextList = [...prev];
            data.products.forEach(newItem => {
              if (!nextList.some(p => p.id === newItem.id || p.nameEn.toLowerCase() === newItem.nameEn.toLowerCase())) {
                nextList.push(newItem);
                newlyAdded++;
              }
            });
            return nextList;
          });
          // Ensure category is 'all' so results are visible
          setSelectedCategory('all');
          setSearchNotification(
            lang === 'bn' 
              ? `"${q}" এর জন্য ${data.products.length} টি পণ্য পাওয়া গেছে (${newlyAdded} টি ক্যাটালগে নতুন যোগ হয়েছে)`
              : `Found ${data.products.length} products online for "${q}" (${newlyAdded} newly added to catalog)`
          );
        } else {
          setSearchNotification(
            lang === 'bn' 
              ? `"${q}" এর জন্য অনলাইন শপে কোনো পণ্য মেলেনি`
              : `No online products found for "${q}"`
          );
        }
      }
    } catch (err) {
      console.warn('Online search error:', err);
      setSearchNotification(
        lang === 'bn' ? 'অনলাইন সার্ভারে সংযোগ করা সম্ভব হয়নি' : 'Failed to reach online search server'
      );
    } finally {
      setIsSearchingOnline(false);
    }
  };

  // Basket Handlers
  const handleAddToBasket = (product) => {
    setBasket(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromBasket = (product) => {
    setBasket(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        return prev.filter(item => item.product.id !== product.id);
      }
      return prev.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      );
    });
  };

  const handleClearBasket = () => {
    setBasket([]);
    if (user?.uid) {
      deleteActiveBag();
    }
  };

  // Restore a saved bag from Profile & Settings
  const handleRestoreBag = (savedBag) => {
    if (!savedBag || !savedBag.items) return;
    const restored = savedBag.items.map(it => {
      const prod = productList.find(p => p.id === it.id) || it.product || PRODUCTS[0];
      return { product: prod, quantity: it.qty || 1 };
    });
    setBasket(restored);
    setIsBagOpen(true);
  };

  const toggleStoreFilter = (storeId) => {
    setSelectedStores(prev => 
      prev.includes(storeId) 
        ? (prev.length > 1 ? prev.filter(id => id !== storeId) : prev) 
        : [...prev, storeId]
    );
  };

  const basketCount = useMemo(() => {
    return basket.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [basket]);

  // Filtered & Sorted Products (Default: A to Z)
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const list = productList.filter(prod => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
      if (!matchesCategory) return false;

      // Discount only filter
      if (discountOnly) {
        let hasDiscount = false;
        Object.values(prod.prices).forEach(p => {
          if (p.inStock && prod.mrp && prod.mrp > p.price) hasDiscount = true;
        });
        if (!hasDiscount) return false;
      }

      // Store filter
      const hasAnySelectedStoreInStock = selectedStores.some(sId => prod.prices[sId]?.inStock);
      if (!hasAnySelectedStoreInStock) return false;

      // Text query
      if (!q) return true;
      const inNameBn = prod.nameBn?.toLowerCase().includes(q);
      const inNameEn = prod.nameEn?.toLowerCase().includes(q);
      const inKeywords = prod.keywords?.some(k => k.toLowerCase().includes(q));

      return inNameBn || inNameEn || inKeywords;
    });

    // Alphabetical & Price Sorting
    return list.sort((a, b) => {
      if (sortBy === 'name-asc') {
        const nameA = (lang === 'bn' ? a.nameBn : a.nameEn) || a.nameEn || '';
        const nameB = (lang === 'bn' ? b.nameBn : b.nameEn) || b.nameEn || '';
        return nameA.localeCompare(nameB, lang === 'bn' ? 'bn' : 'en', { sensitivity: 'base' });
      }
      if (sortBy === 'name-desc') {
        const nameA = (lang === 'bn' ? a.nameBn : a.nameEn) || a.nameEn || '';
        const nameB = (lang === 'bn' ? b.nameBn : b.nameEn) || b.nameEn || '';
        return nameB.localeCompare(nameA, lang === 'bn' ? 'bn' : 'en', { sensitivity: 'base' });
      }
      if (sortBy === 'price-asc') {
        const pricesA = Object.values(a.prices).filter(p => p.inStock).map(p => p.price);
        const pricesB = Object.values(b.prices).filter(p => p.inStock).map(p => p.price);
        const minA = pricesA.length > 0 ? Math.min(...pricesA) : (a.mrp || 999999);
        const minB = pricesB.length > 0 ? Math.min(...pricesB) : (b.mrp || 999999);
        return minA - minB;
      }
      if (sortBy === 'price-desc') {
        const pricesA = Object.values(a.prices).filter(p => p.inStock).map(p => p.price);
        const pricesB = Object.values(b.prices).filter(p => p.inStock).map(p => p.price);
        const maxA = pricesA.length > 0 ? Math.max(...pricesA) : (a.mrp || 0);
        const maxB = pricesB.length > 0 ? Math.max(...pricesB) : (b.mrp || 0);
        return maxB - maxA;
      }
      if (sortBy === 'discount') {
        const discA = a.mrp ? Math.max(0, ...Object.values(a.prices).filter(p => p.inStock).map(p => a.mrp - p.price)) : 0;
        const discB = b.mrp ? Math.max(0, ...Object.values(b.prices).filter(p => p.inStock).map(p => b.mrp - p.price)) : 0;
        return discB - discA;
      }
      return 0;
    });
  }, [productList, searchQuery, selectedCategory, selectedStores, discountOnly, sortBy, lang]);

  return (
    <div className="min-h-screen bg-[#fafbfc] dark:bg-[#090d16] flex flex-col text-zinc-900 dark:text-zinc-100 selection:bg-emerald-600 selection:text-white w-full max-w-full transition-colors duration-250">
      {/* Top Header */}
      <Header 
        basketCount={basketCount}
        onOpenBag={() => setIsBagOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchOnline={handleSearchOnline}
        isSearchingOnline={isSearchingOnline}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 min-w-0">
        {/* Navigation Tabs for Desktop */}
        <div className="hidden lg:flex items-center justify-between pb-4 border-b border-zinc-200/60 dark:border-zinc-800/80 mb-6">
          <div className="flex items-center gap-2">
            {[
              { id: 'catalog', label: t.catalogTab },
              { id: 'deals', label: t.dealsTab },
              { id: 'daily', label: t.dailyRatesTab },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-zinc-950 dark:bg-emerald-600 text-white shadow-premium-sm'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-200/70 dark:border-zinc-800 shadow-premium-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-medium">{t.liveConnectedStores}</span>
            <div className="flex items-center gap-1.5 ml-1">
              {Object.values(STORES).map(s => (
                <div key={s.id} className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800 px-2 py-0.5 rounded-md border border-zinc-200/70 dark:border-zinc-700 shadow-2xs">
                  <StoreLogo store={s} size="xs" showBorder={false} className="w-3.5 h-3.5 rounded-xs" />
                  <span className="text-zinc-800 dark:text-zinc-200 font-bold text-[10px]">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Tab Views */}
        {activeTab === 'deals' && (
          <DealsTab 
            onAddProduct={handleAddToBasket} 
            allProducts={productList} 
          />
        )}

        {activeTab === 'daily' && (
          <DailyMarketTab />
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-4 sm:space-y-6">
            {/* Mobile Search & Category Carousel (Hidden on Desktop) */}
            <div className="lg:hidden space-y-2.5">
              {/* Search Bar */}
              <div className="relative group">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 pointer-events-none group-focus-within:text-emerald-600 dark:group-focus-within:text-emerald-400 transition-colors" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      handleSearchOnline(searchQuery.trim());
                    }
                  }}
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 focus:border-zinc-300 dark:focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/10 rounded-2xl py-2.5 sm:py-3 pl-10 pr-28 text-xs font-medium text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 shadow-premium-sm outline-none transition-all duration-200"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  {searchQuery ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleSearchOnline(searchQuery.trim())}
                        disabled={isSearchingOnline}
                        className="px-2.5 py-1 bg-zinc-900 dark:bg-emerald-600 hover:bg-emerald-700 dark:hover:bg-emerald-500 text-white rounded-xl text-[10px] font-bold shadow-2xs transition disabled:opacity-50 cursor-pointer active:scale-95"
                        title={t.searchOnline}
                      >
                        {isSearchingOnline ? '...' : (lang === 'bn' ? 'অনলাইন' : 'Live')}
                      </button>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="p-1 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </>
                  ) : null}
                </div>
              </div>

              {/* Categories Pills */}
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
                {CATEGORIES.map(cat => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                        isSelected 
                          ? 'bg-zinc-950 dark:bg-emerald-600 text-white shadow-premium-sm' 
                          : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white'
                      }`}
                    >
                      <span>{lang === 'bn' ? cat.nameBn : cat.nameEn}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Store Filter Row with Official Store Logos */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 items-center">
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider shrink-0 mr-0.5">
                  {lang === 'bn' ? 'স্টোর:' : 'Stores:'}
                </span>
                {Object.values(STORES).map(store => {
                  const isChecked = selectedStores.includes(store.id);
                  return (
                    <button
                      key={store.id}
                      onClick={() => toggleStoreFilter(store.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition border cursor-pointer ${
                        isChecked
                          ? 'bg-zinc-950 dark:bg-zinc-800 text-white border-zinc-950 dark:border-zinc-700 shadow-premium-sm'
                          : 'bg-white dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'
                      }`}
                    >
                      <StoreLogo store={store} size="xs" showBorder={false} className="w-3.5 h-3.5 rounded-xs" />
                      <span>{lang === 'bn' ? store.nameBn : store.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Responsive Grid: Filter Sidebar + Spacious Wide Products Area */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              {/* Desktop Left Filter Sidebar (Sticky on scroll) */}
              <div className="hidden lg:block shrink-0 sticky top-18 self-start">
                <DesktopSidebar 
                  productList={productList}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedStores={selectedStores}
                  toggleStoreFilter={toggleStoreFilter}
                  discountOnly={discountOnly}
                  setDiscountOnly={setDiscountOnly}
                />
              </div>

              {/* Center Product Feed */}
              <div className="flex-1 min-w-0 w-full space-y-3.5">
                {/* Live Price Sync Status Bar */}
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800 rounded-2xl p-2.5 sm:p-3 flex items-center justify-between text-xs gap-2 shadow-premium-sm">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-zinc-900 dark:text-zinc-100 truncate text-[11px] sm:text-xs">
                        {lang === 'bn' ? 'সুপারশপ লাইভ প্রাইস ইঞ্জিন' : 'Live Supermarket Price Engine'}
                      </span>
                      {/* Connected Store Logos */}
                      <div className="hidden sm:flex items-center gap-1 shrink-0">
                        {Object.values(STORES).map(s => (
                          <StoreLogo key={s.id} store={s} size="xs" showBorder={true} className="w-4 h-4 rounded-xs border-zinc-200 dark:border-zinc-700" />
                        ))}
                      </div>
                      {lastSyncedAt && (
                        <span className="hidden md:inline text-[10px] text-zinc-400 font-medium shrink-0">
                          • {lang === 'bn' ? 'সর্বশেষ সিঙ্ক:' : 'Synced:'} {new Date(lastSyncedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleManualSync}
                    disabled={isSyncing}
                    className="shrink-0 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-bold text-[10px] sm:text-[11px] py-1 px-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-700 shadow-2xs flex items-center gap-1.5 transition active:scale-95 disabled:opacity-50 cursor-pointer"
                    title={lang === 'bn' ? 'সরাসরি স্টোর থেকে নতুন প্রাইস টানুন' : 'Fetch fresh prices from stores'}
                  >
                    <RefreshCw className={`w-3 h-3 text-zinc-600 dark:text-zinc-400 ${isSyncing ? 'animate-spin text-emerald-600' : ''}`} />
                    <span>{isSyncing ? (lang === 'bn' ? 'সিঙ্ক হচ্ছে...' : 'Syncing...') : (lang === 'bn' ? 'লাইভ রিফ্রেশ' : 'Live Refresh')}</span>
                  </button>
                </div>

                {/* Search Notification Banner */}
                {searchNotification && (
                  <div className="bg-emerald-100/90 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100 text-xs px-3.5 py-2.5 rounded-2xl flex items-center justify-between font-semibold shadow-2xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{searchNotification}</span>
                    </div>
                    <button onClick={() => setSearchNotification(null)} className="text-emerald-800 dark:text-emerald-300 hover:text-black dark:hover:text-white font-bold p-1 cursor-pointer">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Search Bar Query Badge & Count */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-medium px-1 flex-wrap gap-2">
                                    <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700 dark:text-zinc-300">
                      {filteredProducts.length} {lang === 'bn' ? 'টি পণ্য প্রদর্শিত' : 'products showing'}
                    </span>
                    {searchQuery && (
                      <span className="bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 text-[11px] px-2 py-0.5 rounded-md font-bold">
                        "{searchQuery}"
                      </span>
                    )}
                  </div>

                  {/* Sort Control Dropdown (Default: A to Z) */}
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                      {lang === 'bn' ? 'সাজান:' : 'Sort by:'}
                    </span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      aria-label={lang === 'bn' ? 'পণ্য সাজান' : 'Sort products'}
                      className="text-xs font-semibold bg-white dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 rounded-xl px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer shadow-2xs transition"
                    >
                      <option value="name-asc">{lang === 'bn' ? '🔤 A to Z (নাম অনুযায়ী)' : '🔤 Name (A to Z)'}</option>
                      <option value="name-desc">{lang === 'bn' ? '🔤 Z to A (নাম অনুযায়ী উল্টো)' : '🔤 Name (Z to A)'}</option>
                      <option value="price-asc">{lang === 'bn' ? '💰 দাম: কম থেকে বেশি' : '💰 Price: Low to High'}</option>
                      <option value="price-desc">{lang === 'bn' ? '💎 দাম: বেশি থেকে কম' : '💎 Price: High to Low'}</option>
                      <option value="discount">{lang === 'bn' ? '🔥 সর্বোচ্চ ছাড়' : '🔥 Biggest Discount'}</option>
                    </select>
                  </div>
                  {searchQuery && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSearchOnline(searchQuery)}
                        disabled={isSearchingOnline}
                        className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 px-2.5 py-1 rounded-xl transition disabled:opacity-50 cursor-pointer shadow-2xs"
                      >
                        <Search className={`w-3 h-3 ${isSearchingOnline ? 'animate-spin' : ''}`} />
                        <span>{isSearchingOnline ? (lang === 'bn' ? 'অনলাইনে খোঁজা হচ্ছে...' : 'Searching online...') : (lang === 'bn' ? 'অনলাইন শপ থেকে আরও খুঁজুন' : 'Search more online')}</span>
                      </button>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 text-[11px] underline cursor-pointer"
                      >
                        {lang === 'bn' ? 'মুছুন' : 'Clear'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Product Grid: 2 COLUMNS ON MOBILE & 4 COLUMNS ON DESKTOP! */}
                {filteredProducts.length === 0 ? (
                  <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-12 text-center border border-slate-200 dark:border-zinc-800 shadow-xs my-4">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Search className="w-7 h-7" />
                    </div>
                    <p className="text-slate-800 dark:text-zinc-100 text-base font-bold mb-1">
                      {searchQuery ? `"${searchQuery}" লোকাল তালিকায় নেই` : (lang === 'bn' ? 'কোনো পণ্য পাওয়া যায়নি' : 'No products found')}
                    </p>
                    <p className="text-slate-500 dark:text-zinc-400 text-xs max-w-md mx-auto mb-5 leading-relaxed">
                      {lang === 'bn' 
                        ? 'চালডাল ও অন্যান্য অনলাইন সুপারশপের লাইভ ক্যাটালগে হাজার হাজার পণ্য রয়েছে। সরাসরি অনলাইন থেকে সার্চ করে এখনই যোগ করুন!' 
                        : 'Search thousands of products live from Chaldal and top online supermarkets!'}
                    </p>
                    {searchQuery ? (
                      <button 
                        onClick={() => handleSearchOnline(searchQuery)}
                        disabled={isSearchingOnline}
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-2xl shadow-xs transition active:scale-95 disabled:opacity-50 cursor-pointer"
                      >
                        <Search className={`w-4 h-4 ${isSearchingOnline ? 'animate-spin' : ''}`} />
                        <span>{isSearchingOnline ? (lang === 'bn' ? 'অনলাইনে খোঁজা হচ্ছে...' : 'Searching online...') : (lang === 'bn' ? 'অনলাইন থেকে লাইভ আনুন' : 'Search Live on Chaldal')}</span>
                      </button>
                    ) : null}
                    <div className="mt-4">
                      <button 
                        onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setDiscountOnly(false); }}
                        className="text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 underline cursor-pointer"
                      >
                        {lang === 'bn' ? 'সব পণ্য পুনরায় দেখুন' : 'Reset Filters'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-4">
                    {filteredProducts.map(prod => {
                      const basketItem = basket.find(item => item.product.id === prod.id);
                      return (
                        <ProductCard 
                          key={prod.id}
                          product={prod}
                          quantityInBasket={basketItem?.quantity || 0}
                          onAdd={handleAddToBasket}
                          onRemove={handleRemoveFromBasket}
                          onOpenDetails={(p) => setDetailProduct(p)}
                          selectedStores={selectedStores}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Global Desktop & Mobile Footer */}
      <Footer />

      {/* Slide-over Bag Drawer (Popup on Bag click) */}
      <BagSlideOver 
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        basket={basket}
        onAdd={handleAddToBasket}
        onRemove={handleRemoveFromBasket}
        onClear={handleClearBasket}
        allProducts={productList}
      />

      {/* Global Modals */}
      <AuthModal />
      <ProfileSettingsModal 
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        onRestoreBag={handleRestoreBag}
        onOpenBag={() => setIsBagOpen(true)}
      />

      {detailProduct && (
        <ProductDetailModal 
          product={productList.find(p => p.id === detailProduct.id) || detailProduct}
          onClose={() => setDetailProduct(null)}
          onAdd={handleAddToBasket}
          quantityInBasket={basket.find(i => i.product.id === detailProduct.id)?.quantity || 0}
        />
      )}

      {/* Visual Product Search Modal */}
      <VisualSearchModal 
        isOpen={isVisualSearchOpen}
        onClose={() => setIsVisualSearchOpen(false)}
        onAddToBasket={handleAddToBasket}
        onProductFound={(product) => {
          setProductList(prev => {
            if (!prev.some(p => p.id === product.id)) {
              return [product, ...prev];
            }
            return prev;
          });
          setDetailProduct(product);
          setActiveTab('catalog');
          setSelectedCategory('all');
        }}
        onPerformSearch={(query) => {
          setSearchQuery(query);
          setActiveTab('catalog');
          setSelectedCategory('all');
          handleSearchOnline(query);
        }}
      />

      {/* Floating Scroll to Top Button (Triggers at > 10% scroll) */}
      <ScrollToTop />

      {/* Floating Bottom-Corner Visual Search Button (Highlight AI Lens) */}
      <FloatingVisualSearchButton onOpen={() => setIsVisualSearchOpen(true)} />

      {/* PWA Mobile Install Banner & iOS Safari Guide */}
      <InstallAppBanner />

      {/* Mobile Bottom Navigation (Hidden on Desktop) */}
      <BottomNav 
        activeTab={activeTab}
        setActiveTab={(tabId) => {
          if (tabId === 'basket') {
            setIsBagOpen(true);
          } else {
            setActiveTab(tabId);
          }
        }}
        basketCount={basketCount}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <BazaarExpenseProvider>
            <PWAProvider>
              <AppContent />
            </PWAProvider>
          </BazaarExpenseProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
