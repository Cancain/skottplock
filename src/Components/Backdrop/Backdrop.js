import React from "react";

import style from "./Backdrop.module.css";

const backDrop = props => {
  const classes = [style.Backdrop, props.closed ? null : style.Closed];

  return <div className={classes.join(" ")}>{props.children}</div>;
};

export default backDrop;
