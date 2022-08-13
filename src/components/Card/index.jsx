import { CardStyled } from "./styles";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Card = ({title, status, id}) => {
  const {removeTech} = useContext(UserContext)
  return (
    <CardStyled>
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
