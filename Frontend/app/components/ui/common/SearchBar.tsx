import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchBarProps {
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onSearchPress?: () => void;
  onFilterPress?: () => void;
}

export default function SearchBar({
  value,
  placeholder = "Search hostels, PGs or locations",
  onChangeText,
  onSearchPress,
  onFilterPress,
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-white border border-gray-200 rounded-3xl mx-5 mt-6 px-4 py-2 shadow-sm">
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
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        className="flex-1 text-base ml-3"
      />

      {/* Mic */}
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons
          name="mic-outline"
          size={22}
          color="#6B7280"
        />
      </TouchableOpacity>

      {/* Divider */}
      <View className="w-px h-8 bg-gray-300 mx-3" />

      {/* Filter Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onFilterPress}
        className="h-12 w-12 rounded-2xl bg-[#0B2E7A] items-center justify-center"
      >
        <Ionicons
          name="options-outline"
          size={22}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}