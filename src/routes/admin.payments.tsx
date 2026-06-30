import { createFileRoute } from "@tanstack/react-router";
import { Download, IndianRupee } from "lucide-react";
import { PageHeader, StatusPill, Reveal, RippleButton } from "@/components/shell/ui-bits";
import { MOCK_PAYMENTS } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/payments")({
  head: () => ({ meta: [{ title: "Payments — Admin" }] }),
  component: AdminPayments,
});

function AdminPayments() {
  const paid = MOCK_PAYMENTS.filter(p => p.status === "Paid").reduce((s, p) => s + p.amount, 0);
  const pending = 4500;
  const refunded = MOCK_PAYMENTS.filter(p => p.status === "Refunded").reduce((s, p) => s + p.amount, 0);

  return (
    <div className="space-y-6">
      <PageHeader title="Payments" subtitle="Track every rupee in and out."
        action={<RippleButton variant="ghost" size="sm"><Download className="h-4 w-4" /> Export</RippleButton>} />

      <div className="grid gap-4 sm:grid-cols-3">
        <Tile label="Paid" amount={paid} tint="primary" />
        <Tile label="Pending" amount={pending} tint="warn" />
        <Tile label="Refunded" amount={refunded} tint="muted" />
      </div>

      <Reveal>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          <table className="hidden w-full text-sm md:table">
            <thead className="bg-white/[0.02] text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Transaction</th>
                <th className="px-5 py-3">Booking</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Method</th>
                <th className="px-5 py-3 text-right">Amount</th>
                <th className="px-5 py-3 text-right">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {MOCK_PAYMENTS.map((p) => (
                <tr key={p.id} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-4 font-mono text-xs font-semibold">{p.id}</td>
                  <td className="px-5 py-4 font-mono text-xs text-muted-foreground">{p.bookingId}</td>
                  <td className="px-5 py-4 text-muted-foreground">{p.date}</td>
                  <td className="px-5 py-4">{p.method}</td>
                  <td className="px-5 py-4 text-right font-mono font-bold tabular-nums">₹{p.amount.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-4 text-right"><StatusPill status={p.status} /></td>
                  <td className="px-5 py-4 text-right"><button className="text-xs font-medium text-accent hover:underline">Invoice</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="divide-y divide-white/5 md:hidden">
            {MOCK_PAYMENTS.map((p) => (
              <li key={p.id} className="grid grid-cols-[1fr_auto] gap-3 p-4">
                <div className="min-w-0">
                  <div className="font-mono text-xs font-semibold">{p.id}</div>
                  <div className="text-xs text-muted-foreground">{p.bookingId} · {p.date}</div>
                  <div className="mt-2"><StatusPill status={p.status} /></div>
                </div>
                <div className="text-right font-mono text-base font-bold tabular-nums">₹{p.amount.toLocaleString("en-IN")}</div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function Tile({ label, amount, tint }: { label: string; amount: number; tint: "primary" | "warn" | "muted" }) {
  const colors = {
    primary: "from-primary/15 ring-primary/20 text-primary",
    warn: "from-amber-400/15 ring-amber-400/20 text-amber-400",
    muted: "from-muted/40 ring-white/10 text-muted-foreground",
  };
  return (
    <Reveal>
      <div className={`relative overflow-hidden rounded-3xl glass p-5 ring-1 ${colors[tint].split(" ")[1]}`}>
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${colors[tint].split(" ")[0]} to-transparent`} />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
        <div className="mt-2 flex items-baseline gap-0.5 font-display text-3xl font-bold tabular-nums">
          <IndianRupee className="h-5 w-5" />{amount.toLocaleString("en-IN")}
        </div>
      </div>
    </Reveal>
  );
}
