import React, { useState } from "react";

import style from "./Sidebar.module.css";

const sidebar = props => {
  const [closed, setClosed] = useState(false);

  console.log(closed);

  const sidebarClasses = [style.Sidebar, closed ? style.closed : null];
  return (
    <div className={sidebarClasses.join(" ")}>
      <p>Sidebar</p>
    </div>
  );
};

export default sidebar;
