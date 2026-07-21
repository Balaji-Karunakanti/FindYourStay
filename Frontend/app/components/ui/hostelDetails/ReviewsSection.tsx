import { View, FlatList } from "react-native";

import { Review } from "../../../types/hostelDetails";

import SectionTitle from "./SectionTitle";
import ReviewCard from "./ReviewCard";

interface ReviewsSectionProps {
  reviews: Review[];
  onViewAll?: () => void;
}

export default function ReviewsSection({
  reviews,
  onViewAll,
}: ReviewsSectionProps) {
  return (
    <View className="mt-8">

      {/* Heading */}
      <View className="px-5">
        <SectionTitle
          title="Reviews"
          actionText="View All"
          showArrow
          onPress={onViewAll}
        />
      </View>

      {/* Reviews List */}
      <FlatList
        data={reviews}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 5,
        }}
        renderItem={({ item }) => (
          <ReviewCard review={item} />
        )}
      />
    </View>
  );
}