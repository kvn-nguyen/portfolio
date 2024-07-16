import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/About.module.css";

const About = () => {
    const secondRef = useRef();
    const [secondElement, setSecondElement] = useState();
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setSecondElement(entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
      }, {threshold: .3,})
      observer.observe(secondRef.current);
    }, [])

    return (
        <div id="about" className={styles.secondView}>
          <div ref={secondRef} className={`${styles.secondContainer} ${secondElement ? styles.fadeInUp : ""}`}>
            <h1>ABOUT ME</h1>
            <p>
              I graduated from California State University, Fullerton with a BS
              in Computer Science. I am a dedicated and detail-oriented Quality
              Assurance (QA) Engineer with 5 years of experience in ensuring the
              highest standards of software quality. My passion lies in identifying
              potential issues before they become problems, and I take pride in
              deliverying reliable, efficient, and user-friendly solutions.
            </p>
            <p>
              My journey as a QA Engineer has honed my analytical and problem-solving
              skills, making me adept at thinking critically and addressing complex
              challenges. However, I am now excited to explore new opportunities,
              whether it&apos;s advancing my career in QA or venturing into a new
              field where I can leverage my skills and learn new ones.
            </p>
          </div>
        </div>
    )
}

export default About
