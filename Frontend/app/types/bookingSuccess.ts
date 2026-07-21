export interface TimelineStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface Owner {
  name: string;
  role: string;
  image: any;
  phone: string;
}

export interface BookingSuccess {
  bookingId: string;
  status: "Paid" | "Pending";
  hostelName: string;
  roomType: string;
  moveInDate: string;
  price: number;
  address: string;
  mapImage: any;
  owner: Owner;
  timeline: TimelineStep[];
}