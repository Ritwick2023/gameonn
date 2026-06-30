import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useInView, AnimatePresence } from "framer-motion";
import {
  Menu, X, MapPin, Phone, MessageCircle, Instagram, Facebook,
  Calendar, Clock, IndianRupee, ChevronRight, ChevronDown, Star,
  Zap, Shield, Car, Droplets, Camera, Wind, Heart, Dumbbell,
  Trophy, Users, Sparkles, ArrowRight, Play, Navigation, Mail,
  Check, Flame,
} from "lucide-react";

import heroFootball from "@/assets/hero/hero-football.jpg";
import heroCricket from "@/assets/hero/hero-cricket.jpg";
import heroCelebration from "@/assets/hero/hero-celebration.jpg";
import heroBall from "@/assets/hero/hero-ball.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Game Onn — Wardha's Premier Turf & Sports Arena" },
      { name: "description", content: "Book premium football, cricket and multi-sport turf slots in Wardha. Floodlights, live availability, instant booking. Play. Book. Repeat." },
    ],
  }),
  component: HomePage,
});

const HERO_SLIDES = [
  { src: heroFootball, label: "Floodlit Football" },
  { src: heroCelebration, label: "Match Nights" },
  { src: heroBall, label: "Premium Turf" },
  { src: heroCricket, label: "Cricket Arena" },
];

const SPORTS = ["Football", "Cricket", "Box Cricket", "Pickleball"];

function HomePage() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-primary via-primary-glow to-accent"
      />
      <Navbar />
      <Hero />
      <QuickBooking />
      <AboutFacilities />
      <LiveSlots />
      <Pricing />
      <Gallery />
      <WhyChoose />
      <Stats />
      <UpcomingMatches />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#book", label: "Book Now" },
    { href: "#facilities", label: "Facilities" },
    { href: "#pricing", label: "Pricing" },
    { href: "#gallery", label: "Gallery" },
    { href: "#matches", label: "Matches" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <a href="#home" className="group flex items-center gap-2.5">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow">
              <Flame className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight">
                Game<span className="text-primary"> Onn</span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Wardha
              </span>
            </div>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#login"
              className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              Login
            </a>
            <a href="#book" className="hidden sm:inline-flex">
              <RippleButton variant="primary" size="sm">
                Book Now <ArrowRight className="h-4 w-4" />
              </RippleButton>
            </a>
            <button
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 overflow-hidden rounded-2xl glass-strong lg:hidden"
            >
              <ul className="flex flex-col p-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    >
                      {l.label} <ChevronRight className="h-4 w-4" />
                    </a>
                  </li>
                ))}
                <li className="mt-1 border-t border-white/5 px-2 pt-2">
                  <a href="#book" onClick={() => setOpen(false)}>
                    <RippleButton variant="primary" className="w-full">
                      Book Now
                    </RippleButton>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0 -z-10">
        {HERO_SLIDES.map((s, i) => (
          <motion.div
            key={s.src}
            initial={false}
            animate={{ opacity: i === idx ? 1 : 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={s.src}
              alt={s.label}
              width={1920}
              height={1080}
              className={`h-full w-full object-cover ${i === idx ? "animate-ken-burns" : ""}`}
              style={{ animationPlayState: i === idx ? "running" : "paused" }}
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Floating decorative orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-float-slow" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent/15 blur-[120px] animate-float-slow" style={{ animationDelay: "1.5s" }} />

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now Live in Wardha
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]">
            <span className="block">GAME</span>
            <span className="block text-gradient">ONN.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl">
            Wardha's premier turf & sports arena. Premium grass, blinding floodlights, and a slot waiting with your name on it.
          </p>

          <p className="mt-3 font-mono text-sm uppercase tracking-[0.3em] text-primary">
            Play. Book. Repeat.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#book">
              <RippleButton variant="primary" size="lg">
                Book Your Slot <ArrowRight className="h-5 w-5" />
              </RippleButton>
            </a>
            <a href="#facilities">
              <RippleButton variant="ghost" size="lg">
                <Play className="h-4 w-4" /> Explore Turf
              </RippleButton>
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="flex items-center gap-2"><Star className="h-3.5 w-3.5 fill-primary text-primary" /> 4.9 / 1.2k reviews</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span className="hidden sm:inline">Open 6 AM – 2 AM</span>
          </div>
        </motion.div>
      </div>

      {/* Slide selector */}
      <div className="absolute bottom-10 right-6 z-10 hidden flex-col gap-2 sm:right-10 md:flex">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setIdx(i)}
            className="group flex items-center gap-3"
            aria-label={`Show ${s.label}`}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={`block h-8 w-[2px] origin-top transition-all ${
                i === idx ? "bg-primary scale-y-100" : "bg-white/20 scale-y-50"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}

/* ─────────────────────────── QUICK BOOKING ─────────────────────────── */
function QuickBooking() {
  const [sport, setSport] = useState("Football");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("19:00");
  const priceMap: Record<string, number> = { Football: 1200, Cricket: 1800, "Box Cricket": 1500, Pickleball: 800 };
  const evening = parseInt(time.split(":")[0]) >= 18;
  const price = priceMap[sport] * (evening ? 1.2 : 1);

  return (
    <section id="book" className="relative -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong relative overflow-hidden rounded-3xl shadow-elevated p-1"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="grid gap-4 p-6 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:p-8">
            <Field label="Sport">
              <SelectChips options={SPORTS} value={sport} onChange={setSport} />
            </Field>
            <Field label="Date" icon={<Calendar className="h-4 w-4" />}>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-base font-medium text-foreground outline-none [color-scheme:dark]"
              />
            </Field>
            <Field label="Time" icon={<Clock className="h-4 w-4" />}>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-transparent text-base font-medium text-foreground outline-none [color-scheme:dark]"
              />
            </Field>
            <div className="flex items-center gap-4 md:flex-col md:items-stretch">
              <div className="flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Estimated</div>
                <div className="flex items-baseline gap-0.5 font-mono text-2xl font-bold text-foreground">
                  <IndianRupee className="h-5 w-5" />
                  <span className="tabular-nums">{price.toLocaleString("en-IN")}</span>
                  <span className="ml-1 text-xs font-normal text-muted-foreground">/ hr</span>
                </div>
              </div>
              <RippleButton variant="primary" size="lg" className="md:w-full">
                Book <ArrowRight className="h-4 w-4" />
              </RippleButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-surface/60 p-4 ring-1 ring-white/5 transition-colors focus-within:ring-primary/40">
      <div className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {icon}
        {label}
      </div>
      {children}
    </div>
  );
}

function SelectChips({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
            value === o
              ? "bg-primary text-primary-foreground shadow-glow"
              : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────── ABOUT / FACILITIES ─────────────────────────── */
const FACILITIES = [
  { icon: Sparkles, title: "Premium Turf", desc: "FIFA-grade artificial grass with shock pad base." },
  { icon: Zap, title: "Floodlights", desc: "10,000 lumens of stadium-grade lighting." },
  { icon: Car, title: "Parking", desc: "Spacious lot for 30+ cars and bikes." },
  { icon: Droplets, title: "Washrooms", desc: "Hygienic, well-maintained restrooms." },
  { icon: Wind, title: "Changing Rooms", desc: "Separate rooms with lockers." },
  { icon: Droplets, title: "Drinking Water", desc: "Filtered, chilled water on tap." },
  { icon: Camera, title: "CCTV Coverage", desc: "Full perimeter and pitch surveillance." },
  { icon: Dumbbell, title: "Equipment Rental", desc: "Balls, bibs, pads, bats — sorted." },
  { icon: Heart, title: "First Aid", desc: "On-site kit and trained staff." },
];

function AboutFacilities() {
  return (
    <section id="facilities" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Why Game Onn</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl">
              Built like a stadium.<br />
              <span className="text-gradient">Run like a startup.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted-foreground lg:justify-self-end">
            Every detail engineered for the player. From the shock-padded turf underfoot to the seamless booking flow on your phone.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <RevealCard key={f.title} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated hover:ring-1 hover:ring-primary/30">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 ring-1 ring-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                  <f.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── LIVE SLOTS ─────────────────────────── */
const SLOT_HOURS = [
  { h: "06:00", status: "available" },
  { h: "07:00", status: "available" },
  { h: "08:00", status: "booked" },
  { h: "17:00", status: "available" },
  { h: "18:00", status: "booked" },
  { h: "19:00", status: "filling" },
  { h: "20:00", status: "booked" },
  { h: "21:00", status: "available" },
  { h: "22:00", status: "available" },
  { h: "23:00", status: "available" },
] as const;

function LiveSlots() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Live Availability</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">Today's slots, in real time.</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <LegendDot color="bg-primary" label="Available" />
            <LegendDot color="bg-amber-400" label="Filling fast" />
            <LegendDot color="bg-white/20" label="Booked" />
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl glass shadow-elevated">
          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:p-6 lg:grid-cols-5">
            {SLOT_HOURS.map((s, i) => {
              const isAvail = s.status === "available";
              const isFill = s.status === "filling";
              return (
                <motion.button
                  key={s.h}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5 }}
                  disabled={s.status === "booked"}
                  className={`group relative rounded-2xl border p-4 text-left transition-all ${
                    isAvail
                      ? "border-primary/20 bg-primary/5 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary/10 hover:shadow-glow"
                      : isFill
                      ? "border-amber-400/30 bg-amber-400/5 hover:-translate-y-1 hover:border-amber-400/60"
                      : "cursor-not-allowed border-white/5 bg-white/[0.02] opacity-60"
                  }`}
                >
                  <div className="font-mono text-2xl font-bold tabular-nums">{s.h}</div>
                  <div className={`mt-1 text-xs font-medium uppercase tracking-wider ${
                    isAvail ? "text-primary" : isFill ? "text-amber-400" : "text-muted-foreground line-through"
                  }`}>
                    {s.status === "available" ? "Available" : s.status === "filling" ? "Filling" : "Booked"}
                  </div>
                  {isAvail && (
                    <ArrowRight className="absolute right-3 top-3 h-4 w-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2 font-mono uppercase tracking-wider text-muted-foreground">
      <span className={`h-2 w-2 rounded-full ${color}`} /> {label}
    </span>
  );
}

/* ─────────────────────────── PRICING ─────────────────────────── */
const PRICING = [
  { tier: "Morning", time: "6 AM – 12 PM", price: 800, perks: ["Cool weather", "Best for fitness", "Open turf"], featured: false },
  { tier: "Afternoon", time: "12 PM – 5 PM", price: 1000, perks: ["Half rate covers", "Practice sessions", "Quick bookings"], featured: false },
  { tier: "Evening", time: "5 PM – 10 PM", price: 1500, perks: ["Floodlit pitch", "Peak vibe", "Prime time"], featured: true },
  { tier: "Weekend", time: "All day Sat–Sun", price: 1800, perks: ["Tournament ready", "Group discounts", "DJ on request"], featured: false },
];

function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
            Flat rates. No surprises. <span className="text-gradient">Just play.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p, i) => (
            <RevealCard key={p.tier} delay={i * 0.08}>
              <div className={`group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                p.featured
                  ? "bg-gradient-to-br from-primary/20 via-surface-elevated to-surface ring-2 ring-primary shadow-glow"
                  : "glass hover:ring-1 hover:ring-white/20"
              }`}>
                {p.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-primary px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-foreground">
                    Popular
                  </span>
                )}
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.time}</div>
                <h3 className="mt-1 text-2xl font-bold">{p.tier}</h3>
                <div className="mt-6 flex items-baseline gap-1 font-mono">
                  <IndianRupee className="h-5 w-5 text-muted-foreground" />
                  <span className="text-5xl font-bold tabular-nums">{p.price}</span>
                  <span className="ml-1 text-sm text-muted-foreground">/hr</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {perk}
                    </li>
                  ))}
                </ul>
                <RippleButton
                  variant={p.featured ? "primary" : "ghost"}
                  className="mt-8 w-full"
                >
                  Book {p.tier} <ArrowRight className="h-4 w-4" />
                </RippleButton>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── GALLERY ─────────────────────────── */
const GALLERY_TABS = ["All", "Football", "Cricket", "Night Matches"] as const;
const GALLERY_ITEMS = [
  { src: heroFootball, cat: "Football", tall: true },
  { src: heroCelebration, cat: "Night Matches", tall: false },
  { src: heroBall, cat: "Football", tall: false },
  { src: heroCricket, cat: "Cricket", tall: true },
  { src: heroFootball, cat: "Night Matches", tall: false },
  { src: heroCelebration, cat: "Football", tall: true },
];

function Gallery() {
  const [tab, setTab] = useState<(typeof GALLERY_TABS)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = tab === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.cat === tab);

  return (
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Gallery</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
              Moments from the turf.
            </h2>
          </div>
          <div className="flex flex-wrap gap-1 rounded-full glass p-1">
            {GALLERY_TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  tab === t
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {items.map((g, i) => (
            <motion.button
              key={i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              onClick={() => setLightbox(g.src)}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/5 ${
                g.tall ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.cat}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">{g.cat}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:scale-110">
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-background/95 p-6 backdrop-blur-xl"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-elevated"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full glass-strong"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─────────────────────────── WHY CHOOSE ─────────────────────────── */
const WHY = [
  { icon: Zap, title: "Instant booking", desc: "Lock your slot in 30 seconds. No calls, no waiting." },
  { icon: Shield, title: "Verified safe", desc: "CCTV, on-site staff, and first-aid every match." },
  { icon: Trophy, title: "Tournament ready", desc: "Host your own league with our match-grade pitch." },
  { icon: Users, title: "Community first", desc: "Find players, build teams, never miss a game." },
];

function WhyChoose() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionEyebrow>Why Choose Us</SectionEyebrow>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-bold sm:text-5xl">
            More than a turf. A <span className="text-gradient">home ground.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <RevealCard key={w.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-surface-elevated to-surface p-7 ring-1 ring-white/5 transition-all duration-500 hover:-translate-y-1 hover:ring-primary/30">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />
                <w.icon className="h-9 w-9 text-primary" strokeWidth={1.8} />
                <h3 className="mt-6 text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── STATS ─────────────────────────── */
const STATS = [
  { value: 12500, suffix: "+", label: "Players hosted" },
  { value: 8400, suffix: "+", label: "Matches played" },
  { value: 4.9, suffix: "/5", label: "Customer rating", decimals: 1 },
  { value: 6, suffix: " yrs", label: "Of premium service" },
];

function Stats() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] glass-strong shadow-elevated">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
          <div className="grid gap-10 p-10 sm:grid-cols-2 lg:grid-cols-4 lg:p-16">
            {STATS.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label, decimals = 0 }: { value: number; suffix?: string; label: string; decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="relative">
      <div className="font-display text-5xl font-bold tabular-nums sm:text-6xl">
        <span className="text-gradient">
          {n.toLocaleString("en-IN", { maximumFractionDigits: decimals, minimumFractionDigits: decimals })}
        </span>
        <span className="text-foreground">{suffix}</span>
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
    </div>
  );
}

/* ─────────────────────────── UPCOMING MATCHES ─────────────────────────── */
const MATCHES = [
  { name: "Wardha Premier League", date: "Sat, 12 Jul", time: "6:00 PM", prize: 25000, days: 4, hours: 6 },
  { name: "Box Cricket Cup '26", date: "Sun, 20 Jul", time: "4:00 PM", prize: 15000, days: 12, hours: 2 },
  { name: "Friday Night 5-a-side", date: "Fri, 4 Jul", time: "9:00 PM", prize: 5000, days: 0, hours: 18 },
];

function UpcomingMatches() {
  return (
    <section id="matches" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionEyebrow>Tournaments</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Upcoming matches.</h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-1 text-sm font-medium text-primary">
            View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MATCHES.map((m, i) => (
            <RevealCard key={m.name} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary ring-1 ring-primary/20">
                    {m.date}
                  </span>
                  <Trophy className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-tight">{m.name}</h3>
                <div className="mt-1 text-sm text-muted-foreground">Kickoff {m.time}</div>

                <div className="mt-6 grid grid-cols-3 gap-2 rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
                  {[
                    { v: m.days, l: "Days" },
                    { v: m.hours, l: "Hours" },
                    { v: 42, l: "Min" },
                  ].map((c) => (
                    <div key={c.l} className="text-center">
                      <div className="font-mono text-2xl font-bold tabular-nums text-primary">
                        {c.v.toString().padStart(2, "0")}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{c.l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Prize Pool</div>
                    <div className="flex items-baseline gap-0.5 font-mono text-xl font-bold">
                      <IndianRupee className="h-4 w-4" />
                      <span className="tabular-nums">{m.prize.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <RippleButton variant="primary" size="sm">Register</RippleButton>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── REVIEWS ─────────────────────────── */
const REVIEWS = [
  { name: "Aarav Deshmukh", rating: 5, text: "Best turf in Wardha, hands down. Floodlights are insane, the grass is perfect. Booking takes 20 seconds." },
  { name: "Priya Kulkarni", rating: 5, text: "Organized our office tournament here. Staff was great, parking sorted, and the vibe was electric." },
  { name: "Rohit Pawar", rating: 5, text: "I play here every Friday night. Has become a ritual. Quality you'd expect in Mumbai or Pune." },
  { name: "Sneha Joshi", rating: 4, text: "Love the changing rooms and the equipment rental. Wish they opened a second location soon!" },
];

function Reviews() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <SectionEyebrow>Reviews</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Loved by 1,200+ players.
            </h2>
          </div>
          <div className="flex items-center gap-3 lg:justify-end">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="font-mono text-2xl font-bold tabular-nums">4.9</div>
            <div className="text-sm text-muted-foreground">on Google</div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {REVIEWS.map((r, i) => (
            <RevealCard key={r.name} delay={i * 0.06}>
              <div className="h-full rounded-3xl glass p-7 transition-all hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-lg font-bold text-primary-foreground">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="flex">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">"{r.text}"</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */
const FAQS = [
  { q: "How do I book a slot?", a: "Pick your sport, date and time on our Quick Book widget or the dedicated booking page. Pay online and you're locked in." },
  { q: "What's your cancellation policy?", a: "Full refund up to 12 hours before kickoff. Partial refund within 12 hours. No refund after slot time begins." },
  { q: "Do you provide equipment?", a: "Yes — footballs, bibs, cricket bats, pads, helmets, and pickleball gear all available on rent at the counter." },
  { q: "Is parking available?", a: "We have a spacious lot accommodating 30+ cars and 50+ two-wheelers, with on-site security." },
  { q: "Can I host a tournament here?", a: "Absolutely. Reach out via WhatsApp and we'll help you plan brackets, prize pools, and crowd management." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Questions, answered.</h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl transition-all ${
                  isOpen ? "glass-strong shadow-elevated" : "glass"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-semibold sm:text-lg">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all ${
                      isOpen ? "rotate-180 bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-6 pb-6 -mt-2 text-base leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionEyebrow center>Find Us</SectionEyebrow>
        <h2 className="mt-3 text-center font-display text-4xl font-bold sm:text-5xl">Come play with us.</h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl glass shadow-elevated">
            <div className="relative aspect-[16/10] w-full bg-surface">
              <div className="absolute inset-0 grid-pattern opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-ring rounded-full" />
                  <div className="relative grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
                    <MapPin className="h-7 w-7" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass-strong p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Address</div>
                <div className="mt-1 font-semibold">Game Onn Arena, Bachelor Road, Wardha — 442001, Maharashtra</div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <ContactCard icon={Phone} label="Call us" value="+91 98765 43210" href="tel:+919876543210" accent="primary" />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="Chat with the team" href="#" accent="primary" />
            <ContactCard icon={Navigation} label="Directions" value="Open in Google Maps" href="#" accent="accent" />
            <ContactCard icon={Clock} label="Open Hours" value="Daily 6:00 AM – 2:00 AM" accent="accent" />
            <ContactCard icon={Mail} label="Email" value="hello@gameonn.in" href="mailto:hello@gameonn.in" accent="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, label, value, href, accent }: { icon: typeof Phone; label: string; value: string; href?: string; accent: "primary" | "accent" }) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className={`group flex items-center gap-4 rounded-2xl glass p-5 transition-all ${href ? "hover:-translate-y-0.5 hover:shadow-elevated" : ""}`}
    >
      <div className={`grid h-12 w-12 place-items-center rounded-xl ring-1 transition-transform group-hover:scale-110 ${
        accent === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="truncate font-semibold">{value}</div>
      </div>
      {href && <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />}
    </Comp>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 px-4 pb-10 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow">
                <Flame className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl font-bold">
                Game<span className="text-primary"> Onn</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Wardha's premier turf & sports arena. Play. Book. Repeat.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Explore", links: ["Book Now", "Facilities", "Pricing", "Gallery"] },
            { title: "Company", links: ["About", "Tournaments", "Careers", "Contact"] },
            { title: "Legal", links: ["Terms", "Privacy", "Refunds", "Support"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{col.title}</div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/80 transition-colors hover:text-primary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center">
          <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            © 2026 Game Onn Arena. Wardha, India.
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Built for players, by players.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── MOBILE STICKY CTA ─────────────────────────── */
function MobileStickyCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
      <a href="#book">
        <RippleButton variant="primary" className="w-full shadow-glow">
          <Flame className="h-4 w-4" /> Book Your Slot Now
        </RippleButton>
      </a>
    </div>
  );
}

/* ─────────────────────────── PRIMITIVES ─────────────────────────── */
function SectionEyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full glass px-3 py-1 ${center ? "mx-auto block w-fit" : ""}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{children}</span>
    </div>
  );
}

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

function RippleButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-7 text-base py-3.5",
  };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-glow",
    ghost: "glass text-foreground hover:bg-white/10",
  };
  return (
    <button
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const id = Date.now();
        setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
        setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);
        props.onClick?.(e);
      }}
      {...props}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.97] ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40"
          style={{ left: r.x, top: r.y, animation: "ripple 0.7s ease-out forwards" }}
        />
      ))}
      <style>{`@keyframes ripple { to { transform: translate(-50%, -50%) scale(40); opacity: 0; } }`}</style>
      {children}
    </button>
  );
}
