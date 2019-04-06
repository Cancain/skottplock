import React from "react";

import { clones } from "../../../MockData/Products";
import NavigationItem from "../../../Components/Navigation/NavigationItem/NavigationItem";

const mainMenu = props => {
  const skott = clones.map(item => {
    return (
      <NavigationItem
        key={item.id}
        text={item.name}
        subItems={item.subItems}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <h1>Main Menu</h1>
      {skott}
    </div>
  );
};

export default mainMenu;
