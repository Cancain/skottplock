import React, { useState } from "react";

import style from "./ShoppingCart.module.css";
import Button from "../../Components/UI/Button/Button";

const shoppingCart = props => {
  const [items] = useState(props.items);

  console.log(items);

  const displayItems = items.map(item => {
    return (
      <div key={item.id} className={style.ItemWrapper}>
        <p>{item.name}</p>
        <p>Antal: {item.ammount}</p>
        <p>Pris: {item.price * item.ammount}</p>
      </div>
    );
  });

  return (
    <div>
      <h1 className={style.ShoppingCart}>Kassa</h1>
      <ul>{displayItems}</ul>
      <Button text="Slutför beställning" />
    </div>
  );
};

export default shoppingCart;
