// import api from "../../services/api";
// import "./index.js";
import RegisterLogo from "../../assets/RegisterLogo.png";
import Dashboard from "../../components/Dashboard/index";
import { useNavigate } from "react-router-dom";
import { AppMainDashboard, Header } from "./styles";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function logout() {
    setUser(null);
    localStorage.clear();
    navigate("/login");
  }

  return (
    <AppMainDashboard>
      <Header>
        <img className="registerLogo" src={RegisterLogo} alt="Logo" />
        <button
          onClick={() => {
            logout();
          }}
          className="sairButton"
        >
          Sair
        </button>
      </Header>
      <Dashboard />
    </AppMainDashboard>
  );
};
export default DashboardPage;
