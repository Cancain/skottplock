import React from "react";

import NavigationItem from "../../../Components/Navigation/NavigationItem/NavigationItem";

const mainMenu = props => {
  const mockItem = [
    { text: "item1", link: "/contact" },
    { text: "item2", link: "/about" },
    { text: "item3", link: "/" }
  ];

  return (
    <div>
      <h1>Main Menu</h1>
      <NavigationItem subItems={mockItem} link={"/about"} text={"Stuff"} />
      <NavigationItem text={"More stuff"} />
      <NavigationItem text={"Even more stuff"} />
    </div>
  );
};

export default mainMenu;
