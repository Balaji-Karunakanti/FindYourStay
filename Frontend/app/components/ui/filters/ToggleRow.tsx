import { View, Text, Switch } from "react-native";

interface Props {
  title: string;
  subtitle?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function ToggleRow({
  title,
  subtitle,
  value,
  onValueChange,
}: Props) {
  return (
    <View className="flex-row justify-between items-center py-4">
      <View className="flex-1 mr-4">
        <Text className="text-lg font-semibold text-[#0B1F72]">
          {title}
        </Text>

        {subtitle && (
          <Text className="text-gray-500 mt-1">
            {subtitle}
          </Text>
        )}
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#E5E7EB",
          true: "#0F766E",
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}