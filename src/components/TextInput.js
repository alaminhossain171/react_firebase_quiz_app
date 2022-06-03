import React from "react";
import Styles from "../styles/TextInput.module.css";

const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={Styles.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};

export default TextInput;
