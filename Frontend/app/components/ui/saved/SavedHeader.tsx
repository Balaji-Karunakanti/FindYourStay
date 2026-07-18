import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  count?: number;
  onSortPress?: () => void;
};

export default function SavedHeader({
  count = 0,
  onSortPress,
}: Props) {
  return (
    <View className="px-5 pt-5 pb-4">
      <View className="flex-row items-start justify-between">
        <View>
          <Text className="text-4xl font-bold text-[#0B2478]">
            Saved Hostels
          </Text>

          <Text className="mt-2 text-base text-gray-500">
            {count} {count === 1 ? "place" : "places"} saved for your next stay
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onSortPress}
          className="flex-row items-center rounded-2xl border border-gray-200 bg-white px-5 py-4"
        >
          <Ionicons
            name="options-outline"
            size={18}
            color="#0B2478"
          />

          <Text className="ml-2 font-semibold text-[#0B2478]">
            Sort
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}