import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SectionTitleProps {
  title: string;
  actionText?: string;
  onPress?: () => void;
  showArrow?: boolean;
}

export default function SectionTitle({
  title,
  actionText,
  onPress,
  showArrow = false,
}: SectionTitleProps) {
  return (
    <View className="flex-row items-center justify-between mb-4">
      <Text className="text-xl font-bold text-gray-900">
        {title}
      </Text>

      {actionText && (
        <TouchableOpacity
          onPress={onPress}
          className="flex-row items-center"
          activeOpacity={0.7}
        >
          <Text className="text-blue-600 font-semibold mr-1">
            {actionText}
          </Text>

          {showArrow && (
            <Ionicons
              name="chevron-forward"
              size={18}
              color="#2563EB"
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}