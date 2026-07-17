import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  userName?: string;
  location?: string;
}

export default function Header({
  userName = "Alex",
  location = "London, UK",
}: HeaderProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    }

    if (hour >= 12 && hour < 17) {
      return "Good Afternoon";
    }

    if (hour >= 17 && hour < 21) {
      return "Good Evening";
    }

    return "Good Night";
  };

  return (
    <View className="flex-row items-center justify-between px-5 pt-5">
      {/* Left */}
      <View>
        <Text className="text-gray-500 text-base">
          {getGreeting()}
        </Text>

        <Text className="text-4xl font-bold text-[#0B2E7A]">
          {userName}
        </Text>
      </View>

      {/* Right */}
      <View className="flex-row items-center">
        <TouchableOpacity
          activeOpacity={0.8}
          className="flex-row items-center bg-gray-100 rounded-full px-4 py-3 mr-3"
        >
          <Ionicons
            name="location-outline"
            size={20}
            color="#0B2E7A"
          />

          <Text className="ml-2 text-base font-medium">
            {location}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-gray-100 h-12 w-12 rounded-full items-center justify-center"
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#0B2E7A"
          />

          <View className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-red-500" />
        </TouchableOpacity>
      </View>
    </View>
  );
}