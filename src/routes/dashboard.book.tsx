import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, IndianRupee, Clock, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { RippleButton, PageHeader, Reveal } from "@/components/shell/ui-bits";
import { SPORTS, type Sport } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/book")({
  head: () => ({ meta: [{ title: "Book a Slot — Game Onn" }] }),
  component: BookSlot,
});

const HOURS = Array.from({ length: 17 }, (_, i) => i + 6); // 6 AM – 10 PM
const BOOKED = new Set([8, 18, 20]);

function BookSlot() {
  const navigate = useNavigate();
  const [sport, setSport] = useState<Sport>("Football");
  const [month, setMonth] = useState(() => new Date());
  const [selectedDay, setSelectedDay] = useState(() => new Date().getDate());
  const [slot, setSlot] = useState<number | null>(19);

  const days = useMemo(() => buildMonth(month), [month]);
  const basePrice: Record<Sport, number> = { Football: 1200, Cricket: 1800, "Box Cricket": 1500, Pickleball: 800 };
  const mult = slot !== null && slot >= 17 ? 1.25 : 1;
  const price = slot !== null ? basePrice[sport] * mult : 0;

  function proceed() {
    if (slot === null) return;
    const date = new Date(month.getFullYear(), month.getMonth(), selectedDay).toISOString().slice(0, 10);
    navigate({ to: "/dashboard/checkout", search: { sport, date, hour: slot, court: "Turf A", price } });
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Book a slot" subtitle="Pick your sport, date and time. Lock it in seconds." />

      {/* Sport selector */}
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-4">
          {SPORTS.map((s) => (
            <button key={s} onClick={() => setSport(s)}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                sport === s ? "border-primary bg-primary/10 shadow-glow" : "border-white/10 bg-surface hover:border-white/20"
              }`}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Sport</div>
              <div className="mt-1 text-lg font-bold">{s}</div>
              <div className="mt-2 flex items-baseline gap-0.5 font-mono">
                <IndianRupee className="h-3 w-3 text-muted-foreground" />
                <span className="text-base font-semibold">{basePrice[s]}</span>
                <span className="text-xs text-muted-foreground">/hr</span>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {/* Calendar */}
          <Reveal delay={0.05}>
            <div className="rounded-3xl glass p-5 shadow-elevated">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Pick a date</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">
                    {month.toLocaleString("en-IN", { month: "long", year: "numeric" })}
                  </h3>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))} className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><ChevronLeft className="h-4 w-4" /></button>
                  <button onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))} className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><ChevronRight className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-7 gap-1 text-center">
                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                  <div key={i} className="pb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{d}</div>
                ))}
                {days.map((d, i) => {
                  const isCurrent = d.day && d.month === month.getMonth();
                  const isSelected = isCurrent && d.day === selectedDay;
                  return (
                    <button key={i} disabled={!isCurrent} onClick={() => d.day && setSelectedDay(d.day)}
                      className={`aspect-square rounded-xl text-sm font-medium transition-all ${
                        isSelected ? "bg-primary text-primary-foreground shadow-glow" :
                        isCurrent ? "text-foreground hover:bg-white/5" : "text-muted-foreground/30"
                      }`}>
                      {d.day || ""}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Timeline slots */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl glass p-5 shadow-elevated">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Available slots</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{selectedDay} {month.toLocaleString("en-IN", { month: "short" })}</h3>
                </div>
                <div className="hidden items-center gap-3 text-[10px] sm:flex">
                  <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary" /> Free</span>
                  <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-muted-foreground"><span className="h-2 w-2 rounded-full bg-white/20" /> Booked</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
                {HOURS.map((h) => {
                  const isBooked = BOOKED.has(h);
                  const isSel = slot === h;
                  return (
                    <motion.button key={h} disabled={isBooked} onClick={() => setSlot(h)} whileTap={{ scale: 0.97 }}
                      className={`rounded-2xl border p-3 text-left transition-all ${
                        isSel ? "border-primary bg-primary/15 shadow-glow" :
                        isBooked ? "border-white/5 bg-white/[0.02] opacity-50 line-through" :
                        "border-white/10 bg-surface hover:border-primary/40"
                      }`}>
                      <div className="font-mono text-lg font-bold tabular-nums">{h.toString().padStart(2, "0")}:00</div>
                      <div className={`mt-0.5 text-[10px] font-mono uppercase tracking-wider ${
                        isSel ? "text-primary" : isBooked ? "text-muted-foreground" : "text-muted-foreground"
                      }`}>{isBooked ? "Booked" : h >= 17 ? "Peak ×1.25" : "Standard"}</div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Summary */}
        <Reveal delay={0.15}>
          <aside className="sticky top-24 rounded-3xl glass-strong p-6 shadow-elevated">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Booking summary</span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold">{sport}</h3>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Game Onn Arena, Wardha
            </div>

            <dl className="mt-6 space-y-3 text-sm">
              <Row label="Date" value={`${selectedDay} ${month.toLocaleString("en-IN", { month: "short", year: "numeric" })}`} />
              <Row label="Time" value={slot !== null ? `${slot.toString().padStart(2, "0")}:00 – ${(slot + 1).toString().padStart(2, "0")}:00` : "—"} />
              <Row label="Duration" value="1 hour" />
              <Row label="Court" value="Turf A" />
            </dl>

            <div className="my-5 border-t border-dashed border-white/10" />

            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Total</span>
              <div className="flex items-baseline gap-0.5 font-mono">
                <IndianRupee className="h-5 w-5" />
                <span className="text-3xl font-bold tabular-nums">{price.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <RippleButton variant="primary" size="lg" className="mt-6 w-full" disabled={slot === null} onClick={proceed}>
              Proceed to Payment <ArrowRight className="h-4 w-4" />
            </RippleButton>
            <p className="mt-3 text-center text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              <Clock className="mr-1 inline h-3 w-3" /> Free cancellation 12hr prior
            </p>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}

function buildMonth(d: Date) {
  const y = d.getFullYear(), m = d.getMonth();
  const first = new Date(y, m, 1).getDay();
  const last = new Date(y, m + 1, 0).getDate();
  const cells: { day: number | null; month: number }[] = [];
  for (let i = 0; i < first; i++) cells.push({ day: null, month: m });
  for (let i = 1; i <= last; i++) cells.push({ day: i, month: m });
  while (cells.length % 7 !== 0) cells.push({ day: null, month: m });
  return cells;
}
