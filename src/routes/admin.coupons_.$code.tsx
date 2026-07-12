import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  TicketPercent,
  Calendar,
  Users,
  IndianRupee,
  TrendingUp,
  BarChart3,
  Clock,
  Tag,
  Shield,
} from "lucide-react";
import {
  PageHeader,
  Reveal,
  StatusPill,
  RippleButton,
} from "@/components/shell/ui-bits";
import {
  getCouponByCode,
  getCouponUsage,
  getCouponAnalytics,
} from "@/lib/coupon-service";
import type { Coupon } from "@/lib/mock-data";
import type { CouponAnalytics } from "@/lib/coupon-service";
import type { CouponUsage } from "@/lib/mock-data";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/admin/coupons_/$code")({
  head: () => ({ meta: [{ title: "Coupon Details — Admin" }] }),
  component: CouponDetails,
});

function CouponDetails() {
  const { code } = Route.useParams();
  const [coupon, setCoupon] = useState<Coupon | undefined>(undefined);
  const [usage, setUsage] = useState<CouponUsage[]>([]);
  const [analytics, setAnalytics] = useState<CouponAnalytics | null>(null);

  useEffect(() => {
    setCoupon(getCouponByCode(code));
    setUsage(getCouponUsage(code));
    setAnalytics(getCouponAnalytics(code));
  }, [code]);

  if (!coupon) {
    return (
      <div className="space-y-6">
        <PageHeader
          title="Coupon not found"
          subtitle="The coupon you're looking for doesn't exist."
          action={
            <Link to="/admin/coupons">
              <RippleButton variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" /> Back to coupons
              </RippleButton>
            </Link>
          }
        />
        <Reveal>
          <div className="flex flex-col items-center justify-center rounded-3xl glass p-16 shadow-elevated">
            <TicketPercent className="h-12 w-12 text-muted-foreground/40" />
            <p className="mt-4 text-sm text-muted-foreground">
              No coupon found with code "{code}"
            </p>
          </div>
        </Reveal>
      </div>
    );
  }

  const discountLabel =
    coupon.discountType === "percentage"
      ? `${coupon.discountValue}% off`
      : `₹${coupon.discountValue} flat`;

  const expiryLabel =
    coupon.expiryType === "unlimited"
      ? "No expiry"
      : coupon.expiryDate
        ? new Date(coupon.expiryDate).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "—";

  return (
    <div className="space-y-6">
      {/* ── Header ── */}
      <PageHeader
        title={coupon.code}
        subtitle={coupon.description || "Coupon details & analytics"}
        action={
          <Link to="/admin/coupons">
            <RippleButton variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" /> Back
            </RippleButton>
          </Link>
        }
      />

      {/* ── Coupon Info Card ── */}
      <Reveal>
        <div className="rounded-3xl glass p-6 shadow-elevated">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <InfoItem icon={Tag} label="Discount" value={discountLabel} />
            <InfoItem
              icon={Shield}
              label="Status"
              value={<StatusPill status={coupon.status} />}
            />
            <InfoItem icon={Calendar} label="Expiry" value={expiryLabel} />
            <InfoItem
              icon={IndianRupee}
              label="Max Discount"
              value={
                coupon.maxDiscount
                  ? `₹${coupon.maxDiscount.toLocaleString("en-IN")}`
                  : "—"
              }
            />
            <InfoItem
              icon={IndianRupee}
              label="Min Booking"
              value={
                coupon.minBooking
                  ? `₹${coupon.minBooking.toLocaleString("en-IN")}`
                  : "—"
              }
            />
            <InfoItem
              icon={TicketPercent}
              label="Applicable Sport"
              value={coupon.applicableSport}
            />
            <InfoItem
              icon={Clock}
              label="Created"
              value={new Date(coupon.createdDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
            <InfoItem
              icon={Clock}
              label="Last Modified"
              value={new Date(coupon.lastModified).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
          </div>
        </div>
      </Reveal>

      {/* ── Analytics KPI Cards ── */}
      {analytics && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Kpi
            label="Total Uses"
            value={analytics.totalUses.toString()}
            icon={Users}
            tint="primary"
          />
          <Kpi
            label="Total Savings"
            value={`₹${analytics.totalSavings.toLocaleString("en-IN")}`}
            icon={IndianRupee}
            tint="accent"
          />
          <Kpi
            label="Revenue Generated"
            value={`₹${analytics.revenueGenerated.toLocaleString("en-IN")}`}
            icon={TrendingUp}
            tint="primary"
          />
          <Kpi
            label="Conversion Rate"
            value={`${analytics.conversionRate}%`}
            icon={BarChart3}
            tint="accent"
          />
        </div>
      )}

      {/* ── Usage History Table ── */}
      <Reveal>
        <div className="overflow-hidden rounded-3xl glass shadow-elevated">
          <div className="flex items-center justify-between px-5 py-4">
            <h3 className="font-display text-lg font-bold">
              Usage History
              <span className="ml-2 font-mono text-sm font-normal text-muted-foreground">
                ({usage.length})
              </span>
            </h3>
          </div>

          {usage.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Users className="h-10 w-10 text-muted-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">
                No usage history for this coupon yet.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <table className="hidden w-full text-sm md:table">
                <thead className="bg-white/[0.02] text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-5 py-3">Customer</th>
                    <th className="px-5 py-3">Booking ID</th>
                    <th className="px-5 py-3">Booking Date</th>
                    <th className="px-5 py-3">Discount Applied</th>
                    <th className="px-5 py-3 text-right">Amount Saved</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {usage.map((u) => (
                    <tr key={u.id} className="hover:bg-white/[0.02]">
                      <td className="px-5 py-4 font-semibold">{u.customer}</td>
                      <td className="px-5 py-4 font-mono text-xs text-muted-foreground">
                        {u.bookingId}
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        {new Date(u.bookingDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                          {u.discountApplied}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-right font-mono font-bold tabular-nums">
                        ₹{u.amountSaved.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mobile fallback */}
              <ul className="divide-y divide-white/5 md:hidden">
                {usage.map((u) => (
                  <li
                    key={u.id}
                    className="grid grid-cols-[1fr_auto] gap-3 p-4"
                  >
                    <div className="min-w-0">
                      <div className="font-semibold">{u.customer}</div>
                      <div className="text-xs text-muted-foreground">
                        {u.bookingId} ·{" "}
                        {new Date(u.bookingDate).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                        })}
                      </div>
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                          {u.discountApplied}
                        </span>
                      </div>
                    </div>
                    <div className="text-right font-mono text-base font-bold tabular-nums">
                      ₹{u.amountSaved.toLocaleString("en-IN")}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Reveal>
    </div>
  );
}

/* ─── Info item for the coupon details grid ─── */
function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Tag;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-background/40 p-3 ring-1 ring-white/5">
      <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <Icon className="h-3 w-3" />
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

/* ─── KPI card — same pattern as admin.index.tsx ─── */
function Kpi({
  label,
  value,
  icon: Icon,
  tint,
}: {
  label: string;
  value: string;
  icon: typeof IndianRupee;
  tint: "primary" | "accent";
}) {
  const tints = {
    primary: {
      grad: "from-primary/15 to-transparent",
      icon: "text-primary",
      ring: "ring-primary/20",
    },
    accent: {
      grad: "from-accent/15 to-transparent",
      icon: "text-accent",
      ring: "ring-accent/20",
    },
  }[tint];

  return (
    <Reveal>
      <div
        className={`relative overflow-hidden rounded-3xl glass p-5 ring-1 ${tints.ring}`}
      >
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${tints.grad}`} />
        <div className="flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </span>
          <Icon className={`h-4 w-4 ${tints.icon}`} />
        </div>
        <div className="mt-3 font-display text-3xl font-bold tabular-nums">
          {value}
        </div>
      </div>
    </Reveal>
  );
}
