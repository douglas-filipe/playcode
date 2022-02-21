import { useNavigate } from "react-router-dom";

interface IRoomProps {
  name: string;
  id: string;
  key: string;
}

export const Room = ({ name, id, key }: IRoomProps) => {
  const navigate = useNavigate();

  const switchRoom = (room_id: string) => {
    navigate(`/rooms/${room_id}`);
  };

  return (
    <div key={key}>
      <p onClick={() => switchRoom(id)}>{name}</p>
      <p>{id}</p>
    </div>
  );
};
