import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { string } from "yup";
import { ILoginFormData } from "../components/Login";
import { IRegisterFormData } from "../components/Register";
import api from "../services/api";

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITech[];
  works: IWork[];
  created_at: Date;
  update_at: Date;
  avatar_url: string;
}

interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  update_at: Date;
}

interface IWork {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: Date;
  update_at: Date;
}
interface IAddTech {
  title: string;
  status: string;
}

export interface IUserContext {
  user: IUserResponse | null;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  getUser: () => void;
  setUser: React.Dispatch<React.SetStateAction<IUserResponse | null>>;
  userLogin: (data: ILoginFormData) => void;
  userRegister: (data: IRegisterFormData) => void;
  addTech: (data: IAddTech) => void;
  deleteTech: (id: string) => void;
  techList: ITech[];
  currentRoute: string | null;
  setCurrentRoute: React.Dispatch<React.SetStateAction<string | null>>;
}
/*   user,
        getUser,
        setUser,
        userLogin,
        userRegister,
        addTech,
        deleteTech,
        techList,
        currentRoute,
        setCurrentRoute,*/

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [techList, setTechList] = useState([] as ITech[]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  //----------
  const getUser = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        const response = await api.get<IUserResponse>("/profile");
        setTechList(response.data.techs);
        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        navigate("/");
      }
    }
  };
  //---------
  const userLogin = async (data: ILoginFormData) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      setTechList(response.data.techs);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`;
      getUser();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      //   toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  //---------
  const userRegister = async (data: IRegisterFormData) => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
      // toast.success(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      //   toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  //---------
  const addTech = async (data: IAddTech) => {
    try {
      const response = await api.post("/users/techs", data);
      setLoading(true);
      getUser();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //---------
  const deleteTech = async (id: string) => {
    try {
      const response = await api.delete(`/users/techs/${id}`);
      console.log(response);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };
  //---------

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        getUser,
        setUser,
        userLogin,
        userRegister,
        addTech,
        deleteTech,
        techList,
        currentRoute,
        setCurrentRoute,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
