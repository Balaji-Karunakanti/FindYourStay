import { View, Text } from "react-native";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <View className="px-5 mt-8 mb-3">
      <Text className="text-[28px] font-bold text-[#0B1979]">
        {title}
      </Text>
    </View>
  );
}