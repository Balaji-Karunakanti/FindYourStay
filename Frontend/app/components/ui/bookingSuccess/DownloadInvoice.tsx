import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DownloadInvoiceProps {
  onPress?: () => void;
}

export default function DownloadInvoice({
  onPress,
}: DownloadInvoiceProps) {
  return (
    <View className="items-center mt-2 mb-10">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        className="flex-row items-center"
      >
        <Ionicons
          name="download-outline"
          size={20}
          color="#0F766E"
        />

        <Text className="ml-2 text-base font-semibold text-teal-700">
          Download Invoice
        </Text>
      </TouchableOpacity>
    </View>
  );
}