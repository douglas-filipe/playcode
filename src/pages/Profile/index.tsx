import { MenuMobile } from "../../components/Menu/mobile";
import { UserBadge } from "../../components/UserBadge";
import { useModals } from "../../contexts/Modals";
import { IoIosMail } from "react-icons/io";
import { ImUser } from "react-icons/im";
import { RiLockPasswordFill as Lock } from "react-icons/ri";
import { Container, InputBox, InputField } from "./style";
import api from "../../services/api";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface UserData {
  name: string;
  email: string;
  createdOn: string;
  updatedOn: string;
}

export const UserProfile = () => {
  const [update, setUpdate] = useState<string>("");
  const [userData, setUserData] = useState<UserData[]>([]);

  const { setOpenUserMenu, openUserMenu } = useModals();

  const token = localStorage.getItem("@playcode/token");
  const username = localStorage.getItem("@playcode/username");
  const email = localStorage.getItem("@playcode/email");
  const inputEl = useRef<any>(null);
  const inputEmail = useRef<any>(null);
  const inputPassword = useRef<any>(null);

  const onSubmit = async (infoData: any) => {
    try {
      const response = await api.patch<UserData>("/users", infoData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      localStorage.setItem("@playcode/username", response.data.name);
      localStorage.setItem("@playcode/email", response.data.email);

      setUpdate("");
      setUserData([response.data]);

      inputEl.current.children[0].children[0].value = "";
      inputEmail.current.children[0].children[0].value = "";
      inputPassword.current.children[0].children[0].value = "";

      toast.success("Perfil atualizado", { theme: "dark" });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {}, [userData]);
  return (
    <Container>
      <MenuMobile />
      <UserBadge
        setOpenUserMenu={setOpenUserMenu}
        openUserMenu={openUserMenu}
      />

      <div className="maincontent">
        <span>Edite seu perfil</span>
        <div className="profile-picture"></div>
        <InputBox>
          <div className="field">
            <ImUser />
            <InputField
              type="text"
              autoComplete="off"
              ref={inputEl}
              onChange={(e) => setUpdate(e.target.value)}
              placeholder={!username ? "Seu nome" : username}
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              onSubmit({ name: update });
            }}
          >
            Atualizar nome
          </button>
        </InputBox>
        <InputBox>
          <div className="field">
            <IoIosMail />
            <InputField
              autoComplete="off"
              onChange={(e) => setUpdate(e.target.value)}
              type="email"
              ref={inputEmail}
              placeholder={!email ? "Seu email" : email}
            />
          </div>
          <button onClick={() => onSubmit({ email: update })}>
            Atualizar email
          </button>
        </InputBox>
        <InputBox>
          <div className="field">
            <Lock />
            <InputField
              autoComplete="off"
              onChange={(e) => setUpdate(e.target.value)}
              type="password"
              ref={inputPassword}
              placeholder={"Senha"}
            />
          </div>
          <button
            className="redBtn"
            onClick={() => onSubmit({ password: update })}
          >
            Atualizar senha
          </button>
        </InputBox>
      </div>
    </Container>
  );
};
