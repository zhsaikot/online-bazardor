import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Phone, 
  Lock, 
  Mail, 
  User as UserIcon, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  AlertCircle, 
  CheckCircle2, 
  RefreshCw 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function AuthModal() {
  const { 
    isAuthModalOpen, 
    closeAuthModal, 
    loginWithGoogle, 
    signupWithEmail,
    loginWithEmail,
    resetPassword,
    sendPhoneOtp, 
    verifyPhoneOtp, 
    loading, 
    authError, 
    clearAuthError,
    initRecaptcha
  } = useAuth();
  const { lang, t } = useLanguage();

  // Primary auth tabs: 'email' | 'phone'
  const [authMethod, setAuthMethod] = useState('email');

  // Email sub-mode: 'signin' | 'signup' | 'forgot'
  const [emailMode, setEmailMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [resetSuccessMessage, setResetSuccessMessage] = useState('');

  // Phone OTP state
  const [phoneStep, setPhoneStep] = useState('phone'); // 'phone' | 'otp'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6-digit OTP
  const [resendTimer, setResendTimer] = useState(0);
  const otpInputsRef = useRef([]);

  // Reset state on modal open/close
  useEffect(() => {
    if (isAuthModalOpen) {
      setAuthMethod('email');
      setEmailMode('signin');
      setEmail('');
      setPassword('');
      setDisplayName('');
      setShowPassword(false);
      setResetSuccessMessage('');
      setPhoneStep('phone');
      setPhoneNumber('');
      setOtp(['', '', '', '', '', '']);
      setResendTimer(0);
      clearAuthError();
    }
  }, [isAuthModalOpen]);

  // Pre-initialize recaptcha when phone tab is activated
  useEffect(() => {
    if (isAuthModalOpen && authMethod === 'phone') {
      const timer = setTimeout(() => {
        initRecaptcha('recaptcha-container');
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isAuthModalOpen, authMethod]);

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

  // Handle Email Form Submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    clearAuthError();
    setResetSuccessMessage('');

    if (emailMode === 'forgot') {
      if (!email || !email.includes('@')) return;
      try {
        await resetPassword(email);
        setResetSuccessMessage(
          lang === 'bn' 
            ? 'পাসওয়ার্ড রিসেটের লিংক আপনার ইমেইলে পাঠানো হয়েছে। ইনবক্স অথবা স্প্যাম ফোল্ডার চেক করুন।'
            : 'Password reset link sent to your email. Please check your inbox or spam.'
        );
      } catch (err) {
        // Handled in context
      }
      return;
    }

    if (emailMode === 'signup') {
      if (!email || password.length < 6) return;
      try {
        await signupWithEmail(email, password, displayName);
      } catch (err) {
        // Handled in context
      }
      return;
    }

    // Sign in mode
    if (!email || !password) return;
    try {
      await loginWithEmail(email, password);
    } catch (err) {
      // Handled in context
    }
  };

  // Handle Phone Submit (Send OTP)
  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    clearAuthError();
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) return;

    try {
      await sendPhoneOtp(cleanPhone, 'recaptcha-container');
      setPhoneStep('otp');
      setResendTimer(60);
      setTimeout(() => {
        if (otpInputsRef.current[0]) {
          otpInputsRef.current[0].focus();
        }
      }, 150);
    } catch {
      // Handled in context
    }
  };

  // Handle OTP Digit Input
  const handleOtpChange = (idx, val) => {
    clearAuthError();
    const cleanVal = val.replace(/\D/g, '');
    if (!cleanVal && val !== '') return;

    const newOtp = [...otp];
    newOtp[idx] = cleanVal.slice(-1);
    setOtp(newOtp);

    if (cleanVal && idx < 5) {
      otpInputsRef.current[idx + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (idx, e) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      otpInputsRef.current[idx - 1]?.focus();
    }
  };

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

    if (pasteData.length === 6) {
      verifyPhoneOtp(pasteData).catch(() => {});
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    clearAuthError();
    const code = otp.join('');
    if (code.length !== 6) return;

    try {
      await verifyPhoneOtp(code);
    } catch {
      // Handled in context
    }
  };

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
      // Handled in context
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Invisible reCAPTCHA container for Phone OTP */}
        <div id="recaptcha-container" className="flex justify-center my-0.5"></div>

        {/* Top Header */}
        <div className="p-5 pb-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-zinc-950 dark:text-zinc-100 leading-tight">
                {lang === 'bn' ? 'বাজারদর অ্যাকাউন্ট' : 'BazarDor Account'}
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {lang === 'bn' ? 'ফর্দ সেভ ও সেরা দামের রিয়েল-টাইম হিসাব' : 'Save bags & track market best prices'}
              </p>
            </div>
          </div>
          <button 
            onClick={closeAuthModal}
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Method Switcher Tabs (Email vs Phone OTP) */}
        <div className="px-6 pt-4 pb-1 shrink-0">
          <div className="grid grid-cols-2 p-1 bg-zinc-100 dark:bg-zinc-800/70 rounded-2xl">
            <button
              type="button"
              onClick={() => {
                setAuthMethod('email');
                clearAuthError();
              }}
              className={`py-2 px-3 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                authMethod === 'email'
                  ? 'bg-white dark:bg-zinc-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'ইমেইল ও পাসওয়ার্ড' : 'Email & Password'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAuthMethod('phone');
                clearAuthError();
              }}
              className={`py-2 px-3 text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer ${
                authMethod === 'phone'
                  ? 'bg-white dark:bg-zinc-900 text-emerald-700 dark:text-emerald-400 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'মোবাইল ওটিপি' : 'Phone OTP'}</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 pt-3 space-y-4 overflow-y-auto">
          {/* Error Message Banner */}
          {authError && (
            <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800 dark:text-rose-300 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{authError}</div>
              <button 
                onClick={clearAuthError}
                className="text-rose-400 hover:text-rose-700 dark:hover:text-rose-200 text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
          )}

          {/* Reset Password Success Banner */}
          {resetSuccessMessage && (
            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl flex items-start gap-2.5 text-xs text-emerald-800 dark:text-emerald-300 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{resetSuccessMessage}</div>
            </div>
          )}

          {/* 1. EMAIL & PASSWORD AUTH FLOW */}
          {authMethod === 'email' && (
            <form onSubmit={handleEmailSubmit} className="space-y-3.5">
              {/* Sign In / Sign Up Mode Pill Toggle */}
              {emailMode !== 'forgot' && (
                <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    {emailMode === 'signin' 
                      ? (lang === 'bn' ? 'অ্যাকাউন্টে সাইন ইন করুন' : 'Sign in to your account')
                      : (lang === 'bn' ? 'নতুন বাজারদর অ্যাকাউন্ট খুলুন' : 'Create new account')}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setEmailMode(emailMode === 'signin' ? 'signup' : 'signin');
                      clearAuthError();
                      setResetSuccessMessage('');
                    }}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    {emailMode === 'signin'
                      ? (lang === 'bn' ? 'নতুন একাউন্ট?' : 'Need an account?')
                      : (lang === 'bn' ? 'আগের একাউন্টে লগইন' : 'Already have account?')}
                  </button>
                </div>
              )}

              {/* Forgot password header */}
              {emailMode === 'forgot' && (
                <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                  <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    {lang === 'bn' ? 'পাসওয়ার্ড পুনরুদ্ধার করুন' : 'Reset your password'}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setEmailMode('signin');
                      clearAuthError();
                      setResetSuccessMessage('');
                    }}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    ← {lang === 'bn' ? 'লগইনে ফিরুন' : 'Back to login'}
                  </button>
                </div>
              )}

              {/* Name field (Only in Sign Up mode) */}
              {emailMode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                    {lang === 'bn' ? 'আপনার পূর্ণ নাম' : 'Full Name'}
                  </label>
                  <div className="flex items-center rounded-2xl border border-zinc-200 dark:border-zinc-700 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 dark:focus-within:ring-emerald-950 transition overflow-hidden bg-white dark:bg-zinc-800">
                    <span className="pl-3.5 text-zinc-400">
                      <UserIcon className="w-4 h-4" />
                    </span>
                    <input 
                      type="text"
                      required
                      placeholder={lang === 'bn' ? 'উদা: সাকিব আহমেদ' : 'e.g. Shakib Ahmed'}
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="flex-1 px-3 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-1.5">
                  {lang === 'bn' ? 'ইমেইল অ্যাড্রেস' : 'Email Address'}
                </label>
                <div className="flex items-center rounded-2xl border border-zinc-200 dark:border-zinc-700 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 dark:focus-within:ring-emerald-950 transition overflow-hidden bg-white dark:bg-zinc-800">
                  <span className="pl-3.5 text-zinc-400">
                    <Mail className="w-4 h-4" />
                  </span>
                  <input 
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-transparent"
                  />
                </div>
              </div>

              {/* Password (Only in Sign In and Sign Up) */}
              {emailMode !== 'forgot' && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      {lang === 'bn' ? 'পাসওয়ার্ড' : 'Password'}
                    </label>
                    {emailMode === 'signin' && (
                      <button
                        type="button"
                        onClick={() => {
                          setEmailMode('forgot');
                          clearAuthError();
                          setResetSuccessMessage('');
                        }}
                        className="text-[11px] font-semibold text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer"
                      >
                        {lang === 'bn' ? 'পাসওয়ার্ড ভুলে গেছেন?' : 'Forgot password?'}
                      </button>
                    )}
                  </div>
                  <div className="flex items-center rounded-2xl border border-zinc-200 dark:border-zinc-700 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 dark:focus-within:ring-emerald-950 transition overflow-hidden bg-white dark:bg-zinc-800">
                    <span className="pl-3.5 text-zinc-400">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={6}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 px-3 py-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100 outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-500 bg-transparent"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="pr-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition cursor-pointer"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {emailMode === 'signup' && (
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">
                      {lang === 'bn' ? 'কমপক্ষে ৬ বা ততোধিক অক্ষরের পাসওয়ার্ড ব্যবহার করুন' : 'At least 6 characters required'}
                    </p>
                  )}
                </div>
              )}

              {/* Email Form Submit Button */}
              <button
                type="submit"
                disabled={loading || !email || (emailMode !== 'forgot' && password.length < 6)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20 active:scale-98 cursor-pointer mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>
                      {emailMode === 'signup' 
                        ? (lang === 'bn' ? 'অ্যাকাউন্ট তৈরি হচ্ছে...' : 'Creating Account...') 
                        : (emailMode === 'forgot' ? (lang === 'bn' ? 'লিংক পাঠানো হচ্ছে...' : 'Sending link...') : (lang === 'bn' ? 'লগইন হচ্ছে...' : 'Signing in...'))}
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      {emailMode === 'signup' 
                        ? (lang === 'bn' ? 'অ্যাকাউন্ট তৈরি করুন' : 'Create Free Account') 
                        : (emailMode === 'forgot' ? (lang === 'bn' ? 'রিসেট লিংক পাঠান' : 'Send Reset Link') : (lang === 'bn' ? 'লগইন করুন' : 'Sign In'))}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* 2. PHONE NUMBER & OTP AUTH FLOW */}
          {authMethod === 'phone' && (
            <>
              {phoneStep === 'phone' ? (
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
                      setPhoneStep('phone');
                    }}
                    className="w-full text-center text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition py-1 cursor-pointer"
                  >
                    ← {lang === 'bn' ? 'মোবাইল নম্বর পরিবর্তন করুন' : 'Change Mobile Number'}
                  </button>
                </form>
              )}
            </>
          )}

          {/* Social Login Separator */}
          <div className="relative my-3">
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
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="text-xs font-semibold">
              {lang === 'bn' ? 'গুগল (Google) দিয়ে সাইন ইন' : 'Continue with Google'}
            </span>
          </button>

          {/* Firebase Protection Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400 dark:text-zinc-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>
              {lang === 'bn' ? 'Google Firebase দ্বারা সুরক্ষিত ও এনক্রিপ্টেড' : 'End-to-End Encrypted by Google Firebase'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
