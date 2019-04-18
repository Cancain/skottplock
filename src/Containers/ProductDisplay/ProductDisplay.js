import React, { useContext } from "react";

import style from "./ProductDisplay.module.css";
import { clones } from "../../MockData/Products";
import AddToCartBtn from "../../Components/UI/AddToCartBtn/AddToCartBtn";
import { CartContext } from "../../hoc/Context/CartContext";

const productDisplay = props => {
  const context = useContext(CartContext);

  //Gets the product parents and the items id
  const product = new URLSearchParams(props.location.search);
  const parentId = product.get("id");
  const id = product.get("subId");

  return (
    <div className={style.ProductDisplay}>
      <h1>{clones[parentId].subItems[id].name}</h1>
      <strong>Pris: {clones[parentId].subItems[id].price} SEK</strong>
      <p>{clones[parentId].subItems[id].desc}</p>
      <AddToCartBtn click={() => context.addItem(id, parentId)} />
    </div>
  );
};

export default productDisplay;
