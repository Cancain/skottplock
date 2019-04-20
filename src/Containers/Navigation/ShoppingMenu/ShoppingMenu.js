import React from "react";
import { NavLink } from "react-router-dom";

import style from "./ShoppingMenu.module.css";

const shoppingMenu = props => {
  return (
    <div className={style.ShoppingMenu}>
      <h1>Kassameny</h1>
      <div>
        <NavLink onClick={props.productClicked} to="/cart">
          Kassa
        </NavLink>
        <NavLink onClick={props.productClicked} to="/login">
          Logga in
        </NavLink>
        <NavLink onClick={props.productClicked} to="/register">
          Registrera
        </NavLink>
      </div>
    </div>
  );
};

export default shoppingMenu;
