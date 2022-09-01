import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const fourthRef = useRef();
  const [fourthElement, setFourthElement] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setFourthElement(entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      },
      { threshold: 0.06 }
    );
    observer.observe(fourthRef.current);
  }, []);

  return (
    <div id="fourth" className={styles.fourthView}>
      <div
        ref={fourthRef}
        className={`${styles.fourthContainer} ${
          fourthElement ? styles.fadeInUp : ""
        }`}
      >
        <h1>NOTABLE PROJECTS</h1>
        <div className={styles.projectContent}>
          <h3>Kanban Board</h3>
          <hr></hr>
          <p>
            A simple Kanban board app that allows users to add new tasks and
            change the status of each task.
          </p>
          <a
            href="https://kanban-board-kvn-nguyen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/kanban-app.png" alt="kanban app" />
          </a>
        </div>
        <div className={styles.projectContent}>
          <h3>Beer Punk API</h3>
          <hr></hr>
          <p>
            A beer app using the Punk API to display beer data with applicable
            filters. Inspired by a similarly named beer brand. 🍺
          </p>
          <a
            href="https://beer-api-kvn-nguyen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/beer-app.png" alt="beer app" />
          </a>
        </div>
        <div className={styles.projectContent}>
          <h3>Pokemon Hangman</h3>
          <hr></hr>
          <p>
            A hangman game based on the original 151 Pokemon! Do you have what
            it takes to catch them all? Requires a keyboard to play!
          </p>
          <a
            href="https://pokemon-hangman-kvn-nguyen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/hangman-app.png" alt="hangman app" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
