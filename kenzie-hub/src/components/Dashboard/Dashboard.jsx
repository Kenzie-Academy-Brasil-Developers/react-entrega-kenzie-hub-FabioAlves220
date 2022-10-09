import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useEffect, useState } from "react";
import "../Dashboard/Dashboard.css";
function Dashboard() {
  const [user, setUser] = useState("");
  const [module, setModule] = useState("");
  console.log("usefect rodou");
  useEffect(() => {
    async function getUser() {
      /* trycatch é uma estrutura que tentativa e erro, cada linha presente em try recebe uma tentativa de execução, caso haja erro, o código cai em catch */
      try {
        //   setLoading(true);
        const userId = localStorage.getItem("@USERID");
        const response = await api.get(`/users/${userId}`);
        console.log(userId);
        setUser(response.data.name);
        setModule(response.data.course_module);
      } catch (error) {
        console.log(error);
        /* finally é sempre executado independente de qualquer cenário */
      } finally {
        //   setLoading(false);
      }
    }
    getUser();
  }, []);

  return (
    <>
      <div className="dashboardBox">
        <h1 className="userName">Olá, {user}</h1>
        <span className="spanModulo">{module}</span>
      </div>
      <div className="notReadyWarning">
        <h1>Que pena! Estamos em desenvolvimento :(</h1>
        <span>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </span>
      </div>
    </>
  );
}
export default Dashboard;
