import styled from "styled-components";
export const StyledTechCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #121214;
  border-radius: 4px;
  background: #121214;
  border-radius: 4px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
  .techTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;
    color: #ffffff;
  }
  .techStatus {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    color: #868e96;
  }
  .deleteButton {
    border-style: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
