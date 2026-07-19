import { ReactNode } from "react";
import { View } from "react-native";

interface SectionCardProps {
  children: ReactNode;
}

export default function SectionCard({
  children,
}: SectionCardProps) {
  return (
    <View
      className="bg-white rounded-2xl mx-4 mt-3 overflow-hidden"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      {children}
    </View>
  );
}