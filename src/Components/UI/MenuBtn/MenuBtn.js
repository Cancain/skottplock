import React from "react";

import style from "./MenuBtn.module.css";

const menuBtn = props => {
  const classes = [
    style.MenuBtn,
    props.activeMenu === "mainMenu" ? style.Pressed : null
  ];
  return (
    <div className={classes.join(" ")} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default menuBtn;
