import { Image, Text, TouchableOpacity, View, ImageSourcePropType } from "react-native";

interface LocationCardProps {
  image: ImageSourcePropType;
  name: string;
  hostels: number;
  onPress?: () => void;
}

export default function LocationCard({
  image,
  name,
  hostels,
  onPress,
}: LocationCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="mr-4"
    >
      <View className="w-44 rounded-3xl overflow-hidden bg-white shadow-sm">
        {/* Image */}
        <Image
          source={image}
          className="w-full h-36"
          resizeMode="cover"
        />

        {/* Details */}
        <View className="p-4">
          <Text
            className="text-lg font-bold text-gray-900"
            numberOfLines={1}
          >
            {name}
          </Text>

          <Text className="text-gray-500 mt-1">
            {hostels} Hostels
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}