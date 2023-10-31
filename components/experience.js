import React from "react";
import styles from "../styles/Experience.module.css";
import Image from "next/image";
import Link from "next/link";

const Experience = () => {
  return (
    <div className={styles.Experience}>
      <div className={styles.Grid}>
        <div className={styles.Header}>
          <h1>Experience</h1>
        </div>
        <div className={styles.Job}>
          <h2 className={styles.Title}>
            Full Stack Associate Software Engineering
          </h2>
          <h3 className={styles.Company}>Fidelity Investments</h3>
          <p className={styles.Period}>Starting June 2024</p>
          <p className={styles.Description}>
            Will become a full time employee at Fidelity Investments post
            graduation as a part of their LEAP Program.
          </p>
        </div>
        <div className={styles.Job}>
          <h2 className={styles.Title}>
            Full Stack Software Engineering Intern
          </h2>
          <h3 className={styles.Company}>Fidelity Investments</h3>
          <p className={styles.Period}>June 2023 - August 2023</p>
          <p className={styles.Description}>
            Created PowerBI Reports in the Cloud and Platform Engineering
            Business Unit as a part of the Cloud Data Analytics team.
          </p>
        </div>
        <div className={styles.Job}>
          <h2 className={styles.Title}>Undergraduate Research Assistant</h2>
          <h3 className={styles.Company}>IMAP Student Collaboration</h3>
          <p className={styles.Period}>Nov 2021 - Present</p>
          <p className={styles.Description}>
            A NASA funded mission to build and deploy a small satellite called a
            CubeSat.
          </p>
        </div>
        <div className={styles.Job}>
          <h2 className={styles.Title}>Computer Science and Math Tutor</h2>
          <h3 className={styles.Company}>Knack Tutoring</h3>
          <p className={styles.Period}>Jul 2022 - Present</p>
          <p className={styles.Description}>
            Tutored students in Java and Calculus
          </p>
        </div>
        <div className={styles.Job}>
          <h2 className={styles.Title}>President & Captain</h2>
          <h3 className={styles.Company}>UNH Wrestling Club</h3>
          <p className={styles.Period}>Nov 2021 - Nov 2022</p>
          <p className={styles.Description}>
            Planned tournaments, coordinated meetings & managed club&apos;s
            finances
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
