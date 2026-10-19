import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const PWAContext = createContext(null);

export function PWAProvider({ children }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // 1. Detect if running as standalone PWA
    const checkStandalone = () => {
      const isStandaloneMode = 
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true ||
        document.referrer.includes('android-app://');
      setIsStandalone(isStandaloneMode);
      if (isStandaloneMode) {
        setIsInstalled(true);
      }
      return isStandaloneMode;
    };

    const standalone = checkStandalone();

    // 2. Detect iOS device
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAppleDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isAppleDevice);

    // 3. Check dismissed timestamp from localStorage (7 days cooldown)
    const checkDismissalCooldown = () => {
      try {
        const lastDismissed = localStorage.getItem('bazardor_pwa_dismissed');
        if (lastDismissed) {
          const dismissedTime = parseInt(lastDismissed, 10);
          const now = Date.now();
          const sevenDays = 7 * 24 * 60 * 60 * 1000;
          if (now - dismissedTime < sevenDays) {
            return false; // Still in cooldown
          }
        }
      } catch (e) {
        console.error('PWA dismissal check error:', e);
      }
      return true;
    };

    // 4. Handle Chromium / Android / Desktop install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      if (!standalone && checkDismissalCooldown()) {
        // Small delay so user has a second to see the page before prompt banner appears
        setTimeout(() => {
          setShowInstallBanner(true);
        }, 1500);
      }
    };

    // 5. Handle app installed event
    const handleAppInstalled = () => {
      console.log('[PWA] BazarDor app was installed successfully!');
      setIsInstalled(true);
      setIsStandalone(true);
      setShowInstallBanner(false);
      setDeferredPrompt(null);
      
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // For iOS users who are not standalone and haven't dismissed recently
    if (isAppleDevice && !standalone && checkDismissalCooldown()) {
      setTimeout(() => {
        setShowInstallBanner(true);
      }, 2500);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = async () => {
    if (deferredPrompt) {
      try {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        if (choiceResult.outcome === 'accepted') {
          console.log('[PWA] User accepted the install prompt');
          setIsInstalled(true);
          setShowInstallBanner(false);
          try {
            confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
          } catch {}
        } else {
          console.log('[PWA] User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error('Error triggering PWA prompt:', err);
      }
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // If neither deferred prompt nor iOS, show prompt guide or notify user
      alert('বাজারদর ইনস্টল করতে আপনার ব্রাউজারের মেনু (⋮ বা Share) থেকে "Add to Home Screen" বা "Install App" সিলেক্ট করুন।');
    }
  };

  const dismissBanner = () => {
    setShowInstallBanner(false);
    try {
      localStorage.setItem('bazardor_pwa_dismissed', Date.now().toString());
    } catch (e) {
      console.error('Could not save dismissal:', e);
    }
  };

  return (
    <PWAContext.Provider
      value={{
        isStandalone,
        isInstalled,
        isIOS,
        isInstallable: Boolean(deferredPrompt) || (isIOS && !isStandalone),
        showInstallBanner,
        setShowInstallBanner,
        showIOSGuide,
        setShowIOSGuide,
        promptInstall,
        dismissBanner
      }}
    >
      {children}
    </PWAContext.Provider>
  );
}

export function usePWA() {
  const context = useContext(PWAContext);
  if (!context) {
    throw new Error('usePWA must be used within a PWAProvider');
  }
  return context;
}
