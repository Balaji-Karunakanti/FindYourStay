import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

interface FontSizeSliderProps {
  value: number;
  onValueChange: (value: number) => void;
}

export default function FontSizeSlider({
  value,
  onValueChange,
}: FontSizeSliderProps) {
  return (
    <View className="px-4 py-4 border-b border-slate-100">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-base font-semibold text-slate-900">
          Font Size
        </Text>

        <Text className="text-sm font-medium text-blue-600">
          {Math.round(value)}%
        </Text>
      </View>

      <View className="flex-row items-center">
        <Text className="text-xs font-medium text-slate-500 mr-3">
          A
        </Text>

        <Slider
          style={{ flex: 1, height: 40 }}
          minimumValue={80}
          maximumValue={150}
          step={10}
          value={value}
          onValueChange={onValueChange}
          minimumTrackTintColor="#2563EB"
          maximumTrackTintColor="#E2E8F0"
          thumbTintColor="#2563EB"
        />

        <Text className="text-xl font-bold text-slate-700 ml-3">
          A
        </Text>
      </View>
    </View>
  );
}