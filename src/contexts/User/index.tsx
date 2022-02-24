import { createContext, useContext, useState } from "react";
import { IUserProviderData, UserData, UserProp } from "./user.types";

const UsersContext = createContext<IUserProviderData>({} as IUserProviderData);

export const UsersProvider = ({ children }: UserProp) => {
  const [userData, setUserData] = useState<Array<UserData>>([]);

  return (
    <UsersContext.Provider value={{ userData, setUserData }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUserInfo = () => useContext(UsersContext);
