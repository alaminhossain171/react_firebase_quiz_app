
import { useRef, useState } from "react";
import Button from "../components/Button";
import Styles from "../styles/ProgressBar.module.css";
export default function ProgressBar({ next, prev, submit, progress }) {
  const [tooltip, setTooltip] = useState(false);
  const tooltipRef = useRef();
  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = "block";
    }
  }
  return (
    <div className={Styles.progressBar}>
    <div className={Styles.backButton} onClick={prev}>
      <span className="material-icons-outlined"> arrow_back </span>
    </div>
    <div className={Styles.rangeArea}>
      <div className={Styles.tooltip} ref={tooltipRef}>
        {progress}% Complete!
      </div>
      <div className={Styles.rangeBody}>
        <div
          className={Styles.progress}
          style={{ width: `${progress}%` }}
          onMouseOver={toggleTooltip}
          onMouseOut={toggleTooltip}
        ></div>
      </div>
    </div>
    <Button
      className={Styles.next}
      onClick={progress === 100 ? submit : next}
    >
      <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
      <span className="material-icons-outlined"> arrow_forward </span>
    </Button>
  </div>
  );
}