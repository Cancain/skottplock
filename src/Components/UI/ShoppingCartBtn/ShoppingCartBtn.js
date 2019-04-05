import React from "react";

import style from "./ShoppingCartBtn.module.css";

const shoppingCartBtn = props => {
  return (
    <div className={style.ShoppingCartBtn}>
      <i className="fas fa-shopping-cart" />
    </div>
  );
};

export default shoppingCartBtn;
