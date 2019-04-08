import React from "react";
import { NavLink } from "react-router-dom";

import style from "./TopUserMenu.module.css";

const topUserMenu = props => {
  const navStyle = {
    color: "black",
    margin: "0 20px 0 0"
  };
  return (
    <div className={style.UserMenu}>
      <NavLink style={navStyle} to="/">
        Logga in
      </NavLink>
      <NavLink style={navStyle} to="/">
        Registrera
      </NavLink>
      <NavLink style={navStyle} to="/">
        Kassa
      </NavLink>
    </div>
  );
};

export default topUserMenu;
