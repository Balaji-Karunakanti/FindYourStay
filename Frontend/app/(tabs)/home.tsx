import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

import Header from "../components/ui/Home/Header";
import SearchBar from "../components/ui/common/SearchBar";
import CategoryList from "../components/ui/Home/CategoryList";
import SectionHeader from "../components/ui/common/SectionHeader";
import LocationList from "../components/ui/Home/LocationList";
import RecommendedList from "../components/ui/Home/RecommendedList";

import { hostels } from "../constants/dummyData";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <Header
          userName="Balaji"
          location="Hyderabad, India"
        />

        <SearchBar />

        <CategoryList />

        <SectionHeader
          title="Popular Locations"
          actionText="See All"
          onPress={() => console.log("See all locations")}
        />

        <LocationList
          onLocationPress={(id) =>
            console.log("Location:", id)
          }
        />

        <SectionHeader
          title="Recommended"
        />

        <RecommendedList
          hostels={hostels}
          onHostelPress={(hostel) =>
            console.log("Hostel:", hostel.name)
          }
          onSavePress={(hostel) =>
            console.log("Save:", hostel.name)
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}