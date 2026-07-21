import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface PreferenceChipProps {
  title: string;
  selected: boolean;
  onPress: () => void;
}

export default function PreferenceChip({
  title,
  selected,
  onPress,
}: PreferenceChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`px-4 py-3 rounded-full mr-3 mb-3 border ${
        selected
          ? "bg-blue-600 border-blue-600"
          : "bg-white border-gray-300"
      }`}
    >
      <Text
        className={`text-sm font-medium ${
          selected ? "text-white" : "text-gray-700"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}