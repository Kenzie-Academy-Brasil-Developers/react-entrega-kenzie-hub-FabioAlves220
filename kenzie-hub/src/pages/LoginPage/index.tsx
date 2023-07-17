// import "./index.js";
import RegisterLogo from "../../assets/RegisterLogo.png";
import Login from "../../components/Login";
import { AppMainLogin, LogoBox } from "./styles";
const LoginPage = () => {
  return (
    <AppMainLogin>
      <LogoBox>
        <img className="registerLogo" src={RegisterLogo} alt="Logo" />
      </LogoBox>
      <Login />
    </AppMainLogin>
  );
};
export default LoginPage;
