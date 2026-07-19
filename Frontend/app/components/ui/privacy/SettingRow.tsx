import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  subtitle?: string;
  icon: keyof typeof Ionicons.glyphMap;
  danger?: boolean;
  onPress?: () => void;
};

export default function SettingRow({
  title,
  subtitle,
  icon,
  danger = false,
  onPress,
}: Props) {
  const titleColor = danger ? "#DC2626" : "#111827";
  const iconColor = danger ? "#DC2626" : "#0B1979";
  const arrowColor = danger ? "#F87171" : "#9CA3AF";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="flex-row items-center justify-between bg-white px-4 py-4 border-b border-gray-100"
    >
      {/* Left */}
      <View className="flex-row items-center flex-1">
        <View className="h-12 w-12 rounded-xl bg-[#F3F5FA] items-center justify-center">
          <Ionicons
            name={icon}
            size={22}
            color={iconColor}
          />
        </View>

        <View className="ml-4 flex-1">
          <Text
            className="text-[17px] font-semibold"
            style={{ color: titleColor }}
          >
            {title}
          </Text>

          {subtitle && (
            <Text className="text-[14px] text-gray-500 mt-1">
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      {/* Right */}
      <Ionicons
        name={danger ? "warning-outline" : "chevron-forward"}
        size={22}
        color={arrowColor}
      />
    </TouchableOpacity>
  );
}