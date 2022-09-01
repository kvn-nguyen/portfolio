import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
// import the library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Import icons
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faSquareGithub
  } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    const thirdRef = useRef();
    const [thirdElement, setThirdElement] = useState();
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setThirdElement(entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
      }, {threshold: .3,})
      observer.observe(thirdRef.current);
    }, [])

    return (
        <div id="third" className={styles.thirdView}>
          <div ref={thirdRef} className={`${styles.thirdContainer} ${thirdElement ? styles.fadeInUp : ""}`}>
            <h1>CURRENT SKILLS</h1>
            <div className={styles.skillRow}>
              <div className={styles.skillItem}>
                <FontAwesomeIcon icon={faHtml5} className={styles.faIcon} />
                <h4>HTML</h4>
              </div>
              <div className={styles.skillItem}>
                <FontAwesomeIcon icon={faCss3Alt} className={styles.faIcon} />
                <h4>CSS</h4>
              </div>
              <div className={styles.skillItem}>
                <FontAwesomeIcon icon={faJsSquare} className={styles.faIcon} />
                <h4>Javascript</h4>
              </div>
            </div>
            <div className={styles.skillRow}>
              <div className={styles.skillItem}>
                <FontAwesomeIcon icon={faReact} className={styles.faIcon} />
                <h4>ReactJS</h4>
              </div>
              <div className={styles.skillItem}>
                <img
                  className={styles.faIcon}
                  src="/static/nextjs-white.svg"
                  alt="nextjs icon"
                />
                <h4>Next.js</h4>
              </div>
              <div className={styles.skillItem}>
                <FontAwesomeIcon
                  icon={faSquareGithub}
                  className={styles.faIcon}
                />
                <h4>Git</h4>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Skills