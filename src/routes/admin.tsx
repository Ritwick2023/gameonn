import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { AdminShell } from "@/components/shell/admin-shell";
import { useRole } from "@/lib/auth";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Game Onn" }] }),
  component: AdminLayout,
});

function AdminLayout() {
  const { role, isLoading } = useRole();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoading) return; // don't redirect until we've actually read localStorage
    if (role === null) navigate({ to: "/login", replace: true });
    else if (role === "client") navigate({ to: "/dashboard", replace: true });
  }, [role, isLoading, navigate]);

  if (isLoading) {
    return <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">Loading…</div>;
  }
  if (role !== "admin") {
    return <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">Redirecting…</div>;
  }
  return (
    <AdminShell>
      <Outlet />
    </AdminShell>
  );
}
