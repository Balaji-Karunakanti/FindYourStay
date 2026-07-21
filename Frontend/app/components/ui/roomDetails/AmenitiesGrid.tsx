import { View } from "react-native";
import AmenityItem from "./AmenityItem";
import { Ionicons } from "@expo/vector-icons";

interface AmenitiesGridProps {
  amenities: string[];
}

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  "Wi-Fi": "wifi-outline",
  "Attached Bath": "water-outline",
  "Study Table": "desktop-outline",
  Wardrobe: "cube-outline",
  Fan: "aperture-outline",
  AC: "snow-outline",
  Geyser: "flame-outline",
  "Power Backup": "flash-outline",
  Laundry: "shirt-outline",
  Kitchen: "restaurant-outline",
  Parking: "car-outline",
  Lift: "arrow-up-circle-outline",
  TV: "tv-outline",
  Balcony: "home-outline",
};

export default function AmenitiesGrid({
  amenities,
}: AmenitiesGridProps) {
  return (
    <View className="mx-4 mt-6">
      <View className="flex-row flex-wrap justify-between">
        {amenities.map((amenity) => (
          <AmenityItem
            key={amenity}
            title={amenity}
            icon={iconMap[amenity] ?? "checkmark-circle-outline"}
          />
        ))}
      </View>
    </View>
  );
}