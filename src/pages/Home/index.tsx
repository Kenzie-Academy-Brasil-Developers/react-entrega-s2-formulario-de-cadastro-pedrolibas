import { useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import LoadingContainer from "../../components/Loanding";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ModalNew from "../../components/ModalNew";

const Home = () => {
  const { loading, isModal } = useContext(UserContext);

  return loading ? (
    <LoadingContainer />
  ) : (
    <>
      <Header />
      <Main />
      {
        isModal && <ModalNew/>
      }
    </>
  );
};

export default Home;
