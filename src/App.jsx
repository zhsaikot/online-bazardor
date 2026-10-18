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
import { Search, ShoppingBag, ArrowRight, X, RefreshCw } from 'lucide-react';

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
                  placeholder={t.searchPlaceholder}
                  className="w-full bg-white border border-slate-200 focus:border-emerald-600 rounded-2xl py-2.5 sm:py-3 pl-10 pr-10 text-xs font-medium text-slate-900 placeholder:text-slate-400 shadow-xs outline-none transition"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
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
            </div>

            {/* Main Responsive Grid: Filter Sidebar + Spacious Wide Products Area */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
              {/* Desktop Left Filter Sidebar */}
              <div className="hidden lg:block">
                <DesktopSidebar 
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
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="font-bold text-emerald-950 truncate text-[11px] sm:text-xs">
                        {lang === 'bn' ? 'চালডাল ও সুপারশপ লাইভ প্রাইস ইঞ্জিন' : 'Live Supermarket Price Engine'}
                      </span>
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

                {/* Search Bar Query Badge & Count */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
                  <span>
                    {filteredProducts.length} {lang === 'bn' ? 'টি পণ্য' : 'products found'}
                  </span>
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      {lang === 'bn' ? 'ফিল্টার মুছুন' : 'Clear search'}
                    </button>
                  )}
                </div>

                {/* Product Grid: 2 COLUMNS ON MOBILE & 4 COLUMNS ON DESKTOP! */}
                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-xs my-6">
                    <p className="text-slate-500 text-sm font-medium">
                      "{searchQuery}" দিয়ে কোনো পণ্য পাওয়া যায়নি।
                    </p>
                    <button 
                      onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setDiscountOnly(false); }}
                      className="mt-3 text-xs font-bold text-emerald-700 underline"
                    >
                      {lang === 'bn' ? 'সব পণ্য পুনরায় দেখুন' : 'Reset Filters'}
                    </button>
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
