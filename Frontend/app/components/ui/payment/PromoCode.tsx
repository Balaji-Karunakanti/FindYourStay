import { View, TextInput, TouchableOpacity, Text } from "react-native";

interface PromoCodeProps {
  value: string;
  onChangeText: (text: string) => void;
  onApply: () => void;
}

export default function PromoCode({
  value,
  onChangeText,
  onApply,
}: PromoCodeProps) {
  return (
    <View className="mt-5">
      <Text className="mb-2 text-base font-pmedium text-[#142C8E]">
        Promo Code
      </Text>

      <View className="flex-row items-center">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Enter promo code"
          placeholderTextColor="#9CA3AF"
          className="mr-3 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-pregular text-base text-black"
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onApply}
          className="rounded-xl bg-[#142C8E] px-5 py-3"
        >
          <Text className="font-psemibold text-white">
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}