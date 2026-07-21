import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Owner } from "../../../types/bookingSuccess";

interface OwnerCardProps {
  owner: Owner;
  onCall?: () => void;
  onChat?: () => void;
}

export default function OwnerCard({
  owner,
  onCall,
  onChat,
}: OwnerCardProps) {
  return (
    <View className="mx-5 mt-8 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
      {/* Heading */}
      <Text className="mb-5 text-2xl font-bold text-[#0A2472]">
        Property Owner
      </Text>

      <View className="flex-row items-center justify-between">
        {/* Owner Info */}
        <View className="flex-row items-center flex-1">
          <Image
            source={owner.image}
            className="h-16 w-16 rounded-full"
            resizeMode="cover"
          />

          <View className="ml-4 flex-1">
            <Text className="text-lg font-semibold text-gray-900">
              {owner.name}
            </Text>

            <Text className="mt-1 text-sm text-gray-500">
              {owner.role}
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row">
          {/* Call */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onCall}
            className="mr-3 h-12 w-12 items-center justify-center rounded-full bg-[#0A2472]"
          >
            <Ionicons
              name="call-outline"
              size={22}
              color="white"
            />
          </TouchableOpacity>

          {/* Chat */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onChat}
            className="h-12 w-12 items-center justify-center rounded-full bg-teal-600"
          >
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={22}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}