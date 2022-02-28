import { MenuMobile } from "../../components/Menu/mobile";
import { UserBadge } from "../../components/UserBadge";
import { useModals } from "../../contexts/Modals";
import { Container } from "./style";
import { VideoUpload } from "../../components/Channel/addVideo";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useRef, useState } from "react";

interface IVideo {
  name?: string;
  description?: string;
  duration?: string;
}

export const UploadChannelPage = () => {
  const { setOpenUserMenu, openUserMenu } = useModals();
  const token = localStorage.getItem("@playcode/token");

  const [update, setUpdate] = useState<IVideo>({
    name: "",
    description: "",
    duration: "",
  });
  const [selectedFile, setSelectedFile] = useState<Array<any>>([]);

  const inputTitle = useRef<any>(null);
  const inputDescription = useRef<any>(null);
  const inputDuration = useRef<any>(null);

  const onFileChange = (e: any) => {
    e.preventDefault();

    setSelectedFile([...selectedFile, e.target.files[0]]);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", selectedFile[0]);
    formData.append("video", selectedFile[1]);
    formData.append("name", update.name!);
    formData.append("description", update.description!);
    formData.append("duration", update.duration!);
    try {
      await api.post("/videos", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Video adicionado com sucesso!", { theme: "dark" });
      setUpdate({
        name: "",
        description: "",
        duration: "",
      });
      setSelectedFile([]);
      inputTitle.current.children[0].children[0].value = "";
      inputDescription.current.children[0].children[0].value = "";
      inputDuration.current.children[0].children[0].value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <MenuMobile />
      <UserBadge
        setOpenUserMenu={setOpenUserMenu}
        openUserMenu={openUserMenu}
      />
      <VideoUpload
        handleSubmit={handleSubmit}
        onFileChange={onFileChange}
        setUpdate={setUpdate}
        update={update}
        inputTitle={inputTitle}
        inputDescription={inputDescription}
        inputDuration={inputDuration}
      />
    </Container>
  );
};
