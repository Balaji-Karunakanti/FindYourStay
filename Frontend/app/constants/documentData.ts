import { DocumentItem } from "../types/document";

export const verification = {
  uploaded: 2,
  total: 5,
  progress: 0.4,
};

export const documents: DocumentItem[] = [
  {
    id: "1",
    title: "Aadhaar Card",
    status: "verified",
    uploaded: true,
    icon: "card",
  },
  {
    id: "2",
    title: "PAN Card",
    status: "pending",
    uploaded: true,
    icon: "document-text",
  },
  {
    id: "3",
    title: "Passport",
    status: "optional",
    uploaded: false,
    icon: "globe",
  },
  {
    id: "4",
    title: "Driving License",
    status: "optional",
    uploaded: false,
    icon: "car",
  },
  {
    id: "5",
    title: "Student ID",
    status: "recommended",
    uploaded: false,
    icon: "school",
  },
];