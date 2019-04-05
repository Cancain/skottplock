import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../Containers/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainMenu from "../../Containers/Navigation/MainMenu/MainMenu";
import ShoppingMenu from "../../Containers/Navigation/ShoppingMenu/ShoppingMenu";
import Content from "../../hoc/Content/Content";
import About from "../../Containers/About/About";
import Contact from "../../Containers/Contact/Constact";
import Home from "../../Containers/Home/Home";

const layout = props => {
  const [sideDrawerClosed, setSideDrawerClosed] = useState(true);
  const [menuComponent, setMenuComponent] = useState(ShoppingMenu.name);
  const [activeMenu, setActiveMenu] = useState(null);

  const containerStyle = {
    display: "flex",
    flexFlow: "row",
    backgroundColor: "yellow",
    border: "1px solid black"
  };

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

  return (
    <div>
      <Header
        activeMenu={activeMenu}
        menuBtnClicked={() => menuClickHandler(MainMenu)}
        shoppingBtnClicked={() => menuClickHandler(ShoppingMenu)}
      />
      <div style={containerStyle}>
        <Sidebar closed={sideDrawerClosed}>{menuComponent}</Sidebar>
        <Content>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Content>
      </div>
    </div>
  );
};

export default layout;
