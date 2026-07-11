import { useEffect, useState } from "react";

export type Role = "admin" | "client";
const KEY = "userRole";

export function getRole(): Role | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(KEY);
  return v === "admin" || v === "client" ? v : null;
}

export function setRole(role: Role) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, role);
  window.dispatchEvent(new Event("auth-change"));
}

export function clearRole() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("auth-change"));
}

export interface AuthState {
  role: Role | null;
  /**
   * True until the very first client-side read of localStorage has
   * completed. This app is server-rendered, so `window`/`localStorage`
   * don't exist on the server or on the first client render (to avoid a
   * hydration mismatch) — the real role can only be known once the
   * effect below runs. Route guards MUST check `isLoading` before
   * treating `role === null` as "not logged in", otherwise a logged-in
   * user gets bounced to /login for one frame on every navigation.
   */
  isLoading: boolean;
}

export function useRole(): AuthState {
  const [state, setState] = useState<AuthState>({ role: null, isLoading: true });
  useEffect(() => {
    const read = () => setState({ role: getRole(), isLoading: false });
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
