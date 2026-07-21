import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RulesCardProps {
  rules: string[];
}

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  "Visitors allowed till 8 PM": "people-outline",
  "No Smoking": "ban-outline",
  "No Pets": "paw-outline",
  "11 PM Curfew": "time-outline",
  "Breakfast : 8 AM - 10 AM": "restaurant-outline",
  "Dinner : 8 PM - 10 PM": "restaurant-outline",
};

export default function RulesCard({ rules }: RulesCardProps) {
  return (
    <View className="mx-4 rounded-2xl border border-gray-200 bg-white p-5">
      {rules.map((rule, index) => (
        <View
          key={index}
          className={`flex-row items-center py-3 ${
            index !== rules.length - 1
              ? "border-b border-gray-100"
              : ""
          }`}
        >
          <View className="h-10 w-10 items-center justify-center rounded-full bg-blue-50">
            <Ionicons
              name={iconMap[rule] ?? "checkmark-circle-outline"}
              size={20}
              color="#2563EB"
            />
          </View>

          <Text className="ml-4 flex-1 text-[15px] text-gray-700">
            {rule}
          </Text>
        </View>
      ))}
    </View>
  );
}