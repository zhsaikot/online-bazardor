import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Load mock or saved user from localStorage
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

  // Sync to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('bazardor_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('bazardor_user');
    }
  }, [user]);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  // Login simulation (Firebase ready)
  const loginWithPhone = async (phoneNumber) => {
    setLoading(true);
    // In Firebase implementation, this will call `signInWithPhoneNumber(auth, phoneNumber, appVerifier)`
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockUser = {
      id: 'usr_' + Date.now(),
      name: 'সাদিকুল ইসলাম' , // Default BD user name
      nameEn: 'Sadikul Islam',
      phone: phoneNumber,
      email: null,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      savedBags: [
        { id: 'bag_1', name: 'মাসের নিয়মিত বাজার', date: '১২ অক্টোবর, ২০২৬', itemsCount: 4 }
      ]
    };
    setUser(mockUser);
    setLoading(false);
    setIsAuthModalOpen(false);
    return mockUser;
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    // In Firebase implementation, this will call `signInWithPopup(auth, googleProvider)`
    await new Promise(resolve => setTimeout(resolve, 600));

    const mockUser = {
      id: 'usr_g_' + Date.now(),
      name: 'তানভীর হাসান',
      nameEn: 'Tanvir Hasan',
      phone: '+880 1711-234567',
      email: 'tanvir.hasan@gmail.com',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
      savedBags: []
    };
    setUser(mockUser);
    setLoading(false);
    setIsAuthModalOpen(false);
    return mockUser;
  };

  const logout = () => {
    setUser(null);
  };

  const saveCurrentBag = (bagName, items) => {
    if (!user) {
      openAuthModal();
      return false;
    }
    const newBag = {
      id: 'bag_' + Date.now(),
      name: bagName || 'আমার বাজার',
      date: new Date().toLocaleDateString('bn-BD'),
      itemsCount: items.length
    };
    setUser(prev => ({
      ...prev,
      savedBags: [newBag, ...(prev.savedBags || [])]
    }));
    return true;
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal,
      loginWithPhone,
      loginWithGoogle,
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
