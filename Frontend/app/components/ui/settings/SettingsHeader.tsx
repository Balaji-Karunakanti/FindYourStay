import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View, Text } from "react-native";

export default function SettingsHeader() {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top"]}>
      <View className="flex-row items-center px-5 py-4 bg-white">
        <TouchableOpacity
          onPress={() => router.back()}
          className="mr-4"
          activeOpacity={0.7}
        >
          <Ionicons
            name="chevron-back"
            size={26}
            color="#0F172A"
          />
        </TouchableOpacity>

        <Text className="text-2xl font-bold text-slate-900">
          App Settings
        </Text>
      </View>
    </SafeAreaView>
  );
}