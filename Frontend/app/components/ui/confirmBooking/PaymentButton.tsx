import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface PaymentButtonProps {
  disabled?: boolean;
  title?: string;
  paymentTitle?:string,
  onPress: () => void;
}

export default function PaymentButton({
  disabled = false,
  paymentTitle,
  onPress,
}: PaymentButtonProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingBottom: Math.max(insets.bottom, 16) }}
      className="absolute mb-16 bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-5 pt-4"
    >
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        onPress={onPress}
        className={`rounded-xl py-4 ${
          disabled ? "bg-gray-400" : "bg-[#142B7B]"
        }`}
      >
        <Text className="text-center text-lg font-bold text-white">
         {paymentTitle}
        </Text>
      </TouchableOpacity>

      <View className="mt-3 flex-row items-center justify-center">
        <Ionicons
          name="lock-closed"
          size={16}
          color="#16A34A"
        />

        <Text className="ml-2 text-sm text-gray-500">
          Secure 256-bit SSL encrypted payment
        </Text>
      </View>
    </View>
  );
}