import React from "react";

import style from "./ProductDisplay.module.css";
import { clones } from "../../MockData/Products";
import AddToCartBtn from "../../Components/UI/AddToCartBtn/AddToCartBtn";

const productDisplay = props => {
  //Gets the product parents and the items id
  const product = new URLSearchParams(props.location.search);
  const id = product.get("id");
  const subId = product.get("subId");

  console.log(props);
  
  return (
    <div className={style.ProductDisplay}>
      <h1>{clones[id].subItems[subId].name}</h1>
      <strong>Pris: {clones[id].subItems[subId].price} SEK</strong>
      <p>{clones[id].subItems[subId].desc}</p>
      <AddToCartBtn click={() => props.addToCart()} />
    </div>
  );
};

export default productDisplay;
