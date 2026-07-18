import { View, Text } from "react-native";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function FilterSection({
  title,
  children,
}: Props) {
  return (
    <View className="bg-white rounded-3xl p-5 mx-4 mb-5 shadow-sm">
      <Text className="text-xl font-bold text-[#0B1F72] mb-4">
        {title}
      </Text>

      {children}
    </View>
  );
}