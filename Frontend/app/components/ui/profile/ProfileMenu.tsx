import { View } from "react-native";
import MenuItem from "./MenuItem";
import { menuItems } from "../../../constants/profileData";
import { Ionicons } from "@expo/vector-icons";

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
  return (
    <View className="mx-4 mt-6">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          title={item.title}
          icon={iconMap[item.icon]}
          onPress={() => {
            console.log(`${item.title} Pressed`);
          }}
        />
      ))}
    </View>
  );
}