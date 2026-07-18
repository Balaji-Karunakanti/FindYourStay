import { Alert, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LogoutButton() {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            console.log("Logout Pressed");

            // TODO:
            // Clear user session
            // router.replace("/(auth)/login");
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleLogout}
      className="mx-4 mt-6 mb-10 flex-row items-center justify-center rounded-2xl bg-red-500 py-4"
    >
      <Ionicons
        name="log-out-outline"
        size={22}
        color="white"
      />

      <Text className="ml-2 text-lg font-bold text-white">
        Logout
      </Text>
    </TouchableOpacity>
  );
}