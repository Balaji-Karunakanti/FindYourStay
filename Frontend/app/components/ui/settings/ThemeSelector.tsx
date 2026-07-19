import { View, Text, TouchableOpacity } from "react-native";
import { ThemeOption } from "../../../types/settings";

interface ThemeSelectorProps {
  options: ThemeOption[];
  selectedTheme: ThemeOption;
  onSelect: (theme: ThemeOption) => void;
}

export default function ThemeSelector({
  options,
  selectedTheme,
  onSelect,
}: ThemeSelectorProps) {
  return (
    <View className="px-4 py-4">
      <Text className="text-base font-semibold text-slate-900 mb-3">
        Theme
      </Text>

      <View className="flex-row bg-slate-100 rounded-xl p-1">
        {options.map((option) => {
          const active = option === selectedTheme;

          return (
            <TouchableOpacity
              key={option}
              activeOpacity={0.8}
              onPress={() => onSelect(option)}
              className={`flex-1 items-center justify-center rounded-lg py-3 ${
                active ? "bg-white" : ""
              }`}
              style={
                active
                  ? {
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.08,
                      shadowRadius: 3,
                      elevation: 2,
                    }
                  : undefined
              }
            >
              <Text
                className={`text-sm font-semibold ${
                  active ? "text-slate-900" : "text-slate-500"
                }`}
              >
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}