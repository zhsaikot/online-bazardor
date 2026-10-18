import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { 
  auth, 
  googleProvider, 
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from '../firebase';

const AuthContext = createContext();

// Format phone number to E.164 (+880XXXXXXXXXX)
export function formatBdPhone(phone) {
  if (!phone) return '';
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('880')) {
    cleaned = cleaned.slice(3);
  }
  if (cleaned.startsWith('0')) {
    cleaned = cleaned.slice(1);
  }
  return `+880${cleaned}`;
}

export function AuthProvider({ children }) {
  // Load saved user from localStorage for immediate UI display
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('bazardor_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaVerifierRef = useRef(null);

  // Set auth language to Bengali by default
  useEffect(() => {
    if (auth) {
      try {
        auth.languageCode = 'bn';
      } catch (e) {
        console.warn('Failed to set auth languageCode', e);
      }
    }
  }, []);

  // Sync user state with Firebase onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        let savedBags = [];
        try {
          const stored = localStorage.getItem(`bazardor_bags_${firebaseUser.uid}`);
          if (stored) savedBags = JSON.parse(stored);
        } catch (e) {
          console.warn('Could not parse stored bags', e);
        }

        const displayName = firebaseUser.displayName || 
          (firebaseUser.phoneNumber ? `গ্রাহক (${firebaseUser.phoneNumber.slice(-4)})` : 'সম্মানিত ক্রেতা');
        const defaultAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(displayName)}&backgroundColor=059669`;

        const appUser = {
          id: firebaseUser.uid,
          uid: firebaseUser.uid,
          name: displayName,
          nameEn: firebaseUser.displayName || 'Customer',
          phone: firebaseUser.phoneNumber || null,
          email: firebaseUser.email || null,
          avatar: firebaseUser.photoURL || defaultAvatar,
          savedBags: savedBags
        };

        setUser(appUser);
        try {
          localStorage.setItem('bazardor_user', JSON.stringify(appUser));
        } catch (e) {}
      } else {
        setUser(null);
        try {
          localStorage.removeItem('bazardor_user');
        } catch (e) {}
      }
    });

    return () => unsubscribe();
  }, []);

  const openAuthModal = () => {
    setAuthError(null);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthError(null);
    setIsAuthModalOpen(false);
  };

  const clearAuthError = () => setAuthError(null);

  // Setup reCAPTCHA verifier instance
  const initRecaptcha = (containerId = 'recaptcha-container') => {
    try {
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch (e) {
          console.warn('reCAPTCHA clear error', e);
        }
        recaptchaVerifierRef.current = null;
      }

      const container = document.getElementById(containerId);
      if (!container) return null;

      const verifier = new RecaptchaVerifier(auth, containerId, {
        size: 'invisible',
        callback: () => {
          // reCAPTCHA solved callback
        },
        'expired-callback': () => {
          setAuthError('reCAPTCHA কোডের মেয়াদ শেষ। আবার চেষ্টা করুন।');
        }
      });
      recaptchaVerifierRef.current = verifier;
      return verifier;
    } catch (err) {
      console.warn('reCAPTCHA initialization error:', err);
      return null;
    }
  };

  // 1. Google Sign-In with popup
  const loginWithGoogle = async () => {
    setLoading(true);
    setAuthError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setIsAuthModalOpen(false);
      return result.user;
    } catch (err) {
      console.error('Google Sign-In failed:', err);
      if (err.code === 'auth/popup-closed-by-user') {
        setAuthError('লগইন উইন্ডো বন্ধ করা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
      } else if (err.code === 'auth/cancelled-popup-request') {
        // Ignored duplicate popups
      } else if (err.code === 'auth/unauthorized-domain') {
        setAuthError('এই ডোমেনটি Firebase Console-এ Authorized Domains তালিকায় যুক্ত করতে হবে (bazar-dor-80ec6.firebaseapp.com)।');
      } else {
        setAuthError(err.message || 'গুগল দিয়ে সাইন ইন করা সম্ভব হয়নি।');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 2. Phone OTP - Step 1: Send OTP
  const sendPhoneOtp = async (phoneNumber, containerId = 'recaptcha-container') => {
    setLoading(true);
    setAuthError(null);
    try {
      const formattedPhone = formatBdPhone(phoneNumber);
      if (!formattedPhone || formattedPhone.length < 13) {
        throw new Error('দয়া করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)');
      }

      let verifier = recaptchaVerifierRef.current;
      if (!verifier) {
        verifier = initRecaptcha(containerId);
      }
      if (!verifier) {
        throw new Error('reCAPTCHA লোড করা যায়নি। পৃষ্ঠাটি রিফ্রেশ করুন।');
      }

      const confirmation = await signInWithPhoneNumber(auth, formattedPhone, verifier);
      setConfirmationResult(confirmation);
      return confirmation;
    } catch (err) {
      console.error('Send OTP error:', err);
      // Clean up on failure to allow retry
      if (recaptchaVerifierRef.current) {
        try {
          recaptchaVerifierRef.current.clear();
        } catch (e) {}
        recaptchaVerifierRef.current = null;
      }

      if (err.code === 'auth/invalid-phone-number') {
        setAuthError('মোবাইল নম্বরটি সঠিক নয়। অনুগ্রহ করে পুনরায় চেক করুন।');
      } else if (err.code === 'auth/too-many-requests') {
        setAuthError('অনেকবার চেষ্টা করা হয়েছে। অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন।');
      } else if (err.code === 'auth/quota-exceeded') {
        setAuthError('আজকের SMS কোটা শেষ হয়েছে। অনুগ্রহ করে গুগল দিয়ে লগইন করুন।');
      } else {
        setAuthError(err.message || 'ওটিপি পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 2. Phone OTP - Step 2: Verify OTP
  const verifyPhoneOtp = async (otpCode) => {
    if (!confirmationResult) {
      throw new Error('ওটিপি সেশনের তথ্য পাওয়া যায়নি। অনুগ্রহ করে আবার ওটিপি কোড পাঠান।');
    }
    setLoading(true);
    setAuthError(null);
    try {
      const result = await confirmationResult.confirm(otpCode);
      setIsAuthModalOpen(false);
      setConfirmationResult(null);
      return result.user;
    } catch (err) {
      console.error('Verify OTP error:', err);
      if (err.code === 'auth/invalid-verification-code') {
        setAuthError('ওটিপি (OTP) কোডটি সঠিক নয়। অনুগ্রহ করে পুনরায় লিখুন।');
      } else if (err.code === 'auth/code-expired') {
        setAuthError('ওটিপি কোডের মেয়াদ শেষ হয়ে গেছে। দয়া করে আবার ওটিপি পাঠান।');
      } else {
        setAuthError(err.message || 'ওটিপি যাচাই করা সম্ভব হয়নি।');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 3. Logout
  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setUser(null);
      try {
        localStorage.removeItem('bazardor_user');
      } catch (e) {}
      setLoading(false);
    }
  };

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);

  // 4. Update Profile
  const updateUserProfile = ({ name, avatar }) => {
    setUser(prev => {
      if (!prev) return null;
      const updated = {
        ...prev,
        name: name !== undefined ? name : prev.name,
        avatar: avatar !== undefined ? avatar : prev.avatar
      };
      try {
        localStorage.setItem('bazardor_user', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  // 5. Delete Saved Bag
  const deleteSavedBag = (bagId) => {
    setUser(prev => {
      if (!prev) return null;
      const updatedBags = (prev.savedBags || []).filter(b => b.id !== bagId);
      try {
        localStorage.setItem(`bazardor_bags_${prev.id}`, JSON.stringify(updatedBags));
      } catch (e) {}
      const updated = {
        ...prev,
        savedBags: updatedBags
      };
      try {
        localStorage.setItem('bazardor_user', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  // 6. Save Bag for Authenticated User
  const saveCurrentBag = (bagName, items) => {
    if (!user) {
      openAuthModal();
      return false;
    }
    const newBag = {
      id: 'bag_' + Date.now(),
      name: bagName || 'আমার বাজার',
      date: new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }),
      itemsCount: items.length,
      items: items.map(i => ({
        id: i.product?.id,
        name: i.product?.nameBn || i.product?.nameEn,
        nameEn: i.product?.nameEn,
        qty: i.quantity,
        unit: i.product?.unit,
        image: i.product?.image,
        product: i.product
      }))
    };
    setUser(prev => {
      const updatedBags = [newBag, ...(prev.savedBags || [])];
      try {
        localStorage.setItem(`bazardor_bags_${prev.id}`, JSON.stringify(updatedBags));
      } catch (e) {}
      const updatedUser = {
        ...prev,
        savedBags: updatedBags
      };
      try {
        localStorage.setItem('bazardor_user', JSON.stringify(updatedUser));
      } catch (e) {}
      return updatedUser;
    });
    return true;
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      authError,
      clearAuthError,
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
      isProfileModalOpen,
      openProfileModal,
      closeProfileModal,
      updateUserProfile,
      deleteSavedBag,
      initRecaptcha,
      loginWithGoogle,
      sendPhoneOtp,
      verifyPhoneOtp,
      logout,
      saveCurrentBag
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
