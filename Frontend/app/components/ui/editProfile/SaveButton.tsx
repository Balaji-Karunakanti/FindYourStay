import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";

interface SaveButtonProps {
  onPress: () => void;
  loading?: boolean;
  title?: string;
}

export default function SaveButton({
  onPress,
  loading = false,
  title = "Save Changes",
}: SaveButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={loading}
      onPress={onPress}
      className={`rounded-2xl py-4 items-center justify-center ${
        loading ? "bg-blue-400" : "bg-blue-600"
      }`}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <Text className="text-white text-base font-semibold">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}