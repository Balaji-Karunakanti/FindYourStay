import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Room } from "../../../types/hostelDetails";
import PrimaryButton from "../buttons/PrimaryButton";

interface RoomCardProps {
  room: Room;
  onPress?: () => void;
}

export default function RoomCard({
  room,
  onPress,
}: RoomCardProps) {
  const badgeColor = room.available
    ? "bg-green-500"
    : "bg-red-500";

  return (
    <View className="bg-white rounded-3xl overflow-hidden mr-4 w-72 shadow-sm border border-gray-100">

      {/* Room Image */}
      <View className="relative">
        <Image
          source={room.image}
          className="w-full h-44"
          resizeMode="cover"
        />

        {/* Availability Badge */}
        <View
          className={`absolute top-3 left-3 px-3 py-1 rounded-full ${badgeColor}`}
        >
          <Text className="text-white text-xs font-semibold">
            {room.tag}
          </Text>
        </View>
      </View>

      {/* Content */}
      <View className="p-4">

        {/* Room Name */}
        <Text className="text-lg font-bold text-gray-900">
          {room.title}
        </Text>

        {/* Subtitle */}
        <Text
          className="text-gray-500 mt-1 leading-5"
          numberOfLines={2}
        >
          {room.subtitle}
        </Text>

        {/* Divider */}
        <View className="h-px bg-gray-100 my-4" />

        {/* Price */}
        <View className="flex-row items-end mb-4">
          <Text className="text-2xl font-bold text-blue-600">
            ₹{room.monthlyRent.toLocaleString()}
          </Text>

          <Text className="text-gray-500 ml-1 mb-1">
            /month
          </Text>
        </View>

        {/* Features */}
        <View className="flex-row items-center mb-5">

          <Ionicons
            name="bed-outline"
            size={18}
            color="#6B7280"
          />

          <Text className="ml-2 text-gray-600">
            Fully Furnished
          </Text>

        </View>

        {/* Button */}

        <PrimaryButton
          title={
            room.available
              ? "Book Now"
              : "Join Waitlist"
          }
          onPress={onPress ?? (() => {})}
        />

      </View>

    </View>
  );
}