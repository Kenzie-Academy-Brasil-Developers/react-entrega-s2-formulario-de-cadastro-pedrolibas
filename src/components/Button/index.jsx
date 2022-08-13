import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { UserContext } from "../../contexts/UserContext";
import { ButtonStyled } from "./style";

const Button = () => {
  const {setIsModal} = useContext(UserContext)

  return (
    <ButtonStyled onClick={()=> setIsModal(true)}>
      <IoMdAdd size={20} />
    </ButtonStyled>
  );
};

export default Button;
