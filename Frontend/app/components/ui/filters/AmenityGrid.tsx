import { View } from "react-native";
import AmenityChip from "../common/AmenityChip";

interface Props {
  amenities: string[];
  selectedAmenities: string[];
  onToggle: (amenity: string) => void;
}

export default function AmenityGrid({
  amenities,
  selectedAmenities,
  onToggle,
}: Props) {
  return (
    <View className="flex-row flex-wrap">
      {amenities.map((item) => (
        <AmenityChip
          key={item}
          title={item}
          selected={selectedAmenities.includes(item)}
          onPress={() => onToggle(item)}
        />
      ))}
    </View>
  );
}