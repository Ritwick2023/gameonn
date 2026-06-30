import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Logo, RippleButton } from "@/components/shell/ui-bits";
import { SPORTS, type Sport } from "@/lib/mock-data";

export const Route = createFileRoute("/complete-profile")({
  head: () => ({ meta: [{ title: "Complete Profile — Game Onn" }] }),
  component: CompleteProfile,
});

function CompleteProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sport, setSport] = useState<Sport>("Football");
  const [tos, setTos] = useState(false);
  const valid = name.trim().length >= 2 && tos;

  return (
    <div className="relative grid min-h-screen place-items-center px-5 py-10">
      <div className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-primary/15 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-float-slow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute inset-0 -z-20 grid-pattern opacity-30" />

      <div className="w-full max-w-xl">
        <div className="mb-10"><Logo /></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl glass-strong shadow-elevated p-8 sm:p-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 ring-1 ring-primary/20">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Final step</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Complete your profile</h1>
          <p className="mt-2 text-sm text-muted-foreground">A few details and you're game-ready.</p>

          <form onSubmit={(e) => { e.preventDefault(); if (valid) navigate({ to: "/dashboard" }); }} className="mt-8 space-y-5">
            <Input label="Full Name" required value={name} onChange={setName} placeholder="e.g. Aarav Deshmukh" />
            <Input label="Email" type="email" hint="Optional · receipts & match reminders" value={email} onChange={setEmail} placeholder="you@example.com" />

            <div>
              <Label>Favourite Sport</Label>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {SPORTS.map((s) => (
                  <button
                    type="button" key={s} onClick={() => setSport(s)}
                    className={`relative rounded-2xl border p-4 text-sm font-semibold transition-all ${
                      sport === s
                        ? "border-primary bg-primary/10 text-primary shadow-glow"
                        : "border-white/10 bg-surface text-muted-foreground hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    {s}
                    {sport === s && <Check className="absolute right-2 top-2 h-3.5 w-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-2xl bg-surface/60 p-4 ring-1 ring-white/5">
              <div className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-all ${tos ? "border-primary bg-primary text-primary-foreground" : "border-white/20 bg-transparent"}`}>
                {tos && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              </div>
              <input type="checkbox" checked={tos} onChange={(e) => setTos(e.target.checked)} className="sr-only" />
              <span className="text-sm text-muted-foreground">
                I accept the <a className="text-foreground underline" href="#">Terms of Service</a> and <a className="text-foreground underline" href="#">Privacy Policy</a>.
              </span>
            </label>

            <RippleButton variant="primary" size="lg" className="w-full" type="submit" disabled={!valid}>
              Create Account <ArrowRight className="h-4 w-4" />
            </RippleButton>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{children}</label>;
}

function Input({ label, value, onChange, placeholder, type = "text", required, hint }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean; hint?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Label>{label}{required && <span className="text-primary"> *</span>}</Label>
        {hint && <span className="text-[10px] text-muted-foreground">{hint}</span>}
      </div>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="mt-2 w-full rounded-2xl bg-surface px-4 py-3.5 text-base outline-none ring-1 ring-white/5 transition-all placeholder:text-muted-foreground/40 focus:ring-primary/40"
      />
    </div>
  );
}
