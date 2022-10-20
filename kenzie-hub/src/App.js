import logo from "./logo.svg";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserProvider } from "./contexts/UserContext";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const [currentPath, setCurrentPath] = useState("");

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
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/register"
          element={<RegisterPage />}
          setCurrentPath={setCurrentPath}
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
