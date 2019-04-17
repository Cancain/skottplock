import React from "react";

import { clones } from "../../MockData/Products";
import style from "./SubHeader.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import DropDownNav from "../Navigation/DropDownNav/DropDownNav";

const subHeader = props => {
  const dropDownNavs = clones.map(item => {
    return <DropDownNav text={item.name} items={item.subItems} key={item.id} />;
  });
  return (
    <div className={style.SubHeader}>
      <div className={style.DropDownLinks}>{dropDownNavs}</div>
      <SearchBar />
    </div>
  );
};

export default subHeader;
