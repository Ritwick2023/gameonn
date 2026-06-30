import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DashboardShell } from "@/components/shell/dashboard-shell";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Game Onn" }] }),
  component: () => (
    <DashboardShell>
      <Outlet />
    </DashboardShell>
  ),
});
