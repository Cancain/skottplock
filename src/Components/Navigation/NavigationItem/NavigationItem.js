import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavigationItem.module.css";

const navigationItem = props => {
  let subItems = null;
  if (props.subItems) {
    subItems = props.subItems.map(item => {
      return (
        <li key={item.id}>
          <NavLink to={item.link}>{item.name}</NavLink>
        </li>
      );
    });
  }

  return (
    <div className={style.NavigationItem}>
      <ul>
        <NavLink to={props.link}>{props.text}</NavLink>
        {subItems}
      </ul>
    </div>
  );
};

export default navigationItem;
