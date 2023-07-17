import styled from "styled-components";
export const DashboardBox = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 118px;
  background: #121214;
  display: flex;
  justify-content: space-between;
  padding-left: 25%;
  padding-right: 25%;
  box-sizing: border-box;
  align-items: center;
  border-style: solid;
  border-left: 0px;
  border-right: 0px;
  color: #868e96;
  .userName {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }
  .spanModulo {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 3%;
    padding-right: 3%;
  }
`;
export const TechTitle = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }
  .addTech {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
    border-style: none;
    background: #212529;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 93%;
  }
`;
export const TechBox = styled.div`
  margin-top: 20px;
  padding: 2%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #212529;
  border-radius: 4px;
  box-sizing: border-box;
  .techList {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media (max-width: 768px) {
    width: 93%;
  }
`;
