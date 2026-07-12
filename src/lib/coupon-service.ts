// Coupon Service — reusable business logic layer.
// Operates on local mutable copies of mock data.
// Swap the implementations here for real API calls when ready.

import type {
  Coupon,
  CouponUsage,
  CouponStatus,
  Sport,
} from "./mock-data";

import {
  MOCK_COUPONS as SEED_COUPONS,
  MOCK_COUPON_USAGE as SEED_USAGE,
} from "./mock-data";

// ---------------------------------------------------------------------------
// Local mutable state (deep-cloned from seed data)
// ---------------------------------------------------------------------------

let coupons: Coupon[] = JSON.parse(JSON.stringify(SEED_COUPONS));
let couponUsage: CouponUsage[] = JSON.parse(JSON.stringify(SEED_USAGE));

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const now = () => new Date().toISOString();

const isExpired = (c: Coupon): boolean => {
  if (c.expiryType === "unlimited") return false;
  if (!c.expiryDate) return false;
  return new Date(c.expiryDate) < new Date();
};

const isUsageExhausted = (c: Coupon): boolean => {
  if (c.maxUses === "unlimited") return false;
  return c.usedCount >= c.maxUses;
};

// ---------------------------------------------------------------------------
// 1. getCoupons
// ---------------------------------------------------------------------------

export function getCoupons(): Coupon[] {
  return JSON.parse(JSON.stringify(coupons));
}

// ---------------------------------------------------------------------------
// 2. getCouponByCode
// ---------------------------------------------------------------------------

export function getCouponByCode(code: string): Coupon | undefined {
  const upper = code.toUpperCase();
  const found = coupons.find((c) => c.code.toUpperCase() === upper);
  return found ? JSON.parse(JSON.stringify(found)) : undefined;
}

// ---------------------------------------------------------------------------
// 3. getCouponStats
// ---------------------------------------------------------------------------

export interface CouponStats {
  totalCoupons: number;
  activeCoupons: number;
  expiredCoupons: number;
  totalRedemptions: number;
}

export function getCouponStats(): CouponStats {
  return {
    totalCoupons: coupons.length,
    activeCoupons: coupons.filter((c) => c.status === "active").length,
    expiredCoupons: coupons.filter(
      (c) => c.status === "expired" || isExpired(c),
    ).length,
    totalRedemptions: coupons.reduce((sum, c) => sum + c.usedCount, 0),
  };
}

// ---------------------------------------------------------------------------
// 4. getCouponUsage
// ---------------------------------------------------------------------------

export function getCouponUsage(code: string): CouponUsage[] {
  const upper = code.toUpperCase();
  return JSON.parse(
    JSON.stringify(
      couponUsage.filter((u) => u.couponCode.toUpperCase() === upper),
    ),
  );
}

// ---------------------------------------------------------------------------
// 5. createCoupon
// ---------------------------------------------------------------------------

export function createCoupon(
  data: Omit<Coupon, "usedCount" | "createdDate" | "lastModified">,
): Coupon {
  const existing = coupons.find(
    (c) => c.code.toUpperCase() === data.code.toUpperCase(),
  );
  if (existing) {
    throw new Error(`Coupon code "${data.code}" already exists.`);
  }

  const coupon: Coupon = {
    ...data,
    usedCount: 0,
    createdDate: now(),
    lastModified: now(),
  };

  coupons.push(coupon);
  return JSON.parse(JSON.stringify(coupon));
}

// ---------------------------------------------------------------------------
// 6. updateCoupon
// ---------------------------------------------------------------------------

export function updateCoupon(
  code: string,
  data: Partial<Coupon>,
): Coupon {
  const idx = coupons.findIndex(
    (c) => c.code.toUpperCase() === code.toUpperCase(),
  );
  if (idx === -1) {
    throw new Error(`Coupon "${code}" not found.`);
  }

  coupons[idx] = {
    ...coupons[idx],
    ...data,
    lastModified: now(),
  };

  return JSON.parse(JSON.stringify(coupons[idx]));
}

// ---------------------------------------------------------------------------
// 7. deleteCoupon
// ---------------------------------------------------------------------------

export function deleteCoupon(code: string): boolean {
  const upper = code.toUpperCase();
  const before = coupons.length;
  coupons = coupons.filter((c) => c.code.toUpperCase() !== upper);
  return coupons.length < before;
}

// ---------------------------------------------------------------------------
// 8. duplicateCoupon
// ---------------------------------------------------------------------------

export function duplicateCoupon(code: string): Coupon {
  const source = coupons.find(
    (c) => c.code.toUpperCase() === code.toUpperCase(),
  );
  if (!source) {
    throw new Error(`Coupon "${code}" not found.`);
  }

  const newCode = `${source.code}-COPY`;

  // Avoid duplicating into an existing code
  const collision = coupons.find(
    (c) => c.code.toUpperCase() === newCode.toUpperCase(),
  );
  if (collision) {
    throw new Error(`Coupon code "${newCode}" already exists.`);
  }

  const clone: Coupon = {
    ...JSON.parse(JSON.stringify(source)),
    code: newCode,
    usedCount: 0,
    status: "inactive" as CouponStatus,
    createdDate: now(),
    lastModified: now(),
  };

  coupons.push(clone);
  return JSON.parse(JSON.stringify(clone));
}

// ---------------------------------------------------------------------------
// 9. toggleCouponStatus
// ---------------------------------------------------------------------------

export function toggleCouponStatus(code: string): Coupon {
  const idx = coupons.findIndex(
    (c) => c.code.toUpperCase() === code.toUpperCase(),
  );
  if (idx === -1) {
    throw new Error(`Coupon "${code}" not found.`);
  }

  const coupon = coupons[idx];

  if (coupon.status === "expired") {
    throw new Error("Cannot toggle an expired coupon.");
  }

  coupon.status = coupon.status === "active" ? "inactive" : "active";
  coupon.lastModified = now();

  return JSON.parse(JSON.stringify(coupon));
}

// ---------------------------------------------------------------------------
// 10. validateCoupon
// ---------------------------------------------------------------------------

export interface CouponValidation {
  valid: boolean;
  discount: number;
  error?: string;
}

export function validateCoupon(
  code: string,
  bookingAmount: number,
  sport: string,
): CouponValidation {
  const coupon = coupons.find(
    (c) => c.code.toUpperCase() === code.toUpperCase(),
  );

  if (!coupon) {
    return { valid: false, discount: 0, error: "Coupon not found." };
  }

  if (coupon.status !== "active") {
    return { valid: false, discount: 0, error: "Coupon is not active." };
  }

  if (isExpired(coupon)) {
    return { valid: false, discount: 0, error: "Coupon has expired." };
  }

  if (isUsageExhausted(coupon)) {
    return {
      valid: false,
      discount: 0,
      error: "Coupon usage limit has been reached.",
    };
  }

  if (
    coupon.applicableSport !== "All Sports" &&
    coupon.applicableSport.toLowerCase() !== sport.toLowerCase()
  ) {
    return {
      valid: false,
      discount: 0,
      error: `Coupon is not valid for ${sport}.`,
    };
  }

  if (coupon.minBooking && bookingAmount < coupon.minBooking) {
    return {
      valid: false,
      discount: 0,
      error: `Minimum booking amount is ₹${coupon.minBooking}.`,
    };
  }

  // Calculate discount
  let discount: number;
  if (coupon.discountType === "percentage") {
    discount = (bookingAmount * coupon.discountValue) / 100;
    if (coupon.maxDiscount) {
      discount = Math.min(discount, coupon.maxDiscount);
    }
  } else {
    // flat
    discount = coupon.discountValue;
  }

  // Never discount more than the booking amount
  discount = Math.min(discount, bookingAmount);
  discount = Math.round(discount * 100) / 100;

  return { valid: true, discount };
}

// ---------------------------------------------------------------------------
// 11. applyCoupon
// ---------------------------------------------------------------------------

export function applyCoupon(
  code: string,
  bookingAmount: number,
  sport: string,
): CouponValidation {
  const result = validateCoupon(code, bookingAmount, sport);

  if (!result.valid) {
    return result;
  }

  // Increment usage on the internal coupon
  const coupon = coupons.find(
    (c) => c.code.toUpperCase() === code.toUpperCase(),
  );
  if (coupon) {
    coupon.usedCount += 1;
    coupon.lastModified = now();
  }

  return result;
}

// ---------------------------------------------------------------------------
// 12. getCouponAnalytics
// ---------------------------------------------------------------------------

export interface CouponAnalytics {
  totalUses: number;
  totalSavings: number;
  revenueGenerated: number;
  conversionRate: number;
}

export function getCouponAnalytics(code: string): CouponAnalytics {
  const upper = code.toUpperCase();
  const usage = couponUsage.filter(
    (u) => u.couponCode.toUpperCase() === upper,
  );
  const coupon = coupons.find((c) => c.code.toUpperCase() === upper);

  const totalUses = usage.length;
  const totalSavings = usage.reduce((sum, u) => sum + u.amountSaved, 0);

  // Revenue generated = sum of bookings that used this coupon (savings + what they paid)
  // We approximate revenue as totalSavings * 3 since we don't track full booking amounts in usage.
  // This gives a reasonable multiplier for demo purposes.
  const revenueGenerated = totalSavings * 3;

  // Conversion rate: percentage of max uses actually used
  let conversionRate = 0;
  if (coupon) {
    if (coupon.maxUses === "unlimited") {
      conversionRate = totalUses > 0 ? Math.min(totalUses / 100, 1) * 100 : 0;
    } else {
      conversionRate =
        coupon.maxUses > 0 ? (totalUses / coupon.maxUses) * 100 : 0;
    }
  }

  conversionRate = Math.round(conversionRate * 100) / 100;

  return { totalUses, totalSavings, revenueGenerated, conversionRate };
}
