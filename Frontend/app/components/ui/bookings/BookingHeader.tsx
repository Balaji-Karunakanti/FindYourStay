import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = {
  title?: string;
  profileImage?: string;
  onFilterPress?: () => void;
};

export default function BookingHeader({
  title = "Bookings",
  profileImage,
  onFilterPress,
}: Props) {
  const router = useRouter();

  return (
    <View className="flex-row items-center justify-between px-5 py-4 bg-white">
      {/* Left */}
      <View className="flex-row items-center flex-1">
        <TouchableOpacity
          onPress={() => router.back()}
          className="h-11 w-11 items-center justify-center rounded-full bg-gray-100"
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color="#111827"
          />
        </TouchableOpacity>

        <Text className="ml-4 text-3xl font-bold text-gray-900">
          {title}
        </Text>
      </View>

      {/* Right */}
      <View className="flex-row items-center">
        <TouchableOpacity
          onPress={onFilterPress}
          className="mr-3 h-11 w-11 items-center justify-center rounded-full bg-gray-100"
        >
          <Ionicons
            name="options-outline"
            size={22}
            color="#111827"
          />
        </TouchableOpacity>

        {profileImage ? (
          <Image
            source={{ uri: profileImage }}
            className="h-11 w-11 rounded-full"
          />
        ) : (
          <View className="h-11 w-11 items-center justify-center rounded-full bg-[#1B2E7B]">
            <Ionicons
              name="person"
              size={20}
              color="white"
            />
          </View>
        )}
      </View>
    </View>
  );
}