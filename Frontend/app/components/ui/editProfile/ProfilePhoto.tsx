import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ProfilePhotoProps {
  image: ImageSourcePropType;
  onChangePhoto: () => void;
}

export default function ProfilePhoto({
  image,
  onChangePhoto,
}: ProfilePhotoProps) {
  return (
    <View className="items-center mb-8">
      <View className="relative">
        <Image
          source={image}
          className="w-32 h-32 rounded-full"
          resizeMode="cover"
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onChangePhoto}
          className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-blue-600 items-center justify-center border-4 border-white"
        >
          <Ionicons
            name="camera"
            size={18}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onChangePhoto}
        className="mt-4"
      >
        <Text className="text-blue-600 font-semibold text-base">
          Change Photo
        </Text>
      </TouchableOpacity>
    </View>
  );
}