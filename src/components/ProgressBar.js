import React from "react";
import Button from "../components/Button";
import Styles from "../styles/ProgressBar.module.css";
const ProgressBar = () => {
  return (
    <div className={Styles.progressBar}>
      <div className={Styles.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={Styles.rangeArea}>
        <div className={Styles.tooltip}>24% Cimplete!</div>
        <div className={Styles.rangeBody}>
          <div className={Styles.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button className={Styles.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
};

export default ProgressBar;
