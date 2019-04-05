import React from "react";

import style from "./ShoppingCartBtn.module.css";

const shoppingCartBtn = props => {
  let classes = [
    style.ShoppingCartBtn,
    props.activeMenu === "shoppingMenu" ? style.Pressed : null
  ];
  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      <i className="fas fa-shopping-cart" />
    </div>
  );
};

export default shoppingCartBtn;
