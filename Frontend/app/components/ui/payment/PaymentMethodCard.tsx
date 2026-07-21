import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface PaymentMethodCardProps {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  selected: boolean;
  onPress: () => void;
}

export default function PaymentMethodCard({
  title,
  subtitle,
  icon,
  selected,
  onPress,
}: PaymentMethodCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row items-center rounded-2xl border p-4 mb-4 ${
        selected
          ? "border-[#142C8E] bg-white"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* Icon */}
      <View className="h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
        <Ionicons name={icon} size={24} color="#142C8E" />
      </View>

      {/* Text */}
      <View className="ml-4 flex-1">
        <Text className="text-lg font-psemibold text-[#142C8E]">
          {title}
        </Text>

        <Text
          className="mt-1 text-sm font-pregular text-gray-500"
          numberOfLines={2}
        >
          {subtitle}
        </Text>
      </View>

      {/* Radio Button */}
      <View
        className={`h-7 w-7 items-center justify-center rounded-full border-2 ${
          selected
            ? "border-[#142C8E]"
            : "border-gray-400"
        }`}
      >
        {selected && (
          <View className="h-3.5 w-3.5 rounded-full bg-[#142C8E]" />
        )}
      </View>
    </TouchableOpacity>
  );
}