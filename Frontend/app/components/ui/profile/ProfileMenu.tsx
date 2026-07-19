import { View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import MenuItem from "./MenuItem";
import { menuItems } from "../../../constants/profileData";

const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
  "calendar-outline": "calendar-outline",
  "heart-outline": "heart-outline",
  "document-text-outline": "document-text-outline",
  "card-outline": "card-outline",
  "create-outline": "create-outline",
  "help-circle-outline": "help-circle-outline",
  "shield-checkmark-outline": "shield-checkmark-outline",
  "settings-outline": "settings-outline",
};

export default function ProfileMenu() {
  const handleMenuPress = (title: string) => {
    switch (title) {
      case "My Bookings":
        router.push("/(tabs)/bookings");
        break;

      case "Saved Hostels":
        router.push("/(tabs)/saved");
        break;

      case "Documents":
        router.push("/documents");
        break;

      case "Payment History":
        console.log("Payment History");
        break;

      case "Reviews":
        console.log("Reviews");
        break;

      case "Help & Support":
        console.log("Help & Support");
        router.push("/help")
        break;

      case "Privacy & Security":
        console.log("Privacy & Security");
        router.push("/privacy")
        break;

      case "App Settings":
        console.log("App Settings");
        router.push("/settings");
        break;

      default:
        console.log(title);
    }
  };

  return (
    <View className="mx-4 mt-6">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          icon={iconMap[item.icon]}
          onPress={() => handleMenuPress(item.title)}
        />
      ))}
    </View>
  );
}