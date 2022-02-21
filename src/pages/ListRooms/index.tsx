import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Room } from "../../components/Room";

interface Irooms {
  id: string;
  name: string;
}

export const ListRooms = () => {
  const [rooms, setRooms] = useState<Irooms[]>([]);
  useEffect(() => {
    const socket = io("ws://localhost:3000");
    socket.on("connection", () => {
      console.log("connected to server");
    });
    socket.on("output-rooms", (response: Irooms[]) => {
      setRooms(response);
    });
  }, []);

  return (
    <div>
      {rooms.map((e) => {
        return <Room id={e.id} name={e.name} key={e.id} />;
      })}
    </div>
  );
};
