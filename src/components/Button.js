import Styles from "../styles/Button.module.css";
const Button = ({ className, children }) => {
  return <button className={`${Styles.button} ${className}`}>{children}</button>;
};

export default Button;
