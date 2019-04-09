import React, { useState } from "react";

const shoppingCart = props => {
  const [items] = useState(null);

  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>Kassa</h1>
    </div>
  );
};

export default shoppingCart;
