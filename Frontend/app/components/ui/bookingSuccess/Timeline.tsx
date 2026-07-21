import { View, Text } from "react-native";

import TimelineItem from "./TimelineItem";
import { TimelineStep } from "../../../types/bookingSuccess";

interface TimelineProps {
  timeline: TimelineStep[];
}

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <View className="mx-5 mt-8">
      {/* Section Title */}
      <Text className="mb-6 text-3xl font-bold text-[#0A2472]">
        Next Steps
      </Text>

      {/* Timeline Items */}
      {timeline.map((item, index) => (
        <TimelineItem
          key={item.id}
          title={item.title}
          description={item.description}
          completed={item.completed}
          isLast={index === timeline.length - 1}
        />
      ))}
    </View>
  );
}