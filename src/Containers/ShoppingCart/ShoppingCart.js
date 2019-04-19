import React, { useContext } from "react";

import style from "./ShoppingCart.module.css";
import Button from "../../Components/UI/Button/Button";
import { CartContext } from "../../hoc/Context/CartContext";
import { clones } from "../../MockData/Products";

const shoppingCart = props => {
  const context = useContext(CartContext);
  const items = context.items;

  let totalPrice = 0;

  const getPrice = (price, ammount) => {
    return price * ammount;
  };

  const updateTotalPrice = newPrice => {
    return (totalPrice += newPrice);
  };

  const upArrowClickHandler = item => {
    context.incrementItem(item);
  };

  const downArrowClickHandler = item => {
    context.decrementItem(item);
  };

  const displayProducts = (item, price) => {
    return (
      <li key={item.id} className={style.ItemWrapper}>
        <p>{clones[item.parentId].subItems[item.id].name}</p>
        <p>Antal: {item.ammount}</p>
        <div className={style.Arrows}>
          <i onClick={() => upArrowClickHandler(item)}>{"<"}</i>
          <i onClick={() => downArrowClickHandler(item)}>{">"}</i>
        </div>
        <p>Pris: {price} SEK</p>
      </li>
    );
  };

  const getProducts = items.map(item => {
    const clone = clones[item.parentId].subItems[item.id];
    let price = getPrice(clone.price, item.ammount);
    totalPrice = updateTotalPrice(price);
    return displayProducts(item, price);
  });

  return (
    <div>
      <h1 className={style.ShoppingCart}>Kassa</h1>
      <ul>{getProducts}</ul>
      <p className={style.TotPrice}>Totalt pris: {totalPrice} SEK</p>
      <Button text="Slutför beställning" />
    </div>
  );
};

export default shoppingCart;
