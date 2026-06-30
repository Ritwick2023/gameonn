import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AdminShell } from "@/components/shell/admin-shell";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Game Onn" }] }),
  component: () => (
    <AdminShell>
      <Outlet />
    </AdminShell>
  ),
});
