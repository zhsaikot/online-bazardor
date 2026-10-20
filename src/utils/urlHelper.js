/**
 * Sanitizes and normalizes store outbound URLs, converting legacy
 * query links into modern active paths (e.g. Prince Bazar Next.js search routes, Cartup ?keyword=).
 */
export function getSanitizedStoreUrl(url, storeKey, cleanQuery = '') {
  if (!url) return '#';

  // 1. Prince Bazar Next.js app router normalization
  if (storeKey === 'princebazar' || url.includes('princebazarbd.com')) {
    if (url.includes('princebazarbd.com/?s=')) {
      try {
        const u = new URL(url);
        const s = u.searchParams.get('s') || cleanQuery || '';
        const cleaned = s
          .replace(/\([^)]*\)/gi, ' ')
          .replace(/\b\d+[-–]?(minute|min)\b/gi, ' ')
          .replace(/\b(fortified|pure|natural|original|premium|special|instant|classic|freshly|selected|fine|best|super|cool|liquid|pump|dairy)\b/gi, ' ')
          .replace(/\b\d+(\.\d+)?\s*(ltr|liter|litres|l|kg|kgs|g|gm|gram|grams|ml|pcs|pc|packet|pkt|box|pack)\b/gi, ' ')
          .replace(/[-–]\s*\d+(\.\d+)?\s*(ltr|liter|l|kg|g|gm|ml)\b/gi, ' ')
          .replace(/\b(pet|pkt|pouch|poly|refill|jar|can|tin|bottle|mini|combo|family pack)\b/gi, ' ')
          .replace(/[-–_/+&,.:;]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();
        const words = cleaned.split(' ').filter(w => w.length > 1);
        const finalTerm = words.length <= 2 ? words.join(' ') : words.slice(0, 3).join(' ');
        return `https://princebazarbd.com/search/${encodeURIComponent(finalTerm || s)}`;
      } catch (e) {
        return url.replace('princebazarbd.com/?s=', 'princebazarbd.com/search/').replace('&post_type=product', '');
      }
    }
  }

  // 2. Cartup query normalization
  if (storeKey === 'cartup' || url.includes('cartup.com')) {
    if (url.includes('cartup.com.bd')) {
      return url.replace('cartup.com.bd', 'cartup.com');
    }
    if (url.includes('cartup.com/search?q=')) {
      return url.replace('cartup.com/search?q=', 'cartup.com/search?keyword=');
    }
  }

  return url;
}
