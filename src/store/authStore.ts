import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "@/services/api";
import type { UserProfile } from "@/types/api";

interface AuthState {
  user: UserProfile | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  setAuth: (data: { user: UserProfile; accessToken: string }) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setAuth: (data) => {
        set({
          user: data.user,
          accessToken: data.accessToken,
          isAuthenticated: true,
          error: null,
        });
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          error: null,
        });
      },

      checkAuth: async () => {
        const { accessToken } = get();
        if (!accessToken) return;

        try {
          // Verify token is still valid by fetching profile
          const user = await api.getProfile(accessToken);
          set({ user, isAuthenticated: true });
        } catch (error) {
          // If profile fetch fails, token is likely invalid/expired
          get().logout();
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);
