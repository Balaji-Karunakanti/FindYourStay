import Slider from "@react-native-community/slider";
import { View, Text } from "react-native";

interface RangeSliderProps {
  value: number;
  minimumValue: number;
  maximumValue: number;
  minimumLabel: string;
  maximumLabel: string;
  valueLabel?: string;
  onValueChange: (value: number) => void;
}

export default function RangeSlider({
  value,
  minimumValue,
  maximumValue,
  minimumLabel,
  maximumLabel,
  valueLabel,
  onValueChange,
}: RangeSliderProps) {
  return (
    <View>
      {valueLabel && (
        <Text className="text-right text-base font-semibold text-teal-700 mb-2">
          {valueLabel}
        </Text>
      )}

      <Slider
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor="#0B1F72"
        maximumTrackTintColor="#E5E7EB"
        thumbTintColor="#0B1F72"
        onValueChange={onValueChange}
      />

      <View className="flex-row justify-between mt-2">
        <Text className="text-gray-500">{minimumLabel}</Text>
        <Text className="text-gray-500">{maximumLabel}</Text>
      </View>
    </View>
  );
}