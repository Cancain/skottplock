import React from "react";
import { NavLink } from "react-router-dom";

import style from "./TopMenu.module.css";

const topMenu = props => {
  const navStyle = {
    color: "#a5da91",
    textShadow: "2px 2px 2px black",
    margin: "0 20px 0 0"
  };
  return (
    <div className={style.TopMenu}>
      <NavLink style={navStyle} to="/about">
        Om oss
      </NavLink>
      <NavLink style={navStyle} to="/contact">
        Kontakta oss
      </NavLink>
    </div>
  );
};

export default topMenu;
