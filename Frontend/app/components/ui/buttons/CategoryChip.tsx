import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
} from "react-native";

interface CategoryChipProps {
  title: string;
  active?: boolean;
  icon?: React.ReactNode;
  onPress?: () => void;
}

export default function CategoryChip({
  title,
  active = false,
  icon,
  onPress,
}: CategoryChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`mr-3 px-5 py-3 rounded-full border flex-row items-center ${
        active
          ? "bg-[#132A7A] border-[#132A7A]"
          : "bg-white border-gray-200"
      }`}
    >
      {icon && <View className="mr-2">{icon}</View>}

      <Text
        className={`font-semibold ${
          active ? "text-white" : "text-gray-700"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}