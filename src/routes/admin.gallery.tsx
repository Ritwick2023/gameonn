import { createFileRoute } from "@tanstack/react-router";
import { Upload, Trash2, Eye, GripVertical, Plus } from "lucide-react";
import { PageHeader, Reveal, RippleButton } from "@/components/shell/ui-bits";
import heroFootball from "@/assets/hero/hero-football.jpg";
import heroCricket from "@/assets/hero/hero-cricket.jpg";
import heroCelebration from "@/assets/hero/hero-celebration.jpg";
import heroBall from "@/assets/hero/hero-ball.jpg";

export const Route = createFileRoute("/admin/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Admin" }] }),
  component: AdminGallery,
});

const ITEMS = [
  { src: heroFootball, cat: "Football", id: 1 },
  { src: heroCricket, cat: "Cricket", id: 2 },
  { src: heroCelebration, cat: "Night Matches", id: 3 },
  { src: heroBall, cat: "Football", id: 4 },
  { src: heroFootball, cat: "Tournament", id: 5 },
  { src: heroCelebration, cat: "Football", id: 6 },
];

function AdminGallery() {
  return (
    <div className="space-y-6">
      <PageHeader title="Gallery manager" subtitle={`${ITEMS.length} images · drag to reorder`}
        action={<RippleButton variant="primary" size="sm"><Plus className="h-4 w-4" /> Upload</RippleButton>} />

      <Reveal>
        <div className="rounded-3xl glass p-6 shadow-elevated">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            <button className="grid aspect-square place-items-center rounded-2xl border-2 border-dashed border-white/15 bg-surface/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
              <div className="flex flex-col items-center gap-2">
                <Upload className="h-6 w-6" />
                <span className="text-xs font-medium">Upload images</span>
              </div>
            </button>
            {ITEMS.map((it) => (
              <div key={it.id} className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/5">
                <img src={it.src} alt={it.cat} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
                <div className="absolute left-2 top-2 cursor-grab rounded-md bg-background/70 p-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <GripVertical className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground">{it.cat}</span>
                  <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="grid h-7 w-7 place-items-center rounded-md bg-background/80 text-foreground"><Eye className="h-3.5 w-3.5" /></button>
                    <button className="grid h-7 w-7 place-items-center rounded-md bg-destructive/80 text-destructive-foreground"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
