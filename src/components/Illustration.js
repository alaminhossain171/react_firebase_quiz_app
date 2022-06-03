import React from "react";
import signupImg from "../assests/images/signup.svg";
import Styles from "../styles/Illustration.module.css";
const Illustration = () => {
  return (
    <div class={Styles.illustration}>
      <img src={signupImg} alt="Signup" />
    </div>
  );
};

export default Illustration;
