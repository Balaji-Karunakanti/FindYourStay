import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { feedbackOptions } from "../../../constants/helpData";

export default function FeedbackCard() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <View className="mx-5 my-8 rounded-3xl bg-white p-6 shadow-sm">
      {/* Title */}
      <Text className="text-xl font-bold text-slate-900">
        Was this page helpful?
      </Text>

      <Text className="mt-2 text-sm leading-6 text-slate-500">
        Your feedback helps us improve our support experience.
      </Text>

      {/* Buttons */}
      <View className="mt-6 flex-row justify-between">
        {feedbackOptions.map((item) => {
          const isSelected = selected === item.label;

          return (
            <TouchableOpacity
              key={item.label}
              activeOpacity={0.8}
              onPress={() => setSelected(item.label)}
              className={`flex-1 flex-row items-center justify-center rounded-2xl py-4 ${
                isSelected
                  ? "bg-[#0B2E7A]"
                  : "border border-slate-200 bg-white"
              } ${item.label === "Yes" ? "mr-2" : "ml-2"}`}
            >
              <Ionicons
                name={item.icon as any}
                size={22}
                color={isSelected ? "#fff" : "#0F172A"}
              />

              <Text
                className={`ml-2 text-base font-semibold ${
                  isSelected ? "text-white" : "text-slate-900"
                }`}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}