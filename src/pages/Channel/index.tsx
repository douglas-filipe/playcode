import { MenuMobile } from "../../components/Menu/mobile";
import { UserBadge } from "../../components/UserBadge";
import { useModals } from "../../contexts/Modals";
import { Container } from "./style";
import { CreateChannel } from "../../components/Channel/createChannel";
import { useChannel } from "../../contexts/channel";
import { useRef, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const UserChannel = () => {
  const [update, setUpdate] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const { setOpenUserMenu, openUserMenu } = useModals();
  const { channelData, setChannelData } = useChannel();

  const token = localStorage.getItem("@playcode/token");
  const inputEl = useRef<any>(null);

  const onFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFile = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", selectedFile);
    formData.append("name", update);
    try {
      const response = await api.post("/channel", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setChannelData(response.data);
      toast.success("Canal criado com sucesso!", { theme: "dark" });
      inputEl.current.children[0].children[0].value = "";
    } catch (err) {
      console.log(err);
      toast.error("Erro ao criar o Canal!", { theme: "dark" });
    }
  };

  return (
    <Container>
      <MenuMobile />
      <UserBadge
        setOpenUserMenu={setOpenUserMenu}
        openUserMenu={openUserMenu}
      />

      <CreateChannel
        channelData={channelData}
        handleFile={handleFile}
        onFileChange={onFileChange}
        setUpdate={setUpdate}
        inputEl={inputEl}
      />
    </Container>
  );
};
