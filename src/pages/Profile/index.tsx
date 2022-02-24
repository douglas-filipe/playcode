import { MenuMobile } from "../../components/Menu/mobile";
import { UserBadge } from "../../components/UserBadge";
import { useModals } from "../../contexts/Modals";
import { IoIosMail } from "react-icons/io";
import { ImUser } from "react-icons/im";
import { RiLockPasswordFill as Lock } from "react-icons/ri";
import { Container, InputBox, InputField } from "./style";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
  createdOn: string;
  updatedOn: string;
}

export const UserProfile = () => {
  const { handleSubmit, register } = useForm();
  const [update, setUpdate] = useState<string>("");
  const [userData, setUserData] = useState<UserData[]>([]);

  const { setOpenUserMenu, openUserMenu } = useModals();

  const token = localStorage.getItem("@playcode/token");
  const username = localStorage.getItem("@playcode/username");
  const email = localStorage.getItem("@playcode/email");

  const onSubmit = async (infoData: any) => {
    try {
      const response = await api.put<UserData>("/users", {
        headers: {
          Autorization: `Bearer ${token}`,
        },
        infoData,
      });
      setUserData([response.data]);
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
              {...register("name", { required: true })}
              onChange={(e) => setUpdate(e.target.value)}
              placeholder={!username ? "Seu nome" : username}
            />
          </div>
          <button onClick={handleSubmit(onSubmit)}>Atualizar nome</button>
        </InputBox>
        <InputBox>
          <div className="field">
            <IoIosMail />
            <InputField
              autoComplete="off"
              {...register("email", { required: true })}
              onChange={(e) => setUpdate(e.target.value)}
              type="email"
              placeholder={!email ? "Seu email" : email}
            />
          </div>
          <button onClick={handleSubmit(onSubmit)}>Atualizar email</button>
        </InputBox>
        <InputBox>
          <div className="field">
            <Lock />
            <InputField
              autoComplete="off"
              {...register("password", { required: true })}
              onChange={(e) => setUpdate(e.target.value)}
              type="password"
              placeholder={"Senha"}
            />
          </div>
          <button className="redBtn">Atualizar senha</button>
        </InputBox>
      </div>
    </Container>
  );
};
