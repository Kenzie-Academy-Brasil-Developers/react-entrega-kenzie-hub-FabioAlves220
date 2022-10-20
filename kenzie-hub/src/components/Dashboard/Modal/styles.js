import styled from "styled-components";
export const ModalBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .modalHeader {
    width: 369px;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
  .modalTitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }
  .modalCloseButton {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868e96;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
  }
  .modalForm {
    height: 292px;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  .labels {
    margin-top: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }
  .inputs {
    margin-top: 22px;
    height: 48px;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    background: #343b41;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #f8f9fa;
  }
  .inputs::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868e96;
  }
  .button {
    margin-top: 20px;
    height: 48px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    cursor: pointer;
  }
  .titleErrorMessage {
    margin-top: 5px;
    color: red;
  }
  @media (max-width: 375px) {
    .modalHeader {
      width: 305px;
    }
  }
`;
