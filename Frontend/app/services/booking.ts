import {
  bookingSummary,
  bookingTransactions,
} from "../constants/bookingData";

import {
  BookingSummary,
  BookingTransaction,
} from "../types/booking";

/**
 * Fetch booking summary
 * Replace with API call later
 */
export const getBookingSummary = async (): Promise<BookingSummary> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return bookingSummary;
};

/**
 * Fetch all booking transactions
 * Replace with API call later
 */
export const getTransactions = async (): Promise<
  BookingTransaction[]
> => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return bookingTransactions;
};

/**
 * Download invoice
 */
export const downloadInvoice = async (
  invoiceUrl: string
) => {
  console.log("Downloading invoice:", invoiceUrl);

  // Later:
  // return api.get(invoiceUrl)
};

/**
 * Retry failed payment
 */
export const retryPayment = async (
  transactionId: string
) => {
  console.log("Retry payment:", transactionId);

  // Later:
  // return api.post(`/payments/retry/${transactionId}`)
};