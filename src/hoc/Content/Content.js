import React from "react";

import style from "./Content.module.css";

const content = props => {
  return <div className={style.Content}>{props.children}</div>;
};

export default content;
