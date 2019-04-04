import React from "react";

import NavBar from "./NavBar/NavBar";
import MenuBtn from "../UI/MenuBtn/MenuBtn";

const navigation = props => {
  return (
    <div>
      <MenuBtn clicked={props.MenuBtnClicked} />
    </div>
  );
};

export default navigation;
