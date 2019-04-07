import React from "react";

import { clones } from "../../MockData/Products";

const productDisplay = props => {
  const product = new URLSearchParams(props.location.search);
  const id = product.get("id");
  const subId = product.get("subId");

  return (
    <div>
      <h1>{clones[id].subItems[subId].name}</h1>
      <strong>Pris: {clones[id].subItems[subId].price} SEK</strong>
      <p>{clones[id].subItems[subId].desc}</p>
    </div>
  );
};

export default productDisplay;
