import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { _t as Check, h as Tag, l as Trophy, r as Wrench, wt as Bell, xt as Calendar, z as Megaphone } from "../_libs/lucide-react.mjs";
import { s as MOCK_NOTIFICATIONS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.notifications-6pb7EfJF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ICON = {
	booking: Calendar,
	offer: Tag,
	reminder: Bell,
	tournament: Trophy,
	maintenance: Wrench,
	announcement: Megaphone
};
var TINT = {
	booking: "text-primary bg-primary/15 ring-primary/30",
	offer: "text-amber-400 bg-amber-400/15 ring-amber-400/30",
	reminder: "text-accent bg-accent/15 ring-accent/30",
	tournament: "text-amber-400 bg-amber-400/15 ring-amber-400/30",
	maintenance: "text-destructive bg-destructive/15 ring-destructive/30"
};
function Notifications() {
	const [items, setItems] = (0, import_react.useState)(MOCK_NOTIFICATIONS);
	const unread = items.filter((i) => i.unread).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Notifications",
			subtitle: `${unread} unread`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setItems((arr) => arr.map((i) => ({
					...i,
					unread: false
				}))),
				className: "inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium hover:bg-white/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }), " Mark all read"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y divide-white/5 rounded-3xl glass shadow-elevated",
			children: items.map((n) => {
				const Icon = ICON[n.type] ?? Bell;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					onClick: () => setItems((arr) => arr.map((i) => i.id === n.id ? {
						...i,
						unread: false
					} : i)),
					className: `grid cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-4 p-5 transition-colors hover:bg-white/[0.02] ${n.unread ? "bg-primary/[0.03]" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ${TINT[n.type] ?? "bg-white/5 text-muted-foreground ring-white/10"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "truncate text-sm font-semibold",
									children: n.title
								}), n.unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-primary" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: n.desc
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
							children: n.time
						})
					]
				}, n.id);
			})
		}) })]
	});
}
//#endregion
export { Notifications as component };
