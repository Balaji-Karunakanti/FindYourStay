import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DocumentStatus as Status } from "../../../types/document";

type Props = {
  status: Status;
};

export default function DocumentStatus({ status }: Props) {
  const getConfig = () => {
    switch (status) {
      case "verified":
        return {
          label: "Verified",
          color: "#059669",
          icon: "checkmark-circle",
        };

      case "pending":
        return {
          label: "Under Review",
          color: "#2563EB",
          icon: "time",
        };

      case "optional":
        return {
          label: "Optional",
          color: "#9CA3AF",
          icon: undefined,
        };

      case "recommended":
        return {
          label: "Strongly Recommended",
          color: "#F59E0B",
          icon: undefined,
        };

      default:
        return {
          label: "",
          color: "#9CA3AF",
          icon: undefined,
        };
    }
  };

  const config = getConfig();

  return (
    <View className="mt-1 flex-row items-center">
      {config.icon && (
        <Ionicons
          name={config.icon as any}
          size={14}
          color={config.color}
        />
      )}

      <Text
        className={`${config.icon ? "ml-1" : ""} text-xs italic`}
        style={{ color: config.color }}
      >
        {config.label}
      </Text>
    </View>
  );
}