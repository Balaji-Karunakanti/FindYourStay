import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../buttons/PrimaryButton";

interface BottomBookingBarProps {
  price: number;
  onBookNow?: () => void;
}

export default function BottomBookingBar({
  price,
  onBookNow,
}: BottomBookingBarProps) {
  return (
    <SafeAreaView
      edges={["bottom"]}
      className="bg-white border-t border-gray-200"
    >
<View className="flex-row items-center justify-center px-6 py-1">       
        <View className="flex-1 justify-center">
          <Text className="text-gray-500 text-sm">
            Starting From
          </Text>

          <Text className="text-2xl font-bold text-blue-600 mt-1">
            ₹{price.toLocaleString()}
          </Text>

          <Text className="text-gray-400 text-xs mt-1">
            Per Month
          </Text>
        </View>

        {/* Button */}
        <View className="w-40 ml-4">
          <PrimaryButton
            title="Book Now"
            onPress={onBookNow ?? (() => {})}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}