import React, { useState } from 'react';
import { STORES } from '../data/mockCatalog';

export default function StoreLogo({ 
  store, 
  size = 'md', // 'xs' (16px), 'sm' (20px), 'md' (24px), 'lg' (32px), 'xl' (40px)
  className = '',
  imgClassName = '',
  showBorder = true,
  fallbackToDot = false
}) {
  const [hasError, setHasError] = useState(false);

  // Normalize store object
  const storeObj = typeof store === 'string' ? STORES[store] : store;
  if (!storeObj) return null;

  const sizeClasses = {
    xs: 'w-4 h-4 text-[9px]',
    sm: 'w-5 h-5 text-[10px]',
    md: 'w-6 h-6 text-xs',
    lg: 'w-8 h-8 text-sm',
    xl: 'w-10 h-10 text-base',
  };

  const containerSize = sizeClasses[size] || sizeClasses.md;
  const logoUrl = storeObj.logo || `/stores/${storeObj.id}.png`;

  if (hasError) {
    if (fallbackToDot) {
      return (
        <span 
          className="w-2 h-2 rounded-full shrink-0" 
          style={{ backgroundColor: storeObj.accentHex || '#10b981' }} 
        />
      );
    }
    return (
      <span 
        className={`${containerSize} rounded-md font-black flex items-center justify-center text-white shrink-0 shadow-2xs ${className}`}
        style={{ backgroundColor: storeObj.accentHex || '#10b981' }}
        title={storeObj.name}
      >
        {storeObj.name.charAt(0)}
      </span>
    );
  }

  return (
    <div 
      className={`${containerSize} shrink-0 bg-white rounded-md flex items-center justify-center p-0.5 overflow-hidden transition ${
        showBorder ? 'border border-slate-200/80 shadow-2xs' : ''
      } ${className}`}
      title={storeObj.name}
    >
      <img
        src={logoUrl}
        alt={storeObj.name}
        onError={() => setHasError(true)}
        className={`w-full h-full object-contain ${imgClassName}`}
        loading="lazy"
      />
    </div>
  );
}
