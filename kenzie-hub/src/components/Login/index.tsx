import { FormBox } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export interface ILoginFormData {
  email: string;
  password: string;
}

function Login({}) {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  //----------

  const submit = async (data: ILoginFormData) => {
    userLogin(data, setLoading);
  };
  //----------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  //----------
  const navigate = useNavigate();

  return (
    <FormBox>
      <h1 className="loginTitle">Login</h1>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <label className="emailLabel">Email</label>
        <input placeholder="Email" {...register("email")} />
        <span className="emailErrorMessage">{errors.email?.message}</span>
        <label className="passwordLabel">Senha</label>
        <input placeholder="Senha" type="password" {...register("password")} />
        <span className="passwordErrorMessage">{errors.password?.message}</span>
        <button className="loginSubmitButton" type="submit">
          Entrar
        </button>
      </form>
      <span className="loginSpan">Ainda não possui uma conta?</span>
      <button
        className="registerRouterButton"
        onClick={() => {
          navigate("/register");
        }}
      >
        Cadastre-se
      </button>
    </FormBox>
  );
}
export default Login;
