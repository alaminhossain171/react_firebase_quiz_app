import Answers from "../components/Answers";
import Styles from "../styles/Question.module.css";
export default function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={Styles.question} key={index}>
      <div className={Styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}