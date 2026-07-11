import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Move } from "lucide-react";
import { PageHeader, Reveal, RippleButton } from "@/components/shell/ui-bits";

export const Route = createFileRoute("/admin/calendar")({
  head: () => ({ meta: [{ title: "Calendar — Admin" }] }),
  component: AdminCalendar,
});

const COLORS = ["bg-primary/30 text-primary", "bg-accent/30 text-accent", "bg-amber-400/30 text-amber-400", "bg-fuchsia-400/30 text-fuchsia-400"];

function AdminCalendar() {
  const [month, setMonth] = useState(() => new Date());
  const days = useMemo(() => buildMonth(month), [month]);

  return (
    <div className="space-y-6">
      <PageHeader title="Calendar" subtitle="Color-coded bookings across all courts."
        action={<RippleButton variant="ghost" size="sm"><Move className="h-4 w-4" /> Drag & drop</RippleButton>} />

      <Reveal>
        <div className="rounded-3xl glass p-5 shadow-elevated">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl font-semibold">{month.toLocaleString("en-IN", { month: "long", year: "numeric" })}</h3>
            <div className="flex items-center gap-1">
              <button onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))} className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><ChevronLeft className="h-4 w-4" /></button>
              <button onClick={() => setMonth(new Date())} className="rounded-full glass px-4 py-2 text-xs font-medium">Today</button>
              <button onClick={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))} className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-7 gap-1 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => <div key={d} className="py-2">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((d, i) => {
              const evts = d.day ? ((d.day * 3) % 7) : 0; // deterministic pseudo data
              return (
                <div key={i} className={`min-h-24 rounded-xl p-2 ring-1 ring-white/5 transition-colors ${d.day ? "bg-surface hover:bg-white/[0.03]" : "bg-transparent ring-transparent"}`}>
                  {d.day && (
                    <>
                      <div className="font-mono text-xs text-muted-foreground">{d.day}</div>
                      <div className="mt-1 space-y-1">
                        {Array.from({ length: Math.min(3, evts) }, (_, j) => (
                          <div key={j} className={`truncate rounded px-1.5 py-0.5 font-mono text-[9px] ${COLORS[(d.day! + j) % COLORS.length]}`}>
                            {["FB 6PM", "CR 4PM", "BX 8PM", "PB 7AM"][(d.day! + j) % 4]}
                          </div>
                        ))}
                        {evts > 3 && <div className="font-mono text-[9px] text-muted-foreground">+{evts - 3} more</div>}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function buildMonth(d: Date) {
  const y = d.getFullYear(), m = d.getMonth();
  const first = new Date(y, m, 1).getDay();
  const last = new Date(y, m + 1, 0).getDate();
  const cells: { day: number | null }[] = [];
  for (let i = 0; i < first; i++) cells.push({ day: null });
  for (let i = 1; i <= last; i++) cells.push({ day: i });
  while (cells.length % 7 !== 0) cells.push({ day: null });
  return cells;
}
