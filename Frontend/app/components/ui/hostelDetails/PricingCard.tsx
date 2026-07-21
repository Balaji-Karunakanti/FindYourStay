import { View, Text } from "react-native";

import { Pricing } from "../../../types/hostelDetails";
import SectionTitle from "./SectionTitle";

interface PricingCardProps {
  pricing: Pricing;
}

export default function PricingCard({
  pricing,
}: PricingCardProps) {
  return (
    <View className="px-5 mt-8">
      <SectionTitle title="Pricing Details" />

      <View className="bg-white rounded-3xl p-5 border border-gray-100">

        {/* Monthly Rent */}
        <View className="flex-row justify-between items-center py-3">
          <Text className="text-gray-600">
            Monthly Rent
          </Text>

          <Text className="text-lg font-bold text-blue-600">
            ₹{pricing.monthlyRent.toLocaleString()}
          </Text>
        </View>

        <View className="h-px bg-gray-100" />

        {/* Deposit */}
        <View className="flex-row justify-between items-center py-3">
          <Text className="text-gray-600">
            Security Deposit
          </Text>

          <Text className="font-semibold text-gray-900">
            ₹{pricing.deposit.toLocaleString()}
          </Text>
        </View>

        <View className="h-px bg-gray-100" />

        {/* Electricity */}
        <View className="flex-row justify-between items-center py-3">
          <Text className="text-gray-600">
            Electricity
          </Text>

          <Text className="font-semibold text-gray-900">
            {pricing.electricity}
          </Text>
        </View>

        <View className="h-px bg-gray-100" />

        {/* Maintenance */}
        <View className="flex-row justify-between items-center py-3">
          <Text className="text-gray-600">
            Maintenance
          </Text>

          <Text className="font-semibold text-green-600">
            {pricing.maintenance}
          </Text>
        </View>

        <View className="h-px bg-gray-100" />

        {/* Refund Policy */}
        <View className="pt-4">
          <Text className="text-base font-semibold text-gray-900 mb-2">
            Refund Policy
          </Text>

          <Text className="text-gray-600 leading-6">
            {pricing.refundPolicy}
          </Text>
        </View>

      </View>
    </View>
  );
}