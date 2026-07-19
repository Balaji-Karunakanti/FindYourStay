import { Ionicons } from "@expo/vector-icons";

export interface SettingItem {
  id: string;
  title: string;
  subtitle?: string;
  icon: keyof typeof Ionicons.glyphMap;
  type: "toggle" | "navigation";
  value?: boolean;
  danger?: boolean;
}