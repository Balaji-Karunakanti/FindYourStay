import { View, Text } from "react-native";

interface RoomTitleProps {
  title: string;
  subtitle?: string;
}

export default function RoomTitle({
  title,
  subtitle,
}: RoomTitleProps) {
  return (
    <View className="mx-4 mt-5">
      <Text className="text-2xl font-bold text-gray-900">
        {title}
      </Text>

      {subtitle && (
        <Text className="mt-1 text-base text-gray-500">
          {subtitle}
        </Text>
      )}
    </View>
  );
}