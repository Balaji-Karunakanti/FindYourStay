import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Location } from "../../../types/hostelDetails";
import SectionTitle from "./SectionTitle";

interface LocationMapProps {
  location: Location;
  onOpenMap?: () => void;
}

export default function LocationMap({
  location,
  onOpenMap,
}: LocationMapProps) {
  return (
    <View className="px-5 mt-8 mb-8">
      <SectionTitle title="Location" />

      <View className="bg-white rounded-3xl overflow-hidden border border-gray-100">

        {/* Map Image */}
        <Image
          source={location.mapImage}
          className="w-full h-52"
          resizeMode="cover"
        />

        {/* Content */}
        <View className="p-5">

          <View className="flex-row items-start">

            <Ionicons
              name="location"
              size={22}
              color="#2563EB"
            />

            <Text
              className="flex-1 ml-3 text-gray-700 leading-6"
            >
              {location.address}
            </Text>

          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onOpenMap}
            className="mt-5 bg-blue-600 rounded-xl py-4 flex-row justify-center items-center"
          >
            <Ionicons
              name="navigate"
              size={20}
              color="white"
            />

            <Text className="text-white font-semibold ml-2">
              Open in Maps
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </View>
  );
}