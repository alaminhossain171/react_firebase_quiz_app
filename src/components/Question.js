import React from "react";
import Answers from "../components/Answers";
import Styles from "../styles/Question.module.css";
const Question = () => {
  return (
    <div>
      <div class={Styles.question}>
        <div class={Styles.qtitle}>
          <span class="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers />
      </div>
    </div>
  );
};

export default Question;
