import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BottomBookingBarProps {
  rent: number;
  onContact: () => void;
  onBook: () => void;
}

export default function BottomBookingBar({
  rent,
  onContact,
  onBook,
}: BottomBookingBarProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white px-5 py-4">
      <View className="flex-row items-center justify-between">
        {/* Price */}
        <View>
          <Text className="text-xs text-gray-500">
            Starting From
          </Text>

          <Text className="mt-1 text-xl font-bold text-[#1E3A8A]">
            ₹{rent.toLocaleString()}
            <Text className="text-base font-medium text-gray-500">
              {" "}
              /month
            </Text>
          </Text>
        </View>

        {/* Buttons */}
        <View className="flex-row">
          {/* Contact */}
          <TouchableOpacity
            onPress={onContact}
            className="mr-3 flex-row items-center rounded-xl border border-[#1E3A8A] px-4 py-3"
          >
            <Ionicons
              name="call-outline"
              size={18}
              color="#1E3A8A"
            />

            <Text className="ml-2 font-semibold text-[#1E3A8A]">
              Contact
            </Text>
          </TouchableOpacity>

          {/* Book */}
          <TouchableOpacity
            onPress={onBook}
            className="flex-row items-center rounded-xl bg-[#1E3A8A] px-5 py-3"
          >
            <Ionicons
              name="bed-outline"
              size={18}
              color="white"
            />

            <Text className="ml-2 font-semibold text-white">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}