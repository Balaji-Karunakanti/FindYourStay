export type DocumentStatus =
  | "verified"
  | "pending"
  | "optional"
  | "recommended";

export interface DocumentItem {
  id: string;
  title: string;
  status: DocumentStatus;
  uploaded: boolean;
  icon: string;
}