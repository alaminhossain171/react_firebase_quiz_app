import React from "react";
import { Link } from "react-router-dom";
import Styles from "../styles/Videos.module.css";
import Video from "./Video";

const Videos = () => {
  return (
    <div className={Styles.videos}>
      <Link to={`/quiz`}>
        <Video />
      </Link>
      <Link to={`/quiz`}>
        <Video />
      </Link>
      <Link to={`/quiz`}>
        <Video />
      </Link>
      <Link to={`/quiz`}>
        <Video />
      </Link>
      <Link to={`/quiz`}>
        <Video />
      </Link>
      <Link to={`/quiz`}>
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
