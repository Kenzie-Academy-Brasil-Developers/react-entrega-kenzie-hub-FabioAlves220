import { useContext, useEffect, useState } from "react";
import { DashboardBox, TechBox, TechTitle } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import TechCard from "./TechCard";
import { Modal } from "./Modal";

function Dashboard() {
  const { user, techList } = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  //----------

  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <DashboardBox>
        <h1 className="userName">Olá, {user?.name}</h1>
        <span className="spanModulo">{user?.course_module}</span>
      </DashboardBox>
      <TechTitle>
        <h1 className="title">Tecnologias</h1>
        <button
          className="addTech"
          onClick={() => {
            setIsModalVisible(true);
          }}
        >
          +
        </button>
      </TechTitle>
      <TechBox>
        <ul className="techList">
          {techList?.map((tech, index) => (
            <TechCard tech={tech} key={index} />
          ))}
        </ul>
      </TechBox>
    </>
  );
}
export default Dashboard;
