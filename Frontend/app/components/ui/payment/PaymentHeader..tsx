import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PaymentHeader() {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between bg-white px-5 py-4">
      <View className="flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className="mr-4"
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#142C8E"
          />
        </TouchableOpacity>

        <Text className="text-3xl font-psemibold text-[#142C8E]">
          Payment
        </Text>
      </View>

      <Ionicons
        name="lock-closed-outline"
        size={22}
        color="#142C8E"
      />
    </View>
  );
}