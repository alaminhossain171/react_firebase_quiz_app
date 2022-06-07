import React from "react";
import CheckBox from "../components/Checkbox";
import Styles from "../styles/Answers.module.css";
const Answers = () => {
  return (
    <div className={Styles.answers}>
      <CheckBox className={Styles.answer} text={"A new Hope"} />
    </div>
  );
};

export default Answers;
