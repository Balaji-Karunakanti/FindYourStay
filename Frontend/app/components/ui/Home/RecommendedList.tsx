import { FlatList, View } from "react-native";

import HostelCard from "../cards/HostelCard";
import { Hostel } from "../../../types/hostel";

interface RecommendedListProps {
  hostels: Hostel[];
  onHostelPress?: (hostel: Hostel) => void;
  onSavePress?: (hostel: Hostel) => void;
}

export default function RecommendedList({
  hostels,
  onHostelPress,
  onSavePress,
}: RecommendedListProps) {
  return (
    <View className="px-5 pb-8">
      <FlatList
        data={hostels}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <HostelCard
            hostel={item}
            onPress={() => onHostelPress?.(item)}
            onSavePress={() => onSavePress?.(item)}
          />
        )}
      />
    </View>
  );
}