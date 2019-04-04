import React from "react";

import Header from "../../Containers/Header/Header";
import Sidebar from "../../Containers/Sidebar/Sidebar";
import Content from "../../hoc/Content/Content";

const layout = props => {
  const containerStyle = {
    display: "flex",
    flexFlow: "row",
    backgroundColor: "yellow",
    border: "1px solid black"
  };

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default layout;
