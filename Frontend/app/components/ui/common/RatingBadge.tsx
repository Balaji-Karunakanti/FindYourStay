import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RatingBadgeProps {
  rating: number;
}

export default function RatingBadge({
  rating,
}: RatingBadgeProps) {
  return (
    <View className="flex-row items-center bg-white px-2 py-1 rounded-full">
      <Ionicons
        name="star"
        size={14}
        color="#FBBF24"
      />

      <Text className="ml-1 text-sm font-semibold text-gray-800">
        {rating.toFixed(1)}
      </Text>
    </View>
  );
}