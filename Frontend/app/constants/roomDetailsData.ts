export const roomDetails = {
  id: "1",

  name: "Single Premium Room",

  images: [
    require("../../assets/images/room1.jpg"),
    require("../../assets/images/room2.jpg"),
    require("../../assets/images/room3.jpg"),
  ],

  occupancy: "Single",

  size: "180 sq.ft",

  floor: "2nd Floor",

  inventory: "1 Bed Available",

  preference: "Male only",

  availableFrom: "Oct 15, 2023",

  amenities: [
    "Wi-Fi",
    "Attached Bath",
    "Study Table",
    "Wardrobe",
    "Fan",
    "AC",
    "Geyser",
    "Power Backup",
  ],

  pricing: {
    rent: 18500,
    deposit: 37000,
    electricity: "As per meter",
    maintenance: "Included",
  },

  rules: [
    "Visitors allowed till 8 PM",
    "No Smoking",
    "No Pets",
    "11 PM Curfew",
    "Breakfast : 8 AM - 10 AM",
    "Dinner : 8 PM - 10 PM",
  ],
};