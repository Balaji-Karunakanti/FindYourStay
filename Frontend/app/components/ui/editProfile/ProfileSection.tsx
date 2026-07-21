import React, { ReactNode } from "react";
import { View, Text } from "react-native";

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

export default function ProfileSection({
  title,
  children,
}: ProfileSectionProps) {
  return (
    <View className="bg-white rounded-3xl p-5 mb-6 shadow-sm border border-gray-100">
      <Text className="text-lg font-semibold text-gray-900 mb-5">
        {title}
      </Text>

      {children}
    </View>
  );
}