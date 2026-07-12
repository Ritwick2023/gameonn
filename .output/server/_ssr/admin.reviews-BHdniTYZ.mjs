import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as StatusPill, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { I as MessageSquare, _ as Star, nt as EyeOff } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.reviews-BHdniTYZ.js
var import_jsx_runtime = require_jsx_runtime();
var REVIEWS = [
	{
		id: 1,
		name: "Aarav D.",
		rating: 5,
		text: "Best turf in Wardha, hands down. Floodlights are insane.",
		status: "Approved",
		date: "2026-06-22"
	},
	{
		id: 2,
		name: "Priya K.",
		rating: 5,
		text: "Organized our office tournament here. Staff was great.",
		status: "Approved",
		date: "2026-06-18"
	},
	{
		id: 3,
		name: "Anonymous",
		rating: 2,
		text: "Bathroom was dirty when I arrived.",
		status: "Pending",
		date: "2026-06-28"
	},
	{
		id: 4,
		name: "Rohit P.",
		rating: 5,
		text: "Quality you'd expect in Mumbai or Pune.",
		status: "Approved",
		date: "2026-06-15"
	}
];
function AdminReviews() {
	const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Reviews",
				subtitle: `${REVIEWS.length} total · avg ${avg}★`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Average rating",
						value: `${avg}★`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Total reviews",
						value: String(REVIEWS.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Pending moderation",
						value: String(REVIEWS.filter((r) => r.status === "Pending").length)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-3xl glass p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display font-bold text-primary-foreground",
									children: r.name[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex",
									children: [...Array(r.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-amber-400 text-amber-400" }, i))
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: r.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: r.date
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: [
								"\"",
								r.text,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-1 rounded-full glass px-3 py-1.5 text-xs font-medium hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-3 w-3" }), " Reply"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-1 rounded-full glass px-3 py-1.5 text-xs font-medium hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-3 w-3" }), " Hide"]
							})]
						})
					]
				}, r.id))
			}) })
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl glass p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 font-display text-3xl font-bold",
			children: value
		})]
	}) });
}
//#endregion
export { AdminReviews as component };
