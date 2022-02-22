import { createContext, useContext, useState } from "react";
import { ContextProp } from "../../types/AuthContext";
import { IModalsProviderData } from "./modals.types";

const ModalsContext = createContext<IModalsProviderData>(
  {} as IModalsProviderData
);

export const ModalsProvider = ({ children }: ContextProp) => {
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);
  const [openModalSignup, setOpenModalSignup] = useState<boolean>(false);
  return (
    <ModalsContext.Provider
      value={{
        openUserMenu,
        setOpenUserMenu,
        openModalLogin,
        setOpenModalLogin,
        setOpenModalSignup,
        openModalSignup,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export const useModals = () => useContext(ModalsContext);
