import { createFileRoute } from "@tanstack/react-router";
import { Search, Award, IndianRupee } from "lucide-react";
import { useState } from "react";
import { PageHeader, Reveal } from "@/components/shell/ui-bits";
import { MOCK_CUSTOMERS } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/customers")({
  head: () => ({ meta: [{ title: "Customers — Admin" }] }),
  component: AdminCustomers,
});

function AdminCustomers() {
  const [q, setQ] = useState("");
  const list = MOCK_CUSTOMERS.filter((c) => !q || c.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="space-y-6">
      <PageHeader title="Customers" subtitle={`${MOCK_CUSTOMERS.length} total players · ${MOCK_CUSTOMERS.filter(c => c.frequent).length} frequent`} />

      <div className="flex items-center gap-2 rounded-full glass px-4 py-2 sm:max-w-md">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search customers..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.03}>
            <div className="group relative rounded-3xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent font-display text-lg font-bold text-primary-foreground">
                  {c.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold">{c.name}</h3>
                  <div className="truncate font-mono text-xs text-muted-foreground">{c.phone}</div>
                  {c.frequent && (
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 ring-1 ring-amber-400/30">
                      <Award className="h-3 w-3 text-amber-400" />
                      <span className="font-mono text-[9px] uppercase tracking-wider text-amber-400">Frequent</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Bookings</div>
                  <div className="font-mono text-lg font-bold tabular-nums">{c.bookings}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Total spent</div>
                  <div className="flex items-baseline gap-0.5 font-mono text-lg font-bold tabular-nums"><IndianRupee className="h-3.5 w-3.5" />{c.spent.toLocaleString("en-IN")}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
