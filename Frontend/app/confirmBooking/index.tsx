import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { router } from "expo-router";

import BookingHeader from "../components/ui/confirmBooking/BookingHeader";
import BookingHostelCard from "../components/ui/confirmBooking/BookingHostelCard";
import ResidentInfoCard from "../components/ui/confirmBooking/ResidentInfoCard";
import UploadedDocumentCard from "../components/ui/confirmBooking/UploadedDocumentCard";
import PriceBreakdownCard from "../components/ui/confirmBooking/PriceBreakdownCard";
import AgreementCheckbox from "../components/ui/confirmBooking/AgreementCheckbox";
import PaymentButton from "../components/ui/confirmBooking/PaymentButton";

import { confirmBookingData } from "../constants/confirmBookingData";

export default function ConfirmBookingScreen() {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeCancellation, setAgreeCancellation] = useState(false);
  const [agreeInformation, setAgreeInformation] = useState(false);

  const allChecked =
    agreeTerms &&
    agreeCancellation &&
    agreeInformation;

  return (
    <SafeAreaView className="flex-1 bg-[#F8FAFC]">
      <BookingHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
      >
        {/* Hostel Card */}
        <BookingHostelCard
          image={confirmBookingData.hostel.image}
          hostelName={confirmBookingData.hostel.hostelName}
          roomType={confirmBookingData.hostel.roomType}
          sharingType={confirmBookingData.hostel.sharingType}
          moveInDate={confirmBookingData.hostel.moveInDate}
          duration={confirmBookingData.hostel.duration}
        />

        {/* Resident */}
        <ResidentInfoCard
          fullName={confirmBookingData.resident.fullName}
          gender={confirmBookingData.resident.gender}
          mobileNumber={confirmBookingData.resident.mobileNumber}
          email={confirmBookingData.resident.email}
          onEdit={() => {
            console.log("Edit Resident");
          }}
        />

        {/* Document */}
        <UploadedDocumentCard
          documentName={confirmBookingData.document.documentName}
          fileName={confirmBookingData.document.fileName}
          onReplace={() => {
            console.log("Replace Document");
          }}
        />

        {/* Pricing */}
        <PriceBreakdownCard
          monthlyRent={confirmBookingData.pricing.monthlyRent}
          securityDeposit={confirmBookingData.pricing.securityDeposit}
          maintenanceFee={confirmBookingData.pricing.maintenanceFee}
          platformFee={confirmBookingData.pricing.platformFee}
          total={confirmBookingData.pricing.total}
        />

        {/* Agreements */}
        <AgreementCheckbox
          checked={agreeTerms}
          title="I agree to the"
          highlightedText="Terms & Conditions"
          onPress={() => setAgreeTerms(!agreeTerms)}
        />

        <AgreementCheckbox
          checked={agreeCancellation}
          title="I accept the"
          highlightedText="Cancellation Policy"
          onPress={() =>
            setAgreeCancellation(!agreeCancellation)
          }
        />

        <AgreementCheckbox
          checked={agreeInformation}
          title="I confirm that all the information provided is correct."
          onPress={() =>
            setAgreeInformation(!agreeInformation)
          }
        />
      </ScrollView>

      {/* Bottom Button */}
      <PaymentButton
        disabled={!allChecked}
        onPress={() => {
          router.push("/payment");
        }}
      />
    </SafeAreaView>
  );
}