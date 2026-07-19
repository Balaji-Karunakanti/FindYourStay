import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
} from "react-native";

import BookingHeader from "../components/ui/bookings/BookingHeader";
import BookingSummary from "../components/ui/bookings/BookingSummary";
import TransactionList from "../components/ui/bookings/TransactionList";

import {
  BookingSummary as BookingSummaryType,
  BookingTransaction,
} from "../types/booking";

import {
  getBookingSummary,
  getTransactions,
  downloadInvoice,
  retryPayment,
} from "../services/booking";

export default function BookingsScreen() {
  const [summary, setSummary] =
    useState<BookingSummaryType | null>(null);

  const [transactions, setTransactions] = useState<
    BookingTransaction[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const [summaryData, transactionData] =
        await Promise.all([
          getBookingSummary(),
          getTransactions(),
        ]);

      setSummary(summaryData);
      setTransactions(transactionData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !summary) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#F8F9FB]">
        <ActivityIndicator size="large" color="#1B2E7B" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className=" mt-12 flex-1 bg-[#F8F9FB]">
      <BookingHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <BookingSummary summary={summary} />

        <View className="mt-2 px-5">
          <Text className="text-2xl font-bold text-gray-900">
            Recent Transactions
          </Text>
        </View>

        <View className="px-5 pt-5">
          <TransactionList
            transactions={transactions}
            onInvoicePress={(transaction) => {
              if (transaction.invoiceUrl) {
                downloadInvoice(transaction.invoiceUrl);
              }
            }}
            onRetryPress={(transaction) => {
              retryPayment(transaction.id);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}