import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  amount: number;
  subtitle: string;
  subtitleColor?: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function SummaryCard({
  title,
  amount,
  subtitle,
  subtitleColor = "text-gray-500",
  icon,
}: Props) {
  return (
    <View className="mb-5 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Title */}
      <Text className="text-lg font-medium uppercase tracking-wide text-gray-500">
        {title}
      </Text>

      {/* Amount */}
      <Text className="mt-2 text-3xl font-bold text-[#1B2E7B]">
        ₹{amount.toLocaleString()}
      </Text>

      {/* Bottom Row */}
      <View className="mt-4 flex-row items-center">
        {icon && (
          <Ionicons
            name={icon}
            size={16}
            color="#6B7280"
            style={{ marginRight: 6 }}
          />
        )}

        <Text className={`text-sm font-medium ${subtitleColor}`}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
}
