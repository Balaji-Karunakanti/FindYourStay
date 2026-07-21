import { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

interface HostelHeroProps {
  images: any[];
}

export default function HostelHero({ images }: HostelHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / width
    );
    setCurrentIndex(index);
  };

  return (
    <View className="relative">
      {/* Image Slider */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={{ height: 300 }}
      >
        {images.map((item, index) => (
          <Image
            key={index}
            source={item}
            style={{
              width,
              height: 300,
            }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>

      {/* Top Buttons */}
      <View className="absolute top-14 left-5 right-5 flex-row justify-between">
        {/* Back */}
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-11 h-11 rounded-full bg-white/90 justify-center items-center"
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color="#111827"
          />
        </TouchableOpacity>

        <View className="flex-row">
          {/* Favorite */}
          <TouchableOpacity className="w-11 h-11 rounded-full bg-white/90 justify-center items-center mr-3">
            <Ionicons
              name="heart-outline"
              size={22}
              color="#111827"
            />
          </TouchableOpacity>

          {/* Share */}
          <TouchableOpacity className="w-11 h-11 rounded-full bg-white/90 justify-center items-center">
            <Ionicons
              name="share-social-outline"
              size={22}
              color="#111827"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Image Counter */}
      <View className="absolute bottom-5 right-5 bg-black/60 px-3 py-1.5 rounded-full">
        <Text className="text-white font-semibold">
          {currentIndex + 1}/{images.length}
        </Text>
      </View>
    </View>
  );
}