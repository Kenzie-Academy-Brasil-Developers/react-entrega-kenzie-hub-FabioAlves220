import { UserContext } from "../../../contexts/UserContext";
import { ModalBox } from "./styles";
import { useContext, useState } from "react";
import api from "../../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IModalProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IModalSubmit {
  title: string;
  status: string;
}

export const Modal = ({ isModalVisible, setIsModalVisible }: IModalProps) => {
  const [loading, setLoading] = useState(false);
  const { addTech } = useContext(UserContext);
  const addTechSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório"),
    status: yup.string().required("Status obrigatório"),
  });
  //----------
  const submit = async (data: IModalSubmit) => {
    console.log(data);
    addTech(data, setLoading);
    setIsModalVisible(false);
  };
  //----------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModalSubmit>({
    resolver: yupResolver(addTechSchema),
  });
  //----------

  if (isModalVisible) {
    return (
      <ModalBox>
        <div className="modalHeader">
          <h2 className="modalTitle">Cadastrar Tecnologia</h2>
          <button
            className="modalCloseButton"
            onClick={() => {
              setIsModalVisible(false);
            }}
          >
            X
          </button>
        </div>
        <form className="modalForm" onSubmit={handleSubmit(submit)}>
          <label htmlFor="title" className="labels">
            Nome
          </label>
          <input
            type="text"
            className="inputs"
            placeholder="tecnologia"
            {...register("title")}
          />
          <span className="titleErrorMessage">{errors.title?.message}</span>
          <label htmlFor="status" className="labels">
            Status
          </label>
          <select
            className="inputs"
            placeholder="seu nível de conhecimento"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span className="statusErrorMessage">{errors.status?.message}</span>
          <button className="button" type="submit">
            Cadastrar Tecnologia
          </button>
        </form>
      </ModalBox>
    );
  }
  return null;
};
