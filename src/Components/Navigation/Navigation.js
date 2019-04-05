import React from "react";

import style from "./Navigation.module.css";
import MenuBtn from "../UI/MenuBtn/MenuBtn";
import Logo from "../Logo/Logo";
import ShoppingCartBtn from "../UI/ShoppingCartBtn/ShoppingCartBtn";

const navigation = props => {
  return (
    <div className={style.Navigation}>
      <ShoppingCartBtn />
      <Logo />
      <MenuBtn clicked={props.MenuBtnClicked} />
    </div>
  );
};

export default navigation;
