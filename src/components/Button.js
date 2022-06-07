import React from "react";
import Styles from "../styles/Button.module.css";
const Button = ({ className, children }) => {
  return <div class={`${Styles.button} ${className}`}>{children}</div>;
};

export default Button;
