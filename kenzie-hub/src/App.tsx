import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import ProtectedRoutes from "./components/ProtectedRoutes";
import { UserContext } from "./contexts/UserContext";
import SpinnerPage from "./components/LoadingSpinner";

function App() {
  const [currentPath, setCurrentPath] = useState("");
  const { loading, setLoading } = useContext(UserContext);
  //----------
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  //----------
  useEffect(() => {
    window.history.pushState("", "", currentPath);
  }, [currentPath]);
  //----------
  return (
    <>
      <Routes>
        {loading ?? <SpinnerPage />}
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
          // setCurrentPath={setCurrentPath}
        />
        <Route path="/dashboard" element={<ProtectedRoutes />}>
          <Route index element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
