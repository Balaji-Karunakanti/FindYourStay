export interface Category {
  id: string;
  title: string;
}

export interface Location {
  id: string;
  name: string;
  hostels: number;
  image: any;
}

export interface Hostel {
  id: string;
  name: string;
  category: string;
  image: any;
  price: number;
  rating: number;
  location: string;
  distance: string;
  verified: boolean;
  availableRooms: number;
  isSaved: boolean;
  amenities: string[];
}

export interface ExploreFilter {
  id: string;
  label: string;
}

export interface SortOption {
  id: string;
  label: string;
}