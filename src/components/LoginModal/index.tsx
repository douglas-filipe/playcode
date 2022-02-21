import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth/Auth";
import api from "../../services/api";
import { Container } from "./styles";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const onSubmit = async (data: IdataLogin) => {
    const response = await api.post<IAxiosResponseLogin>("/login", data);
    await localStorage.setItem("@playcode/token", response.data.token);
    setToken(response.data.token);
    navigate("/rooms");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          type={"text"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          {...register("password", { required: true })}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
