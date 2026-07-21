import { View, Text } from "react-native";

import PromoCode from "./PromoCode";

interface PaymentSummaryProps {
  rent: number;
  deposit: number;
  platformFee: number;
  discount: number;
  gst: number;
  promoCode: string;
  onPromoChange: (text: string) => void;
  onApplyPromo: () => void;
}

export default function PaymentSummary({
  rent,
  deposit,
  platformFee,
  discount,
  gst,
  promoCode,
  onPromoChange,
  onApplyPromo,
}: PaymentSummaryProps) {
  const total =
    rent +
    deposit +
    platformFee +
    gst -
    discount;

  const Row = ({
    label,
    value,
    valueColor = "#374151",
  }: {
    label: string;
    value: string;
    valueColor?: string;
  }) => (
    <View className="mb-4 flex-row items-center justify-between">
      <Text className="font-pregular text-base text-gray-600">
        {label}
      </Text>

      <Text
        className="font-psemibold text-base"
        style={{ color: valueColor }}
      >
        {value}
      </Text>
    </View>
  );

  return (
    <View className="mx-5 mt-6 mb-6 rounded-3xl bg-white p-5 shadow-sm">
      <Text className="mb-5 text-xl font-psemibold text-[#142C8E]">
        Payment Summary
      </Text>

      <Row
        label="Monthly Rent"
        value={`₹${rent}`}
      />

      <Row
        label="Security Deposit"
        value={`₹${deposit}`}
      />

      <Row
        label="Platform Fee"
        value={`₹${platformFee}`}
      />

      <Row
        label="Discount"
        value={`-₹${discount}`}
        valueColor="#16A34A"
      />

      <Row
        label="GST"
        value={`₹${gst}`}
      />

      <View className="my-2 border-t border-dashed border-gray-300" />

      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-lg font-pbold text-[#142C8E]">
          Total
        </Text>

        <Text className="text-xl font-pbold text-[#142C8E]">
          ₹{total}
        </Text>
      </View>

      <PromoCode
        value={promoCode}
        onChangeText={onPromoChange}
        onApply={onApplyPromo}
      />
    </View>
  );
}