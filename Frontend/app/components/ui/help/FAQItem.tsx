import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { FAQ } from "../../../types/help";

type Props = {
  item: FAQ;
};

export default function FAQItem({ item }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {/* Question */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setExpanded(!expanded)}
        className="flex-row items-center justify-between px-5 py-4"
      >
        <Text className="flex-1 pr-4 text-base font-semibold text-slate-900">
          {item.question}
        </Text>

        <Ionicons
          name={expanded ? "chevron-up" : "chevron-down"}
          size={22}
          color="#64748B"
        />
      </TouchableOpacity>

      {/* Answer */}
      {expanded && (
        <View className="border-t border-slate-100 px-5 pb-5 pt-4">
          <Text className="text-sm leading-6 text-slate-500">
            {item.answer}
          </Text>
        </View>
      )}
    </View>
  );
}