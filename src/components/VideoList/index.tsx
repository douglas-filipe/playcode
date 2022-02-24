import { Container } from "./VideoList.styles";
import { AiFillLike } from "react-icons/ai";
import view from "../../assets/icons/view.svg";
import { useNavigate } from "react-router-dom";
interface Ivideos {
  id: string;
  likes: number;
  name?: string;
  thumburl?: string;
  videourl?: string;
  views?: number;
  avatarUrl?: string;
  id_channel?: string;
  name_channel?: string;
  text?: string;
}

export const VideoList = ({
  id,
  likes,
  name,
  thumburl,
  videourl,
  views,
  avatarUrl,
  id_channel,
  name_channel,
  text,
}: Ivideos) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="channel">
        <div>
          <img
            src={avatarUrl}
            width="100%"
            height="100%"
            alt="Perfil do usuário"
          />
        </div>
        <h4>{name_channel}</h4>
      </div>
      <div
        className="thumb"
        onClick={() => {
          navigate(`/watch/${id}`);
        }}
      >
        <div className="downThumb">
          <div className="views">
            <div className="viewIcon">
              <img src={view} alt="Visualizações" />
            </div>
            <p>{views}</p>
          </div>
          <div className="reactions">
            <AiFillLike />
            <p>{likes}</p>
          </div>
        </div>
        <div className="img">
          <img src={thumburl} alt="Capa do vídeo" />
        </div>
      </div>
      <h4 className="title">{name}</h4>
    </Container>
  );
};
