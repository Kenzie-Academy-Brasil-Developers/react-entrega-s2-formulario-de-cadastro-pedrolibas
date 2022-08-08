import { useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { HomeStyled, Loading } from "./styles";
import { useNavigate } from "react-router-dom";

const HomePage = ({ loading, setLoading }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("@kenzie-hub:token");
    navigate("/");
  };

  const { name, course_module } = JSON.parse(
    localStorage.getItem("@kenzie-hub:user")
  );

  return loading ? (
    <Loading>
      <h1>Carregando...</h1>
    </Loading>
  ) : (
    <HomeStyled>
      <header>
        <div>
          <img src={Logo} alt="Logo Kenzie Hub" />
          <button onClick={logout}>Sair</button>
        </div>
      </header>

      <main>
        <div>
          <h2>Olá, {name}</h2>
          <span>{course_module}</span>
        </div>
        <div></div>
        <div>
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <h3>Nossa aplicação está em desenvolvimento</h3>
        </div>
      </main>
    </HomeStyled>
  );
};

export default HomePage;
