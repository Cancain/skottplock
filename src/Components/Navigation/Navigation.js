import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navigation.module.css";
import MenuBtn from "../UI/MenuBtn/MenuBtn";
import Logo from "../Logo/Logo";
import ShoppingCartBtn from "../UI/ShoppingCartBtn/ShoppingCartBtn";
import NavigationItem from "./NavigationItem/NavigationItem";

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

  const navStyle = {
    color: "black",
    margin: "0 20px 100px 0"
  };

  const largeScreenTopMenu = (
    <div className={style.LargeTopMenu}>
      <p>
        <NavLink style={navStyle} to="/about">
          Om oss
        </NavLink>
      </p>
      <p>
        <NavLink style={navStyle} to="/contact">
          Kontakta oss
        </NavLink>
      </p>
    </div>
  );

  return (
    <div className={style.Navigation}>
      {width <= props.breakpoint ? shoppingCartBtn : null}
      <Logo clicked={props.logoClicked} />
      {width >= props.breakpoint ? largeScreenTopMenu : null}
      {width <= props.breakpoint ? menuBtn : null}
    </div>
  );
};

export default navigation;
