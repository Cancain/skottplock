import React from "react";

const button = props => {
  const btnStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.bgColor,
    margin: props.margin,
    color: props.textColor,
    border: "2px solid " + props.borderColor,
    padding: "0 10px",
    cursor: "pointer",
    textShadow: "1px 1px 1px black",
    boxShadow: "2px 2px 2px black",
    borderRadius: "4px",
    fontSize: "1.1rem",
    fontWeight: "bolder"
  };

  return (
    <button style={btnStyle}>
      <p>{props.text}</p>
    </button>
  );
};

export default button;
