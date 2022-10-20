import { StyledTechCard } from "./styles";
import deleteicon from "../../../assets/deleteicon.png";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const TechCard = ({ tech }) => {
  const { deleteTech } = useContext(UserContext);
  return (
    <StyledTechCard>
      <h1 className="techTitle">{tech.title}</h1>
      <span className="techStatus">{tech.status}</span>
      <button className="deleteButton" onClick={() => deleteTech(tech.id)}>
        <img className="deleteIcon" src={deleteicon} />
      </button>
    </StyledTechCard>
  );
};
export default TechCard;
