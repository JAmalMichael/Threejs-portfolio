import React from "react";

const Button = ({ name, containerClass, isBeam = false }) => {
  return <button className={`btn ${containerClass}`}>{name}</button>;
};

export default Button;
