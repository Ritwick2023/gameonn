import { i as MOCK_COUPON_USAGE, r as MOCK_COUPONS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupon-service-Co2IwYlD.js
var coupons = JSON.parse(JSON.stringify(MOCK_COUPONS));
var couponUsage = JSON.parse(JSON.stringify(MOCK_COUPON_USAGE));
var now = () => (/* @__PURE__ */ new Date()).toISOString();
var isExpired = (c) => {
	if (c.expiryType === "unlimited") return false;
	if (!c.expiryDate) return false;
	return new Date(c.expiryDate) < /* @__PURE__ */ new Date();
};
var isUsageExhausted = (c) => {
	if (c.maxUses === "unlimited") return false;
	return c.usedCount >= c.maxUses;
};
function getCoupons() {
	return JSON.parse(JSON.stringify(coupons));
}
function getCouponByCode(code) {
	const upper = code.toUpperCase();
	const found = coupons.find((c) => c.code.toUpperCase() === upper);
	return found ? JSON.parse(JSON.stringify(found)) : void 0;
}
function getCouponStats() {
	return {
		totalCoupons: coupons.length,
		activeCoupons: coupons.filter((c) => c.status === "active").length,
		expiredCoupons: coupons.filter((c) => c.status === "expired" || isExpired(c)).length,
		totalRedemptions: coupons.reduce((sum, c) => sum + c.usedCount, 0)
	};
}
function getCouponUsage(code) {
	const upper = code.toUpperCase();
	return JSON.parse(JSON.stringify(couponUsage.filter((u) => u.couponCode.toUpperCase() === upper)));
}
function createCoupon(data) {
	if (coupons.find((c) => c.code.toUpperCase() === data.code.toUpperCase())) throw new Error(`Coupon code "${data.code}" already exists.`);
	const coupon = {
		...data,
		usedCount: 0,
		createdDate: now(),
		lastModified: now()
	};
	coupons.push(coupon);
	return JSON.parse(JSON.stringify(coupon));
}
function updateCoupon(code, data) {
	const idx = coupons.findIndex((c) => c.code.toUpperCase() === code.toUpperCase());
	if (idx === -1) throw new Error(`Coupon "${code}" not found.`);
	coupons[idx] = {
		...coupons[idx],
		...data,
		lastModified: now()
	};
	return JSON.parse(JSON.stringify(coupons[idx]));
}
function deleteCoupon(code) {
	const upper = code.toUpperCase();
	const before = coupons.length;
	coupons = coupons.filter((c) => c.code.toUpperCase() !== upper);
	return coupons.length < before;
}
function duplicateCoupon(code) {
	const source = coupons.find((c) => c.code.toUpperCase() === code.toUpperCase());
	if (!source) throw new Error(`Coupon "${code}" not found.`);
	const newCode = `${source.code}-COPY`;
	if (coupons.find((c) => c.code.toUpperCase() === newCode.toUpperCase())) throw new Error(`Coupon code "${newCode}" already exists.`);
	const clone = {
		...JSON.parse(JSON.stringify(source)),
		code: newCode,
		usedCount: 0,
		status: "inactive",
		createdDate: now(),
		lastModified: now()
	};
	coupons.push(clone);
	return JSON.parse(JSON.stringify(clone));
}
function toggleCouponStatus(code) {
	const idx = coupons.findIndex((c) => c.code.toUpperCase() === code.toUpperCase());
	if (idx === -1) throw new Error(`Coupon "${code}" not found.`);
	const coupon = coupons[idx];
	if (coupon.status === "expired") throw new Error("Cannot toggle an expired coupon.");
	coupon.status = coupon.status === "active" ? "inactive" : "active";
	coupon.lastModified = now();
	return JSON.parse(JSON.stringify(coupon));
}
function validateCoupon(code, bookingAmount, sport) {
	const coupon = coupons.find((c) => c.code.toUpperCase() === code.toUpperCase());
	if (!coupon) return {
		valid: false,
		discount: 0,
		error: "Coupon not found."
	};
	if (coupon.status !== "active") return {
		valid: false,
		discount: 0,
		error: "Coupon is not active."
	};
	if (isExpired(coupon)) return {
		valid: false,
		discount: 0,
		error: "Coupon has expired."
	};
	if (isUsageExhausted(coupon)) return {
		valid: false,
		discount: 0,
		error: "Coupon usage limit has been reached."
	};
	if (coupon.applicableSport !== "All Sports" && coupon.applicableSport.toLowerCase() !== sport.toLowerCase()) return {
		valid: false,
		discount: 0,
		error: `Coupon is not valid for ${sport}.`
	};
	if (coupon.minBooking && bookingAmount < coupon.minBooking) return {
		valid: false,
		discount: 0,
		error: `Minimum booking amount is ₹${coupon.minBooking}.`
	};
	let discount;
	if (coupon.discountType === "percentage") {
		discount = bookingAmount * coupon.discountValue / 100;
		if (coupon.maxDiscount) discount = Math.min(discount, coupon.maxDiscount);
	} else discount = coupon.discountValue;
	discount = Math.min(discount, bookingAmount);
	discount = Math.round(discount * 100) / 100;
	return {
		valid: true,
		discount
	};
}
function getCouponAnalytics(code) {
	const upper = code.toUpperCase();
	const usage = couponUsage.filter((u) => u.couponCode.toUpperCase() === upper);
	const coupon = coupons.find((c) => c.code.toUpperCase() === upper);
	const totalUses = usage.length;
	const totalSavings = usage.reduce((sum, u) => sum + u.amountSaved, 0);
	const revenueGenerated = totalSavings * 3;
	let conversionRate = 0;
	if (coupon) if (coupon.maxUses === "unlimited") conversionRate = totalUses > 0 ? Math.min(totalUses / 100, 1) * 100 : 0;
	else conversionRate = coupon.maxUses > 0 ? totalUses / coupon.maxUses * 100 : 0;
	conversionRate = Math.round(conversionRate * 100) / 100;
	return {
		totalUses,
		totalSavings,
		revenueGenerated,
		conversionRate
	};
}
//#endregion
export { getCouponByCode as a, getCoupons as c, validateCoupon as d, getCouponAnalytics as i, toggleCouponStatus as l, deleteCoupon as n, getCouponStats as o, duplicateCoupon as r, getCouponUsage as s, createCoupon as t, updateCoupon as u };
