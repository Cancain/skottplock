import React, { useState } from "react";

import style from "./Layout.module.css";
import Header from "../../Containers/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainMenu from "../../Containers/Navigation/MainMenu/MainMenu";
import ShoppingMenu from "../../Containers/Navigation/ShoppingMenu/ShoppingMenu";
import Content from "../../hoc/Content/Content";
import Router from "../../Containers/Router/Router";
import Backdrop from "../../Components/Backdrop/Backdrop";

const layout = props => {
  const [sideDrawerClosed, setSideDrawerClosed] = useState(true);
  const [menuComponent, setMenuComponent] = useState(ShoppingMenu.name);
  const [activeMenu, setActiveMenu] = useState(null);

  const width = window.innerWidth;
  const breakpoint = 1024;

  //When a click on the menu is registered this function takes the component and either adds the correct menu to the sidebar or opens/closes the menu depending on it's current state. Only one menu will be loaded at the same time.
  const menuClickHandler = component => {
    if (menuComponent !== component.name && sideDrawerClosed === false) {
      //The menuComponent does not match the component and the sidedrawer is open.
      //Sets the proper menucomponent and leaves the sidedrawer open
      setMenuComponent(component.name);
      setActiveMenu(component.name);
    } else if (menuComponent !== component.name && sideDrawerClosed === true) {
      //The menuComponent does not match the component and the sidedrawer is closed.
      //Sets the proper menucomponent and opens the sidedrawer
      setMenuComponent(component.name);
      setActiveMenu(component.name);
      setSideDrawerClosed(false);
    } else if (menuComponent === component.name && sideDrawerClosed === true) {
      //The menuComponent match the component and the sidedrawer is closed.
      //Opens the sideDrawer
      setSideDrawerClosed(false);
      setActiveMenu(component.name);
    } else if (menuComponent === component.name && sideDrawerClosed === false) {
      //The menuComponent match the component and the sidedrawer is open.
      //Closes the sidedrawer
      setSideDrawerClosed(true);
      setActiveMenu(null);
    }
  };

  const hideMenuHandler = () => {
    setSideDrawerClosed(true);
    setActiveMenu(null);
  };

  let menu = (
    <MainMenu breakpoint={breakpoint} productClicked={hideMenuHandler} />
  );
  if (activeMenu === "shoppingMenu") menu = <ShoppingMenu />;

  const backdrop = (
    <Backdrop clicked={hideMenuHandler} closed={sideDrawerClosed} />
  );

  let sidebar = <Sidebar closed={sideDrawerClosed}>{menu}</Sidebar>;
  if (width >= breakpoint) {
    sidebar = (
      <Sidebar>
        <MainMenu breakpoint={breakpoint} />
      </Sidebar>
    );
  }

  return (
    <div style={{ height: "100%" }}>
      <Header
        breakpoint={breakpoint}
        logoClicked={hideMenuHandler}
        activeMenu={activeMenu}
        menuBtnClicked={() => menuClickHandler(MainMenu)}
        shoppingBtnClicked={() => menuClickHandler(ShoppingMenu)}
      />
      <div className={style.Layout}>
        {sidebar}
        <Content>
          {width <= breakpoint ? backdrop : null}
          <Router />
        </Content>
      </div>
    </div>
  );
};

export default layout;
