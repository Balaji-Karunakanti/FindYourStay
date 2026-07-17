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
  rating: number;
  price: number;
  location: string;
  distance: string;
  verified: boolean;
  availableRooms: number;
  isSaved: boolean;
  amenities: string[];
}