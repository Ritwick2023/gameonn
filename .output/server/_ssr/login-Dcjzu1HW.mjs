import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as RippleButton, t as Logo } from "./ui-bits-Dg99qRjR.mjs";
import { n as setRole } from "./auth-DwoQbfNO.mjs";
import { At as ArrowLeft, K as KeyRound, S as ShieldCheck, j as Phone, kt as ArrowRight, s as User } from "../_libs/lucide-react.mjs";
import { t as hero_football_default } from "./hero-football-BpCt-I9d.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-Dcjzu1HW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const [mode, setMode] = (0, import_react.useState)("phone");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden overflow-hidden lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_football_default,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover animate-ken-burns"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-background via-background/70 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-pattern opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[120px] animate-float-slow" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex h-full flex-col p-10 xl:p-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-auto max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-5xl font-bold leading-[1.02] tracking-tight xl:text-6xl",
								children: ["Welcome ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "back, player."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg text-muted-foreground",
								children: "Your turf is warmed up. Your team's waiting. Sign in to lock the slot."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 grid grid-cols-3 gap-4",
								children: [
									{
										k: "12.5k+",
										v: "Players"
									},
									{
										k: "8.4k+",
										v: "Matches"
									},
									{
										k: "4.9★",
										v: "Rating"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-2xl font-bold text-foreground",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
									children: s.v
								})] }, s.v))
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Home"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-bold sm:text-4xl",
						children: "Sign in to Game Onn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Choose how you'd like to continue."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-1 rounded-2xl glass p-1",
						children: ["phone", "credentials"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setMode(m),
							className: `relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
							children: [mode === m && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "mode-pill",
								className: "absolute inset-0 rounded-xl bg-primary shadow-glow",
								transition: {
									type: "spring",
									bounce: .2,
									duration: .5
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative inline-flex items-center gap-2",
								children: [m === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "h-4 w-4" }), m === "phone" ? "Phone OTP" : "Credentials"]
							})]
						}, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							children: mode === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFlow, {}, "phone") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CredentialsFlow, {}, "cred")
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 text-center text-xs text-muted-foreground",
						children: [
							"By continuing you accept our ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline hover:text-foreground",
								href: "#",
								children: "Terms"
							}),
							" and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "underline hover:text-foreground",
								href: "#",
								children: "Privacy"
							}),
							"."
						]
					})
				]
			})]
		})]
	});
}
function PhoneFlow() {
	const [step, setStep] = (0, import_react.useState)("phone");
	const [phone, setPhone] = (0, import_react.useState)("");
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -8
		},
		transition: { duration: .25 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: step === "phone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onSubmit: (e) => {
					e.preventDefault();
					if (phone.length === 10) setStep("otp");
				},
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Phone Number" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center rounded-2xl glass p-4 ring-1 ring-white/5 focus-within:ring-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-3 border-r border-white/10 pr-3 font-mono text-base font-semibold",
								children: "+91"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoFocus: true,
								inputMode: "numeric",
								maxLength: 10,
								value: phone,
								onChange: (e) => setPhone(e.target.value.replace(/\D/g, "")),
								placeholder: "98765 43210",
								className: "w-full bg-transparent font-mono text-lg tracking-wider outline-none placeholder:text-muted-foreground/40"
							}),
							phone.length === 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-primary" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
						variant: "primary",
						size: "lg",
						className: "w-full",
						type: "submit",
						disabled: phone.length !== 10,
						children: ["Send OTP ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}, "phone") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtpStep, {
				phone,
				onBack: () => setStep("phone"),
				onVerify: () => {
					setRole("client");
					navigate({ to: "/complete-profile" });
				}
			}, "otp")
		})
	});
}
function OtpStep({ phone, onBack, onVerify }) {
	const [otp, setOtp] = (0, import_react.useState)([
		"",
		"",
		"",
		"",
		"",
		""
	]);
	const refs = (0, import_react.useRef)([]);
	const [timer, setTimer] = (0, import_react.useState)(30);
	(0, import_react.useEffect)(() => {
		if (!timer) return;
		const t = setTimeout(() => setTimer((s) => s - 1), 1e3);
		return () => clearTimeout(t);
	}, [timer]);
	const full = otp.join("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			x: 12
		},
		animate: {
			opacity: 1,
			x: 0
		},
		exit: { opacity: 0 },
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onBack,
				className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3" }), " Change number"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Enter the 6-digit code" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: ["Sent to ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-foreground",
					children: ["+91 ", phone]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-6 gap-2",
				children: otp.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: (el) => {
						refs.current[i] = el;
					},
					value: v,
					onChange: (e) => {
						const ch = e.target.value.slice(-1).replace(/\D/g, "");
						setOtp((arr) => arr.map((x, idx) => idx === i ? ch : x));
						if (ch && i < 5) refs.current[i + 1]?.focus();
					},
					onKeyDown: (e) => {
						if (e.key === "Backspace" && !otp[i] && i > 0) refs.current[i - 1]?.focus();
					},
					inputMode: "numeric",
					maxLength: 1,
					className: `aspect-square w-full rounded-xl border bg-surface text-center font-mono text-2xl font-bold outline-none transition-all ${v ? "border-primary/60 shadow-glow" : "border-white/10"} focus:border-primary focus:shadow-glow`
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
				variant: "primary",
				size: "lg",
				className: "w-full",
				disabled: full.length !== 6,
				onClick: onVerify,
				children: ["Verify & Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-xs text-muted-foreground",
				children: timer > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Resend in ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-foreground",
					children: [timer, "s"]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTimer(30),
					className: "text-primary hover:underline",
					children: "Resend OTP"
				})
			})
		]
	});
}
function CredentialsFlow() {
	const [id, setId] = (0, import_react.useState)("");
	const [pw, setPw] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			y: -8
		},
		transition: { duration: .25 },
		onSubmit: (e) => {
			e.preventDefault();
			const low = id.trim().toLowerCase();
			if (low === "admin" && pw === "Admin") {
				setRole("admin");
				navigate({ to: "/admin" });
			} else if (low === "client" && pw === "Client") {
				setRole("client");
				navigate({ to: "/dashboard" });
			} else setErr("Invalid credentials. Try Admin/Admin or Client/Client.");
		},
		className: "space-y-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-primary/5 p-3 text-xs text-primary ring-1 ring-primary/20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-mono uppercase tracking-wider",
						children: "Demo"
					}),
					" · use ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "Admin / Admin"
					}),
					" or ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "Client / Client"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "User ID" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center rounded-2xl glass p-4 ring-1 ring-white/5 focus-within:ring-primary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "mr-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: id,
					onChange: (e) => {
						setId(e.target.value);
						setErr("");
					},
					placeholder: "Admin or Client",
					className: "w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/40"
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "Password" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 flex items-center rounded-2xl glass p-4 ring-1 ring-white/5 focus-within:ring-primary/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "mr-3 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					value: pw,
					onChange: (e) => {
						setPw(e.target.value);
						setErr("");
					},
					placeholder: "••••••••",
					className: "w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/40"
				})]
			})] }),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-destructive",
				children: err
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RippleButton, {
				variant: "primary",
				size: "lg",
				className: "w-full",
				type: "submit",
				children: ["Sign in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})
		]
	});
}
function FieldLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
		children
	});
}
//#endregion
export { LoginPage as component };
