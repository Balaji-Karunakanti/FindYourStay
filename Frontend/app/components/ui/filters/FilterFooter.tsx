import { View, TouchableOpacity, Text } from "react-native";
import PrimaryButton from "../buttons/PrimaryButton";

interface Props {
  onClear: () => void;
  onApply: () => void;
}

export default function FilterFooter({
  onClear,
  onApply,
}: Props) {
  return (
    <View className="flex-row bg-white px-5 py-4 border-t border-gray-200">
      <TouchableOpacity
        onPress={onClear}
        className="flex-1 border border-[#0B1F72] rounded-full items-center justify-center mr-3"
      >
        <Text className="text-[#0B1F72] font-semibold text-base">
          Clear Filters
        </Text>
      </TouchableOpacity>

      <View className="flex-1">
        <PrimaryButton
          title="Apply Filters"
          onPress={onApply}
        />
      </View>
    </View>
  );
}