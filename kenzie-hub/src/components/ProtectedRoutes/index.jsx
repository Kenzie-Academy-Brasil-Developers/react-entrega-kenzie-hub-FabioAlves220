import React, { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("@TOKEN");

  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;
