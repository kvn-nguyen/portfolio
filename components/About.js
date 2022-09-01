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
        <div id="second" className={styles.secondView}>
          <div ref={secondRef} className={`${styles.secondContainer} ${secondElement ? styles.fadeInUp : ""}`}>
            <h1>ABOUT ME</h1>
            <p>
              I graduated from California State University, Fullerton with a BS
              in Computer Science. Seeking to expand my knowledge of growing
              technologies, I began my initial career learning about electronics
              and the hardware side of consumer products.
            </p>
            <p>
              Now I am a Front-end Engineer with a focus on React development. I
              specifically enjoy making use of an open source React framework
              called Next.js. I am in search of a place to expand my programming
              knowledge and grow into a well rounded developer. Let&apos;s build a
              better web together!
            </p>
          </div>
        </div>
    )
}

export default About