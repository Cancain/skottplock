import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../../Containers/Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import MainMenu from "../../Containers/Navigation/MainMenu/MainMenu";
import Content from "../../hoc/Content/Content";
import About from "../../Containers/About/About";
import Contact from "../../Containers/Contact/Constact";
import Home from "../../Containers/Home/Home";

const layout = props => {
  const [sideDrawerClosed, setSideDrawerClosed] = useState(true);

  const containerStyle = {
    display: "flex",
    flexFlow: "row",
    backgroundColor: "yellow",
    border: "1px solid black"
  };

  const menuBtnClickHandler = () => {
    setSideDrawerClosed(!sideDrawerClosed);
  };

  return (
    <div>
      <Header MenuBtnClicked={menuBtnClickHandler} />
      <div style={containerStyle}>
        <Sidebar closed={sideDrawerClosed}>
          <MainMenu />
        </Sidebar>
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
