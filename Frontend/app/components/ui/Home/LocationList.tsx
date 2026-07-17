import { FlatList, View } from "react-native";

import LocationCard from "../cards/LocationCard";
import { location } from "../../../constants/dummyData";

interface LocationListProps {
  onLocationPress?: (locationId: string) => void;
}

export default function LocationList({
  onLocationPress,
}: LocationListProps) {
  return (
    <View>
      <FlatList
        horizontal
        data={location}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        renderItem={({ item }) => (
          <LocationCard
            image={item.image}
            name={item.name}
            hostels={item.hostels}
            onPress={() => onLocationPress?.(item.id)}
          />
        )}
      />
    </View>
  );
}