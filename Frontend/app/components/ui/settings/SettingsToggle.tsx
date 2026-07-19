import { Switch, Text, View } from "react-native";

interface SettingsToggleProps {
  title: string;
  subtitle?: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  showBorder?: boolean;
}

export default function SettingsToggle({
  title,
  subtitle,
  value,
  onValueChange,
  showBorder = true,
}: SettingsToggleProps) {
  return (
    <View
      className={`flex-row items-center justify-between px-4 py-4 ${
        showBorder ? "border-b border-slate-100" : ""
      }`}
    >
      <View className="flex-1 pr-4">
        <Text className="text-base font-semibold text-slate-900">
          {title}
        </Text>

        {subtitle && (
          <Text className="text-sm text-slate-500 mt-1">
            {subtitle}
          </Text>
        )}
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: "#CBD5E1",
          true: "#3B82F6",
        }}
        thumbColor="#FFFFFF"
        ios_backgroundColor="#CBD5E1"
      />
    </View>
  );
}