import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Logo.module.css";

const logo = props => {
  return (
    <div className={style.Logo}>
      <NavLink onClick={props.clicked} to="/">
        <p>Skottplock</p>
      </NavLink>
    </div>
  );
};

export default logo;
