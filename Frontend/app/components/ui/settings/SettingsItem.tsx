import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";
import { AboutItem } from "../../../types/settings";

interface SettingsItemProps {
  item: AboutItem;
  onPress?: () => void;
  showBorder?: boolean;
}

export default function SettingsItem({
  item,
  onPress,
  showBorder = true,
}: SettingsItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={!onPress}
      className={`flex-row items-center justify-between px-4 py-4 ${
        showBorder ? "border-b border-slate-100" : ""
      }`}
    >
      <View className="flex-row items-center flex-1">
        {item.icon && (
          <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
            <Ionicons
              name={item.icon}
              size={20}
              color="#2563EB"
            />
          </View>
        )}

        <Text className="text-base font-medium text-slate-900">
          {item.title}
        </Text>
      </View>

      <View className="flex-row items-center">
        {item.value && (
          <Text className="text-sm text-slate-500 mr-2">
            {item.value}
          </Text>
        )}

        {item.showArrow && (
          <Ionicons
            name="chevron-forward"
            size={20}
            color="#94A3B8"
          />
        )}
      </View>
    </TouchableOpacity>
  );
}