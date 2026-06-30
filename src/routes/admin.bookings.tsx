import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Filter, Download, MoreVertical, Check, X, RefreshCw, Ban } from "lucide-react";
import { PageHeader, RippleButton, StatusPill, Reveal } from "@/components/shell/ui-bits";
import { MOCK_BOOKINGS } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/bookings")({
  head: () => ({ meta: [{ title: "Bookings — Admin" }] }),
  component: AdminBookings,
});

function AdminBookings() {
  const [q, setQ] = useState("");
  const list = MOCK_BOOKINGS.filter((b) => !q || `${b.id} ${b.sport}`.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-6">
      <PageHeader title="Bookings" subtitle={`${MOCK_BOOKINGS.length} total · ${MOCK_BOOKINGS.filter(b => b.status === "upcoming").length} upcoming`}
        action={<RippleButton variant="ghost" size="sm"><Download className="h-4 w-4" /> Export</RippleButton>} />

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-full glass px-4 py-2 sm:max-w-md">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search bookings..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60" />
        </div>
        <button className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"><Filter className="h-3.5 w-3.5" /> Filter</button>
      </div>

      <Reveal>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          <table className="hidden w-full text-sm md:table">
            <thead className="bg-white/[0.02] text-left">
              <tr className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">Booking</th>
                <th className="px-5 py-3">Sport / Court</th>
                <th className="px-5 py-3">When</th>
                <th className="px-5 py-3">Payment</th>
                <th className="px-5 py-3 text-right">Amount</th>
                <th className="px-5 py-3 text-right">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {list.map((b) => (
                <tr key={b.id} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-4 font-mono text-xs">{b.id}</td>
                  <td className="px-5 py-4"><div className="font-semibold">{b.sport}</div><div className="text-xs text-muted-foreground">{b.court}</div></td>
                  <td className="px-5 py-4 text-muted-foreground">{b.date} · {b.time}</td>
                  <td className="px-5 py-4"><StatusPill status={b.payment} /></td>
                  <td className="px-5 py-4 text-right font-mono font-bold tabular-nums">₹{b.price.toLocaleString("en-IN")}</td>
                  <td className="px-5 py-4 text-right"><StatusPill status={b.status} /></td>
                  <td className="px-5 py-4 text-right">
                    <div className="inline-flex gap-1">
                      <IconBtn label="Approve" icon={Check} />
                      <IconBtn label="Reschedule" icon={RefreshCw} />
                      <IconBtn label="Block" icon={Ban} />
                      <IconBtn label="Cancel" icon={X} danger />
                      <IconBtn label="More" icon={MoreVertical} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ul className="divide-y divide-white/5 md:hidden">
            {list.map((b) => (
              <li key={b.id} className="space-y-3 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-xs text-muted-foreground">{b.id}</div>
                    <div className="text-base font-semibold">{b.sport} · {b.court}</div>
                    <div className="text-xs text-muted-foreground">{b.date} · {b.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold">₹{b.price}</div>
                    <div className="mt-1"><StatusPill status={b.status} /></div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function IconBtn({ icon: Icon, label, danger }: { icon: typeof Check; label: string; danger?: boolean }) {
  return (
    <button title={label} className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${danger ? "text-destructive hover:bg-destructive/10" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`}>
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}
