import { createFileRoute } from "@tanstack/react-router";
import { Download, IndianRupee } from "lucide-react";
import { PageHeader, StatusPill, Reveal, RippleButton } from "@/components/shell/ui-bits";
import { MOCK_PAYMENTS } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/payments")({
  head: () => ({ meta: [{ title: "Payment History — Game Onn" }] }),
  component: Payments,
});

function Payments() {
  const total = MOCK_PAYMENTS.filter((p) => p.status === "Paid").reduce((s, p) => s + p.amount, 0);

  return (
    <div className="space-y-6">
      <PageHeader title="Payment history" subtitle="All transactions, receipts and refunds." />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elevated">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Total spent on Game Onn</span>
          <div className="mt-2 flex items-baseline gap-1">
            <IndianRupee className="h-7 w-7 text-foreground" />
            <span className="font-display text-5xl font-bold tabular-nums text-gradient">{total.toLocaleString("en-IN")}</span>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">Across {MOCK_PAYMENTS.length} transactions</div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          {/* Desktop table */}
          <table className="hidden w-full text-sm md:table">
            <thead className="bg-white/[0.02] text-left">
              <tr className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
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
                  <td className="px-5 py-4 text-right">
                    <button className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"><Download className="h-3 w-3" /> Receipt</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Mobile cards */}
          <ul className="divide-y divide-white/5 md:hidden">
            {MOCK_PAYMENTS.map((p) => (
              <li key={p.id} className="grid grid-cols-[1fr_auto] gap-3 p-4">
                <div className="min-w-0">
                  <div className="truncate font-mono text-xs font-semibold">{p.id}</div>
                  <div className="text-xs text-muted-foreground">{p.bookingId} · {p.date}</div>
                  <div className="mt-2"><StatusPill status={p.status} /></div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-base font-bold tabular-nums">₹{p.amount.toLocaleString("en-IN")}</div>
                  <RippleButton variant="ghost" size="sm" className="mt-2"><Download className="h-3 w-3" /></RippleButton>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
