import React from "react";
import videologo from "../assests/images/3.jpg";
import Styles from "../styles/Video.module.css";
function Video() {
  return (
    <>
      <a href="quiz.html">
        <div className={Styles.video}>
          <img src={videologo} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={Styles.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default Video;
