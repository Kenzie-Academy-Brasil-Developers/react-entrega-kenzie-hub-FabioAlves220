import { FormBox } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [loading, setLoading] = useState(false);

  const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });
  //----------

  async function onSubmitFunction(data) {
    /* trycatch é uma estrutura que tentativa e erro, cada linha presente em try recebe uma tentativa de execução, caso haja erro, o código cai em catch */
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      localStorage.clear();
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      navigate("/dashboard");

      console.log(response);
    } catch (error) {
      console.log(error);
      /* finally é sempre executado independente de qualquer cenário */
    } finally {
      setLoading(false);
    }
  }
  //----------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  //----------
  const navigate = useNavigate();

  return (
    <FormBox>
      <h1 className="loginTitle">Login</h1>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
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
