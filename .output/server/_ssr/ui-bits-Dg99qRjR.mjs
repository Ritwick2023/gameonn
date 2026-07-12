import { a as __toESM } from "../_runtime.mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-bits-Dg99qRjR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RippleButton({ children, variant = "primary", size = "md", className = "", ...props }) {
	const [ripples, setRipples] = (0, import_react.useState)([]);
	const sizes = {
		sm: "h-9 px-4 text-sm",
		md: "h-11 px-5 text-sm",
		lg: "h-13 px-7 text-base py-3.5"
	};
	const variants = {
		primary: "bg-primary text-primary-foreground hover:shadow-glow",
		ghost: "glass text-foreground hover:bg-white/10",
		outline: "border border-white/15 text-foreground hover:bg-white/5",
		danger: "bg-destructive/90 text-destructive-foreground hover:bg-destructive"
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
		className: `relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${sizes[size]} ${variants[variant]} ${className}`,
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
function Reveal({ children, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 18
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-40px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Logo({ to = "/", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "flex items-center gap-2.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 24 24",
				className: "h-5 w-5",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 2L4 14h7l-1 8 9-12h-7l1-8z" })
			})
		}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
	});
}
function StatusPill({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ring-1 ${{
			Paid: "bg-primary/15 text-primary ring-primary/30",
			Pending: "bg-amber-400/15 text-amber-400 ring-amber-400/30",
			Refunded: "bg-muted text-muted-foreground ring-white/10",
			upcoming: "bg-accent/15 text-accent ring-accent/30",
			completed: "bg-primary/15 text-primary ring-primary/30",
			cancelled: "bg-destructive/15 text-destructive ring-destructive/30",
			Available: "bg-primary/15 text-primary ring-primary/30",
			Booked: "bg-muted text-muted-foreground ring-white/10",
			Approved: "bg-primary/15 text-primary ring-primary/30",
			active: "bg-primary/15 text-primary ring-primary/30",
			inactive: "bg-muted text-muted-foreground ring-white/10",
			expired: "bg-destructive/15 text-destructive ring-destructive/30"
		}[status] ?? "bg-white/5 text-muted-foreground ring-white/10"}`,
		children: status
	});
}
function PageHeader({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "truncate font-display text-2xl font-bold sm:text-3xl",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: subtitle
			})]
		}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "shrink-0",
			children: action
		})]
	});
}
//#endregion
export { StatusPill as a, RippleButton as i, PageHeader as n, Reveal as r, Logo as t };
