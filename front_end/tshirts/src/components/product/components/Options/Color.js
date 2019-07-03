import React from "react";

const colors = ["gray", "black", "white"];

const select = event => {
  console.log(event.target);
};

const Color = () => {
  return colors.map(color => <div className={color}> </div>);
};

export default Color;
