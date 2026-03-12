import apiClient from "../axios";
import { type LoginCredentials, type LoginResponse } from "@/types/api";

const AuthAPI = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await apiClient.post<LoginResponse>(
        "/auth/login",
        credentials,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  setAuthToken(token: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  },

  removeAuthToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
  },

  getAuthToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  },
};

export default AuthAPI;
