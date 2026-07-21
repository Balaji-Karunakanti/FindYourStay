import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AgreementCheckboxProps {
  checked: boolean;
  title: string;
  highlightedText?: string;
  onPress: () => void;
}

export default function AgreementCheckbox({
  checked,
  title,
  highlightedText,
  onPress,
}: AgreementCheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="mx-5 mt-4 flex-row items-start"
    >
      {/* Checkbox */}
      <View
        className={`h-6 w-6 items-center justify-center rounded-md border ${
          checked
            ? "border-[#142B7B] bg-[#142B7B]"
            : "border-gray-400 bg-white"
        }`}
      >
        {checked && (
          <Ionicons
            name="checkmark"
            size={16}
            color="white"
          />
        )}
      </View>

      {/* Text */}
      <View className="ml-3 flex-1">
        <Text className="text-[15px] leading-6 text-gray-700">
          {title}{" "}
          {highlightedText ? (
            <Text className="font-semibold text-[#142B7B]">
              {highlightedText}
            </Text>
          ) : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
}