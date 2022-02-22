import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { ModalUserProvider } from "./ModalUser";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <ModalUserProvider>{children}</ModalUserProvider>
    </AuthProvider>
  );
};
