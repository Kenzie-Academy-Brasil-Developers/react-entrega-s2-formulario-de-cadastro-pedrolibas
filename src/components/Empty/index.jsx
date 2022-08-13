import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { EmptyStyled } from "./styles";


const Empty = () => {
  return (
    <EmptyStyled>
      <div>
        <h3>Que pena! Você esta sem tecnologias :(</h3>
        <h4>Adicione novas tecnologias!</h4>
        <Button/>
      </div>
    </EmptyStyled>
  );
};

export default Empty;
