import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import SearchBar from "../common/SearchBar";
import { IMAGES } from "../../../constants/images";

export default function HelpHeader() {
  return (
    <View className="bg-white px-5 pt-14 pb-6 rounded-b-3xl shadow-sm">
      {/* Top Bar */}
      <View className="flex-row items-center justify-between">
        {/* Back Button + Title */}
        <View className="flex-row items-center">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="#0F172A" />
          </TouchableOpacity>

          <Text className="ml-4 text-xl font-bold text-slate-900">
            Help & Support
          </Text>
        </View>

        {/* Right Side */}
        <View className="flex-row items-center">
          <TouchableOpacity activeOpacity={0.8}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#0F172A"
            />
          </TouchableOpacity>

          <Image
            source={IMAGES.profile}
            className="ml-4 h-10 w-10 rounded-full"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Heading */}
      <Text className="mt-10 text-center text-4xl font-extrabold text-indigo-950">
        How can we help?
      </Text>

      {/* Search */}
      <View className="mt-8">
        <SearchBar value={""} onChangeText={function (text: string): void {
          throw new Error("Function not implemented.");
        } }  />
      </View>
    </View>
  );
}