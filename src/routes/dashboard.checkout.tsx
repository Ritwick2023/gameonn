import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IndianRupee, MapPin, Calendar, Clock, Shield, ArrowRight, ArrowLeft,
  CheckCircle2, Smartphone, CreditCard, Wallet, Building2, Lock, Download,
  Share2, PartyPopper, X, TicketPercent,
} from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { RippleButton, PageHeader } from "@/components/shell/ui-bits";
import { SPORTS, type Sport } from "@/lib/mock-data";
import { validateCoupon as validateCouponService } from "@/lib/coupon-service";

const checkoutSearch = z.object({
  sport: z.enum(SPORTS as [Sport, ...Sport[]]).catch("Football"),
  date: z.string().catch(new Date().toISOString().slice(0, 10)),
  hour: z.coerce.number().min(6).max(22).catch(19),
  court: z.string().catch("Turf A"),
  price: z.coerce.number().catch(1500),
});

export const Route = createFileRoute("/dashboard/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Game Onn" }] }),
  validateSearch: checkoutSearch,
  component: Checkout,
});

type PayMethod = "upi" | "card" | "wallet" | "netbanking";

const METHODS: { id: PayMethod; label: string; sub: string; icon: typeof Smartphone }[] = [
  { id: "upi", label: "UPI", sub: "GPay · PhonePe · Paytm", icon: Smartphone },
  { id: "card", label: "Card", sub: "Credit / Debit", icon: CreditCard },
  { id: "wallet", label: "Wallet", sub: "Paytm · Amazon Pay", icon: Wallet },
  { id: "netbanking", label: "Netbanking", sub: "All Indian banks", icon: Building2 },
];

function Checkout() {
  const search = Route.useSearch();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [method, setMethod] = useState<PayMethod>("upi");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [orderId] = useState(() => `GO-${Math.floor(8000 + Math.random() * 999)}`);
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState<{ code: string; off: number } | null>(null);

  const gst = useMemo(() => Math.round(search.price * 0.18), [search.price]);
  const discount = applied?.off ?? 0;
  const total = Math.max(0, search.price + gst - discount);

  function applyCoupon() {
    const code = coupon.trim().toUpperCase();
    if (!code) return;
    const result = validateCouponService(code, search.price, search.sport);
    if (result.valid) {
      setApplied({ code, off: result.discount });
      toast.success("Coupon applied", { description: `You save ₹${result.discount.toLocaleString("en-IN")}` });
    } else {
      toast.error(result.error ?? "Invalid coupon");
    }
  }

  function removeCoupon() {
    setApplied(null);
    setCoupon("");
  }

  function startPayment() {
    setStep(2);
    setSheetOpen(true);
  }

  function confirmPay() {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSheetOpen(false);
      setStep(3);
      toast.success("Payment successful", { description: `${orderId} · ₹${total.toLocaleString("en-IN")}` });
    }, 1800);
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader
        title="Checkout"
        subtitle="Secure booking · Powered by Razorpay (demo)"
        action={
          <Link to="/dashboard/book" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Change slot
          </Link>
        }
      />

      <Stepper step={step} />

      {step !== 3 ? (
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-6">
            <SlotCard {...search} />

            <div className="rounded-3xl glass p-5 shadow-elevated">
              <h3 className="font-display text-lg font-semibold">Payment method</h3>
              <p className="text-xs text-muted-foreground">Choose how you want to pay.</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {METHODS.map((m) => {
                  const active = method === m.id;
                  return (
                    <button key={m.id} onClick={() => setMethod(m.id)}
                      className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                        active ? "border-primary bg-primary/10 shadow-glow" : "border-white/10 bg-surface hover:border-white/20"
                      }`}>
                      <span className={`grid h-10 w-10 place-items-center rounded-xl ${active ? "bg-primary/20 text-primary" : "bg-white/5 text-muted-foreground"}`}>
                        <m.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">{m.label}</div>
                        <div className="truncate text-[11px] text-muted-foreground">{m.sub}</div>
                      </div>
                      {active && <CheckCircle2 className="ml-auto h-4 w-4 text-primary" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl glass p-5">
              <div className="flex items-center gap-2 text-sm font-semibold"><Shield className="h-4 w-4 text-primary" /> Free cancellation</div>
              <p className="mt-1 text-xs text-muted-foreground">Cancel up to 12 hours before your slot for a full refund. In case of rain, we auto-refund within 24 hours.</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl glass-strong p-6 shadow-elevated">
              <h3 className="font-display text-lg font-semibold">Order summary</h3>
              <dl className="mt-4 space-y-2.5 text-sm">
                <Row k="Slot fee" v={`₹${search.price.toLocaleString("en-IN")}`} />
                <Row k="GST (18%)" v={`₹${gst.toLocaleString("en-IN")}`} />
                {applied && <Row k={`Coupon (${applied.code})`} v={`− ₹${discount.toLocaleString("en-IN")}`} accent />}
              </dl>

              {!applied ? (
                <div className="mt-4">
                  <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-muted-foreground"><TicketPercent className="h-3 w-3" /> Have a Coupon?</div>
                  <div className="flex gap-2">
                    <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter coupon code" onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                      className="w-full rounded-xl bg-surface px-3 py-2 font-mono text-sm uppercase outline-none ring-1 ring-white/10 focus:ring-primary/50" />
                    <button onClick={applyCoupon} className="rounded-xl bg-white/5 px-4 text-xs font-semibold hover:bg-white/10 transition-colors">Apply</button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex items-center justify-between rounded-xl bg-primary/10 px-3 py-2 ring-1 ring-primary/20">
                  <div className="flex items-center gap-2">
                    <TicketPercent className="h-4 w-4 text-primary" />
                    <span className="font-mono text-sm font-bold text-primary">{applied.code}</span>
                    <span className="text-xs text-primary/70">− ₹{discount.toLocaleString("en-IN")}</span>
                  </div>
                  <button onClick={removeCoupon} className="grid h-6 w-6 place-items-center rounded-full hover:bg-white/10"><X className="h-3 w-3 text-primary" /></button>
                </div>
              )}

              <div className="my-4 border-t border-dashed border-white/10" />
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Total payable</span>
                <div className="flex items-baseline gap-0.5 font-mono">
                  <IndianRupee className="h-5 w-5" />
                  <span className="text-3xl font-bold tabular-nums">{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <RippleButton variant="primary" size="lg" className="mt-6 w-full" onClick={startPayment}>
                Pay ₹{total.toLocaleString("en-IN")} <ArrowRight className="h-4 w-4" />
              </RippleButton>
              <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                <Lock className="h-3 w-3" /> 256-bit encrypted · Razorpay
              </div>
            </div>
          </aside>
        </div>
      ) : (
        <Success orderId={orderId} total={total} {...search} />
      )}

      <AnimatePresence>
        {sheetOpen && (
          <RazorpaySheet
            method={method}
            total={total}
            orderId={orderId}
            processing={processing}
            onClose={() => { setSheetOpen(false); if (step === 2) setStep(1); }}
            onPay={confirmPay}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Stepper({ step }: { step: 1 | 2 | 3 }) {
  const items = ["Review", "Payment", "Confirmation"];
  return (
    <ol className="flex items-center gap-2 rounded-full glass p-2">
      {items.map((label, i) => {
        const n = (i + 1) as 1 | 2 | 3;
        const active = n === step;
        const done = n < step;
        return (
          <li key={label} className="flex flex-1 items-center gap-2">
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
              done ? "bg-primary text-primary-foreground" : active ? "bg-primary/20 text-primary ring-1 ring-primary" : "bg-white/5 text-muted-foreground"
            }`}>
              {done ? <CheckCircle2 className="h-3.5 w-3.5" /> : n}
            </span>
            <span className={`truncate text-xs font-semibold sm:text-sm ${active || done ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
            {i < items.length - 1 && <span className={`ml-1 hidden h-px flex-1 sm:block ${done ? "bg-primary" : "bg-white/10"}`} />}
          </li>
        );
      })}
    </ol>
  );
}

function SlotCard({ sport, date, hour, court }: { sport: Sport; date: string; hour: number; court: string }) {
  const d = new Date(date);
  const dateLabel = d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  const time = `${hour.toString().padStart(2, "0")}:00 – ${(hour + 1).toString().padStart(2, "0")}:00`;
  return (
    <div className="overflow-hidden rounded-3xl glass p-5 shadow-elevated">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Your slot</div>
          <h3 className="mt-1 font-display text-2xl font-bold">{sport}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" /> Game Onn Arena, Wardha · {court}
          </div>
        </div>
        <div className="rounded-2xl bg-primary/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-primary ring-1 ring-primary/20">
          {hour >= 17 ? "Peak" : "Standard"}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
        <Tile icon={Calendar} k="Date" v={dateLabel} />
        <Tile icon={Clock} k="Time" v={time} />
        <Tile icon={Shield} k="Duration" v="1 hour" />
      </div>
    </div>
  );
}

function Tile({ icon: Icon, k, v }: { icon: typeof Calendar; k: string; v: string }) {
  return (
    <div>
      <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
        <Icon className="h-2.5 w-2.5" /> {k}
      </div>
      <div className="mt-0.5 truncate text-xs font-bold">{v}</div>
    </div>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className={`font-mono font-medium tabular-nums ${accent ? "text-primary" : ""}`}>{v}</dd>
    </div>
  );
}

/* ─── Mock Razorpay sheet ─── */
function RazorpaySheet({
  method, total, orderId, processing, onClose, onPay,
}: {
  method: PayMethod; total: number; orderId: string; processing: boolean;
  onClose: () => void; onPay: () => void;
}) {
  const [vpa, setVpa] = useState("aarav@okhdfc");
  const [card, setCard] = useState({ n: "4242 4242 4242 4242", e: "12/28", c: "123", name: "Aarav Deshmukh" });

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center"
      onClick={processing ? undefined : onClose}>
      <motion.div
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-t-3xl bg-surface shadow-elevated ring-1 ring-white/10 sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#3395ff] text-xs font-black text-white">R</span>
            <div>
              <div className="text-sm font-bold">Razorpay</div>
              <div className="font-mono text-[10px] text-muted-foreground">Game Onn Arena · {orderId}</div>
            </div>
          </div>
          {!processing && (
            <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/5"><X className="h-4 w-4" /></button>
          )}
        </div>

        <div className="px-5 py-5">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-muted-foreground">Amount payable</span>
            <div className="flex items-baseline gap-0.5 font-mono">
              <IndianRupee className="h-4 w-4" />
              <span className="text-2xl font-bold tabular-nums">{total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {method === "upi" && (
              <div>
                <label className="text-xs font-medium text-muted-foreground">UPI ID</label>
                <input value={vpa} onChange={(e) => setVpa(e.target.value)} className="mt-1 w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
                <div className="mt-2 flex gap-2">
                  {["GPay", "PhonePe", "Paytm"].map((a) => (
                    <span key={a} className="rounded-lg bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">{a}</span>
                  ))}
                </div>
              </div>
            )}
            {method === "card" && (
              <div className="space-y-2">
                <input value={card.n} onChange={(e) => setCard({ ...card, n: e.target.value })} placeholder="Card number" className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
                <div className="grid grid-cols-2 gap-2">
                  <input value={card.e} onChange={(e) => setCard({ ...card, e: e.target.value })} placeholder="MM/YY" className="rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
                  <input value={card.c} onChange={(e) => setCard({ ...card, c: e.target.value })} placeholder="CVV" className="rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
                </div>
                <input value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} placeholder="Name on card" className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary" />
              </div>
            )}
            {method === "wallet" && (
              <div className="grid grid-cols-2 gap-2">
                {["Paytm", "Amazon Pay", "Mobikwik", "Freecharge"].map((w) => (
                  <button key={w} className="rounded-xl border border-white/10 bg-background px-3 py-3 text-sm font-medium hover:border-primary/40">{w}</button>
                ))}
              </div>
            )}
            {method === "netbanking" && (
              <select className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary">
                {["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank", "Kotak Mahindra"].map((b) => <option key={b}>{b}</option>)}
              </select>
            )}
          </div>

          <button
            disabled={processing}
            onClick={onPay}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#3395ff] text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-70">
            {processing ? (
              <>
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                Processing…
              </>
            ) : (
              <>Pay ₹{total.toLocaleString("en-IN")}</>
            )}
          </button>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground">
            <Lock className="h-3 w-3" /> Secured by 256-bit SSL · This is a demo sheet
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Success screen ─── */
function Success({
  orderId, total, sport, date, hour, court,
}: { orderId: string; total: number; sport: Sport; date: string; hour: number; court: string }) {
  const navigate = useNavigate();
  const time = `${hour.toString().padStart(2, "0")}:00`;

  useEffect(() => {
    const t = setTimeout(() => {}, 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-3xl glass-strong p-8 text-center shadow-elevated sm:p-12">
      <Confetti />
      <div className="relative">
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 200, delay: 0.1 }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary/15 ring-4 ring-primary/20">
          <CheckCircle2 className="h-10 w-10 text-primary" />
        </motion.div>
        <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
          Booking confirmed <PartyPopper className="inline h-7 w-7 text-primary" />
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A confirmation & receipt has been sent to your registered mobile number.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-background/60 p-5 text-left ring-1 ring-white/10">
          <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Order ID</span>
            <span className="font-mono text-sm font-bold">{orderId}</span>
          </div>
          <dl className="mt-3 space-y-2 text-sm">
            <Row k="Sport" v={sport} />
            <Row k="Date" v={new Date(date).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })} />
            <Row k="Time" v={time} />
            <Row k="Court" v={court} />
            <Row k="Paid" v={`₹${total.toLocaleString("en-IN")}`} accent />
          </dl>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <RippleButton variant="primary" onClick={() => navigate({ to: "/dashboard/bookings" })}>
            View my bookings <ArrowRight className="h-4 w-4" />
          </RippleButton>
          <RippleButton variant="ghost" onClick={() => toast.success("Receipt downloaded", { description: `${orderId}.pdf` })}>
            <Download className="h-4 w-4" /> Receipt
          </RippleButton>
          <RippleButton variant="ghost" onClick={() => toast("Shared", { description: "Invite link copied to clipboard." })}>
            <Share2 className="h-4 w-4" /> Invite team
          </RippleButton>
        </div>
        <Link to="/dashboard" className="mt-6 inline-block text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground">
          ← Back to dashboard
        </Link>
      </div>
    </motion.div>
  );
}

function Confetti() {
  const bits = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bits.map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: -20, x: `${(i * 37) % 100}%`, opacity: 0, rotate: 0 }}
          animate={{ y: "120%", opacity: [0, 1, 1, 0], rotate: 360 }}
          transition={{ duration: 2.4 + (i % 5) * 0.3, delay: 0.2 + (i % 6) * 0.05, ease: "easeOut" }}
          className="absolute top-0 h-2 w-2 rounded-sm"
          style={{ background: ["#7CFF6B", "#3395ff", "#FF6B6B", "#FFD93D"][i % 4] }}
        />
      ))}
    </div>
  );
}
