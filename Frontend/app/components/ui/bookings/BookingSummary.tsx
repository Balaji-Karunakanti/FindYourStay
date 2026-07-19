import { View } from "react-native";

import SummaryCard from "./SummaryCard";
import { BookingSummary as BookingSummaryType } from "../../../types/booking";

type Props = {
  summary: BookingSummaryType;
};

export default function BookingSummary({ summary }: Props) {
  return (
    <View className="px-5 pt-5">
      <SummaryCard
        title="Total Paid"
        amount={summary.totalPaid}
        subtitle={`${summary.growthPercentage}% from last month`}
        subtitleColor="text-green-600"
        icon="trending-up-outline"
      />

      <SummaryCard
        title="Active Rent"
        amount={summary.activeRent}
        subtitle={`Due in ${summary.dueInDays} days`}
        subtitleColor="text-gray-600"
        icon="calendar-outline"
      />

      <SummaryCard
        title="Pending Amount"
        amount={summary.pendingAmount}
        subtitle={
          summary.pendingAmount === 0
            ? "All payments completed"
            : "Payment required"
        }
        subtitleColor={
          summary.pendingAmount === 0
            ? "text-green-600"
            : "text-red-600"
        }
        icon={
          summary.pendingAmount === 0
            ? "checkmark-circle-outline"
            : "alert-circle-outline"
        }
      />
    </View>
  );
}