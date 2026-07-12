import { a as __toESM } from "../_runtime.mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as StatusPill, i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { B as MapPin, D as RefreshCw, E as Search, Q as Funnel, n as X, ot as Download } from "../_libs/lucide-react.mjs";
import { n as MOCK_BOOKINGS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.bookings-DPqUIOhR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		k: "all",
		label: "All"
	},
	{
		k: "upcoming",
		label: "Upcoming"
	},
	{
		k: "completed",
		label: "Completed"
	},
	{
		k: "cancelled",
		label: "Cancelled"
	}
];
function MyBookings() {
	const [tab, setTab] = (0, import_react.useState)("all");
	const [q, setQ] = (0, import_react.useState)("");
	const [active, setActive] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => {
		return MOCK_BOOKINGS.filter((b) => {
			if (tab !== "all" && b.status !== tab) return false;
			if (q && !`${b.sport} ${b.id} ${b.court}`.toLowerCase().includes(q.toLowerCase())) return false;
			return true;
		});
	}, [tab, q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "My bookings",
				subtitle: "All your slots, past and upcoming."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1 rounded-full glass p-1",
					children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTab(t.k),
						className: `rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${tab === t.k ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`,
						children: t.label
					}, t.k))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-full glass px-4 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search…",
							className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: [filtered.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(b),
						className: "group block w-full text-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-3xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
										children: b.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 text-xl font-bold",
										children: b.sport
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: b.court
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: b.status })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
										k: "Date",
										v: b.date.slice(5)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
										k: "Time",
										v: b.time
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
										k: "₹",
										v: b.price.toLocaleString("en-IN")
									})
								]
							})]
						})
					})
				}, b.id)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-full rounded-3xl glass p-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "No bookings found."
					})
				})]
			}),
			active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDetailsModal, {
				b: active,
				onClose: () => setActive(null)
			})
		]
	});
}
function Cell({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-mono text-sm font-bold tabular-nums",
		children: v
	})] });
}
function BookingDetailsModal({ b, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		onClick: onClose,
		className: "fixed inset-0 z-[70] grid place-items-center bg-background/80 p-4 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-lg overflow-hidden rounded-3xl glass-strong shadow-elevated",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between border-b border-white/5 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
							children: b.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-2xl font-bold",
							children: b.sport
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								b.court,
								" · ",
								b.date,
								" · ",
								b.time
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "grid h-9 w-9 place-items-center rounded-full glass",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								k: "Duration",
								v: `${b.duration} hour${b.duration > 1 ? "s" : ""}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								k: "Price",
								v: `₹${b.price.toLocaleString("en-IN")}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								k: "Payment",
								v: b.payment
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								k: "Status",
								v: b.status
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "flex items-center justify-between rounded-2xl bg-surface p-4 ring-1 ring-white/5 hover:ring-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " Get Directions"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Bachelor Rd, Wardha"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 border-t border-white/5 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
							variant: "ghost",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Receipt"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
							variant: "primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-4 w-4" }), " Book again"]
						}),
						b.status === "upcoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
							variant: "outline",
							className: "col-span-2",
							children: "Cancel booking"
						})
					]
				})
			]
		})
	});
}
function Tile({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface p-3 ring-1 ring-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-sm font-bold capitalize",
			children: v
		})]
	});
}
//#endregion
export { MyBookings as component };
