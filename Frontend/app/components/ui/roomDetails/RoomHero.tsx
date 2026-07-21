import { useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

interface RoomHeroProps {
  images: any[];
}

export default function RoomHero({ images }: RoomHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setActiveIndex(index);
        }}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width,
              height: 280,
            }}
            resizeMode="cover"
          />
        )}
      />

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-14 left-5 bg-white rounded-full p-2"
      >
        <Ionicons
          name="arrow-back"
          size={22}
          color="#1E3A8A"
        />
      </TouchableOpacity>

      {/* Favorite */}
      <TouchableOpacity
        className="absolute top-14 right-5 bg-white rounded-full p-2"
      >
        <Ionicons
          name="heart-outline"
          size={22}
          color="#1E3A8A"
        />
      </TouchableOpacity>

      {/* Pagination */}
      <View className="absolute bottom-4 w-full flex-row justify-center">
        {images.map((_, index) => (
          <View
            key={index}
            className={`mx-1 rounded-full ${
              activeIndex === index
                ? "bg-white w-5 h-2"
                : "bg-gray-300 w-2 h-2"
            }`}
          />
        ))}
      </View>
    </View>
  );
}