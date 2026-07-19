import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FooterInfo() {
  return (
    <View className="px-5 py-8">
      {/* Security Card */}
      <View className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-200">
        <View className="flex-row items-center">
          <Ionicons
            name="shield-checkmark"
            size={22}
            color="#16A34A"
          />

          <Text className="ml-2 text-[17px] font-semibold text-gray-900">
            Your data is protected
          </Text>
        </View>

        <Text className="text-gray-600 text-[14px] leading-6 mt-3">
          FindYourStay uses industry-standard encryption to protect your
          personal information. We never share your data without your
          permission.
        </Text>
      </View>

      {/* Footer */}
      <View className="items-center mt-8">
        <Text className="text-gray-400 text-sm">
          FINDYOURSTAY SECURE GATEWAY
        </Text>

        <Text className="text-gray-400 text-sm mt-1">
          Version 2.4.0
        </Text>
      </View>
    </View>
  );
}