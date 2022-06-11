import Answers from "../components/Answers";
import Styles from "../styles/Question.module.css";
const Question = () => {
  return (
    <div>
      <div className={Styles.question}>
        <div className={Styles.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          Here goes the question from Learn with Sumit?
        </div>
        <Answers />
      </div>
    </div>
  );
};

export default Question;
