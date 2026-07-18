import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ResultsHeaderProps {
  totalResults: number;
  location?: string;
  selectedSort: string;
  onSortPress: () => void;
}

export default function ResultsHeader({
  totalResults,
  location,
  selectedSort,
  onSortPress,
}: ResultsHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 mt-5 mb-4">

      {/* Left */}
      <View className="flex-1">
        <Text className="text-lg font-bold text-gray-900">
          {totalResults} Hostel{totalResults !== 1 ? "s" : ""} Found
        </Text>

        {location ? (
          <Text className="text-gray-500 mt-1">
            in {location}
          </Text>
        ) : null}
      </View>

      {/* Right */}

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSortPress}
        className="flex-row items-center bg-gray-100 px-4 py-2 rounded-full"
      >
        <Ionicons
          name="swap-vertical-outline"
          size={18}
          color="#374151"
        />

        <Text className="ml-2 text-gray-700 font-medium">
          {selectedSort}
        </Text>
      </TouchableOpacity>

    </View>
  );
}