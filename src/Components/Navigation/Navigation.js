import React from "react";

import style from "./Navigation.module.css";
import MenuBtn from "../UI/MenuBtn/MenuBtn";
import Logo from "../Logo/Logo";
import ShoppingCartBtn from "../UI/ShoppingCartBtn/ShoppingCartBtn";
import TopMenu from "./LargeScreenTopMenus/TopMenu/TopMenu";
import TopUserMenu from "./LargeScreenTopMenus/TopUserMenu/TopUserMenu";

const navigation = props => {
  const width = window.innerWidth;

  const shoppingCartBtn = (
    <ShoppingCartBtn
      activeMenu={props.activeMenu}
      clicked={props.shoppingBtnClicked}
    />
  );

  const menuBtn = (
    <MenuBtn activeMenu={props.activeMenu} clicked={props.menuBtnClicked} />
  );

  return (
    <div className={style.Navigation}>
      {width <= props.breakpoint ? shoppingCartBtn : null}
      <Logo clicked={props.logoClicked} />
      {width >= props.breakpoint ? <TopMenu /> : null}
      {width >= props.breakpoint ? <TopUserMenu /> : null}
      {width <= props.breakpoint ? menuBtn : null}
    </div>
  );
};

export default navigation;
