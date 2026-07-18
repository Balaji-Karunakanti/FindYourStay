import { IMAGES } from "./images";
import {
  Category,
  Hostel,
  Location,
  ExploreFilter,
  SortOption,
} from "../types/hostel";

/* ---------------------------- Categories ---------------------------- */

export const categories: Category[] = [
  {
    id: "1",
    title: "Boys Hostel",
  },
  {
    id: "2",
    title: "Girls Hostel",
  },
  {
    id: "3",
    title: "PG",
  },
  {
    id: "4",
    title: "Apartment",
  },
];

/* ---------------------------- Locations ----------------------------- */

export const locations: Location[] = [
  {
    id: "1",
    name: "Camden",
    hostels: 12,
    image: IMAGES.location1,
  },
  {
    id: "2",
    name: "Kensington",
    hostels: 8,
    image: IMAGES.location2,
  },
  {
    id: "3",
    name: "Canary Wharf",
    hostels: 15,
    image: IMAGES.location3,
  },
  {
    id: "4",
    name: "Shoreditch",
    hostels: 10,
    image: IMAGES.location4,
  },
];

/* ----------------------------- Hostels ------------------------------ */

export const hostels: Hostel[] = [
  {
    id: "1",
    name: "The Scholar's Nest",
    category: "Boys Hostel",
    image: IMAGES.hostel1,
    price: 450,
    rating: 4.8,
    location: "22 Baker Street",
    distance: "1.2 km",
    verified: true,
    availableRooms: 8,
    isSaved: false,
    amenities: ["WiFi", "Fully AC", "Laundry"],
  },
  {
    id: "2",
    name: "Urban Stay Hostel",
    category: "Girls Hostel",
    image: IMAGES.hostel2,
    price: 520,
    rating: 4.6,
    location: "15 Oxford Street",
    distance: "2.5 km",
    verified: true,
    availableRooms: 5,
    isSaved: true,
    amenities: ["WiFi", "Kitchen", "Parking"],
  },
  {
    id: "3",
    name: "City Comfort PG",
    category: "PG",
    image: IMAGES.hostel3,
    price: 390,
    rating: 4.4,
    location: "10 King's Cross",
    distance: "1.8 km",
    verified: false,
    availableRooms: 12,
    isSaved: false,
    amenities: ["WiFi", "Laundry", "CCTV"],
  },
  {
    id: "4",
    name: "Green Leaf Residency",
    category: "Apartment",
    image: IMAGES.hostel4,
    price: 610,
    rating: 4.9,
    location: "45 Hyde Park",
    distance: "3.0 km",
    verified: true,
    availableRooms: 3,
    isSaved: false,
    amenities: ["WiFi", "Gym", "Meals Included"],
  },
];

/* -------------------------- Explore Filters ------------------------- */

export const exploreFilters: ExploreFilter[] = [
  {
    id: "budget",
    label: "Budget",
  },
  {
    id: "gender",
    label: "Gender",
  },
  {
    id: "room",
    label: "Room",
  },
  {
    id: "distance",
    label: "Distance",
  },
  {
    id: "amenities",
    label: "Amenities",
  },
  {
    id: "verified",
    label: "Verified",
  },
];

/* --------------------------- Sort Options --------------------------- */

export const sortOptions: SortOption[] = [
  {
    id: "nearest",
    label: "Nearest",
  },
  {
    id: "lowest_price",
    label: "Lowest Price",
  },
  {
    id: "highest_rated",
    label: "Highest Rated",
  },
  {
    id: "newest",
    label: "Newest",
  },
];