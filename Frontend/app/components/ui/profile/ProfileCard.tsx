import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { profile } from "../../../constants/profileData";
import { IMAGES } from "../../../constants/images";

export default function ProfileCard() {
  return (
    <View className="mx-4 mt-4 rounded-3xl bg-white px-6 py-7 shadow-sm">

      <View className="items-center">

        {/* Avatar */}
        <View className="relative">
          <View className="h-32 w-32 items-center justify-center rounded-full bg-[#ECFDFF]">
            <Image
              source={IMAGES.profile}
              className="h-32 w-32 rounded-full"
              resizeMode="cover"
            />
          </View>

          <TouchableOpacity className="absolute bottom-1 right-1 h-10 w-10 items-center justify-center rounded-full bg-[#0F2E87]">
            <Ionicons name="create-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Name */}
        <Text className="mt-5 text-3xl font-bold text-[#0F2E87] text-center">
          {profile.name}
        </Text>

        {/* Role */}
        <View className="mt-3 rounded-full bg-[#EAFBF8] px-5 py-2">
          <Text className="text-xs font-bold uppercase tracking-wider text-[#0F766E]">
            {profile.role}
          </Text>
        </View>

        {/* College */}
        <Text className="mt-5 text-center text-base text-gray-700">
          {profile.college}
        </Text>

        {/* Phone */}
        <View className="mt-5 flex-row items-center">
          <Ionicons name="call-outline" size={18} color="#4B5563" />
          <Text className="ml-3 text-base text-gray-800">
            {profile.phone}
          </Text>
        </View>

        {/* Email */}
        <View className="mt-3 flex-row items-center">
          <Ionicons name="mail-outline" size={18} color="#4B5563" />
          <Text className="ml-3 text-base text-gray-800">
            {profile.email}
          </Text>
        </View>

      </View>

      {/* Edit Button */}
      <TouchableOpacity className="mt-8 rounded-xl bg-[#0F2E87] py-4 items-center">
        <Text className="text-lg font-semibold text-white">
          Edit Profile
        </Text>
      </TouchableOpacity>

    </View>
  );
}