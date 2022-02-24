import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { useAuth } from "../../contexts/Auth";
import api, { deploy } from "../../services/api";
import { Container } from "./Chat.styles";
import { IoMdSend } from "react-icons/io";
import { RotateLoader } from "react-spinners";
import { MenuMobile } from "../../components/Menu/mobile";

interface IsendMessage {
  text?: string;
}

interface Imessage {
  id: string;
  name: string;
  text: string;
  user_id: string;
}

interface IuserDetails {
  id: string;
  name: string;
  user_id: string;
}

interface Iroom {
  name: string;
  img: string;
}

export const Chat = () => {
  const { room_id } = useParams<{ room_id: string }>();
  const socket = io(deploy);
  const { name, user_id, token } = useAuth();
  const [inputMessage, setInputMessages] = useState("");
  const [userDetails, setUserDetails] = useState<IuserDetails>(
    {} as IuserDetails
  );
  const [messagesList, setMessagesList] = useState<Imessage[]>([]);
  const [room, setRoom] = useState<Iroom>({} as Iroom);
  const { handleSubmit, register } = useForm();

  const messageEl = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sendMessageBlock, setSendMessageBlock] = useState<boolean>(false);

  useEffect(() => {
    if (messageEl) {
      messageEl.current?.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target }: any = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, [messagesList]);

  const reqUserDetails = async () => {
    const response = await api.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUserDetails(response.data);
  };

  const reqRoomSearch = async () => {
    const response = await api.get(`/room/${room_id}`);
    setRoom(response.data);
  };

  useEffect(() => {
    (async () => {
      socket.emit("join", { name, room_id, user_id });
      await reqUserDetails();
      await reqRoomSearch();
      setLoading(true);
    })();
  }, []);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessagesList(message);
    });
  }, []);

  useEffect(() => {
    socket.emit("get-messages-history", room_id);
    socket.on("output-messages", (messages) => {
      setMessagesList(messages);
      setLoading(true);
    });
  }, []);

  const reqSendMessage = async () => {
    setSendMessageBlock(true);
    const response = await api.post("/message", {
      text: inputMessage,
      room_id,
      user_id: userDetails.id,
      name: userDetails.name,
    });
    setMessagesList([...messagesList, response.data]);
    const message = [...messagesList, response.data];
    socket.emit("messagesList", message, room_id);
    setInputMessages("");
    setSendMessageBlock(false);
  };

  return (
    <Container>
      <MenuMobile />
      {loading ? (
        <>
          <div className="Messages" ref={messageEl}>
            <div className="Room">{room.name}</div>
            {messagesList.map((e) => {
              return (
                <div
                  className={
                    e.user_id === userDetails.id
                      ? "messageUser Owner"
                      : "messageUser"
                  }
                >
                  <div className="profileUser">
                    <div className="photo">{e.name.substring(0, 1)}</div>
                    <div className="info">
                      <p>{e.name}</p>
                    </div>
                  </div>
                  <p className="messageInfo">{e.text}</p>
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmit(reqSendMessage)}>
            <input
              {...(register("text"), { required: true })}
              value={inputMessage}
              onChange={(e) => setInputMessages(e.target.value)}
            />
            <div></div>
            <button type="submit" disabled={sendMessageBlock ? true : false}>
              <IoMdSend />
            </button>
          </form>
        </>
      ) : (
        <div className="loadingMessage">
          <div className="Loading">
            <RotateLoader color="yellow" />
          </div>
          <span>Carregando mensagens...</span>
        </div>
      )}
    </Container>
  );
};
