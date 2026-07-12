import { a as __toESM } from "../_runtime.mjs";
import { a as AnimatePresence, i as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { L as MessageCircle, V as Mail, gt as ChevronDown, j as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard.support-B49DixSg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FAQS = [
	{
		q: "How do I cancel a booking?",
		a: "Open My Bookings → tap the booking → Cancel. Full refund up to 12 hours before kickoff."
	},
	{
		q: "Where can I download my receipt?",
		a: "Go to Payment History and tap Receipt next to any transaction. PDF will be emailed too."
	},
	{
		q: "Can I reschedule a slot?",
		a: "Yes — message support on WhatsApp at least 6 hours before your slot and we'll move it free of charge."
	},
	{
		q: "Do you provide equipment?",
		a: "Footballs, bibs, bats, pads, pickleball gear — all available on rent at the counter."
	}
];
function Support() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Support",
				subtitle: "We're here, every day from 6 AM to 12 AM."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
						icon: MessageCircle,
						title: "WhatsApp",
						sub: "Chat now",
						href: "#",
						tint: "primary"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: Phone,
							title: "Call us",
							sub: "+91 98765 43210",
							href: "tel:+919876543210",
							tint: "accent"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCard, {
							icon: Mail,
							title: "Email",
							sub: "hello@gameonn.in",
							href: "mailto:hello@gameonn.in",
							tint: "primary"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 font-display text-xl font-semibold",
					children: "Quick answers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQAccordion, {})] })
			})
		]
	});
}
function ContactCard({ icon: Icon, title, sub, href, tint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: "group block rounded-3xl glass p-6 transition-all hover:-translate-y-0.5 hover:shadow-elevated",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `grid h-12 w-12 place-items-center rounded-xl ring-1 transition-transform group-hover:scale-110 ${tint === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-lg font-bold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: sub
			})
		]
	});
}
function FAQAccordion() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2",
		children: FAQS.map((f, i) => {
			const isOpen = open === i;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `overflow-hidden rounded-2xl transition-all ${isOpen ? "glass-strong" : "glass"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen(isOpen ? null : i),
					className: "flex w-full items-center justify-between gap-4 p-5 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "rotate-180 bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-5 pb-5 text-sm text-muted-foreground",
						children: f.a
					})
				}) })]
			}, f.q);
		})
	});
}
//#endregion
export { Support as component };
