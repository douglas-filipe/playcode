import { createContext, useContext, useState } from "react";
import { IChannelProviderData, IChannel, ProviderProp } from "./type";

const ChannelContext = createContext<IChannelProviderData>(
  {} as IChannelProviderData
);

export const ChannelProvider = ({ children }: ProviderProp) => {
  const [channelData, setChannelData] = useState<IChannel>();

  return (
    <ChannelContext.Provider value={{ channelData, setChannelData }}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannel = () => useContext(ChannelContext);
