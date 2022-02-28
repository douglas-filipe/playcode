import { createContext, useContext, useState } from "react";
import { IUserProviderData, iUserData, UserProp } from "./user.types";

const UsersContext = createContext<IUserProviderData>({} as IUserProviderData);

export const UsersProvider = ({ children }: UserProp) => {
  const user: iUserData = JSON.parse(
    localStorage.getItem("@playcode/user") || "{}"
  );

  const [userData, setUserData] = useState<iUserData>(user);
  const cleanUserData = () => {
    let data = {
      name: "",
      email: "",
      createdOn: "",
      updatedOn: "",
      id: "",
    };
    setUserData(data);
  };
  return (
    <UsersContext.Provider value={{ userData, setUserData, cleanUserData }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUserInfo = () => useContext(UsersContext);
