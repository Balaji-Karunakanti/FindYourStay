import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type ExploreHeaderProps = {
  appName?: string;
  profileImage: any;
  notificationCount?: number;
  onProfilePress?: () => void;
  onNotificationPress?: () => void;
};

export default function ExploreHeader({
  appName = "FindYourStay",
  profileImage,
  notificationCount = 0,
  onProfilePress,
  onNotificationPress,
}: ExploreHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 pt-3 pb-4 bg-white">

      {/* Left Section */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onProfilePress}
        className="flex-row items-center"
      >
        <Image
          source={profileImage}
          className="w-11 h-11 rounded-full"
          resizeMode="cover"
        />

        <Text className="ml-3 text-[28px] font-bold text-[#132A7A]">
          {appName}
        </Text>
      </TouchableOpacity>

      {/* Notification */}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onNotificationPress}
        className="relative"
      >
        <Ionicons
          name="notifications-outline"
          size={26}
          color="#374151"
        />

        {notificationCount > 0 && (
          <View className="absolute -top-1 -right-1 bg-red-500 rounded-full min-w-[18px] h-[18px] items-center justify-center px-1">

            <Text className="text-white text-[10px] font-bold">
              {notificationCount > 99
                ? "99+"
                : notificationCount}
            </Text>

          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}