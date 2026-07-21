import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { router } from "expo-router";
import * as Linking from "expo-linking";

import {
  SuccessHeader,
  BookingInfoCard,
  Timeline,
  OwnerCard,
  ActionButtons,
  DownloadInvoice,
} from "../components/ui/bookingSuccess";

import { bookingSuccessData } from "../constants/bookingSuccessData";

export default function BookingSuccessScreen() {
  const booking = bookingSuccessData;

  const handleCallOwner = () => {
    Linking.openURL(`tel:${booking.owner.phone}`);
  };

  const handleChatOwner = () => {
    console.log("Open Chat");
    // router.push("/chat");
  };

  const handleReturnHome = () => {
    router.replace("/(tabs)/home");
  };

  const handleViewBooking = () => {
    router.replace("/(tabs)/bookings");
  };

  const handleDownloadInvoice = () => {
    console.log("Download Invoice");
    // Implement invoice download here
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F7F8FA]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      >
        <SuccessHeader />

        <BookingInfoCard booking={booking} />

        <Timeline timeline={booking.timeline} />

        <OwnerCard
          owner={booking.owner}
          onCall={handleCallOwner}
          onChat={handleChatOwner}
        />

        <ActionButtons
          onHomePress={handleReturnHome}
          onBookingPress={handleViewBooking}
        />

        <DownloadInvoice
          onPress={handleDownloadInvoice}
        />
      </ScrollView>
    </SafeAreaView>
  );
}