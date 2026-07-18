import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import ExploreHeader from "../components/ui/explore/ExploreHeader";
import FilterChips from "../components/ui/explore/FilterChips";
import ResultsHeader from "../components/ui/explore/ResultsHeader";
import HostelList from "../components/ui/explore/HostelList";
import SearchBar from "../components/ui/common/SearchBar";

import {
  hostels,
  exploreFilters,
  sortOptions,
} from "../constants/dummyData";

import { IMAGES } from "../constants/images";
export default function ExploreScreen() {
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedSort] = useState(sortOptions[0]);
  const [refreshing, setRefreshing] = useState(false);

  const filteredHostels = useMemo(() => {
    let data = [...hostels];

    // Search
    if (searchText.trim()) {
      const keyword = searchText.toLowerCase();

      data = data.filter(
        (hostel) =>
          hostel.name.toLowerCase().includes(keyword) ||
          hostel.location.toLowerCase().includes(keyword) ||
          hostel.category.toLowerCase().includes(keyword)
      );
    }

    // Example Filters
    switch (selectedFilter) {
      case "verified":
        data = data.filter((hostel) => hostel.verified);
        break;

      case "budget":
        data = data.filter((hostel) => hostel.price <= 500);
        break;

      case "boys":
        data = data.filter(
          (hostel) => hostel.category === "Boys Hostel"
        );
        break;

      case "girls":
        data = data.filter(
          (hostel) => hostel.category === "Girls Hostel"
        );
        break;

      default:
        break;
    }

    // Sorting
    switch (selectedSort.id) {
      case "lowest_price":
        data.sort((a, b) => a.price - b.price);
        break;

      case "highest_rated":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "newest":
        break;

      case "nearest":
      default:
        break;
    }

    return data;
  }, [searchText, selectedFilter, selectedSort]);

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <ExploreHeader
        profileImage={IMAGES.profile}
        notificationCount={3}
      />

      {/* Search */}
      <View className="px-5 mt-3">
        <SearchBar
  value={searchText}
  onChangeText={setSearchText}
  placeholder="Search hostels, PGs or locations"
  onSearchPress={() => {
    console.log("Searching:", searchText);
  }}
  onFilterPress={() => router.push("/filters")}
  onVoicePress={() => {
    console.log("Voice Search");
  }}
/>
      </View>

      {/* Filters */}
      <FilterChips
        filters={exploreFilters}
        selectedFilter={selectedFilter}
        onSelect={setSelectedFilter}
      />

      {/* Results */}
      <ResultsHeader
        totalResults={filteredHostels.length}
        location="London"
        selectedSort={selectedSort.label}
        onSortPress={() => {
          console.log("Sort Clicked");
        }}
      />

      {/* Hostel List */}
      <HostelList
        hostels={filteredHostels}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onHostelPress={(hostel) => {
          console.log("Open Hostel:", hostel.name);
        }}
        onSaveToggle={(hostel) => {
          console.log("Save Hostel:", hostel.id);
        }}
      />
    </SafeAreaView>
  );
}