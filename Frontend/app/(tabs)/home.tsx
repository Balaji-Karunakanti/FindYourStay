import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import Header from "../components/ui/Home/Header";
import SearchBar from "../components/ui/common/SearchBar";
import CategoryList from "../components/ui/Home/CategoryList";
import SectionHeader from "../components/ui/common/SectionHeader";
import LocationList from "../components/ui/Home/LocationList";
import RecommendedList from "../components/ui/Home/RecommendedList";

import { hostels } from "../constants/dummyData";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

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

        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search hostels, PGs or locations"
          onSearchPress={() => console.log("Searching:", search)}
          onVoicePress={() => console.log("Voice Search")}
          // onFilterPress={() => router.push("/filters")}
          onFilterPress={() => {
  console.log("Filter Pressed");
  router.push("/filters");
}}
        />

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