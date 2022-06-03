import React from "react";
import Styles from "../styles/Button.module.css";
const Button = ({ children }) => {
  return (
    <div class={Styles.button}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
