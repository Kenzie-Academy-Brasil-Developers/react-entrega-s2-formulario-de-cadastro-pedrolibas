import { MainStyled } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import Empty from "../Empty";
import List from "../List";

const Main = () => {
  const { user, tech } = useContext(UserContext);

  return (
    <MainStyled>
      <section>
        <h2>Olá, {user && user.name}</h2>
        <span>{user && user.course_module}</span>
      </section>
      {tech.length === 0 ? <Empty /> : <List />}
    </MainStyled>
  );
};

export default Main;
