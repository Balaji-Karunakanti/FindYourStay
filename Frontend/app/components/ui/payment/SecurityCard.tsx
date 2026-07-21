import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SecurityCard() {
  return (
    <View className="mx-5 mt-6 flex-row rounded-3xl bg-white p-5 shadow-sm">
      {/* Icon */}
      <View className="mr-4 h-14 w-14 items-center justify-center rounded-full bg-teal-100">
        <Ionicons
          name="shield-checkmark-outline"
          size={28}
          color="#0F766E"
        />
      </View>

      {/* Text */}
      <View className="flex-1">
        <Text className="text-lg font-psemibold text-[#142C8E]">
          Secure 256-bit SSL encrypted payment
        </Text>

        <Text className="mt-2 text-sm font-pregular leading-5 text-gray-500">
          Your transaction is protected. Trusted by 10M+ users globally.
        </Text>
      </View>
    </View>
  );
}