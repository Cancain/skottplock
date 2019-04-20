import React, { useContext } from "react";

import style from "./ShoppingCart.module.css";
import Button from "../../Components/UI/Button/Button";
import { CartContext } from "../../hoc/Context/CartContext";
import { clones } from "../../MockData/Products";

const shoppingCart = props => {
  const context = useContext(CartContext);
  const items = context.items;

  /*
   *Helpers
   */
  let totalPrice = 0;
  const getPrice = (price, ammount) => {
    return price * ammount;
  };

  const updateTotalPrice = newPrice => {
    return (totalPrice += newPrice);
  };

  /*
   *Click hadlers
   */

  const upArrowClickHandler = item => {
    context.incrementItem(item);
  };

  const downArrowClickHandler = item => {
    context.decrementItem(item);
  };

  const removeItemHandler = item => {
    context.removeItem(item);
  };

  let index = 0;
  const generateId = () => {
    const id = index;
    index++;
    return id;
  };

  const displayProducts = (item, price) => {
    return (
      <li key={generateId()} className={style.ItemWrapper}>
        <p>{clones[item.parentId].subItems[item.id].name}</p>
        <div className={style.Container}>
          <p>Antal: {item.ammount}</p>
          <div className={style.Arrows}>
            <i onClick={() => upArrowClickHandler(item)}>{"<"}</i>
            <i onClick={() => downArrowClickHandler(item)}>{">"}</i>
          </div>
        </div>
        <div className={style.Container}>
          <p>Pris: {price} SEK</p>
          <i
            onClick={() => removeItemHandler(item)}
            className="fas fa-ban"
            style={{ color: "red" }}
          />
        </div>
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
