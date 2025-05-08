// src/store/authStore.ts
import { create } from 'zustand';

interface AuthState {
  authLevel: string;
  emailOrPhone: string;
  customerExists: boolean | null;
  setAuthLevel: (value: string) => void;
  setEmailOrPhone: (value: string) => void;
  setCustomerExists: (exists: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  authLevel:'auth',
  emailOrPhone: '',
  customerExists: null,
  setEmailOrPhone: (value) => set({ emailOrPhone: value }),
  setAuthLevel: (value) => set({ authLevel: value }),
  setCustomerExists: (exists) => set({ customerExists: exists }),
}));
