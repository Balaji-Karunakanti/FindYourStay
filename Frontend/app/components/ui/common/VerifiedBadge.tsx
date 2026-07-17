import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface VerifiedBadgeProps {
  verified: boolean;
}

export default function VerifiedBadge({
  verified,
}: VerifiedBadgeProps) {
  if (!verified) return null;

  return (
    <View className="flex-row items-center bg-green-100 px-3 py-1 rounded-full">
      <Ionicons
        name="checkmark-circle"
        size={14}
        color="#16A34A"
      />

      <Text className="ml-1 text-xs font-semibold text-green-700">
        Verified
      </Text>
    </View>
  );
}