import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function BookingHeader() {
  return (
    <View className="flex-row items-center px-5 py-4 bg-white">
      <TouchableOpacity
        onPress={() => router.back()}
        className="mr-4"
        activeOpacity={0.8}
      >
        <Ionicons
          name="arrow-back"
          size={26}
          color="#142B7B"
        />
      </TouchableOpacity>

      <Text className="text-2xl font-bold text-[#142B7B]">
        Confirm Booking
      </Text>
    </View>
  );
}