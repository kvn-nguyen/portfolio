import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <h1>SOCIAL</h1>
      <div className={styles.footerLink}>
        <a href="mailto:kvnv.nguyen@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ width: "40px", color: "white"}} />
        </a>
        <a href="https://www.linkedin.com/in/kvnnguyen/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin} 
            style={{ width: "40px", color: "white" }}
          />
        </a>
        <a href="https://github.com/kvn-nguyen" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ width: "40px", color: "white" }}
          />
        </a>
      </div>
      <p>Copyright ⓒ Kevin Nguyen {year}</p>
    </footer>
  );
};

export default Footer;
