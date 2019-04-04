import React from "react";

import style from "./Header.module.css";
import Logo from "../../Components/Logo/Logo";
import Navigation from "../../Components/Navigation/Navigation";

const header = props => {
  return (
    <div className={style.Header}>
      <p>Log in</p>
      <Logo />
      <Navigation MenuBtnClicked={props.MenuBtnClicked} />
    </div>
  );
};

export default header;
