import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageSquare, EyeOff } from "lucide-react";
import { PageHeader, Reveal, StatusPill } from "@/components/shell/ui-bits";

export const Route = createFileRoute("/admin/reviews")({
  head: () => ({ meta: [{ title: "Reviews — Admin" }] }),
  component: AdminReviews,
});

const REVIEWS = [
  { id: 1, name: "Aarav D.", rating: 5, text: "Best turf in Wardha, hands down. Floodlights are insane.", status: "Approved", date: "2026-06-22" },
  { id: 2, name: "Priya K.", rating: 5, text: "Organized our office tournament here. Staff was great.", status: "Approved", date: "2026-06-18" },
  { id: 3, name: "Anonymous", rating: 2, text: "Bathroom was dirty when I arrived.", status: "Pending", date: "2026-06-28" },
  { id: 4, name: "Rohit P.", rating: 5, text: "Quality you'd expect in Mumbai or Pune.", status: "Approved", date: "2026-06-15" },
];

function AdminReviews() {
  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);
  return (
    <div className="space-y-6">
      <PageHeader title="Reviews" subtitle={`${REVIEWS.length} total · avg ${avg}★`} />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Average rating" value={`${avg}★`} />
        <Stat label="Total reviews" value={String(REVIEWS.length)} />
        <Stat label="Pending moderation" value={String(REVIEWS.filter(r => r.status === "Pending").length)} />
      </div>

      <Reveal>
        <ul className="space-y-3">
          {REVIEWS.map((r) => (
            <li key={r.id} className="rounded-3xl glass p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display font-bold text-primary-foreground">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="flex">{[...Array(r.rating)].map((_, i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2"><StatusPill status={r.status} /><span className="text-xs text-muted-foreground">{r.date}</span></div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">"{r.text}"</p>
              <div className="mt-4 flex gap-2">
                <button className="inline-flex items-center gap-1 rounded-full glass px-3 py-1.5 text-xs font-medium hover:bg-white/10"><MessageSquare className="h-3 w-3" /> Reply</button>
                <button className="inline-flex items-center gap-1 rounded-full glass px-3 py-1.5 text-xs font-medium hover:bg-white/10"><EyeOff className="h-3 w-3" /> Hide</button>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Reveal>
      <div className="rounded-3xl glass p-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-2 font-display text-3xl font-bold">{value}</div>
      </div>
    </Reveal>
  );
}
