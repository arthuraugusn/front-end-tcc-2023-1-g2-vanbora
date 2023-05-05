import { HeaderLogin } from "../../components/Login-Page/Header";
import { MainLogin } from "../../components/Login-Page/Main";
import "./style.css";
import "../reset/reset.css";

export const LoginPage = () => {
  let className = "header-logo-menu-burguer";
  return (
    <>
      <div className="body-login-page">
        <HeaderLogin props={className}></HeaderLogin>
        <MainLogin></MainLogin>
      </div>
    </>
  );
};
