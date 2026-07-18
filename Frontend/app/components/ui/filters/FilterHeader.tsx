import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface FilterHeaderProps {
  onReset: () => void;
}

export default function FilterHeader({
  onReset,
}: FilterHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 py-4 bg-white">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#0B1F72"
          />
        </TouchableOpacity>

        <Text className="text-2xl font-bold text-[#0B1F72] ml-4">
          Filters
        </Text>
      </View>

      <TouchableOpacity onPress={onReset}>
        <Text className="text-base font-semibold text-teal-700">
          Reset
        </Text>
      </TouchableOpacity>
    </View>
  );
}