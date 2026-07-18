import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export default function OptionChip({
  label,
  selected,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row items-center border rounded-2xl px-4 py-4 w-[48%]
      ${
        selected
          ? "border-[#0B1F72] bg-[#EEF3FF]"
          : "border-gray-300 bg-white"
      }`}
    >
      <View
        className={`w-6 h-6 rounded-md border items-center justify-center mr-3
        ${
          selected
            ? "bg-[#0B1F72] border-[#0B1F72]"
            : "border-gray-300"
        }`}
      >
        {selected && (
          <Ionicons
            name="checkmark"
            color="white"
            size={16}
          />
        )}
      </View>

      <Text
        className={`text-base ${
          selected
            ? "text-[#0B1F72] font-semibold"
            : "text-gray-800"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}