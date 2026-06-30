import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, ChevronDown } from "lucide-react";
import { PageHeader, Reveal } from "@/components/shell/ui-bits";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/dashboard/support")({
  head: () => ({ meta: [{ title: "Support — Game Onn" }] }),
  component: Support,
});

const FAQS = [
  { q: "How do I cancel a booking?", a: "Open My Bookings → tap the booking → Cancel. Full refund up to 12 hours before kickoff." },
  { q: "Where can I download my receipt?", a: "Go to Payment History and tap Receipt next to any transaction. PDF will be emailed too." },
  { q: "Can I reschedule a slot?", a: "Yes — message support on WhatsApp at least 6 hours before your slot and we'll move it free of charge." },
  { q: "Do you provide equipment?", a: "Footballs, bibs, bats, pads, pickleball gear — all available on rent at the counter." },
];

function Support() {
  return (
    <div className="space-y-6">
      <PageHeader title="Support" subtitle="We're here, every day from 6 AM to 12 AM." />

      <div className="grid gap-4 sm:grid-cols-3">
        <Reveal><ContactCard icon={MessageCircle} title="WhatsApp" sub="Chat now" href="#" tint="primary" /></Reveal>
        <Reveal delay={0.05}><ContactCard icon={Phone} title="Call us" sub="+91 98765 43210" href="tel:+919876543210" tint="accent" /></Reveal>
        <Reveal delay={0.1}><ContactCard icon={Mail} title="Email" sub="hello@gameonn.in" href="mailto:hello@gameonn.in" tint="primary" /></Reveal>
      </div>

      <Reveal delay={0.15}>
        <div>
          <h2 className="mb-4 font-display text-xl font-semibold">Quick answers</h2>
          <FAQAccordion />
        </div>
      </Reveal>
    </div>
  );
}

function ContactCard({ icon: Icon, title, sub, href, tint }: { icon: typeof Phone; title: string; sub: string; href: string; tint: "primary" | "accent" }) {
  return (
    <a href={href} className="group block rounded-3xl glass p-6 transition-all hover:-translate-y-0.5 hover:shadow-elevated">
      <div className={`grid h-12 w-12 place-items-center rounded-xl ring-1 transition-transform group-hover:scale-110 ${
        tint === "primary" ? "bg-primary/15 text-primary ring-primary/30" : "bg-accent/15 text-accent ring-accent/30"
      }`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
    </a>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`overflow-hidden rounded-2xl transition-all ${isOpen ? "glass-strong" : "glass"}`}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
              <span className="font-semibold">{f.q}</span>
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all ${isOpen ? "rotate-180 bg-primary text-primary-foreground" : "bg-white/5 text-muted-foreground"}`}>
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                  <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
