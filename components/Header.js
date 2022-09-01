import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import NavItems from "./NavItems";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(true);

  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <a href="#first">
          <img
            src="/static/kn_logo.jpg"
            alt="logo pic"
            width="40px"
            height="40px"
          />
        </a>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.hiddenHeader}>
          <div className={displayNav ? styles.hidden : styles.active}>
            <NavItems />
          </div>
        </div>
        <div className={styles.hamburger}>
          <div
            className={
              displayNav ? styles.menuBtn : styles.menuBtn + " " + styles.open
            }
            onClick={() => setDisplayNav(!displayNav)}
          >
            <div className={styles.menuBtn__burger}></div>
          </div>
        </div>

        {/* <button onClick={() => setDisplayNav(!displayNav)}>test</button> */}
      </div>
    </div>
  );
};

export default Header;
