import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SectionHeaderProps {
  title: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function SectionHeader({
  title,
  icon,
}: SectionHeaderProps) {
  return (
    <View className="mx-4 mt-7 mb-3 flex-row items-center">
      {icon && (
        <Ionicons
          name={icon}
          size={20}
          color="#2563EB"
        />
      )}

      <Text className="ml-2 text-lg font-bold text-gray-900">
        {title}
      </Text>
    </View>
  );
}