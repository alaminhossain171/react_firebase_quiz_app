import Styles from "../styles/Button.module.css";
const Button = ({ className, children,...rest }) => {
  return <button {...rest} className={`${Styles.button} ${className}`}>{children}</button>;
};

export default Button;
