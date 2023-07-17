import "./styles";
import Register from "../../components/Register";
import RegisterLogo from "../../assets/RegisterLogo.png";
import { useEffect } from "react";
import { AppMainRegister, LogoAndButtonBox } from "./styles";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <AppMainRegister>
      <LogoAndButtonBox>
        <img className="registerLogo" src={RegisterLogo} alt="register logo" />
        <button onClick={() => navigate("/home")} className="voltarButton">
          voltar
        </button>
      </LogoAndButtonBox>
      <Register />
    </AppMainRegister>
  );
};
export default RegisterPage;
