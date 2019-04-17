import React from "react";

import style from "./SearchBar.module.css";
import Button from "../Button/Button";

const searchBar = props => {
  return (
    <div className={style.SearchBar}>
      <input type="text" />
      <Button
        text="sök"
        height="25px"
        margin="auto 5px 3px 5px"
        bgColor="green"
        width="fit-content"
        textColor="#73b55b"
        borderColor="#144900"
      />
    </div>
  );
};

export default searchBar;
