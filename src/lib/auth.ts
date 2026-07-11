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

export function useRole(): Role | null {
  const [role, setR] = useState<Role | null>(null);
  useEffect(() => {
    setR(getRole());
    const onChange = () => setR(getRole());
    window.addEventListener("auth-change", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("auth-change", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);
  return role;
}
