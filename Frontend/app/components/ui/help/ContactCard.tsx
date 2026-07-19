import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ContactOption } from "../../../types/help";

type Props = {
  item: ContactOption;
  onPress?: () => void;
};

export default function ContactCard({ item, onPress }: Props) {
  const isPrimary = item.variant === "primary";

  return (
    <View className="mx-5 mb-5 rounded-3xl bg-white p-5 shadow-sm">
      <View className="flex-row items-start">
        {/* Icon */}
        <View className="h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF4FF]">
          <Ionicons
            name={item.icon as any}
            size={28}
            color="#2563EB"
          />
        </View>

        {/* Content */}
        <View className="ml-4 flex-1">
          <Text className="text-xl font-bold text-slate-900">
            {item.title}
          </Text>

          <Text className="mt-2 text-sm leading-6 text-slate-500">
            {item.description}
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className={`mt-5 rounded-xl py-3 ${
              isPrimary
                ? "bg-[#0B2E7A]"
                : "border border-[#0B2E7A] bg-white"
            }`}
          >
            <Text
              className={`text-center text-base font-semibold ${
                isPrimary
                  ? "text-white"
                  : "text-[#0B2E7A]"
              }`}
            >
              {item.action}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}