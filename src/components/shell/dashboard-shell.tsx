import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard, CalendarPlus, ClipboardList, Trophy, Wallet, Bell,
  User, LifeBuoy, LogOut, Menu, X, Search, Flame,
} from "lucide-react";
import { Logo } from "@/components/shell/ui-bits";
import { clearRole } from "@/lib/auth";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { to: string; label: string; icon: typeof LayoutDashboard; end?: boolean };
const NAV: NavItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/dashboard/book", label: "Book Slot", icon: CalendarPlus },
  { to: "/dashboard/bookings", label: "My Bookings", icon: ClipboardList },
  { to: "/dashboard/matches", label: "Upcoming Matches", icon: Trophy },
  { to: "/dashboard/payments", label: "Payment History", icon: Wallet },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/profile", label: "Profile", icon: User },
  { to: "/dashboard/support", label: "Support", icon: LifeBuoy },
];


export function DashboardShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const logout = () => { clearRole(); navigate({ to: "/login", replace: true }); };

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[260px_minmax(0,1fr)]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen flex-col border-r border-white/5 bg-surface/40 backdrop-blur-xl lg:flex">
        <div className="px-6 pt-6"><Logo /></div>
        <nav className="mt-8 flex-1 space-y-1 px-3">
          {NAV.map((item) => {
            const active = item.end ? path === item.to : path.startsWith(item.to);
            return (
              <Link
                key={item.to} to={item.to}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {active && <motion.span layoutId="dash-active" className="absolute inset-y-1.5 left-0 w-1 rounded-r-full bg-primary" />}
                <item.icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-3">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground">
            <LogOut className="h-4 w-4" /> Logout
          </Link>
        </div>
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: "spring", bounce: 0.05, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute inset-y-0 left-0 flex w-72 flex-col border-r border-white/10 bg-surface"
            >
              <div className="flex items-center justify-between p-5">
                <Logo />
                <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full glass">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="mt-2 flex-1 space-y-1 px-3">
                {NAV.map((item) => {
                  const active = item.end ? path === item.to : path.startsWith(item.to);
                  return (
                    <Link key={item.to} to={item.to} onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${active ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}>
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
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-white/5 bg-background/70 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
          <button onClick={() => setOpen(true)} aria-label="Menu" className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden flex-1 items-center gap-2 rounded-full glass px-4 py-2 sm:flex lg:max-w-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input placeholder="Search bookings, matches, sports..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60" />
            <kbd className="hidden rounded bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline">⌘K</kbd>
          </div>
          <div className="flex flex-1 items-center justify-end gap-2 sm:flex-none">
            <Link to="/dashboard/notifications" className="relative grid h-10 w-10 place-items-center rounded-full glass hover:bg-white/10">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary" />
            </Link>
            <Link to="/dashboard/profile" className="flex items-center gap-2 rounded-full glass py-1 pl-1 pr-3 hover:bg-white/10">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground">A</span>
              <span className="hidden text-sm font-medium sm:inline">Aarav</span>
            </Link>
          </div>
        </header>

        <main className="flex-1 px-4 pb-32 pt-6 sm:px-6 lg:px-10 lg:pb-12">
          {children}
        </main>

        {/* Mobile bottom nav */}
        <nav className="fixed inset-x-3 bottom-3 z-30 flex items-center justify-around rounded-2xl glass-strong p-2 shadow-elevated lg:hidden">
          {[NAV[0], NAV[1], NAV[2], NAV[5], NAV[6]].map((item) => {
            const active = item.end ? path === item.to : path.startsWith(item.to);
            return (
              <Link key={item.to} to={item.to}
                className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-2 text-[10px] font-medium ${active ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}>
                <item.icon className="h-4 w-4" />
                {item.label.split(" ")[0]}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export { Flame };
