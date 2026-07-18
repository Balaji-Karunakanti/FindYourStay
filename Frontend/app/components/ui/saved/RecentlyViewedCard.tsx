import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  hostel: {
    id: string;
    name: string;
    image: any;
    price: number;
    rating: number;
  };
  onPress?: () => void;
}

export default function RecentlyViewedCard({
  hostel,
  onPress = () => {},
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      className="mr-4 w-56 overflow-hidden rounded-3xl bg-white shadow-sm"
    >
      {/* Image */}
      <Image
        source={hostel.image}
        className="h-36 w-full"
        resizeMode="cover"
      />

      {/* Content */}
      <View className="p-4">
        <Text
          numberOfLines={1}
          className="text-lg font-bold text-[#0B2478]"
        >
          {hostel.name}
        </Text>

        <View className="mt-2 flex-row items-center justify-between">
          <Text className="text-xl font-bold text-[#0B2478]">
            £{hostel.price}
          </Text>

          <View className="flex-row items-center">
            <Ionicons
              name="star"
              size={14}
              color="#FBBF24"
            />

            <Text className="ml-1 text-sm font-medium text-gray-600">
              {hostel.rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}