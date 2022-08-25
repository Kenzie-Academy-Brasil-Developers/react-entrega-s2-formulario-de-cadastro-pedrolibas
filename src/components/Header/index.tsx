import { HeaderStyled } from "./styles";
import Logo from "../../assets/logo.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";



const Header = () => {
  const { logout } = useContext(UserContext);

  return (
    <HeaderStyled>
      <div>
        <img src={Logo} alt="Logo Kenzie Hub" />
        <button onClick={() => logout()}>Sair</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
