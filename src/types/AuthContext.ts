import { ReactNode } from "react";

export interface AuthProviderData {
  token: string;
  setToken: (token: string) => void;
  user_id: string;
  name: string;
}

export interface ContextProp {
  children: ReactNode;
}
