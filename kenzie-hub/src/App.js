import logo from "./logo.svg";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage/index";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [currentPath, setCurrentPath] = useState("");
  const [user, setUser] = useState(null);
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
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route
          path="/register"
          element={<RegisterPage />}
          setCurrentPath={setCurrentPath}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage user={user} setUser={setUser} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
