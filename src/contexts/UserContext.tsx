import React, { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface ProviderProps {
  children: ReactNode;
}

export interface DataRegisterProps {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
  confirmPasseword: string;
}

export interface DataLoginProps {
  email: string;
  password: string;
}

interface TechState {
  id: string;
  title: string;
  status: string;
}

interface UserState {
  id: string;
  name: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: TechState;
}

interface ListProvider {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
  tech: TechState[];
  setTech: React.Dispatch<React.SetStateAction<TechState[]>>;
  user: UserState;
  id: string;
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  token: string;
  removeTech: (id: string) => void;
  userRegister: (data: DataRegisterProps) => void;
  userLogin: (data: DataLoginProps) => void;
  whoModal: string;
  setWhoModal: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<ListProvider>({} as ListProvider);

const UserProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [whoModal, setWhoModal] = useState("");
  const [tech, setTech] = useState<TechState[]>([]);
  const [user, setUser] = useState<UserState>({} as UserState);

  const localId = localStorage.getItem("@kenzie-hub:user");
  const id = localId ? JSON.parse(localId) : null;

  const localToken = localStorage.getItem("@kenzie-hub:token");
  const token = localToken ? JSON.parse(localToken) : null;

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

  const removeTech = (id: string) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setTech(tech.filter((elem) => elem.id !== id));
        toast.success("Tecnologia removida com sucesso");
      });
  };

  const userRegister = async (data: DataRegisterProps) => {
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

  const userLogin = async (data: DataLoginProps) => {
    console.log(data);
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
        isModal,
        setIsModal,
        token,
        removeTech,
        userRegister,
        userLogin,
        whoModal,
        setWhoModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
