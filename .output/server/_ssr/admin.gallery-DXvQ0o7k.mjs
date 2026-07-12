import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { Z as GripVertical, c as Upload, f as Trash2, k as Plus, tt as Eye } from "../_libs/lucide-react.mjs";
import { t as hero_football_default } from "./hero-football-BpCt-I9d.mjs";
import { n as hero_celebration_default, r as hero_cricket_default, t as hero_ball_default } from "./hero-ball-CQp4CFNz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.gallery-DXvQ0o7k.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		src: hero_football_default,
		cat: "Football",
		id: 1
	},
	{
		src: hero_cricket_default,
		cat: "Cricket",
		id: 2
	},
	{
		src: hero_celebration_default,
		cat: "Night Matches",
		id: 3
	},
	{
		src: hero_ball_default,
		cat: "Football",
		id: 4
	},
	{
		src: hero_football_default,
		cat: "Tournament",
		id: 5
	},
	{
		src: hero_celebration_default,
		cat: "Football",
		id: 6
	}
];
function AdminGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Gallery manager",
			subtitle: `${ITEMS.length} images · drag to reorder`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
				variant: "primary",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Upload"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-3xl glass p-6 shadow-elevated",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid aspect-square place-items-center rounded-2xl border-2 border-dashed border-white/15 bg-surface/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium",
							children: "Upload images"
						})]
					})
				}), ITEMS.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: it.src,
							alt: it.cat,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-2 top-2 cursor-grab rounded-md bg-background/70 p-1 opacity-0 transition-opacity group-hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-3.5 w-3.5 text-muted-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-2 left-2 right-2 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-wider text-foreground",
								children: it.cat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1 opacity-0 transition-opacity group-hover:opacity-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "grid h-7 w-7 place-items-center rounded-md bg-background/80 text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "grid h-7 w-7 place-items-center rounded-md bg-destructive/80 text-destructive-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
								})]
							})]
						})
					]
				}, it.id))]
			})
		}) })]
	});
}
//#endregion
export { AdminGallery as component };
