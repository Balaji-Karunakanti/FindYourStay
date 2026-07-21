import { Ionicons } from "@expo/vector-icons";

export interface PaymentMethod {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export interface PaymentSummaryData {
  rent: number;
  deposit: number;
  platformFee: number;
  discount: number;
  gst: number;
}

export interface PaymentData {
  methods: PaymentMethod[];
  summary: PaymentSummaryData;
}