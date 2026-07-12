import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as StatusPill, i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { E as Search, O as Power, Q as Funnel, ct as Copy, d as TrendingUp, f as Trash2, gt as ChevronDown, k as Plus, n as X, o as Users, p as TicketPercent, u as TriangleAlert, v as SquarePen, xt as Calendar } from "../_libs/lucide-react.mjs";
import { l as SPORTS } from "./mock-data-Bn1rr24g.mjs";
import { c as getCoupons, l as toggleCouponStatus, n as deleteCoupon, o as getCouponStats, r as duplicateCoupon, t as createCoupon, u as updateCoupon } from "./coupon-service-Co2IwYlD.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.coupons-TA2OnX5c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCoupons() {
	const [q, setQ] = (0, import_react.useState)("");
	const [coupons, setCoupons] = (0, import_react.useState)(getCoupons);
	const [stats, setStats] = (0, import_react.useState)(getCouponStats);
	const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
	const [editCoupon, setEditCoupon] = (0, import_react.useState)(null);
	const [deleteTarget, setDeleteTarget] = (0, import_react.useState)(null);
	const refresh = () => {
		setCoupons(getCoupons());
		setStats(getCouponStats());
	};
	const list = (0, import_react.useMemo)(() => coupons.filter((c) => !q || `${c.code} ${c.description ?? ""}`.toLowerCase().includes(q.toLowerCase())), [coupons, q]);
	function handleDuplicate(code) {
		try {
			const dup = duplicateCoupon(code);
			refresh();
			toast.success("Coupon duplicated", { description: `${dup.code} created.` });
		} catch (e) {
			toast.error("Duplicate failed", { description: e.message });
		}
	}
	function handleToggle(code) {
		try {
			const c = toggleCouponStatus(code);
			refresh();
			toast.success(`Coupon ${c.status === "active" ? "activated" : "deactivated"}`, { description: c.code });
		} catch (e) {
			toast.error("Toggle failed", { description: e.message });
		}
	}
	function handleDelete() {
		if (!deleteTarget) return;
		deleteCoupon(deleteTarget);
		refresh();
		toast.success("Coupon deleted", { description: deleteTarget });
		setDeleteTarget(null);
	}
	function openEdit(c) {
		setEditCoupon(c);
		setModalOpen(true);
	}
	function openCreate() {
		setEditCoupon(null);
		setModalOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Coupon Management",
				subtitle: "Create, manage and monitor promotional coupons.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
					variant: "primary",
					size: "sm",
					onClick: openCreate,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Create Coupon"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Total Coupons",
						value: String(stats.totalCoupons),
						icon: TicketPercent,
						tint: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Active Coupons",
						value: String(stats.activeCoupons),
						icon: TrendingUp,
						tint: "accent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Expired Coupons",
						value: String(stats.expiredCoupons),
						icon: Calendar,
						tint: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "Total Redemptions",
						value: String(stats.totalRedemptions),
						icon: Users,
						tint: "primary"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 items-center gap-2 rounded-full glass px-4 py-2 sm:max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search coupons...",
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
									children: "Coupon Code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Discount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Expiry"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Usage"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3",
									children: "Created"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-5 py-3" })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
						className: "divide-y divide-white/5",
						children: [list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "hover:bg-white/[0.02]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/admin/coupons/$code",
										params: { code: c.code },
										className: "font-mono text-sm font-bold text-accent hover:underline",
										children: c.code
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: c.discountType === "percentage" ? `${c.discountValue}%` : `₹${c.discountValue}`
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-xs text-muted-foreground",
										children: c.discountType === "percentage" ? "off" : "flat"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: c.status })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-muted-foreground",
									children: c.expiryType === "unlimited" ? "Never" : c.expiryDate ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-5 py-4 font-mono tabular-nums",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold",
										children: c.usedCount
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: ["/", c.maxUses === "unlimited" ? "∞" : c.maxUses]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-muted-foreground",
									children: c.createdDate
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-4 text-right",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "Edit",
												icon: SquarePen,
												onClick: () => openEdit(c)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "Duplicate",
												icon: Copy,
												onClick: () => handleDuplicate(c.code)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: c.status === "active" ? "Deactivate" : "Activate",
												icon: Power,
												onClick: () => handleToggle(c.code)
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
												label: "Delete",
												icon: Trash2,
												onClick: () => setDeleteTarget(c.code),
												danger: true
											})
										]
									})
								})
							]
						}, c.code)), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							colSpan: 7,
							className: "px-5 py-12 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketPercent, { className: "mx-auto h-8 w-8 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "No coupons found"
							})]
						}) })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "divide-y divide-white/5 md:hidden",
					children: [list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "space-y-2 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/coupons/$code",
								params: { code: c.code },
								className: "font-mono text-sm font-bold text-accent hover:underline",
								children: c.code
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: c.discountType === "percentage" ? `${c.discountValue}% off` : `₹${c.discountValue} flat`
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: c.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-mono text-xs tabular-nums",
									children: [
										c.usedCount,
										"/",
										c.maxUses === "unlimited" ? "∞" : c.maxUses,
										" used"
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Edit",
									icon: SquarePen,
									onClick: () => openEdit(c)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Duplicate",
									icon: Copy,
									onClick: () => handleDuplicate(c.code)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Toggle",
									icon: Power,
									onClick: () => handleToggle(c.code)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
									label: "Delete",
									icon: Trash2,
									onClick: () => setDeleteTarget(c.code),
									danger: true
								})
							]
						})]
					}, c.code)), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "p-8 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketPercent, { className: "mx-auto h-8 w-8 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "No coupons found"
						})]
					})]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: modalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CouponModal, {
				coupon: editCoupon,
				onClose: () => {
					setModalOpen(false);
					setEditCoupon(null);
				},
				onSave: refresh
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: deleteTarget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeleteDialog, {
				code: deleteTarget,
				onClose: () => setDeleteTarget(null),
				onConfirm: handleDelete
			}) })
		]
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
			})
		]
	}) });
}
function IconBtn({ icon: Icon, label, danger, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		title: label,
		onClick,
		className: `grid h-8 w-8 place-items-center rounded-lg transition-colors ${danger ? "text-destructive hover:bg-destructive/10" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" })
	});
}
function CouponModal({ coupon, onClose, onSave }) {
	const isEdit = !!coupon;
	const [code, setCode] = (0, import_react.useState)(coupon?.code ?? "");
	const [discountType, setDiscountType] = (0, import_react.useState)(coupon?.discountType ?? "percentage");
	const [discountValue, setDiscountValue] = (0, import_react.useState)(coupon?.discountValue ?? 10);
	const [maxDiscount, setMaxDiscount] = (0, import_react.useState)(coupon?.maxDiscount ?? 0);
	const [minBooking, setMinBooking] = (0, import_react.useState)(coupon?.minBooking ?? 0);
	const [expiryType, setExpiryType] = (0, import_react.useState)(coupon?.expiryType ?? "unlimited");
	const [expiryDate, setExpiryDate] = (0, import_react.useState)(coupon?.expiryDate ?? "");
	const [maxUsesType, setMaxUsesType] = (0, import_react.useState)(coupon?.maxUses === "unlimited" ? "unlimited" : "custom");
	const [maxUsesNum, setMaxUsesNum] = (0, import_react.useState)(typeof coupon?.maxUses === "number" ? coupon.maxUses : 100);
	const [perUserLimit, setPerUserLimit] = (0, import_react.useState)(coupon?.perUserLimit ?? 0);
	const [applicableSport, setApplicableSport] = (0, import_react.useState)(coupon?.applicableSport ?? "All Sports");
	const [status, setStatus] = (0, import_react.useState)(coupon?.status ?? "active");
	const [description, setDescription] = (0, import_react.useState)(coupon?.description ?? "");
	function handleSubmit(e) {
		e.preventDefault();
		try {
			const data = {
				code: code.toUpperCase().trim(),
				discountType,
				discountValue,
				maxDiscount: discountType === "percentage" && maxDiscount > 0 ? maxDiscount : void 0,
				minBooking: minBooking > 0 ? minBooking : void 0,
				expiryType,
				expiryDate: expiryType === "date" ? expiryDate : void 0,
				maxUses: maxUsesType === "unlimited" ? "unlimited" : maxUsesNum,
				perUserLimit: perUserLimit > 0 ? perUserLimit : void 0,
				applicableSport,
				status,
				description: description.trim() || void 0
			};
			if (isEdit) {
				updateCoupon(coupon.code, data);
				toast.success("Coupon updated", { description: data.code });
			} else {
				createCoupon(data);
				toast.success("Coupon created", { description: data.code });
			}
			onSave();
			onClose();
		} catch (err) {
			toast.error(isEdit ? "Update failed" : "Creation failed", { description: err.message });
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[80] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center",
		onClick: onClose,
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
			className: "relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-surface shadow-elevated ring-1 ring-white/10 sm:rounded-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-white/5 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-bold",
					children: isEdit ? "Edit Coupon" : "Create Coupon"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: isEdit ? `Editing ${coupon.code}` : "Fill in the details below."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "grid h-8 w-8 place-items-center rounded-full hover:bg-white/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "max-h-[70vh] space-y-4 overflow-y-auto px-5 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Coupon Code",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: code,
							onChange: (e) => setCode(e.target.value),
							placeholder: "e.g. WELCOME10",
							required: true,
							disabled: isEdit,
							className: "w-full rounded-xl bg-background px-3 py-2.5 font-mono text-sm uppercase outline-none ring-1 ring-white/10 focus:ring-primary/50 disabled:opacity-50"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Discount Type",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: discountType,
									onChange: (e) => setDiscountType(e.target.value),
									className: "w-full appearance-none rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "percentage",
										children: "Percentage"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "flat",
										children: "Flat Amount"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: discountType === "percentage" ? "Discount (%)" : "Discount (₹)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								value: discountValue,
								onChange: (e) => setDiscountValue(+e.target.value),
								min: 1,
								required: true,
								className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50"
							})
						})]
					}),
					discountType === "percentage" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Maximum Discount (₹)",
						hint: "Optional cap on discount amount",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: maxDiscount || "",
							onChange: (e) => setMaxDiscount(+e.target.value),
							min: 0,
							placeholder: "e.g. 300",
							className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Minimum Booking Amount (₹)",
						hint: "Optional",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: minBooking || "",
							onChange: (e) => setMinBooking(+e.target.value),
							min: 0,
							placeholder: "e.g. 800",
							className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Expiry Type",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioPill, {
								checked: expiryType === "date",
								onChange: () => setExpiryType("date"),
								children: "Limited"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioPill, {
								checked: expiryType === "unlimited",
								onChange: () => setExpiryType("unlimited"),
								children: "Unlimited"
							})]
						})
					}),
					expiryType === "date" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Expiry Date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: expiryDate,
							onChange: (e) => setExpiryDate(e.target.value),
							required: true,
							className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Maximum Uses",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioPill, {
								checked: maxUsesType === "unlimited",
								onChange: () => setMaxUsesType("unlimited"),
								children: "Unlimited"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioPill, {
								checked: maxUsesType === "custom",
								onChange: () => setMaxUsesType("custom"),
								children: "Custom"
							})]
						})
					}),
					maxUsesType === "custom" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						value: maxUsesNum,
						onChange: (e) => setMaxUsesNum(+e.target.value),
						min: 1,
						required: true,
						className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Per User Limit",
						hint: "Optional — 0 means no limit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							value: perUserLimit || "",
							onChange: (e) => setPerUserLimit(+e.target.value),
							min: 0,
							placeholder: "e.g. 1",
							className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Applicable Sport",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: applicableSport,
								onChange: (e) => setApplicableSport(e.target.value),
								className: "w-full appearance-none rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "All Sports" }), SPORTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
						label: "Status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStatus(status === "active" ? "inactive" : "active"),
							className: `relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${status === "active" ? "bg-primary" : "bg-white/10"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform ${status === "active" ? "translate-x-6" : "translate-x-1"}` })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-sm",
							children: status === "active" ? "Active" : "Inactive"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Description",
						hint: "Optional admin notes",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: description,
							onChange: (e) => setDescription(e.target.value),
							rows: 2,
							placeholder: "Internal notes about this coupon...",
							className: "w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50 resize-none"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
							type: "submit",
							variant: "primary",
							className: "flex-1",
							children: isEdit ? "Save Changes" : "Create Coupon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
							type: "button",
							variant: "ghost",
							onClick: onClose,
							children: "Cancel"
						})]
					})
				]
			})]
		})
	});
}
function DeleteDialog({ code, onClose, onConfirm }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-md",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			exit: {
				scale: .95,
				opacity: 0
			},
			transition: {
				type: "spring",
				damping: 22,
				stiffness: 220
			},
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-sm rounded-3xl bg-surface p-6 shadow-elevated ring-1 ring-white/10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-full bg-destructive/15 text-destructive",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold",
						children: "Delete coupon?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "This action cannot be undone."
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 rounded-xl bg-background/40 px-3 py-2 font-mono text-sm font-bold ring-1 ring-white/5",
					children: code
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
						variant: "danger",
						className: "flex-1",
						onClick: onConfirm,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" }), " Delete"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
						variant: "ghost",
						onClick: onClose,
						children: "Cancel"
					})]
				})
			]
		})
	});
}
function Field({ label, hint, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		}),
		hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-2 text-[10px] text-muted-foreground/60",
			children: hint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1",
			children
		})
	] });
}
function RadioPill({ checked, onChange, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: onChange,
		className: `rounded-full px-4 py-2 text-xs font-semibold transition-all ${checked ? "bg-primary/15 text-primary ring-1 ring-primary/30" : "glass text-muted-foreground hover:bg-white/5"}`,
		children
	});
}
//#endregion
export { AdminCoupons as component };
