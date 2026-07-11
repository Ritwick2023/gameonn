import { createFileRoute, Link } from "@tanstack/react-router";
import {
  IndianRupee, Activity, AlertCircle, Calendar, ArrowUpRight,
  ClipboardList, Users, Trophy, Megaphone, Wallet, Image, Flame,
} from "lucide-react";
import { PageHeader, Reveal, StatusPill } from "@/components/shell/ui-bits";
import { ADMIN_STATS, MOCK_BOOKINGS } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Game Onn" }] }),
  component: AdminDashboard,
});

const QUICK_ACTIONS = [
  { to: "/admin/bookings", label: "Manage Bookings", desc: "Approve, cancel or block slots", icon: ClipboardList, tint: "primary" as const },
  { to: "/admin/calendar", label: "Slot Manager", desc: "Open the master calendar", icon: Calendar, tint: "accent" as const },
  { to: "/admin/customers", label: "Customers", desc: "Player directory & history", icon: Users, tint: "primary" as const },
  { to: "/admin/tournaments", label: "Tournaments", desc: "Create or manage events", icon: Trophy, tint: "accent" as const },
  { to: "/admin/announcements", label: "Announcements", desc: "Push banners & offers", icon: Megaphone, tint: "primary" as const },
  { to: "/admin/gallery", label: "Gallery", desc: "Upload & reorder media", icon: Image, tint: "accent" as const },
];

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Operations dashboard"
        subtitle={new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
      />

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Today's revenue" value={`₹${ADMIN_STATS.todayRevenue.toLocaleString("en-IN")}`} delta="+12% vs yesterday" icon={IndianRupee} tint="primary" />
        <Kpi label="Today's bookings" value={String(ADMIN_STATS.todayBookings)} delta="+3 vs yesterday" icon={Calendar} tint="accent" />
        <Kpi label="Occupancy" value={`${ADMIN_STATS.occupancy}%`} delta="Peak hours 7-9 PM" icon={Activity} tint="primary" />
        <Kpi label="Pending payments" value={String(ADMIN_STATS.pendingPayments)} delta="Needs review" icon={AlertCircle} tint="warn" />
      </div>

      {/* Quick Actions */}
      <Reveal>
        <div className="rounded-3xl glass p-6 shadow-elevated">
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Quick actions</span>
              <h3 className="mt-1 font-display text-xl font-semibold">Jump into a task</h3>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_ACTIONS.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group flex items-center gap-4 rounded-2xl bg-background/40 p-4 ring-1 ring-white/5 transition-all hover:-translate-y-0.5 hover:bg-background/60 hover:ring-primary/30"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ring-1 ${
                  a.tint === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"
                }`}>
                  <a.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold">{a.label}</div>
                  <div className="truncate text-xs text-muted-foreground">{a.desc}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Recent activity */}
      <Reveal>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
            <h3 className="font-display text-lg font-semibold">Recent activity</h3>
            <Link to="/admin/bookings" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
              View all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <ul className="divide-y divide-white/5">
            {MOCK_BOOKINGS.slice(0, 5).map((b) => (
              <li key={b.id} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 px-5 py-3.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/20">
                  <Flame className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{b.sport} · {b.court}</div>
                  <div className="text-xs text-muted-foreground"><span className="font-mono">{b.id}</span> · {b.date} {b.time}</div>
                </div>
                <span className="hidden font-mono text-sm font-bold tabular-nums sm:inline">
                  <IndianRupee className="mr-0.5 inline h-3 w-3" />{b.price}
                </span>
                <StatusPill status={b.status} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function Kpi({ label, value, delta, icon: Icon, tint }: { label: string; value: string; delta: string; icon: typeof IndianRupee; tint: "primary" | "accent" | "warn" }) {
  const tints = {
    primary: { grad: "from-primary/15 to-transparent", icon: "text-primary", ring: "ring-primary/20" },
    accent: { grad: "from-accent/15 to-transparent", icon: "text-accent", ring: "ring-accent/20" },
    warn: { grad: "from-amber-400/15 to-transparent", icon: "text-amber-400", ring: "ring-amber-400/20" },
  }[tint];

  // Wallet import kept for tree-shake friendliness; referenced here so linter doesn't complain
  void Wallet;

  return (
    <Reveal>
      <div className={`relative overflow-hidden rounded-3xl glass p-5 ring-1 ${tints.ring}`}>
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${tints.grad}`} />
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
          <Icon className={`h-4 w-4 ${tints.icon}`} />
        </div>
        <div className="mt-3 font-display text-3xl font-bold tabular-nums">{value}</div>
        <div className="mt-1 text-xs text-muted-foreground">{delta}</div>
      </div>
    </Reveal>
  );
}
