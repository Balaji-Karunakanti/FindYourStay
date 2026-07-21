export interface Amenity {
  id: string;
  title: string;
  icon: string;
}

export interface Room {
  id: string;
  title: string;
  subtitle: string;
  image: any;
  monthlyRent: number;
  available: boolean;
  tag?: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: any;
  rating: number;
  date: string;
  review: string;
}

export interface Pricing {
  monthlyRent: number;
  deposit: number;
  electricity: string;
  maintenance: string;
  refundPolicy: string;
}

export interface Host {
  id: string;
  name: string;
  avatar: any;
  responseTime: string;
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
  mapImage: any;
}

export interface HostelDetails {
  id: string;

  name: string;

  coverImage: any;

  gallery: any[];

  rating: number;

  totalReviews: number;

  verified: boolean;

  address: string;

  city: string;

  state: string;

  distanceFromCenter: string;

  distanceFromMetro: string;

  amenities: Amenity[];

  rooms: Room[];

  reviews: Review[];

  pricing: Pricing;

  host: Host;

  location: Location;
}