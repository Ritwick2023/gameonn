import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { J as IndianRupee, d as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.revenue-Mocch14t.js
var import_jsx_runtime = require_jsx_runtime();
var MONTHS = [
	{
		m: "Jan",
		v: 420
	},
	{
		m: "Feb",
		v: 380
	},
	{
		m: "Mar",
		v: 510
	},
	{
		m: "Apr",
		v: 470
	},
	{
		m: "May",
		v: 580
	},
	{
		m: "Jun",
		v: 642
	},
	{
		m: "Jul",
		v: 690
	},
	{
		m: "Aug",
		v: 720
	},
	{
		m: "Sep",
		v: 660
	},
	{
		m: "Oct",
		v: 750
	},
	{
		m: "Nov",
		v: 820
	},
	{
		m: "Dec",
		v: 880
	}
];
function Revenue() {
	const max = Math.max(...MONTHS.map((m) => m.v));
	const ytd = MONTHS.reduce((s, m) => s + m.v, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Revenue",
				subtitle: "Year-to-date performance across all sports."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "YTD revenue",
						value: `₹${(ytd / 100).toFixed(1)}L`,
						delta: "+24% YoY",
						tint: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Avg per booking",
						value: "₹1,540",
						delta: "+₹120",
						tint: "accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						label: "Best month",
						value: "Dec",
						delta: "₹8.8L",
						tint: "primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl glass p-6 shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold",
					children: "Monthly revenue (₹ thousands)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex h-64 items-end gap-2",
					children: MONTHS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex flex-1 flex-col items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-[10px] tabular-nums text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100",
								children: [
									"₹",
									m.v,
									"k"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full rounded-t-xl bg-gradient-to-t from-primary/30 to-primary transition-all hover:from-primary hover:to-primary-glow",
								style: { height: `${m.v / max * 100}%` }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								children: m.m
							})
						]
					}, m.m))
				})]
			}) })
		]
	});
}
function Card({ label, value, delta, tint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl glass p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: `h-4 w-4 ${tint === "primary" ? "text-primary" : "text-accent"}` })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 font-display text-3xl font-bold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3 text-primary" }),
					" ",
					delta
				]
			})
		]
	}) });
}
//#endregion
export { Revenue as component };
