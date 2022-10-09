import api from "../../services/api";
import "../../pages/DashboardPage/DashboardPage.css";
import RegisterLogo from "../../assets/RegisterLogo.png";
import Dashboard from "../../components/Dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <>
      <header className="header">
        <img className="registerLogo" src={RegisterLogo} />
        <button className="sairButton">Sair</button>
      </header>
      <Dashboard />
    </>
  );
};
export default DashboardPage;
