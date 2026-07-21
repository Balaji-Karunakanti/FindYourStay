import { ScrollView, View } from "react-native";

import { Room } from "../../../types/hostelDetails";
import SectionTitle from "./SectionTitle";
import RoomCard from "./RoomCard";

interface RoomTypesProps {
  rooms: Room[];
  onRoomPress?: (room: Room) => void;
}

export default function RoomTypes({
  rooms,
  onRoomPress,
}: RoomTypesProps) {
  return (
    <View className="mt-6">
      <View className="px-5">
        <SectionTitle title="Room Types" />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 5,
        }}
      >
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            onPress={() => onRoomPress?.(room)}
          />
        ))}
      </ScrollView>
    </View>
  );
}