import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

interface DropdownFieldProps {
  label: string;
  value: string;
  options: string[];
  onValueChange: (value: string) => void;
}

export default function DropdownField({
  label,
  value,
  options,
  onValueChange,
}: DropdownFieldProps) {
  return (
    <View className="mb-5">
      <Text className="text-[14px] text-gray-700 mb-2">
        {label}
      </Text>

      <View className="bg-gray-100 rounded-xl overflow-hidden">
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onValueChange(itemValue)}
          dropdownIconColor="#1E3A8A"
        >
          {options.map((option) => (
            <Picker.Item
              key={option}
              label={option}
              value={option}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
}