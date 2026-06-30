import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, IndianRupee } from "lucide-react";
import { PageHeader, Reveal } from "@/components/shell/ui-bits";

export const Route = createFileRoute("/admin/revenue")({
  head: () => ({ meta: [{ title: "Revenue — Admin" }] }),
  component: Revenue,
});

const MONTHS = [
  { m: "Jan", v: 420 }, { m: "Feb", v: 380 }, { m: "Mar", v: 510 }, { m: "Apr", v: 470 },
  { m: "May", v: 580 }, { m: "Jun", v: 642 }, { m: "Jul", v: 690 }, { m: "Aug", v: 720 },
  { m: "Sep", v: 660 }, { m: "Oct", v: 750 }, { m: "Nov", v: 820 }, { m: "Dec", v: 880 },
];

function Revenue() {
  const max = Math.max(...MONTHS.map(m => m.v));
  const ytd = MONTHS.reduce((s, m) => s + m.v, 0);

  return (
    <div className="space-y-6">
      <PageHeader title="Revenue" subtitle="Year-to-date performance across all sports." />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card label="YTD revenue" value={`₹${(ytd / 100).toFixed(1)}L`} delta="+24% YoY" tint="primary" />
        <Card label="Avg per booking" value="₹1,540" delta="+₹120" tint="accent" />
        <Card label="Best month" value="Dec" delta="₹8.8L" tint="primary" />
      </div>

      <Reveal>
        <div className="rounded-3xl glass p-6 shadow-elevated">
          <h3 className="font-display text-xl font-semibold">Monthly revenue (₹ thousands)</h3>
          <div className="mt-8 flex h-64 items-end gap-2">
            {MONTHS.map((m) => (
              <div key={m.m} className="group flex flex-1 flex-col items-center gap-2">
                <div className="font-mono text-[10px] tabular-nums text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">₹{m.v}k</div>
                <div className="w-full rounded-t-xl bg-gradient-to-t from-primary/30 to-primary transition-all hover:from-primary hover:to-primary-glow" style={{ height: `${(m.v / max) * 100}%` }} />
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.m}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function Card({ label, value, delta, tint }: { label: string; value: string; delta: string; tint: "primary" | "accent" }) {
  return (
    <Reveal>
      <div className="rounded-3xl glass p-5">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
          <IndianRupee className={`h-4 w-4 ${tint === "primary" ? "text-primary" : "text-accent"}`} />
        </div>
        <div className="mt-3 font-display text-3xl font-bold tabular-nums">{value}</div>
        <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground"><TrendingUp className="h-3 w-3 text-primary" /> {delta}</div>
      </div>
    </Reveal>
  );
}
