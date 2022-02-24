import { SideMenu } from "../../components/Menu";
import { Container, InputBox, InputField } from "./style";
import * as Icons from "react-icons/fi";
import { useModals } from "../../contexts/Modals";
import { UserBadge } from "../../components/UserBadge";
import { VideoList } from "../../components/VideoList";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

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

export const Home = () => {
  const { setOpenUserMenu, openUserMenu } = useModals();
  const [listVideosRecents, setListVideosRecents] = useState<Ivideos[]>([]);
  const [listVideosInHigh, setListVideosInHigh] = useState<Ivideos[]>([]);

  const reqRecentsVideos = async () => {
    const response = await api.get("/videos/recents");
    setListVideosRecents(response.data);
  };
  useEffect(() => {
    reqRecentsVideos();
  }, []);

  const reqInHighVideos = async () => {
    const response = await api.get("/videos/populate");
    setListVideosInHigh(response.data);
  };
  useEffect(() => {
    reqInHighVideos();
  }, []);
  return (
    <Container>
      <div className="side-menu">
        <SideMenu />
      </div>

      <div className="main-box">
        <div className="search">
          <InputBox>
            <InputField placeholder="Pesquise aqui" />
            <div className="icon">
              <Icons.FiSearch />
            </div>
          </InputBox>
        </div>
        {openUserMenu ? (
          <UserBadge
            setOpenUserMenu={setOpenUserMenu}
            openUserMenu={openUserMenu}
          />
        ) : (
          <UserBadge
            setOpenUserMenu={setOpenUserMenu}
            openUserMenu={openUserMenu}
          />
        )}

        <div className="content-boxI">
          <span>Em alta</span>
          <section>
            {listVideosInHigh.slice(0, 3).map((e) => {
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
          <Link to={"/in-high"}>
            <Icons.FiChevronDown />
          </Link>
        </div>
        <div className="content-boxII">
          <span>Recentes</span>
          <section>
            {listVideosRecents.slice(0, 3).map((e) => {
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
          <Link to={"/recents"}>
            <Icons.FiChevronDown />
          </Link>
        </div>
      </div>
    </Container>
  );
};
