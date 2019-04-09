import React from "react";

import style from "./FormInput.module.css";

const formInput = props => {
  return (
    <div className={style.FormInput}>
      <label>{props.text} :</label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default formInput;
