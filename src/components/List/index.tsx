import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import Card from "../Card";
import { Props } from "../Empty";
import { ListStyled } from "./styles";

const List = ({who}: Props) => {
  const { tech } = useContext(UserContext);
  return (
    <ListStyled>
      <div>
        <h2>Tecnologias</h2>
        <Button who={who}/>
      </div>
      <ul>
        {tech && tech.map((elem, index) => (
          <Card
            title={elem.title}
            status={elem.status}
            id={elem.id}
            key={index}
          />
        ))}
      </ul>
    </ListStyled>
  );
};

export default List;
