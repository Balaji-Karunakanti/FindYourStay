import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

interface Props {
  title: string;
  loading?: boolean;
  onPress: () => void;
}

export default function PrimaryButton({
  title,
  loading,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      className="bg-blue-900 rounded-2xl py-4 items-center"
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white font-bold text-lg">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}