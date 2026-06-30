import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trophy, Users, IndianRupee, Edit } from "lucide-react";
import { PageHeader, Reveal, RippleButton, StatusPill } from "@/components/shell/ui-bits";
import { MOCK_MATCHES } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/tournaments")({
  head: () => ({ meta: [{ title: "Tournaments — Admin" }] }),
  component: AdminTournaments,
});

function AdminTournaments() {
  return (
    <div className="space-y-6">
      <PageHeader title="Tournament manager" subtitle={`${MOCK_MATCHES.length} active tournaments`}
        action={<RippleButton variant="primary" size="sm"><Plus className="h-4 w-4" /> Create tournament</RippleButton>} />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {MOCK_MATCHES.map((m, i) => (
          <Reveal key={m.id} delay={i * 0.05}>
            <div className="rounded-3xl glass p-5 shadow-elevated">
              <div className="flex items-start justify-between">
                <Trophy className="h-5 w-5 text-amber-400" />
                <StatusPill status="Approved" />
              </div>
              <h3 className="mt-3 text-xl font-bold">{m.name}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{m.date} · {m.time}</div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><Users className="h-3 w-3" /> Participants</div>
                  <div className="mt-1 font-mono text-lg font-bold tabular-nums">{m.joined}/{m.slots}</div>
                </div>
                <div className="rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><IndianRupee className="h-3 w-3" /> Prize</div>
                  <div className="mt-1 font-mono text-lg font-bold tabular-nums">₹{(m.prize / 1000).toFixed(0)}k</div>
                </div>
              </div>

              <div className="mt-3">
                <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${(m.joined / m.slots) * 100}%` }} />
                </div>
              </div>

              <button className="mt-5 inline-flex w-full items-center justify-center gap-1 rounded-full glass py-2 text-xs font-medium hover:bg-white/10">
                <Edit className="h-3 w-3" /> Manage
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
