import { Logo } from "./Logo";
import { MenuBurguer } from "./MenuBurguer";
import "./style.css";

export const HeaderHomePage = ({ props }) => {
  return (
    <header className="header-logo-menu-burguer">
      <Logo props={props} />
      <MenuBurguer props={props} />
    </header>
  );
};
