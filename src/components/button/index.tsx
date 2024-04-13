import React from "react";
import IButton from "./type";
const Button = (props: IButton) => {
  const { title } = props;
  return <button>{title}</button>;
};

export default Button;
