import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import {
  PaymentHeader,
  PaymentMethods,
  PaymentSummary,
  SecurityCard,
} from "../components/ui/payment";

import {
  BookingHostelCard,
  PaymentButton,
} from "../components/ui/confirmBooking";

import { confirmBookingData } from "../constants/confirmBookingData";
import { paymentSummary } from "../constants/paymentData";

export default function PaymentScreen() {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [promoCode, setPromoCode] = useState("");

  const handleApplyPromo = () => {
    console.log("Promo Code:", promoCode);
  };

 const handlePayment = () => {
  // Perform payment logic here

  router.replace("/bookingSuccess");
};

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <PaymentHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
<BookingHostelCard
  image={confirmBookingData.hostel.image}
  hostelName={confirmBookingData.hostel.hostelName}
  roomType={confirmBookingData.hostel.roomType}
  sharingType={confirmBookingData.hostel.sharingType}
  moveInDate={confirmBookingData.hostel.moveInDate}
  duration={confirmBookingData.hostel.duration}
/>


        <PaymentMethods
          selectedMethod={selectedMethod}
          onSelectMethod={setSelectedMethod}
        />

        <SecurityCard />

      <PaymentSummary
  rent={confirmBookingData.pricing.monthlyRent}
  deposit={confirmBookingData.pricing.securityDeposit}
  platformFee={confirmBookingData.pricing.platformFee}
  discount={0}
  gst={0}
  promoCode={promoCode}
  onPromoChange={setPromoCode}
  onApplyPromo={handleApplyPromo}
/>
      </ScrollView>

      <PaymentButton
        title={`Pay Securely ₹${
          paymentSummary.rent +
          paymentSummary.deposit +
          paymentSummary.platformFee +
          paymentSummary.gst -
          paymentSummary.discount
        }`}
        onPress={handlePayment}
        paymentTitle="Confirm Booking"
      />
    </SafeAreaView>
  );
}