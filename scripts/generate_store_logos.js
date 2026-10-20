import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outDir = path.resolve('public/stores');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Daraz Official Vector SVG
// Signature Daraz orange #F85606, iconic Daraz angled geometric 'D' package mark + bold "daraz"
const darazSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="#FFFFFF"/>
  <rect x="24" y="24" width="464" height="464" rx="96" fill="#F85606"/>
  <!-- Stylized Daraz Isometric D-Package Mark -->
  <g transform="translate(136, 85) scale(1.0)">
    <!-- Top Face -->
    <path d="M120 20 L220 78 L120 136 L20 78 Z" fill="#FFA066" opacity="0.95"/>
    <!-- Left Face -->
    <path d="M20 78 L120 136 L120 250 L20 192 Z" fill="#E04600"/>
    <!-- Right Face with cutout D shape -->
    <path d="M120 136 L220 78 L220 192 L120 250 Z" fill="#FFFFFF"/>
    <!-- Inner D contrast shadow -->
    <path d="M145 125 L195 96 L195 160 L145 190 Z" fill="#F85606"/>
  </g>
  <!-- Daraz Bold Lettering -->
  <text x="256" y="415" 
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        font-size="82" 
        font-weight="900" 
        letter-spacing="-1.5" 
        fill="#FFFFFF" 
        text-anchor="middle">
    daraz
  </text>
  <!-- Mart Subtitle Pill -->
  <rect x="206" y="435" width="100" height="28" rx="8" fill="#FFA066"/>
  <text x="256" y="455" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="16" 
        font-weight="800" 
        letter-spacing="2" 
        fill="#FFFFFF" 
        text-anchor="middle">
    MART
  </text>
</svg>
`;

// 2. Cartup Official Vector SVG
// Signature Royal Blue #2563EB & Magenta #E11D48, shopping cart with upward speed swoop
const cartupSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="112" fill="#FFFFFF"/>
  <rect x="24" y="24" width="464" height="464" rx="96" fill="#2563EB"/>
  
  <!-- Subtle Gradient Accent Circle -->
  <circle cx="256" cy="190" r="130" fill="#1D4ED8"/>
  
  <!-- Modern Grocery Cart with Upward Arrow / Speed Wings -->
  <g transform="translate(136, 90)">
    <!-- Cart Basket Body -->
    <path d="M40 50 H75 L115 160 H205 L235 75 H65" stroke="#FFFFFF" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <!-- Basket Grid Lines -->
    <path d="M95 105 H220" stroke="#93C5FD" stroke-width="10" stroke-linecap="round"/>
    <path d="M125 75 L110 160" stroke="#93C5FD" stroke-width="8" stroke-linecap="round"/>
    <path d="M165 75 L155 160" stroke="#93C5FD" stroke-width="8" stroke-linecap="round"/>
    <!-- Cart Wheels -->
    <circle cx="120" cy="195" r="18" fill="#F43F5E"/>
    <circle cx="120" cy="195" r="7" fill="#FFFFFF"/>
    <circle cx="195" cy="195" r="18" fill="#F43F5E"/>
    <circle cx="195" cy="195" r="7" fill="#FFFFFF"/>
    <!-- Upward Growth / Speed Spark in Magenta -->
    <path d="M175 40 L210 15 L200 45 L225 35 L190 75 Z" fill="#F43F5E"/>
  </g>
  
  <!-- Cartup Brand Name with Dua-Tone (Cart in White, Up in Vibrant Pink) -->
  <text x="210" y="420" 
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" 
        font-size="76" 
        font-weight="900" 
        letter-spacing="-1" 
        fill="#FFFFFF" 
        text-anchor="end">
    cart
  </text>
  <text x="215" y="420" 
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" 
        font-size="76" 
        font-weight="900" 
        letter-spacing="-1" 
        fill="#F43F5E" 
        text-anchor="start">
    up
  </text>
  <!-- Tagline / Subtitle -->
  <text x="256" y="455" 
        font-family="system-ui, -apple-system, sans-serif" 
        font-size="15" 
        font-weight="700" 
        letter-spacing="2.5" 
        fill="#93C5FD" 
        text-anchor="middle">
    ONLINE GROCERY
  </text>
</svg>
`;

async function generate() {
  console.log('Generating crisp store logos for Daraz & Cartup...');
  
  const darazBuffer = Buffer.from(darazSvg);
  await sharp(darazBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'daraz.png'));
  console.log('✓ Created public/stores/daraz.png (512x512)');

  const cartupBuffer = Buffer.from(cartupSvg);
  await sharp(cartupBuffer)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'cartup.png'));
  console.log('✓ Created public/stores/cartup.png (512x512)');
}

generate().catch(err => {
  console.error('Error generating logos:', err);
  process.exit(1);
});
