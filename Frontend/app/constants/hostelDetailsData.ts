import { IMAGES } from "./images";
import { HostelDetails } from "../types/hostelDetails";

export const hostelDetails: HostelDetails = {
  id: "1",

  name: "The Heritage Co-Living",

  coverImage: IMAGES.hostel1,

  gallery: [
    IMAGES.hostel1,
    IMAGES.room1,
    IMAGES.room2,
    IMAGES.room3,
  ],

  rating: 4.8,

  totalReviews: 124,

  verified: true,

  address: "7th Cross HSR Layout, Sector 2",

  city: "Bangalore",

  state: "Karnataka",

  distanceFromCenter: "1.2 km",

  distanceFromMetro: "5 mins",

  amenities: [
    {
      id: "1",
      title: "Free Wi-Fi",
      icon: "wifi-outline",
    },
    {
      id: "2",
      title: "Central AC",
      icon: "snow-outline",
    },
    {
      id: "3",
      title: "3 Meals",
      icon: "restaurant-outline",
    },
    {
      id: "4",
      title: "Laundry",
      icon: "shirt-outline",
    },
    {
      id: "5",
      title: "Power Backup",
      icon: "flash-outline",
    },
    {
      id: "6",
      title: "Parking",
      icon: "car-outline",
    },
    {
      id: "7",
      title: "CCTV Security",
      icon: "videocam-outline",
    },
    {
      id: "8",
      title: "Modern Gym",
      icon: "barbell-outline",
    },
    {
      id: "9",
      title: "Study Room",
      icon: "book-outline",
    },
  ],

  rooms: [
    {
      id: "1",
      title: "Single Premium",
      subtitle: "Independent room with private balcony",

      image: IMAGES.room1,

      monthlyRent: 18500,

      available: true,

      tag: "2 AVAILABLE",
    },

    {
      id: "2",

      title: "Double Sharing",

      subtitle: "Shared room with attached washroom",

      image: IMAGES.room2,

      monthlyRent: 12000,

      available: true,

      tag: "FEW LEFT",
    },

    {
      id: "3",

      title: "Triple Sharing",

      subtitle: "Budget friendly option",

      image: IMAGES.room3,

      monthlyRent: 8500,

      available: false,

      tag: "FULL",
    },
  ],

  reviews: [
    {
      id: "1",

      name: "Aditya Sharma",

      avatar: IMAGES.avatar,

      rating: 5,

      date: "2 weeks ago",

      review:
        "Cleanest hostel I've stayed in Bangalore. The management is very professional and the food quality is surprisingly consistent. Highly recommended for working professionals.",
    },

    {
      id: "2",

      name: "Megha Kapoor",

      avatar: IMAGES.avatar,

      rating: 5,

      date: "1 month ago",

      review:
        "Safe environment for girls. Security guards are available all day. Gym is small but maintained well.",
    },
  ],

  pricing: {
    monthlyRent: 12000,

    deposit: 24000,

    electricity: "As per meter",

    maintenance: "Included",

    refundPolicy:
      "1 month notice period required. Full security deposit refundable after deduction of minimal cleaning charges.",
  },

  host: {
    id: "1",

    name: "Vikram Singh",

    avatar: IMAGES.avatar,

    responseTime: "Responds within 10 mins",
  },

  location: {
    address: "HSR Layout, Bangalore",

    latitude: 12.9116,

    longitude: 77.6474,

    mapImage: IMAGES.map,
  },
};