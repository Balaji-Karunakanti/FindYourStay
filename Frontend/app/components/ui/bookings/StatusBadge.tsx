import { View, Text } from "react-native";
import { PaymentStatus } from "../../../types/booking";

type Props = {
  status: PaymentStatus;
};

const statusStyles = {
  SUCCESS: {
    bg: "bg-green-100",
    text: "text-green-700",
    label: "SUCCESSFUL",
  },
  PENDING: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    label: "PENDING",
  },
  FAILED: {
    bg: "bg-red-100",
    text: "text-red-600",
    label: "FAILED",
  },
} as const;

export default function StatusBadge({ status }: Props) {
  const style = statusStyles[status];

  return (
    <View className={`self-start rounded-full px-3 py-1 ${style.bg}`}>
      <Text className={`text-xs font-semibold ${style.text}`}>
        {style.label}
      </Text>
    </View>
  );
}