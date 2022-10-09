import "./LoginPage.css";
import RegisterLogo from "../../assets/RegisterLogo.png";
import { useEffect } from "react";
import Login from "../../components/Login/Login";
const LoginPage = () => {
  return (
    <>
      <div className="loginLogoBox">
        <img className="registerLogo" src={RegisterLogo} />
      </div>
      <Login />
    </>
  );
};
export default LoginPage;
