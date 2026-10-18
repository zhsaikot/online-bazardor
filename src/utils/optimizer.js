import { STORES } from '../data/mockCatalog';

/**
 * Calculates optimal grocery basket costs across all stores
 * Handles delivery fees, thresholds, out-of-stock items, and multi-store split optimization.
 */
export function calculateBasketOptimization(basket, activeOffer = null) {
  if (!basket || basket.length === 0) {
    return {
      storeSummaries: {},
      bestSingleStore: null,
      splitRecommendation: null,
      totalMrp: 0,
      totalItemsCount: 0
    };
  }

  const storeKeys = Object.keys(STORES);
  let totalMrp = 0;
  let totalItemsCount = 0;

  basket.forEach(({ product, quantity }) => {
    totalMrp += (product.mrp || 0) * quantity;
    totalItemsCount += quantity;
  });

  // 1. Calculate per-store single cart costs
  const storeSummaries = {};

  storeKeys.forEach(storeKey => {
    const storeInfo = STORES[storeKey];
    let subtotal = 0;
    let outOfStockItems = [];
    let inStockItems = [];

    basket.forEach(({ product, quantity }) => {
      const storeItem = product.prices[storeKey];
      if (storeItem && storeItem.inStock) {
        const itemTotal = storeItem.price * quantity;
        subtotal += itemTotal;
        inStockItems.push({
          product,
          quantity,
          unitPrice: storeItem.price,
          totalPrice: itemTotal,
          discountText: storeItem.discountText
        });
      } else {
        outOfStockItems.push({
          product,
          quantity
        });
      }
    });

    const isEligibleForFreeDelivery = subtotal >= storeInfo.freeDeliveryThreshold;
    const deliveryFee = subtotal > 0
      ? (isEligibleForFreeDelivery ? 0 : storeInfo.baseDeliveryFee)
      : 0;

    // Check discount offer
    let discount = 0;
    if (activeOffer && activeOffer.applicableStores.includes(storeKey)) {
      if (subtotal >= activeOffer.minSpend) {
        discount = Math.min(subtotal * activeOffer.discountRate, activeOffer.maxDiscount);
      }
    }

    const netTotal = Math.max(0, subtotal + deliveryFee - discount);

    storeSummaries[storeKey] = {
      store: storeInfo,
      subtotal,
      deliveryFee,
      isFreeDelivery: isEligibleForFreeDelivery,
      thresholdGap: Math.max(0, storeInfo.freeDeliveryThreshold - subtotal),
      discount,
      netTotal,
      inStockItems,
      outOfStockItems,
      isAllInStock: outOfStockItems.length === 0
    };
  });

  // 2. Identify Best Single Store
  // Criteria: prioritize stores having all items in stock, then lowest net total
  const validStores = Object.values(storeSummaries).filter(s => s.subtotal > 0);
  
  let bestSingleStore = null;
  if (validStores.length > 0) {
    const allStocked = validStores.filter(s => s.isAllInStock);
    const candidateList = allStocked.length > 0 ? allStocked : validStores;

    bestSingleStore = candidateList.reduce((best, current) => {
      if (!best) return current;
      return current.netTotal < best.netTotal ? current : best;
    }, null);
  }

  // 3. Smart Split Cart Optimizer (Multi-store cherry picking)
  // For each product, pick the store with lowest unit price (in stock)
  const splitStoreBuckets = {};

  basket.forEach(({ product, quantity }) => {
    let cheapestStoreKey = null;
    let cheapestPrice = Infinity;

    storeKeys.forEach(storeKey => {
      const storeItem = product.prices[storeKey];
      if (storeItem && storeItem.inStock && storeItem.price < cheapestPrice) {
        cheapestPrice = storeItem.price;
        cheapestStoreKey = storeKey;
      }
    });

    if (cheapestStoreKey) {
      if (!splitStoreBuckets[cheapestStoreKey]) {
        splitStoreBuckets[cheapestStoreKey] = {
          store: STORES[cheapestStoreKey],
          items: [],
          subtotal: 0
        };
      }
      const itemTotal = cheapestPrice * quantity;
      splitStoreBuckets[cheapestStoreKey].items.push({
        product,
        quantity,
        unitPrice: cheapestPrice,
        totalPrice: itemTotal
      });
      splitStoreBuckets[cheapestStoreKey].subtotal += itemTotal;
    }
  });

  // Calculate split total with respective delivery fees
  let splitSubtotal = 0;
  let splitTotalDelivery = 0;
  const splitStoresBreakdown = [];

  Object.values(splitStoreBuckets).forEach(bucket => {
    const storeInfo = bucket.store;
    const isFree = bucket.subtotal >= storeInfo.freeDeliveryThreshold;
    const dFee = isFree ? 0 : storeInfo.baseDeliveryFee;

    splitSubtotal += bucket.subtotal;
    splitTotalDelivery += dFee;

    splitStoresBreakdown.push({
      ...bucket,
      deliveryFee: dFee,
      isFreeDelivery: isFree,
      storeTotal: bucket.subtotal + dFee
    });
  });

  const splitNetTotal = splitSubtotal + splitTotalDelivery;
  const isSplitBetter = bestSingleStore && (splitNetTotal < bestSingleStore.netTotal);
  const splitSavings = isSplitBetter ? (bestSingleStore.netTotal - splitNetTotal) : 0;

  return {
    storeSummaries,
    bestSingleStore,
    totalMrp,
    totalItemsCount,
    splitRecommendation: {
      isSplitBetter,
      storesCount: splitStoresBreakdown.length,
      splitStoresBreakdown,
      splitSubtotal,
      splitTotalDelivery,
      splitNetTotal,
      splitSavings
    }
  };
}
