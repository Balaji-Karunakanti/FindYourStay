import { Text, View } from "react-native";

interface AmenityChipProps {
  label: string;
}

export default function AmenityChip({
  label,
}: AmenityChipProps) {
  return (
    <View className="bg-gray-100 rounded-full px-3 py-2 mr-2 mb-2">
      <Text className="text-xs font-medium text-gray-700">
        {label}
      </Text>
    </View>
  );
}