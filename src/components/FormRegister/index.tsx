import Logo from "../../assets/logo.svg";
import { RegisterStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../validators/validators";
import { useContext } from "react";
import { DataRegisterProps, UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { userRegister } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataRegisterProps>({
    resolver: yupResolver(schemaRegister),
  });

  return (
    <RegisterStyled>
      <div>
        <img src={Logo} alt="Logo Kenzie Hub" />
        <button onClick={() => navigate("/", { replace: true })}>Voltar</button>
      </div>
      <section>
        <form onSubmit={handleSubmit(userRegister)}>
          <h2>Cadastro</h2>

          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label htmlFor="confirmPasseword">Confirmação Senha</label>
          <input
            type="password"
            id="confirmPasseword"
            placeholder="Digite novamente sua senha"
            {...register("confirmPasseword")}
          />
          <span>{errors.confirmPasseword?.message}</span>

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>

          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>

          <label htmlFor="module">Selecionar Modulo</label>
          <select id="module" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Módulo 1
            </option>
            <option value="Segundo módulo (Frontend Avançado)">Módulo 2</option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Módulo 3
            </option>
            <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </RegisterStyled>
  );
};

export default RegisterPage;
