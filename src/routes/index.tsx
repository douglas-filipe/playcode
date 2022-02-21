import { Route, Routes } from "react-router-dom";
import { LoginModal } from "../components/LoginModal";
import { Chat } from "../pages/Chat";
import { Home } from "../pages/Home";
import { ListRooms } from "../pages/ListRooms";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginModal />} />
      <Route path="/rooms" element={<ListRooms />} />
      <Route path="/rooms/:room_id" element={<Chat />} />
    </Routes>
  );
};
