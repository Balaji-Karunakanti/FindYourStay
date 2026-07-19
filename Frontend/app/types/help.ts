export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactOption {
  id: string;
  title: string;
  description: string;
  action: string;
  icon: string;
  variant: "primary" | "outline";
}

export interface FeedbackOption {
  label: string;
  icon: string;
}