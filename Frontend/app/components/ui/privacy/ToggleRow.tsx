import { View, Text, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  subtitle?: string;
  icon: keyof typeof Ionicons.glyphMap;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export default function ToggleRow({
  title,
  subtitle,
  icon,
  value,
  onValueChange,
}: Props) {
  return (
    <View className="flex-row items-center justify-between bg-white px-4 py-4 border-b border-gray-100">
      {/* Left */}
      <View className="flex-row items-center flex-1">
        <View className="h-12 w-12 rounded-xl bg-[#F3F5FA] items-center justify-center">
          <Ionicons
            name={icon}
            size={22}
            color="#0B1979"
          />
        </View>

        <View className="ml-4 flex-1">
          <Text className="text-[17px] font-semibold text-gray-900">
            {title}
          </Text>

          {subtitle ? (
            <Text className="text-[14px] text-gray-500 mt-1 leading-5">
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>

      {/* Toggle */}
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#E5E7EB",
          true: "#0F766E",
        }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#E5E7EB"
      />
    </View>
  );
}