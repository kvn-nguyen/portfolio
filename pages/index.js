import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Homepage from "../components/Homepage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Nguyen</title>
        <meta name="portfolio" content="CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.parentPage}>
        <Homepage />
        <About />
        <Skills />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}
