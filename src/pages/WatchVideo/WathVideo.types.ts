export interface IVideo {
  id: string;
  name: string;
  description: string;
  thumburl: string;
  videourl: string;
  views: string;
  duration: string;
  likes: number;
  createdOn: string;
  updatedOn: string;
  channel: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  likesvideos: any;
  comments: string[];
}

export interface Ichannel {
  subs: any;
  id: string;
  name: string;
  avatarUrl: string;
}

export interface IuserDetails {
  id: string;
  name: string;
}
