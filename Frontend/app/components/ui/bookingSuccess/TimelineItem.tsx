import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TimelineItemProps {
  title: string;
  description: string;
  completed: boolean;
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  description,
  completed,
  isLast = false,
}: TimelineItemProps) {
  return (
    <View className="flex-row">
      {/* Timeline Indicator */}
      <View className="items-center mr-4">
        {/* Circle */}
        <View
          className={`h-7 w-7 items-center justify-center rounded-full ${
            completed
              ? "bg-teal-700"
              : "border-2 border-teal-700 bg-white"
          }`}
        >
          {completed && (
            <Ionicons
              name="checkmark"
              size={16}
              color="white"
            />
          )}
        </View>

        {/* Vertical Line */}
        {!isLast && (
          <View
            className={`w-0.5 flex-1 ${
              completed ? "bg-teal-700" : "bg-gray-300"
            }`}
          />
        )}
      </View>

      {/* Content */}
      <View className="flex-1 pb-8">
        <Text className="text-lg font-semibold text-gray-900">
          {title}
        </Text>

        <Text className="mt-1 text-sm leading-5 text-gray-500">
          {description}
        </Text>
      </View>
    </View>
  );
}