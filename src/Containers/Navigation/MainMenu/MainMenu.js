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

  return (
    <div>
      <h1>Huvudmeny</h1>
      {shoots}
    </div>
  );
};

export default mainMenu;
