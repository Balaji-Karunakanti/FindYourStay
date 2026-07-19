import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View, Text } from "react-native";

interface LanguageRowProps {
  language: string;
  onPress: () => void;
}

export default function LanguageRow({
  language,
  onPress,
}: LanguageRowProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center justify-between px-4 py-4 border-b border-slate-100"
    >
      <View className="flex-row items-center flex-1">
        <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center mr-3">
          <Ionicons
            name="language-outline"
            size={20}
            color="#2563EB"
          />
        </View>

        <View className="flex-1">
          <Text className="text-base font-semibold text-slate-900">
            Language
          </Text>

          <Text className="text-sm text-slate-500 mt-1">
            {language}
          </Text>
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#94A3B8"
      />
    </TouchableOpacity>
  );
}