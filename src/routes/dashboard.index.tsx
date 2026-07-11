import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Cloud, Calendar, Clock, IndianRupee, ArrowRight, Sparkles, Flame,
  TrendingUp, Activity, Sun,
} from "lucide-react";
import { RippleButton, StatusPill, Reveal } from "@/components/shell/ui-bits";
import { MOCK_BOOKINGS } from "@/lib/mock-data";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({ meta: [{ title: "Dashboard — Game Onn" }] }),
  component: DashboardHome,
});

function DashboardHome() {
  const hour = new Date().getHours();
  const greet = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
  const upcoming = MOCK_BOOKINGS.find((b) => b.status === "upcoming")!;

  return (
    <div className="space-y-6">
      {/* Greeting + hero card */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elevated sm:p-8">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Game day vibes</span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
                {greet}, Aarav.<br />
                <span className="text-gradient">Ready for kickoff?</span>
              </h1>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                You have one slot lined up. Pitch is dry. Floodlights are tested. Let's play.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/dashboard/book"><RippleButton variant="primary"><Flame className="h-4 w-4" /> Book again</RippleButton></Link>
                <Link to="/dashboard/matches"><RippleButton variant="ghost">Browse tournaments</RippleButton></Link>
              </div>
            </div>
            <UpcomingCard b={upcoming} />
          </div>
        </div>
      </Reveal>

      {/* Stats + weather */}
      <div className="grid gap-4 lg:grid-cols-4">
        <Stat title="Total bookings" value="28" delta="+4 this month" icon={Calendar} />
        <Stat title="Hours played" value="36" delta="+6 hrs" icon={Activity} />
        <Stat title="Total spent" value="₹38.4k" delta="Lifetime" icon={IndianRupee} />
        <WeatherCard />
      </div>

      {/* Offers */}
      <Reveal delay={0.1}>
        <div className="grid gap-4 sm:grid-cols-2">
          <OfferCard
            tag="LIMITED"
            title="Weekend Madness"
            desc="20% off Saturday & Sunday slots. Code GAMEON20."
            tint="primary"
          />
          <OfferCard
            tag="NEW"
            title="Refer & Earn ₹200"
            desc="Bring a friend, both get credits on first booking."
            tint="accent"
          />
        </div>
      </Reveal>

      {/* Recent activity */}
      <Reveal delay={0.15}>
        <div className="rounded-3xl glass shadow-elevated">
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
            <h2 className="font-display text-lg font-semibold">Recent activity</h2>
            <Link to="/dashboard/bookings" className="inline-flex items-center gap-1 text-xs font-medium text-primary">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <ul className="divide-y divide-white/5">
            {MOCK_BOOKINGS.slice(0, 4).map((b) => (
              <li key={b.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Flame className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{b.sport} · {b.court}</div>
                  <div className="text-xs text-muted-foreground">{b.date} · {b.time} · <span className="font-mono">{b.id}</span></div>
                </div>
                <StatusPill status={b.status} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function UpcomingCard({ b }: { b: typeof MOCK_BOOKINGS[number] }) {
  const target = new Date(`${b.date}T${b.time}:00`).getTime();
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const parts = [
    { v: d, l: "Days" }, { v: h, l: "Hours" }, { v: m, l: "Min" }, { v: s, l: "Sec" },
  ];

  return (
    <div className="rounded-2xl bg-background/40 p-5 ring-1 ring-white/5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Next slot</span>
        <StatusPill status="upcoming" />
      </div>
      <div className="mt-3 text-xl font-bold">{b.sport} · {b.court}</div>
      <div className="mt-1 text-sm text-muted-foreground">{b.date} · {b.time}</div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {parts.map((p) => (
          <div key={p.l} className="rounded-xl bg-white/[0.03] p-2 text-center ring-1 ring-white/5">
            <div className="font-mono text-xl font-bold tabular-nums text-primary">{p.v.toString().padStart(2, "0")}</div>
            <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{p.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ title, value, delta, icon: Icon }: { title: string; value: string; delta: string; icon: typeof Calendar }) {
  return (
    <Reveal>
      <div className="rounded-3xl glass p-5">
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{title}</span>
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="mt-3 font-display text-3xl font-bold tabular-nums">{value}</div>
        <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
          <TrendingUp className="h-3 w-3 text-primary" /> {delta}
        </div>
      </div>
    </Reveal>
  );
}

function WeatherCard() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/15 via-surface-elevated to-surface p-5 ring-1 ring-accent/20">
        <Sun className="absolute -right-4 -top-4 h-24 w-24 text-amber-400/20" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Tonight in Wardha</span>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-display text-4xl font-bold tabular-nums">28</span>
          <span className="text-xl text-muted-foreground">°C</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <Cloud className="h-3 w-3" /> Clear skies · perfect for play
        </div>
      </div>
    </Reveal>
  );
}

function OfferCard({ tag, title, desc, tint }: { tag: string; title: string; desc: string; tint: "primary" | "accent" }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-0.5 hover:shadow-elevated`}>
      <div className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${tint === "primary" ? "bg-primary/20" : "bg-accent/20"}`} />
      <span className={`relative inline-flex rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ring-1 ${
        tint === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"
      }`}>{tag}</span>
      <h3 className="relative mt-4 text-xl font-bold">{title}</h3>
      <p className="relative mt-1 text-sm text-muted-foreground">{desc}</p>
      <button className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Redeem <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}
