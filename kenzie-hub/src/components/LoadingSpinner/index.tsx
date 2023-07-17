import React from "react";
import { LoadingSpan, LoadingSpinner, Spinner } from "./styles";

const SpinnerPage = () => {
  return (
    <>
      <LoadingSpinner>
        <Spinner />
        <LoadingSpan>Aguarde</LoadingSpan>
      </LoadingSpinner>
    </>
  );
};
export default SpinnerPage;
