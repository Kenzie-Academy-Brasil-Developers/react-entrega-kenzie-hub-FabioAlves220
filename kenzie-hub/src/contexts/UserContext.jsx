import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentRoute, setCurrentRoute] = useState(null);
  const [techList, setTechList] = useState([]);
  const navigate = useNavigate();
  //----------
  const getUser = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        const response = await api.get("/profile");
        setTechList(response.data.techs);
        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        navigate(currentRoute);
      }
    }
  };
  //---------
  const userLogin = async (data, setLoading) => {
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
      //   toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };
  //---------
  const userRegister = async (data, setLoading) => {
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
  const addTech = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/users/techs", data);
      getUser();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //---------
  const deleteTech = async (id) => {
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
