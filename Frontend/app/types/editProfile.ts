export interface PersonalInformation {
  fullName: string;
  mobile: string;
  email: string;
  dob: string;
  gender: string;
}

export interface WorkInformation {
  collegeName: string;
  companyName: string;
  occupation: string;
  preferredCity: string;
  budget: number;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface LifestylePreference {
  id: string;
  title: string;
  selected: boolean;
}

export interface EditProfileData {
  personal: PersonalInformation;
  work: WorkInformation;
  emergency: EmergencyContact;
  lifestyle: LifestylePreference[];
}