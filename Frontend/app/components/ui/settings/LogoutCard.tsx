import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";

interface LogoutCardProps {
  onPress: () => void;
}

export default function LogoutCard({
  onPress,
}: LogoutCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="bg-red-50 border border-red-100 rounded-2xl mx-4 mt-6 mb-8 py-4 flex-row items-center justify-center"
    >
      <Ionicons
        name="log-out-outline"
        size={22}
        color="#DC2626"
      />

      <Text className="ml-2 text-base font-semibold text-red-600">
        Log Out
      </Text>
    </TouchableOpacity>
  );
}