import React from "react";

import style from "./AddToCartBtn.module.css";

const addToCartBtn = props => {
  return (
    <div onClick={props.click} className={style.AddToCartBtn}>
      <button>Lägg till i varukorg</button>
    </div>
  );
};

export default addToCartBtn;
