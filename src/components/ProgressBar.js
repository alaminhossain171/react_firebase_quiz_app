
import Button from "../components/Button";
import Styles from "../styles/ProgressBar.module.css";
export default function ProgressBar({ next, prev, submit, progress }) {
  return (
    <div className={Styles.progressBar}>
      <div className={Styles.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={Styles.rangeArea}>
        <div className={Styles.tooltip}>{progress}% Cimplete!</div>
        <div className={Styles.rangeBody}>
          <div
            className={Styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <Button
        className={Styles.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>Next Question</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}