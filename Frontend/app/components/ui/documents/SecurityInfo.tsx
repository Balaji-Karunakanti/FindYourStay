import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SecurityInfo() {
  return (
    <View
      className="mx-4 mb-6 mt-2 rounded-3xl bg-white p-5"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
      }}
    >
      <View className="flex-row">
        {/* Icon */}
        <View className="mr-4 h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
          <Ionicons
            name="shield-checkmark"
            size={28}
            color="#102A83"
          />
        </View>

        {/* Text */}
        <View className="flex-1">
          <Text className="text-lg font-bold text-[#102A83]">
            Secure Data Management
          </Text>

          <Text className="mt-2 text-[15px] leading-6 text-gray-600">
            Your documents are encrypted and securely stored. We only share
            verification status with hostels and never expose your original
            documents.
          </Text>
        </View>
      </View>
    </View>
  );
}