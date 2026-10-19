import React, { createContext, useContext, useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  serverTimestamp, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { useAuth } from './AuthContext';

const BazaarExpenseContext = createContext(null);

const STORAGE_KEY = 'bazardor_bazaar_history';

// Helper to format English month key "2026-10" to Bengali "অক্টোবর ২০২৬"
export function formatMonthYear(monthKey, lang = 'bn') {
  if (!monthKey) return '';
  const [yearStr, monthStr] = monthKey.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10) - 1; // 0-indexed
  const date = new Date(year, month, 1);

  if (lang === 'bn') {
    return date.toLocaleDateString('bn-BD', { month: 'long', year: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export function getCurrentMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

export function BazaarExpenseProvider({ children }) {
  const { user } = useAuth();

  // Load from local storage initially
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Error reading bazaar history from localStorage', e);
      return [];
    }
  });

  const [loading, setLoading] = useState(false);

  // Sync with Firestore when user is authenticated
  useEffect(() => {
    let unsubscribe = null;

    if (user?.uid) {
      try {
        const historyRef = collection(db, 'users', user.uid, 'bazaarHistory');
        const q = query(historyRef, orderBy('date', 'desc'));

        unsubscribe = onSnapshot(q, (snapshot) => {
          const remoteTrips = [];
          snapshot.forEach(docSnap => {
            remoteTrips.push({ id: docSnap.id, ...docSnap.data() });
          });

          // Merge local and remote without duplicates
          setHistory(prevLocal => {
            const remoteIds = new Set(remoteTrips.map(t => t.id));
            const unsyncedLocal = prevLocal.filter(t => !remoteIds.has(t.id));

            // Sync any local unsynced trips to Firestore
            if (unsyncedLocal.length > 0) {
              unsyncedLocal.forEach(async (trip) => {
                try {
                  const tripDoc = doc(db, 'users', user.uid, 'bazaarHistory', trip.id);
                  await setDoc(tripDoc, {
                    ...trip,
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp()
                  });
                } catch (e) {
                  console.warn('Firestore upload local trip failed', e);
                }
              });
            }

            const merged = [...remoteTrips, ...unsyncedLocal].sort((a, b) => 
              new Date(b.date).getTime() - new Date(a.date).getTime()
            );

            try {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
            } catch (e) {}

            return merged;
          });
        }, (err) => {
          console.warn('Firestore bazaarHistory snapshot error:', err);
        });
      } catch (err) {
        console.warn('Error setting up bazaar history snapshot:', err);
      }
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user?.uid]);

  // Save new bazaar trip record
  const saveBazaarTrip = async ({ items, totalAmount, mode = 'offline', storeName, notes = '' }) => {
    const now = new Date();
    const tripId = 'trip_' + Date.now();
    const monthKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    const newTrip = {
      id: tripId,
      date: now.toISOString(),
      displayDate: now.toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      displayTime: now.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
      monthKey,
      mode,
      totalAmount: Math.round(Number(totalAmount) || 0),
      itemsCount: items ? items.length : 0,
      items: (items || []).map(item => ({
        id: String(item.id || item.product?.id || 'it_' + Math.random().toString(36).substr(2, 7)),
        name: item.name || item.product?.nameBn || item.product?.nameEn || 'পণ্য',
        nameEn: item.nameEn || item.product?.nameEn || '',
        unit: item.unit || item.product?.unit || '১টি',
        quantity: item.quantity || 1,
        originalPrice: Math.round(Number(item.originalPrice ?? item.product?.mrp ?? 0)),
        boughtPrice: Math.round(Number(item.boughtPrice ?? item.offlinePrice ?? item.price ?? 0)),
        checked: Boolean(item.checked),
        isCustom: Boolean(item.isCustom)
      })),
      storeName: storeName || (mode === 'offline' ? 'কাঁচাবাজার' : 'অনলাইন সুপারশপ'),
      notes: notes || '',
      createdAt: now.toISOString()
    };

    // Update state & localStorage immediately
    setHistory(prev => {
      const updated = [newTrip, ...prev];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    // Sync to Firestore if logged in
    if (user?.uid) {
      try {
        const tripDoc = doc(db, 'users', user.uid, 'bazaarHistory', tripId);
        await setDoc(tripDoc, {
          ...newTrip,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      } catch (err) {
        console.warn('Could not sync trip to Firestore:', err);
      }
    }

    return newTrip;
  };

  // Delete a trip
  const deleteBazaarTrip = async (tripId) => {
    setHistory(prev => {
      const updated = prev.filter(t => t.id !== tripId);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    if (user?.uid) {
      try {
        const tripDoc = doc(db, 'users', user.uid, 'bazaarHistory', tripId);
        await deleteDoc(tripDoc);
      } catch (err) {
        console.warn('Could not delete trip from Firestore:', err);
      }
    }
  };

  // Monthly breakdown calculation
  const getMonthlySummary = (monthKey) => {
    const key = monthKey || getCurrentMonthKey();
    const monthTrips = history.filter(t => t.monthKey === key);

    const totalAmount = monthTrips.reduce((sum, t) => sum + (t.totalAmount || 0), 0);
    const tripsCount = monthTrips.length;
    const offlineAmount = monthTrips
      .filter(t => t.mode === 'offline')
      .reduce((sum, t) => sum + (t.totalAmount || 0), 0);
    const onlineAmount = monthTrips
      .filter(t => t.mode === 'online')
      .reduce((sum, t) => sum + (t.totalAmount || 0), 0);
    const totalItems = monthTrips.reduce((sum, t) => sum + (t.itemsCount || 0), 0);

    return {
      monthKey: key,
      totalAmount,
      tripsCount,
      offlineAmount,
      onlineAmount,
      totalItems,
      trips: monthTrips
    };
  };

  // Weekly total (last 7 days)
  const getWeeklyTotal = () => {
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
    return history
      .filter(t => new Date(t.date).getTime() >= sevenDaysAgo)
      .reduce((sum, t) => sum + (t.totalAmount || 0), 0);
  };

  // Available unique months list (sorted latest first)
  const currentKey = getCurrentMonthKey();
  const rawMonths = Array.from(new Set([currentKey, ...history.map(t => t.monthKey)])).filter(Boolean);
  rawMonths.sort((a, b) => b.localeCompare(a));

  const availableMonths = rawMonths.map(key => ({
    key,
    labelBn: formatMonthYear(key, 'bn'),
    labelEn: formatMonthYear(key, 'en')
  }));

  return (
    <BazaarExpenseContext.Provider value={{
      history,
      loading,
      saveBazaarTrip,
      deleteBazaarTrip,
      getMonthlySummary,
      getWeeklyTotal,
      availableMonths,
      currentMonthKey: currentKey
    }}>
      {children}
    </BazaarExpenseContext.Provider>
  );
}

export function useBazaarExpense() {
  const context = useContext(BazaarExpenseContext);
  if (!context) {
    throw new Error('useBazaarExpense must be used within a BazaarExpenseProvider');
  }
  return context;
}
