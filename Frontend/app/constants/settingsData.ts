// constants/settingsData.ts

import { AboutItem, LanguageOption, ToggleSetting } from "../types/settings";

export const themeOptions = ["Light", "Dark", "System"];

export const languageOptions: LanguageOption[] = [
  {
    label: "English (US)",
    value: "en",
  },
  {
    label: "English (UK)",
    value: "en-uk",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

export const accessibilitySettings: ToggleSetting[] = [
  {
    id: "contrast",
    title: "High Contrast Mode",
    subtitle: "Enhance visibility of UI elements",
    value: false,
  },
  {
    id: "reader",
    title: "Screen Reader Support",
    value: true,
  },
];

export const notificationSettings: ToggleSetting[] = [
  {
    id: "booking",
    title: "Booking Updates",
    value: true,
  },
  {
    id: "price",
    title: "Price Drop Alerts",
    value: true,
  },
  {
    id: "vacancy",
    title: "Vacancy Alerts",
    value: false,
  },
  {
    id: "review",
    title: "Review Reminders",
    value: true,
  },
  {
    id: "promo",
    title: "Promotional Notifications",
    value: false,
  },
];

export const aboutItems: AboutItem[] = [
  {
    id: "terms",
    title: "Terms & Conditions",
    showArrow: true,
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    showArrow: true,
  },
  {
    id: "version",
    title: "App Version",
    value: "v2.4.0",
  },
  {
    id: "rate",
    title: "Rate the App",
    icon: "star-outline",
    showArrow: true,
  },
  {
    id: "share",
    title: "Share the App",
    icon: "share-social-outline",
  },
];