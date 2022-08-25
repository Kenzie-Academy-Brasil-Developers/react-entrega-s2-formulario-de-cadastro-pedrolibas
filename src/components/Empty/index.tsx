import Button from "../Button";
import { EmptyStyled } from "./styles";

export interface Props {
  who: string;
}

const Empty = ({ who }: Props) => {
  return (
    <EmptyStyled>
      <div>
        <h3>Que pena! Você esta sem {who} :(</h3>
        <h4>
          Adicione {who === "tecnologias" ? "novas" : "novos"} {who}!
        </h4>
        <Button who={who}/>
      </div>
    </EmptyStyled>
  );
};

export default Empty;
