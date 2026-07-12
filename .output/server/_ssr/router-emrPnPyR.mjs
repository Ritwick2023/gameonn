import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$27 } from "./admin.coupons_._code-QE9MyW29.mjs";
import { t as Route$28 } from "./dashboard.checkout-B8Di8UIK.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-emrPnPyR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-ZR-QNeR3.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$26 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Game Onn — Wardha's Premier Turf & Sports Arena" },
			{
				name: "description",
				content: "Book premium football, cricket and multi-sport turf slots in Wardha. Floodlights, live availability, instant booking. Play. Book. Repeat."
			},
			{
				name: "theme-color",
				content: "#0A0A0A"
			},
			{
				property: "og:title",
				content: "Game Onn — Wardha's Premier Turf & Sports Arena"
			},
			{
				property: "og:description",
				content: "Book premium football, cricket and multi-sport turf slots in Wardha. Floodlights, live availability, instant booking. Play. Book. Repeat."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Game Onn — Wardha's Premier Turf & Sports Arena"
			},
			{
				name: "twitter:description",
				content: "Book premium football, cricket and multi-sport turf slots in Wardha. Floodlights, live availability, instant booking. Play. Book. Repeat."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/283f3912-4856-4da5-b86a-b1185d732d95/id-preview-cb8abe13--068e49d2-5962-4228-ac66-86a3179882dc.lovable.app-1782833699116.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/283f3912-4856-4da5-b86a-b1185d732d95/id-preview-cb8abe13--068e49d2-5962-4228-ac66-86a3179882dc.lovable.app-1782833699116.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "bg-background text-foreground antialiased",
			children: [
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
					theme: "dark",
					position: "top-center",
					richColors: true,
					closeButton: true,
					toastOptions: { className: "!bg-surface !border-white/10 !text-foreground" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$26.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$25 = () => import("./login-Dcjzu1HW.mjs");
var Route$25 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$25, "component")
});
var $$splitComponentImporter$24 = () => import("./dashboard-DhAy96pP.mjs");
var Route$24 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$24, "component")
});
var $$splitComponentImporter$23 = () => import("./complete-profile-dgKGYfUO.mjs");
var Route$23 = createFileRoute("/complete-profile")({
	head: () => ({ meta: [{ title: "Complete Profile — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$23, "component")
});
var $$splitComponentImporter$22 = () => import("./admin-C9IPsvWO.mjs");
var Route$22 = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$22, "component")
});
var $$splitComponentImporter$21 = () => import("./routes-DxssFJsN.mjs");
var Route$21 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Game Onn — Wardha's Premier Turf & Sports Arena" }, {
		name: "description",
		content: "Book premium football, cricket and multi-sport turf slots in Wardha. Floodlights, live availability, instant booking. Play. Book. Repeat."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./dashboard.index-B_YWKv2g.mjs");
var Route$20 = createFileRoute("/dashboard/")({
	head: () => ({ meta: [{ title: "Dashboard — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./admin.index-CSRR-nC4.mjs");
var Route$19 = createFileRoute("/admin/")({
	head: () => ({ meta: [{ title: "Admin Dashboard — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./dashboard.support-B49DixSg.mjs");
var Route$18 = createFileRoute("/dashboard/support")({
	head: () => ({ meta: [{ title: "Support — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./dashboard.profile-Lg2V32su.mjs");
var Route$17 = createFileRoute("/dashboard/profile")({
	head: () => ({ meta: [{ title: "Profile — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./dashboard.payments-BMkbRVcE.mjs");
var Route$16 = createFileRoute("/dashboard/payments")({
	head: () => ({ meta: [{ title: "Payment History — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./dashboard.notifications-6pb7EfJF.mjs");
var Route$15 = createFileRoute("/dashboard/notifications")({
	head: () => ({ meta: [{ title: "Notifications — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./dashboard.matches-DsyOXPzw.mjs");
var Route$14 = createFileRoute("/dashboard/matches")({
	head: () => ({ meta: [{ title: "Upcoming Matches — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./dashboard.bookings-DPqUIOhR.mjs");
var Route$13 = createFileRoute("/dashboard/bookings")({
	head: () => ({ meta: [{ title: "My Bookings — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./dashboard.book-Cxty2ajq.mjs");
var Route$12 = createFileRoute("/dashboard/book")({
	head: () => ({ meta: [{ title: "Book a Slot — Game Onn" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./admin.tournaments-C84wCOX7.mjs");
var Route$11 = createFileRoute("/admin/tournaments")({
	head: () => ({ meta: [{ title: "Tournaments — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./admin.settings-DYbBl5tj.mjs");
var Route$10 = createFileRoute("/admin/settings")({
	head: () => ({ meta: [{ title: "Settings — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./admin.reviews-BHdniTYZ.mjs");
var Route$9 = createFileRoute("/admin/reviews")({
	head: () => ({ meta: [{ title: "Reviews — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./admin.revenue-Mocch14t.mjs");
var Route$8 = createFileRoute("/admin/revenue")({
	head: () => ({ meta: [{ title: "Revenue — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./admin.pricing-NE2oKad2.mjs");
var Route$7 = createFileRoute("/admin/pricing")({
	head: () => ({ meta: [{ title: "Pricing — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./admin.payments-Dlrtaz05.mjs");
var Route$6 = createFileRoute("/admin/payments")({
	head: () => ({ meta: [{ title: "Payments — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./admin.gallery-DXvQ0o7k.mjs");
var Route$5 = createFileRoute("/admin/gallery")({
	head: () => ({ meta: [{ title: "Gallery — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./admin.customers-CCPqI1R8.mjs");
var Route$4 = createFileRoute("/admin/customers")({
	head: () => ({ meta: [{ title: "Customers — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./admin.coupons-TA2OnX5c.mjs");
var Route$3 = createFileRoute("/admin/coupons")({
	head: () => ({ meta: [{ title: "Coupons — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./admin.calendar-Cf8YowHz.mjs");
var Route$2 = createFileRoute("/admin/calendar")({
	head: () => ({ meta: [{ title: "Calendar — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./admin.bookings-BxXNYFri.mjs");
var Route$1 = createFileRoute("/admin/bookings")({
	head: () => ({ meta: [{ title: "Bookings — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./admin.announcements-C7dqvrHU.mjs");
var Route = createFileRoute("/admin/announcements")({
	head: () => ({ meta: [{ title: "Announcements — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var LoginRoute = Route$25.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$26
});
var DashboardRoute = Route$24.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$26
});
var CompleteProfileRoute = Route$23.update({
	id: "/complete-profile",
	path: "/complete-profile",
	getParentRoute: () => Route$26
});
var AdminRoute = Route$22.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$26
});
var IndexRoute = Route$21.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$26
});
var DashboardIndexRoute = Route$20.update({
	id: "/",
	path: "/",
	getParentRoute: () => DashboardRoute
});
var AdminIndexRoute = Route$19.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var DashboardSupportRoute = Route$18.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => DashboardRoute
});
var DashboardProfileRoute = Route$17.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => DashboardRoute
});
var DashboardPaymentsRoute = Route$16.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => DashboardRoute
});
var DashboardNotificationsRoute = Route$15.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => DashboardRoute
});
var DashboardMatchesRoute = Route$14.update({
	id: "/matches",
	path: "/matches",
	getParentRoute: () => DashboardRoute
});
var DashboardCheckoutRoute = Route$28.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => DashboardRoute
});
var DashboardBookingsRoute = Route$13.update({
	id: "/bookings",
	path: "/bookings",
	getParentRoute: () => DashboardRoute
});
var DashboardBookRoute = Route$12.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => DashboardRoute
});
var AdminTournamentsRoute = Route$11.update({
	id: "/tournaments",
	path: "/tournaments",
	getParentRoute: () => AdminRoute
});
var AdminSettingsRoute = Route$10.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRoute
});
var AdminReviewsRoute = Route$9.update({
	id: "/reviews",
	path: "/reviews",
	getParentRoute: () => AdminRoute
});
var AdminRevenueRoute = Route$8.update({
	id: "/revenue",
	path: "/revenue",
	getParentRoute: () => AdminRoute
});
var AdminPricingRoute = Route$7.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => AdminRoute
});
var AdminPaymentsRoute = Route$6.update({
	id: "/payments",
	path: "/payments",
	getParentRoute: () => AdminRoute
});
var AdminGalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => AdminRoute
});
var AdminCustomersRoute = Route$4.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => AdminRoute
});
var AdminCouponsRoute = Route$3.update({
	id: "/coupons",
	path: "/coupons",
	getParentRoute: () => AdminRoute
});
var AdminCalendarRoute = Route$2.update({
	id: "/calendar",
	path: "/calendar",
	getParentRoute: () => AdminRoute
});
var AdminBookingsRoute = Route$1.update({
	id: "/bookings",
	path: "/bookings",
	getParentRoute: () => AdminRoute
});
var AdminRouteChildren = {
	AdminAnnouncementsRoute: Route.update({
		id: "/announcements",
		path: "/announcements",
		getParentRoute: () => AdminRoute
	}),
	AdminBookingsRoute,
	AdminCalendarRoute,
	AdminCouponsRoute,
	AdminCustomersRoute,
	AdminGalleryRoute,
	AdminPaymentsRoute,
	AdminPricingRoute,
	AdminRevenueRoute,
	AdminReviewsRoute,
	AdminSettingsRoute,
	AdminTournamentsRoute,
	AdminIndexRoute,
	AdminCouponsCodeRoute: Route$27.update({
		id: "/coupons_/$code",
		path: "/coupons/$code",
		getParentRoute: () => AdminRoute
	})
};
var AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
var DashboardRouteChildren = {
	DashboardBookRoute,
	DashboardBookingsRoute,
	DashboardCheckoutRoute,
	DashboardMatchesRoute,
	DashboardNotificationsRoute,
	DashboardPaymentsRoute,
	DashboardProfileRoute,
	DashboardSupportRoute,
	DashboardIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRoute: AdminRouteWithChildren,
	CompleteProfileRoute,
	DashboardRoute: DashboardRoute._addFileChildren(DashboardRouteChildren),
	LoginRoute
};
var routeTree = Route$26._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
