import { useEffect, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import { Container } from "./WatchVideo.styles";
import View from "../../assets/icons/view.svg";
import { useAuth } from "../../contexts/Auth";
import { useModals } from "../../contexts/Modals";
import { toast } from "react-toastify";
import { MenuMobile } from "../../components/Menu/mobile";
import { RotateLoader } from "react-spinners";
import { FaComments } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { useForm } from "react-hook-form";

interface IVideo {
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

interface Ichannel {
  subs: any;
  id: string;
  name: string;
  avatarUrl: string;
}

interface IuserDetails {
  id: string;
  name: string;
}

export const WatchVideo = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<IVideo>({} as IVideo);
  const [channel, setChannel] = useState<Ichannel>({} as Ichannel);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<IuserDetails>(
    {} as IuserDetails
  );
  const [commentInput, setCommentInput] = useState("");
  const { token } = useAuth();
  const { setOpenModalLogin } = useModals();
  useEffect(() => {
    (async () => {
      await reqVideoChannel();
      await reqUserDetails();
      setLoading(true);
    })();
    setTimeout(() => {
      reqWatchVideo();
    }, 5000);
  }, [id]);

  const reqVideoChannel = async () => {
    const response = await api.get(`/watch/${id}`);
    const responseChannelSubscribers = await api.get(
      `/channel/${response.data.channel.id}`
    );
    setVideo(response.data);
    setChannel(responseChannelSubscribers.data);
  };

  const reqWatchVideo = async () => {
    await api.get(`/watch/${id}/view`);
  };

  const reqVideoSubscribe = async (id: string) => {
    if (token) {
      /* channel.subs.push({
        channelId: id,
        id: "gtertryh",
        userId: userDetails.id,
      });
      setChannel(channel);
      console.log(channel) */
      const response = await api.post(
        `/channel/subscribe/${id}`,
        { Teste: "" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(channel);
      await reqVideoChannel();
    } else {
      toast.error("Faça o login", { theme: "dark" });
      setOpenModalLogin(true);
    }
  };

  const reqVideoUnsubscribe = async (id: string) => {
    if (token) {
      const response = await api.post(
        `/channel/unsubscribe/${id}`,
        { Teste: "" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await reqVideoChannel();
    } else {
      toast.error("Faça o login", { theme: "dark" });
      setOpenModalLogin(true);
    }
  };

  const reqUserDetails = async () => {
    try {
      if (token) {
        const response = await api.get("/users", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserDetails(response.data);
      } else {
      }
    } catch (e) {}
  };

  const reqLikeVideo = async (id: string) => {
    try {
      if (token) {
        await api.post(
          `/videos/${id}/like`,
          { Teste: "" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        reqVideoChannel();
        reqUserDetails();
      } else {
        toast.error("Faça o login", { theme: "dark" });
        setOpenModalLogin(true);
      }
    } catch {
      toast.error("Faça o login", { theme: "dark" });
      setOpenModalLogin(true);
    }
  };

  const onSubmit = async () => {
    if (token) {
      await api.post(
        "/comments",
        {
          description: commentInput,
          videoId: video.id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      reqVideoChannel();
      setCommentInput("");
    } else {
      toast.error("Faça o login", { theme: "dark" });
      setOpenModalLogin(true);
    }
  };
  const reqLikeComment = async (id: string) => {
    try {
      if (token) {
        await api.post(
          `/comments/like/${id}`,
          { Teste: "" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        reqVideoChannel();
      } else {
        toast.error("Faça o login", { theme: "dark" });
        setOpenModalLogin(true);
      }
    } catch {
      toast.error("Faça o login", { theme: "dark" });
      setOpenModalLogin(true);
    }
  };

  const { handleSubmit, register } = useForm();
  return (
    <Container>
      <MenuMobile />
      {loading ? (
        <>
          <section className="channelSubscribe">
            <div className="channel">
              <div className="photo" onClick={() => navigate("/")}>
                <img
                  width="100%"
                  height="100%"
                  src={channel.avatarUrl}
                  alt="Canal foto"
                ></img>
              </div>
              <div className="channelInfo">
                <h4>{channel.name}</h4>
                <h3>{channel.subs.length} inscritos</h3>
              </div>
            </div>
            <div className="subscribe">
              {channel.subs.find((object: any) => {
                if (object.userId === userDetails.id) {
                  return true;
                }
              }) === undefined ? (
                <button onClick={() => reqVideoSubscribe(channel.id)}>
                  Inscreva-se
                </button>
              ) : (
                <button
                  className="subscribeConfirm"
                  onClick={() => reqVideoUnsubscribe(channel.id)}
                >
                  Inscrito
                </button>
              )}
            </div>
          </section>
          <section className="video">
            <video src={video.videourl} controls />
          </section>
          <section className="videoDetails">
            <div className="reactionsViews">
              <div>
                {video.likesvideos.find((object: any) => {
                  if (object.user_id === userDetails.id) {
                    return true;
                  }
                }) === undefined ? (
                  <AiOutlineLike onClick={() => reqLikeVideo(video.id)} />
                ) : (
                  <AiFillLike onClick={() => reqLikeVideo(video.id)} />
                )}
                <span>{video.likes}</span>
              </div>
              <div>
                <img src={View} alt="Visualizações" />
                <span>{video.views}</span>
              </div>
            </div>
            <div className="titleDescription">
              <h1>{video.name}</h1>
              <p>{video.description}</p>
              <div className="barra"></div>
            </div>
          </section>

          <section className="comments">
            <div className="titleComments">
              <FaComments />
              <span>Comentários</span>
            </div>
            <div className="barra"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...(register("comment"), { required: true })}
                placeholder="Insira um comentário"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <button type="submit">
                <IoIosAddCircle />
              </button>
            </form>

            {video.comments.map((e: any) => {
              return (
                <>
                  <section key={e.id} className="comment">
                    <div className="commentUserInfo">
                      <div className="img">
                        <p>{e.user.name.substring(0, 1)}</p>
                      </div>
                      <p className="nameUser">{e.user.name}</p>
                    </div>
                    <p>{e.description}</p>
                    <div className="reactionComment">
                      <AiFillLike onClick={() => reqLikeComment(e.id)} />
                      <span>{e.likes}</span>
                    </div>
                  </section>
                </>
              );
            })}
          </section>
        </>
      ) : (
        <div className="loadingMessage">
          <div className="Loading">
            <RotateLoader color="yellow" />
          </div>
          <span>Carregando video...</span>
        </div>
      )}
    </Container>
  );
};
