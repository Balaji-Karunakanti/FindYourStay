import React from "react";
import { ScrollView, View } from "react-native";
import CategoryChip from "../buttons/CategoryChip";

export interface FilterOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface FilterChipsProps {
  filters: FilterOption[];
  selectedFilter: string;
  onSelect: (id: string) => void;
}

export default function FilterChips({
  filters,
  selectedFilter,
  onSelect,
}: FilterChipsProps) {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingRight: 30,
        }}
      >
        {filters.map((filter) => (
          <CategoryChip
            key={filter.id}
            title={filter.label}
            active={selectedFilter === filter.id}
            icon={filter.icon}
            onPress={() => onSelect(filter.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}