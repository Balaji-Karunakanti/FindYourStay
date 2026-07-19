import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";

import {
  FontSizeSlider,
  LanguageRow,
  LogoutCard,
  SectionCard,
  SettingsHeader,
  SettingsItem,
  SettingsToggle,
  ThemeSelector,
} from "../components/ui/settings";

import {
  aboutItems,
  accessibilitySettings,
  languageOptions,
  notificationSettings,
  themeOptions,
} from "../constants/settingsData";

import { ThemeOption } from "../types/settings";

export default function SettingsScreen() {
  const [theme, setTheme] = useState<ThemeOption>("System");
  const [language] = useState(languageOptions[0].label);
  const [fontSize, setFontSize] = useState(100);

  const [accessibility, setAccessibility] =
    useState(accessibilitySettings);

  const [notifications, setNotifications] =
    useState(notificationSettings);

  const updateAccessibility = (id: string, value: boolean) => {
    setAccessibility((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value } : item
      )
    );
  };

  const updateNotification = (id: string, value: boolean) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value } : item
      )
    );
  };

  return (
    <View className="flex-1 bg-slate-100">
      <SettingsHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Appearance */}

        <SectionCard>
          <ThemeSelector
            options={themeOptions as ThemeOption[]}
            selectedTheme={theme}
            onSelect={setTheme}
          />
        </SectionCard>

        {/* Accessibility */}

        <SectionCard>
          <LanguageRow
            language={language}
            onPress={() =>
              Alert.alert("Language", "Language picker coming soon.")
            }
          />

          <FontSizeSlider
            value={fontSize}
            onValueChange={setFontSize}
          />

          {accessibility.map((item, index) => (
            <SettingsToggle
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              value={item.value}
              onValueChange={(value) =>
                updateAccessibility(item.id, value)
              }
              showBorder={index !== accessibility.length - 1}
            />
          ))}
        </SectionCard>

        {/* Notifications */}

        <SectionCard>
          {notifications.map((item, index) => (
            <SettingsToggle
              key={item.id}
              title={item.title}
              value={item.value}
              onValueChange={(value) =>
                updateNotification(item.id, value)
              }
              showBorder={index !== notifications.length - 1}
            />
          ))}
        </SectionCard>

        {/* About */}

        <SectionCard>
          {aboutItems.map((item, index) => (
            <SettingsItem
              key={item.id}
              item={item}
              showBorder={index !== aboutItems.length - 1}
              onPress={() =>
                Alert.alert(item.title)
              }
            />
          ))}
        </SectionCard>

        <LogoutCard
          onPress={() =>
            Alert.alert(
              "Logout",
              "You have been logged out."
            )
          }
        />
      </ScrollView>
    </View>
  );
}