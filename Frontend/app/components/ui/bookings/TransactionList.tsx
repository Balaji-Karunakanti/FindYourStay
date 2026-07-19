import { View } from "react-native";

import TransactionCard from "./TransactionCard";
import EmptyBookings from "./EmptyBookings";
import { BookingTransaction } from "../../../types/booking";

type Props = {
  transactions: BookingTransaction[];
  onInvoicePress?: (transaction: BookingTransaction) => void;
  onRetryPress?: (transaction: BookingTransaction) => void;
};

export default function TransactionList({
  transactions,
  onInvoicePress,
  onRetryPress,
}: Props) {
  if (transactions.length === 0) {
    return <EmptyBookings />;
  }

  return (
    <View className="mt-5">
      {transactions.map((transaction) => (
        <TransactionCard
          key={transaction.id}
          transaction={transaction}
          onInvoicePress={onInvoicePress}
          onRetryPress={onRetryPress}
        />
      ))}
    </View>
  );
}