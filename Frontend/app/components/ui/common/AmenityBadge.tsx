import { View, Text } from "react-native";

interface Props {
  title: string;
}

export default function AmenityBadge({ title }: Props) {
  return (
    <View className="mr-2 mb-2 rounded-full bg-teal-50 px-3 py-2">
      <Text className="text-xs font-medium text-teal-700">
        {title}
      </Text>
    </View>
  );
}