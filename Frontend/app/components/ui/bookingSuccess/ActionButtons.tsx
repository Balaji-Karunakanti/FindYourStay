import { View, TouchableOpacity, Text } from "react-native";
import PrimaryButton from "../buttons/PrimaryButton";

interface ActionButtonsProps {
  onHomePress: () => void;
  onBookingPress: () => void;
}

export default function ActionButtons({
  onHomePress,
  onBookingPress,
}: ActionButtonsProps) {
  return (
    <View className="mx-5 mt-8 mb-6">
      {/* Return Home */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onHomePress}
        className="mb-4 h-14 items-center justify-center rounded-2xl border-2 border-[#0A2472] bg-white"
      >
        <Text className="text-base font-semibold text-[#0A2472]">
          Return Home
        </Text>
      </TouchableOpacity>

      {/* View Booking */}
      <PrimaryButton
        title="View Booking"
        onPress={onBookingPress}
      />
    </View>
  );
}