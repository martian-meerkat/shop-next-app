import { type LoginCredentials } from "./api";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => void;
  logout: () => void;
}
