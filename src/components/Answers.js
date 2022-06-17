import CheckBox from "../components/Checkbox";
import Styles from "../styles/Answers.module.css";
export default function Answers({ options = [], handleChange }) {
  return (
    <div className={Styles.answers}>
      {options.map((option, index) => (
        <CheckBox
          key={index}
          className={Styles.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
