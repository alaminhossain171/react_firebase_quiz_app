import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.main}>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
