import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { BookingTransaction } from "../../../types/booking";
import StatusBadge from "./StatusBadge";

type Props = {
  transaction: BookingTransaction;
  onInvoicePress?: (transaction: BookingTransaction) => void;
  onRetryPress?: (transaction: BookingTransaction) => void;
};

export default function TransactionCard({
  transaction,
  onInvoicePress,
  onRetryPress,
}: Props) {
  return (
    <View className="mb-5 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <View className="flex-row">
        <Image
          source={transaction.hostelImage}
          className="h-20 w-20 rounded-2xl"
          resizeMode="cover"
        />

        <View className="ml-4 flex-1 justify-between">
          <View>
            <Text
              className="text-lg font-semibold text-gray-900"
              numberOfLines={1}
            >
              {transaction.hostelName}
            </Text>

            <Text className="mt-1 text-sm text-gray-500">
              {transaction.date}
            </Text>
          </View>

          <StatusBadge status={transaction.status} />
        </View>
      </View>

      {/* Divider */}
      <View className="my-5 h-px bg-gray-200" />

      {/* Payment Details */}
      <View className="space-y-3">
        <DetailRow
          label="Amount"
          value={`₹${transaction.amount}`}
          valueClass="font-semibold text-[#1B2E7B]"
        />

        <DetailRow
          label="Payment Method"
          value={
            transaction.cardNumber
              ? `${transaction.paymentMethod} •••• ${transaction.cardNumber}`
              : transaction.paymentMethod
          }
        />

        <DetailRow
          label="Transaction ID"
          value={transaction.transactionId}
        />
      </View>

      {/* Actions */}
      <View className="mt-6 flex-row justify-end">
        {transaction.status === "FAILED" ? (
          <TouchableOpacity
            onPress={() => onRetryPress?.(transaction)}
            className="rounded-xl bg-red-500 px-5 py-3"
          >
            <Text className="font-semibold text-white">
              Retry Payment
            </Text>
          </TouchableOpacity>
        ) : (
          transaction.invoiceUrl && (
            <TouchableOpacity
              onPress={() => onInvoicePress?.(transaction)}
              className="flex-row items-center rounded-xl border border-[#1B2E7B] px-5 py-3"
            >
              <Ionicons
                name="document-text-outline"
                size={18}
                color="#1B2E7B"
              />

              <Text className="ml-2 font-semibold text-[#1B2E7B]">
                Invoice
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

type DetailRowProps = {
  label: string;
  value: string;
  valueClass?: string;
};

function DetailRow({
  label,
  value,
  valueClass = "text-gray-800",
}: DetailRowProps) {
  return (
    <View className="flex-row justify-between">
      <Text className="text-gray-500">
        {label}
      </Text>

      <Text className={valueClass}>
        {value}
      </Text>
    </View>
  );
}