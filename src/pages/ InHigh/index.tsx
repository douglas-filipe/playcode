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

export const InHigh = () => {
  const [listVideosInHigh, setListVideosInHigh] = useState<Ivideos[]>([]);
  const reqInHighVideos = async () => {
    const response = await api.get("/videos/populate");
    setListVideosInHigh(response.data);
  };
  useEffect(() => {
    reqInHighVideos();
  }, []);

  return (
    <Container>
      <SideMenu />
      <section className="videosRecentsList">
        {listVideosInHigh.map((e) => {
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
              text={"Teste"}
            />
          );
        })}
      </section>
    </Container>
  );
};
