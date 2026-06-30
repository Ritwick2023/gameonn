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
