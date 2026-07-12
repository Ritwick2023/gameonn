import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { f as Trash2, h as Tag, k as Plus, r as Wrench, v as SquarePen, z as Megaphone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.announcements-C7dqvrHU.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		type: "offer",
		icon: Tag,
		title: "Weekend Madness — 20% off",
		desc: "Auto-apply on weekend slots. Code GAMEON20.",
		live: true
	},
	{
		type: "maintenance",
		icon: Wrench,
		title: "Pitch 1 maintenance — Mon 6-10 AM",
		desc: "Re-turfing. Pitch 1 closed during this window.",
		live: true
	},
	{
		type: "announcement",
		icon: Megaphone,
		title: "New: Pickleball courts open",
		desc: "Two new courts. Book any time after July 1.",
		live: false
	}
];
var TINT = {
	offer: "bg-amber-400/15 text-amber-400 ring-amber-400/30",
	maintenance: "bg-destructive/15 text-destructive ring-destructive/30",
	announcement: "bg-accent/15 text-accent ring-accent/30"
};
function AdminAnnouncements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Announcements",
			subtitle: "Banners, offers and maintenance notices.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
				variant: "primary",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New banner"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: ITEMS.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-3xl glass p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ${TINT[it.type]}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "truncate font-semibold",
									children: it.title
								}), it.live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary ring-1 ring-primary/30",
									children: "Live"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 truncate text-xs text-muted-foreground",
								children: it.desc
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:bg-white/5 hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "grid h-9 w-9 place-items-center rounded-lg text-destructive hover:bg-destructive/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})
					]
				})
			}, i))
		})]
	});
}
//#endregion
export { AdminAnnouncements as component };
