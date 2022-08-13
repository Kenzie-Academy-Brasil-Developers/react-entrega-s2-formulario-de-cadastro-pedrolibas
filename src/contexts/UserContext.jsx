import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tech, setTech] = useState([]);
  const [user, setUser] = useState({});
  const [isModal, setIsModal] = useState(false);

  const id = JSON.parse(localStorage.getItem("@kenzie-hub:user"));
  const token = JSON.parse(localStorage.getItem("@kenzie-hub:token"));

  useEffect(() => {
    setLoading(true)
    if(id){
      api
        .get(`/users/${id}`)
        .then((res) => {
          navigate("/home");
          setUser(res.data);
          setTech(res.data.techs);
          setLoading(false);
        })
        .catch((err) => setLoading(false));
    }
  }, [id]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("@kenzie-hub:token");
    localStorage.removeItem("@kenzie-hub:user");
    navigate("/");
  };

  const removeTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setTech(tech.filter((elem) => elem.id !== id));
        toast.success("Tecnologia removida com sucesso");
      });
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        logout,
        tech,
        setTech,
        user,
        id,
        navigate,
        isModal,
        setIsModal,
        token,
        removeTech
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
