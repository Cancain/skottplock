import React from "react";

import style from "./Sidebar.module.css";

const sidebar = props => {
  const sidebarClasses = [style.Sidebar, props.closed ? style.closed : null];
  return <div className={sidebarClasses.join(" ")}>{props.children}</div>;
};

export default sidebar;
