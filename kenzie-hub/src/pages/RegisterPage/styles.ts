import styled from "styled-components";
export const AppMainRegister = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121214;
`;
AppMainRegister.displayName = "AppMainRegister";

export const LogoAndButtonBox = styled.div`
  width: 30%;
  min-width: 375px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 8px;

  .registerLogo {
    width: 122px;
    height: 20px;
  }
  .voltarButton {
    background: #212529;
    border-radius: 4px;
    width: 67px;
    height: 40px;
    border-style: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: #f8f9fa;
    cursor: pointer;
  }
  @media (max-width: 395px) {
    width: 80%;
  }
`;
LogoAndButtonBox.displayName = "LogoAndButtonBox";
// .App {
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   background: #121214;
