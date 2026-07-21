import { EditProfileData } from "../types/editProfile";

export const editProfileData: EditProfileData = {
  personal: {
    fullName: "Alexander Thompson",
    mobile: "+1 (555) 012-3456",
    email: "alexander.t@example.com",
    dob: "08/15/1995",
    gender: "Male",
  },

  work: {
    collegeName: "",
    companyName: "TechSolutions Global",
    occupation: "Product Designer",
    preferredCity: "San Francisco",
    budget: 2400,
  },

  emergency: {
    name: "",
    relationship: "",
    phone: "",
  },

  lifestyle: [
    {
      id: "early",
      title: "Early Sleeper",
      selected: false,
    },
    {
      id: "late",
      title: "Late Sleeper",
      selected: true,
    },
    {
      id: "veg",
      title: "Vegetarian",
      selected: true,
    },
    {
      id: "nonveg",
      title: "Non-Vegetarian",
      selected: false,
    },
    {
      id: "nonsmoker",
      title: "Non-Smoker",
      selected: true,
    },
    {
      id: "smoker",
      title: "Smoker",
      selected: false,
    },
    {
      id: "quiet",
      title: "Quiet Environment",
      selected: true,
    },
    {
      id: "social",
      title: "Social Environment",
      selected: false,
    },
  ],
};

export const genderOptions = ["Male", "Female", "Other"];

export const budget = {
  min: 500,
  max: 5000,
  step: 100,
};