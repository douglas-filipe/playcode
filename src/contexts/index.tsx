import { ContextProp } from "../types/AuthContext";
import { AuthProvider } from "./Auth";
import { ChannelProvider } from "./channel";
import { ModalsProvider } from "./Modals";
import { UsersProvider } from "./User";

export const Providers = ({ children }: ContextProp) => {
  return (
    <AuthProvider>
      <ModalsProvider>
        <UsersProvider>
          <ChannelProvider>{children}</ChannelProvider>
        </UsersProvider>
      </ModalsProvider>
    </AuthProvider>
  );
};
