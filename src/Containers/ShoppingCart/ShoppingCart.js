import React, { useContext } from "react";

import style from "./ShoppingCart.module.css";
import Button from "../../Components/UI/Button/Button";
import { CartContext } from "../../hoc/Context/CartContext";

const shoppingCart = props => {
  const context = useContext(CartContext);
  const items = context.items;

  items.forEach(item => {
    console.log(item);
  });

  return (
    <div>
      <h1 className={style.ShoppingCart}>Kassa</h1>
      <Button text="Slutför beställning" />
    </div>
  );
};

export default shoppingCart;
