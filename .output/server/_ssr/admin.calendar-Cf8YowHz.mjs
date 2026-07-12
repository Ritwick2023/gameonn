import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { F as Move, ht as ChevronLeft, mt as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.calendar-Cf8YowHz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"bg-primary/30 text-primary",
	"bg-accent/30 text-accent",
	"bg-amber-400/30 text-amber-400",
	"bg-fuchsia-400/30 text-fuchsia-400"
];
function AdminCalendar() {
	const [month, setMonth] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const days = (0, import_react.useMemo)(() => buildMonth(month), [month]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Calendar",
			subtitle: "Color-coded bookings across all courts.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
				variant: "ghost",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Move, { className: "h-4 w-4" }), " Drag & drop"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl glass p-5 shadow-elevated",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold",
						children: month.toLocaleString("en-IN", {
							month: "long",
							year: "numeric"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)),
								className: "grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMonth(/* @__PURE__ */ new Date()),
								className: "rounded-full glass px-4 py-2 text-xs font-medium",
								children: "Today"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)),
								className: "grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-7 gap-1 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
					children: [
						"Sun",
						"Mon",
						"Tue",
						"Wed",
						"Thu",
						"Fri",
						"Sat"
					].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-2",
						children: d
					}, d))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-7 gap-1",
					children: days.map((d, i) => {
						const evts = d.day ? d.day * 3 % 7 : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `min-h-24 rounded-xl p-2 ring-1 ring-white/5 transition-colors ${d.day ? "bg-surface hover:bg-white/[0.03]" : "bg-transparent ring-transparent"}`,
							children: d.day && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-xs text-muted-foreground",
								children: d.day
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 space-y-1",
								children: [Array.from({ length: Math.min(3, evts) }, (_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `truncate rounded px-1.5 py-0.5 font-mono text-[9px] ${COLORS[(d.day + j) % COLORS.length]}`,
									children: [
										"FB 6PM",
										"CR 4PM",
										"BX 8PM",
										"PB 7AM"
									][(d.day + j) % 4]
								}, j)), evts > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[9px] text-muted-foreground",
									children: [
										"+",
										evts - 3,
										" more"
									]
								})]
							})] })
						}, i);
					})
				})
			]
		}) })]
	});
}
function buildMonth(d) {
	const y = d.getFullYear(), m = d.getMonth();
	const first = new Date(y, m, 1).getDay();
	const last = new Date(y, m + 1, 0).getDate();
	const cells = [];
	for (let i = 0; i < first; i++) cells.push({ day: null });
	for (let i = 1; i <= last; i++) cells.push({ day: i });
	while (cells.length % 7 !== 0) cells.push({ day: null });
	return cells;
}
//#endregion
export { AdminCalendar as component };
