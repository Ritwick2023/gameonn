// Centralized mock data + shared types for the Game Onn frontend prototype.

export type Sport = "Football" | "Cricket" | "Box Cricket" | "Pickleball";
export const SPORTS: Sport[] = ["Football", "Cricket", "Box Cricket", "Pickleball"];

export type BookingStatus = "upcoming" | "completed" | "cancelled";
export interface Booking {
  id: string;
  sport: Sport;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: BookingStatus;
  payment: "Paid" | "Pending" | "Refunded";
  court: string;
}

export const MOCK_BOOKINGS: Booking[] = [
  { id: "GO-8421", sport: "Football", date: "2026-07-04", time: "19:00", duration: 1, price: 1500, status: "upcoming", payment: "Paid", court: "Turf A" },
  { id: "GO-8418", sport: "Cricket", date: "2026-07-06", time: "16:00", duration: 2, price: 3600, status: "upcoming", payment: "Paid", court: "Pitch 1" },
  { id: "GO-8390", sport: "Pickleball", date: "2026-06-28", time: "07:00", duration: 1, price: 800, status: "completed", payment: "Paid", court: "Court 2" },
  { id: "GO-8375", sport: "Football", date: "2026-06-22", time: "20:00", duration: 1, price: 1500, status: "completed", payment: "Paid", court: "Turf A" },
  { id: "GO-8361", sport: "Box Cricket", date: "2026-06-18", time: "21:00", duration: 1, price: 1500, status: "completed", payment: "Paid", court: "Box 1" },
  { id: "GO-8302", sport: "Football", date: "2026-06-10", time: "18:00", duration: 1, price: 1500, status: "cancelled", payment: "Refunded", court: "Turf A" },
];

export const MOCK_NOTIFICATIONS = [
  { id: 1, type: "booking", title: "Booking confirmed", desc: "GO-8421 · Football · Sat 6 PM", time: "2h ago", unread: true },
  { id: 2, type: "offer", title: "Weekend Madness — 20% off", desc: "Use code GAMEON20 on weekend slots.", time: "1d ago", unread: true },
  { id: 3, type: "reminder", title: "Tomorrow's game", desc: "Don't forget — Cricket at 4 PM.", time: "1d ago", unread: false },
  { id: 4, type: "tournament", title: "WPL registrations open", desc: "Prize pool ₹25,000. Secure your spot.", time: "3d ago", unread: false },
  { id: 5, type: "maintenance", title: "Pitch 1 maintenance", desc: "Closed Mon 6–10 AM for re-turfing.", time: "5d ago", unread: false },
];

export const MOCK_PAYMENTS = [
  { id: "TXN-7791", bookingId: "GO-8421", amount: 1500, status: "Paid", date: "2026-06-29", method: "UPI" },
  { id: "TXN-7782", bookingId: "GO-8418", amount: 3600, status: "Paid", date: "2026-06-28", method: "Card" },
  { id: "TXN-7771", bookingId: "GO-8390", amount: 800, status: "Paid", date: "2026-06-27", method: "UPI" },
  { id: "TXN-7762", bookingId: "GO-8375", amount: 1500, status: "Paid", date: "2026-06-21", method: "UPI" },
  { id: "TXN-7755", bookingId: "GO-8302", amount: 1500, status: "Refunded", date: "2026-06-10", method: "UPI" },
];

export const MOCK_MATCHES = [
  { id: 1, name: "Wardha Premier League", date: "2026-07-12", time: "18:00", prize: 25000, slots: 16, joined: 11 },
  { id: 2, name: "Box Cricket Cup '26", date: "2026-07-20", time: "16:00", prize: 15000, slots: 12, joined: 8 },
  { id: 3, name: "Friday Night 5-a-side", date: "2026-07-04", time: "21:00", prize: 5000, slots: 10, joined: 9 },
  { id: 4, name: "Pickleball Open", date: "2026-08-02", time: "10:00", prize: 8000, slots: 24, joined: 6 },
];

export const MOCK_CUSTOMERS = [
  { id: "U001", name: "Aarav Deshmukh", phone: "+91 98765 43210", bookings: 28, spent: 38400, frequent: true },
  { id: "U002", name: "Priya Kulkarni", phone: "+91 98765 11221", bookings: 14, spent: 19200, frequent: true },
  { id: "U003", name: "Rohit Pawar", phone: "+91 98765 33445", bookings: 42, spent: 58200, frequent: true },
  { id: "U004", name: "Sneha Joshi", phone: "+91 98765 55667", bookings: 6, spent: 8400, frequent: false },
  { id: "U005", name: "Vikram Singh", phone: "+91 98765 77889", bookings: 9, spent: 12600, frequent: false },
  { id: "U006", name: "Ananya Rao", phone: "+91 98765 99001", bookings: 3, spent: 4500, frequent: false },
];

export const ADMIN_STATS = {
  todayRevenue: 28400,
  todayBookings: 17,
  occupancy: 78,
  pendingPayments: 4,
  monthlyRevenue: 642300,
};

// Heatmap: 7 days x 17 hours (6 AM to 11 PM)
export const HEATMAP = Array.from({ length: 7 }, (_, d) =>
  Array.from({ length: 17 }, (_, h) => {
    const peak = h >= 12 && h <= 16;
    const weekend = d >= 5;
    const base = peak ? 0.7 : 0.3;
    return Math.min(1, base + (weekend ? 0.2 : 0) + Math.random() * 0.3);
  }),
);

// ── Coupon types & mock data ────────────────────────────────────────

export type CouponDiscountType = 'percentage' | 'flat';
export type CouponStatus = 'active' | 'inactive' | 'expired';

export interface Coupon {
  code: string;
  discountType: CouponDiscountType;
  discountValue: number;
  maxDiscount?: number;
  minBooking?: number;
  expiryType: 'unlimited' | 'date';
  expiryDate?: string;
  maxUses: number | 'unlimited';
  usedCount: number;
  perUserLimit?: number;
  applicableSport: 'All Sports' | Sport;
  status: CouponStatus;
  description?: string;
  createdDate: string;
  lastModified: string;
}

export interface CouponUsage {
  id: string;
  couponCode: string;
  customer: string;
  bookingId: string;
  bookingDate: string;
  discountApplied: string;
  amountSaved: number;
}

export const MOCK_COUPONS: Coupon[] = [
  {
    code: "WELCOME10",
    discountType: "percentage",
    discountValue: 10,
    maxDiscount: 300,
    minBooking: 500,
    expiryType: "unlimited",
    maxUses: "unlimited",
    usedCount: 45,
    applicableSport: "All Sports",
    status: "active",
    description: "Welcome offer — 10% off on your first booking!",
    createdDate: "2026-01-10",
    lastModified: "2026-06-15",
  },
  {
    code: "GAMEONN200",
    discountType: "flat",
    discountValue: 200,
    minBooking: 800,
    expiryType: "date",
    expiryDate: "2026-12-31",
    maxUses: 100,
    usedCount: 38,
    applicableSport: "All Sports",
    status: "active",
    description: "Flat ₹200 off on bookings above ₹800.",
    createdDate: "2026-02-01",
    lastModified: "2026-06-28",
  },
  {
    code: "WEEKEND25",
    discountType: "percentage",
    discountValue: 25,
    maxDiscount: 500,
    expiryType: "unlimited",
    maxUses: "unlimited",
    usedCount: 72,
    applicableSport: "All Sports",
    status: "active",
    description: "25% off on all weekend bookings.",
    createdDate: "2026-03-05",
    lastModified: "2026-07-01",
  },
  {
    code: "FOOTBALL15",
    discountType: "percentage",
    discountValue: 15,
    maxDiscount: 400,
    expiryType: "unlimited",
    maxUses: "unlimited",
    usedCount: 23,
    applicableSport: "Football",
    status: "active",
    description: "15% off on all Football bookings.",
    createdDate: "2026-04-12",
    lastModified: "2026-06-20",
  },
  {
    code: "SUMMER50",
    discountType: "percentage",
    discountValue: 50,
    maxDiscount: 750,
    minBooking: 1000,
    expiryType: "date",
    expiryDate: "2026-08-31",
    maxUses: 50,
    usedCount: 50,
    applicableSport: "All Sports",
    status: "expired",
    description: "Summer special — 50% off! Limited time offer.",
    createdDate: "2026-05-01",
    lastModified: "2026-07-10",
  },
  {
    code: "CRICKET10",
    discountType: "percentage",
    discountValue: 10,
    maxDiscount: 250,
    expiryType: "date",
    expiryDate: "2026-09-30",
    maxUses: 200,
    usedCount: 89,
    applicableSport: "Cricket",
    status: "active",
    description: "10% off on all Cricket bookings this season.",
    createdDate: "2026-03-20",
    lastModified: "2026-07-05",
  },
  {
    code: "NEWUSER30",
    discountType: "percentage",
    discountValue: 30,
    maxDiscount: 600,
    minBooking: 500,
    expiryType: "unlimited",
    maxUses: "unlimited",
    usedCount: 156,
    perUserLimit: 1,
    applicableSport: "All Sports",
    status: "active",
    description: "New user exclusive — 30% off on your first booking!",
    createdDate: "2026-01-01",
    lastModified: "2026-07-08",
  },
  {
    code: "FLAT500",
    discountType: "flat",
    discountValue: 500,
    minBooking: 2000,
    expiryType: "date",
    expiryDate: "2026-07-15",
    maxUses: 20,
    usedCount: 18,
    applicableSport: "All Sports",
    status: "inactive",
    description: "Flat ₹500 off on premium bookings above ₹2000.",
    createdDate: "2026-06-01",
    lastModified: "2026-07-11",
  },
];

export const MOCK_COUPON_USAGE: CouponUsage[] = [
  { id: "CU-001", couponCode: "WELCOME10", customer: "Aarav Deshmukh", bookingId: "GO-8421", bookingDate: "2026-07-04", discountApplied: "10%", amountSaved: 150 },
  { id: "CU-002", couponCode: "GAMEONN200", customer: "Priya Kulkarni", bookingId: "GO-8418", bookingDate: "2026-07-06", discountApplied: "₹200", amountSaved: 200 },
  { id: "CU-003", couponCode: "WEEKEND25", customer: "Rohit Pawar", bookingId: "GO-8390", bookingDate: "2026-06-28", discountApplied: "25%", amountSaved: 200 },
  { id: "CU-004", couponCode: "FOOTBALL15", customer: "Sneha Joshi", bookingId: "GO-8375", bookingDate: "2026-06-22", discountApplied: "15%", amountSaved: 225 },
  { id: "CU-005", couponCode: "NEWUSER30", customer: "Ananya Rao", bookingId: "GO-8361", bookingDate: "2026-06-18", discountApplied: "30%", amountSaved: 450 },
  { id: "CU-006", couponCode: "WELCOME10", customer: "Vikram Singh", bookingId: "GO-8501", bookingDate: "2026-07-08", discountApplied: "10%", amountSaved: 120 },
  { id: "CU-007", couponCode: "CRICKET10", customer: "Rohit Pawar", bookingId: "GO-8515", bookingDate: "2026-07-09", discountApplied: "10%", amountSaved: 180 },
  { id: "CU-008", couponCode: "SUMMER50", customer: "Aarav Deshmukh", bookingId: "GO-8302", bookingDate: "2026-06-10", discountApplied: "50%", amountSaved: 750 },
  { id: "CU-009", couponCode: "GAMEONN200", customer: "Sneha Joshi", bookingId: "GO-8530", bookingDate: "2026-07-10", discountApplied: "₹200", amountSaved: 200 },
  { id: "CU-010", couponCode: "FLAT500", customer: "Priya Kulkarni", bookingId: "GO-8545", bookingDate: "2026-06-30", discountApplied: "₹500", amountSaved: 500 },
  { id: "CU-011", couponCode: "WEEKEND25", customer: "Vikram Singh", bookingId: "GO-8560", bookingDate: "2026-07-05", discountApplied: "25%", amountSaved: 375 },
  { id: "CU-012", couponCode: "NEWUSER30", customer: "Ananya Rao", bookingId: "GO-8575", bookingDate: "2026-07-11", discountApplied: "30%", amountSaved: 270 },
];
