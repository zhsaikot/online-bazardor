import React, { useState, useEffect, useRef } from 'react';
import { X, Phone, Lock, Sparkles, ShieldCheck, ArrowRight, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function AuthModal() {
  const { 
    isAuthModalOpen, 
    closeAuthModal, 
    loginWithGoogle, 
    sendPhoneOtp, 
    verifyPhoneOtp, 
    loading, 
    authError, 
    clearAuthError,
    initRecaptcha
  } = useAuth();
  const { lang, t } = useLanguage();

  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6-digit OTP for Firebase
  const [resendTimer, setResendTimer] = useState(0);
  const otpInputsRef = useRef([]);

  // Reset state when modal opens or closes
  useEffect(() => {
    if (isAuthModalOpen) {
      setStep('phone');
      setPhoneNumber('');
      setOtp(['', '', '', '', '', '']);
      clearAuthError();
      setResendTimer(0);
      // Pre-initialize recaptcha container after modal DOM mounts
      const timer = setTimeout(() => {
        initRecaptcha('recaptcha-container');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isAuthModalOpen]);

  // Countdown timer for OTP resend
  useEffect(() => {
    let interval = null;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  if (!isAuthModalOpen) return null;

  // Handle phone submit
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    clearAuthError();
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) return;

    try {
      await sendPhoneOtp(cleanPhone, 'recaptcha-container');
      setStep('otp');
      setResendTimer(60);
      // Auto-focus first OTP input after step switch
      setTimeout(() => {
        if (otpInputsRef.current[0]) {
          otpInputsRef.current[0].focus();
        }
      }, 150);
    } catch {
      // Error handled in AuthContext and displayed via authError
    }
  };

  // Handle single digit input
  const handleOtpChange = (idx, val) => {
    clearAuthError();
    const cleanVal = val.replace(/\D/g, '');
    if (!cleanVal && val !== '') return;

    const newOtp = [...otp];
    newOtp[idx] = cleanVal.slice(-1);
    setOtp(newOtp);

    // Auto advance focus
    if (cleanVal && idx < 5) {
      otpInputsRef.current[idx + 1]?.focus();
    }
  };

  // Handle backspace navigation
  const handleOtpKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      otpInputsRef.current[idx - 1]?.focus();
    }
  };

  // Support pasting full 6-digit OTP code
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasteData) return;

    const newOtp = [...otp];
    for (let i = 0; i < pasteData.length; i++) {
      newOtp[i] = pasteData[i];
    }
    setOtp(newOtp);

    const focusIdx = Math.min(pasteData.length, 5);
    otpInputsRef.current[focusIdx]?.focus();

    // If 6 full digits pasted, can auto submit
    if (pasteData.length === 6) {
      verifyPhoneOtp(pasteData).catch(() => {});
    }
  };

  // Handle OTP submission
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    clearAuthError();
    const code = otp.join('');
    if (code.length !== 6) return;

    try {
      await verifyPhoneOtp(code);
    } catch {
      // Error handled in AuthContext
    }
  };

  // Handle resend OTP
  const handleResendOtp = async () => {
    if (resendTimer > 0 || loading) return;
    clearAuthError();
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    try {
      await sendPhoneOtp(cleanPhone, 'recaptcha-container');
      setResendTimer(60);
      setOtp(['', '', '', '', '', '']);
      otpInputsRef.current[0]?.focus();
    } catch {
      // Error displayed in UI
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Invisible reCAPTCHA container required by Firebase */}
        <div id="recaptcha-container" className="flex justify-center my-1"></div>

        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-zinc-950 dark:text-zinc-100 leading-tight">
                {lang === 'bn' ? 'বাজারদর অ্যাকাউন্ট' : 'BazarDor Account'}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {lang === 'bn' ? 'ফর্দ সেভ ও সেরা দামের রিয়েল-টাইম হিসাবের জন্য' : 'Save bags and track best deals'}
              </p>
            </div>
          </div>
          <button 
            onClick={closeAuthModal}
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {/* Error Message Banner */}
          {authError && (
            <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800 dark:text-rose-300 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{authError}</div>
              <button 
                onClick={clearAuthError}
                className="text-rose-400 hover:text-rose-700 dark:hover:text-rose-200 text-xs font-bold"
              >
                ✕
              </button>
            </div>
          )}

          {step === 'phone' ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                  {lang === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'}
                </label>
                <div className="flex items-center rounded-2xl border border-zinc-200 dark:border-zinc-700 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 dark:focus-within:ring-emerald-950 transition overflow-hidden bg-white dark:bg-zinc-800">
                  <span className="bg-zinc-50 dark:bg-zinc-800/80 px-3.5 py-3 text-xs font-bold text-zinc-700 dark:text-zinc-300 border-r border-zinc-200 dark:border-zinc-700 flex items-center gap-1.5 select-none">
                    🇧🇩 +880
                  </span>
                  <input 
                    type="tel"
                    required
                    placeholder="17XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    maxLength={11}
                    className="flex-1 px-3 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-transparent"
                  />
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1.5 flex items-center gap-1">
                  <span>📱</span>
                  {lang === 'bn' 
                    ? 'আপনার ফোনে Firebase থেকে ৬-সংখ্যার এসএমএস কোড যাবে' 
                    : 'A 6-digit SMS verification code will be sent'}
                </p>
              </div>

              <button
                type="submit"
                disabled={phoneNumber.replace(/\D/g, '').length < 10 || loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20 active:scale-98 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{lang === 'bn' ? 'ওটিপি পাঠানো হচ্ছে...' : 'Sending OTP...'}</span>
                  </>
                ) : (
                  <>
                    <span>{lang === 'bn' ? 'ওটিপি কোড পাঠান' : 'Send Verification OTP'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-6 h-6" />
                </div>
                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                  {lang === 'bn' 
                    ? `+880 ${phoneNumber} নম্বরে পাঠানো ৬-সংখ্যার কোডটি লিখুন:` 
                    : `Enter 6-digit code sent to +880 ${phoneNumber}:`}
                </p>

                {/* 6 Digit Inputs */}
                <div className="flex justify-center gap-2 my-4" onPaste={handleOtpPaste}>
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={(el) => (otpInputsRef.current[idx] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      className="w-11 h-13 text-center text-xl font-heading font-extrabold text-zinc-950 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-emerald-600 focus:bg-white dark:focus:bg-zinc-800 rounded-xl outline-none transition shadow-2xs"
                    />
                  ))}
                </div>

                {/* Resend OTP timer */}
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
                  {resendTimer > 0 ? (
                    <span>{lang === 'bn' ? `আবার কোড পাঠানো যাবে: ${resendTimer} সেকেন্ড` : `Resend code in ${resendTimer}s`}</span>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={loading}
                      className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 font-bold flex items-center justify-center gap-1 mx-auto cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>{lang === 'bn' ? 'আবার ওটিপি পাঠান' : 'Resend Code'}</span>
                    </button>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={otp.some(d => !d) || loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20 active:scale-98 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{lang === 'bn' ? 'যাচাই করা হচ্ছে...' : 'Verifying...'}</span>
                  </>
                ) : (
                  <span>{lang === 'bn' ? 'লগইন সম্পন্ন করুন' : 'Verify & Continue'}</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  clearAuthError();
                  setStep('phone');
                }}
                className="w-full text-center text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition py-1 cursor-pointer"
              >
                ← {lang === 'bn' ? 'মোবাইল নম্বর পরিবর্তন করুন' : 'Change Mobile Number'}
              </button>
            </form>
          )}

          {/* Social Login Separator */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-zinc-900 px-3 text-zinc-400 dark:text-zinc-500 font-semibold tracking-wider">
                {lang === 'bn' ? 'অথবা' : 'OR'}
              </span>
            </div>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={loginWithGoogle}
            disabled={loading}
            className="w-full bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 border border-zinc-200 dark:border-zinc-700 active:scale-98 text-zinc-800 dark:text-zinc-100 font-bold py-3 px-4 rounded-2xl transition flex items-center justify-center gap-3 shadow-2xs cursor-pointer disabled:opacity-50"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="text-xs font-semibold">
              {lang === 'bn' ? 'গুগল (Google) দিয়ে সরাসরি সাইন ইন' : 'Continue with Google'}
            </span>
          </button>

          {/* Firebase Protection Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 dark:text-zinc-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>
              {lang === 'bn' ? 'Firebase এন্ড-টু-এন্ড সুরক্ষিত সাইন ইন' : 'End-to-End Secure by Google Firebase'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
