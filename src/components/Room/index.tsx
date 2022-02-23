import { useNavigate } from "react-router-dom";
import { Container } from "./Room.styles";
interface IRoomProps {
  name: string;
  id: string;
  key: string;
  img: string;
}

export const Room = ({ name, id, key, img }: IRoomProps) => {
  const navigate = useNavigate();

  const switchRoom = (room_id: string) => {
    navigate(`/rooms/${room_id}`);
  };

  return (
    <Container key={key} onClick={() => switchRoom(id)}>
      <div className="img">
        <img src={img} alt="Tecnologias" />
      </div>
      <p onClick={() => switchRoom(id)}>{name}</p>
    </Container>
  );
};
