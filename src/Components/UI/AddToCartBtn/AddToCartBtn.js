import React from "react";

import style from "./AddToCartBtn.module.css";

const addToCartBtn = props => {
  return (
    <div className={style.AddToCartBtn}>
      <button>Lägg till i varukorg</button>
    </div>
  );
};

export default addToCartBtn;
