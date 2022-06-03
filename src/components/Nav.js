import React from "react";
import logo from "../assests/images/logo-bg.png";
import Styles from "../styles/Nav.module.css";
import Account from "./Account";
const Nav = () => {
  return (
    <div>
      <nav className={Styles.nav}>
        <ul>
          <li>
            <a href="index.html" className={Styles.brand}>
              <img src={logo} alt="Quiz app logo" />
              <h3>React Quiz App</h3>
            </a>
          </li>
        </ul>
        <Account />
      </nav>
    </div>
  );
};

export default Nav;
