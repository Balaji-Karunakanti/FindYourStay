import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import RatingBadge from "../common/RatingBadge";
import VerifiedBadge from "../common/VerifiedBadge";

interface HostelInfoProps {
  name: string;
  rating: number;
  totalReviews: number;
  verified: boolean;
  address: string;
  city: string;
  state: string;
  distanceFromCenter: string;
  distanceFromMetro: string;
}

export default function HostelInfo({
  name,
  rating,
  totalReviews,
  verified,
  address,
  city,
  state,
  distanceFromCenter,
  distanceFromMetro,
}: HostelInfoProps) {
  return (
    <View className="bg-white rounded-t-3xl -mt-6 px-5 pt-6 pb-5">

      {/* Rating & Verified */}
      <View className="flex-row items-center mb-3">
        <RatingBadge rating={rating} />

        <Text className="text-gray-500 text-sm ml-2">
          ({totalReviews} Reviews)
        </Text>

        {verified && (
          <View className="ml-3">
            <VerifiedBadge verified={false} />
          </View>
        )}
      </View>

      {/* Hostel Name */}
      <Text className="text-2xl font-bold text-gray-900">
        {name}
      </Text>

      {/* Address */}
      <View className="flex-row items-start mt-3">

        <Ionicons
          name="location-outline"
          size={18}
          color="#6B7280"
        />

        <Text className="flex-1 ml-2 text-gray-600 leading-6">
          {address}, {city}, {state}
        </Text>

      </View>

      {/* Distance Row */}
      <View className="flex-row mt-5">

        <View className="flex-row items-center mr-6">
          <Ionicons
            name="business-outline"
            size={18}
            color="#2563EB"
          />

          <Text className="ml-2 text-gray-700">
            {distanceFromCenter}
          </Text>
        </View>

        <View className="flex-row items-center">
          <Ionicons
            name="train-outline"
            size={18}
            color="#2563EB"
          />

          <Text className="ml-2 text-gray-700">
            {distanceFromMetro}
          </Text>
        </View>

      </View>

    </View>
  );
}