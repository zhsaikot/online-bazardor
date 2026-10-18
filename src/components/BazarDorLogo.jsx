import React from 'react';

export default function BazarDorLogo({ size = 'md', className = '' }) {
  const dimensions = {
    xs: { box: 'w-6 h-6 rounded-lg', icon: 'w-3.5 h-3.5', badge: 'w-3 h-3 text-[7px] -top-0.5 -right-0.5' },
    sm: { box: 'w-8 h-8 rounded-xl', icon: 'w-4.5 h-4.5', badge: 'w-3.5 h-3.5 text-[8px] -top-0.5 -right-0.5' },
    md: { box: 'w-10 h-10 rounded-2xl', icon: 'w-5.5 h-5.5', badge: 'w-4 h-4 text-[9px] -top-1 -right-1' },
    lg: { box: 'w-12 h-12 rounded-2xl', icon: 'w-7 h-7', badge: 'w-4.5 h-4.5 text-[10px] -top-1 -right-1' }
  }[size] || { box: 'w-10 h-10 rounded-2xl', icon: 'w-5.5 h-5.5', badge: 'w-4 h-4 text-[9px] -top-1 -right-1' };

  return (
    <div className={`relative flex items-center justify-center bg-linear-to-br from-emerald-600 via-emerald-600 to-teal-700 text-white shadow-xs shrink-0 ${dimensions.box} ${className}`}>
      {/* Market Basket (বাজার) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={dimensions.icon}
      >
        <path d="m15 11-1 9" />
        <path d="m19 11-4-7" />
        <path d="M2 11h20" />
        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.6-7.4" />
        <path d="m4.5 15.5h15" />
        <path d="m5 11 4-7" />
        <path d="m9 11 1 9" />
      </svg>

      {/* Price / Savings Dor Badge (দর - ৳) */}
      <div 
        className={`absolute ${dimensions.badge} bg-amber-400 text-slate-950 font-black rounded-full flex items-center justify-center shadow-xs border-1.5 border-white leading-none select-none`}
        title="বাজারদর - সেরা দর ও সাশ্রয়"
      >
        ৳
      </div>
    </div>
  );
}
