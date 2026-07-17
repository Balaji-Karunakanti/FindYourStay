import { Text, TouchableOpacity } from "react-native";

interface CategoryChipProps {
  title: string;
  active?: boolean;
  onPress?: () => void;
}

export default function CategoryChip({
  title,
  active = false,
  onPress,
}: CategoryChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`px-6 py-4 rounded-full mr-3 border ${
        active
          ? "bg-[#0B2E7A] border-[#0B2E7A]"
          : "bg-gray-100 border-gray-200"
      }`}
    >
      <Text
        className={`text-base font-semibold ${
          active ? "text-white" : "text-gray-700"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}