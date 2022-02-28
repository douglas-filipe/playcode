import { ReactNode } from "react";

export interface IUserProviderData {
  userData: iUserData;
  setUserData: (userData: iUserData) => void;
  cleanUserData: () => void;
}

export interface UserProp {
  children: ReactNode;
}

export interface iUserData {
  name: string;
  email: string;
  createdOn?: string;
  updatedOn?: string;
  id?: string;
}
