import React from "react";
import { NavLink } from "react-router-dom";

import style from "./DropDownContent.module.css";

const dropDownContent = props => {
  const items = props.items.map(item => {
    return (
      <li key={item.id}>
        <NavLink to={"/product/?id=" + item.parentId + "&subId=" + item.id}>
          {item.name}
        </NavLink>
      </li>
    );
  });
  return <div className={style.DropDownContent}>{<ul>{items}</ul>}</div>;
};

export default dropDownContent;
