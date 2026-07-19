// types/settings.ts

import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";

export type ThemeOption = "Light" | "Dark" | "System";

export interface ToggleSetting {
  id: string;
  title: string;
  subtitle?: string;
  value: boolean;
}

export interface AboutItem {
  id: string;
  title: string;
  value?: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  showArrow?: boolean;
}

export interface LanguageOption {
  label: string;
  value: string;
}