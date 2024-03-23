import { create } from "zustand";

// create a store for user details
export const useCustomerStore = create((set) => ({
  name: null,
  setName: (name) => set({ name }),
  gstNumber: null,
  setGstNumber: (gstNumber) => set({ gstNumber }),
  phoneNumber: null,
  setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
  date: null,
  setDate: (date) => set({ date }),
}));
