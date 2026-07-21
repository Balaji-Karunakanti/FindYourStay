export interface BookingHostel {
  image: any;
  hostelName: string;
  roomType: string;
  sharingType: string;
  moveInDate: string;
  duration: string;
}

export interface ResidentInfo {
  fullName: string;
  gender: string;
  mobileNumber: string;
  email: string;
}

export interface UploadedDocument {
  documentName: string;
  fileName: string;
}

export interface PriceBreakdown {
  monthlyRent: number;
  securityDeposit: number;
  maintenanceFee: number;
  platformFee: number;
  total: number;
}

export interface ConfirmBookingData {
  hostel: BookingHostel;
  resident: ResidentInfo;
  document: UploadedDocument;
  pricing: PriceBreakdown;
}