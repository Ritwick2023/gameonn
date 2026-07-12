import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { J as IndianRupee, v as SquarePen } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.pricing-NE2oKad2.js
var import_jsx_runtime = require_jsx_runtime();
var TIERS = [
	{
		slot: "Morning",
		time: "6 AM – 12 PM",
		football: 800,
		cricket: 1200,
		box: 1e3,
		pickle: 600
	},
	{
		slot: "Afternoon",
		time: "12 PM – 5 PM",
		football: 1e3,
		cricket: 1500,
		box: 1200,
		pickle: 700
	},
	{
		slot: "Evening",
		time: "5 PM – 10 PM",
		football: 1500,
		cricket: 1800,
		box: 1500,
		pickle: 800
	},
	{
		slot: "Weekend",
		time: "Sat-Sun (all)",
		football: 1800,
		cricket: 2200,
		box: 1800,
		pickle: 1e3
	},
	{
		slot: "Tournament",
		time: "Custom",
		football: 2500,
		cricket: 3e3,
		box: 2500,
		pickle: 1500
	},
	{
		slot: "Holiday",
		time: "Public holidays",
		football: 2e3,
		cricket: 2400,
		box: 2e3,
		pickle: 1100
	}
];
function PricingAdmin() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Pricing",
			subtitle: "Manage slot rates per sport. Updates apply to new bookings.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
				variant: "primary",
				size: "sm",
				children: "+ Add tier"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-3xl glass shadow-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-white/[0.02] text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "Tier"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3",
							children: "Window"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 text-right",
							children: "Football"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 text-right",
							children: "Cricket"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 text-right",
							children: "Box Cricket"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 text-right",
							children: "Pickleball"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-5 py-3" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
					className: "divide-y divide-white/5",
					children: TIERS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "hover:bg-white/[0.02]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-4 font-semibold",
								children: t.slot
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-4 text-xs text-muted-foreground",
								children: t.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: t.football }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: t.cricket }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: t.box }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Money, { v: t.pickle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-5 py-4 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-3 w-3" }), " Edit"]
								})
							})
						]
					}, t.slot))
				})]
			})
		}) })]
	});
}
function Money({ v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
		className: "px-5 py-4 text-right",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-baseline gap-0.5 font-mono font-semibold tabular-nums",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-3 w-3 text-muted-foreground" }), v]
		})
	});
}
//#endregion
export { PricingAdmin as component };
