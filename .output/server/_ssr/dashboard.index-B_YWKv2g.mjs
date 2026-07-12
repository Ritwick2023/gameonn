import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as StatusPill, i as RippleButton, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { $ as Flame, J as IndianRupee, d as TrendingUp, g as Sun, jt as Activity, kt as ArrowRight, lt as Cloud, xt as Calendar, y as Sparkles } from "../_libs/lucide-react.mjs";
import { n as MOCK_BOOKINGS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.index-B_YWKv2g.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DashboardHome() {
	const hour = (/* @__PURE__ */ new Date()).getHours();
	const greet = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
	const upcoming = MOCK_BOOKINGS.find((b) => b.status === "upcoming");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elevated sm:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary",
								children: "Game day vibes"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl",
							children: [
								greet,
								", Aarav.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Ready for kickoff?"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm text-muted-foreground",
							children: "You have one slot lined up. Pitch is dry. Floodlights are tested. Let's play."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard/book",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
									variant: "primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4" }), " Book again"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dashboard/matches",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
									variant: "ghost",
									children: "Browse tournaments"
								})
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingCard, { b: upcoming })]
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						title: "Total bookings",
						value: "28",
						delta: "+4 this month",
						icon: Calendar
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						title: "Hours played",
						value: "36",
						delta: "+6 hrs",
						icon: Activity
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						title: "Total spent",
						value: "₹38.4k",
						delta: "Lifetime",
						icon: IndianRupee
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeatherCard, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
						tag: "LIMITED",
						title: "Weekend Madness",
						desc: "20% off Saturday & Sunday slots. Code GAMEON20.",
						tint: "primary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferCard, {
						tag: "NEW",
						title: "Refer & Earn ₹200",
						desc: "Bring a friend, both get credits on first booking.",
						tint: "accent"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl glass shadow-elevated",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-white/5 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "Recent activity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard/bookings",
							className: "inline-flex items-center gap-1 text-xs font-medium text-primary",
							children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-white/5",
						children: MOCK_BOOKINGS.slice(0, 4).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20",
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
											b.date,
											" · ",
											b.time,
											" · ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono",
												children: b.id
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: b.status })
							]
						}, b.id))
					})]
				})
			})
		]
	});
}
function UpcomingCard({ b }) {
	const target = (/* @__PURE__ */ new Date(`${b.date}T${b.time}:00`)).getTime();
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(t);
	}, []);
	const diff = Math.max(0, target - now);
	const d = Math.floor(diff / 864e5);
	const h = Math.floor(diff % 864e5 / 36e5);
	const m = Math.floor(diff % 36e5 / 6e4);
	const s = Math.floor(diff % 6e4 / 1e3);
	const parts = [
		{
			v: d,
			l: "Days"
		},
		{
			v: h,
			l: "Hours"
		},
		{
			v: m,
			l: "Min"
		},
		{
			v: s,
			l: "Sec"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-background/40 p-5 ring-1 ring-white/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: "Next slot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: "upcoming" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 text-xl font-bold",
				children: [
					b.sport,
					" · ",
					b.court
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					b.date,
					" · ",
					b.time
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-4 gap-2",
				children: parts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-white/[0.03] p-2 text-center ring-1 ring-white/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xl font-bold tabular-nums text-primary",
						children: p.v.toString().padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
						children: p.l
					})]
				}, p.l))
			})
		]
	});
}
function Stat({ title, value, delta, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl glass p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 font-display text-3xl font-bold tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3 w-3 text-primary" }),
					" ",
					delta
				]
			})
		]
	}) });
}
function WeatherCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/15 via-surface-elevated to-surface p-5 ring-1 ring-accent/20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "absolute -right-4 -top-4 h-24 w-24 text-amber-400/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
				children: "Tonight in Wardha"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-baseline gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-4xl font-bold tabular-nums",
					children: "28"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl text-muted-foreground",
					children: "°C"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1 flex items-center gap-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "h-3 w-3" }), " Clear skies · perfect for play"]
			})
		]
	}) });
}
function OfferCard({ tag, title, desc, tint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-0.5 hover:shadow-elevated`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${tint === "primary" ? "bg-primary/20" : "bg-accent/20"}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `relative inline-flex rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ring-1 ${tint === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"}`,
				children: tag
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "relative mt-4 text-xl font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-1 text-sm text-muted-foreground",
				children: desc
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary",
				children: ["Redeem ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })]
			})
		]
	});
}
//#endregion
export { DashboardHome as component };
