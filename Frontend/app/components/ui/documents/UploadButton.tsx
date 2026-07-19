import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress?: () => void;
};

export default function UploadButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      className="mx-4 mb-6 flex-row items-center justify-center rounded-2xl bg-[#102A83] py-4"
      style={{
        shadowColor: "#102A83",
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
      }}
    >
      <Ionicons
        name="cloud-upload-outline"
        size={22}
        color="#fff"
      />

      <Text className="ml-2 text-base font-semibold text-white">
        Upload New Document
      </Text>
    </TouchableOpacity>
  );
}