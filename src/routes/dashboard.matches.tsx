import { createFileRoute } from "@tanstack/react-router";
import { Trophy, MapPin, Cloud, Navigation, Users, IndianRupee } from "lucide-react";
import { PageHeader, Reveal, RippleButton } from "@/components/shell/ui-bits";
import { MOCK_MATCHES } from "@/lib/mock-data";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard/matches")({
  head: () => ({ meta: [{ title: "Upcoming Matches — Game Onn" }] }),
  component: Matches,
});

function Matches() {
  return (
    <div className="space-y-6">
      <PageHeader title="Upcoming matches" subtitle="Tournaments, leagues and pickup games near you." />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {MOCK_MATCHES.map((m, i) => (
          <Reveal key={m.id} delay={i * 0.06}>
            <MatchCard m={m} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function MatchCard({ m }: { m: typeof MOCK_MATCHES[number] }) {
  const target = new Date(`${m.date}T${m.time}:00`).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const mi = Math.floor((diff % 3600000) / 60000);
  const pct = (m.joined / m.slots) * 100;

  return (
    <div className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-elevated">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="flex items-start justify-between">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary ring-1 ring-primary/20">
          {new Date(m.date).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })}
        </span>
        <Trophy className="h-5 w-5 text-amber-400" />
      </div>
      <h3 className="mt-4 text-xl font-bold leading-tight">{m.name}</h3>
      <div className="mt-1 text-xs text-muted-foreground">Kickoff {m.time}</div>

      <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
        {[{ v: d, l: "Days" }, { v: h, l: "Hours" }, { v: mi, l: "Min" }].map((c) => (
          <div key={c.l} className="text-center">
            <div className="font-mono text-xl font-bold tabular-nums text-primary">{c.v.toString().padStart(2, "0")}</div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{c.l}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
        <div className="flex items-center gap-1.5 text-muted-foreground"><Cloud className="h-3.5 w-3.5" /> 28°C clear</div>
        <div className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-3.5 w-3.5" /> Game Onn Arena</div>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
          <span><Users className="mr-1 inline h-3 w-3" /> {m.joined}/{m.slots} joined</span>
          <span className="flex items-baseline gap-0.5 text-foreground"><IndianRupee className="h-3 w-3" />{m.prize.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
          <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <RippleButton variant="ghost" size="sm"><Navigation className="h-3.5 w-3.5" /> Directions</RippleButton>
        <RippleButton variant="primary" size="sm">Join</RippleButton>
      </div>
    </div>
  );
}
