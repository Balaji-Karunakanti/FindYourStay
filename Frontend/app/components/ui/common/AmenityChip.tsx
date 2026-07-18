import { TouchableOpacity, Text } from "react-native";

interface AmenityChipProps {
  title: string;
  selected: boolean;
  onPress: () => void;
}

export default function AmenityChip({
  title,
  selected,
  onPress,
}: AmenityChipProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`px-4 py-3 rounded-full border mr-3 mb-3 ${
        selected
          ? "bg-teal-50 border-teal-700"
          : "bg-white border-gray-300"
      }`}
    >
      <Text
        className={`text-sm font-medium ${
          selected ? "text-teal-700" : "text-gray-700"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}