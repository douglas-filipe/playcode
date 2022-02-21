import { useEffect } from "react";
import { io } from "socket.io-client";

export const Home = () => {
  useEffect(() => {
    const socket = io("ws://localhost:3000");
    socket.on("connection", () => {
      console.log("connected to server");
    });
    socket.on("Teste", () => {
      console.log("Foi");
    });
  }, []);
  return (
    <div>
      <div>Ola</div>
    </div>
  );
};
