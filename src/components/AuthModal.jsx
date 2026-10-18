import React, { useState } from 'react';
import { X, Phone, Lock, Sparkles, ShieldCheck, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

export default function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, loginWithPhone, loginWithGoogle, loading } = useAuth();
  const { lang, t } = useLanguage();

  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);

  if (!isAuthModalOpen) return null;

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length < 10) return;
    setStep('otp');
  };

  const handleOtpChange = (idx, val) => {
    if (val.length > 1) val = val.slice(-1);
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    // Auto focus next input
    if (val && idx < 3) {
      const nextInput = document.getElementById(`otp-${idx + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    await loginWithPhone('+880 ' + phoneNumber);
    setStep('phone');
    setPhoneNumber('');
    setOtp(['', '', '', '']);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 leading-tight">
                {lang === 'bn' ? 'বাজারদর অ্যাকাউন্ট' : 'BazarDor Account'}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'bn' ? 'ফর্দ সেভ ও পার্সোনালাইজড ডিলসের জন্য' : 'Save bags and track personalized deals'}
              </p>
            </div>
          </div>
          <button 
            onClick={closeAuthModal}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {step === 'phone' ? (
            <form onSubmit={handlePhoneSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {lang === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'}
                </label>
                <div className="flex items-center rounded-2xl border border-slate-200 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 transition overflow-hidden">
                  <span className="bg-slate-50 px-3.5 py-3 text-xs font-bold text-slate-600 border-r border-slate-200">
                    +880
                  </span>
                  <input 
                    type="tel"
                    required
                    placeholder="17XXXXXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                    maxLength={10}
                    className="flex-1 px-3 py-3 text-sm font-semibold text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  {lang === 'bn' ? 'আমরা একটি ৪-সংখ্যার ওটিপি কোড পাঠাব' : 'We will send a 4-digit verification code'}
                </p>
              </div>

              <button
                type="submit"
                disabled={phoneNumber.length < 10 || loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-xs active:scale-98"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>{lang === 'bn' ? 'ওটিপি পাঠান' : 'Send OTP'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <div className="text-center">
                <span className="text-xs font-semibold text-slate-500">
                  {lang === 'bn' ? 'যাচাইকরণ কোডটি লিখুন (+880 ' + phoneNumber + ' নম্বরে পাঠানো হয়েছে)' : 'Enter 4-digit code sent to +880 ' + phoneNumber}
                </span>
                <div className="flex justify-center gap-2.5 my-4">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-${idx}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      className="w-12 h-14 text-center text-xl font-black text-slate-900 bg-slate-50 border border-slate-200 focus:border-emerald-600 focus:bg-white rounded-2xl outline-none transition"
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={otp.some(d => !d) || loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold py-3.5 rounded-2xl transition flex items-center justify-center gap-2 shadow-xs"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>{lang === 'bn' ? 'লগইন সম্পন্ন করুন' : 'Verify & Continue'}</span>}
              </button>

              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                {lang === 'bn' ? 'নম্বর পরিবর্তন করুন' : 'Change Phone Number'}
              </button>
            </form>
          )}

          {/* Social Login Separator */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-slate-400 font-semibold tracking-wider">
                {lang === 'bn' ? 'অথবা' : 'OR'}
              </span>
            </div>
          </div>

          {/* Google Sign In */}
          <button
            onClick={loginWithGoogle}
            disabled={loading}
            className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-3 px-4 rounded-2xl transition flex items-center justify-center gap-2.5 shadow-2xs active:scale-98"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span className="text-xs">
              {lang === 'bn' ? 'গুগল দিয়ে সাইন ইন করুন' : 'Continue with Google'}
            </span>
          </button>

          {/* Privacy Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {lang === 'bn' ? 'আপনার তথ্য সম্পূর্ণ সুরক্ষিত থাকবে' : 'Firebase Secure Authentication'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
