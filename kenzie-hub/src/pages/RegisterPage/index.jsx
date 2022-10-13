import "./styles.js";
import Register from "../../components/Register";
import RegisterLogo from "../../assets/RegisterLogo.png";
import { useEffect } from "react";
import { AppMainRegister, LogoAndButtonBox } from "./styles.js";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <AppMainRegister>
      <LogoAndButtonBox>
        <img className="registerLogo" src={RegisterLogo} />
        <button onClick={() => navigate("/home")} className="voltarButton">
          voltar
        </button>
      </LogoAndButtonBox>
      <Register />
    </AppMainRegister>
  );
};
export default RegisterPage;
