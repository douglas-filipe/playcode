import { ReactNode } from "react";

export interface ProviderProp {
  children: ReactNode;
}

export interface IChannelProviderData {
  channelData: IChannel | undefined;
  setChannelData: (channeldata: IChannel) => void;
}

export interface IFileData {
  name: string;
  file: any;
  id: string;
  avatarKey: string;
  avatarUrl: string;
  user?: any;
}

export interface IChannel {
  id: string;
  name: string;
  avatarUrl: string;
  avatarKey: string;
  subsNumber?: number;
  videos?: Array<any>;
  subs?: Array<any>;
}

export interface IUserChannelData {
  id: string;
  name: string;
  email: any;
  createdOn: string;
  updatedOn: string;
  channel: IChannel;
  avatarKey: string;
  avatarUrl: string;
}
