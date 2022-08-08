import { LoginStyled } from "./styles";
import Logo from "../../assets/Logo.svg";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

const LoginPage = ({ setLoading }) => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitFunction = async (data) => {
    const response = await api.post("/sessions", data).catch((err) => err);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("@kenzie-hub:token", response.data.token);
      localStorage.setItem(
        "@kenzie-hub:user",
        JSON.stringify(response.data.user)
      );
      toast.success("Login efetuado com sucesso");
      setLoading(true);
      navigate("/home");
    } else {
      toast.error("Email ou senha inválidos, tente novamente");
    }
  };

  const navigate = useNavigate();

  return (
    <LoginStyled>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <section>
        <form onSubmit={handleSubmit(submitFunction)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="passeword">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <button type="submit">Entrar</button>
        </form>
        <div>
          <span>Ainda não possui uma conta?</span>
          <button onClick={() => navigate("/register", { replace: true })}>
            Cadastre-se
          </button>
        </div>
      </section>
    </LoginStyled>
  );
};

export default LoginPage;
