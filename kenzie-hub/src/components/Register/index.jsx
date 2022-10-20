import "./styles.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { FormBox } from "./styles.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
function Register() {
  const {} = useContext(UserContext);
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "A senha precisa conter no mínimo 8 caracteres"),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Telefone obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  async function onSubmitFunction(data) {
    const response = await api.post("/users", data);
    console.log(response);
    navigate("/");
  }
  console.log(errors);

  return (
    <FormBox>
      <h1 className="title">Crie sua conta</h1>
      <span className="span">Rápido e grátis, vamos nessa</span>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <label className="emailLabel">Email</label>
        <input placeholder="Email" {...register("email")} />
        <span className="errorMessage">{errors.email?.message}</span>
        <label className="passwordLabel">Senha</label>
        <input type="password" placeholder="Senha" {...register("password")} />
        <span className="errorMessage">{errors.password?.message}</span>
        <label className="namelLabel">Nome</label>
        <input placeholder="Nome" {...register("name")} />
        <span className="errorMessage">{errors.name?.message}</span>
        <label className="bioLabel">Bio</label>
        <input placeholder="Fale sobre você" {...register("bio")} />
        <span className="errorMessage">{errors.bio?.message}</span>
        <label className="contactLabel">Contato</label>
        <input placeholder="Opção de contato" {...register("contact")} />
        <span className="errorMessage">{errors.contact?.message}</span>
        <label className="course_moduleLabel">Módulo</label>
        <input placeholder="Módulo do curso" {...register("course_module")} />
        <span className="errorMessage">{errors.course_module?.message}</span>
        <button className="submitButton" type="submit">
          Cadastrar
        </button>
      </form>
    </FormBox>
  );
}
export default Register;
