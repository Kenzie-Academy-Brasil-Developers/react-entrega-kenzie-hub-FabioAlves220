import "./RegisterPage.css";
import Register from "../../components/Register/Register";
import RegisterLogo from "../../assets/RegisterLogo.png";
import { useEffect } from "react";
const RegisterPage = () => {
  return (
    <>
      <div className="logoAndButtonBox">
        <img className="registerLogo" src={RegisterLogo} />
        <button
          // onClick={() => setCurrentPath("/home")}
          className="voltarButton"
        >
          voltar
        </button>
      </div>
      <Register />
    </>
  );
};
export default RegisterPage;
