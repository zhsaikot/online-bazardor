import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import DesktopSidebar from './components/DesktopSidebar';
import BagSlideOver from './components/BagSlideOver';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import DealsTab from './components/DealsTab';
import DailyMarketTab from './components/DailyMarketTab';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import { PRODUCTS, CATEGORIES, STORES } from './data/mockCatalog';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import StoreLogo from './components/StoreLogo';
import { Search, ShoppingBag, ArrowRight, X, RefreshCw, Sparkles } from 'lucide-react';

function AppContent() {
  const { lang, t } = useLanguage();

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
  const [selectedLocation, setSelectedLocation] = useState('ঢাকা - ধানমন্ডি');
  const [selectedStores, setSelectedStores] = useState(Object.keys(STORES));
  const [discountOnly, setDiscountOnly] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  
  // Slide-over Bag Drawer state (opened on header click / mobile floating button)
  const [isBagOpen, setIsBagOpen] = useState(false);

  // Sync basket to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('bazardor_basket', JSON.stringify(basket));
    } catch (e) {
      console.error('LocalStorage write failed:', e);
    }
  }, [basket]);

  // Fetch real-time live prices from backend scraper on mount
  useEffect(() => {
    async function loadLivePrices() {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const data = await res.json();
          if (data.products && data.products.length > 0) {
            setProductList(data.products);
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
          setProductList(data.products);
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

  // Filtered Products
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return productList.filter(prod => {
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
      const inNameBn = prod.nameBn.toLowerCase().includes(q);
      const inNameEn = prod.nameEn.toLowerCase().includes(q);
      const inKeywords = prod.keywords?.some(k => k.toLowerCase().includes(q));

      return inNameBn || inNameEn || inKeywords;
    });
  }, [productList, searchQuery, selectedCategory, selectedStores, discountOnly]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Top Header */}
      <Header 
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        basketCount={basketCount}
        onOpenBag={() => setIsBagOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchOnline={handleSearchOnline}
        isSearchingOnline={isSearchingOnline}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-4 lg:px-8 py-3 sm:py-6">
        {/* Navigation Tabs for Desktop */}
        <div className="hidden lg:flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
          <div className="flex items-center gap-2">
            {[
              { id: 'catalog', label: t.catalogTab },
              { id: 'deals', label: t.dealsTab },
              { id: 'daily', label: t.dailyRatesTab },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{t.liveConnectedStores}</span>
            <div className="flex items-center gap-1.5 ml-1">
              {Object.values(STORES).map(s => (
                <span key={s.id} className="text-slate-800 font-bold bg-white px-2 py-0.5 rounded-md border border-slate-200 shadow-2xs">
                  {s.name}
                </span>
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
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
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
                  className="w-full bg-white border border-slate-200 focus:border-emerald-600 rounded-2xl py-2.5 sm:py-3 pl-10 pr-24 text-xs font-medium text-slate-900 placeholder:text-slate-400 shadow-xs outline-none transition"
                />
                {searchQuery && (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleSearchOnline(searchQuery.trim())}
                      disabled={isSearchingOnline}
                      className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-[10px] font-bold shadow-2xs transition disabled:opacity-50 cursor-pointer"
                      title={t.searchOnline}
                    >
                      {isSearchingOnline ? '...' : (lang === 'bn' ? 'অনলাইন' : 'Live')}
                    </button>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="p-1 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Categories Pills */}
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5">
                {CATEGORIES.map(cat => {
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition shadow-2xs ${
                        isSelected 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span>{lang === 'bn' ? cat.nameBn : cat.nameEn}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Store Filter Row with Official Store Logos */}
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-0.5">
                  {lang === 'bn' ? 'স্টোর:' : 'Stores:'}
                </span>
                {Object.values(STORES).map(store => {
                  const isChecked = selectedStores.includes(store.id);
                  return (
                    <button
                      key={store.id}
                      onClick={() => toggleStoreFilter(store.id)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                        isChecked
                          ? 'bg-white text-slate-900 border-emerald-500/80 shadow-2xs ring-1 ring-emerald-500/30'
                          : 'bg-slate-100 text-slate-400 border-slate-200 opacity-60'
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
              {/* Desktop Left Filter Sidebar */}
              <div className="hidden lg:block">
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

              {/* Center Product Feed (Now has full width with minimum 4 items on desktop!) */}
              <div className="flex-1 min-w-0 w-full space-y-3.5">
                {/* Live Price Sync Status Bar */}
                <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-2.5 sm:p-3 flex items-center justify-between text-xs gap-2 shadow-2xs">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="font-bold text-emerald-950 truncate text-[11px] sm:text-xs">
                        {lang === 'bn' ? 'সুপারশপ লাইভ প্রাইস ইঞ্জিন' : 'Live Supermarket Price Engine'}
                      </span>
                      {/* Connected Store Logos */}
                      <div className="hidden sm:flex items-center gap-1 shrink-0">
                        {Object.values(STORES).map(s => (
                          <StoreLogo key={s.id} store={s} size="xs" showBorder={true} className="w-4 h-4 rounded-xs border-slate-200" />
                        ))}
                      </div>
                      {lastSyncedAt && (
                        <span className="hidden md:inline text-[10px] text-emerald-700 font-medium shrink-0">
                          • {lang === 'bn' ? 'সর্বশেষ সিঙ্ক:' : 'Synced:'} {new Date(lastSyncedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleManualSync}
                    disabled={isSyncing}
                    className="shrink-0 bg-white hover:bg-emerald-100 text-emerald-800 font-bold text-[10px] sm:text-[11px] py-1 px-2.5 rounded-xl border border-emerald-300 shadow-2xs flex items-center gap-1 transition active:scale-95 disabled:opacity-50 cursor-pointer"
                    title={lang === 'bn' ? 'সরাসরি স্টোর থেকে নতুন প্রাইস টানুন' : 'Fetch fresh prices from stores'}
                  >
                    <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-emerald-600' : ''}`} />
                    <span>{isSyncing ? (lang === 'bn' ? 'সিঙ্ক হচ্ছে...' : 'Syncing...') : (lang === 'bn' ? 'লাইভ রিফ্রেশ' : 'Live Refresh')}</span>
                  </button>
                </div>

                {/* Search Notification Banner */}
                {searchNotification && (
                  <div className="bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs px-3.5 py-2.5 rounded-2xl flex items-center justify-between font-semibold shadow-2xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{searchNotification}</span>
                    </div>
                    <button onClick={() => setSearchNotification(null)} className="text-emerald-800 hover:text-black font-bold p-1 cursor-pointer">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Search Bar Query Badge & Count */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-700">
                      {filteredProducts.length} {lang === 'bn' ? 'টি পণ্য প্রদর্শিত' : 'products showing'}
                    </span>
                    {searchQuery && (
                      <span className="bg-slate-200 text-slate-700 text-[11px] px-2 py-0.5 rounded-md font-bold">
                        "{searchQuery}"
                      </span>
                    )}
                  </div>
                  {searchQuery && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleSearchOnline(searchQuery)}
                        disabled={isSearchingOnline}
                        className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-xl transition disabled:opacity-50 cursor-pointer shadow-2xs"
                      >
                        <Search className={`w-3 h-3 ${isSearchingOnline ? 'animate-spin' : ''}`} />
                        <span>{isSearchingOnline ? (lang === 'bn' ? 'অনলাইনে খোঁজা হচ্ছে...' : 'Searching online...') : (lang === 'bn' ? 'অনলাইন শপ থেকে আরও খুঁজুন' : 'Search more online')}</span>
                      </button>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="text-slate-500 hover:text-slate-800 text-[11px] underline cursor-pointer"
                      >
                        {lang === 'bn' ? 'মুছুন' : 'Clear'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Product Grid: 2 COLUMNS ON MOBILE & 4 COLUMNS ON DESKTOP! */}
                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200 shadow-xs my-4">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Search className="w-7 h-7" />
                    </div>
                    <p className="text-slate-800 text-base font-bold mb-1">
                      {searchQuery ? `"${searchQuery}" লোকাল তালিকায় নেই` : (lang === 'bn' ? 'কোনো পণ্য পাওয়া যায়নি' : 'No products found')}
                    </p>
                    <p className="text-slate-500 text-xs max-w-md mx-auto mb-5 leading-relaxed">
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
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline cursor-pointer"
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

            {/* Mobile Floating Sticky Quick Bag Bar */}
            {basketCount > 0 && (
              <div className="lg:hidden fixed bottom-16 left-0 right-0 z-30 px-3 max-w-md mx-auto pointer-events-none">
                <button
                  onClick={() => setIsBagOpen(true)}
                  className="w-full bg-slate-900/95 backdrop-blur-md hover:bg-slate-900 text-white font-bold py-2.5 px-4 rounded-2xl shadow-xl transition flex items-center justify-between pointer-events-auto active:scale-98"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[11px] flex items-center justify-center font-black">
                      {basketCount}
                    </span>
                    <span className="text-xs">{t.myBag}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-400">
                    <span>{t.viewCompare}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            )}
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

      {detailProduct && (
        <ProductDetailModal 
          product={productList.find(p => p.id === detailProduct.id) || detailProduct}
          onClose={() => setDetailProduct(null)}
          onAdd={handleAddToBasket}
          quantityInBasket={basket.find(i => i.product.id === detailProduct.id)?.quantity || 0}
        />
      )}

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
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}
