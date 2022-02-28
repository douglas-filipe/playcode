import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import api from "../../services/api";
import { Container } from "./LoginModal.styles";
import { RiLockPasswordLine } from "react-icons/ri";
import { PulseLoader } from "react-spinners";
import { useModals } from "../../contexts/Modals";
import { toast } from "react-toastify";
import { useUserInfo } from "../../contexts/User";
import { useChannel } from "../../contexts/channel";

interface IdataLogin {
  email?: string;
  password?: string;
}

interface IAxiosResponseLogin {
  token: string;
  id: string;
  name: string;
  email: string;
}

export const LoginModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit, register } = useForm();

  //const navigate = useNavigate();
  const { setToken } = useAuth();
  const { setUserData } = useUserInfo();
  const { openModalLogin, setOpenModalLogin, setOpenModalSignup } = useModals();
  const { setChannelData } = useChannel();

  const onSubmit = async (data: IdataLogin) => {
    try {
      setLoading(true);
      const response = await api.post<IAxiosResponseLogin>("/login", data);
      localStorage.setItem("@playcode/token", response.data.token);
      localStorage.setItem("@playcode/user", JSON.stringify(response.data));

      setToken(response.data.token);
      setUserData(response.data);
      setLoading(false);
      setOpenModalLogin(false);
      toast.success("Sucesso ao logar!", { theme: "dark" });

      const channelInfo = await api.get<any>("/users", {
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });
      if (channelInfo.data["channel"]) {
        setChannelData(channelInfo.data["channel"]);
      }
    } catch (e) {
      toast.error("Error ao fazer o login!", { theme: "dark" });
      setLoading(false);
    }
  };

  return (
    <Container openModalLogin={openModalLogin}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AiFillCloseCircle
          className="closeModalLogin"
          onClick={() => setOpenModalLogin(false)}
        />
        <h1>Login</h1>
        <div>
          <AiOutlineMail />
          <input
            {...register("email", { required: true })}
            type={"text"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </div>
        <div>
          <RiLockPasswordLine />
          <input
            {...register("password", { required: true })}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Senha"
          />
        </div>

        <button
          disabled={loading ? true : false}
          className="btnSubmit"
          type="submit"
        >
          {loading ? <PulseLoader color="white" size={"10px"} /> : "Enviar"}
        </button>
        <Link to={"/"}>Esqueceu sua senha?</Link>
        <p>
          Não tem uma conta?{" "}
          <span
            onClick={() => {
              setOpenModalLogin(false);
              setOpenModalSignup(true);
            }}
          >
            Cadastre-se
          </span>
        </p>
      </form>
    </Container>
  );
};
