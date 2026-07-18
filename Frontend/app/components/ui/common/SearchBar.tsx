import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  onSearchPress?: () => void;
  onFilterPress?: () => void;
  onVoicePress?: () => void;
}

export default function SearchBar({
  value,
  placeholder = "Search hostels, PGs or locations",
  onChangeText,
  onSearchPress,
  onFilterPress,
  onVoicePress,
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-white border border-gray-200 rounded-3xl px-4 py-2 shadow-sm">

      {/* Search Icon */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSearchPress}
      >
        <Ionicons
          name="search-outline"
          size={22}
          color="#6B7280"
        />
      </TouchableOpacity>

      {/* Input */}
      <TextInput
        className="flex-1 ml-3 text-base text-gray-900"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        returnKeyType="search"
        autoCorrect={false}
      />

      {/* Voice */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onVoicePress}
      >
        <Ionicons
          name="mic-outline"
          size={22}
          color="#6B7280"
        />
      </TouchableOpacity>

      {/* Divider */}
      <View className="w-px h-8 bg-gray-300 mx-3" />

      {/* Filter */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onFilterPress}
        className="w-11 h-11 rounded-2xl bg-[#0B2E7A] items-center justify-center"
      >
        <Ionicons
          name="options-outline"
          size={20}
          color="white"
        />
      </TouchableOpacity>

    </View>
  );
}