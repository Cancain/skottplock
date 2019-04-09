import React, { useState } from "react";

import style from "./DropDownNav.module.css";
import DropDownContent from "./DropDownContent/DropDownContent";

const dropDownNav = props => {
  const [open, setOpen] = useState(false);

  let dropDownContent = null;
  if (open) {
    dropDownContent = <DropDownContent />;
  }

  return (
    <div
      className={style.DropDownNav}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <p>
        {props.text}
        <i style={{ marginLeft: "3px" }} className="fas fa-caret-down" />
      </p>
      {dropDownContent}
    </div>
  );
};

export default dropDownNav;
