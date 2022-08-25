import { LoginStyled } from "./styles";
import Logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { DataLoginProps, UserContext } from "../../contexts/UserContext";
import { schemaLogin } from "../../validators/validators";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {userLogin} = useContext(UserContext)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataLoginProps>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <LoginStyled>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <section>
        <form onSubmit={handleSubmit(userLogin)}>
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
