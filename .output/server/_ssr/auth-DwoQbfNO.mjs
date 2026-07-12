import { a as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DwoQbfNO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "userRole";
function getRole() {
	if (typeof window === "undefined") return null;
	const v = window.localStorage.getItem(KEY);
	return v === "admin" || v === "client" ? v : null;
}
function setRole(role) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(KEY, role);
	window.dispatchEvent(new Event("auth-change"));
}
function clearRole() {
	if (typeof window === "undefined") return;
	window.localStorage.removeItem(KEY);
	window.dispatchEvent(new Event("auth-change"));
}
function useRole() {
	const [state, setState] = (0, import_react.useState)({
		role: null,
		isLoading: true
	});
	(0, import_react.useEffect)(() => {
		const read = () => setState({
			role: getRole(),
			isLoading: false
		});
		read();
		window.addEventListener("auth-change", read);
		window.addEventListener("storage", read);
		return () => {
			window.removeEventListener("auth-change", read);
			window.removeEventListener("storage", read);
		};
	}, []);
	return state;
}
//#endregion
export { setRole as n, useRole as r, clearRole as t };
