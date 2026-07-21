import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AmenityItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}

export default function AmenityItem({
  icon,
  title,
}: AmenityItemProps) {
  return (
    <View className="w-[48%] flex-row items-center rounded-xl border border-gray-200 bg-white p-3 mb-3">
      <View className="h-10 w-10 items-center justify-center rounded-full bg-blue-50">
        <Ionicons
          name={icon}
          size={20}
          color="#2563EB"
        />
      </View>

      <Text
        className="ml-3 flex-1 text-sm font-medium text-gray-800"
        numberOfLines={2}
      >
        {title}
      </Text>
    </View>
  );
}