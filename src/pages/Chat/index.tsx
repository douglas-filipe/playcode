import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { useAuth } from "../../contexts/Auth/Auth";
import api from "../../services/api";
import { Container } from "./styles";
import Scroll from "react-scroll";

interface IsendMessage {
  text?: string;
}

interface Imessage {
  id: string;
  name: string;
  text: string;
  createdOn: string;
}

interface IuserDetails {
  id: string;
  name: string;
  createdOn: string;
  user_id: string;
}

export const Chat = () => {
  const { room_id } = useParams<{ room_id: string }>();
  const socket = io("ws://localhost:3000");
  const { name, user_id, token } = useAuth();
  const [inputMessage, setInputMessages] = useState("");
  const [messages, setMessages] = useState<Imessage[]>([]);
  const [userDetails, setUserDetails] = useState<IuserDetails>(
    {} as IuserDetails
  );

  const { handleSubmit, register } = useForm();

  const messageEl = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    socket.emit("join", { name, room_id, user_id });
  }, []);

  useEffect(() => {
    (async () => {
      await reqUserDetails();
      socket.emit("get-messages-history", room_id);
      socket.on("output-messages", (messages) => {
        setMessages(messages);
      });
      setLoading(true);
    })();
  }, []);

  useEffect(() => {
    if (messageEl) {
      messageEl.current?.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target }: any = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  });

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages(message);
    });
  }, [messages]);

  const reqSendMessage = async (data: IsendMessage) => {
    if (inputMessage !== "") {
      await api.post("/message", {
        text: data.text,
        room_id,
        user_id: userDetails.id,
        name: userDetails.name,
      });
    }

    setInputMessages("");
  };

  const reqUserDetails = async () => {
    const response = await api.get("/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUserDetails(response.data);
  };

  return (
    <Container>
      {loading ? (
        <>
          <div className="Messages" ref={messageEl}>
            {messages.map((e) => {
              return (
                <div>
                  <p>
                    <span style={{fontWeight: "bold"}}>{e.name}:</span> {e.text}
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
