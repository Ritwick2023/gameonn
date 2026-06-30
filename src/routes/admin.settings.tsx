import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Image as ImageIcon, CreditCard, Phone, Mail, Palette, Instagram, Facebook, MessageCircle } from "lucide-react";
import { PageHeader, Reveal, RippleButton } from "@/components/shell/ui-bits";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Settings — Admin" }] }),
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <div className="space-y-6">
      <PageHeader title="Settings" subtitle="Business profile, contact details and integrations."
        action={<RippleButton variant="primary" size="sm">Save changes</RippleButton>} />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Section title="Business hours" icon={Clock}>
            <div className="space-y-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <div key={d} className="grid grid-cols-[60px_1fr_1fr] items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{d}</span>
                  <TimeIn label="Open" v="06:00" />
                  <TimeIn label="Close" v="02:00" />
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <Reveal delay={0.05}>
          <Section title="Contact details" icon={Phone}>
            <Input icon={Phone} label="Phone" v="+91 98765 43210" />
            <Input icon={Mail} label="Email" v="hello@gameonn.in" />
            <Input icon={MapPin} label="Address" v="Bachelor Road, Wardha — 442001" />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Google Maps" icon={MapPin}>
            <Input label="Embed URL" v="https://maps.google.com/embed?..." />
            <p className="text-xs text-muted-foreground">Paste your Google Maps embed URL to render the location pin on the public site.</p>
          </Section>
        </Reveal>

        <Reveal delay={0.05}>
          <Section title="Branding" icon={ImageIcon}>
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>
              </div>
              <RippleButton variant="ghost" size="sm">Upload logo</RippleButton>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <ColorRow label="Primary" hex="#22C55E" />
              <ColorRow label="Accent" hex="#3B82F6" />
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Payment gateway" icon={CreditCard}>
            <div className="rounded-2xl bg-accent/10 p-4 text-xs text-accent ring-1 ring-accent/30">
              Razorpay integration · ready to connect
            </div>
            <Input label="Razorpay Key ID" v="rzp_live_xxxxxxxxxxxx" />
            <Input label="Razorpay Secret" v="••••••••••••••••" type="password" />
          </Section>
        </Reveal>

        <Reveal delay={0.05}>
          <Section title="Social media" icon={Palette}>
            <Input icon={Instagram} label="Instagram" v="@gameonn.wardha" />
            <Input icon={Facebook} label="Facebook" v="/gameonn.wardha" />
            <Input icon={MessageCircle} label="WhatsApp" v="+91 98765 43210" />
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

function Section({ title, icon: Icon, children }: { title: string; icon: typeof Clock; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl glass p-6 shadow-elevated">
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><Icon className="h-4 w-4 text-primary" /> {title}</h3>
      <div className="mt-5 space-y-3">{children}</div>
    </div>
  );
}

function Input({ icon: Icon, label, v, type = "text" }: { icon?: typeof Clock; label: string; v: string; type?: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-1.5 flex items-center rounded-2xl bg-surface px-4 py-3 ring-1 ring-white/5 focus-within:ring-primary/40">
        {Icon && <Icon className="mr-2 h-4 w-4 text-muted-foreground" />}
        <input defaultValue={v} type={type} className="w-full bg-transparent text-sm outline-none" />
      </div>
    </label>
  );
}

function TimeIn({ label, v }: { label: string; v: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{label}</span>
      <input type="time" defaultValue={v} className="mt-0.5 w-full rounded-xl bg-surface px-3 py-2 text-sm outline-none ring-1 ring-white/5 [color-scheme:dark]" />
    </label>
  );
}

function ColorRow({ label, hex }: { label: string; hex: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-surface p-3 ring-1 ring-white/5">
      <div className="h-8 w-8 rounded-lg ring-1 ring-white/10" style={{ background: hex }} />
      <div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-mono text-sm font-semibold">{hex}</div>
      </div>
    </div>
  );
}
