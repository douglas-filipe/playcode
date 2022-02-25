import { MenuMobile } from "../../components/Menu/mobile";
import { UserBadge } from "../../components/UserBadge";
import { useModals } from "../../contexts/Modals";
import { IoMdPlay } from "react-icons/io";
import { Container, InputBox, InputField } from "./style";
import api from "../../services/api";
import { useEffect, useRef, useState } from "react";

interface IFileData {
  name: string;
  file: any;
}

export const UserChannel = () => {
  const [update, setUpdate] = useState<string>("");
  const [channelData, setChannelData] = useState<IFileData[]>([]);

  const { setOpenUserMenu, openUserMenu } = useModals();

  const token = localStorage.getItem("@playcode/token");
  const inputEl = useRef<any>(null);

  let formdata = new FormData();

  const onFileChange = (e: any) => {
    if (e.target && e.target.files[0]) {
      formdata.append("img", e.target.files[0]);
      formdata.append("name", update);
    }
    console.log(formdata);
  };

  const onSubmit = async (fileName: string) => {
    try {
      const response = await api.post<IFileData>(
        "/channel",

        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":
              "multipart/form-data; boundary=AaB03x" +
              "--AaB03x" +
              "Content-Disposition: file" +
              "Content-Type: png" +
              "Content-Transfer-Encoding: binary" +
              "...data... " +
              "--AaB03x--",
            Accept: "multipart/form-data",
            type: "formData",
          },
        }
      );

      setChannelData([response.data]);

      inputEl.current.children[0].children[0].value = "";
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

      <div className="maincontent">
        <span>Criar seu Canal</span>
        <div className="profile-picture"></div>
        <InputField type="file" onChange={onFileChange} name="img">
          Enviar avatar
        </InputField>
        <InputBox>
          <div className="field">
            <IoMdPlay />
            <InputField
              type="text"
              autoComplete="off"
              ref={inputEl}
              name="name"
              onChange={(e) => setUpdate(e.target.value)}
              // placeholder={!channelData ? "Nome do canal" : channelData}
            />
          </div>
          <button type="submit" onClick={() => onSubmit(update)}>
            Criar canal
          </button>
        </InputBox>
      </div>
    </Container>
  );
};
