import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as StatusPill, i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { D as RefreshCw, E as Search, Q as Funnel, Tt as Ban, _t as Check, n as X, ot as Download, rt as EllipsisVertical } from "../_libs/lucide-react.mjs";
import { n as MOCK_BOOKINGS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.bookings-BxXNYFri.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminBookings() {
	const [q, setQ] = (0, import_react.useState)("");
	const list = MOCK_BOOKINGS.filter((b) => !q || `${b.id} ${b.sport}`.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Bookings",
				subtitle: `${MOCK_BOOKINGS.length} total · ${MOCK_BOOKINGS.filter((b) => b.status === "upcoming").length} upcoming`,
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
					variant: "ghost",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center gap-2 rounded-full glass px-4 py-2 sm:max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search bookings...",
						className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }), " Filter"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-3xl glass shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "hidden w-full text-sm md:table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-white/[0.02] text-left",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Booking"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Sport / Court"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "When"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Payment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-right",
									children: "Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-right",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-5 py-3" })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-white/5",
						children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/[0.02]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 font-mono text-xs",
									children: b.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold",
										children: b.sport
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: b.court
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4 text-muted-foreground",
									children: [
										b.date,
										" · ",
										b.time
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: b.payment })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4 text-right font-mono font-bold tabular-nums",
									children: ["₹", b.price.toLocaleString("en-IN")]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: b.status })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "Approve",
												icon: Check
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "Reschedule",
												icon: RefreshCw
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "Block",
												icon: Ban
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "Cancel",
												icon: X,
												danger: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "More",
												icon: EllipsisVertical
											})
										]
									})
								})
							]
						}, b.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-white/5 md:hidden",
					children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "space-y-3 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-xs text-muted-foreground",
									children: b.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-base font-semibold",
									children: [
										b.sport,
										" · ",
										b.court
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										b.date,
										" · ",
										b.time
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono font-bold",
									children: ["₹", b.price]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: b.status })
								})]
							})]
						})
					}, b.id))
				})]
			}) })
		]
	});
}
function IconBtn({ icon: Icon, label, danger }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		title: label,
		className: `grid h-8 w-8 place-items-center rounded-lg transition-colors ${danger ? "text-destructive hover:bg-destructive/10" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
	});
}
//#endregion
export { AdminBookings as component };
