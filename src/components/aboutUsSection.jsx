import React from 'react';
import aboutUs from "../assets/aboutUs.png";
import arrow from "../assets/arrow.png";
import styles from "../css/aboutUs.module.css";

export default function AboutUsSection () {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutImage}>
          <img src={aboutUs} alt="aboutUs" />
        </div>
        <div className={styles.aboutText}>
          <p className={styles.aboutTitle}>
            About Us <img src={arrow} alt="arrow" className={styles.arrowIcon} />
          </p>
          <p className={styles.aboutDescription}>
            To build a skill-driven economy in Africa, where every <br />
            young person has equal access to tech education, high-<br />
            paying jobs, and financial freedom.
          </p>
          <button className={styles.aboutButton}>Join our Community</button>
        </div>
      </div>
    </div>
  );
}
