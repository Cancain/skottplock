import React, { useState } from "react";

import Header from "../../Containers/Header/Header";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import Content from "../../hoc/Content/Content";

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
    console.log(sideDrawerClosed);
  };

  return (
    <div>
      <Header MenuBtnClicked={menuBtnClickHandler} />
      <div style={containerStyle}>
        <Sidebar closed={sideDrawerClosed} />
        <Content />
      </div>
    </div>
  );
};

export default layout;
