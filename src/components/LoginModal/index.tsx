import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCloseCircle, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import api from "../../services/api";
import { Container } from "./LoginModal.styles";
import { RiLockPasswordLine } from "react-icons/ri";
import { PulseLoader } from "react-spinners";
interface IdataLogin {
  email?: string;
  password?: string;
}

interface IAxiosResponseLogin {
  token: string;
  id: string;
  name: string;
}

export const LoginModal = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit, register } = useForm();
  //const navigate = useNavigate();
  const { setToken } = useAuth();

  const onSubmit = async (data: IdataLogin) => {
    try {
      setLoading(true);
      const response = await api.post<IAxiosResponseLogin>("/login", data);
      localStorage.setItem("@playcode/token", response.data.token);
      setToken(response.data.token);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AiFillCloseCircle className="closeModalLogin" />
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
          {loading ? <PulseLoader color="white" size={"10px"}/> : "Enviar"}
        </button>
        <Link to={"/"}>Esqueceu sua senha?</Link>
        <p>
          Não tem uma conta? <span>Cadastre-se</span>
        </p>
      </form>
    </Container>
  );
};
