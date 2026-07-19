import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress?: () => void;
};

export default function EmergencyCard({ onPress }: Props) {
  return (
    <View className="mx-5 mt-6 rounded-3xl border border-red-200 bg-red-50 p-5">
      <View className="flex-row items-center justify-between">
        {/* Left Section */}
        <View className="flex-1 flex-row items-center">
          {/* Icon */}
          <View className="h-14 w-14 items-center justify-center rounded-full bg-red-600">
            <Ionicons name="warning-outline" size={28} color="#fff" />
          </View>

          {/* Text */}
          <View className="ml-4 flex-1">
            <Text className="text-xl font-bold text-red-700">
              Emergency Support
            </Text>

            <Text className="mt-1 text-sm leading-5 text-gray-600">
              Immediate assistance for security concerns or urgent stay issues.
            </Text>
          </View>
        </View>

        {/* SOS Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          className="ml-4 rounded-xl bg-red-600 px-5 py-4"
        >
          <Text className="text-center text-base font-bold text-white">
            SOS
          </Text>

          <Text className="text-center text-xs font-medium text-white">
            SUPPORT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}