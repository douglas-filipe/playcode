import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { ModalsProvider } from "./Modals";
import { UsersProvider } from "./User";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <ModalsProvider>
        <UsersProvider>{children}</UsersProvider>
      </ModalsProvider>
    </AuthProvider>
  );
};
