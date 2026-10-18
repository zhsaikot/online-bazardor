import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/stores');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const assets = [
  {
    name: 'chaldal.svg',
    url: 'https://i.chaldn.com/asset/egg-chaldal-web-release-id-29483/https/Default/components/header/Header/images/logo-small-v2.svg?q=best'
  },
  {
    name: 'chaldal-icon.png',
    url: 'https://i.chaldn.com/asset/egg-chaldal-web-release-id-29483/https/Default/stores/chaldal/root/touch-icon-iphone.png?q=low&alpha=1'
  },
  {
    name: 'shwapno.png',
    url: 'https://www.shwapno.com/images/shwapno_logo.png'
  },
  {
    name: 'pandamart.png',
    url: 'https://images.deliveryhero.io/image/foodpanda/groceries-landing/pandamart.png'
  },
  {
    name: 'meenabazar.png',
    url: 'https://images.deliveryhero.io/image/foodpanda/groceries-landing/meena-click.png'
  }
];

async function downloadAll() {
  for (const a of assets) {
    try {
      const res = await fetch(a.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (!res.ok) {
        console.error(`Failed ${a.name}: ${res.status} ${res.statusText}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      const filePath = path.join(outDir, a.name);
      fs.writeFileSync(filePath, buffer);
      console.log(`Saved ${a.name} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Error downloading ${a.name}:`, e.message);
    }
  }
}

downloadAll();
