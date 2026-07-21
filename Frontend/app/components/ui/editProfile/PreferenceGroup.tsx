import React from "react";
import { View } from "react-native";
import PreferenceChip from "./PreferenceChip";
import { LifestylePreference } from "../../../types/editProfile";

interface PreferenceGroupProps {
  preferences: LifestylePreference[];
  onToggle: (id: string) => void;
}

export default function PreferenceGroup({
  preferences,
  onToggle,
}: PreferenceGroupProps) {
  return (
    <View className="flex-row flex-wrap">
      {preferences.map((item) => (
        <PreferenceChip
          key={item.id}
          title={item.title}
          selected={item.selected}
          onPress={() => onToggle(item.id)}
        />
      ))}
    </View>
  );
}