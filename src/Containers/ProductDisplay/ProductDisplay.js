import React from "react";

import { clones } from "../../MockData/Products";

const productDisplay = props => {
  const product = new URLSearchParams(props.location.search);
  console.log(props.location);

  return (
    <div>
      <h1>aa</h1>
    </div>
  );
};

export default productDisplay;
