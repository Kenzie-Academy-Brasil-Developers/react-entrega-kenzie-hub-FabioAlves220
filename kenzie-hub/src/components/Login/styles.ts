import styled from "styled-components";
export const FormBox = styled.div`
  width: 30%;
  min-width: 375px;
  height: auto;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .form {
    display: flex;
    flex-direction: column;
    gap: 8px;
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
    margin-top: 10px;
    margin-bottom: 22px;
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
  .loginSubmitButton {
    width: 100%;
    align-self: center;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    cursor: pointer;
    margin-bottom: 25px;
  }
  .emailLabel {
    margin-top: 22px;
  }
  .loginTitle {
    margin-top: 27px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
    text-align: center;
  }
  .loginSpan {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #868e96;
    text-align: center;
  }
  .registerRouterButton {
    margin-top: 15px;
    border: 1.2182px solid #868e96;
    border-radius: 4px;
    background: #868e96;
    width: 100%;
    height: 48px;
    cursor: pointer;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #f8f9fa;
  }
  .emailErrorMessage {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: red;
  }
  @media (max-width: 373px) {
    width: 80%;
  }
`;
