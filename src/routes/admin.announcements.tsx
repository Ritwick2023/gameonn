import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Tag, Wrench, Plus, Edit, Trash2 } from "lucide-react";
import { PageHeader, Reveal, RippleButton } from "@/components/shell/ui-bits";

export const Route = createFileRoute("/admin/announcements")({
  head: () => ({ meta: [{ title: "Announcements — Admin" }] }),
  component: AdminAnnouncements,
});

const ITEMS = [
  { type: "offer", icon: Tag, title: "Weekend Madness — 20% off", desc: "Auto-apply on weekend slots. Code GAMEON20.", live: true },
  { type: "maintenance", icon: Wrench, title: "Pitch 1 maintenance — Mon 6-10 AM", desc: "Re-turfing. Pitch 1 closed during this window.", live: true },
  { type: "announcement", icon: Megaphone, title: "New: Pickleball courts open", desc: "Two new courts. Book any time after July 1.", live: false },
];

const TINT: Record<string, string> = {
  offer: "bg-amber-400/15 text-amber-400 ring-amber-400/30",
  maintenance: "bg-destructive/15 text-destructive ring-destructive/30",
  announcement: "bg-accent/15 text-accent ring-accent/30",
};

function AdminAnnouncements() {
  return (
    <div className="space-y-6">
      <PageHeader title="Announcements" subtitle="Banners, offers and maintenance notices."
        action={<RippleButton variant="primary" size="sm"><Plus className="h-4 w-4" /> New banner</RippleButton>} />

      <div className="grid gap-4">
        {ITEMS.map((it, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-3xl glass p-5">
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ${TINT[it.type]}`}>
                <it.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="truncate font-semibold">{it.title}</h3>
                  {it.live && <span className="rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-primary ring-1 ring-primary/30">Live</span>}
                </div>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">{it.desc}</p>
              </div>
              <div className="flex gap-1">
                <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground hover:bg-white/5 hover:text-foreground"><Edit className="h-4 w-4" /></button>
                <button className="grid h-9 w-9 place-items-center rounded-lg text-destructive hover:bg-destructive/10"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
