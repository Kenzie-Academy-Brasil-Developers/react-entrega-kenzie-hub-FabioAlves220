import styled from "styled-components";
export const FormBox = styled.div`
  width: 370px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  text-align: center;

  .title {
    margin-top: 25px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    text-align: center;
  }
  .span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-sizing: border-box;
  }
  .form > label {
    align-self: flex-start;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }
  .form > input {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
    padding-left: 16px;
    box-sizing: border-box;
  }
  .form > input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
  }
  .submitButton {
    width: 100%;
    align-self: center;
    height: 48px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    cursor: pointer;
  }
  .emailLabel {
    margin-top: 22px;
  }
  .errorMessage {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: red;
  }
  @media (max-width: 395px) {
    width: 80%;
  }
`;
