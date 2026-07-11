import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { useRole } from "@/lib/auth";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Game Onn" }] }),
  component: DashboardLayout,
});

function DashboardLayout() {
  const role = useRole();
  const navigate = useNavigate();
  useEffect(() => {
    if (role === null) navigate({ to: "/login", replace: true });
    else if (role === "admin") navigate({ to: "/admin", replace: true });
  }, [role, navigate]);

  if (role !== "client") {
    return <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">Redirecting…</div>;
  }
  return (
    <DashboardShell>
      <Outlet />
    </DashboardShell>
  );
}
