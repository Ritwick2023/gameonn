import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as SPORTS } from "./mock-data-Bn1rr24g.mjs";
import { i as stringType, n as enumType, r as objectType, t as coerce } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.checkout-B8Di8UIK.js
var $$splitComponentImporter = () => import("./dashboard.checkout-BmfFtnIW.mjs");
var checkoutSearch = objectType({
	sport: enumType(SPORTS).catch("Football"),
	date: stringType().catch((/* @__PURE__ */ new Date()).toISOString().slice(0, 10)),
	hour: coerce.number().min(6).max(22).catch(19),
	court: stringType().catch("Turf A"),
	price: coerce.number().catch(1500)
});
var Route = createFileRoute("/dashboard/checkout")({
	head: () => ({ meta: [{ title: "Checkout — Game Onn" }] }),
	validateSearch: checkoutSearch,
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
