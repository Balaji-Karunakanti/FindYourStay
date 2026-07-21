import React from "react";
import { Text, TextInput, View } from "react-native";

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad";
  editable?: boolean;
  multiline?: boolean;
}

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  editable = true,
  multiline = false,
}: InputFieldProps) {
  return (
    <View className="mb-5">
      <Text className="text-[14px] text-gray-700 mb-2">
        {label}
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        keyboardType={keyboardType}
        editable={editable}
        multiline={multiline}
        className="bg-gray-100 rounded-xl px-4 py-3 text-[15px] text-gray-900 border border-transparent"
      />
    </View>
  );
}