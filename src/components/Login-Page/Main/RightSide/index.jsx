import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RightSide = ({ props }) => {
  return (
    <div className="right-side">
      <span className="entry-text">
        Faça o login e conheça a nossa plataforma
      </span>
      <div className="bottom-text">
        <span className="thin-text">Não tem uma conta?</span>
        <Link to="/register">
          <span className="bold-text">Registre-se</span>
        </Link>
      </div>
    </div>
  );
};
