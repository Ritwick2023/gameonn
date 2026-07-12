import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as RippleButton, n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { B as MapPin, L as MessageCircle, N as Palette, V as Mail, Y as Image, et as Facebook, j as Phone, q as Instagram, st as CreditCard, ut as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-DYbBl5tj.js
var import_jsx_runtime = require_jsx_runtime();
function AdminSettings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Settings",
			subtitle: "Business profile, contact details and integrations.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
				variant: "primary",
				size: "sm",
				children: "Save changes"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Business hours",
					icon: Clock,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: [
							"Mon",
							"Tue",
							"Wed",
							"Thu",
							"Fri",
							"Sat",
							"Sun"
						].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[60px_1fr_1fr] items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs uppercase tracking-wider text-muted-foreground",
									children: d
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeIn, {
									label: "Open",
									v: "06:00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeIn, {
									label: "Close",
									v: "02:00"
								})
							]
						}, d))
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Contact details",
						icon: Phone,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								icon: Phone,
								label: "Phone",
								v: "+91 98765 43210"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								icon: Mail,
								label: "Email",
								v: "hello@gameonn.in"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								icon: MapPin,
								label: "Address",
								v: "Bachelor Road, Wardha — 442001"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Google Maps",
					icon: MapPin,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						label: "Embed URL",
						v: "https://maps.google.com/embed?..."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Paste your Google Maps embed URL to render the location pin on the public site."
					})]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Branding",
						icon: Image,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									className: "h-7 w-7",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13 2L4 14h7l-1 8 9-12h-7l1-8z" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RippleButton, {
								variant: "ghost",
								size: "sm",
								children: "Upload logo"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorRow, {
								label: "Primary",
								hex: "#22C55E"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorRow, {
								label: "Accent",
								hex: "#3B82F6"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Payment gateway",
					icon: CreditCard,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-accent/10 p-4 text-xs text-accent ring-1 ring-accent/30",
							children: "Razorpay integration · ready to connect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "Razorpay Key ID",
							v: "rzp_live_xxxxxxxxxxxx"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "Razorpay Secret",
							v: "••••••••••••••••",
							type: "password"
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Social media",
						icon: Palette,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								icon: Instagram,
								label: "Instagram",
								v: "@gameonn.wardha"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								icon: Facebook,
								label: "Facebook",
								v: "/gameonn.wardha"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								icon: MessageCircle,
								label: "WhatsApp",
								v: "+91 98765 43210"
							})
						]
					})
				})
			]
		})]
	});
}
function Section({ title, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl glass p-6 shadow-elevated",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "flex items-center gap-2 font-display text-lg font-semibold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }),
				" ",
				title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 space-y-3",
			children
		})]
	});
}
function Input({ icon: Icon, label, v, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1.5 flex items-center rounded-2xl bg-surface px-4 py-3 ring-1 ring-white/5 focus-within:ring-primary/40",
			children: [Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				defaultValue: v,
				type,
				className: "w-full bg-transparent text-sm outline-none"
			})]
		})]
	});
}
function TimeIn({ label, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "time",
			defaultValue: v,
			className: "mt-0.5 w-full rounded-xl bg-surface px-3 py-2 text-sm outline-none ring-1 ring-white/5 [color-scheme:dark]"
		})]
	});
}
function ColorRow({ label, hex }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-2xl bg-surface p-3 ring-1 ring-white/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-8 w-8 rounded-lg ring-1 ring-white/10",
			style: { background: hex }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-sm font-semibold",
			children: hex
		})] })]
	});
}
//#endregion
export { AdminSettings as component };
