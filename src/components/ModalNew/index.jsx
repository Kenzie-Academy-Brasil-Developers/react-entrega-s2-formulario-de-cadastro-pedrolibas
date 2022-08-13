import { useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import { UserContext } from "../../contexts/UserContext";
import { ModalStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import toast from "react-hot-toast";
import { schemaNew } from "../../validators/validators";

const ModalNew = () => {
  const { setIsModal, setTech, token } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaNew),
  });

  const newTech = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTech((old) => [...old, res.data]);
        setIsModal(false);
      })
      .catch((err) =>
        err.response.status === 401
          ? toast.error("Tecnologia já cadastrada!")
          : toast.error(
              "Ops! Ocorreu um erro inesperado, tente novamente mais tarde"
            )
      );
  };

  return (
    <ModalStyled>
      <div>
        <div>
          <div>
            <div>
              <h2>Cadastrar Tecnologia</h2>
              <button onClick={() => setIsModal(false)}>
                <RiCloseLine size={20} />
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit(newTech)}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Typescript"
              {...register("title")}
            />
            <span>{errors.title?.message}</span>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </div>
      </div>
    </ModalStyled>
  );
};

export default ModalNew;
