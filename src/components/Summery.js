import React from "react";
import image from "../assests/images/success.png";
import Styles from "../styles/Summery.module.css";
const Summery = () => {
  return (
    <div className={Styles.summary}>
      <div className={Styles.point}>
        <p className={Styles.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className="badge">
        <img src={image} alt="Success" />
      </div>
    </div>
  );
};

export default Summery;
