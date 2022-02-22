import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiFillCloseCircle,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import api from "../../services/api";
import { Container } from "./SignupModal.styles";
import { RiLockPasswordLine } from "react-icons/ri";
import { PulseLoader } from "react-spinners";
import { useModals } from "../../contexts/Modals";
import { toast } from "react-toastify";
interface IdataLogin {
  email?: string;
  password?: string;
}

interface IAxiosResponseLogin {
  token: string;
  id: string;
  name: string;
}

export const SignupModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { handleSubmit, register } = useForm();
  //const navigate = useNavigate();
  const { setToken } = useAuth();
  const { openModalSignup, setOpenModalSignup, setOpenModalLogin } =
    useModals();

  const onSubmit = async (data: IdataLogin) => {
    try {
      setLoading(true);
      await api.post<IAxiosResponseLogin>("/users", data);
      const responseLogin = await api.post<IAxiosResponseLogin>("/login", data);
      setOpenModalSignup(false);
      setLoading(false);
      setToken(responseLogin.data.token);
      toast.success("Sucesso ao criar a sua conta!", { theme: "dark" });
    } catch (e) {
      toast.error("Erro ao criar sua conta!", { theme: "dark" });
      setLoading(false);
    }
  };
  return (
    <Container openModalSignup={openModalSignup}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AiFillCloseCircle
          className="closeModalLogin"
          onClick={() => setOpenModalSignup(false)}
        />
        <h1>Cadastre-se</h1>
        <div>
          <AiOutlineUser />
          <input
            {...register("name", { required: true })}
            type={"text"}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Nome"
          />
        </div>
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
        <p>
          Já possui conta?
          <span
            onClick={() => {
              setOpenModalSignup(false);
              setOpenModalLogin(true);
            }}
          >
            {" "}
            Faça o login
          </span>
        </p>
      </form>
    </Container>
  );
};
