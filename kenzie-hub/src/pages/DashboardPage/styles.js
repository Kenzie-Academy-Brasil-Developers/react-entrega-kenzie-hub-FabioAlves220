import styled from "styled-components";
export const AppMainDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121214;
`;
export const Header = styled.header`
  width: 100vw;
  height: 72px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25%;
  padding-right: 25%;
  box-sizing: border-box;
  .registerLogo {
    width: 122px;
    height: 21px;
  }
  .sairButton {
    background: #212529;
    border-radius: 4px;
    border-style: none;
    width: 55px;
    height: 32px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: #f8f9fa;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding-left: 3%;
    padding-right: 3%;
  }
`;
