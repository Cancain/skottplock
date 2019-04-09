import React from "react";

import style from "./DropDownContent.module.css";

const dropDownContent = props => {
  return (
    <div className={style.DropDownContent}>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
    </div>
  );
};

export default dropDownContent;
