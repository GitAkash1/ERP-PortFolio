import "../_runtime.mjs";
import { HeadContent, Link, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { ArrowLeft, Server } from "../_libs/lucide-react.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-B6xt79xb.css";
var image_default = "/assets/image-DsES8nxt.png";
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-vh-100 d-flex align-items-center justify-content-center text-center p-4 position-relative overflow-hidden",
		style: {
			background: "#030712",
			color: "#f8fafc"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-orange",
				style: {
					top: "20%",
					left: "20%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient-glow glow-blue",
				style: {
					bottom: "20%",
					right: "20%"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card p-5 mx-auto position-relative z-index-1",
				style: {
					maxWidth: "540px",
					borderRadius: "24px",
					border: "1px solid rgba(255, 255, 255, 0.1)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "erp-section-badge mb-4 mx-auto d-inline-flex align-items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, {
							size: 16,
							className: "text-warning"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-warning fw-bold small text-uppercase",
							style: { letterSpacing: "0.08em" },
							children: "ConstructionERP 404"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-4 fw-bold mb-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "Page Not Found"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-slate-300 mb-4",
						style: {
							fontSize: "1.05rem",
							lineHeight: "1.6"
						},
						children: "The module or resource you requested could not be located on the ERP platform."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "erp-cta-primary text-decoration-none d-inline-flex align-items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Return to ERP Home" })]
					})
				]
			})
		]
	});
}
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ConstructionERP — Construction Management ERP Platform" },
			{
				name: "description",
				content: "ConstructionERP is a B2B platform connecting project management, BOQ estimation, procurement, inventory, subcontractor lifecycle, finance and cost reports into one connected platform."
			},
			{
				name: "keywords",
				content: "construction erp, project management, bill of quantities, procurement, material requests, purchase orders, subcontractor bills, construction finance, construction reports"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: image_default
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var $$splitComponentImporter = () => import("./routes-DX3FqewU.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { image_default, router_exports };
