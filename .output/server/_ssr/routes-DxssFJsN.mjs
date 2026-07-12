import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion, n as useSpring, o as performance_default, r as useScroll, t as useInView } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as Flame, A as Play, B as MapPin, Dt as ArrowUp, J as IndianRupee, L as MessageCircle, P as Navigation, R as Menu, T as Send, V as Mail, X as Heart, _ as Star, _t as Check, at as Droplets, bt as Camera, et as Facebook, gt as ChevronDown, i as Wind, it as Dumbbell, j as Phone, kt as ArrowRight, l as Trophy, mt as ChevronRight, n as X, o as Users, q as Instagram, t as Zap, ut as Clock, x as Shield, xt as Calendar, y as Sparkles, yt as Car } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as hero_football_default } from "./hero-football-BpCt-I9d.mjs";
import { n as hero_celebration_default, r as hero_cricket_default, t as hero_ball_default } from "./hero-ball-CQp4CFNz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxssFJsN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HERO_SLIDES = [
	{
		src: hero_football_default,
		label: "Floodlit Football"
	},
	{
		src: hero_celebration_default,
		label: "Match Nights"
	},
	{
		src: hero_ball_default,
		label: "Premium Turf"
	},
	{
		src: hero_cricket_default,
		label: "Cricket Arena"
	}
];
var SPORTS = [
	"Football",
	"Cricket",
	"Box Cricket",
	"Pickleball"
];
function HomePage() {
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { scaleX: progress },
				className: "fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-primary via-primary-glow to-accent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickBooking, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutFacilities, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveSlots, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChoose, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpcomingMatches, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileStickyCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {})
		]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const links = [
		{
			href: "#home",
			label: "Home"
		},
		{
			href: "#book",
			label: "Book Now"
		},
		{
			href: "#facilities",
			label: "Facilities"
		},
		{
			href: "#pricing",
			label: "Pricing"
		},
		{
			href: "#gallery",
			label: "Gallery"
		},
		{
			href: "#matches",
			label: "Matches"
		},
		{
			href: "#contact",
			label: "Contact"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: `flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-elevated" : "bg-transparent"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#home",
						className: "group flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
								className: "h-5 w-5",
								strokeWidth: 2.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-bold tracking-tight",
								children: ["Game", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: " Onn"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Wardha"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-1 lg:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
							children: l.label
						}) }, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/login",
								className: "hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex",
								children: "Login"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/dashboard/book",
								className: "hidden sm:inline-flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
									variant: "primary",
									size: "sm",
									children: ["Book Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Toggle menu",
								className: "grid h-10 w-10 place-items-center rounded-full glass lg:hidden",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				className: "mt-2 overflow-hidden rounded-2xl glass-strong lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-col p-2",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground",
						children: [
							l.label,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
						]
					}) }, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "mt-1 border-t border-white/5 px-2 pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
								variant: "primary",
								className: "w-full",
								children: "Book Now"
							})
						})
					})]
				})
			}) })]
		})
	});
}
function Hero() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative isolate flex min-h-[100svh] w-full items-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [
					HERO_SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: false,
						animate: { opacity: i === idx ? 1 : 0 },
						transition: {
							duration: 1.4,
							ease: "easeInOut"
						},
						className: "absolute inset-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.src,
							alt: s.label,
							width: 1920,
							height: 1080,
							className: `h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`,
							style: { animationPlayState: i === idx ? "running" : "paused" }
						})
					}, s.src)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-pattern opacity-30" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-float-slow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px] animate-float-slow",
				style: { animationDelay: "1.5s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })]
							}), "Now Live in Wardha"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "GAME"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-gradient",
								children: "ONN."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl",
							children: "Wardha's premier turf & sports arena. Premium grass, blinding floodlights, and a slot waiting with your name on it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-mono text-sm uppercase tracking-[0.3em] text-primary",
							children: "Play. Book. Repeat."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#book",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
									variant: "primary",
									size: "lg",
									children: ["Book Your Slot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#facilities",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
									variant: "ghost",
									size: "lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), " Explore Turf"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }), " 4.9 / 1.2k reviews"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-3 w-px bg-border sm:block" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Open 6 AM – 2 AM"
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-10 right-6 z-10 hidden flex-col gap-2 sm:right-10 md:flex",
				children: HERO_SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setIdx(i),
					className: "group flex items-center gap-3",
					"aria-label": `Show ${s.label}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100",
						children: s.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-8 w-[2px] origin-top transition-all ${i === idx ? "bg-primary scale-y-100" : "bg-white/20 scale-y-50"}` })]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				animate: { y: [
					0,
					8,
					0
				] },
				transition: {
					duration: 2,
					repeat: Infinity
				},
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[10px] uppercase tracking-[0.3em]",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })]
			})
		]
	});
}
function QuickBooking() {
	const [sport, setSport] = (0, import_react.useState)("Football");
	const [date, setDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [time, setTime] = (0, import_react.useState)("19:00");
	const priceMap = {
		Football: 1200,
		Cricket: 1800,
		"Box Cricket": 1500,
		Pickleball: 800
	};
	const evening = parseInt(time.split(":")[0]) >= 18;
	const price = priceMap[sport] * (evening ? 1.2 : 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "book",
		className: "relative -mt-16 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .7 },
				className: "glass-strong relative overflow-hidden rounded-3xl shadow-elevated p-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 p-6 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Sport",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectChips, {
								options: SPORTS,
								value: sport,
								onChange: setSport
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Date",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: date,
								onChange: (e) => setDate(e.target.value),
								className: "w-full bg-transparent text-base font-medium text-foreground outline-none [color-scheme:dark]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Time",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "time",
								value: time,
								onChange: (e) => setTime(e.target.value),
								className: "w-full bg-transparent text-base font-medium text-foreground outline-none [color-scheme:dark]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 md:flex-col md:items-stretch",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: "Estimated"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-0.5 font-mono text-2xl font-bold text-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums",
											children: price.toLocaleString("en-IN")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 text-xs font-normal text-muted-foreground",
											children: "/ hr"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
								variant: "primary",
								size: "lg",
								className: "md:w-full",
								children: ["Book ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						})
					]
				})]
			})
		})
	});
}
function Field({ label, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface/60 p-4 ring-1 ring-white/5 transition-colors focus-within:ring-primary/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
			children: [icon, label]
		}), children]
	});
}
function SelectChips({ options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-1.5",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onChange(o),
			className: `rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${value === o ? "bg-primary text-primary-foreground shadow-glow" : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"}`,
			children: o
		}, o))
	});
}
var FACILITIES = [
	{
		icon: Sparkles,
		title: "Premium Turf",
		desc: "FIFA-grade artificial grass with shock pad base."
	},
	{
		icon: Zap,
		title: "Floodlights",
		desc: "10,000 lumens of stadium-grade lighting."
	},
	{
		icon: Car,
		title: "Parking",
		desc: "Spacious lot for 30+ cars and bikes."
	},
	{
		icon: Droplets,
		title: "Washrooms",
		desc: "Hygienic, well-maintained restrooms."
	},
	{
		icon: Wind,
		title: "Changing Rooms",
		desc: "Separate rooms with lockers."
	},
	{
		icon: Droplets,
		title: "Drinking Water",
		desc: "Filtered, chilled water on tap."
	},
	{
		icon: Camera,
		title: "CCTV Coverage",
		desc: "Full perimeter and pitch surveillance."
	},
	{
		icon: Dumbbell,
		title: "Equipment Rental",
		desc: "Balls, bibs, pads, bats — sorted."
	},
	{
		icon: Heart,
		title: "First Aid",
		desc: "On-site kit and trained staff."
	}
];
function AboutFacilities() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "facilities",
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Why Game Onn" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl",
					children: [
						"Built like a stadium.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Run like a startup."
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-lg text-muted-foreground lg:justify-self-end",
					children: "Every detail engineered for the player. From the shock-padded turf underfoot to the seamless booking flow on your phone."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: FACILITIES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCard, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated hover:ring-1 hover:ring-primary/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 ring-1 ring-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
									className: "h-6 w-6 text-primary",
									strokeWidth: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: f.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" })
						]
					})
				}, f.title))
			})]
		})
	});
}
var SLOT_HOURS = [
	{
		h: "06:00",
		status: "available"
	},
	{
		h: "07:00",
		status: "available"
	},
	{
		h: "08:00",
		status: "booked"
	},
	{
		h: "17:00",
		status: "available"
	},
	{
		h: "18:00",
		status: "booked"
	},
	{
		h: "19:00",
		status: "filling"
	},
	{
		h: "20:00",
		status: "booked"
	},
	{
		h: "21:00",
		status: "available"
	},
	{
		h: "22:00",
		status: "available"
	},
	{
		h: "23:00",
		status: "available"
	}
];
function LiveSlots() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Live Availability" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl",
					children: "Today's slots, in real time."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendDot, {
							color: "bg-primary",
							label: "Available"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendDot, {
							color: "bg-amber-400",
							label: "Filling fast"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegendDot, {
							color: "bg-white/20",
							label: "Booked"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 overflow-hidden rounded-3xl glass shadow-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:p-6 lg:grid-cols-5",
					children: SLOT_HOURS.map((s, i) => {
						const isAvail = s.status === "available";
						const isFill = s.status === "filling";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
							initial: {
								opacity: 0,
								y: 16
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: i * .04,
								duration: .5
							},
							disabled: s.status === "booked",
							className: `group relative rounded-2xl border p-4 text-left transition-all ${isAvail ? "border-primary/20 bg-primary/5 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow" : isFill ? "border-amber-400/30 bg-amber-400/5 hover:-translate-y-1 hover:border-amber-400/60" : "cursor-not-allowed border-white/5 bg-white/[0.02] opacity-60"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-2xl font-bold tabular-nums",
									children: s.h
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `mt-1 text-xs font-medium uppercase tracking-wider ${isAvail ? "text-primary" : isFill ? "text-amber-400" : "text-muted-foreground line-through"}`,
									children: s.status === "available" ? "Available" : s.status === "filling" ? "Filling" : "Booked"
								}),
								isAvail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "absolute right-3 top-3 h-4 w-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" })
							]
						}, s.h);
					})
				})
			})]
		})
	});
}
function LegendDot({ color, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex items-center gap-2 font-mono uppercase tracking-wider text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${color}` }),
			" ",
			label
		]
	});
}
var PRICING = [
	{
		tier: "Morning",
		time: "6 AM – 12 PM",
		price: 800,
		perks: [
			"Cool weather",
			"Best for fitness",
			"Open turf"
		],
		featured: false
	},
	{
		tier: "Afternoon",
		time: "12 PM – 5 PM",
		price: 1e3,
		perks: [
			"Half rate covers",
			"Practice sessions",
			"Quick bookings"
		],
		featured: false
	},
	{
		tier: "Evening",
		time: "5 PM – 10 PM",
		price: 1500,
		perks: [
			"Floodlit pitch",
			"Peak vibe",
			"Prime time"
		],
		featured: true
	},
	{
		tier: "Weekend",
		time: "All day Sat–Sun",
		price: 1800,
		perks: [
			"Tournament ready",
			"Group discounts",
			"DJ on request"
		],
		featured: false
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Pricing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mx-auto mt-3 max-w-2xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl",
					children: ["Flat rates. No surprises. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Just play."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
				children: PRICING.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCard, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${p.featured ? "bg-gradient-to-br from-primary/20 via-surface-elevated to-surface ring-2 ring-primary shadow-glow" : "glass hover:ring-1 hover:ring-white/20"}`,
						children: [
							p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-5 top-5 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-foreground",
								children: "Popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								children: p.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 text-2xl font-bold",
								children: p.tier
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-baseline gap-1 font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5 text-muted-foreground" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-5xl font-bold tabular-nums",
										children: p.price
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-1 text-sm text-muted-foreground",
										children: "/hr"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2.5",
								children: p.perks.map((perk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2 text-sm text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
										" ",
										perk
									]
								}, perk))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
								variant: p.featured ? "primary" : "ghost",
								className: "mt-8 w-full",
								children: [
									"Book ",
									p.tier,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								]
							})
						]
					})
				}, p.tier))
			})]
		})
	});
}
var GALLERY_TABS = [
	"All",
	"Football",
	"Cricket",
	"Night Matches"
];
var GALLERY_ITEMS = [
	{
		src: hero_football_default,
		cat: "Football",
		tall: true
	},
	{
		src: hero_celebration_default,
		cat: "Night Matches",
		tall: false
	},
	{
		src: hero_ball_default,
		cat: "Football",
		tall: false
	},
	{
		src: hero_cricket_default,
		cat: "Cricket",
		tall: true
	},
	{
		src: hero_football_default,
		cat: "Night Matches",
		tall: false
	},
	{
		src: hero_celebration_default,
		cat: "Football",
		tall: true
	}
];
function Gallery() {
	const [tab, setTab] = (0, import_react.useState)("All");
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	const items = tab === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === tab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Gallery" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl",
					children: "Moments from the turf."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1 rounded-full glass p-1",
					children: GALLERY_TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTab(t),
						className: `rounded-full px-4 py-1.5 text-xs font-medium transition-all ${tab === t ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"}`,
						children: t
					}, t))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
				children: items.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
					layout: true,
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						delay: i * .05,
						duration: .5
					},
					onClick: () => setLightbox(g.src),
					className: `group relative overflow-hidden rounded-2xl ring-1 ring-white/5 ${g.tall ? "row-span-2 aspect-[3/5]" : "aspect-square"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g.src,
							alt: g.cat,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-90" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-3 left-3 right-3 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-foreground",
								children: g.cat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-8 w-8 place-items-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 -rotate-45" })
							})]
						})
					]
				}, i))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setLightbox(null),
			className: "fixed inset-0 z-[80] grid place-items-center bg-background/95 p-6 backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				initial: {
					scale: .9,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				exit: {
					scale: .9,
					opacity: 0
				},
				src: lightbox,
				alt: "",
				className: "max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elevated"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setLightbox(null),
				className: "absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass-strong",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			})]
		}) })]
	});
}
var WHY = [
	{
		icon: Zap,
		title: "Instant booking",
		desc: "Lock your slot in 30 seconds. No calls, no waiting."
	},
	{
		icon: Shield,
		title: "Verified safe",
		desc: "CCTV, on-site staff, and first-aid every match."
	},
	{
		icon: Trophy,
		title: "Tournament ready",
		desc: "Host your own league with our match-grade pitch."
	},
	{
		icon: Users,
		title: "Community first",
		desc: "Find players, build teams, never miss a game."
	}
];
function WhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Why Choose Us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mx-auto mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl",
					children: ["More than a turf. A ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "home ground."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: WHY.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCard, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-surface-elevated to-surface p-7 ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:ring-primary/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, {
								className: "h-9 w-9 text-primary",
								strokeWidth: 1.8
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-semibold",
								children: w.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: w.desc
							})
						]
					})
				}, w.title))
			})]
		})
	});
}
var STATS = [
	{
		value: 12500,
		suffix: "+",
		label: "Players hosted"
	},
	{
		value: 8400,
		suffix: "+",
		label: "Matches played"
	},
	{
		value: 4.9,
		suffix: "/5",
		label: "Customer rating",
		decimals: 1
	},
	{
		value: 6,
		suffix: " yrs",
		label: "Of premium service"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] glass-strong shadow-elevated",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-10 p-10 sm:grid-cols-2 lg:grid-cols-4 lg:p-16",
					children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { ...s }, s.label))
				})]
			})
		})
	});
}
function Counter({ value, suffix, label, decimals = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-100px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance_default.now();
		const dur = 1800;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(value * eased);
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, value]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "font-display text-5xl font-bold tabular-nums sm:text-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: n.toLocaleString("en-IN", {
					maximumFractionDigits: decimals,
					minimumFractionDigits: decimals
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground",
				children: suffix
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
			children: label
		})]
	});
}
var MATCHES = [
	{
		name: "Wardha Premier League",
		date: "Sat, 12 Jul",
		time: "6:00 PM",
		prize: 25e3,
		days: 4,
		hours: 6
	},
	{
		name: "Box Cricket Cup '26",
		date: "Sun, 20 Jul",
		time: "4:00 PM",
		prize: 15e3,
		days: 12,
		hours: 2
	},
	{
		name: "Friday Night 5-a-side",
		date: "Fri, 4 Jul",
		time: "9:00 PM",
		prize: 5e3,
		days: 0,
		hours: 18
	}
];
function UpcomingMatches() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "matches",
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Tournaments" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
					children: "Upcoming matches."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "group inline-flex items-center gap-1 text-sm font-medium text-primary",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: MATCHES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCard, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary ring-1 ring-primary/20",
									children: m.date
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-5 w-5 text-amber-400" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-2xl font-bold leading-tight",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-sm text-muted-foreground",
								children: ["Kickoff ", m.time]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
								children: [
									{
										v: m.days,
										l: "Days"
									},
									{
										v: m.hours,
										l: "Hours"
									},
									{
										v: 42,
										l: "Min"
									}
								].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-2xl font-bold tabular-nums text-primary",
										children: c.v.toString().padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
										children: c.l
									})]
								}, c.l))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-end justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
									children: "Prize Pool"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-0.5 font-mono text-xl font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: m.prize.toLocaleString("en-IN")
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
									variant: "primary",
									size: "sm",
									children: "Register"
								})]
							})
						]
					})
				}, m.name))
			})]
		})
	});
}
var REVIEWS = [
	{
		name: "Aarav Deshmukh",
		rating: 5,
		text: "Best turf in Wardha, hands down. Floodlights are insane, the grass is perfect. Booking takes 20 seconds."
	},
	{
		name: "Priya Kulkarni",
		rating: 5,
		text: "Organized our office tournament here. Staff was great, parking sorted, and the vibe was electric."
	},
	{
		name: "Rohit Pawar",
		rating: 5,
		text: "I play here every Friday night. Has become a ritual. Quality you'd expect in Mumbai or Pune."
	},
	{
		name: "Sneha Joshi",
		rating: 4,
		text: "Love the changing rooms and the equipment rental. Wish they opened a second location soon!"
	}
];
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Reviews" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
					children: "Loved by 1,200+ players."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 lg:justify-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex",
							children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 fill-primary text-primary" }, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-2xl font-bold tabular-nums",
							children: "4.9"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: "on Google"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2",
				children: REVIEWS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealCard, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-lg font-bold text-primary-foreground",
								children: r.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex",
								children: [...Array(r.rating)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-primary text-primary" }, i))
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: [
								"\"",
								r.text,
								"\""
							]
						})]
					})
				}, r.name))
			})]
		})
	});
}
var FAQS = [
	{
		q: "How do I book a slot?",
		a: "Pick your sport, date and time on our Quick Book widget or the dedicated booking page. Pay online and you're locked in."
	},
	{
		q: "What's your cancellation policy?",
		a: "Full refund up to 12 hours before kickoff. Partial refund within 12 hours. No refund after slot time begins."
	},
	{
		q: "Do you provide equipment?",
		a: "Yes — footballs, bibs, cricket bats, pads, helmets, and pickleball gear all available on rent at the counter."
	},
	{
		q: "Is parking available?",
		a: "We have a spacious lot accommodating 30+ cars and 50+ two-wheelers, with on-site security."
	},
	{
		q: "Can I host a tournament here?",
		a: "Absolutely. Reach out via WhatsApp and we'll help you plan brackets, prize pools, and crowd management."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "FAQ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
					children: "Questions, answered."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 space-y-3",
				children: FAQS.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `overflow-hidden rounded-2xl transition-all ${isOpen ? "glass-strong shadow-elevated" : "glass"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : i),
							className: "flex w-full items-center justify-between gap-4 p-6 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base font-semibold sm:text-lg",
								children: f.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "rotate-180 bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .3,
								ease: "easeOut"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-6 pb-6 -mt-2 text-base leading-relaxed text-muted-foreground",
								children: f.a
							})
						}) })]
					}, f.q);
				})
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-28 px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
					center: true,
					children: "Find Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-center font-display text-4xl font-bold sm:text-5xl",
					children: "Come play with us."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative overflow-hidden rounded-3xl glass shadow-elevated",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] w-full bg-surface",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-pattern opacity-50" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 animate-pulse-ring rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-7 w-7" })
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-6 left-6 right-6 rounded-2xl glass-strong p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
										children: "Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-semibold",
										children: "Game Onn Arena, Bachelor Road, Wardha — 442001, Maharashtra"
									})]
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: Phone,
								label: "Call us",
								value: "+91 98765 43210",
								href: "tel:+919876543210",
								accent: "primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: MessageCircle,
								label: "WhatsApp",
								value: "Chat with the team",
								href: "#",
								accent: "primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: Navigation,
								label: "Directions",
								value: "Open in Google Maps",
								href: "#",
								accent: "accent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: Clock,
								label: "Open Hours",
								value: "Daily 6:00 AM – 2:00 AM",
								accent: "accent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
								icon: Mail,
								label: "Email",
								value: "hello@gameonn.in",
								href: "mailto:hello@gameonn.in",
								accent: "primary"
							})
						]
					})]
				})
			]
		})
	});
}
function ContactCard({ icon: Icon, label, value, href, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(href ? "a" : "div", {
		href,
		className: `group flex items-center gap-4 rounded-2xl glass p-5 transition-all ${href ? "hover:-translate-y-0.5 hover:shadow-elevated" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-12 w-12 place-items-center rounded-xl ring-1 transition-transform group-hover:scale-110 ${accent === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate font-semibold",
					children: value
				})]
			}),
			href && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" })
		]
	});
}
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	function subscribe(e) {
		e.preventDefault();
		if (!/^\S+@\S+\.\S+$/.test(email)) {
			toast.error("Enter a valid email");
			return;
		}
		toast.success("You're on the list", { description: "We'll email you weekly slot drops & tournament alerts." });
		setEmail("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative mt-20 border-t border-white/5 px-4 pb-10 pt-20 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-surface to-accent/5 p-8 sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
									children: "Newsletter"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl font-bold sm:text-3xl",
								children: "Slot drops, tournaments & early access."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Join 2,400+ players in Wardha. No spam — one email a week."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: subscribe,
							className: "flex items-center gap-2 rounded-full glass-strong p-1.5 shadow-elevated",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "ml-3 h-4 w-4 shrink-0 text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									placeholder: "you@email.com",
									className: "w-full bg-transparent px-1 py-2 text-sm outline-none placeholder:text-muted-foreground/60"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:shadow-glow",
									children: ["Subscribe ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" })]
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
									className: "h-5 w-5",
									strokeWidth: 2.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-2xl font-bold",
								children: ["Game", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: " Onn"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-muted-foreground",
							children: "Wardha's premier turf & sports arena. Play. Book. Repeat."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+919999999999",
									className: "flex items-center gap-2 hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-3.5 w-3.5 text-primary" }), " +91 99999 99999"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://wa.me/919999999999",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-2 hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-primary" }), " WhatsApp us"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://maps.google.com/?q=Wardha+Maharashtra",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center gap-2 hover:text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-primary" }), " Bachelor Rd, Wardha"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-2",
							children: [
								{
									Icon: Instagram,
									href: "https://instagram.com"
								},
								{
									Icon: Facebook,
									href: "https://facebook.com"
								},
								{
									Icon: MessageCircle,
									href: "https://wa.me/919999999999"
								}
							].map(({ Icon, href }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground",
								"aria-label": "Social link",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}, i))
						})
					] }), [
						{
							title: "Explore",
							links: [
								{
									label: "Book Now",
									href: "#book"
								},
								{
									label: "Facilities",
									href: "#facilities"
								},
								{
									label: "Pricing",
									href: "#pricing"
								},
								{
									label: "Gallery",
									href: "#gallery"
								}
							]
						},
						{
							title: "Company",
							links: [
								{
									label: "About",
									href: "#about"
								},
								{
									label: "Tournaments",
									href: "#matches"
								},
								{
									label: "Reviews",
									href: "#reviews"
								},
								{
									label: "Contact",
									href: "#contact"
								}
							]
						},
						{
							title: "Account",
							links: [
								{
									label: "Login / Sign up",
									href: "/login",
									external: true
								},
								{
									label: "My Bookings",
									href: "/dashboard/bookings",
									external: true
								},
								{
									label: "Admin Portal",
									href: "/admin",
									external: true
								},
								{
									label: "FAQ",
									href: "#faq"
								}
							]
						}
					].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: col.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: col.links.map((l) => l.external ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.href,
							className: "text-sm text-foreground/80 transition-colors hover:text-primary",
							children: l.label
						}) }, l.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-foreground/80 transition-colors hover:text-primary",
							children: l.label
						}) }, l.label))
					})] }, col.title))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-xs uppercase tracking-wider text-muted-foreground",
						children: [
							"© ",
							year,
							" Game Onn Arena. Wardha, India."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Refunds"
							})
						]
					})]
				})
			]
		})
	});
}
function ScrollToTop() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 800);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			opacity: 0,
			scale: .6,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .6,
			y: 20
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Scroll to top",
		className: "fixed bottom-24 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow ring-1 ring-primary/30 hover:brightness-110 sm:bottom-6 sm:right-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
			className: "h-5 w-5",
			strokeWidth: 2.5
		})
	}) });
}
function MobileStickyCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-4 left-4 right-4 z-40 sm:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#book",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
				variant: "primary",
				className: "w-full shadow-glow",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4" }), " Book Your Slot Now"]
			})
		})
	});
}
function SectionEyebrow({ children, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center gap-2 rounded-full glass px-3 py-1 ${center ? "mx-auto block w-fit" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
			children
		})]
	});
}
function RevealCard({ children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "h-full",
		children
	});
}
function RippleButton({ children, variant = "primary", size = "md", className = "", ...props }) {
	const [ripples, setRipples] = (0, import_react.useState)([]);
	const sizes = {
		sm: "h-9 px-4 text-sm",
		md: "h-11 px-5 text-sm",
		lg: "h-13 px-7 text-base py-3.5"
	};
	const variants = {
		primary: "bg-primary text-primary-foreground hover:shadow-glow",
		ghost: "glass text-foreground hover:bg-white/10"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: (e) => {
			const rect = e.currentTarget.getBoundingClientRect();
			const id = Date.now();
			setRipples((r) => [...r, {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
				id
			}]);
			setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
			props.onClick?.(e);
		},
		...props,
		className: `relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.97] ${sizes[size]} ${variants[variant]} ${className}`,
		children: [
			ripples.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40",
				style: {
					left: r.x,
					top: r.y,
					animation: "ripple 0.7s ease-out forwards"
				}
			}, r.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes ripple { to { transform: translate(-50%, -50%) scale(40); opacity: 0; } }` }),
			children
		]
	});
}
//#endregion
export { HomePage as component };
