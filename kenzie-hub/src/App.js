import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

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
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
