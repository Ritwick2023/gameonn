import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Phone, ShieldCheck, KeyRound, User } from "lucide-react";
import { Logo, RippleButton } from "@/components/shell/ui-bits";
import { setRole } from "@/lib/auth";
import heroFootball from "@/assets/hero/hero-football.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Game Onn" }] }),
  component: LoginPage,
});

type Mode = "phone" | "credentials";

function LoginPage() {
  const [mode, setMode] = useState<Mode>("phone");
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left — visual */}
      <div className="relative hidden overflow-hidden lg:block">
        <img src={heroFootball} alt="" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/30 blur-[120px] animate-float-slow" />

        <div className="relative z-10 flex h-full flex-col p-10 xl:p-14">
          <Logo />
          <div className="mt-auto max-w-md">
            <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight xl:text-6xl">
              Welcome <span className="text-gradient">back, player.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your turf is warmed up. Your team's waiting. Sign in to lock the slot.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { k: "12.5k+", v: "Players" },
                { k: "8.4k+", v: "Matches" },
                { k: "4.9★", v: "Rating" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-mono text-2xl font-bold text-foreground">{s.k}</div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <Link to="/" className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden"><Logo /></div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">Sign in to Game Onn</h1>
          <p className="mt-2 text-sm text-muted-foreground">Choose how you'd like to continue.</p>

          {/* Mode switcher */}
          <div className="mt-8 grid grid-cols-2 gap-1 rounded-2xl glass p-1">
            {(["phone", "credentials"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {mode === m && (
                  <motion.span
                    layoutId="mode-pill"
                    className="absolute inset-0 rounded-xl bg-primary shadow-glow"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative inline-flex items-center gap-2">
                  {m === "phone" ? <Phone className="h-4 w-4" /> : <KeyRound className="h-4 w-4" />}
                  {m === "phone" ? "Phone OTP" : "Credentials"}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              {mode === "phone" ? <PhoneFlow key="phone" /> : <CredentialsFlow key="cred" />}
            </AnimatePresence>
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            By continuing you accept our <a className="underline hover:text-foreground" href="#">Terms</a> and <a className="underline hover:text-foreground" href="#">Privacy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Phone OTP flow ─── */
function PhoneFlow() {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
      <AnimatePresence mode="wait">
        {step === "phone" ? (
          <motion.form
            key="phone"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onSubmit={(e) => { e.preventDefault(); if (phone.length === 10) setStep("otp"); }}
            className="space-y-5"
          >
            <FieldLabel>Phone Number</FieldLabel>
            <div className="flex items-center rounded-2xl glass p-4 ring-1 ring-white/5 focus-within:ring-primary/40">
              <span className="mr-3 border-r border-white/10 pr-3 font-mono text-base font-semibold">+91</span>
              <input
                autoFocus
                inputMode="numeric"
                maxLength={10}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                placeholder="98765 43210"
                className="w-full bg-transparent font-mono text-lg tracking-wider outline-none placeholder:text-muted-foreground/40"
              />
              {phone.length === 10 && <ShieldCheck className="h-5 w-5 text-primary" />}
            </div>
            <RippleButton variant="primary" size="lg" className="w-full" type="submit" disabled={phone.length !== 10}>
              Send OTP <ArrowRight className="h-4 w-4" />
            </RippleButton>
          </motion.form>
        ) : (
          <OtpStep key="otp" phone={phone} onBack={() => setStep("phone")} onVerify={() => navigate({ to: "/complete-profile" })} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function OtpStep({ phone, onBack, onVerify }: { phone: string; onBack: () => void; onVerify: () => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (!timer) return;
    const t = setTimeout(() => setTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);
  const full = otp.join("");
  return (
    <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="space-y-5">
      <button onClick={onBack} className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3 w-3" /> Change number
      </button>
      <div>
        <FieldLabel>Enter the 6-digit code</FieldLabel>
        <p className="mt-1 text-sm text-muted-foreground">Sent to <span className="font-mono text-foreground">+91 {phone}</span></p>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {otp.map((v, i) => (
          <input
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            value={v}
            onChange={(e) => {
              const ch = e.target.value.slice(-1).replace(/\D/g, "");
              setOtp((arr) => arr.map((x, idx) => (idx === i ? ch : x)));
              if (ch && i < 5) refs.current[i + 1]?.focus();
            }}
            onKeyDown={(e) => { if (e.key === "Backspace" && !otp[i] && i > 0) refs.current[i - 1]?.focus(); }}
            inputMode="numeric"
            maxLength={1}
            className={`aspect-square w-full rounded-xl border bg-surface text-center font-mono text-2xl font-bold outline-none transition-all ${
              v ? "border-primary/60 shadow-glow" : "border-white/10"
            } focus:border-primary focus:shadow-glow`}
          />
        ))}
      </div>
      <RippleButton variant="primary" size="lg" className="w-full" disabled={full.length !== 6} onClick={onVerify}>
        Verify & Continue <ArrowRight className="h-4 w-4" />
      </RippleButton>
      <div className="text-center text-xs text-muted-foreground">
        {timer > 0 ? (
          <>Resend in <span className="font-mono text-foreground">{timer}s</span></>
        ) : (
          <button onClick={() => setTimer(30)} className="text-primary hover:underline">Resend OTP</button>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Credentials flow (dummy admin/client) ─── */
function CredentialsFlow() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
      onSubmit={(e) => {
        e.preventDefault();
        const low = id.trim().toLowerCase();
        if (low === "admin" && pw === "Admin") navigate({ to: "/admin" });
        else if (low === "client" && pw === "Client") navigate({ to: "/dashboard" });
        else setErr("Invalid credentials. Try Admin/Admin or Client/Client.");
      }}
      className="space-y-5"
    >
      <div className="rounded-2xl bg-primary/5 p-3 text-xs text-primary ring-1 ring-primary/20">
        <strong className="font-mono uppercase tracking-wider">Demo</strong> · use <span className="font-mono">Admin / Admin</span> or <span className="font-mono">Client / Client</span>
      </div>
      <div>
        <FieldLabel>User ID</FieldLabel>
        <div className="mt-2 flex items-center rounded-2xl glass p-4 ring-1 ring-white/5 focus-within:ring-primary/40">
          <User className="mr-3 h-4 w-4 text-muted-foreground" />
          <input
            value={id} onChange={(e) => { setId(e.target.value); setErr(""); }}
            placeholder="Admin or Client"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/40"
          />
        </div>
      </div>
      <div>
        <FieldLabel>Password</FieldLabel>
        <div className="mt-2 flex items-center rounded-2xl glass p-4 ring-1 ring-white/5 focus-within:ring-primary/40">
          <KeyRound className="mr-3 h-4 w-4 text-muted-foreground" />
          <input
            type="password" value={pw} onChange={(e) => { setPw(e.target.value); setErr(""); }}
            placeholder="••••••••"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground/40"
          />
        </div>
      </div>
      {err && <p className="text-xs text-destructive">{err}</p>}
      <RippleButton variant="primary" size="lg" className="w-full" type="submit">
        Sign in <ArrowRight className="h-4 w-4" />
      </RippleButton>
    </motion.form>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{children}</label>;
}
