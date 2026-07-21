import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AvailabilityCardProps {
  availableFrom: string;
}

export default function AvailabilityCard({
  availableFrom,
}: AvailabilityCardProps) {
  return (
    <View className="mx-4 mt-5 flex-row items-center rounded-2xl border border-blue-100 bg-blue-50 p-4">
      {/* Calendar Icon */}
      <View className="mr-4 h-12 w-12 items-center justify-center rounded-xl bg-white">
        <Ionicons
          name="calendar-outline"
          size={24}
          color="#1E40AF"
        />
      </View>

      {/* Text */}
      <View className="flex-1">
        <Text className="text-sm text-gray-500">
          Earliest Available From
        </Text>

        <Text className="mt-1 text-base font-semibold text-[#1E3A8A]">
          {availableFrom}
        </Text>
      </View>
    </View>
  );
}