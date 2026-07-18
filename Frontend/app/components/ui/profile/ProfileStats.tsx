import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { stats } from "../../../constants/profileData";

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  "bookmark-outline": "bookmark-outline",
  "clipboard-outline": "clipboard-outline",
  "star-outline": "star-outline",
};

export default function ProfileStats() {
  return (
    <View className="mx-4 mt-5 flex-row justify-between">
      {stats.map((item) => (
        <View
          key={item.id}
          className={`flex-1 rounded-xl bg-white py-4 items-center ${
            item.id !== stats.length ? "mr-2" : ""
          }`}
        >
          {/* Icon */}
          <View className="h-10 w-10 rounded-full bg-[#F3F7FF] items-center justify-center">
            <Ionicons
              name={iconMap[item.icon]}
              size={20}
              color="#0F2E87"
            />
          </View>

          {/* Number */}
          <Text className="mt-2 text-xl font-bold text-[#0F2E87]">
            {item.title}
          </Text>

          {/* Label */}
          <Text className="mt-1 text-[11px] font-medium text-gray-500">
            {item.subtitle}
          </Text>
        </View>
      ))}
    </View>
  );
}