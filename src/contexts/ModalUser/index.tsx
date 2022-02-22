import { createContext, useContext, useState } from "react";
import { ContextProp } from "../../types/AuthContext";
import { IModalUserProviderData } from "./ModalUser.types";

const ModalUserContext = createContext<IModalUserProviderData>(
  {} as IModalUserProviderData
);

export const ModalUserProvider = ({ children }: ContextProp) => {
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

  return (
    <ModalUserContext.Provider value={{ openUserMenu, setOpenUserMenu }}>
      {children}
    </ModalUserContext.Provider>
  );
};

export const useModalUser = () => useContext(ModalUserContext);
