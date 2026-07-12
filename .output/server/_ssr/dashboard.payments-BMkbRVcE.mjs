import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as StatusPill, i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { J as IndianRupee, ot as Download } from "../_libs/lucide-react.mjs";
import { c as MOCK_PAYMENTS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.payments-BMkbRVcE.js
var import_jsx_runtime = require_jsx_runtime();
function Payments() {
	const total = MOCK_PAYMENTS.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Payment history",
				subtitle: "All transactions, receipts and refunds."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
						children: "Total spent on Game Onn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-baseline gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-7 w-7 text-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-5xl font-bold tabular-nums text-gradient",
							children: total.toLocaleString("en-IN")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 text-xs text-muted-foreground",
						children: [
							"Across ",
							MOCK_PAYMENTS.length,
							" transactions"
						]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
										children: "Transaction"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3",
										children: "Booking"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3",
										children: "Date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-5 py-3",
										children: "Method"
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
							children: MOCK_PAYMENTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "hover:bg-white/[0.02]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 font-mono text-xs font-semibold",
										children: p.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 font-mono text-xs text-muted-foreground",
										children: p.bookingId
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 text-muted-foreground",
										children: p.date
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4",
										children: p.method
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-5 py-4 text-right font-mono font-bold tabular-nums",
										children: ["₹", p.amount.toLocaleString("en-IN")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: p.status })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-4 text-right",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											className: "inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" }), " Receipt"]
										})
									})
								]
							}, p.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-white/5 md:hidden",
						children: MOCK_PAYMENTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[1fr_auto] gap-3 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate font-mono text-xs font-semibold",
										children: p.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted-foreground",
										children: [
											p.bookingId,
											" · ",
											p.date
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: p.status })
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-base font-bold tabular-nums",
									children: ["₹", p.amount.toLocaleString("en-IN")]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
									variant: "ghost",
									size: "sm",
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3 w-3" })
								})]
							})]
						}, p.id))
					})]
				})
			})
		]
	});
}
//#endregion
export { Payments as component };
