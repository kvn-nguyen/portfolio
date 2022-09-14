import React from "react";
import styles from "../styles/Header.module.css";

const NavItems = () => {
  return (
    <div className = {styles.mainNav}>
      <ul>
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
