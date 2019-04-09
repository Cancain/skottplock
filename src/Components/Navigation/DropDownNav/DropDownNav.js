import React, { useState } from "react";

import style from "./DropDownNav.module.css";
import DropDownContent from "./DropDownContent/DropDownContent";

const dropDownNav = props => {
  const [open, setOpen] = useState(false);
  const [items] = useState(props.items);

  console.log(items);

  let dropDownContent = null;
  if (open) {
    dropDownContent = <DropDownContent items={items} />;
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
