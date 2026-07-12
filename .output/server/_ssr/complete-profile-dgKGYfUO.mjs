import { a as __toESM } from "../_runtime.mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RippleButton, t as Logo } from "./ui-bits-Dg99qRjR.mjs";
import { _t as Check, kt as ArrowRight, y as Sparkles } from "../_libs/lucide-react.mjs";
import { l as SPORTS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/complete-profile-dgKGYfUO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CompleteProfile() {
	const navigate = useNavigate();
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [sport, setSport] = (0, import_react.useState)("Football");
	const [tos, setTos] = (0, import_react.useState)(false);
	const valid = name.trim().length >= 2 && tos;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid min-h-screen place-items-center px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-[120px] animate-float-slow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-float-slow",
				style: { animationDelay: "1.5s" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-20 grid-pattern opacity-30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "overflow-hidden rounded-3xl glass-strong shadow-elevated p-8 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-primary",
								children: "Final step"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-3xl font-bold sm:text-4xl",
							children: "Complete your profile"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "A few details and you're game-ready."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								if (valid) navigate({ to: "/dashboard" });
							},
							className: "mt-8 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Full Name",
									required: true,
									value: name,
									onChange: setName,
									placeholder: "e.g. Aarav Deshmukh"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									label: "Email",
									type: "email",
									hint: "Optional · receipts & match reminders",
									value: email,
									onChange: setEmail,
									placeholder: "you@example.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Favourite Sport" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4",
									children: SPORTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setSport(s),
										className: `relative rounded-2xl border p-4 text-sm font-semibold transition-all ${sport === s ? "border-primary bg-primary/10 text-primary shadow-glow" : "border-white/10 bg-surface text-muted-foreground hover:border-white/20 hover:text-foreground"}`,
										children: [s, sport === s && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "absolute right-2 top-2 h-3.5 w-3.5" })]
									}, s))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-2xl bg-surface/60 p-4 ring-1 ring-white/5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all ${tos ? "border-primary bg-primary text-primary-foreground" : "border-white/20 bg-transparent"}`,
											children: tos && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
												className: "h-3.5 w-3.5",
												strokeWidth: 3
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: tos,
											onChange: (e) => setTos(e.target.checked),
											className: "sr-only"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-muted-foreground",
											children: [
												"I accept the ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													className: "text-foreground underline",
													href: "#",
													children: "Terms of Service"
												}),
												" and ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													className: "text-foreground underline",
													href: "#",
													children: "Privacy Policy"
												}),
												"."
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
									variant: "primary",
									size: "lg",
									className: "w-full",
									type: "submit",
									disabled: !valid,
									children: ["Create Account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Label({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
		children
	});
}
function Input({ label, value, onChange, placeholder, type = "text", required, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, { children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary",
			children: " *"
		})] }), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] text-muted-foreground",
			children: hint
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		value,
		onChange: (e) => onChange(e.target.value),
		placeholder,
		className: "mt-2 w-full rounded-2xl bg-surface px-4 py-3.5 text-base outline-none ring-1 ring-white/5 transition-all placeholder:text-muted-foreground/40 focus:ring-primary/40"
	})] });
}
//#endregion
export { CompleteProfile as component };
