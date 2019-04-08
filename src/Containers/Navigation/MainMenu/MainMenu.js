import React from "react";

import { clones } from "../../../MockData/Products";
import NavigationItem from "../../../Components/Navigation/NavigationItem/NavigationItem";

const mainMenu = props => {
  const shoots = clones.map(item => {
    return (
      <NavigationItem
        clicked={props.productClicked}
        key={item.id}
        text={item.name}
        subItems={item.subItems}
        price={item.price}
      />
    );
  });

  const width = window.innerWidth;
  let headline = null;
  if (width <= props.breakpoint) headline = <h1>Huvudmeny</h1>;

  return (
    <div>
      {headline}
      {shoots}
    </div>
  );
};

export default mainMenu;
