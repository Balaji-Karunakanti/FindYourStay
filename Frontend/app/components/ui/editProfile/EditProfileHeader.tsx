import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface EditProfileHeaderProps {
  onBack: () => void;
  onSave: () => void;
}

export default function EditProfileHeader({
  onBack,
  onSave,
}: EditProfileHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 py-4 bg-white border-b border-gray-100">
      {/* Back Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onBack}
        className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center"
      >
        <Ionicons
          name="arrow-back"
          size={22}
          color="#111827"
        />
      </TouchableOpacity>

      {/* Title */}
      <Text className="text-xl font-bold text-gray-900">
        Edit Profile
      </Text>

      {/* Save Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSave}
      >
        <Text className="text-base font-semibold text-blue-600">
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}