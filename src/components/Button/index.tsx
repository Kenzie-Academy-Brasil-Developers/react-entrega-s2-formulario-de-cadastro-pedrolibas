import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { UserContext } from "../../contexts/UserContext";
import { Props } from "../Empty";
import { ButtonStyled } from "./style";

const Button = ({ who }: Props) => {
  const { setIsModal, setWhoModal } = useContext(UserContext);

  return (
    <ButtonStyled
      onClick={() => {
        setIsModal(true);
        setWhoModal(who);
      }}
    >
      <IoMdAdd size={20} />
    </ButtonStyled>
  );
};

export default Button;
