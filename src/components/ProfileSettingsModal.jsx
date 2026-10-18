import React, { useState, useEffect } from 'react';
import { 
  X, User, Settings, ShoppingBag, Shield, Bell, MapPin, 
  Store, Moon, Sun, Globe, Check, Trash2, ArrowRight, 
  ExternalLink, LogOut, Sparkles, RefreshCw, Smartphone, 
  Mail, CheckCircle2, ChevronRight, Download, AlertTriangle 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { STORES } from '../data/mockCatalog';
import StoreLogo from './StoreLogo';
import confetti from 'canvas-confetti';

export default function ProfileSettingsModal({ 
  selectedLocation, 
  setSelectedLocation,
  onRestoreBag,
  onOpenBag
}) {
  const { 
    user, 
    isProfileModalOpen, 
    closeProfileModal, 
    openAuthModal, 
    updateUserProfile, 
    deleteSavedBag, 
    logout 
  } = useAuth();
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, setTheme, isDark } = useTheme();

  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'bags' | 'preferences' | 'security'
  const [editingName, setEditingName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [nameSavedToast, setNameSavedToast] = useState(false);
  const [cacheClearedToast, setCacheClearedToast] = useState(false);

  // Notification states
  const [priceDropAlert, setPriceDropAlert] = useState(() => {
    return localStorage.getItem('bazardor_pref_price_alerts') !== 'false';
  });
  const [weeklyDealsAlert, setWeeklyDealsAlert] = useState(() => {
    return localStorage.getItem('bazardor_pref_weekly_deals') !== 'false';
  });
  const [tcbWholesaleAlert, setTcbWholesaleAlert] = useState(() => {
    return localStorage.getItem('bazardor_pref_tcb_alerts') !== 'false';
  });

  const locations = [
    'ঢাকা - ধানমন্ডি',
    'ঢাকা - মিরপুর',
    'ঢাকা - গুলশান ও বনানী',
    'ঢাকা - উত্তরা',
    'ঢাকা - মোহাম্মদপুর',
    'চট্টগ্রাম - জিইসি'
  ];

  const AVATAR_PRESETS = [
    {
      id: 'default',
      url: user?.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user?.name || 'BD')}&backgroundColor=059669`,
      label: 'বর্তমান'
    },
    {
      id: 'emerald',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      label: 'স্টাইলিশ'
    },
    {
      id: 'classic',
      url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
      label: 'প্রফেশনাল'
    },
    {
      id: 'casual',
      url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
      label: 'ক্যাজুয়াল'
    },
    {
      id: 'avatar_dice',
      url: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(user?.id || 'BazarDor')}`,
      label: 'স্মার্ট বট'
    },
    {
      id: 'avatar_min',
      url: `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(user?.name || 'Customer')}`,
      label: 'মিনিমাল'
    }
  ];

  useEffect(() => {
    if (user) {
      setEditingName(user.name || '');
      setSelectedAvatar(user.avatar || '');
    }
  }, [user]);

  if (!isProfileModalOpen) return null;

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!editingName.trim()) return;
    updateUserProfile({
      name: editingName.trim(),
      avatar: selectedAvatar || user?.avatar
    });
    setNameSavedToast(true);
    setTimeout(() => setNameSavedToast(false), 2500);
  };

  const handleSelectAvatar = (url) => {
    setSelectedAvatar(url);
    updateUserProfile({
      name: editingName || user?.name,
      avatar: url
    });
  };

  const handleToggleAlert = (type, currentVal, setter) => {
    const newVal = !currentVal;
    setter(newVal);
    localStorage.setItem(`bazardor_pref_${type}`, String(newVal));
  };

  const handleClearCache = () => {
    try {
      localStorage.removeItem('bazardor_recent_searches');
      setCacheClearedToast(true);
      setTimeout(() => setCacheClearedToast(false), 2500);
    } catch (e) {
      console.warn(e);
    }
  };

  const handleRestoreSavedBag = (savedBag) => {
    if (onRestoreBag && savedBag.items) {
      onRestoreBag(savedBag);
      closeProfileModal();
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.7 } });
      if (onOpenBag) onOpenBag();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200/80 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh] relative transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Card */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 text-white relative flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="relative shrink-0">
              <img 
                src={selectedAvatar || user?.avatar || 'https://api.dicebear.com/7.x/initials/svg?seed=User&backgroundColor=059669'} 
                alt="" 
                className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl object-cover border-2 border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-zinc-950 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-white truncate leading-tight">
                  {user ? user.name : (lang === 'bn' ? 'সম্মানিত অতিথি' : 'Guest Shopper')}
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                  {user ? 'Verified' : 'Guest'}
                </span>
              </div>
              <p className="text-xs text-zinc-400 truncate mt-0.5">
                {user?.email || user?.phone || (lang === 'bn' ? 'অ্যাকাউন্টে সাইন ইন নেই' : 'Not signed in')}
              </p>
            </div>
          </div>

          <button 
            onClick={closeProfileModal}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Strip */}
        <div className="flex border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/90 px-3 sm:px-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'profile', label: lang === 'bn' ? 'প্রোফাইল' : 'Profile', icon: User },
            { id: 'bags', label: lang === 'bn' ? 'সংরক্ষিত ফর্দ' : 'Saved Bags', icon: ShoppingBag, count: user?.savedBags?.length || 0 },
            { id: 'preferences', label: lang === 'bn' ? 'পছন্দ ও স্টোর' : 'Preferences', icon: Settings },
            { id: 'security', label: lang === 'bn' ? 'ডেটা ও নিরাপত্তা' : 'Data & Security', icon: Shield },
          ].map(tab => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs font-bold border-b-2 whitespace-nowrap transition cursor-pointer ${
                  isSelected 
                    ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400 dark:border-emerald-500' 
                    : 'border-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count !== undefined && tab.count > 0 && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Body / Tab Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-5 text-zinc-900 dark:text-zinc-100">
          {/* TAB 1: Profile Info & Avatar */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {!user ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-sm text-emerald-950 dark:text-emerald-200">
                      {lang === 'bn' ? 'অ্যাকাউন্টে সাইন ইন করুন' : 'Sign In to Your Account'}
                    </h4>
                    <p className="text-xs text-emerald-800 dark:text-emerald-300/90 mt-0.5">
                      {lang === 'bn' ? 'গুগল বা ফোন নম্বর দিয়ে লগইন করে বাজারের ফর্দ নিরাপদে সেভ রাখুন।' : 'Login with Google or Phone to sync your saved bags.'}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      closeProfileModal();
                      openAuthModal();
                    }}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 cursor-pointer"
                  >
                    {lang === 'bn' ? 'এখনই সাইন ইন করুন' : 'Sign In Now'}
                  </button>
                </div>
              ) : null}

              {/* Avatar Picker */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2.5">
                  {lang === 'bn' ? 'প্রোফাইল ছবি নির্বাচন করুন' : 'Choose Profile Avatar'}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {AVATAR_PRESETS.map((av) => (
                    <button
                      key={av.id}
                      type="button"
                      onClick={() => handleSelectAvatar(av.url)}
                      className={`p-2 rounded-2xl border transition-all text-center flex flex-col items-center gap-1.5 cursor-pointer ${
                        selectedAvatar === av.url 
                          ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 ring-2 ring-emerald-500/20' 
                          : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-white dark:hover:bg-zinc-800'
                      }`}
                    >
                      <img src={av.url} alt="" className="w-11 h-11 rounded-xl object-cover shadow-2xs" />
                      <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-400">{av.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Edit Display Name */}
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                    {lang === 'bn' ? 'আপনার নাম' : 'Display Name'}
                  </label>
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      required
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                      placeholder={lang === 'bn' ? 'আপনার নাম লিখুন' : 'Enter your name'}
                      className="flex-1 px-4 py-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-900 dark:text-zinc-100 outline-none focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-850"
                    />
                    <button
                      type="submit"
                      disabled={!editingName.trim()}
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-2xl transition shadow-xs active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      {lang === 'bn' ? 'সংরক্ষণ' : 'Save'}
                    </button>
                  </div>
                  {nameSavedToast && (
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{lang === 'bn' ? 'প্রোফাইল সফলভাবে আপডেট করা হয়েছে!' : 'Profile updated successfully!'}</span>
                    </p>
                  )}
                </div>

                {/* Account Details Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-zinc-400 uppercase font-bold block">ইমেইল</span>
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate block">
                        {user?.email || (lang === 'bn' ? 'যুক্ত করা হয়নি' : 'Not linked')}
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] text-zinc-400 uppercase font-bold block">মোবাইল নম্বর</span>
                      <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 truncate block">
                        {user?.phone || (lang === 'bn' ? 'যুক্ত করা হয়নি' : 'Not linked')}
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: Saved Bags History */}
          {activeTab === 'bags' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-zinc-950 dark:text-zinc-100">
                    {lang === 'bn' ? 'আপনার সংরক্ষিত বাজারের ফর্দ' : 'Your Saved Grocery Bags'}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {lang === 'bn' ? 'পূর্বের সংরক্ষিত ফর্দ থেকে সরাসরি ১-ক্লিকে আবার বাজার করুন।' : 'Re-order or review past grocery lists.'}
                  </p>
                </div>
              </div>

              {(!user?.savedBags || user.savedBags.length === 0) ? (
                <div className="py-12 text-center bg-zinc-50 dark:bg-zinc-800/40 rounded-3xl border border-zinc-200/70 dark:border-zinc-800 p-6 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">
                    {lang === 'bn' ? 'কোনো সংরক্ষিত ফর্দ নেই' : 'No Saved Bags Yet'}
                  </h5>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    {lang === 'bn' 
                      ? 'বাজারে পণ্য যোগ করার পর সাইডবার ড্রয়ার থেকে "ব্যাগ সেভ করুন" চাপলে তা এখানে জমা থাকবে।' 
                      : 'Add products to your cart and save them from the bag drawer.'}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {user.savedBags.map((bag) => (
                    <div 
                      key={bag.id}
                      className="p-4 rounded-2xl bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-emerald-500/50 transition"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-zinc-950 dark:text-zinc-100 font-heading">
                            {bag.name}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                            {bag.itemsCount || bag.items?.length || 0} টি আইটেম
                          </span>
                        </div>
                        <span className="text-[11px] text-zinc-400 block mt-0.5">
                          {bag.date}
                        </span>

                        {/* Items preview preview */}
                        {bag.items && bag.items.length > 0 && (
                          <div className="flex items-center gap-1 mt-2 overflow-x-auto no-scrollbar py-0.5">
                            {bag.items.slice(0, 4).map((it, idx) => (
                              <span key={idx} className="text-[10px] bg-zinc-100 dark:bg-zinc-700 px-2 py-0.5 rounded text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
                                {it.name || it.nameBn} {it.qty ? `(${it.qty})` : ''}
                              </span>
                            ))}
                            {bag.items.length > 4 && (
                              <span className="text-[10px] text-zinc-400">+{bag.items.length - 4} more</span>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button
                          onClick={() => handleRestoreSavedBag(bag)}
                          className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xs flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>{lang === 'bn' ? 'ব্যাগে লোড করুন' : 'Load to Bag'}</span>
                        </button>
                        <button
                          onClick={() => deleteSavedBag(bag.id)}
                          className="p-2 rounded-xl text-rose-500 hover:text-rose-700 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-zinc-200 dark:border-zinc-700 transition cursor-pointer"
                          title="মুছে ফেলুন"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Preferences & Supermarkets */}
          {activeTab === 'preferences' && (
            <div className="space-y-6">
              {/* Default Location */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'ডিফল্ট ডেলিভারি এলাকা' : 'Default Delivery Location'}</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => {
                      setSelectedLocation(e.target.value);
                      localStorage.setItem('bazardor_default_location', e.target.value);
                    }}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-3.5 text-xs font-bold text-zinc-900 dark:text-zinc-100 outline-none focus:border-emerald-600 cursor-pointer"
                  >
                    {locations.map(loc => (
                      <option key={loc} value={loc} className="dark:bg-zinc-900">{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Theme Settings */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2.5">
                  {lang === 'bn' ? 'অ্যাপ ডিসপ্লে থিম' : 'Display Theme'}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setTheme('light')}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition cursor-pointer ${
                      theme === 'light' 
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 ring-2 ring-emerald-500/20' 
                        : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-white dark:hover:bg-zinc-800'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                      <Sun className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{lang === 'bn' ? 'লাইট মোড' : 'Light Mode'}</span>
                      <span className="text-[10px] text-zinc-400">উজ্জ্বল ও ফ্রেশ ভিউ</span>
                    </div>
                  </button>

                  <button
                    onClick={() => setTheme('dark')}
                    className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition cursor-pointer ${
                      theme === 'dark' 
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 ring-2 ring-emerald-500/20' 
                        : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 hover:bg-white dark:hover:bg-zinc-800'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-zinc-800 text-zinc-200 flex items-center justify-center">
                      <Moon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">{lang === 'bn' ? 'ডার্ক মোড' : 'Dark Mode'}</span>
                      <span className="text-[10px] text-zinc-400">চোখের আরামদায়ক ভিউ</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Language Settings */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'ভাষা পছন্দ' : 'Language'}</span>
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => { if (lang !== 'bn') toggleLanguage(); }}
                    className={`flex-1 py-2.5 rounded-2xl border text-xs font-bold transition cursor-pointer ${
                      lang === 'bn' 
                        ? 'bg-zinc-950 dark:bg-emerald-600 text-white border-zinc-950 dark:border-emerald-600 shadow-sm' 
                        : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    🇧🇩 বাংলা (বাংলা)
                  </button>
                  <button
                    onClick={() => { if (lang !== 'en') toggleLanguage(); }}
                    className={`flex-1 py-2.5 rounded-2xl border text-xs font-bold transition cursor-pointer ${
                      lang === 'en' 
                        ? 'bg-zinc-950 dark:bg-emerald-600 text-white border-zinc-950 dark:border-emerald-600 shadow-sm' 
                        : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              </div>

              {/* Notification Toggles */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Bell className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'স্মার্ট নোটিফিকেশন ও অ্যালার্ট' : 'Smart Notifications'}</span>
                </label>

                {[
                  {
                    id: 'price_alerts',
                    title: lang === 'bn' ? 'দৈনিক দরপতন অ্যালার্ট' : 'Daily Price Drop Alerts',
                    desc: lang === 'bn' ? 'প্রয়োজনীয় নিত্যপণ্যের দাম কমলে তাৎক্ষণিক নোটিফিকেশন' : 'Get notified when grocery staples drop in price',
                    val: priceDropAlert,
                    setter: setPriceDropAlert
                  },
                  {
                    id: 'weekly_deals',
                    title: lang === 'bn' ? 'সাপ্তাহিক সুপারশপ ভাউচার ডিলস' : 'Weekly Voucher Deals',
                    desc: lang === 'bn' ? 'বিকাশ, নগদ ও কার্ডের নতুন ক্যাশব্যাক কোড' : 'Get new weekly payment and card cashback vouchers',
                    val: weeklyDealsAlert,
                    setter: setWeeklyDealsAlert
                  },
                  {
                    id: 'tcb_alerts',
                    title: lang === 'bn' ? 'টিসিবি ও কারওয়ান বাজার সূচক' : 'TCB Wholesale Updates',
                    desc: lang === 'bn' ? 'সরকারি ন্যায্যমূল্য ও পাইকারি বাজারের দৈনিক আপডেট' : 'Daily government TCB fair rate monitoring',
                    val: tcbWholesaleAlert,
                    setter: setTcbWholesaleAlert
                  }
                ].map(item => (
                  <div key={item.id} className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block">{item.title}</span>
                      <span className="text-[11px] text-zinc-400 block">{item.desc}</span>
                    </div>
                    <button
                      onClick={() => handleToggleAlert(item.id, item.val, item.setter)}
                      className={`w-10 h-5.5 rounded-full p-0.5 transition cursor-pointer shrink-0 ${
                        item.val ? 'bg-emerald-600' : 'bg-zinc-300 dark:bg-zinc-700'
                      }`}
                    >
                      <div className={`w-4.5 h-4.5 rounded-full bg-white transition transform ${item.val ? 'translate-x-4.5' : ''}`}></div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Data & Security */}
          {activeTab === 'security' && (
            <div className="space-y-5">
              {/* Storage & Cache */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-xs text-zinc-900 dark:text-zinc-100">
                      {lang === 'bn' ? 'লোকাল সার্চ ও ক্যাশ মেমোরি' : 'Search Cache & Local Memory'}
                    </h5>
                    <p className="text-[11px] text-zinc-400 mt-0.5">
                      {lang === 'bn' ? 'সার্চ হিস্ট্রি এবং টেম্পোরারি ব্রাউজিং ডেটা পরিষ্কার করুন।' : 'Clear cached search queries and local temporary data.'}
                    </p>
                  </div>
                  <button
                    onClick={handleClearCache}
                    className="px-3.5 py-1.5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-zinc-800 dark:text-zinc-200 font-bold text-xs rounded-xl transition cursor-pointer"
                  >
                    {lang === 'bn' ? 'ক্যাশ মুছুন' : 'Clear Cache'}
                  </button>
                </div>
                {cacheClearedToast && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'ক্যাশ সফলভাবে পরিষ্কার করা হয়েছে!' : 'Cache cleared successfully!'}</span>
                  </p>
                )}
              </div>

              {/* Data Protection Guarantee */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900 dark:text-emerald-200">
                  <span className="font-bold block mb-1">
                    {lang === 'bn' ? 'Firebase নিরাপত্তা ও গোপনীয়তা' : 'End-to-End Secure by Firebase'}
                  </span>
                  <p className="leading-relaxed text-[11px] text-emerald-800/90 dark:text-emerald-300/80">
                    {lang === 'bn' 
                      ? 'আপনার ব্যক্তিগত মোবাইল নম্বর, ইমেইল এবং বাজারের ফর্দ গুগল ফায়ারবেস সিকিউরিটি রুলসের মাধ্যমে এনক্রিপ্টেড থাকে।' 
                      : 'Your personal phone number, email and saved lists are stored under Google Firebase security.'}
                  </p>
                </div>
              </div>

              {/* Logout Option */}
              {user && (
                <div className="pt-3 border-t border-zinc-200/80 dark:border-zinc-800">
                  <button
                    onClick={() => {
                      logout();
                      closeProfileModal();
                    }}
                    className="w-full py-3 px-4 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/70 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'অ্যাকাউন্ট থেকে লগআউট করুন' : 'Sign Out of Account'}</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
