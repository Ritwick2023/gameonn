import { createFileRoute, Link } from "@tanstack/react-router";
import { Edit, Mail, Phone, Bell, LogOut, Award } from "lucide-react";
import { PageHeader, RippleButton, Reveal } from "@/components/shell/ui-bits";

export const Route = createFileRoute("/dashboard/profile")({
  head: () => ({ meta: [{ title: "Profile — Game Onn" }] }),
  component: Profile,
});

function Profile() {
  return (
    <div className="space-y-6">
      <PageHeader title="Your profile" subtitle="Manage personal info and preferences." />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elevated">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
            <div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-primary to-accent font-display text-4xl font-bold text-primary-foreground shadow-glow">
              A
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold">Aarav Deshmukh</h2>
            <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-amber-400/10 px-2.5 py-0.5 ring-1 ring-amber-400/30">
              <Award className="h-3 w-3 text-amber-400" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">Frequent Player</span>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <Row icon={Phone} label="+91 98765 43210" />
              <Row icon={Mail} label="aarav@example.com" />
            </div>
            <RippleButton variant="primary" className="mt-6 w-full"><Edit className="h-4 w-4" /> Edit Profile</RippleButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4">
            <div className="rounded-3xl glass p-6 shadow-elevated">
              <h3 className="font-display text-lg font-semibold">Account details</h3>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ["Full Name", "Aarav Deshmukh"],
                  ["Favourite Sport", "Football"],
                  ["Phone", "+91 98765 43210"],
                  ["Email", "aarav@example.com"],
                  ["Member Since", "Jan 2024"],
                  ["Total Bookings", "28"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                    <dd className="mt-1 text-sm font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl glass p-6 shadow-elevated">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><Bell className="h-4 w-4" /> Notification preferences</h3>
              <div className="mt-5 space-y-3">
                {[
                  ["Booking reminders", true],
                  ["Tournament updates", true],
                  ["Promotional offers", false],
                  ["WhatsApp updates", true],
                ].map(([label, on]) => (
                  <label key={label as string} className="flex cursor-pointer items-center justify-between rounded-2xl bg-surface p-4 ring-1 ring-white/5">
                    <span className="text-sm">{label as string}</span>
                    <Toggle defaultOn={on as boolean} />
                  </label>
                ))}
              </div>
            </div>

            <Link to="/" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/20 bg-destructive/5 p-4 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10">
              <LogOut className="h-4 w-4" /> Logout
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Row({ icon: Icon, label }: { icon: typeof Phone; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-surface p-3 ring-1 ring-white/5">
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span className="font-medium">{label}</span>
    </div>
  );
}

function Toggle({ defaultOn = false }: { defaultOn?: boolean }) {
  return (
    <input
      type="checkbox" defaultChecked={defaultOn}
      className="relative h-6 w-11 cursor-pointer appearance-none rounded-full bg-white/10 transition-colors checked:bg-primary
        before:absolute before:left-0.5 before:top-0.5 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform
        checked:before:translate-x-5"
    />
  );
}
