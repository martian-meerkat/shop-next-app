import { create } from "zustand";
import AuthAPI from "@/lib/api/auth";
import { persist, createJSONStorage } from "zustand/middleware";
import { type AuthState } from "@/types/user";
import { isApiError } from "@/types/errors";

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      error: null,

      login: async ({ username, password }) => {
        set({ isLoading: true, error: null });

        try {
          const data = await AuthAPI.login({ username, password });

          AuthAPI.setAuthToken(data.accessToken);

          set({
            user: {
              id: data.id,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
            },
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            error: isApiError(error) ? error.message : "AuthenticationError",
            isLoading: false,
          });
        }
      },

      logout: () => {
        AuthAPI.removeAuthToken();
        set({ user: null, error: null });
      },

      clearError: () => {
        set({ error: null });
      },

      checkAuth: () => {
        return !!get().user;
      },
    }),
    {
      name: "shop_user",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
);
