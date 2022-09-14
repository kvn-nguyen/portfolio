import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Homepage.module.css";

const Homepage = () => {
  const firstRef = useRef();
  const [firstElement, setfirstElement] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setfirstElement(entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    }, {threshold: .3,})
    observer.observe(firstRef.current);
  }, [])

    return (
        <div id="home" className={styles.firstView}>
          <div ref={firstRef} className={`${styles.firstContainer} ${firstElement ? styles.fadeInUp : ""}`}>
          <div className={styles.firstMe}>
            <h2>Hi, my name is</h2>
            <h1>Kevin Nguyen</h1>
          </div>
          <img src="/static/kevinpic.jpg" alt="profile pic" />
          <div className={styles.firstDescription}>
            <p>
              I like to construct solid and scalable web applications with
              great user experiences.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Homepage