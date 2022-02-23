import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { useAuth } from "../../contexts/Auth";
import api from "../../services/api";
import { Container } from "./Chat.styles";

interface IsendMessage {
  text?: string;
}

interface Imessage {
  id: string;
  name: string;
  text: string;
}

interface IuserDetails {
  id: string;
  name: string;
  user_id: string;
}

export const Chat = () => {
  const { room_id } = useParams<{ room_id: string }>();
  const socket = io("ws://localhost:3000");
  const { name, user_id, token } = useAuth();
  const [inputMessage, setInputMessages] = useState("");
  const [userDetails, setUserDetails] = useState<IuserDetails>(
    {} as IuserDetails
  );
  const [messagesList, setMessagesList] = useState<Imessage[]>([]);
  const { handleSubmit, register } = useForm();

  const messageEl = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    (async () => {
      socket.emit("join", { name, room_id, user_id });
      await reqUserDetails();
      setLoading(true);
    })();
  }, []);
  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
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

  const reqSendMessage = async (data: IsendMessage) => {
    if (inputMessage !== "") {
      const response = await api.post("/message", {
        text: data.text,
        room_id,
        user_id: userDetails.id,
        name: userDetails.name,
      });
      setMessagesList([...messagesList, response.data]);
      const message = [...messagesList, response.data];
      socket.emit("messagesList", message, room_id);
    }
    setInputMessages("");
  };

  return (
    <Container>
      {loading ? (
        <>
          <div className="Messages" ref={messageEl}>
            {messagesList.map((e) => {
              return (
                <div>
                  <p>
                    <span style={{ fontWeight: "bold" }}>{e.name}:</span>{" "}
                    {e.text}
                  </p>
                </div>
              );
            })}
          </div>
          <form onSubmit={handleSubmit(reqSendMessage)}>
            <input
              {...register("text")}
              value={inputMessage}
              onChange={(e) => setInputMessages(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
        </>
      ) : (
        <p>Carregando mensagens...</p>
      )}
    </Container>
  );
};
