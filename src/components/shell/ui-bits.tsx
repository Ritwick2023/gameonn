import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { type ReactNode, type ButtonHTMLAttributes, useState } from "react";

/* ─── RippleButton ─── */
export function RippleButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-13 px-7 text-base py-3.5",
  };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-glow",
    ghost: "glass text-foreground hover:bg-white/10",
    outline: "border border-white/15 text-foreground hover:bg-white/5",
    danger: "bg-destructive/90 text-destructive-foreground hover:bg-destructive",
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
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none ${sizes[size]} ${variants[variant]} ${className}`}
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

/* ─── Section eyebrow ─── */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{children}</span>
    </div>
  );
}

/* ─── Reveal wrapper ─── */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Logo ─── */
export function Logo({ to = "/", compact = false }: { to?: string; compact?: boolean }) {
  return (
    <Link to={to} className="flex items-center gap-2.5">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight">
            Game<span className="text-primary"> Onn</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Wardha
          </span>
        </div>
      )}
    </Link>
  );
}

/* ─── Status pill ─── */
export function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Paid: "bg-primary/15 text-primary ring-primary/30",
    Pending: "bg-amber-400/15 text-amber-400 ring-amber-400/30",
    Refunded: "bg-muted text-muted-foreground ring-white/10",
    upcoming: "bg-accent/15 text-accent ring-accent/30",
    completed: "bg-primary/15 text-primary ring-primary/30",
    cancelled: "bg-destructive/15 text-destructive ring-destructive/30",
    Available: "bg-primary/15 text-primary ring-primary/30",
    Booked: "bg-muted text-muted-foreground ring-white/10",
    Approved: "bg-primary/15 text-primary ring-primary/30",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ring-1 ${map[status] ?? "bg-white/5 text-muted-foreground ring-white/10"}`}>
      {status}
    </span>
  );
}

/* ─── Page header for inner pages ─── */
export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h1 className="truncate font-display text-2xl font-bold sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}
