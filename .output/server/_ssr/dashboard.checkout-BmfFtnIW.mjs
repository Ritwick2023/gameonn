import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RippleButton, n as PageHeader } from "./ui-bits-Dg99qRjR.mjs";
import { At as ArrowLeft, B as MapPin, C as Share2, Ct as Building2, J as IndianRupee, M as PartyPopper, U as Lock, a as Wallet, b as Smartphone, ft as CircleCheck, kt as ArrowRight, n as X, ot as Download, p as TicketPercent, st as CreditCard, ut as Clock, x as Shield, xt as Calendar } from "../_libs/lucide-react.mjs";
import { d as validateCoupon } from "./coupon-service-Co2IwYlD.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./dashboard.checkout-B8Di8UIK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.checkout-BmfFtnIW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var METHODS = [
	{
		id: "upi",
		label: "UPI",
		sub: "GPay · PhonePe · Paytm",
		icon: Smartphone
	},
	{
		id: "card",
		label: "Card",
		sub: "Credit / Debit",
		icon: CreditCard
	},
	{
		id: "wallet",
		label: "Wallet",
		sub: "Paytm · Amazon Pay",
		icon: Wallet
	},
	{
		id: "netbanking",
		label: "Netbanking",
		sub: "All Indian banks",
		icon: Building2
	}
];
function Checkout() {
	const search = Route.useSearch();
	const [step, setStep] = (0, import_react.useState)(1);
	const [method, setMethod] = (0, import_react.useState)("upi");
	const [sheetOpen, setSheetOpen] = (0, import_react.useState)(false);
	const [processing, setProcessing] = (0, import_react.useState)(false);
	const [orderId] = (0, import_react.useState)(() => `GO-${Math.floor(8e3 + Math.random() * 999)}`);
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [applied, setApplied] = (0, import_react.useState)(null);
	const gst = (0, import_react.useMemo)(() => Math.round(search.price * .18), [search.price]);
	const discount = applied?.off ?? 0;
	const total = Math.max(0, search.price + gst - discount);
	function applyCoupon() {
		const code = coupon.trim().toUpperCase();
		if (!code) return;
		const result = validateCoupon(code, search.price, search.sport);
		if (result.valid) {
			setApplied({
				code,
				off: result.discount
			});
			toast.success("Coupon applied", { description: `You save ₹${result.discount.toLocaleString("en-IN")}` });
		} else toast.error(result.error ?? "Invalid coupon");
	}
	function removeCoupon() {
		setApplied(null);
		setCoupon("");
	}
	function startPayment() {
		setStep(2);
		setSheetOpen(true);
	}
	function confirmPay() {
		setProcessing(true);
		setTimeout(() => {
			setProcessing(false);
			setSheetOpen(false);
			setStep(3);
			toast.success("Payment successful", { description: `${orderId} · ₹${total.toLocaleString("en-IN")}` });
		}, 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Checkout",
				subtitle: "Secure booking · Powered by Razorpay (demo)",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard/book",
					className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Change slot"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, { step }),
			step !== 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.15fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlotCard, { ...search }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl glass p-5 shadow-elevated",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold",
									children: "Payment method"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Choose how you want to pay."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid gap-2 sm:grid-cols-2",
									children: METHODS.map((m) => {
										const active = method === m.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => setMethod(m.id),
											className: `flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${active ? "border-primary bg-primary/10 shadow-glow" : "border-white/10 bg-surface hover:border-white/20"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `grid h-10 w-10 place-items-center rounded-xl ${active ? "bg-primary/20 text-primary" : "bg-white/5 text-muted-foreground"}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "h-4 w-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm font-semibold",
														children: m.label
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "truncate text-[11px] text-muted-foreground",
														children: m.sub
													})]
												}),
												active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "ml-auto h-4 w-4 text-primary" })
											]
										}, m.id);
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl glass p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-primary" }), " Free cancellation"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Cancel up to 12 hours before your slot for a full refund. In case of rain, we auto-refund within 24 hours."
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "lg:sticky lg:top-24 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl glass-strong p-6 shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: "Order summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 space-y-2.5 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "Slot fee",
										v: `₹${search.price.toLocaleString("en-IN")}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: "GST (18%)",
										v: `₹${gst.toLocaleString("en-IN")}`
									}),
									applied && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										k: `Coupon (${applied.code})`,
										v: `− ₹${discount.toLocaleString("en-IN")}`,
										accent: true
									})
								]
							}),
							!applied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 mb-2 text-xs font-semibold text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketPercent, { className: "h-3 w-3" }), " Have a Coupon?"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: coupon,
										onChange: (e) => setCoupon(e.target.value),
										placeholder: "Enter coupon code",
										onKeyDown: (e) => e.key === "Enter" && applyCoupon(),
										className: "w-full rounded-xl bg-surface px-3 py-2 font-mono text-sm uppercase outline-none ring-1 ring-white/10 focus:ring-primary/50"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: applyCoupon,
										className: "rounded-xl bg-white/5 px-4 text-xs font-semibold hover:bg-white/10 transition-colors",
										children: "Apply"
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center justify-between rounded-xl bg-primary/10 px-3 py-2 ring-1 ring-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketPercent, { className: "h-4 w-4 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-sm font-bold text-primary",
											children: applied.code
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs text-primary/70",
											children: ["− ₹", discount.toLocaleString("en-IN")]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: removeCoupon,
									className: "grid h-6 w-6 place-items-center rounded-full hover:bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 text-primary" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-4 border-t border-dashed border-white/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Total payable"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-0.5 font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl font-bold tabular-nums",
										children: total.toLocaleString("en-IN")
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
								variant: "primary",
								size: "lg",
								className: "mt-6 w-full",
								onClick: startPayment,
								children: [
									"Pay ₹",
									total.toLocaleString("en-IN"),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " 256-bit encrypted · Razorpay"]
							})
						]
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
				orderId,
				total,
				...search
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: sheetOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RazorpaySheet, {
				method,
				total,
				orderId,
				processing,
				onClose: () => {
					setSheetOpen(false);
					if (step === 2) setStep(1);
				},
				onPay: confirmPay
			}) })
		]
	});
}
function Stepper({ step }) {
	const items = [
		"Review",
		"Payment",
		"Confirmation"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex items-center gap-2 rounded-full glass p-2",
		children: items.map((label, i) => {
			const n = i + 1;
			const active = n === step;
			const done = n < step;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-1 items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold ${done ? "bg-primary text-primary-foreground" : active ? "bg-primary/20 text-primary ring-1 ring-primary" : "bg-white/5 text-muted-foreground"}`,
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }) : n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `truncate text-xs font-semibold sm:text-sm ${active || done ? "text-foreground" : "text-muted-foreground"}`,
						children: label
					}),
					i < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `ml-1 hidden h-px flex-1 sm:block ${done ? "bg-primary" : "bg-white/10"}` })
				]
			}, label);
		})
	});
}
function SlotCard({ sport, date, hour, court }) {
	const dateLabel = new Date(date).toLocaleDateString("en-IN", {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	const time = `${hour.toString().padStart(2, "0")}:00 – ${(hour + 1).toString().padStart(2, "0")}:00`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-3xl glass p-5 shadow-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: "Your slot"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-2xl font-bold",
					children: sport
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center gap-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
						" Game Onn Arena, Wardha · ",
						court
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-primary ring-1 ring-primary/20",
				children: hour >= 17 ? "Peak" : "Standard"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					icon: Calendar,
					k: "Date",
					v: dateLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					icon: Clock,
					k: "Time",
					v: time
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
					icon: Shield,
					k: "Duration",
					v: "1 hour"
				})
			]
		})]
	});
}
function Tile({ icon: Icon, k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-2.5 w-2.5" }),
			" ",
			k
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-0.5 truncate text-xs font-bold",
		children: v
	})] });
}
function Row({ k, v, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: `font-mono font-medium tabular-nums ${accent ? "text-primary" : ""}`,
			children: v
		})]
	});
}
function RazorpaySheet({ method, total, orderId, processing, onClose, onPay }) {
	const [vpa, setVpa] = (0, import_react.useState)("aarav@okhdfc");
	const [card, setCard] = (0, import_react.useState)({
		n: "4242 4242 4242 4242",
		e: "12/28",
		c: "123",
		name: "Aarav Deshmukh"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[80] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center",
		onClick: processing ? void 0 : onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				y: 40,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			exit: {
				y: 40,
				opacity: 0
			},
			transition: {
				type: "spring",
				damping: 22,
				stiffness: 220
			},
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-md overflow-hidden rounded-t-3xl bg-surface shadow-elevated ring-1 ring-white/10 sm:rounded-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-[#3395ff] text-xs font-black text-white",
						children: "R"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-bold",
						children: "Razorpay"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-[10px] text-muted-foreground",
						children: ["Game Onn Arena · ", orderId]
					})] })]
				}), !processing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "grid h-8 w-8 place-items-center rounded-full hover:bg-white/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Amount payable"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-0.5 font-mono",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-2xl font-bold tabular-nums",
								children: total.toLocaleString("en-IN")
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-3",
						children: [
							method === "upi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "UPI ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: vpa,
									onChange: (e) => setVpa(e.target.value),
									className: "mt-1 w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex gap-2",
									children: [
										"GPay",
										"PhonePe",
										"Paytm"
									].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground",
										children: a
									}, a))
								})
							] }),
							method === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: card.n,
										onChange: (e) => setCard({
											...card,
											n: e.target.value
										}),
										placeholder: "Card number",
										className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: card.e,
											onChange: (e) => setCard({
												...card,
												e: e.target.value
											}),
											placeholder: "MM/YY",
											className: "rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: card.c,
											onChange: (e) => setCard({
												...card,
												c: e.target.value
											}),
											placeholder: "CVV",
											className: "rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: card.name,
										onChange: (e) => setCard({
											...card,
											name: e.target.value
										}),
										placeholder: "Name on card",
										className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary"
									})
								]
							}),
							method === "wallet" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-2",
								children: [
									"Paytm",
									"Amazon Pay",
									"Mobikwik",
									"Freecharge"
								].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "rounded-xl border border-white/10 bg-background px-3 py-3 text-sm font-medium hover:border-primary/40",
									children: w
								}, w))
							}),
							method === "netbanking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary",
								children: [
									"HDFC Bank",
									"ICICI Bank",
									"State Bank of India",
									"Axis Bank",
									"Kotak Mahindra"
								].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: b }, b))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: processing,
						onClick: onPay,
						className: "mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3395ff] text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-70",
						children: processing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" }), "Processing…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Pay ₹", total.toLocaleString("en-IN")] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3" }), " Secured by 256-bit SSL · This is a demo sheet"]
					})
				]
			})]
		})
	});
}
function Success({ orderId, total, sport, date, hour, court }) {
	const navigate = useNavigate();
	const time = `${hour.toString().padStart(2, "0")}:00`;
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => {}, 0);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .5 },
		className: "relative overflow-hidden rounded-3xl glass-strong p-8 text-center shadow-elevated sm:p-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { scale: 0 },
					animate: { scale: 1 },
					transition: {
						type: "spring",
						damping: 10,
						stiffness: 200,
						delay: .1
					},
					className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary/15 ring-4 ring-primary/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-primary" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-3xl font-bold sm:text-4xl",
					children: ["Booking confirmed ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartyPopper, { className: "inline h-7 w-7 text-primary" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "A confirmation & receipt has been sent to your registered mobile number."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-8 max-w-md rounded-2xl bg-background/60 p-5 text-left ring-1 ring-white/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-dashed border-white/10 pb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
							children: "Order ID"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm font-bold",
							children: orderId
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Sport",
								v: sport
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Date",
								v: new Date(date).toLocaleDateString("en-IN", {
									weekday: "short",
									day: "numeric",
									month: "short"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Time",
								v: time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Court",
								v: court
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								k: "Paid",
								v: `₹${total.toLocaleString("en-IN")}`,
								accent: true
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center justify-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
							variant: "primary",
							onClick: () => navigate({ to: "/dashboard/bookings" }),
							children: ["View my bookings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
							variant: "ghost",
							onClick: () => toast.success("Receipt downloaded", { description: `${orderId}.pdf` }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Receipt"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
							variant: "ghost",
							onClick: () => toast("Shared", { description: "Invite link copied to clipboard." }),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), " Invite team"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					className: "mt-6 inline-block text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground",
					children: "← Back to dashboard"
				})
			]
		})]
	});
}
function Confetti() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				y: -20,
				x: `${i * 37 % 100}%`,
				opacity: 0,
				rotate: 0
			},
			animate: {
				y: "120%",
				opacity: [
					0,
					1,
					1,
					0
				],
				rotate: 360
			},
			transition: {
				duration: 2.4 + i % 5 * .3,
				delay: .2 + i % 6 * .05,
				ease: "easeOut"
			},
			className: "absolute top-0 h-2 w-2 rounded-sm",
			style: { background: [
				"#7CFF6B",
				"#3395ff",
				"#FF6B6B",
				"#FFD93D"
			][i % 4] }
		}, i))
	});
}
//#endregion
export { Checkout as component };
