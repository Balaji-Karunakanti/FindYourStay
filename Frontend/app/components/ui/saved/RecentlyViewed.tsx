import { View, FlatList } from "react-native";

import SectionHeader from "../common/SectionHeader";
import RecentlyViewedCard from "./RecentlyViewedCard";

import { recentlyViewed } from "../../../constants/dummyData";

export default function RecentlyViewed() {
  return (
    <View className="mb-8">
      <SectionHeader
        title="Recently Viewed"
        actionText="See All"
      />

      <FlatList
        horizontal
        data={recentlyViewed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RecentlyViewedCard hostel={item} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    </View>
  );
}