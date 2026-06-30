import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard, ClipboardList, Calendar, Users, Wallet, TrendingUp,
  Tags, Image, Star, Trophy, Megaphone, Settings, LogOut, Menu, X, Search,
} from "lucide-react";
import { Logo } from "@/components/shell/ui-bits";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { to: string; label: string; icon: typeof LayoutDashboard; end?: boolean };
const NAV: NavItem[] = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/bookings", label: "Bookings", icon: ClipboardList },
  { to: "/admin/calendar", label: "Calendar", icon: Calendar },
  { to: "/admin/customers", label: "Customers", icon: Users },
  { to: "/admin/payments", label: "Payments", icon: Wallet },
  { to: "/admin/revenue", label: "Revenue", icon: TrendingUp },
  { to: "/admin/pricing", label: "Pricing", icon: Tags },
  { to: "/admin/gallery", label: "Gallery", icon: Image },
  { to: "/admin/reviews", label: "Reviews", icon: Star },
  { to: "/admin/tournaments", label: "Tournaments", icon: Trophy },
  { to: "/admin/announcements", label: "Announcements", icon: Megaphone },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];


export function AdminShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-screen flex-col border-r border-white/5 bg-surface/40 backdrop-blur-xl lg:flex">
        <div className="px-5 pt-5">
          <Logo />
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-accent ring-1 ring-accent/30">
            Admin
          </div>
        </div>
        <nav className="mt-6 flex-1 space-y-0.5 overflow-y-auto px-3 pb-4">
          {NAV.map((item) => {
            const active = item.end ? path === item.to : path.startsWith(item.to);
            return (
              <Link key={item.to} to={item.to}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                  active ? "bg-accent/15 text-accent" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}>
                {active && <motion.span layoutId="admin-active" className="absolute inset-y-1.5 left-0 w-1 rounded-r-full bg-accent" />}
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/5 p-3">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
            <LogOut className="h-4 w-4" /> Logout
          </Link>
        </div>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden" onClick={() => setOpen(false)}>
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.aside initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ type: "spring", bounce: 0.05, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-y-0 left-0 flex w-72 flex-col bg-surface">
              <div className="flex items-center justify-between p-5">
                <Logo />
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full glass"><X className="h-4 w-4" /></button>
              </div>
              <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 pb-4">
                {NAV.map((item) => {
                  const active = item.end ? path === item.to : path.startsWith(item.to);
                  return (
                    <Link key={item.to} to={item.to} onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${active ? "bg-accent/15 text-accent" : "text-muted-foreground"}`}>
                      <item.icon className="h-4 w-4" /> {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-white/5 bg-background/70 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
          <button onClick={() => setOpen(true)} className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"><Menu className="h-5 w-5" /></button>
          <div className="hidden flex-1 items-center gap-2 rounded-full glass px-4 py-2 sm:flex lg:max-w-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search bookings, customers, payments..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60" />
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
            <div className="hidden items-center gap-2 rounded-full glass px-3 py-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Live</span>
            </div>
            <div className="flex items-center gap-2 rounded-full glass py-1 pl-1 pr-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-primary text-xs font-bold text-primary-foreground">G</span>
              <span className="hidden text-sm font-medium sm:inline">Game Onn HQ</span>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-10">{children}</main>
      </div>
    </div>
  );
}
