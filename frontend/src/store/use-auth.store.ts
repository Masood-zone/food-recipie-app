import { create } from "zustand";

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  clearUser: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));
