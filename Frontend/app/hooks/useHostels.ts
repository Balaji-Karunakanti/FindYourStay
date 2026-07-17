import { hostels } from "../constants/dummyData";

export const useHostels = () => {
  return {
    hostels,
    loading: false,
  };
};