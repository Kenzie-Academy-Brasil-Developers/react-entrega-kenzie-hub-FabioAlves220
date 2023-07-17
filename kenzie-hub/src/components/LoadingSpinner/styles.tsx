import styled from "styled-components";

export const LoadingSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

export const Spinner = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 5px solid #f3f3f3;
  border-top: 4px solid #cd2b61;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-size: 28px;
  color: #f8f9fa;
`;
