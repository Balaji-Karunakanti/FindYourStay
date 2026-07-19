import { ContactOption, FAQ, FeedbackOption } from "../types/help";

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How do I book a hostel?",
    answer:
      "Browse hostels, select your preferred stay, choose dates, and tap Book Now to complete your booking.",
  },
  {
    id: "2",
    question: "How do refunds work?",
    answer:
      "Refunds are processed according to the hostel's cancellation policy. Eligible refunds are credited within 5–7 business days.",
  },
  {
    id: "3",
    question: "How do I upload documents?",
    answer:
      "Go to Profile → Documents, tap Upload, and select the required document from your device.",
  },
  {
    id: "4",
    question: "Can I cancel my booking?",
    answer:
      "Yes. Open My Bookings, select your booking, and tap Cancel Booking if cancellation is allowed.",
  },
  {
    id: "5",
    question: "How can I contact the hostel?",
    answer:
      "You can call or message the hostel directly from the hostel details page after booking.",
  },
];

export const contactOptions: ContactOption[] = [
  {
    id: "1",
    title: "Live Chat",
    description:
      "Chat with our experts for instant resolution. Average wait time: 2 minutes.",
    action: "Start Chat",
    icon: "chatbubble-ellipses-outline",
    variant: "primary",
  },
  {
    id: "2",
    title: "Call Support",
    description:
      "Speak directly with our support team. Available 24 hours a day.",
    action: "+1 800 555 STAY",
    icon: "call-outline",
    variant: "outline",
  },
  {
    id: "3",
    title: "Email Support",
    description:
      "Have a detailed issue? Send us an email. Typical response within 4 hours.",
    action: "support@findyourstay.com",
    icon: "mail-outline",
    variant: "outline",
  },
  {
    id: "4",
    title: "Raise Ticket",
    description:
      "Create a support ticket for billing, refunds, or booking modifications.",
    action: "Create Ticket",
    icon: "document-text-outline",
    variant: "primary",
  },
];

export const feedbackOptions: FeedbackOption[] = [
  {
    label: "Yes",
    icon: "thumbs-up-outline",
  },
  {
    label: "No",
    icon: "thumbs-down-outline",
  },
];