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
  const [sideDrawerClosed, setSideDrawerClosed] = useState(false);
  const [menuComponent, setMenuComponent] = useState(ShoppingMenu.name);

  const containerStyle = {
    display: "flex",
    flexFlow: "row",
    backgroundColor: "yellow",
    border: "1px solid black"
  };

  const menuClickHandler = component => {
    console.log(component.name);
    if (menuComponent !== component.name && sideDrawerClosed === false) {
      setMenuComponent(component.name);
    } else if (menuComponent !== component.name && sideDrawerClosed === true) {
      setMenuComponent(component.name);
      setSideDrawerClosed(false);
    } else if (menuComponent === component.name && sideDrawerClosed === true) {
      setSideDrawerClosed(false);
    } else if (menuComponent === component.name && sideDrawerClosed === false) {
      setSideDrawerClosed(true);
    } else {
      setSideDrawerClosed(true);
    }
  };

  return (
    <div>
      <Header
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
