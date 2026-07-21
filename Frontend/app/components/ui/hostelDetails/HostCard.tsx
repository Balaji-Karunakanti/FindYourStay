import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Host } from "../../../types/hostelDetails";
import SectionTitle from "./SectionTitle";

interface HostCardProps {
  host: Host;
  onCall?: () => void;
  onChat?: () => void;
}

export default function HostCard({
  host,
  onCall,
  onChat,
}: HostCardProps) {
  return (
    <View className="px-5 mt-8">
      <SectionTitle title="Managed By" />

      <View className="bg-white rounded-3xl p-5 border border-gray-100">

        {/* Profile */}
        <View className="flex-row items-center">

          <Image
            source={host.avatar}
            className="w-16 h-16 rounded-full"
            resizeMode="cover"
          />

          <View className="flex-1 ml-4">

            <Text className="text-lg font-bold text-gray-900">
              {host.name}
            </Text>

            <View className="flex-row items-center mt-1">

              <View className="w-2 h-2 rounded-full bg-green-500 mr-2" />

              <Text className="text-gray-500">
                {host.responseTime}
              </Text>

            </View>

          </View>

        </View>

        {/* Divider */}
        <View className="h-px bg-gray-100 my-5" />

        {/* Buttons */}
        <View className="flex-row">

          {/* Call */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onCall}
            className="flex-1 bg-gray-100 rounded-xl py-4 mr-3 items-center flex-row justify-center"
          >
            <Ionicons
              name="call-outline"
              size={20}
              color="#111827"
            />

            <Text className="ml-2 font-semibold text-gray-900">
              Call
            </Text>
          </TouchableOpacity>

          {/* Chat */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onChat}
            className="flex-1 bg-blue-600 rounded-xl py-4 items-center flex-row justify-center"
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={20}
              color="white"
            />

            <Text className="ml-2 font-semibold text-white">
              Chat
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}