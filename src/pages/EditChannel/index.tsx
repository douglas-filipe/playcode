import { MenuMobile } from "../../components/Menu/mobile";
import { UserBadge } from "../../components/UserBadge";
import { useModals } from "../../contexts/Modals";
import { Container } from "./style";
import { EditChannel } from "../../components/Channel/editChannel";
import { useRef, useState } from "react";
import { useChannel } from "../../contexts/channel";
import api from "../../services/api";
import { toast } from "react-toastify";

export const EditChannelPage = () => {
  const { setOpenUserMenu, openUserMenu } = useModals();
  const { channelData, setChannelData } = useChannel();

  const [update, setUpdate] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const token = localStorage.getItem("@playcode/token");
  const inputEl = useRef<any>(null);

  const onFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFile = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();

    if (selectedFile) {
      formData.append("img", selectedFile);
    }
    formData.append("name", update);
    try {
      const response = await api.patch(
        `/channel/${channelData?.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setChannelData(response.data.channel);
      inputEl.current.children[0].children[0].value = "";

      toast.success("Canal editado com sucesso!", { theme: "dark" });
    } catch (err) {
      console.log(err);
      toast.error("Erro ao editar o Canal!", { theme: "dark" });
    }
  };

  return (
    <Container>
      <MenuMobile />
      <UserBadge
        setOpenUserMenu={setOpenUserMenu}
        openUserMenu={openUserMenu}
      />
      <EditChannel
        channelData={channelData}
        handleFile={handleFile}
        onFileChange={onFileChange}
        setUpdate={setUpdate}
        inputEl={inputEl}
      />
    </Container>
  );
};
