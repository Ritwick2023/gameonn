import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { Et as Award, H as LogOut, V as Mail, j as Phone, v as SquarePen, wt as Bell } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.profile-Lg2V32su.js
var import_jsx_runtime = require_jsx_runtime();
function Profile() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Your profile",
			subtitle: "Manage personal info and preferences."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elevated",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/15 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent font-display text-4xl font-bold text-primary-foreground shadow-glow",
						children: "A"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-2xl font-bold",
						children: "Aarav Deshmukh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-2.5 py-0.5 ring-1 ring-amber-400/30",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3 w-3 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] uppercase tracking-wider text-amber-400",
							children: "Frequent Player"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: Phone,
							label: "+91 98765 43210"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: Mail,
							label: "aarav@example.com"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
						variant: "primary",
						className: "mt-6 w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "h-4 w-4" }), " Edit Profile"]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl glass p-6 shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: "Account details"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-5 grid gap-4 sm:grid-cols-2",
								children: [
									["Full Name", "Aarav Deshmukh"],
									["Favourite Sport", "Football"],
									["Phone", "+91 98765 43210"],
									["Email", "aarav@example.com"],
									["Member Since", "Jan 2024"],
									["Total Bookings", "28"]
								].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm font-semibold",
									children: v
								})] }, k))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl glass p-6 shadow-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "flex items-center gap-2 font-display text-lg font-semibold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }), " Notification preferences"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-3",
								children: [
									["Booking reminders", true],
									["Tournament updates", true],
									["Promotional offers", false],
									["WhatsApp updates", true]
								].map(([label, on]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-center justify-between rounded-2xl bg-surface p-4 ring-1 ring-white/5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { defaultOn: on })]
								}, label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
						})
					]
				})
			})]
		})]
	});
}
function Row({ icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-2xl bg-surface p-3 ring-1 ring-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: label
		})]
	});
}
function Toggle({ defaultOn = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "checkbox",
		defaultChecked: defaultOn,
		className: "relative h-6 w-11 cursor-pointer appearance-none rounded-full bg-white/10 transition-colors checked:bg-primary\n        before:absolute before:left-0.5 before:top-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform\n        checked:before:translate-x-5"
	});
}
//#endregion
export { Profile as component };
