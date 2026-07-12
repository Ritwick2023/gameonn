globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/AnimatePresence-BMp65tMK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1048-FQBvVniFMAJX54tW8o+fU7UYdbE\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 4168,
		"path": "../public/assets/AnimatePresence-BMp65tMK.js"
	},
	"/assets/Match-vOFaM3aK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be8d-VblmDjdq94om7te5pFDFhQX50U4\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 48781,
		"path": "../public/assets/Match-vOFaM3aK.js"
	},
	"/assets/activity-CgBrXwFm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df-Ykkbhx63RPhZps0eje/yAvXczjA\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 223,
		"path": "../public/assets/activity-CgBrXwFm.js"
	},
	"/assets/admin-B8eKLpZO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1be2-iBKYXib9rn9KRBciCHb2USByImI\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 7138,
		"path": "../public/assets/admin-B8eKLpZO.js"
	},
	"/assets/admin.announcements-CLmMYlwR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"983-Su5GxEKrR1kwqJ8ospmftcp+vOI\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 2435,
		"path": "../public/assets/admin.announcements-CLmMYlwR.js"
	},
	"/assets/admin.bookings-BLGeamBB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1278-MrRW8/MHiwP84E1Fx37jjXs82ps\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 4728,
		"path": "../public/assets/admin.bookings-BLGeamBB.js"
	},
	"/assets/admin.calendar-BcaUBmIc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c88-x15Vvvv2w8uL2xkJGtEDR8HGzn0\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 3208,
		"path": "../public/assets/admin.calendar-BcaUBmIc.js"
	},
	"/assets/admin.coupons-Cz3KIX8K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"45c2-slwIyKljmyNvDjU5CX1WITFcBl4\"",
		"mtime": "2026-07-12T04:36:04.744Z",
		"size": 17858,
		"path": "../public/assets/admin.coupons-Cz3KIX8K.js"
	},
	"/assets/admin.coupons_._code-D8x-tEvh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e8f-T4BaD/SUUlHQGoIjNCtvDhdqGKo\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 7823,
		"path": "../public/assets/admin.coupons_._code-D8x-tEvh.js"
	},
	"/assets/admin.customers-Dkn0n1gB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad8-Wc55dKDZlwG8FQSh+UAxuyp0yEI\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 2776,
		"path": "../public/assets/admin.customers-Dkn0n1gB.js"
	},
	"/assets/admin.gallery-ChlVaHau.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d03-MJievIH6RyppRc0bkONjOVwFLbI\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 3331,
		"path": "../public/assets/admin.gallery-ChlVaHau.js"
	},
	"/assets/admin.index-DOkH8_6H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"173f-tkpdANaM9RUE4AYaOXTdJzJ3ybc\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 5951,
		"path": "../public/assets/admin.index-DOkH8_6H.js"
	},
	"/assets/admin.payments-C1jXvmEW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f28-l9JskmVO5BAyX+RNFGpxW+IhJfI\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 3880,
		"path": "../public/assets/admin.payments-C1jXvmEW.js"
	},
	"/assets/admin.pricing-CIsOjOnB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5b-l6zuSkVu8UgyhbLHV/y3NfL3NTc\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 2651,
		"path": "../public/assets/admin.pricing-CIsOjOnB.js"
	},
	"/assets/admin.revenue-DzEhSJEo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a7-/+rlZho2oxXae+txgd6TmKGWhAo\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 2471,
		"path": "../public/assets/admin.revenue-DzEhSJEo.js"
	},
	"/assets/admin.reviews-Btk9FMo7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d85-13cObqxKzoOvKMCwogX4jVQSrTU\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 3461,
		"path": "../public/assets/admin.reviews-Btk9FMo7.js"
	},
	"/assets/admin.tournaments-DaJALxxV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f9-yDF+YqG6yZKpBgzEqHYrXpuB9YA\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 2553,
		"path": "../public/assets/admin.tournaments-DaJALxxV.js"
	},
	"/assets/admin.settings-kiS9rTjE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"150a-TU7ZrrDcfgLy1Q1E94ebopdK8s4\"",
		"mtime": "2026-07-12T04:36:04.745Z",
		"size": 5386,
		"path": "../public/assets/admin.settings-kiS9rTjE.js"
	},
	"/assets/arrow-left-CiJNaJzL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-kB//ZvrVwpNFzVHG1vWaEH4fpNU\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 154,
		"path": "../public/assets/arrow-left-CiJNaJzL.js"
	},
	"/assets/auth-BhLIdel0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"301-XC5Iw1VLHmRD5oU7tEthMANv2Wg\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 769,
		"path": "../public/assets/auth-BhLIdel0.js"
	},
	"/assets/award-BAM8WzD1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"107-fcgbKtoNVEyRVMJgVtEcaSjSJeU\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 263,
		"path": "../public/assets/award-BAM8WzD1.js"
	},
	"/assets/bell-BhNSIg-X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117-bWhoSWoiQb7lTADHW7pngdO7gHU\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 279,
		"path": "../public/assets/bell-BhNSIg-X.js"
	},
	"/assets/calendar-Dol8g-EP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f6-NjvhCbvet5+Q7dy5buTkoaultqE\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 246,
		"path": "../public/assets/calendar-Dol8g-EP.js"
	},
	"/assets/arrow-right-Chizq_1y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-UtfpbZuV/YHl7ND3RZbkqzDRZks\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 154,
		"path": "../public/assets/arrow-right-Chizq_1y.js"
	},
	"/assets/check-CLyLGtSw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71-5AaQYfF6G1higVhzKivNM6w5USk\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 113,
		"path": "../public/assets/check-CLyLGtSw.js"
	},
	"/assets/chevron-down-Bi7UUuT2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75-3q5T4LgAZloa9mnDsaU0n7GzECk\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 117,
		"path": "../public/assets/chevron-down-Bi7UUuT2.js"
	},
	"/assets/chevron-left-CD16Wziy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-qviCHaA1fXKorS6XoWd9j5yx6tg\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 119,
		"path": "../public/assets/chevron-left-CD16Wziy.js"
	},
	"/assets/chevron-right-CSl691NX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-CaQ7jS/xswTj17ernVpqcuOLrdY\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 119,
		"path": "../public/assets/chevron-right-CSl691NX.js"
	},
	"/assets/clipboard-list-DJvLBZNE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"190-5YQ7Tkq7Fsihthw62Deed5Y2pxQ\"",
		"mtime": "2026-07-12T04:36:04.746Z",
		"size": 400,
		"path": "../public/assets/clipboard-list-DJvLBZNE.js"
	},
	"/assets/clock-DbHU1Cxk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e-EAHKGXdrD0WfmnrSEBgT01Lb8/o\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 158,
		"path": "../public/assets/clock-DbHU1Cxk.js"
	},
	"/assets/cloud-C34OO4Vt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95-Iaig947pLISxtPXEqdCNaQ9aDt4\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 149,
		"path": "../public/assets/cloud-C34OO4Vt.js"
	},
	"/assets/complete-profile-DnQZYs4Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117c-2QTwST/e6axnqtCOwagl17l4BmQ\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 4476,
		"path": "../public/assets/complete-profile-DnQZYs4Z.js"
	},
	"/assets/coupon-service-C8RgiB2W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce2-DkQb4wrBesvvsmsu3qH4iUG2NCo\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 3298,
		"path": "../public/assets/coupon-service-C8RgiB2W.js"
	},
	"/assets/credit-card-BZvMYvNe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-Rg46jK6lzSkewyItHgWLY8jIS70\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 196,
		"path": "../public/assets/credit-card-BZvMYvNe.js"
	},
	"/assets/dashboard-DDaFRkem.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b71-WMyIt1v4icECrTIbrHfmcdidMT4\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 7025,
		"path": "../public/assets/dashboard-DDaFRkem.js"
	},
	"/assets/dashboard.book-Dgo0042K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1edd-QATRP4iV6pQv3+suzx+oazuzblM\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 7901,
		"path": "../public/assets/dashboard.book-Dgo0042K.js"
	},
	"/assets/dashboard.bookings-2oQNCGiJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"171f-D4tNBlMWX8L7WY+riTSApFaSyvg\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 5919,
		"path": "../public/assets/dashboard.bookings-2oQNCGiJ.js"
	},
	"/assets/dashboard.checkout-BCQ48Sp0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"499b-AsDRSlpqsG8Bzse90X1GsaWxjy4\"",
		"mtime": "2026-07-12T04:36:04.747Z",
		"size": 18843,
		"path": "../public/assets/dashboard.checkout-BCQ48Sp0.js"
	},
	"/assets/dashboard.index-CNfgIym6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"200b-p4HAmoCRjEjfyzZSqPovkEa2EmI\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 8203,
		"path": "../public/assets/dashboard.index-CNfgIym6.js"
	},
	"/assets/dashboard.matches-DtyjskJx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e57-nFC4W0XfZku0MXpjqKjGzwKaLFM\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 3671,
		"path": "../public/assets/dashboard.matches-DtyjskJx.js"
	},
	"/assets/dashboard.notifications-CB81lFL2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"950-ZiAlnBBrlG38cts15EMOo5lb6jA\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 2384,
		"path": "../public/assets/dashboard.notifications-CB81lFL2.js"
	},
	"/assets/dashboard.profile-DPGTjs3N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fcb-1E+rkJ+5R6A2yN4QnZhomCFoNxI\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 4043,
		"path": "../public/assets/dashboard.profile-DPGTjs3N.js"
	},
	"/assets/dashboard.payments-B6s89gll.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e84-RjALKxbDCcvKzuqrUBj1i/0D2Jg\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 3716,
		"path": "../public/assets/dashboard.payments-B6s89gll.js"
	},
	"/assets/dashboard.support-CwaWEw8p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c94-NNJlcQ41vP63hsp7zO/Wu4/2Pzk\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 3220,
		"path": "../public/assets/dashboard.support-CwaWEw8p.js"
	},
	"/assets/download-BdIk-0J-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dd-bFs+vd9oYYqD9bKxhAVHVg7ihtI\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 221,
		"path": "../public/assets/download-BdIk-0J-.js"
	},
	"/assets/flame-CnRkErSn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bc-cmgcnaWR7pN+KTQChh+QKc/KFjw\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 188,
		"path": "../public/assets/flame-CnRkErSn.js"
	},
	"/assets/funnel-NPWBffa2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-+YZ+MYj0xhB/Xd3GR6EO4sHVE4E\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 245,
		"path": "../public/assets/funnel-NPWBffa2.js"
	},
	"/assets/hero-ball-BT2Jnu1P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94-jgZaMiBaVpqg6Oy+ITlhNf/SLig\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 148,
		"path": "../public/assets/hero-ball-BT2Jnu1P.js"
	},
	"/assets/hero-ball-BPzHCuvY.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e918-77u0o2rcNQLQ4wEZm3a7JTzao7Q\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 125208,
		"path": "../public/assets/hero-ball-BPzHCuvY.jpg"
	},
	"/assets/hero-celebration-LHuHUyW5.jpg": {
		"type": "image/jpeg",
		"etag": "\"43d7c-0X81pqLO063arceAW1SaWJhClf0\"",
		"mtime": "2026-07-12T04:36:04.752Z",
		"size": 277884,
		"path": "../public/assets/hero-celebration-LHuHUyW5.jpg"
	},
	"/assets/hero-cricket-Co92YDWA.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c8ff-elyzdRcmEoXKzTlV0mxhnPghMN0\"",
		"mtime": "2026-07-12T04:36:04.752Z",
		"size": 248063,
		"path": "../public/assets/hero-cricket-Co92YDWA.jpg"
	},
	"/assets/hero-football-CIJ_YmZj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a-k4GOssjXRY+QPsKcHeg50KZEjZU\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 58,
		"path": "../public/assets/hero-football-CIJ_YmZj.js"
	},
	"/assets/hero-football-Cb0IrLWs.jpg": {
		"type": "image/jpeg",
		"etag": "\"44569-KJeSYVxu8f+C64wQ9iMDy2gluA0\"",
		"mtime": "2026-07-12T04:36:04.752Z",
		"size": 279913,
		"path": "../public/assets/hero-football-Cb0IrLWs.jpg"
	},
	"/assets/image-CjtjPCMo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102-H3ePaB+wnFlN5MgvnHNlCz0+izE\"",
		"mtime": "2026-07-12T04:36:04.748Z",
		"size": 258,
		"path": "../public/assets/image-CjtjPCMo.js"
	},
	"/assets/index-20tiyC8Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a3b2-L+W/wbVZsDNIFjdZn8z7+CkpHJ0\"",
		"mtime": "2026-07-12T04:36:04.743Z",
		"size": 369586,
		"path": "../public/assets/index-20tiyC8Y.js"
	},
	"/assets/indian-rupee-Cq0Eg72P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"118-OP9nP9a6X/rG5HE4Xf5hSlSD2ps\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 280,
		"path": "../public/assets/indian-rupee-Cq0Eg72P.js"
	},
	"/assets/instagram-CckqLBIq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"199-6PtZ7IBabiQOuOcBqr2X5xkYl8A\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 409,
		"path": "../public/assets/instagram-CckqLBIq.js"
	},
	"/assets/layout-dashboard-DyShtewX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"216-8MvX44C60Y4Z7yKP9mgLhJzGTiE\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 534,
		"path": "../public/assets/layout-dashboard-DyShtewX.js"
	},
	"/assets/link-DBLz1RPh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8ab0-yW41pxSSrrq0/ncafcCxV82Dr2c\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 35504,
		"path": "../public/assets/link-DBLz1RPh.js"
	},
	"/assets/log-out-BVYcbrj4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"db-1/fWFxCc1Ssv1CsoFq17v6iCeSU\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 219,
		"path": "../public/assets/log-out-BVYcbrj4.js"
	},
	"/assets/mail-DOszwStw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca-o3APmi/Uwxiy4M/zuDNZoY95tXU\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 202,
		"path": "../public/assets/mail-DOszwStw.js"
	},
	"/assets/login-Qcsu34nY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"264c-dyaX8X4s21NqJ8+2OMVYm5zGwBU\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 9804,
		"path": "../public/assets/login-Qcsu34nY.js"
	},
	"/assets/map-pin-CKWXZX2g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f8-NV0QRjaIKO/16R+lT3/NHT8/xjU\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 248,
		"path": "../public/assets/map-pin-CKWXZX2g.js"
	},
	"/assets/megaphone-D73zO0Fw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14f-8SCRoWR7mOe7dT2oex1a1rhKmI8\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 335,
		"path": "../public/assets/megaphone-D73zO0Fw.js"
	},
	"/assets/menu-DiMPjRBo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-0y3jXFg7RZ1vUhq1AZvREwNc4AY\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 178,
		"path": "../public/assets/menu-DiMPjRBo.js"
	},
	"/assets/message-circle-CSKyZ1J9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e6-hS6YqF9DbURORhmIIly0HPp69bo\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 230,
		"path": "../public/assets/message-circle-CSKyZ1J9.js"
	},
	"/assets/navigation-EjSojldl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"89-c8DYoGkP8R7+QeJ670nnGzrelI0\"",
		"mtime": "2026-07-12T04:36:04.749Z",
		"size": 137,
		"path": "../public/assets/navigation-EjSojldl.js"
	},
	"/assets/plus-Co_zmSYU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8e-V7pdd6wpVfdPK43zH/tkekH31yo\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 142,
		"path": "../public/assets/plus-Co_zmSYU.js"
	},
	"/assets/proxy-D147TKLG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dd9f-ZIWxZHqQjEau2zuUyligDCr2qO8\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 122271,
		"path": "../public/assets/proxy-D147TKLG.js"
	},
	"/assets/routes-DIe8IQG_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"df00-G7CnYsYZpNV9vMdlaK4ogC2IaFw\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 57088,
		"path": "../public/assets/routes-DIe8IQG_.js"
	},
	"/assets/search-d53jArup.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a3-HuPaZ0hgRMPEZrrXKK22pdrxTgg\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 163,
		"path": "../public/assets/search-d53jArup.js"
	},
	"/assets/shield-B3ezV9iw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"105-7ymulbTq1Py7OiPJi0F+FbcDIr4\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 261,
		"path": "../public/assets/shield-B3ezV9iw.js"
	},
	"/assets/sparkles-CZlpG29k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-BgMLkqV34tsDcjhMN4vq67Ezftc\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 483,
		"path": "../public/assets/sparkles-CZlpG29k.js"
	},
	"/assets/refresh-cw-DMobua3H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136-A+MSXIOyv43/gyzI0CcJ+hemVH8\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 310,
		"path": "../public/assets/refresh-cw-DMobua3H.js"
	},
	"/assets/phone-B57Gdw-y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"137-tfatHxpxNp/e8oDXMnjOEhdTtHQ\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 311,
		"path": "../public/assets/phone-B57Gdw-y.js"
	},
	"/assets/square-pen-khSD7W-9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-GoLuiaYgWIcpy073ra4K1By0mJs\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 309,
		"path": "../public/assets/square-pen-khSD7W-9.js"
	},
	"/assets/star-DYH1DhaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-JdePlWkUv7RfPnZ3x2vHsCiQ0mg\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 461,
		"path": "../public/assets/star-DYH1DhaE.js"
	},
	"/assets/tag-BoSmNxk-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13b-CYYly+wdkgtTDI0JK3cjXDLEvN0\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 315,
		"path": "../public/assets/tag-BoSmNxk-.js"
	},
	"/assets/ticket-percent-qnqqgxwZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-AmFvkwM4GgOwAcUROyfRNBTu9Xw\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 322,
		"path": "../public/assets/ticket-percent-qnqqgxwZ.js"
	},
	"/assets/trash-2-9Zab3GeZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13d-kcj4RiBr4ukDNNq5eHlmLTFm3qU\"",
		"mtime": "2026-07-12T04:36:04.750Z",
		"size": 317,
		"path": "../public/assets/trash-2-9Zab3GeZ.js"
	},
	"/assets/styles-ZR-QNeR3.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e5fe-DEe4CjEEnfP9/2zfiR1fCk9iFVE\"",
		"mtime": "2026-07-12T04:36:04.752Z",
		"size": 124414,
		"path": "../public/assets/styles-ZR-QNeR3.css"
	},
	"/assets/trending-up-DUYKpDZ3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-ifiMNOW+JteNxZlPrzS3eq4MPWo\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 164,
		"path": "../public/assets/trending-up-DUYKpDZ3.js"
	},
	"/assets/trophy-D8Go6hj9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d1-9JzWPC+0BCOLWzYvQv4kORiPHPU\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 465,
		"path": "../public/assets/trophy-D8Go6hj9.js"
	},
	"/assets/ui-bits-BwrYjNMM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f20-34L0W8O243OXjH1KbVjgU0co3Kc\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 3872,
		"path": "../public/assets/ui-bits-BwrYjNMM.js"
	},
	"/assets/useMatch-CCSN9WFP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"455-PPUsVMpnEw8C3J/+RszK1M2Txg4\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 1109,
		"path": "../public/assets/useMatch-CCSN9WFP.js"
	},
	"/assets/user-l5nPE4hq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b9-CnwwIdYaxvCQBPUbuq0T0T28kYc\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 185,
		"path": "../public/assets/user-l5nPE4hq.js"
	},
	"/assets/users-BfpaztLm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"127-Y+3GTicDAHO8XoqkCDiC4/RqKeo\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 295,
		"path": "../public/assets/users-BfpaztLm.js"
	},
	"/assets/wallet-Bg7rYCTs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"113-z+iW4/nYP7iikPI/tnFDbYUuPsY\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 275,
		"path": "../public/assets/wallet-Bg7rYCTs.js"
	},
	"/assets/wrench-CjCgPwcE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-l3W0n0+EFzPl/akcs6Q7UXF7dfM\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 292,
		"path": "../public/assets/wrench-CjCgPwcE.js"
	},
	"/assets/x-w2o-CTKV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8f-va5N7z++MwhN0wj84/S1y6lhOHI\"",
		"mtime": "2026-07-12T04:36:04.751Z",
		"size": 143,
		"path": "../public/assets/x-w2o-CTKV.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_VkvDlE = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_VkvDlE
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
