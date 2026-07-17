import { Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Hostel } from "../../../types/hostel";
import RatingBadge from "../common/RatingBadge";
import VerifiedBadge from "../common/VerifiedBadge";
import AmenityChip from "../common/AmenityChip";
import { formatPrice } from "../../../utils/formatPrice";

interface HostelCardProps {
  hostel: Hostel;
  onPress?: () => void;
  onSavePress?: () => void;
}

export default function HostelCard({
  hostel,
  onPress,
  onSavePress,
}: HostelCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="bg-white rounded-3xl mb-6 overflow-hidden"
    >
      {/* Image Section */}
      <View className="relative">
        <Image
          source={hostel.image}
          className="w-full h-56"
          resizeMode="cover"
        />

        {/* Rating */}
        <View className="absolute top-4 left-4">
          <RatingBadge rating={hostel.rating} />
        </View>

        {/* Favourite */}
        <TouchableOpacity
          onPress={onSavePress}
          className="absolute top-4 right-4 bg-white h-10 w-10 rounded-full items-center justify-center"
        >
          <Ionicons
            name={hostel.isSaved ? "heart" : "heart-outline"}
            size={22}
            color={hostel.isSaved ? "#EF4444" : "#111827"}
          />
        </TouchableOpacity>
      </View>

      {/* Details */}
      <View className="p-4">

        {/* Title */}
        <View className="flex-row justify-between items-center">
          <Text
            className="text-xl font-bold text-gray-900 flex-1 mr-3"
            numberOfLines={1}
          >
            {hostel.name}
          </Text>

          <VerifiedBadge verified={hostel.verified} />
        </View>

        {/* Location */}
        <View className="flex-row items-center mt-3">
          <Ionicons
            name="location-outline"
            size={16}
            color="#6B7280"
          />

          <Text className="text-gray-500 ml-1">
            {hostel.location}
          </Text>
        </View>

        {/* Distance */}
        <Text className="text-gray-400 mt-1">
          {hostel.distance} away
        </Text>

        {/* Amenities */}
        <View className="flex-row flex-wrap mt-4">
          {hostel.amenities.map((item) => (
            <AmenityChip
              key={item}
              label={item}
            />
          ))}
        </View>

        {/* Bottom */}
        <View className="flex-row items-center justify-between mt-5">

          <View>
            <Text className="text-2xl font-bold text-[#0B2E7A]">
              {formatPrice(hostel.price)}
            </Text>

            <Text className="text-gray-500 text-sm">
              {hostel.availableRooms} Rooms Left
            </Text>
          </View>

          <TouchableOpacity className="bg-[#0B2E7A] px-5 py-3 rounded-full">
            <Text className="text-white font-semibold">
              View Details
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </TouchableOpacity>
  );
}