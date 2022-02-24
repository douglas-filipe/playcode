import { ReactNode } from "react";

export interface IUserProviderData {
  userData: Array<UserData>;
  setUserData: (userData: Array<UserData>) => void;
}

export interface UserProp {
  children: ReactNode;
}

export interface UserData {
  name?: string;
  email?: string;
  createdOn?: string;
  updatedOn?: string;
}
