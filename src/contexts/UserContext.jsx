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
    setLoading(true);
    if (id) {
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

  const userRegister = async (data) => {
    const response = await api
      .post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        bio: data.bio,
        contact: data.contact,
        course_module: data.course_module,
      })
      .catch((err) => err);

    if (response.status === 201) {
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } else {
      toast.error("Algo deu errado, tente novamente mais tarde");
    }
  };

  const userLogin = async (data) => {
    const response = await api.post("/sessions", data).catch((err) => err);
    if (response.status === 200) {
      localStorage.setItem(
        "@kenzie-hub:token",
        JSON.stringify(response.data.token)
      );
      localStorage.setItem(
        "@kenzie-hub:user",
        JSON.stringify(response.data.user.id)
      );
      toast.success("Login efetuado com sucesso");
      navigate("/home");
    } else {
      toast.error("Email ou senha inválidos, tente novamente");
    }
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
        removeTech,
        userRegister,
        userLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
