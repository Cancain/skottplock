import React from "react";

import style from "./Header.module.css";

import Navigation from "../../Components/Navigation/Navigation";

const header = props => {
  return (
    <div className={style.Header}>
      <Navigation
        breakpoint={props.breakpoint}
        logoClicked={props.logoClicked}
        activeMenu={props.activeMenu}
        menuBtnClicked={props.menuBtnClicked}
        shoppingBtnClicked={props.shoppingBtnClicked}
      />
    </div>
  );
};

export default header;
