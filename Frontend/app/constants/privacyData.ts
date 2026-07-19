import { SettingItem } from "../types/privacy";

export const securitySettings: SettingItem[] = [
  {
    id: "password",
    title: "Change Password",
    icon: "lock-closed-outline",
    type: "navigation",
  },
  {
    id: "2fa",
    title: "Two-Factor Authentication",
    subtitle: "Strongly recommended",
    icon: "shield-checkmark-outline",
    type: "navigation",
  },
  {
    id: "devices",
    title: "Login Devices",
    icon: "phone-portrait-outline",
    type: "navigation",
  },
];

export const privacySettings: SettingItem[] = [
  {
    id: "phone",
    title: "Show Phone Number",
    subtitle: "Allow hosts to see your mobile number",
    icon: "call-outline",
    type: "toggle",
    value: false,
  },
  {
    id: "email",
    title: "Show Email Address",
    subtitle: "Used for communication with staff",
    icon: "mail-outline",
    type: "toggle",
    value: true,
  },
  {
    id: "offers",
    title: "Personalized Offers",
    subtitle: "Based on your search history",
    icon: "gift-outline",
    type: "toggle",
    value: true,
  },
  {
    id: "marketing",
    title: "Marketing Notifications",
    subtitle: "Discounts and hostel news",
    icon: "notifications-outline",
    type: "toggle",
    value: false,
  },
];

export const accountSettings: SettingItem[] = [
  {
    id: "download",
    title: "Download My Data",
    icon: "download-outline",
    type: "navigation",
  },
  {
    id: "deactivate",
    title: "Deactivate Account",
    icon: "pause-circle-outline",
    type: "navigation",
  },
  {
    id: "delete",
    title: "Delete Account",
    icon: "trash-outline",
    type: "navigation",
    danger: true,
  },
];