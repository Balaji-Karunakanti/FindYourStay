import { View, Text, TouchableOpacity } from "react-native";

interface SectionHeaderProps {
  title: string;
  actionText?: string;
  onPress?: () => void;
}

export default function SectionHeader({
  title,
  actionText,
  onPress,
}: SectionHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 mt-8 mb-4">
      <Text className="text-2xl font-bold text-gray-900">
        {title}
      </Text>

      {actionText && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
        >
          <Text className="text-[#0B2E7A] font-semibold text-base">
            {actionText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}