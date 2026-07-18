import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";

import SavedHeader from "../components/ui/saved/SavedHeader";
import SavedHostelCard from "../components/ui/saved/SavedHostelCard";
import RecentlyViewed from "../components/ui/saved/RecentlyViewed";

import { hostels } from "../constants/dummyData";

export default function SavedScreen() {
  // Only show saved hostels
  const savedHostels = hostels.filter((hostel) => hostel.isSaved);

  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FA]">
      <FlatList
        data={savedHostels}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
        ListHeaderComponent={
          <SavedHeader count={savedHostels.length} />
        }
        renderItem={({ item }) => (
          <SavedHostelCard hostel={item} />
        )}
        ListFooterComponent={<RecentlyViewed />}
      />
    </SafeAreaView>
  );
}