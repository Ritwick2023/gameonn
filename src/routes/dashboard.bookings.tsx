import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Filter, Download, MapPin, RefreshCw, X } from "lucide-react";
import { RippleButton, PageHeader, StatusPill, Reveal } from "@/components/shell/ui-bits";
import { MOCK_BOOKINGS, type Booking, type BookingStatus } from "@/lib/mock-data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/dashboard/bookings")({
  head: () => ({ meta: [{ title: "My Bookings — Game Onn" }] }),
  component: MyBookings,
});

const TABS: { k: BookingStatus | "all"; label: string }[] = [
  { k: "all", label: "All" },
  { k: "upcoming", label: "Upcoming" },
  { k: "completed", label: "Completed" },
  { k: "cancelled", label: "Cancelled" },
];

function MyBookings() {
  const [tab, setTab] = useState<BookingStatus | "all">("all");
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Booking | null>(null);

  const filtered = useMemo(() => {
    return MOCK_BOOKINGS.filter((b) => {
      if (tab !== "all" && b.status !== tab) return false;
      if (q && !`${b.sport} ${b.id} ${b.court}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [tab, q]);

  return (
    <div className="space-y-6">
      <PageHeader title="My bookings" subtitle="All your slots, past and upcoming." />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1 rounded-full glass p-1">
          {TABS.map((t) => (
            <button key={t.k} onClick={() => setTab(t.k)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                tab === t.k ? "bg-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
              }`}>{t.label}</button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full glass px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60" />
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10"><Filter className="h-4 w-4" /></button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((b, i) => (
          <Reveal key={b.id} delay={i * 0.04}>
            <button onClick={() => setActive(b)}
              className="group block w-full text-left">
              <div className="overflow-hidden rounded-3xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{b.id}</div>
                    <h3 className="mt-1 text-xl font-bold">{b.sport}</h3>
                    <div className="text-sm text-muted-foreground">{b.court}</div>
                  </div>
                  <StatusPill status={b.status} />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
                  <Cell k="Date" v={b.date.slice(5)} />
                  <Cell k="Time" v={b.time} />
                  <Cell k="₹" v={b.price.toLocaleString("en-IN")} />
                </div>
              </div>
            </button>
          </Reveal>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-3xl glass p-10 text-center">
            <p className="text-sm text-muted-foreground">No bookings found.</p>
          </div>
        )}
      </div>

      {active && <BookingDetailsModal b={active} onClose={() => setActive(null)} />}
    </div>
  );
}

function Cell({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{k}</div>
      <div className="font-mono text-sm font-bold tabular-nums">{v}</div>
    </div>
  );
}

function BookingDetailsModal({ b, onClose }: { b: Booking; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={onClose}
      className="fixed inset-0 z-[70] grid place-items-center bg-background/80 p-4 backdrop-blur-md">
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-3xl glass-strong shadow-elevated">
        <div className="flex items-start justify-between border-b border-white/5 p-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{b.id}</div>
            <h3 className="mt-1 font-display text-2xl font-bold">{b.sport}</h3>
            <div className="mt-1 text-sm text-muted-foreground">{b.court} · {b.date} · {b.time}</div>
          </div>
          <button onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full glass"><X className="h-4 w-4" /></button>
        </div>
        <div className="space-y-4 p-6">
          <div className="grid grid-cols-2 gap-3">
            <Tile k="Duration" v={`${b.duration} hour${b.duration > 1 ? "s" : ""}`} />
            <Tile k="Price" v={`₹${b.price.toLocaleString("en-IN")}`} />
            <Tile k="Payment" v={b.payment} />
            <Tile k="Status" v={b.status} />
          </div>
          <a href="#" className="flex items-center justify-between rounded-2xl bg-surface p-4 ring-1 ring-white/5 hover:ring-primary/40">
            <span className="flex items-center gap-2 text-sm font-medium"><MapPin className="h-4 w-4 text-primary" /> Get Directions</span>
            <span className="text-xs text-muted-foreground">Bachelor Rd, Wardha</span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-white/5 p-6">
          <RippleButton variant="ghost"><Download className="h-4 w-4" /> Receipt</RippleButton>
          <RippleButton variant="primary"><RefreshCw className="h-4 w-4" /> Book again</RippleButton>
          {b.status === "upcoming" && <RippleButton variant="outline" className="col-span-2">Cancel booking</RippleButton>}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Tile({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl bg-surface p-3 ring-1 ring-white/5">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
      <div className="mt-0.5 text-sm font-bold capitalize">{v}</div>
    </div>
  );
}
