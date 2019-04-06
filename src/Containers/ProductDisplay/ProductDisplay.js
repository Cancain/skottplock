import React from "react";

import { clones } from "../../MockData/Products";

const productDisplay = props => {
  const product = new URLSearchParams(props.location.search);

  return (
    <div>
      <h1>{clones[product.get("id")].subItems[product.get("subId")].name}</h1>
    </div>
  );
};

export default productDisplay;
