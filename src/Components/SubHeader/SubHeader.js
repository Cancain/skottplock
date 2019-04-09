import React from "react";

import style from "./SubHeader.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import DropDownNav from "../Navigation/DropDownNav/DropDownNav";

const subHeader = props => {
  return (
    <div className={style.SubHeader}>
      <div className={style.DropDownLinks}>
        <DropDownNav text="Item" />
        <DropDownNav text="Item" />
      </div>
      <SearchBar />
    </div>
  );
};

export default subHeader;
