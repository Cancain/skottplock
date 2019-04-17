import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavigationItem.module.css";

const navigationItem = props => {
  let subItems = null;
  if (props.subItems) {
    subItems = props.subItems.map(item => {
      return (
        <li key={item.id}>
          <NavLink
            onClick={props.clicked}
            to={"/product/?id=" + item.parentId + "&subId=" + item.id}
          >
            {item.name}
          </NavLink>
        </li>
      );
    });
  }

  return (
    <div className={style.NavigationItem}>
      <ul>
        <h4 style={{ margin: 0 }} to={props.link}>
          {props.text}
        </h4>
        {subItems}
      </ul>
    </div>
  );
};

export default navigationItem;
