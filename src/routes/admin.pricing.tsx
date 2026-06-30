import { createFileRoute } from "@tanstack/react-router";
import { Edit, IndianRupee } from "lucide-react";
import { PageHeader, Reveal, RippleButton } from "@/components/shell/ui-bits";

export const Route = createFileRoute("/admin/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Admin" }] }),
  component: PricingAdmin,
});

const TIERS = [
  { slot: "Morning", time: "6 AM – 12 PM", football: 800, cricket: 1200, box: 1000, pickle: 600 },
  { slot: "Afternoon", time: "12 PM – 5 PM", football: 1000, cricket: 1500, box: 1200, pickle: 700 },
  { slot: "Evening", time: "5 PM – 10 PM", football: 1500, cricket: 1800, box: 1500, pickle: 800 },
  { slot: "Weekend", time: "Sat-Sun (all)", football: 1800, cricket: 2200, box: 1800, pickle: 1000 },
  { slot: "Tournament", time: "Custom", football: 2500, cricket: 3000, box: 2500, pickle: 1500 },
  { slot: "Holiday", time: "Public holidays", football: 2000, cricket: 2400, box: 2000, pickle: 1100 },
];

function PricingAdmin() {
  return (
    <div className="space-y-6">
      <PageHeader title="Pricing" subtitle="Manage slot rates per sport. Updates apply to new bookings."
        action={<RippleButton variant="primary" size="sm">+ Add tier</RippleButton>} />

      <Reveal>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          <table className="w-full text-sm">
            <thead className="bg-white/[0.02] text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-5 py-3">Tier</th>
                <th className="px-5 py-3">Window</th>
                <th className="px-5 py-3 text-right">Football</th>
                <th className="px-5 py-3 text-right">Cricket</th>
                <th className="px-5 py-3 text-right">Box Cricket</th>
                <th className="px-5 py-3 text-right">Pickleball</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {TIERS.map((t) => (
                <tr key={t.slot} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-4 font-semibold">{t.slot}</td>
                  <td className="px-5 py-4 text-xs text-muted-foreground">{t.time}</td>
                  <Money v={t.football} />
                  <Money v={t.cricket} />
                  <Money v={t.box} />
                  <Money v={t.pickle} />
                  <td className="px-5 py-4 text-right">
                    <button className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"><Edit className="h-3 w-3" /> Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  );
}

function Money({ v }: { v: number }) {
  return (
    <td className="px-5 py-4 text-right">
      <span className="inline-flex items-baseline gap-0.5 font-mono font-semibold tabular-nums"><IndianRupee className="h-3 w-3 text-muted-foreground" />{v}</span>
    </td>
  );
}
