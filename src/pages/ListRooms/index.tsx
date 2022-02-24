import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { MenuMobile } from "../../components/Menu/mobile";
import { Room } from "../../components/Room";
import { Container } from "./ListRooms.styles";

interface Irooms {
  id: string;
  name: string;
  img: string;
}

export const ListRooms = () => {
  const [rooms, setRooms] = useState<Irooms[]>([]);
  useEffect(() => {
    const socket = io("https://playcodeapi.herokuapp.com");
    socket.on("connection", () => {
      console.log("connected to server");
    });
    socket.on("output-rooms", (response: Irooms[]) => {
      setRooms(response);
    });
  }, []);

  return (
    <>
      <MenuMobile />
      <Container>
        <h1>Selecione uma sala</h1>
        <section className="listRooms">
          {rooms.map((e) => {
            return <Room key={e.id} id={e.id} name={e.name} img={e.img} />;
          })}
        </section>
      </Container>
    </>
  );
};
