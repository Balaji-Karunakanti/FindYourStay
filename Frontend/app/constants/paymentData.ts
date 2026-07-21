import { PaymentMethod, PaymentSummaryData } from "../types/payment";

export const paymentMethods: PaymentMethod[] = [
  {
    id: "upi",
    title: "UPI",
    subtitle: "GPay, PhonePe, Paytm and more",
    icon: "phone-portrait-outline",
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa, Mastercard, Maestro, Amex",
    icon: "card-outline",
  },
  {
    id: "bank",
    title: "Net Banking",
    subtitle: "All major Indian banks supported",
    icon: "business-outline",
  },
  {
    id: "wallet",
    title: "Wallets",
    subtitle: "Amazon Pay, Mobikwik and others",
    icon: "wallet-outline",
  },
];

export const paymentSummary: PaymentSummaryData = {
  rent: 1200,
  deposit: 0,
  platformFee: 99,
  discount: 100,
  gst: 211,
};