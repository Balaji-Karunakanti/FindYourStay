import { View, Text } from "react-native";

interface InfoRowProps {
  label: string;
  value: string;
  highlight?: boolean;
  border?: boolean;
}

export default function InfoRow({
  label,
  value,
  highlight = false,
  border = true,
}: InfoRowProps) {
  return (
    <View
      className={`flex-row justify-between items-center py-4 ${
        border ? "border-b border-gray-100" : ""
      }`}
    >
      <Text className="text-gray-600 text-[15px]">
        {label}
      </Text>

      <Text
        className={`text-[15px] font-semibold ${
          highlight
            ? "text-green-600"
            : "text-gray-900"
        }`}
      >
        {value}
      </Text>
    </View>
  );
}