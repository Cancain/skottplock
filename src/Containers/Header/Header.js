import React from "react";

import style from "./Header.module.css";

import Navigation from "../../Components/Navigation/Navigation";
import SubHeader from "../../Components/SubHeader/SubHeader";

const header = props => {
  const width = window.innerWidth;

  return (
    <div className={style.Header}>
      <Navigation
        breakpoint={props.breakpoint}
        logoClicked={props.logoClicked}
        activeMenu={props.activeMenu}
        menuBtnClicked={props.menuBtnClicked}
        shoppingBtnClicked={props.shoppingBtnClicked}
      />
      {width >= props.breakpoint ? <SubHeader /> : null}
    </div>
  );
};

export default header;
