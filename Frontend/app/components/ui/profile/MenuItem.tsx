import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

export default function MenuItem({
  title,
  icon,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="flex-row items-center justify-between rounded-2xl bg-white px-5 py-5 mb-3"
    >
      {/* Left Side */}
      <View className="flex-row items-center">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-[#EEF4FF]">
          <Ionicons
            name={icon}
            size={22}
            color="#0F2E87"
          />
        </View>

        <Text className="ml-4 text-[16px] font-semibold text-gray-800">
          {title}
        </Text>
      </View>

      {/* Right Arrow */}
      <Ionicons
        name="chevron-forward"
        size={22}
        color="#9CA3AF"
      />
    </TouchableOpacity>
  );
}