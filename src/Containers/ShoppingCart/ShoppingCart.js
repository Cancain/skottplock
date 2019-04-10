import React, { useState } from "react";

import style from "./ShoppingCart.module.css";

const shoppingCart = props => {
  const [items] = useState(props.items);

  console.log(items);

  const displayItems = items.map(item => {
    return (
      <div className={style.ItemWrapper}>
        <p>vara: {item.name}</p>
        <p>pris: {item.price}</p>
      </div>
    );
  });

  return (
    <div>
      <h1 className={style.ShoppingCart}>Kassa</h1>
      <ul>{displayItems}</ul>
    </div>
  );
};

export default shoppingCart;
