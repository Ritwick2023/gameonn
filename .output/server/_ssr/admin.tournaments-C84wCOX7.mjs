import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as StatusPill, i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { J as IndianRupee, k as Plus, l as Trophy, o as Users, v as SquarePen } from "../_libs/lucide-react.mjs";
import { o as MOCK_MATCHES } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.tournaments-C84wCOX7.js
var import_jsx_runtime = require_jsx_runtime();
function AdminTournaments() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Tournament manager",
			subtitle: `${MOCK_MATCHES.length} active tournaments`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
				variant: "primary",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Create tournament"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
			children: MOCK_MATCHES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl glass p-5 shadow-elevated",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: "Approved" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-xl font-bold",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: [
								m.date,
								" · ",
								m.time
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-3 w-3" }), " Participants"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-mono text-lg font-bold tabular-nums",
									children: [
										m.joined,
										"/",
										m.slots
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-3 w-3" }), " Prize"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-mono text-lg font-bold tabular-nums",
									children: [
										"₹",
										(m.prize / 1e3).toFixed(0),
										"k"
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 overflow-hidden rounded-full bg-white/5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-gradient-to-r from-primary to-primary-glow",
									style: { width: `${m.joined / m.slots * 100}%` }
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mt-5 inline-flex w-full items-center justify-center gap-1 rounded-full glass py-2 text-xs font-medium hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-3 w-3" }), " Manage"]
						})
					]
				})
			}, m.id))
		})]
	});
}
//#endregion
export { AdminTournaments as component };
