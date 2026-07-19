import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title?: string;
  message?: string;
};

export default function EmptyBookings({
  title = "No Bookings Yet",
  message = "Your payment history and bookings will appear here once you book a hostel.",
}: Props) {
  return (
    <View className="flex-1 items-center justify-center px-8 py-20">
      {/* Icon */}
      <View className="h-24 w-24 items-center justify-center rounded-full bg-blue-50">
        <Ionicons
          name="receipt-outline"
          size={42}
          color="#1B2E7B"
        />
      </View>

      {/* Title */}
      <Text className="mt-6 text-center text-2xl font-bold text-gray-900">
        {title}
      </Text>

      {/* Description */}
      <Text className="mt-3 text-center text-base leading-6 text-gray-500">
        {message}
      </Text>
    </View>
  );
}