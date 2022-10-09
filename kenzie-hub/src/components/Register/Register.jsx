import "./Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

function Register() {
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
  }
  console.log(errors);

  return (
    <div className="formBox">
      <h1>Crie sua conta</h1>
      <span>Rápido e grátis, vamos nessa</span>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <label className="emailLabel">Email</label>
        <input placeholder="Email" {...register("email")} />
        {errors.email && alert(errors.email.message)}
        <label className="passwordLabel">Senha</label>
        <input placeholder="Senha" {...register("password")} />
        <label className="namelLabel">Nome</label>
        <input placeholder="Nome" {...register("name")} />
        <label className="bioLabel">Bio</label>
        <input placeholder="Fale sobre você" {...register("bio")} />
        <label className="contactLabel">Contato</label>
        <input placeholder="Opção de contato" {...register("contact")} />
        <label className="course_moduleLabel">Módulo</label>
        <input placeholder="Módulo do curso" {...register("course_module")} />
        <button className="submitButton" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
export default Register;
