import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { B as MapPin, J as IndianRupee, P as Navigation, l as Trophy, lt as Cloud, o as Users } from "../_libs/lucide-react.mjs";
import { o as MOCK_MATCHES } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.matches-DsyOXPzw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Matches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Upcoming matches",
			subtitle: "Tournaments, leagues and pickup games near you."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3",
			children: MOCK_MATCHES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MatchCard, { m })
			}, m.id))
		})]
	});
}
function MatchCard({ m }) {
	const target = (/* @__PURE__ */ new Date(`${m.date}T${m.time}:00`)).getTime();
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(t);
	}, []);
	const diff = Math.max(0, target - now);
	const d = Math.floor(diff / 864e5);
	const h = Math.floor(diff % 864e5 / 36e5);
	const mi = Math.floor(diff % 36e5 / 6e4);
	const pct = m.joined / m.slots * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-elevated",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary ring-1 ring-primary/20",
					children: new Date(m.date).toLocaleDateString("en-IN", {
						weekday: "short",
						day: "numeric",
						month: "short"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-amber-400" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-xl font-bold leading-tight",
				children: m.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 text-xs text-muted-foreground",
				children: ["Kickoff ", m.time]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
				children: [
					{
						v: d,
						l: "Days"
					},
					{
						v: h,
						l: "Hours"
					},
					{
						v: mi,
						l: "Min"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xl font-bold tabular-nums text-primary",
						children: c.v.toString().padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
						children: c.l
					})]
				}, c.l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-2 gap-3 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-3.5 w-3.5" }), " 28°C clear"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " Game Onn Arena"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mr-1 inline h-3 w-3" }),
						" ",
						m.joined,
						"/",
						m.slots,
						" joined"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-baseline gap-0.5 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-3 w-3" }), m.prize.toLocaleString("en-IN")]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 h-1.5 overflow-hidden rounded-full bg-white/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-gradient-to-r from-primary to-primary-glow",
						style: { width: `${pct}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
					variant: "ghost",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-3.5 w-3.5" }), " Directions"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
					variant: "primary",
					size: "sm",
					children: "Join"
				})]
			})
		]
	});
}
//#endregion
export { Matches as component };
