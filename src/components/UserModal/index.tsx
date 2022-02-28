import { Link } from "react-router-dom";
import { Container } from "./UserModal.styles";
import sendVideo from "../../assets/icons/sendVideo.svg";
import edit from "../../assets/icons/edit.svg";
import video from "../../assets/icons/videos.svg";
import logout from "../../assets/icons/logout.svg";
import addAccount from "../../assets/icons/addAccount.svg";
import login from "../../assets/icons/login.svg";
import recuperatePass from "../../assets/icons/recuperatePass.svg";
import { useAuth } from "../../contexts/Auth";
import { useModals } from "../../contexts/Modals";
import { useUserInfo } from "../../contexts/User";

export const UserModal = () => {
  const { token, setToken } = useAuth();
  const { openUserMenu, setOpenModalLogin, setOpenModalSignup } = useModals();
  const { cleanUserData } = useUserInfo();
  return (
    <Container openUserMenu={openUserMenu}>
      {token ? (
        <>
          <Link to={"/uploadVideo"}>
            <span>Enviar vídeo</span>
            <img src={sendVideo} alt="Enviar video" />
          </Link>

          <Link to={"/editchannel"}>
            <span>Editar canal</span>
            <img src={edit} alt="Editar canal" />
          </Link>

          <Link to={"/createChannel"}>
            <span>Seu canal</span>
            <img src={video} alt="Seu canal" />
          </Link>

          <p
            onClick={() => {
              localStorage.removeItem("@playcode/token");
              localStorage.removeItem("@playcode/user");

              setToken("");
              cleanUserData();
            }}
          >
            <span>Sair</span>
            <img src={logout} alt="Sair da conta" />
          </p>
        </>
      ) : (
        <>
          <p onClick={() => setOpenModalLogin(true)}>
            <span>Login</span>
            <img src={login} alt="Logar em sua conta" />
          </p>
          <p onClick={() => setOpenModalSignup(true)}>
            <span>Criar conta</span>
            <img src={addAccount} alt="Criar conta" />
          </p>
          <Link to={"/"}>
            <span>Recuperar senha</span>
            <img src={recuperatePass} alt="Recuperar senha" />
          </Link>
        </>
      )}
    </Container>
  );
};
