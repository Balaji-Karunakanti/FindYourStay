import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PaymentMethodCard from "./PaymentMethodCard";
import { paymentMethods } from "../../../constants/paymentData";

interface PaymentMethodsProps {
  selectedMethod: string;
  onSelectMethod: (id: string) => void;
}

export default function PaymentMethods({
  selectedMethod,
  onSelectMethod,
}: PaymentMethodsProps) {
  return (
    <View className="mx-5 mt-6 rounded-3xl bg-white p-5 shadow-sm">
      {/* Section Header */}
      <View className="mb-5 flex-row items-center">
        <Ionicons
          name="card-outline"
          size={22}
          color="#142C8E"
        />

        <Text className="ml-3 text-xl font-psemibold text-[#142C8E]">
          Select Payment Method
        </Text>
      </View>

      {/* Payment Options */}
      {paymentMethods.map((method) => (
        <PaymentMethodCard
          key={method.id}
          title={method.title}
          subtitle={method.subtitle}
          icon={method.icon}
          selected={selectedMethod === method.id}
          onPress={() => onSelectMethod(method.id)}
        />
      ))}
    </View>
  );
}