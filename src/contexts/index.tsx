import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { ModalsProvider } from "./Modals";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <ModalsProvider>{children}</ModalsProvider>
    </AuthProvider>
  );
};
