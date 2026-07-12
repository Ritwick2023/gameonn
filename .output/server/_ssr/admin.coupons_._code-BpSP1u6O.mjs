import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as StatusPill, i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { At as ArrowLeft, J as IndianRupee, d as TrendingUp, h as Tag, o as Users, p as TicketPercent, ut as Clock, vt as ChartColumn, x as Shield, xt as Calendar } from "../_libs/lucide-react.mjs";
import { a as getCouponByCode, i as getCouponAnalytics, s as getCouponUsage } from "./coupon-service-Co2IwYlD.mjs";
import { t as Route } from "./admin.coupons_._code-QE9MyW29.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.coupons_._code-BpSP1u6O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CouponDetails() {
	const { code } = Route.useParams();
	const [coupon, setCoupon] = (0, import_react.useState)(void 0);
	const [usage, setUsage] = (0, import_react.useState)([]);
	const [analytics, setAnalytics] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setCoupon(getCouponByCode(code));
		setUsage(getCouponUsage(code));
		setAnalytics(getCouponAnalytics(code));
	}, [code]);
	if (!coupon) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Coupon not found",
			subtitle: "The coupon you're looking for doesn't exist.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/admin/coupons",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
					variant: "ghost",
					size: "sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to coupons"]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center justify-center rounded-3xl glass p-16 shadow-elevated",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketPercent, { className: "h-12 w-12 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: [
					"No coupon found with code \"",
					code,
					"\""
				]
			})]
		}) })]
	});
	const discountLabel = coupon.discountType === "percentage" ? `${coupon.discountValue}% off` : `₹${coupon.discountValue} flat`;
	const expiryLabel = coupon.expiryType === "unlimited" ? "No expiry" : coupon.expiryDate ? new Date(coupon.expiryDate).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}) : "—";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: coupon.code,
				subtitle: coupon.description || "Coupon details & analytics",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/coupons",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
						variant: "ghost",
						size: "sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl glass p-6 shadow-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: Tag,
							label: "Discount",
							value: discountLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: Shield,
							label: "Status",
							value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: coupon.status })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: Calendar,
							label: "Expiry",
							value: expiryLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: IndianRupee,
							label: "Max Discount",
							value: coupon.maxDiscount ? `₹${coupon.maxDiscount.toLocaleString("en-IN")}` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: IndianRupee,
							label: "Min Booking",
							value: coupon.minBooking ? `₹${coupon.minBooking.toLocaleString("en-IN")}` : "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: TicketPercent,
							label: "Applicable Sport",
							value: coupon.applicableSport
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: Clock,
							label: "Created",
							value: new Date(coupon.createdDate).toLocaleDateString("en-IN", {
								day: "numeric",
								month: "short",
								year: "numeric"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoItem, {
							icon: Clock,
							label: "Last Modified",
							value: new Date(coupon.lastModified).toLocaleDateString("en-IN", {
								day: "numeric",
								month: "short",
								year: "numeric"
							})
						})
					]
				})
			}) }),
			analytics && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Total Uses",
						value: analytics.totalUses.toString(),
						icon: Users,
						tint: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Total Savings",
						value: `₹${analytics.totalSavings.toLocaleString("en-IN")}`,
						icon: IndianRupee,
						tint: "accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Revenue Generated",
						value: `₹${analytics.revenueGenerated.toLocaleString("en-IN")}`,
						icon: TrendingUp,
						tint: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Conversion Rate",
						value: `${analytics.conversionRate}%`,
						icon: ChartColumn,
						tint: "accent"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-3xl glass shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between px-5 py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-lg font-bold",
						children: ["Usage History", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 font-mono text-sm font-normal text-muted-foreground",
							children: [
								"(",
								usage.length,
								")"
							]
						})]
					})
				}), usage.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-10 w-10 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "No usage history for this coupon yet."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "hidden w-full text-sm md:table",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-white/[0.02] text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-3",
								children: "Customer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-3",
								children: "Booking ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-3",
								children: "Booking Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-3",
								children: "Discount Applied"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-5 py-3 text-right",
								children: "Amount Saved"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "divide-y divide-white/5",
						children: usage.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/[0.02]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 font-semibold",
									children: u.customer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 font-mono text-xs text-muted-foreground",
									children: u.bookingId
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-muted-foreground",
									children: new Date(u.bookingDate).toLocaleDateString("en-IN", {
										day: "numeric",
										month: "short",
										year: "numeric"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary",
										children: u.discountApplied
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4 text-right font-mono font-bold tabular-nums",
									children: ["₹", u.amountSaved.toLocaleString("en-IN")]
								})
							]
						}, u.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-white/5 md:hidden",
					children: usage.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[1fr_auto] gap-3 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: u.customer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										u.bookingId,
										" ·",
										" ",
										new Date(u.bookingDate).toLocaleDateString("en-IN", {
											day: "numeric",
											month: "short"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary",
										children: u.discountApplied
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right font-mono text-base font-bold tabular-nums",
							children: ["₹", u.amountSaved.toLocaleString("en-IN")]
						})]
					}, u.id))
				})] })]
			}) })
		]
	});
}
function InfoItem({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }), label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-sm font-semibold",
			children: value
		})]
	});
}
function Kpi({ label, value, icon: Icon, tint }) {
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
			})
		]
	}) });
}
//#endregion
export { CouponDetails as component };
