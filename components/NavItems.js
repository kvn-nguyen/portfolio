import React from "react";
import styles from "../styles/Header.module.css";

const NavItems = () => {
  return (
    <div className = {styles.mainNav}>
      <ul>
        <li>
          <a href="#first">HOME</a>
        </li>
        <li>
          <a href="#second">ABOUT</a>
        </li>
        <li>
          <a href="#third">SKILLS</a>
        </li>
        <li>
          <a href="#fourth">PROJECTS</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
