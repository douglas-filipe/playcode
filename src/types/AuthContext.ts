import { ReactNode } from "react";

export interface AuthProviderData {
  token: string;
  setToken: (token: string) => void;
}

export interface ContextProp {
  children: ReactNode;
}
