import { ImageSourcePropType } from "react-native";

export type PaymentStatus = "SUCCESS" | "PENDING" | "FAILED";

export interface BookingSummary {
  totalPaid: number;
  activeRent: number;
  pendingAmount: number;
  dueInDays: number;
  growthPercentage: number;
}

export interface BookingTransaction {
  id: string;
  hostelName: string;
  hostelImage: ImageSourcePropType;
  amount: number;
  paymentMethod: string;
  cardNumber?: string;
  transactionId: string;
  date: string;
  status: PaymentStatus;
  invoiceUrl?: string;
}