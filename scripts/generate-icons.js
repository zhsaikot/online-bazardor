import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ICONS_DIR = './public/icons';
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

const baseSvg = fs.readFileSync('./public/favicon.svg');

// Maskable SVG with safe zone padding (Android Adaptive Icons)
const maskableSvg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="#059669"/>
      <stop offset="1" stop-color="#0f766e"/>
    </linearGradient>
  </defs>
  <!-- Full background bleed for maskable safe zone -->
  <rect width="512" height="512" fill="url(#bg)"/>
  
  <!-- Scaled content centered within safe zone -->
  <g transform="translate(80, 80) scale(5.5)">
    <g stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M40 29 L38 49"/>
      <path d="M48 29 L38 15"/>
      <path d="M12 29 H52"/>
      <path d="M15 29 L18.5 45.5 C19 48 21.2 50 23.8 50 H40.2 C42.8 50 45 48 45.5 45.5 L49 29"/>
      <path d="M17 39 H47"/>
      <path d="M16 29 L26 15"/>
      <path d="M24 29 L26 49"/>
    </g>
    <circle cx="50" cy="14" r="11" fill="#fbbf24" stroke="#ffffff" stroke-width="2.5"/>
    <text x="50" y="18" font-family="Arial, sans-serif" font-size="13" font-weight="900" fill="#0f172a" text-anchor="middle">৳</text>
  </g>
</svg>
`);

async function generate() {
  // 1. icon-192.png
  await sharp(baseSvg).resize(192, 192).png().toFile(path.join(ICONS_DIR, 'icon-192.png'));
  console.log('Generated icon-192.png');

  // 2. icon-512.png
  await sharp(baseSvg).resize(512, 512).png().toFile(path.join(ICONS_DIR, 'icon-512.png'));
  console.log('Generated icon-512.png');

  // 3. apple-touch-icon.png (180x180)
  await sharp(baseSvg).resize(180, 180).png().toFile(path.join(ICONS_DIR, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // 4. icon-maskable-512.png
  await sharp(maskableSvg).resize(512, 512).png().toFile(path.join(ICONS_DIR, 'icon-maskable-512.png'));
  console.log('Generated icon-maskable-512.png');
}

generate().then(() => console.log('All icons generated successfully!'));
