import { BookingSummary, BookingTransaction } from "../types/booking";
import { IMAGES } from "./images";

export const bookingSummary: BookingSummary = {
  totalPaid: 4250,
  activeRent: 450,
  pendingAmount: 0,
  dueInDays: 18,
  growthPercentage: 12,
};

export const bookingTransactions: BookingTransaction[] = [
  {
    id: "1",
    hostelName: "The Heritage Co-Living",
    hostelImage: IMAGES.hostel1,
    amount: 450,
    paymentMethod: "Visa",
    cardNumber: "4242",
    transactionId: "829104",
    date: "2023-10-12",
    status: "SUCCESS",
    invoiceUrl: "https://example.com/invoice/1",
  },
  {
    id: "2",
    hostelName: "Urban Nest Hostel",
    hostelImage: IMAGES.hostel2,
    amount: 380,
    paymentMethod: "Apple Pay",
    transactionId: "718290",
    date: "2023-09-10",
    status: "SUCCESS",
    invoiceUrl: "https://example.com/invoice/2",
  },
  {
    id: "3",
    hostelName: "Skyline Lofts",
    hostelImage: IMAGES.hostel3,
    amount: 520,
    paymentMethod: "Bank Transfer",
    transactionId: "609121",
    date: "2023-08-15",
    status: "PENDING",
  },
  {
    id: "4",
    hostelName: "Lakeside Residency",
    hostelImage: IMAGES.hostel4,
    amount: 450,
    paymentMethod: "Mastercard",
    cardNumber: "1102",
    transactionId: "554210",
    date: "2023-08-02",
    status: "FAILED",
  },
];