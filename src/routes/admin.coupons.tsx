import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus, Search, Filter, TicketPercent, Calendar, Users, TrendingUp,
  IndianRupee, Edit, Copy, Power, Trash2, X, ChevronDown, AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";
import { PageHeader, Reveal, RippleButton, StatusPill } from "@/components/shell/ui-bits";
import {
  getCoupons, getCouponStats, createCoupon, updateCoupon, deleteCoupon,
  duplicateCoupon, toggleCouponStatus,
} from "@/lib/coupon-service";
import { SPORTS, type Coupon, type CouponDiscountType, type CouponStatus, type Sport } from "@/lib/mock-data";

export const Route = createFileRoute("/admin/coupons")({
  head: () => ({ meta: [{ title: "Coupons — Admin" }] }),
  component: AdminCoupons,
});

/* ─── Main component ─── */
function AdminCoupons() {
  const [q, setQ] = useState("");
  const [coupons, setCoupons] = useState(getCoupons);
  const [stats, setStats] = useState(getCouponStats);
  const [modalOpen, setModalOpen] = useState(false);
  const [editCoupon, setEditCoupon] = useState<Coupon | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const refresh = () => { setCoupons(getCoupons()); setStats(getCouponStats()); };

  const list = useMemo(
    () => coupons.filter((c) => !q || `${c.code} ${c.description ?? ""}`.toLowerCase().includes(q.toLowerCase())),
    [coupons, q],
  );

  function handleDuplicate(code: string) {
    try {
      const dup = duplicateCoupon(code);
      refresh();
      toast.success("Coupon duplicated", { description: `${dup.code} created.` });
    } catch (e: unknown) {
      toast.error("Duplicate failed", { description: (e as Error).message });
    }
  }

  function handleToggle(code: string) {
    try {
      const c = toggleCouponStatus(code);
      refresh();
      toast.success(`Coupon ${c.status === "active" ? "activated" : "deactivated"}`, { description: c.code });
    } catch (e: unknown) {
      toast.error("Toggle failed", { description: (e as Error).message });
    }
  }

  function handleDelete() {
    if (!deleteTarget) return;
    deleteCoupon(deleteTarget);
    refresh();
    toast.success("Coupon deleted", { description: deleteTarget });
    setDeleteTarget(null);
  }

  function openEdit(c: Coupon) {
    setEditCoupon(c);
    setModalOpen(true);
  }

  function openCreate() {
    setEditCoupon(null);
    setModalOpen(true);
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Coupon Management"
        subtitle="Create, manage and monitor promotional coupons."
        action={<RippleButton variant="primary" size="sm" onClick={openCreate}><Plus className="h-4 w-4" /> Create Coupon</RippleButton>}
      />

      {/* KPI summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Total Coupons" value={String(stats.totalCoupons)} icon={TicketPercent} tint="primary" />
        <Kpi label="Active Coupons" value={String(stats.activeCoupons)} icon={TrendingUp} tint="accent" />
        <Kpi label="Expired Coupons" value={String(stats.expiredCoupons)} icon={Calendar} tint="warn" />
        <Kpi label="Total Redemptions" value={String(stats.totalRedemptions)} icon={Users} tint="primary" />
      </div>

      {/* Search + Filter */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-full glass px-4 py-2 sm:max-w-md">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search coupons..." className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60" />
        </div>
        <button className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"><Filter className="h-3.5 w-3.5" /> Filter</button>
      </div>

      {/* Coupon table */}
      <Reveal>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          <table className="hidden w-full text-sm md:table">
            <thead className="bg-white/[0.02] text-left">
              <tr className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3">Coupon Code</th>
                <th className="px-5 py-3">Discount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Expiry</th>
                <th className="px-5 py-3">Usage</th>
                <th className="px-5 py-3">Created</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {list.map((c) => (
                <tr key={c.code} className="hover:bg-white/[0.02]">
                  <td className="px-5 py-4">
                    <Link to="/admin/coupons/$code" params={{ code: c.code }} className="font-mono text-sm font-bold text-accent hover:underline">
                      {c.code}
                    </Link>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-semibold">{c.discountType === "percentage" ? `${c.discountValue}%` : `₹${c.discountValue}`}</span>
                    <span className="ml-1 text-xs text-muted-foreground">{c.discountType === "percentage" ? "off" : "flat"}</span>
                  </td>
                  <td className="px-5 py-4"><StatusPill status={c.status} /></td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {c.expiryType === "unlimited" ? "Never" : c.expiryDate ?? "—"}
                  </td>
                  <td className="px-5 py-4 font-mono tabular-nums">
                    <span className="font-bold">{c.usedCount}</span>
                    <span className="text-muted-foreground">/{c.maxUses === "unlimited" ? "∞" : c.maxUses}</span>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{c.createdDate}</td>
                  <td className="px-5 py-4 text-right">
                    <div className="inline-flex gap-1">
                      <IconBtn label="Edit" icon={Edit} onClick={() => openEdit(c)} />
                      <IconBtn label="Duplicate" icon={Copy} onClick={() => handleDuplicate(c.code)} />
                      <IconBtn label={c.status === "active" ? "Deactivate" : "Activate"} icon={Power} onClick={() => handleToggle(c.code)} />
                      <IconBtn label="Delete" icon={Trash2} onClick={() => setDeleteTarget(c.code)} danger />
                    </div>
                  </td>
                </tr>
              ))}
              {list.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-12 text-center">
                    <TicketPercent className="mx-auto h-8 w-8 text-muted-foreground/40" />
                    <div className="mt-2 text-sm text-muted-foreground">No coupons found</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Mobile list */}
          <ul className="divide-y divide-white/5 md:hidden">
            {list.map((c) => (
              <li key={c.code} className="space-y-2 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Link to="/admin/coupons/$code" params={{ code: c.code }} className="font-mono text-sm font-bold text-accent hover:underline">
                      {c.code}
                    </Link>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {c.discountType === "percentage" ? `${c.discountValue}% off` : `₹${c.discountValue} flat`}
                    </div>
                  </div>
                  <div className="text-right">
                    <StatusPill status={c.status} />
                    <div className="mt-1 font-mono text-xs tabular-nums">{c.usedCount}/{c.maxUses === "unlimited" ? "∞" : c.maxUses} used</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <IconBtn label="Edit" icon={Edit} onClick={() => openEdit(c)} />
                  <IconBtn label="Duplicate" icon={Copy} onClick={() => handleDuplicate(c.code)} />
                  <IconBtn label="Toggle" icon={Power} onClick={() => handleToggle(c.code)} />
                  <IconBtn label="Delete" icon={Trash2} onClick={() => setDeleteTarget(c.code)} danger />
                </div>
              </li>
            ))}
            {list.length === 0 && (
              <li className="p-8 text-center">
                <TicketPercent className="mx-auto h-8 w-8 text-muted-foreground/40" />
                <div className="mt-2 text-sm text-muted-foreground">No coupons found</div>
              </li>
            )}
          </ul>
        </div>
      </Reveal>

      {/* Create / Edit modal */}
      <AnimatePresence>
        {modalOpen && (
          <CouponModal
            coupon={editCoupon}
            onClose={() => { setModalOpen(false); setEditCoupon(null); }}
            onSave={refresh}
          />
        )}
      </AnimatePresence>

      {/* Delete confirmation dialog */}
      <AnimatePresence>
        {deleteTarget && (
          <DeleteDialog
            code={deleteTarget}
            onClose={() => setDeleteTarget(null)}
            onConfirm={handleDelete}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── KPI card (same pattern as admin.index.tsx) ─── */
function Kpi({ label, value, icon: Icon, tint }: { label: string; value: string; icon: typeof TicketPercent; tint: "primary" | "accent" | "warn" }) {
  const tints = {
    primary: { grad: "from-primary/15 to-transparent", icon: "text-primary", ring: "ring-primary/20" },
    accent: { grad: "from-accent/15 to-transparent", icon: "text-accent", ring: "ring-accent/20" },
    warn: { grad: "from-amber-400/15 to-transparent", icon: "text-amber-400", ring: "ring-amber-400/20" },
  }[tint];

  return (
    <Reveal>
      <div className={`relative overflow-hidden rounded-3xl glass p-5 ring-1 ${tints.ring}`}>
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${tints.grad}`} />
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
          <Icon className={`h-4 w-4 ${tints.icon}`} />
        </div>
        <div className="mt-3 font-display text-3xl font-bold tabular-nums">{value}</div>
      </div>
    </Reveal>
  );
}

/* ─── Icon button (same pattern as admin.bookings.tsx) ─── */
function IconBtn({ icon: Icon, label, danger, onClick }: { icon: typeof Edit; label: string; danger?: boolean; onClick?: () => void }) {
  return (
    <button title={label} onClick={onClick} className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${danger ? "text-destructive hover:bg-destructive/10" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"}`}>
      <Icon className="h-3.5 w-3.5" />
    </button>
  );
}

/* ─── Create / Edit Modal ─── */
function CouponModal({ coupon, onClose, onSave }: { coupon: Coupon | null; onClose: () => void; onSave: () => void }) {
  const isEdit = !!coupon;
  const [code, setCode] = useState(coupon?.code ?? "");
  const [discountType, setDiscountType] = useState<CouponDiscountType>(coupon?.discountType ?? "percentage");
  const [discountValue, setDiscountValue] = useState(coupon?.discountValue ?? 10);
  const [maxDiscount, setMaxDiscount] = useState(coupon?.maxDiscount ?? 0);
  const [minBooking, setMinBooking] = useState(coupon?.minBooking ?? 0);
  const [expiryType, setExpiryType] = useState<"unlimited" | "date">(coupon?.expiryType ?? "unlimited");
  const [expiryDate, setExpiryDate] = useState(coupon?.expiryDate ?? "");
  const [maxUsesType, setMaxUsesType] = useState<"unlimited" | "custom">(coupon?.maxUses === "unlimited" ? "unlimited" : "custom");
  const [maxUsesNum, setMaxUsesNum] = useState(typeof coupon?.maxUses === "number" ? coupon.maxUses : 100);
  const [perUserLimit, setPerUserLimit] = useState(coupon?.perUserLimit ?? 0);
  const [applicableSport, setApplicableSport] = useState<"All Sports" | Sport>(coupon?.applicableSport ?? "All Sports");
  const [status, setStatus] = useState<CouponStatus>(coupon?.status ?? "active");
  const [description, setDescription] = useState(coupon?.description ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const data = {
        code: code.toUpperCase().trim(),
        discountType,
        discountValue,
        maxDiscount: discountType === "percentage" && maxDiscount > 0 ? maxDiscount : undefined,
        minBooking: minBooking > 0 ? minBooking : undefined,
        expiryType,
        expiryDate: expiryType === "date" ? expiryDate : undefined,
        maxUses: maxUsesType === "unlimited" ? ("unlimited" as const) : maxUsesNum,
        perUserLimit: perUserLimit > 0 ? perUserLimit : undefined,
        applicableSport,
        status,
        description: description.trim() || undefined,
      };

      if (isEdit) {
        updateCoupon(coupon!.code, data);
        toast.success("Coupon updated", { description: data.code });
      } else {
        createCoupon(data);
        toast.success("Coupon created", { description: data.code });
      }
      onSave();
      onClose();
    } catch (err: unknown) {
      toast.error(isEdit ? "Update failed" : "Creation failed", { description: (err as Error).message });
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 backdrop-blur-md sm:items-center"
      onClick={onClose}>
      <motion.div
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-surface shadow-elevated ring-1 ring-white/10 sm:rounded-3xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">
          <div>
            <h3 className="font-display text-lg font-bold">{isEdit ? "Edit Coupon" : "Create Coupon"}</h3>
            <p className="text-xs text-muted-foreground">{isEdit ? `Editing ${coupon!.code}` : "Fill in the details below."}</p>
          </div>
          <button onClick={onClose} className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/5"><X className="h-4 w-4" /></button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-h-[70vh] space-y-4 overflow-y-auto px-5 py-5">
          {/* Code */}
          <Field label="Coupon Code">
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="e.g. WELCOME10" required disabled={isEdit}
              className="w-full rounded-xl bg-background px-3 py-2.5 font-mono text-sm uppercase outline-none ring-1 ring-white/10 focus:ring-primary/50 disabled:opacity-50" />
          </Field>

          {/* Discount Type + Value */}
          <div className="grid grid-cols-2 gap-3">
            <Field label="Discount Type">
              <div className="relative">
                <select value={discountType} onChange={(e) => setDiscountType(e.target.value as CouponDiscountType)}
                  className="w-full appearance-none rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50">
                  <option value="percentage">Percentage</option>
                  <option value="flat">Flat Amount</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </Field>
            <Field label={discountType === "percentage" ? "Discount (%)" : "Discount (₹)"}>
              <input type="number" value={discountValue} onChange={(e) => setDiscountValue(+e.target.value)} min={1} required
                className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50" />
            </Field>
          </div>

          {/* Max Discount (percentage only) */}
          {discountType === "percentage" && (
            <Field label="Maximum Discount (₹)" hint="Optional cap on discount amount">
              <input type="number" value={maxDiscount || ""} onChange={(e) => setMaxDiscount(+e.target.value)} min={0} placeholder="e.g. 300"
                className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50" />
            </Field>
          )}

          {/* Min Booking */}
          <Field label="Minimum Booking Amount (₹)" hint="Optional">
            <input type="number" value={minBooking || ""} onChange={(e) => setMinBooking(+e.target.value)} min={0} placeholder="e.g. 800"
              className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50" />
          </Field>

          {/* Expiry Type */}
          <Field label="Expiry Type">
            <div className="flex gap-3">
              <RadioPill checked={expiryType === "date"} onChange={() => setExpiryType("date")}>Limited</RadioPill>
              <RadioPill checked={expiryType === "unlimited"} onChange={() => setExpiryType("unlimited")}>Unlimited</RadioPill>
            </div>
          </Field>
          {expiryType === "date" && (
            <Field label="Expiry Date">
              <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required
                className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50" />
            </Field>
          )}

          {/* Max Uses */}
          <Field label="Maximum Uses">
            <div className="flex gap-3">
              <RadioPill checked={maxUsesType === "unlimited"} onChange={() => setMaxUsesType("unlimited")}>Unlimited</RadioPill>
              <RadioPill checked={maxUsesType === "custom"} onChange={() => setMaxUsesType("custom")}>Custom</RadioPill>
            </div>
          </Field>
          {maxUsesType === "custom" && (
            <input type="number" value={maxUsesNum} onChange={(e) => setMaxUsesNum(+e.target.value)} min={1} required
              className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50" />
          )}

          {/* Per User Limit */}
          <Field label="Per User Limit" hint="Optional — 0 means no limit">
            <input type="number" value={perUserLimit || ""} onChange={(e) => setPerUserLimit(+e.target.value)} min={0} placeholder="e.g. 1"
              className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50" />
          </Field>

          {/* Applicable Sport */}
          <Field label="Applicable Sport">
            <div className="relative">
              <select value={applicableSport} onChange={(e) => setApplicableSport(e.target.value as "All Sports" | Sport)}
                className="w-full appearance-none rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50">
                <option>All Sports</option>
                {SPORTS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </Field>

          {/* Status Toggle */}
          <Field label="Status">
            <button type="button" onClick={() => setStatus(status === "active" ? "inactive" : "active")}
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${status === "active" ? "bg-primary" : "bg-white/10"}`}>
              <span className={`inline-block h-5 w-5 rounded-full bg-white shadow-md transition-transform ${status === "active" ? "translate-x-6" : "translate-x-1"}`} />
            </button>
            <span className="ml-2 text-sm">{status === "active" ? "Active" : "Inactive"}</span>
          </Field>

          {/* Description */}
          <Field label="Description" hint="Optional admin notes">
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} placeholder="Internal notes about this coupon..."
              className="w-full rounded-xl bg-background px-3 py-2.5 text-sm outline-none ring-1 ring-white/10 focus:ring-primary/50 resize-none" />
          </Field>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <RippleButton type="submit" variant="primary" className="flex-1">{isEdit ? "Save Changes" : "Create Coupon"}</RippleButton>
            <RippleButton type="button" variant="ghost" onClick={onClose}>Cancel</RippleButton>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

/* ─── Delete confirmation dialog ─── */
function DeleteDialog({ code, onClose, onConfirm }: { code: string; onClose: () => void; onConfirm: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 backdrop-blur-md"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-3xl bg-surface p-6 shadow-elevated ring-1 ring-white/10">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-destructive/15 text-destructive">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-lg font-bold">Delete coupon?</h3>
            <p className="text-xs text-muted-foreground">This action cannot be undone.</p>
          </div>
        </div>
        <div className="mt-2 rounded-xl bg-background/40 px-3 py-2 font-mono text-sm font-bold ring-1 ring-white/5">{code}</div>
        <div className="mt-5 flex gap-2">
          <RippleButton variant="danger" className="flex-1" onClick={onConfirm}><Trash2 className="h-4 w-4" /> Delete</RippleButton>
          <RippleButton variant="ghost" onClick={onClose}>Cancel</RippleButton>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Form helpers ─── */
function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      {hint && <span className="ml-2 text-[10px] text-muted-foreground/60">{hint}</span>}
      <div className="mt-1">{children}</div>
    </div>
  );
}

function RadioPill({ checked, onChange, children }: { checked: boolean; onChange: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onChange}
      className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${checked ? "bg-primary/15 text-primary ring-1 ring-primary/30" : "glass text-muted-foreground hover:bg-white/5"}`}>
      {children}
    </button>
  );
}
