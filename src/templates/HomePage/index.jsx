import { useState } from "react";
import { HeaderHomePage } from "../../components/HomePage/Header";
import "./body.css";

import "../reset/reset.css";
import { MainHomePage } from "../../components/HomePage/Main";

export default function HomePage({ props }) {
  if (props == true) {
    props = "white";
  }

  const [state, setState] = useState({});

  return (
    <div className="container-body-home">
      <HeaderHomePage props={props} />
      <MainHomePage />
    </div>
  );
}
