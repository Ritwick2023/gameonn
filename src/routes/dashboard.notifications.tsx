import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bell, Calendar, Trophy, Tag, Wrench, Megaphone, Check } from "lucide-react";
import { PageHeader, Reveal } from "@/components/shell/ui-bits";
import { MOCK_NOTIFICATIONS } from "@/lib/mock-data";

export const Route = createFileRoute("/dashboard/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Game Onn" }] }),
  component: Notifications,
});

const ICON: Record<string, typeof Bell> = {
  booking: Calendar, offer: Tag, reminder: Bell, tournament: Trophy, maintenance: Wrench, announcement: Megaphone,
};
const TINT: Record<string, string> = {
  booking: "text-primary bg-primary/15 ring-primary/30",
  offer: "text-amber-400 bg-amber-400/15 ring-amber-400/30",
  reminder: "text-accent bg-accent/15 ring-accent/30",
  tournament: "text-amber-400 bg-amber-400/15 ring-amber-400/30",
  maintenance: "text-destructive bg-destructive/15 ring-destructive/30",
};

function Notifications() {
  const [items, setItems] = useState(MOCK_NOTIFICATIONS);
  const unread = items.filter((i) => i.unread).length;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        subtitle={`${unread} unread`}
        action={
          <button
            onClick={() => setItems((arr) => arr.map((i) => ({ ...i, unread: false })))}
            className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-xs font-medium hover:bg-white/10"
          >
            <Check className="h-3.5 w-3.5" /> Mark all read
          </button>
        }
      />

      <Reveal>
        <ul className="divide-y divide-white/5 rounded-3xl glass shadow-elevated">
          {items.map((n) => {
            const Icon = ICON[n.type] ?? Bell;
            return (
              <li key={n.id} onClick={() => setItems((arr) => arr.map((i) => i.id === n.id ? { ...i, unread: false } : i))}
                className={`grid cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-4 p-5 transition-colors hover:bg-white/[0.02] ${n.unread ? "bg-primary/[0.03]" : ""}`}>
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 ${TINT[n.type] ?? "bg-white/5 text-muted-foreground ring-white/10"}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-sm font-semibold">{n.title}</h3>
                    {n.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{n.desc}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{n.time}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  );
}
