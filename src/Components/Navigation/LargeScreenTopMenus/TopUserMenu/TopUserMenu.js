import React from "react";
import { NavLink } from "react-router-dom";

import style from "./TopUserMenu.module.css";

const topUserMenu = props => {
  const navStyle = {
    color: "#a5da91",
    textShadow: "2px 2px 2px black",
    margin: "0 20px 0 0"
  };
  return (
    <div className={style.UserMenu}>
      <NavLink style={navStyle} to="/login">
        Logga in
      </NavLink>
      <NavLink style={navStyle} to="/register">
        Registrera
      </NavLink>
      <NavLink style={navStyle} to="/">
        Kassa
      </NavLink>
    </div>
  );
};

export default topUserMenu;
