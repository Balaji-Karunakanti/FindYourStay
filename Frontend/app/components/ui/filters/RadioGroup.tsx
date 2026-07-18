import {
  View,
  TouchableOpacity,
  Text,
} from "react-native";

interface Props {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function RadioGroup({
  options,
  selected,
  onChange,
}: Props) {
  return (
    <View className="flex-row justify-between">
      {options.map((item) => {
        const active = selected === item;

        return (
          <TouchableOpacity
            key={item}
            onPress={() => onChange(item)}
            className="flex-row items-center"
          >
            <View
              className={`w-6 h-6 rounded-full border-2 mr-2 items-center justify-center
              ${
                active
                  ? "border-[#0B1F72]"
                  : "border-gray-300"
              }`}
            >
              {active && (
                <View className="w-3 h-3 rounded-full bg-[#0B1F72]" />
              )}
            </View>

            <Text className="text-base text-gray-800">
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}