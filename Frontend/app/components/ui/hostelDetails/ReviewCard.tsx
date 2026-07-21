import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Review } from "../../../types/hostelDetails";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <View className="bg-white rounded-3xl p-5 border border-gray-100 mr-4 w-80 shadow-sm">

      {/* Header */}
      <View className="flex-row items-center">

        <Image
          source={review.avatar}
          className="w-12 h-12 rounded-full"
          resizeMode="cover"
        />

        <View className="ml-3 flex-1">

          <Text className="text-base font-bold text-gray-900">
            {review.name}
          </Text>

          <Text className="text-gray-500 text-sm">
            {review.date}
          </Text>

        </View>

        <View className="flex-row items-center">

          <Ionicons
            name="star"
            size={16}
            color="#FACC15"
          />

          <Text className="ml-1 font-semibold">
            {review.rating}
          </Text>

        </View>

      </View>

      {/* Review */}
      <Text
        className="text-gray-600 mt-4 leading-6"
        numberOfLines={4}
      >
        {review.review}
      </Text>

    </View>
  );
}