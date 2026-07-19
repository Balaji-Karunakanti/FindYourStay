import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { IMAGES } from "../../../constants/images";

export default function DocumentsHeader() {
  return (
    <View className="flex-row items-center justify-between bg-white px-4 pb-4 pt-3">
      {/* Left */}
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-4 h-10 w-10 items-center justify-center rounded-full"
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#102A83"
          />
        </TouchableOpacity>

        <Text className="text-2xl font-bold text-[#102A83]">
          Documents
        </Text>
      </View>

      {/* Right */}
      <View className="flex-row items-center">
        <TouchableOpacity className="mr-4 h-10 w-10 items-center justify-center">
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#6B7280"
          />
        </TouchableOpacity>

        <Image
          source={IMAGES.avatar}
          className="h-11 w-11 rounded-full"
          resizeMode="cover"
        />
      </View>
    </View>
  );
}