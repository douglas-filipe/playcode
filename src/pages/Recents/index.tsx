import { useEffect, useState } from "react";
import { SideMenu } from "../../components/Menu";
import api from "../../services/api";
import { Container } from "./Recents.styles";
import { VideoList } from "../../components/VideoList";

interface Ivideos {
  id: string;
  likes: number;
  name: string;
  thumburl: string;
  videourl: string;
  views: number;
  channel: {
    avatarUrl: string;
    id: string;
    name: string;
  };
}

export const Recents = () => {
  const [listVideosRecents, setListVideosRecents] = useState<Ivideos[]>([]);
  const reqRecentsVideos = async () => {
    const response = await api.get("/videos/recents");
    setListVideosRecents(response.data);
  };
  useEffect(() => {
    reqRecentsVideos();
  }, []);

  return (
    <Container>
      <SideMenu />
      <section className="videosRecentsList">
        {listVideosRecents.map((e) => {
          return (
            <VideoList
              id={e.id}
              likes={e.likes}
              avatarUrl={e.channel.avatarUrl}
              id_channel={e.channel.id}
              name={e.name}
              name_channel={e.channel.name}
              thumburl={e.thumburl}
              videourl={e.videourl}
              views={e.views}
              key={e.id}
            />
          );
        })}
      </section>
    </Container>
  );
};
