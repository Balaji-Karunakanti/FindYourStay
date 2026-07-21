import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SuccessHeader() {
  return (
    <View className="items-center px-6 pt-8 pb-10">
      {/* Success Icon */}
      <View className="h-24 w-24 items-center justify-center rounded-full bg-teal-200">
        <Ionicons
          name="checkmark-circle"
          size={54}
          color="#0F766E"
        />
      </View>

      {/* Heading */}
      <Text className="mt-8 text-4xl font-bold text-[#0A2472]">
        Booking Confirmed
      </Text>

      {/* Subtitle */}
      <Text className="mt-3 text-center text-base text-gray-500">
        Your room has been successfully reserved.
      </Text>
    </View>
  );
}