import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { f as Outlet, g as Link, l as useRouterState, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Logo } from "./ui-bits-Dg99qRjR.mjs";
import { r as useRole, t as clearRole } from "./auth-DwoQbfNO.mjs";
import { E as Search, G as LayoutDashboard, H as LogOut, R as Menu, St as CalendarPlus, W as LifeBuoy, a as Wallet, dt as ClipboardList, l as Trophy, n as X, s as User, wt as Bell } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DhAy96pP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard,
		end: true
	},
	{
		to: "/dashboard/book",
		label: "Book Slot",
		icon: CalendarPlus
	},
	{
		to: "/dashboard/bookings",
		label: "My Bookings",
		icon: ClipboardList
	},
	{
		to: "/dashboard/matches",
		label: "Upcoming Matches",
		icon: Trophy
	},
	{
		to: "/dashboard/payments",
		label: "Payment History",
		icon: Wallet
	},
	{
		to: "/dashboard/notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		to: "/dashboard/profile",
		label: "Profile",
		icon: User
	},
	{
		to: "/dashboard/support",
		label: "Support",
		icon: LifeBuoy
	}
];
function DashboardShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const path = useRouterState({ select: (s) => s.location.pathname });
	const navigate = useNavigate();
	const logout = () => {
		clearRole();
		navigate({
			to: "/login",
			replace: true
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen lg:grid lg:grid-cols-[260px_minmax(0,1fr)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "sticky top-0 hidden h-screen flex-col border-r border-white/5 bg-surface/40 backdrop-blur-xl lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-6 pt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-8 flex-1 space-y-1 px-3",
						children: NAV.map((item) => {
							const active = item.end ? path === item.to : path.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`,
								children: [
									active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										layoutId: "dash-active",
										className: "absolute inset-y-1.5 left-0 w-1 rounded-r-full bg-primary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4 shrink-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: item.label
									})
								]
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: logout,
							className: "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 lg:hidden",
				onClick: () => setOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/80 backdrop-blur-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
					initial: { x: -280 },
					animate: { x: 0 },
					exit: { x: -280 },
					transition: {
						type: "spring",
						bounce: .05,
						duration: .4
					},
					onClick: (e) => e.stopPropagation(),
					className: "absolute inset-y-0 left-0 flex w-72 flex-col border-r border-white/10 bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(false),
							className: "grid h-9 w-9 place-items-center rounded-full glass",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-2 flex-1 space-y-1 px-3",
						children: NAV.map((item) => {
							const active = item.end ? path === item.to : path.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								onClick: () => setOpen(false),
								className: `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${active ? "bg-primary/15 text-primary" : "text-muted-foreground"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }),
									" ",
									item.label
								]
							}, item.to);
						})
					})]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-screen flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-30 flex items-center gap-3 border-b border-white/5 bg-background/70 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setOpen(true),
								"aria-label": "Menu",
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-full glass lg:hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden flex-1 items-center gap-2 rounded-full glass px-4 py-2 sm:flex lg:max-w-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										placeholder: "Search bookings, matches, sports...",
										className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "hidden rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline",
										children: "⌘K"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 items-center justify-end gap-2 sm:flex-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard/notifications",
									className: "relative grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/dashboard/profile",
									className: "flex items-center gap-2 rounded-full glass py-1 pl-1 pr-3 hover:bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground",
										children: "A"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden text-sm font-medium sm:inline",
										children: "Aarav"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "flex-1 px-4 pb-32 pt-6 sm:px-6 lg:px-10 lg:pb-12",
						children
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "fixed inset-x-3 bottom-3 z-30 flex items-center justify-around rounded-2xl glass-strong p-2 shadow-elevated lg:hidden",
						children: [
							NAV[0],
							NAV[1],
							NAV[2],
							NAV[5],
							NAV[6]
						].map((item) => {
							const active = item.end ? path === item.to : path.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: item.to,
								className: `flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[10px] font-medium ${active ? "bg-primary/15 text-primary" : "text-muted-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-4 w-4" }), item.label.split(" ")[0]]
							}, item.to);
						})
					})
				]
			})
		]
	});
}
function DashboardLayout() {
	const { role, isLoading } = useRole();
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (isLoading) return;
		if (role === null) navigate({
			to: "/login",
			replace: true
		});
		else if (role === "admin") navigate({
			to: "/admin",
			replace: true
		});
	}, [
		role,
		isLoading,
		navigate
	]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center text-sm text-muted-foreground",
		children: "Loading…"
	});
	if (role !== "client") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center text-sm text-muted-foreground",
		children: "Redirecting…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { DashboardLayout as component };
