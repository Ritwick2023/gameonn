import { a as __toESM } from "../_runtime.mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { B as MapPin, J as IndianRupee, ht as ChevronLeft, kt as ArrowRight, mt as ChevronRight, ut as Clock, y as Sparkles } from "../_libs/lucide-react.mjs";
import { l as SPORTS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.book-Cxty2ajq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HOURS = Array.from({ length: 17 }, (_, i) => i + 6);
var BOOKED = /* @__PURE__ */ new Set([
	8,
	18,
	20
]);
function BookSlot() {
	const navigate = useNavigate();
	const [sport, setSport] = (0, import_react.useState)("Football");
	const [month, setMonth] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const [selectedDay, setSelectedDay] = (0, import_react.useState)(() => (/* @__PURE__ */ new Date()).getDate());
	const [slot, setSlot] = (0, import_react.useState)(19);
	const days = (0, import_react.useMemo)(() => buildMonth(month), [month]);
	const basePrice = {
		Football: 1200,
		Cricket: 1800,
		"Box Cricket": 1500,
		Pickleball: 800
	};
	const mult = slot !== null && slot >= 17 ? 1.25 : 1;
	const price = slot !== null ? basePrice[sport] * mult : 0;
	function proceed() {
		if (slot === null) return;
		const date = new Date(month.getFullYear(), month.getMonth(), selectedDay).toISOString().slice(0, 10);
		navigate({
			to: "/dashboard/checkout",
			search: {
				sport,
				date,
				hour: slot,
				court: "Turf A",
				price
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Book a slot",
				subtitle: "Pick your sport, date and time. Lock it in seconds."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-4",
				children: SPORTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setSport(s),
					className: `group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${sport === s ? "border-primary bg-primary/10 shadow-glow" : "border-white/10 bg-surface hover:border-white/20"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
							children: "Sport"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-lg font-bold",
							children: s
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-baseline gap-0.5 font-mono",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-3 w-3 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base font-semibold",
									children: basePrice[s]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: "/hr"
								})
							]
						})
					]
				}, s))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl glass p-5 shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Pick a date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-xl font-semibold",
									children: month.toLocaleString("en-IN", {
										month: "long",
										year: "numeric"
									})
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)),
										className: "grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)),
										className: "grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 grid grid-cols-7 gap-1 text-center",
								children: [[
									"S",
									"M",
									"T",
									"W",
									"T",
									"F",
									"S"
								].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
									children: d
								}, i)), days.map((d, i) => {
									const isCurrent = d.day && d.month === month.getMonth();
									const isSelected = isCurrent && d.day === selectedDay;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										disabled: !isCurrent,
										onClick: () => d.day && setSelectedDay(d.day),
										className: `aspect-square rounded-xl text-sm font-medium transition-all ${isSelected ? "bg-primary text-primary-foreground shadow-glow" : isCurrent ? "text-foreground hover:bg-white/5" : "text-muted-foreground/30"}`,
										children: d.day || ""
									}, i);
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl glass p-5 shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Available slots"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-1 font-display text-xl font-semibold",
									children: [
										selectedDay,
										" ",
										month.toLocaleString("en-IN", { month: "short" })
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden items-center gap-3 text-[10px] sm:flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 font-mono uppercase tracking-wider text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), " Free"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 font-mono uppercase tracking-wider text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-white/20" }), " Booked"]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5",
								children: HOURS.map((h) => {
									const isBooked = BOOKED.has(h);
									const isSel = slot === h;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
										disabled: isBooked,
										onClick: () => setSlot(h),
										whileTap: { scale: .97 },
										className: `rounded-2xl border p-3 text-left transition-all ${isSel ? "border-primary bg-primary/15 shadow-glow" : isBooked ? "border-white/5 bg-white/[0.02] opacity-50 line-through" : "border-white/10 bg-surface hover:border-primary/40"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-mono text-lg font-bold tabular-nums",
											children: [h.toString().padStart(2, "0"), ":00"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `mt-0.5 text-[10px] font-mono uppercase tracking-wider ${isSel ? "text-primary" : isBooked ? "text-muted-foreground" : "text-muted-foreground"}`,
											children: isBooked ? "Booked" : h >= 17 ? "Peak ×1.25" : "Standard"
										})]
									}, h);
								})
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "sticky top-24 rounded-3xl glass-strong p-6 shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary",
									children: "Booking summary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-2xl font-bold",
								children: sport
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }), " Game Onn Arena, Wardha"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Date",
										value: `${selectedDay} ${month.toLocaleString("en-IN", {
											month: "short",
											year: "numeric"
										})}`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Time",
										value: slot !== null ? `${slot.toString().padStart(2, "0")}:00 – ${(slot + 1).toString().padStart(2, "0")}:00` : "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Duration",
										value: "1 hour"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Court",
										value: "Turf A"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 border-t border-dashed border-white/10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Total"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-0.5 font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-3xl font-bold tabular-nums",
										children: price.toLocaleString("en-IN")
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
								variant: "primary",
								size: "lg",
								className: "mt-6 w-full",
								disabled: slot === null,
								onClick: proceed,
								children: ["Proceed to Payment ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-center text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 inline h-3 w-3" }), " Free cancellation 12hr prior"]
							})
						]
					})
				})]
			})
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-medium",
			children: value
		})]
	});
}
function buildMonth(d) {
	const y = d.getFullYear(), m = d.getMonth();
	const first = new Date(y, m, 1).getDay();
	const last = new Date(y, m + 1, 0).getDate();
	const cells = [];
	for (let i = 0; i < first; i++) cells.push({
		day: null,
		month: m
	});
	for (let i = 1; i <= last; i++) cells.push({
		day: i,
		month: m
	});
	while (cells.length % 7 !== 0) cells.push({
		day: null,
		month: m
	});
	return cells;
}
//#endregion
export { BookSlot as component };
