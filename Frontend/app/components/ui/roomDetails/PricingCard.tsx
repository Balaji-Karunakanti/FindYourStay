import { View } from "react-native";
import InfoRow from "./InfoRow";

interface PricingCardProps {
  rent: number;
  deposit: number;
  electricity: string;
  maintenance: string;
}

export default function PricingCard({
  rent,
  deposit,
  electricity,
  maintenance,
}: PricingCardProps) {
  return (
    <View className="mx-4 rounded-2xl border border-gray-200 bg-white p-5">
      <InfoRow
        label="Monthly Rent"
        value={`₹${rent.toLocaleString()}/month`}
        highlight
      />

      <InfoRow
        label="Security Deposit"
        value={`₹${deposit.toLocaleString()}`}
      />

      <InfoRow
        label="Electricity Charges"
        value={electricity}
      />

      <InfoRow
        label="Maintenance"
        value={maintenance}
        border={false}
      />
    </View>
  );
}