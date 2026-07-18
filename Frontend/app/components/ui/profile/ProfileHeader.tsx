import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

export default function ProfileHeader() {
  return (
    <View className="flex-row items-center justify-between px-5 pt-14 pb-5 bg-white">
      {/* Logo */}
      <Text className="text-[30px] font-extrabold text-[#0F2E87]">
        FindYourStay
      </Text>

      {/* Right Icons */}
      <View className="flex-row items-center">
        <TouchableOpacity className="mr-5">
          <Ionicons name="settings-outline" size={24} color="#6B7280" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#6B7280" />
        </TouchableOpacity>
      </View>
    </View>
  );
}