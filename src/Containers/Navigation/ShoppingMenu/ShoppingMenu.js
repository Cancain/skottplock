import React from "react";
import { NavLink } from "react-router-dom";

import style from "./ShoppingMenu.module.css";

const shoppingMenu = props => {
  return (
    <div className={style.ShoppingMenu}>
      <h1>Kassameny</h1>
      <div>
        <NavLink to="/cart">Kassa</NavLink>
        <NavLink to="/login">Logga in</NavLink>
        <NavLink to="/register">Registrera</NavLink>
      </div>
    </div>
  );
};

export default shoppingMenu;
