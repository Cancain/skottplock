import React from "react";

import NavigationItem from "../../../Components/Navigation/NavigationItem/NavigationItem";

const shoppingMenu = props => {
  return (
    <div>
      <h1>Kassameny</h1>
      <NavigationItem text={"Stuff"} />
      <NavigationItem text={"More stuff"} />
      <NavigationItem text={"Even more stuff"} />
    </div>
  );
};

export default shoppingMenu;
