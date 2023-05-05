import { useNavigate } from "react-router-dom";
import "material-symbols";
import "./style.css";

export const Logo = ({ props }) => {
  const navigate = useNavigate();

  return (
    <div className="logo-container">
      <div
        className="logo-content"
        onClick={() => {
          navigate("/");
        }}
      >
        <div className="ball">
          <span className="material-symbols-outlined">airport_shuttle</span>
        </div>
        <div className={props}>
          <span className="name">Vanbora</span>
        </div>
      </div>
    </div>
  );
};
