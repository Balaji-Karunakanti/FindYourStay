import { useState } from "react";
import { FlatList, View } from "react-native";

import CategoryChip from "../buttons/CategoryChip";
import { categories } from "../../../constants/dummyData";

interface CategoryListProps {
  onCategoryChange?: (category: string) => void;
}

export default function CategoryList({
  onCategoryChange,
}: CategoryListProps) {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0].title
  );

  const handleCategoryPress = (title: string) => {
    setSelectedCategory(title);
    onCategoryChange?.(title);
  };

  return (
    <View className="mt-6">
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        renderItem={({ item }) => (
          <CategoryChip
            title={item.title}
            active={selectedCategory === item.title}
            onPress={() => handleCategoryPress(item.title)}
          />
        )}
      />
    </View>
  );
}