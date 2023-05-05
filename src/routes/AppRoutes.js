import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../templates/HomePage";
import { LoginPage } from "../templates/LoginPage";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<HomePage props={true} />} path="/" />
        <Route Component={LoginPage} path="/login" />
      </Routes>
    </HashRouter>
  );
}
