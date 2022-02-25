import { Route, Routes } from "react-router-dom";
import { InHigh } from "../pages/ InHigh";
import { UserChannel } from "../pages/Channel";
import { Chat } from "../pages/Chat";
import { Home } from "../pages/Home";
import { ListRooms } from "../pages/ListRooms";
import { UserProfile } from "../pages/Profile";
import { Recents } from "../pages/Recents";
import { WatchVideo } from "../pages/WatchVideo";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<ListRooms />} />
      <Route path="/recents" element={<Recents />} />
      <Route path="/rooms/:room_id" element={<Chat />} />
      <Route path="/in-high" element={<InHigh />} />
      <Route path="/watch/:id" element={<WatchVideo />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/createChannel" element={<UserChannel />} />
    </Routes>
  );
};
