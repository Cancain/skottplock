import React from "react";

import style from "./Navigation.module.css";
import MenuBtn from "../UI/MenuBtn/MenuBtn";
import Logo from "../Logo/Logo";
import ShoppingCartBtn from "../UI/ShoppingCartBtn/ShoppingCartBtn";

const navigation = props => {
  return (
    <div className={style.Navigation}>
      <ShoppingCartBtn
        activeMenu={props.activeMenu}
        clicked={props.shoppingBtnClicked}
      />
      <Logo />
      <MenuBtn activeMenu={props.activeMenu} clicked={props.menuBtnClicked} />
    </div>
  );
};

export default navigation;
