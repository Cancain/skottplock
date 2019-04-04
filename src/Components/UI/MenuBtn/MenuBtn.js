import React from "react";

const menuBtn = props => {
  return (
    <div onClick={props.clicked}>
      <p>MenuBtn</p>
    </div>
  );
};

export default menuBtn;
