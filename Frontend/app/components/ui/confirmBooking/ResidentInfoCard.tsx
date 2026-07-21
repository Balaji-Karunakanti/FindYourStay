import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ResidentInfoCardProps {
  fullName: string;
  gender: string;
  mobileNumber: string;
  email: string;
  onEdit?: () => void;
}

export default function ResidentInfoCard({
  fullName,
  gender,
  mobileNumber,
  email,
  onEdit,
}: ResidentInfoCardProps) {
  return (
    <View className="mx-5 mt-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Header */}
      <View className="mb-6 flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-[#142B7B]">
          Resident Information
        </Text>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onEdit}
          className="flex-row items-center"
        >
          <Ionicons
            name="create-outline"
            size={18}
            color="#0F766E"
          />

          <Text className="ml-1 font-semibold text-[#0F766E]">
            Edit
          </Text>
        </TouchableOpacity>
      </View>

      {/* Full Name */}
      <View className="mb-6">
        <Text className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          FULL NAME
        </Text>

        <Text className="mt-2 text-lg font-semibold text-gray-900">
          {fullName}
        </Text>
      </View>

      {/* Gender */}
      <View className="mb-6">
        <Text className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          GENDER
        </Text>

        <Text className="mt-2 text-lg font-semibold text-gray-900">
          {gender}
        </Text>
      </View>

      {/* Mobile */}
      <View className="mb-6">
        <Text className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          MOBILE NUMBER
        </Text>

        <Text className="mt-2 text-lg font-semibold text-gray-900">
          {mobileNumber}
        </Text>
      </View>

      {/* Email */}
      <View>
        <Text className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          EMAIL
        </Text>

        <Text className="mt-2 text-lg font-semibold text-gray-900">
          {email}
        </Text>
      </View>
    </View>
  );
}