import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { 
  auth, 
  googleProvider, 
  db,
  RecaptchaVerifier, 
  signInWithPhoneNumber, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile
} from '../firebase';
import {
  doc,
  setDoc,
  deleteDoc,
  collection,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';

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

  // Sync user state with Firebase onAuthStateChanged and Firestore real-time sync
  useEffect(() => {
    let unsubscribeBags = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      // Unsubscribe any previous listener
      if (unsubscribeBags) {
        unsubscribeBags();
        unsubscribeBags = null;
      }

      if (firebaseUser) {
        let savedBags = [];
        try {
          const stored = localStorage.getItem(`bazardor_bags_${firebaseUser.uid}`);
          if (stored) savedBags = JSON.parse(stored);
        } catch (e) {
          console.warn('Could not parse stored bags', e);
        }

        const displayName = firebaseUser.displayName || 
          (firebaseUser.email ? firebaseUser.email.split('@')[0] : 
          (firebaseUser.phoneNumber ? `গ্রাহক (${firebaseUser.phoneNumber.slice(-4)})` : 'সম্মানিত ক্রেতা'));
        const defaultAvatar = firebaseUser.photoURL || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(displayName)}&backgroundColor=059669`;

        const appUser = {
          id: firebaseUser.uid,
          uid: firebaseUser.uid,
          name: displayName,
          nameEn: firebaseUser.displayName || 'Customer',
          phone: firebaseUser.phoneNumber || null,
          email: firebaseUser.email || null,
          avatar: defaultAvatar,
          savedBags: savedBags
        };

        setUser(appUser);
        try {
          localStorage.setItem('bazardor_user', JSON.stringify(appUser));
        } catch (e) {}

        // 1. Sync User profile to Firestore (merge: true)
        try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          setDoc(userDocRef, {
            uid: firebaseUser.uid,
            name: displayName,
            email: firebaseUser.email || null,
            phone: firebaseUser.phoneNumber || null,
            avatar: defaultAvatar,
            updatedAt: serverTimestamp()
          }, { merge: true }).catch(err => {
            console.warn('Firestore user profile sync warning (rules may need review):', err.message);
          });
        } catch (e) {
          console.warn('Firestore setDoc exception:', e);
        }

        // 2. Realtime listener for savedBags in Firestore
        try {
          const bagsColRef = collection(db, 'users', firebaseUser.uid, 'savedBags');
          unsubscribeBags = onSnapshot(bagsColRef, (snapshot) => {
            const remoteBags = [];
            snapshot.forEach(docSnap => {
              const data = docSnap.data();
              remoteBags.push({
                id: docSnap.id,
                ...data
              });
            });

            if (remoteBags.length > 0) {
              setUser(prev => {
                if (!prev || prev.uid !== firebaseUser.uid) return prev;
                const updated = {
                  ...prev,
                  savedBags: remoteBags
                };
                try {
                  localStorage.setItem(`bazardor_bags_${firebaseUser.uid}`, JSON.stringify(remoteBags));
                  localStorage.setItem('bazardor_user', JSON.stringify(updated));
                } catch (err) {}
                return updated;
              });
            }
          }, (err) => {
            console.warn('Firestore savedBags listener warning:', err.message);
          });
        } catch (e) {
          console.warn('Firestore onSnapshot exception:', e);
        }

      } else {
        setUser(null);
        try {
          localStorage.removeItem('bazardor_user');
        } catch (e) {}
      }
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeBags) unsubscribeBags();
    };
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

  // Setup reCAPTCHA verifier instance for phone OTP
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
          // reCAPTCHA solved
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

  // 1. Email/Password - Sign Up
  const signupWithEmail = async (email, password, displayName) => {
    setLoading(true);
    setAuthError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const fbUser = userCredential.user;
      const cleanName = displayName?.trim() || email.split('@')[0];
      const defaultAvatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(cleanName)}&backgroundColor=059669`;

      // Update Firebase Auth profile
      await updateProfile(fbUser, {
        displayName: cleanName,
        photoURL: defaultAvatar
      });

      // Sync to Firestore
      try {
        const userDocRef = doc(db, 'users', fbUser.uid);
        await setDoc(userDocRef, {
          uid: fbUser.uid,
          name: cleanName,
          email: fbUser.email,
          avatar: defaultAvatar,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      } catch (fsErr) {
        console.warn('Firestore user doc sync warning:', fsErr);
      }

      setIsAuthModalOpen(false);
      return fbUser;
    } catch (err) {
      console.error('Email sign up error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setAuthError('এই ইমেইল দিয়ে ইতোমধ্যে একটি অ্যাকাউন্ট রয়েছে। দয়া করে লগইন করুন।');
      } else if (err.code === 'auth/invalid-email') {
        setAuthError('ইমেইল অ্যাড্রেসটি সঠিক নয়।');
      } else if (err.code === 'auth/weak-password') {
        setAuthError('পাসওয়ার্ড অত্যন্ত দুর্বল। অন্তত ৬ বা ততোধিক অক্ষরের পাসওয়ার্ড দিন।');
      } else {
        setAuthError(err.message || 'সাইন আপ করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 2. Email/Password - Sign In
  const loginWithEmail = async (email, password) => {
    setLoading(true);
    setAuthError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      setIsAuthModalOpen(false);
      return userCredential.user;
    } catch (err) {
      console.error('Email sign in error:', err);
      if (
        err.code === 'auth/user-not-found' || 
        err.code === 'auth/wrong-password' || 
        err.code === 'auth/invalid-credential'
      ) {
        setAuthError('ইমেইল বা পাসওয়ার্ড ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
      } else if (err.code === 'auth/invalid-email') {
        setAuthError('ইমেইল অ্যাড্রেসটি সঠিক নয়।');
      } else if (err.code === 'auth/too-many-requests') {
        setAuthError('অনেকবার ভুল চেষ্টা করা হয়েছে। অ্যাকাউন্ট সুরক্ষার জন্য কিছুক্ষণ পর চেষ্টা করুন।');
      } else {
        setAuthError(err.message || 'লগইন করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 3. Email/Password - Send Password Reset Email
  const resetPassword = async (email) => {
    setLoading(true);
    setAuthError(null);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      return true;
    } catch (err) {
      console.error('Password reset error:', err);
      if (err.code === 'auth/user-not-found') {
        setAuthError('এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি।');
      } else if (err.code === 'auth/invalid-email') {
        setAuthError('ইমেইল অ্যাড্রেসটি সঠিক নয়।');
      } else {
        setAuthError(err.message || 'পাসওয়ার্ড রিসেট ইমেইল পাঠানো সম্ভব হয়নি।');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 4. Google Sign-In with popup
  const loginWithGoogle = async () => {
    setLoading(true);
    setAuthError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      
      // Sync Google User to Firestore
      try {
        const userDocRef = doc(db, 'users', result.user.uid);
        await setDoc(userDocRef, {
          uid: result.user.uid,
          name: result.user.displayName || 'Google User',
          email: result.user.email,
          avatar: result.user.photoURL,
          updatedAt: serverTimestamp()
        }, { merge: true });
      } catch (fsErr) {
        console.warn('Firestore Google user doc sync warning:', fsErr);
      }

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

  // 5. Phone OTP - Step 1: Send OTP
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
        setAuthError('আজকের SMS কোটা শেষ হয়েছে। অনুগ্রহ করে ইমেইল বা গুগল দিয়ে লগইন করুন।');
      } else {
        setAuthError(err.message || 'ওটিপি পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // 5. Phone OTP - Step 2: Verify OTP
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

  // 6. Logout
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

  // 7. Update Profile in Auth and Firestore
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

    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        displayName: name !== undefined ? name : auth.currentUser.displayName,
        photoURL: avatar !== undefined ? avatar : auth.currentUser.photoURL
      }).catch(e => console.warn('Auth updateProfile error:', e));

      try {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        setDoc(userDocRef, {
          ...(name !== undefined && { name }),
          ...(avatar !== undefined && { avatar }),
          updatedAt: serverTimestamp()
        }, { merge: true }).catch(e => console.warn('Firestore userDoc update error:', e));
      } catch (e) {}
    }
  };

  // 8. Delete Saved Bag from local state, localStorage, and Firestore
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

    if (auth.currentUser) {
      try {
        const bagDocRef = doc(db, 'users', auth.currentUser.uid, 'savedBags', bagId);
        deleteDoc(bagDocRef).catch(e => console.warn('Firestore delete bag error:', e));
      } catch (e) {}
    }
  };

  // 9. Save Bag for Authenticated User (Firestore sync + localStorage fallback)
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

    // Update local state immediately
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

    // Write to Cloud Firestore subcollection
    if (auth.currentUser) {
      try {
        const bagDocRef = doc(db, 'users', auth.currentUser.uid, 'savedBags', newBag.id);
        setDoc(bagDocRef, {
          ...newBag,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }).catch(err => {
          console.warn('Firestore save bag sync warning:', err.message);
        });
      } catch (e) {
        console.warn('Firestore setDoc exception:', e);
      }
    }

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
      signupWithEmail,
      loginWithEmail,
      resetPassword,
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
