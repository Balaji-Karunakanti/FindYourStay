import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function PrivacyHeader() {
  const router = useRouter();

  return (
    <View className="bg-white px-5 pt-4 pb-6">
      {/* Top Bar */}
      <View className="flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.back()}
          className="mr-4"
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color="#0B1979"
          />
        </TouchableOpacity>

        <Text className="text-[24px] font-bold text-[#0B1979]">
          Privacy & Security
        </Text>
      </View>

      {/* Icon */}
      <View className="items-center mt-8">
        <View className="h-20 w-20 rounded-3xl bg-[#F3F5FA] items-center justify-center">
          <Ionicons
            name="shield-outline"
            size={40}
            color="#0B1979"
          />
        </View>

        <Text className="text-[30px] font-bold text-[#0B1979] mt-6">
          Security Settings
        </Text>

        <Text className="text-center text-gray-500 text-base mt-2 leading-6 px-5">
          Manage your password, login methods, and active devices.
        </Text>
      </View>
    </View>
  );
}