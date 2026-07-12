import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as PageHeader, r as Reveal } from "./ui-bits-Dg99qRjR.mjs";
import { E as Search, Et as Award, J as IndianRupee } from "../_libs/lucide-react.mjs";
import { a as MOCK_CUSTOMERS } from "./mock-data-Bn1rr24g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.customers-CCPqI1R8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminCustomers() {
	const [q, setQ] = (0, import_react.useState)("");
	const list = MOCK_CUSTOMERS.filter((c) => !q || c.name.toLowerCase().includes(q.toLowerCase()));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Customers",
				subtitle: `${MOCK_CUSTOMERS.length} total players · ${MOCK_CUSTOMERS.filter((c) => c.frequent).length} frequent`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-full glass px-4 py-2 sm:max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search customers...",
					className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .03,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative rounded-3xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-elevated",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent font-display text-lg font-bold text-primary-foreground",
								children: c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "truncate font-semibold",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate font-mono text-xs text-muted-foreground",
										children: c.phone
									}),
									c.frequent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 ring-1 ring-amber-400/30",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3 w-3 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[9px] uppercase tracking-wider text-amber-400",
											children: "Frequent"
										})]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "Bookings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-lg font-bold tabular-nums",
								children: c.bookings
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								children: "Total spent"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-0.5 font-mono text-lg font-bold tabular-nums",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-3.5 w-3.5" }), c.spent.toLocaleString("en-IN")]
							})] })]
						})]
					})
				}, c.id))
			})
		]
	});
}
//#endregion
export { AdminCustomers as component };
