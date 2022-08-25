import { CardStyled } from "./styles";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface DataProps {
  title: string,
  status: string,
  id: string
}

const Card = ({title, status, id}: DataProps) => {
  const {removeTech} = useContext(UserContext)
  return (
    <CardStyled style={{}}>
      <section>
        <h5>{title}</h5>
        <div>
          <span>{status }</span>
          <button onClick={()=> removeTech(id)}>
            <BsTrash size={15}/>
          </button>
        </div>
      </section>
    </CardStyled>
  );
};

export default Card;
