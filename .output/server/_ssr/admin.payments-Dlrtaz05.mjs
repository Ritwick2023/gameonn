import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as StatusPill, i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { J as IndianRupee, ot as Download } from "../_libs/lucide-react.mjs";
import { c as MOCK_PAYMENTS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.payments-Dlrtaz05.js
var import_jsx_runtime = require_jsx_runtime();
function AdminPayments() {
	const paid = MOCK_PAYMENTS.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);
	const pending = 4500;
	const refunded = MOCK_PAYMENTS.filter((p) => p.status === "Refunded").reduce((s, p) => s + p.amount, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Payments",
				subtitle: "Track every rupee in and out.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
					variant: "ghost",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Paid",
						amount: paid,
						tint: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Pending",
						amount: pending,
						tint: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Refunded",
						amount: refunded,
						tint: "muted"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-3xl glass shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "hidden w-full text-sm md:table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-white/[0.02] text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
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
						] })
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
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "text-xs font-medium text-accent hover:underline",
										children: "Invoice"
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
									className: "font-mono text-xs font-semibold",
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
							className: "text-right font-mono text-base font-bold tabular-nums",
							children: ["₹", p.amount.toLocaleString("en-IN")]
						})]
					}, p.id))
				})]
			}) })
		]
	});
}
function Tile({ label, amount, tint }) {
	const colors = {
		primary: "from-primary/15 ring-primary/20 text-primary",
		warn: "from-amber-400/15 ring-amber-400/20 text-amber-400",
		muted: "from-muted/40 ring-white/10 text-muted-foreground"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative overflow-hidden rounded-3xl glass p-5 ring-1 ${colors[tint].split(" ")[1]}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute inset-0 -z-10 bg-gradient-to-br ${colors[tint].split(" ")[0]} to-transparent` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-baseline gap-0.5 font-display text-3xl font-bold tabular-nums",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5" }), amount.toLocaleString("en-IN")]
			})
		]
	}) });
}
//#endregion
export { AdminPayments as component };
