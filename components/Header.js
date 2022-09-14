import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import NavItems from "./NavItems";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <a href="#first">
          <img
            src="/static/kn_logo_main.png"
            alt="logo pic"
            width="45px"
            height="45px"
          />
        </a>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.hiddenHeader}>
          <div className={displayNav ? styles.navMenu : styles.hidden}>
            <NavItems />
          </div>
        </div>
        <div className={styles.hamburger}>
          <div
            className={
              displayNav ? `${styles.menuBtn} ${styles.open}` : styles.menuBtn
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
