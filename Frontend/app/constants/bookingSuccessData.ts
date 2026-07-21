import { BookingSuccess } from "../types/bookingSuccess";
import { IMAGES } from "./images";

export const bookingSuccessData: BookingSuccess = {
  bookingId: "FYS-882910",

  status: "Paid",

  hostelName: "The Heritage Co-Living",

  roomType: "Premium Single Room",

  moveInDate: "Oct 15, 2023",

  price: 450,

  address: "24 South Kensington, London, SW7 2RL",

  mapImage: IMAGES.map,

  owner: {
    name: "Sarah Jenkins",
    role: "Property Owner",
    image: IMAGES.owner,
    phone: "+91 9876543210",
  },

  timeline: [
    {
      id: 1,
      title: "Booking Confirmed",
      description: "Your payment has been processed successfully.",
      completed: true,
    },
    {
      id: 2,
      title: "Owner Notified",
      description: "Sarah Jenkins has been alerted about your reservation.",
      completed: true,
    },
    {
      id: 3,
      title: "Complete Verification",
      description:
        "Visit the hostel with your original ID proof for physical verification.",
      completed: false,
    },
    {
      id: 4,
      title: "Move-in Day",
      description:
        "Scheduled for Oct 15. Your room key will be ready upon arrival.",
      completed: false,
    },
  ],
};