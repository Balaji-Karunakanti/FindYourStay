

import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import { hostelDetails } from "../constants/hostelDetailsData";
import { BottomBookingBar, HostCard, HostelHero, HostelInfo, LocationMap, PricingCard, ReviewsSection, RoomTypes } from "../components/ui/hostelDetails";
import { router } from "expo-router";



export default function HostelDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 110, // Leave space for sticky bar
          }}
        >
          <HostelHero images={hostelDetails.gallery} />

          <HostelInfo
            name={hostelDetails.name}
            address={`${hostelDetails.address}, ${hostelDetails.city}, ${hostelDetails.state}`}
            rating={hostelDetails.rating}
            totalReviews={hostelDetails.totalReviews}
            verified={hostelDetails.verified}
            city={hostelDetails.city}
            state={hostelDetails.state}
            distanceFromCenter={hostelDetails.distanceFromCenter}
            distanceFromMetro={hostelDetails.distanceFromMetro}
          />

       <RoomTypes
  rooms={hostelDetails.rooms}
  onRoomPress={(room) =>
    router.push({
      pathname: "/hostel/rooms/[id]",
      params: {
        id: room.id,
      },
    })
  }
/>
          <PricingCard pricing={hostelDetails.pricing} />
          <ReviewsSection reviews={hostelDetails.reviews} />
          <HostCard host={hostelDetails.host} />

          <LocationMap
            location={hostelDetails.location}
            onOpenMap={() => {}}
          />
        </ScrollView>

        {/* Sticky Bottom Bar */}
        <BottomBookingBar
          price={hostelDetails.pricing.monthlyRent}
          onBookNow={() => {}}
        />
      </View>
    </SafeAreaView>
  );
}