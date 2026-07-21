import { ScrollView, View } from "react-native";
import { router,useLocalSearchParams } from "expo-router";

import {
  RoomHero,
  RoomTitle,
  RoomInfoCard,
  AvailabilityCard,
  SectionHeader,
  AmenitiesGrid,
  PricingCard,
  RulesCard,
  BottomBookingBar,
} from "../../components/ui/roomDetails";

import { roomDetails } from "../../constants/roomDetailsData";

export default function RoomDetailsScreen() {
  const { id } = useLocalSearchParams();

  // Later fetch using roomId
  const room = roomDetails;

  return (
    <View className="flex-1 bg-slate-50">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <RoomHero images={room.images} />

        <RoomTitle
          title={room.name}
          subtitle="Premium Private Room"
        />

        <RoomInfoCard
          occupancy={room.occupancy}
          size={room.size}
          floor={room.floor}
          inventory={room.inventory}
          preference={room.preference}
        />

        <AvailabilityCard
          availableFrom={room.availableFrom}
        />

        <SectionHeader
          title="Included Amenities"
          icon="grid-outline"
        />

        <AmenitiesGrid
          amenities={room.amenities}
        />

        <SectionHeader
          title="Pricing Details"
          icon="cash-outline"
        />

        <PricingCard
          rent={room.pricing.rent}
          deposit={room.pricing.deposit}
          electricity={room.pricing.electricity}
          maintenance={room.pricing.maintenance}
        />

        <SectionHeader
          title="House Rules"
          icon="shield-checkmark-outline"
        />

        <RulesCard
          rules={room.rules}
        />
      </ScrollView>

     <BottomBookingBar
  rent={room.pricing.rent}
  onContact={() => {
    console.log("Contact Owner");
  }}
  onBook={() => {
    router.push("/confirmBooking");
  }}
/>
    </View>
  );
}