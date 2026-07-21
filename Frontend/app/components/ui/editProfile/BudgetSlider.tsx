import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";

interface BudgetSliderProps {
  value: number;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  onValueChange: (value: number) => void;
}

export default function BudgetSlider({
  value,
  minimumValue = 500,
  maximumValue = 5000,
  step = 100,
  onValueChange,
}: BudgetSliderProps) {
  return (
    <View className="mb-5">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-[14px] text-gray-700 font-medium">
          Monthly Budget
        </Text>

        <Text className="text-base font-semibold text-blue-600">
          ${value.toLocaleString()}
        </Text>
      </View>

      <Slider
        value={value}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        onValueChange={onValueChange}
        minimumTrackTintColor="#2563EB"
        maximumTrackTintColor="#D1D5DB"
        thumbTintColor="#2563EB"
      />

      <View className="flex-row justify-between mt-2">
        <Text className="text-xs text-gray-500">
          ${minimumValue}
        </Text>

        <Text className="text-xs text-gray-500">
          ${maximumValue.toLocaleString()}
        </Text>
      </View>
    </View>
  );
}