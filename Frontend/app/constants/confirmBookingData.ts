import { IMAGES } from "./images";
import { ConfirmBookingData } from "../types/confirmBooking";

export const confirmBookingData: ConfirmBookingData = {
  hostel: {
    image: IMAGES.hostel1,
    hostelName: "The Heritage Co-Living",
    roomType: "Premium Single",
    sharingType: "Single Sharing",
    moveInDate: "Oct 15, 2025",
    duration: "6 Months",
  },

  resident: {
    fullName: "Sarah Jenkins",
    gender: "Female",
    mobileNumber: "+44 7700 900077",
    email: "sarah.j@outlook.com",
  },

  document: {
    documentName: "Aadhaar Card",
    fileName: "ID_Verification_SarahJ.pdf",
  },

  pricing: {
    monthlyRent: 15000,
    securityDeposit: 3000,
    maintenanceFee: 300,
    platformFee: 200,
    total: 18500,
  },
};