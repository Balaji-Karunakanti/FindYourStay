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