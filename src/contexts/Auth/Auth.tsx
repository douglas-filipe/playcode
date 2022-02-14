import { createContext, useContext, useState } from "react";
import { AuthProviderData, ContextProp } from "../../types/AuthContext";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ContextProp) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("@playcode/token") || ""
  );

  return (
    <AuthContext.Provider value={{ setToken, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
