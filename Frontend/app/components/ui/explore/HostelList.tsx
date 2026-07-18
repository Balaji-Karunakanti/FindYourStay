import React from "react";
import {
  FlatList,
  RefreshControl,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import HostelCard from "../cards/HostelCard";
import { Hostel } from "../../../types/hostel";

interface HostelListProps {
  hostels: Hostel[];
  loading?: boolean;
  refreshing?: boolean;
  onRefresh?: () =>void;
  onEndReached?: () => void;
  onHostelPress?: (hostel: Hostel) => void;
  onSaveToggle?: (hostel: Hostel) => void;
}

export default function HostelList({
  hostels,
  loading = false,
  refreshing = false,
  onRefresh,
  onEndReached,
  onHostelPress,
  onSaveToggle,
}: HostelListProps) {
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center py-10">
        <ActivityIndicator size="large" color="#132A7A" />
        <Text className="mt-4 text-gray-500">
          Loading hostels...
        </Text>
      </View>
    );
  }

  if (!loading && hostels.length === 0) {
    return (
      <View className="flex-1 justify-center items-center py-16">
        <Text className="text-lg font-semibold text-gray-700">
          No Hostels Found
        </Text>

        <Text className="text-gray-500 mt-2 text-center px-8">
          Try changing your filters or search keyword.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={hostels}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingBottom: 120,
      }}
     renderItem={({ item }) => (
  <HostelCard
    hostel={item}
    onPress={() => onHostelPress?.(item)}
    onSavePress={() => onSaveToggle?.(item)}
  />
)}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
}