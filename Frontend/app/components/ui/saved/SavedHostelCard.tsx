import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import VerifiedBadge from "../common/VerifiedBadge";
import RatingBadge from "../common/RatingBadge";
import PrimaryButton from "../buttons/PrimaryButton";
import AmenityBadge from "../common/AmenityBadge";

import { Hostel } from "../../../types/hostel";

type Props = {
  hostel: Hostel;
  onFavoritePress?: () => void;
  onQuickView?: () => void;
};

export default function SavedHostelCard({
  hostel,
  onFavoritePress = () => {},
  onQuickView = () => {},
}: Props) {
  return (
    <View className="mx-5 mb-4 overflow-hidden rounded-3xl bg-white shadow-sm">
      {/* Image */}
      <View className="relative">
        <Image
          source={hostel.image}
          className="h-44 w-full"
          resizeMode="cover"
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onFavoritePress}
          className="absolute right-3 top-3 h-10 w-10 items-center justify-center rounded-full bg-white"
        >
          <Ionicons
            name={hostel.isSaved ? "heart" : "heart-outline"}
            size={20}
            color="#EF4444"
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="p-4">
        {/* Hostel Name & Rating */}
        <View className="flex-row items-center justify-between">
          <Text
            numberOfLines={1}
            className="flex-1 pr-2 text-xl font-bold text-[#0B2478]"
          >
            {hostel.name}
          </Text>

          <RatingBadge rating={hostel.rating} />
        </View>

        {/* Location */}
        <View className="mt-2 flex-row items-center">
          <Ionicons
            name="location-outline"
            size={15}
            color="#6B7280"
          />

          <Text
            numberOfLines={1}
            className="ml-1 flex-1 text-sm text-gray-500"
          >
            {hostel.location} • {hostel.distance}
          </Text>
        </View>

        {/* Amenities */}
        <View className="mt-3 flex-row flex-wrap items-center">
          {hostel.amenities.map((item) => (
            <AmenityBadge
              key={item}
              title={item}
            />
          ))}

          {hostel.verified && (
            <View className="mt-1">
              <VerifiedBadge verified={true} />
            </View>
          )}
        </View>

        {/* Divider */}
        <View className="my-3 h-[1px] bg-gray-200" />

        {/* Bottom Section */}
        <View className="flex-row items-center justify-between">
          <View>
            <View className="flex-row items-end">
              <Text className="text-2xl font-bold text-[#0B2478]">
                £{hostel.price}
              </Text>

              <Text className="ml-1 mb-0.5 text-sm text-gray-500">
                / month
              </Text>
            </View>
          </View>

          <View className="w-32">
            <PrimaryButton
              title="Quick View"
              onPress={onQuickView}
            />
          </View>
        </View>
      </View>
    </View>
  );
}