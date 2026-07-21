import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BookingHostelCardProps {
  image: any;
  hostelName: string;
  roomType: string;
  sharingType: string;
  moveInDate: string;
  duration: string;
}

export default function BookingHostelCard({
  image,
  hostelName,
  roomType,
  sharingType,
  moveInDate,
  duration,
}: BookingHostelCardProps) {
  return (
    <View className="mx-5 mt-5 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
      <View className="flex-row">
        {/* Hostel Image */}
        <Image
          source={image}
          className="h-24 w-24 rounded-xl"
          resizeMode="cover"
        />

        {/* Details */}
        <View className="ml-4 flex-1 justify-center">
          <Text
            numberOfLines={2}
            className="text-[22px] font-bold text-[#142B7B]"
          >
            {hostelName}
          </Text>

          {/* Room */}
          <View className="mt-2 flex-row items-center">
            <Ionicons
              name="bed-outline"
              size={18}
              color="#6B7280"
            />
            <Text className="ml-2 text-base text-gray-600">
              {roomType} • {sharingType}
            </Text>
          </View>

          {/* Duration */}
          <View className="mt-2 flex-row items-center">
            <Ionicons
              name="calendar-outline"
              size={18}
              color="#6B7280"
            />
            <Text className="ml-2 text-base text-gray-600">
              {moveInDate} • {duration}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}