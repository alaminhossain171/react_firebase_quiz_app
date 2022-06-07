import React from "react";
import image from "../assests/images/3.jpg";
import Styles from "../styles/MiniPlayer.module.css";
const MiniPlayer = () => {
  return (
    <div className={`${Styles.miniPlayer} ${Styles.floatingBtn}`}>
      <span className={`material-icons-outlined ${Styles.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span className={`material-icons-outlined ${Styles.close}`}> close </span>
      <img src={image} alt="img" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default MiniPlayer;
