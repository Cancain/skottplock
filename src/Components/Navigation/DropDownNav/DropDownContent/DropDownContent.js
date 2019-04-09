import React from "react";

import style from "./DropDownContent.module.css";

const dropDownContent = props => {
  console.log(props.items);

  const items = props.items.map(item => {
    return <li>{item.name}</li>;
  });
  return <div className={style.DropDownContent}>{<ul>{items}</ul>}</div>;
};

export default dropDownContent;
