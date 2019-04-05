import React from "react";

import style from "./MenuBtn.module.css";

const menuBtn = props => {
  return (
    <div className={style.MenuBtn} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default menuBtn;
