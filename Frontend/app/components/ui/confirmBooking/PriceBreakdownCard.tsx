import { View, Text } from "react-native";

interface PriceBreakdownCardProps {
  monthlyRent: number;
  securityDeposit: number;
  maintenanceFee: number;
  platformFee: number;
  total: number;
  currency?: string;
}

export default function PriceBreakdownCard({
  monthlyRent,
  securityDeposit,
  maintenanceFee,
  platformFee,
  total,
  currency = "₹",
}: PriceBreakdownCardProps) {
  const Row = ({
    label,
    value,
  }: {
    label: string;
    value: number;
  }) => (
    <View className="flex-row items-center justify-between py-3">
      <Text className="text-base text-gray-600">{label}</Text>

      <Text className="text-base font-semibold text-gray-900">
        {currency}
        {value.toLocaleString()}
      </Text>
    </View>
  );

  return (
    <View className="mx-5 mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Title */}
      <Text className="mb-5 text-2xl font-bold text-[#142B7B]">
        Price Breakdown
      </Text>

      {/* Charges */}
      <Row
        label="Monthly Rent"
        value={monthlyRent}
      />

      <Row
        label="Security Deposit"
        value={securityDeposit}
      />

      <Row
        label="Maintenance Fee"
        value={maintenanceFee}
      />

      <Row
        label="Platform Fee"
        value={platformFee}
      />

      {/* Divider */}
      <View className="my-4 h-[1px] bg-gray-200" />

      {/* Total */}
      <View className="rounded-xl bg-[#EEF4FF] p-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold text-[#142B7B]">
            Total Payable
          </Text>

          <Text className="text-2xl font-bold text-[#142B7B]">
            {currency}
            {total.toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
}