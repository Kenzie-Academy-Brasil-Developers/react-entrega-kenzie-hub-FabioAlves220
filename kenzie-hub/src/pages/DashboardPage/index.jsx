import api from "../../services/api";
import "./index.jsx";
import RegisterLogo from "../../assets/RegisterLogo.png";
import Dashboard from "../../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import { AppMainDashboard, Header } from "./styles";

const DashboardPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  function logout() {
    setUser("");
    localStorage.clear();
    navigate("/login");
  }

  return (
    <AppMainDashboard>
      <Header>
        <img className="registerLogo" src={RegisterLogo} />
        <button
          onClick={() => {
            logout();
          }}
          className="sairButton"
        >
          Sair
        </button>
      </Header>
      <Dashboard user={user} setUser={setUser} />
    </AppMainDashboard>
  );
};
export default DashboardPage;
