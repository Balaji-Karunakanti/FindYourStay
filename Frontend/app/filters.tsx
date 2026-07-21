import { useState } from "react";
import { ScrollView, View } from "react-native";

import {
  FilterHeader,
  FilterSection,
  RangeSlider,
  OptionChip,
  RadioGroup,
  AmenityGrid,
  FilterFooter,
  ToggleRow,
  CalendarPicker,
} from "./components/ui/filters";

import {
  ROOM_TYPES,
  GENDERS,
  AMENITIES,
} from "./constants/filterOptions";

export default function FiltersScreen() {
  const [budget, setBudget] = useState(1200);

  const [distance, setDistance] = useState(5);

const [selectedDate, setSelectedDate] = useState("");

const [verifiedOnly, setVerifiedOnly] = useState(false);

const [foodIncluded, setFoodIncluded] = useState(false);
  const [roomType, setRoomType] = useState("Single");

  const [gender, setGender] = useState("Unisex");

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "Wi-Fi",
    "AC",
  ]);

  const toggleAmenity = (amenity: string) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities((prev) =>
        prev.filter((item) => item !== amenity)
      );
    } else {
      setSelectedAmenities((prev) => [...prev, amenity]);
    }
  };

 const resetFilters = () => {
  setBudget(1200);
  setDistance(5);

  setRoomType("Single");
  setGender("Unisex");

  setSelectedAmenities([]);

  setSelectedDate("");

  setVerifiedOnly(false);

  setFoodIncluded(false);
};

const applyFilters = () => {
  console.log({
    budget,
    distance,
    roomType,
    gender,
    selectedAmenities,
    selectedDate,
    verifiedOnly,
    foodIncluded,
  });

  // Later you'll navigate back or call your API here.
};

  return (
    <View className="flex-1 mt-12 bg-gray-100">
      <FilterHeader onReset={resetFilters} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        {/* Budget */}

        <FilterSection title="Budget">
          <RangeSlider
            value={budget}
            minimumValue={300}
            maximumValue={5000}
            minimumLabel="₹300"
            maximumLabel="₹5000+"
            valueLabel={`₹${budget}`}
            onValueChange={(value) =>
              setBudget(Math.round(value))
            }
          />
        </FilterSection>

        {/* Room Type */}

        <FilterSection title="Room Type">
          <View className="flex-row flex-wrap justify-between">
            {ROOM_TYPES.map((item) => (
              <OptionChip
                key={item}
                label={item}
                selected={roomType === item}
                onPress={() => setRoomType(item)}
              />
            ))}
          </View>
        </FilterSection>

        {/* Gender */}

        <FilterSection title="Gender Preference">
          <RadioGroup
            options={GENDERS}
            selected={gender}
            onChange={setGender}
          />
        </FilterSection>

        {/* Amenities */}

        <FilterSection title="Amenities">
          <AmenityGrid
            amenities={AMENITIES}
            selectedAmenities={selectedAmenities}
            onToggle={toggleAmenity}
          />
        </FilterSection>
                {/* Availability */}

        <FilterSection title="Availability">
          <CalendarPicker
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </FilterSection>

        {/* Distance */}

        <FilterSection title="Distance">
          <RangeSlider
            value={distance}
            minimumValue={1}
            maximumValue={20}
            minimumLabel="1 km"
            maximumLabel="20 km"
            valueLabel={`${distance} km`}
            onValueChange={(value) =>
              setDistance(Math.round(value))
            }
          />
        </FilterSection>

        {/* Additional Filters */}

        <FilterSection title="Additional">
          <ToggleRow
            title="Verified Hostels"
            subtitle="Show only verified hostels"
            value={verifiedOnly}
            onValueChange={setVerifiedOnly}
          />

          <ToggleRow
            title="Food Included"
            subtitle="Include meals in hostel rent"
            value={foodIncluded}
            onValueChange={setFoodIncluded}
          />
        </FilterSection>

      </ScrollView>

      <FilterFooter
        onClear={resetFilters}
        onApply={applyFilters}
      />

    </View>
  );
}