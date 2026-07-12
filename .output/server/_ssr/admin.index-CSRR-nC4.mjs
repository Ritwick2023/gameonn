import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as StatusPill, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { $ as Flame, J as IndianRupee, Ot as ArrowUpRight, Y as Image, dt as ClipboardList, jt as Activity, l as Trophy, o as Users, pt as CircleAlert, xt as Calendar, z as Megaphone } from "../_libs/lucide-react.mjs";
import { n as MOCK_BOOKINGS, t as ADMIN_STATS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-CSRR-nC4.js
var import_jsx_runtime = require_jsx_runtime();
var QUICK_ACTIONS = [
	{
		to: "/admin/bookings",
		label: "Manage Bookings",
		desc: "Approve, cancel or block slots",
		icon: ClipboardList,
		tint: "primary"
	},
	{
		to: "/admin/calendar",
		label: "Slot Manager",
		desc: "Open the master calendar",
		icon: Calendar,
		tint: "accent"
	},
	{
		to: "/admin/customers",
		label: "Customers",
		desc: "Player directory & history",
		icon: Users,
		tint: "primary"
	},
	{
		to: "/admin/tournaments",
		label: "Tournaments",
		desc: "Create or manage events",
		icon: Trophy,
		tint: "accent"
	},
	{
		to: "/admin/announcements",
		label: "Announcements",
		desc: "Push banners & offers",
		icon: Megaphone,
		tint: "primary"
	},
	{
		to: "/admin/gallery",
		label: "Gallery",
		desc: "Upload & reorder media",
		icon: Image,
		tint: "accent"
	}
];
function AdminDashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Operations dashboard",
				subtitle: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
					weekday: "long",
					day: "numeric",
					month: "long",
					year: "numeric"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Today's revenue",
						value: `₹${ADMIN_STATS.todayRevenue.toLocaleString("en-IN")}`,
						delta: "+12% vs yesterday",
						icon: IndianRupee,
						tint: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Today's bookings",
						value: String(ADMIN_STATS.todayBookings),
						delta: "+3 vs yesterday",
						icon: Calendar,
						tint: "accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Occupancy",
						value: `${ADMIN_STATS.occupancy}%`,
						delta: "Peak hours 7-9 PM",
						icon: Activity,
						tint: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Pending payments",
						value: String(ADMIN_STATS.pendingPayments),
						delta: "Needs review",
						icon: CircleAlert,
						tint: "warn"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl glass p-6 shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
						children: "Quick actions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-xl font-semibold",
						children: "Jump into a task"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
					children: QUICK_ACTIONS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: a.to,
						className: "group flex items-center gap-4 rounded-2xl bg-background/40 p-4 ring-1 ring-white/5 transition-all hover:-translate-y-0.5 hover:bg-background/60 hover:ring-primary/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ${a.tint === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-semibold",
									children: a.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-xs text-muted-foreground",
									children: a.desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" })
						]
					}, a.to))
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-3xl glass shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-white/5 px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: "Recent activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/bookings",
						className: "inline-flex items-center gap-1 text-xs text-accent hover:underline",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-white/5",
					children: MOCK_BOOKINGS.slice(0, 5).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-5 py-3.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "truncate text-sm font-semibold",
									children: [
										b.sport,
										" · ",
										b.court
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: b.id
										}),
										" · ",
										b.date,
										" ",
										b.time
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden font-mono text-sm font-bold tabular-nums sm:inline",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "mr-0.5 inline h-3 w-3" }), b.price]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: b.status })
						]
					}, b.id))
				})]
			}) })
		]
	});
}
function Kpi({ label, value, delta, icon: Icon, tint }) {
	const tints = {
		primary: {
			grad: "from-primary/15 to-transparent",
			icon: "text-primary",
			ring: "ring-primary/20"
		},
		accent: {
			grad: "from-accent/15 to-transparent",
			icon: "text-accent",
			ring: "ring-accent/20"
		},
		warn: {
			grad: "from-amber-400/15 to-transparent",
			icon: "text-amber-400",
			ring: "ring-amber-400/20"
		}
	}[tint];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden rounded-3xl glass p-5 ring-1 ${tints.ring}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 -z-10 bg-gradient-to-br ${tints.grad}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${tints.icon}` })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 font-display text-3xl font-bold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs text-muted-foreground",
				children: delta
			})
		]
	}) });
}
//#endregion
export { AdminDashboard as component };
