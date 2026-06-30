import { createFileRoute } from "@tanstack/react-router";
import { IndianRupee, Activity, AlertCircle, TrendingUp, Flame, Calendar, ArrowUpRight } from "lucide-react";
import { PageHeader, Reveal, StatusPill } from "@/components/shell/ui-bits";
import { ADMIN_STATS, HEATMAP, MOCK_BOOKINGS } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin Dashboard — Game Onn" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Operations dashboard" subtitle={new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} />

      {/* KPI cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Today's revenue" value={`₹${ADMIN_STATS.todayRevenue.toLocaleString("en-IN")}`} delta="+12%" icon={IndianRupee} tint="primary" />
        <Kpi label="Today's bookings" value={String(ADMIN_STATS.todayBookings)} delta="+3 vs yest." icon={Calendar} tint="accent" />
        <Kpi label="Occupancy" value={`${ADMIN_STATS.occupancy}%`} delta="Peak hours" icon={Activity} tint="primary" />
        <Kpi label="Pending payments" value={String(ADMIN_STATS.pendingPayments)} delta="Needs review" icon={AlertCircle} tint="warn" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Revenue chart card */}
        <Reveal>
          <div className="rounded-3xl glass p-6 shadow-elevated">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Monthly revenue</span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold tabular-nums">₹{ADMIN_STATS.monthlyRevenue.toLocaleString("en-IN")}</span>
                  <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary"><TrendingUp className="h-3 w-3" /> +18%</span>
                </div>
              </div>
              <div className="hidden gap-1 sm:flex">
                {["1W", "1M", "3M", "1Y"].map((t, i) => (
                  <button key={t} className={`rounded-full px-3 py-1 text-xs font-medium ${i === 1 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-white/5"}`}>{t}</button>
                ))}
              </div>
            </div>
            <MiniChart />
          </div>
        </Reveal>

        {/* Peak hours */}
        <Reveal delay={0.05}>
          <div className="rounded-3xl glass p-6 shadow-elevated">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Peak hours</span>
            <h3 className="mt-2 font-display text-xl font-semibold">7 PM – 9 PM</h3>
            <div className="mt-5 space-y-2">
              {[
                { l: "5 PM", v: 60 },
                { l: "6 PM", v: 78 },
                { l: "7 PM", v: 95 },
                { l: "8 PM", v: 92 },
                { l: "9 PM", v: 84 },
                { l: "10 PM", v: 55 },
              ].map((b) => (
                <div key={b.l} className="grid grid-cols-[40px_1fr_auto] items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{b.l}</span>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${b.v}%` }} />
                  </div>
                  <span className="w-9 text-right font-mono text-xs tabular-nums">{b.v}%</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Heatmap + Popular sport */}
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="rounded-3xl glass p-6 shadow-elevated">
            <div className="flex items-end justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Booking heatmap</span>
                <h3 className="mt-1 font-display text-xl font-semibold">Last 7 days</h3>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                Low <div className="flex gap-0.5">{[0.2, 0.4, 0.6, 0.8, 1].map((o) => <div key={o} className="h-3 w-3 rounded-sm" style={{ background: `oklch(0.74 0.19 148 / ${o})` }} />)}</div> High
              </div>
            </div>
            <div className="mt-5 overflow-x-auto">
              <div className="grid min-w-[600px] grid-cols-[40px_repeat(17,minmax(0,1fr))] gap-1">
                <div />
                {Array.from({ length: 17 }, (_, h) => (
                  <div key={h} className="text-center font-mono text-[9px] text-muted-foreground">{h + 6}</div>
                ))}
                {HEATMAP.map((row, d) => (
                  <Row key={d} day={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][d]} cells={row} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="rounded-3xl glass p-6 shadow-elevated">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Popular sport</span>
            <div className="mt-3 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <Flame className="h-7 w-7" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold">Football</div>
                <div className="text-xs text-muted-foreground">62% of this week's bookings</div>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {[
                { s: "Football", v: 62 },
                { s: "Cricket", v: 21 },
                { s: "Box Cricket", v: 12 },
                { s: "Pickleball", v: 5 },
              ].map((row) => (
                <div key={row.s}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{row.s}</span>
                    <span className="font-mono font-semibold tabular-nums">{row.v}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-primary/80" style={{ width: `${row.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Recent activity */}
      <Reveal>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
            <h3 className="font-display text-lg font-semibold">Recent activity</h3>
            <button className="inline-flex items-center gap-1 text-xs text-accent">View all <ArrowUpRight className="h-3 w-3" /></button>
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
                <span className="hidden font-mono text-sm font-bold tabular-nums sm:inline">₹{b.price}</span>
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
    primary: "from-primary/15 to-transparent text-primary ring-primary/20",
    accent: "from-accent/15 to-transparent text-accent ring-accent/20",
    warn: "from-amber-400/15 to-transparent text-amber-400 ring-amber-400/20",
  };
  return (
    <Reveal>
      <div className={`relative overflow-hidden rounded-3xl glass p-5 ring-1 ${tints[tint].split(" ").pop()}`}>
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${tints[tint]}`} />
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
          <Icon className="h-4 w-4" />
        </div>
        <div className="mt-3 font-display text-3xl font-bold tabular-nums">{value}</div>
        <div className="mt-1 text-xs text-muted-foreground">{delta}</div>
      </div>
    </Reveal>
  );
}

function MiniChart() {
  const points = [40, 55, 48, 68, 60, 78, 72, 88, 82, 95, 90, 100];
  const max = 100;
  const path = points.map((p, i) => `${(i / (points.length - 1)) * 100},${100 - (p / max) * 90}`).join(" ");
  return (
    <div className="mt-6">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-40 w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.74 0.19 148)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.74 0.19 148)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={path} fill="none" stroke="oklch(0.74 0.19 148)" strokeWidth="1.2" />
        <polygon points={`0,100 ${path} 100,100`} fill="url(#g)" />
      </svg>
    </div>
  );
}

function Row({ day, cells }: { day: string; cells: number[] }) {
  return (
    <>
      <div className="self-center font-mono text-[10px] text-muted-foreground">{day}</div>
      {cells.map((v, i) => (
        <div key={i} className="aspect-square rounded-sm transition-transform hover:scale-110" style={{ background: `oklch(0.74 0.19 148 / ${v})` }} title={`${day} ${i + 6}:00 — ${Math.round(v * 100)}% booked`} />
      ))}
    </>
  );
}
