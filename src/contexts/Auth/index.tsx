import { createContext, useContext, useState } from "react";
import { AuthProviderData, ContextProp } from "../../types/AuthContext";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: ContextProp) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("@playcode/token") || ""
  );

  const [user_id, setUser_id] = useState<string>(
    localStorage.getItem("@playcode/user_id") || ""
  );

  const [name, setName] = useState<string>(
    localStorage.getItem("@playcode/name") || ""
  );

  return (
    <AuthContext.Provider value={{ setToken, token, name, user_id }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
