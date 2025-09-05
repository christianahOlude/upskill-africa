import React from 'react';
import curls from "../assets/curls.png";
import partner from "../assets/partner.png";
import styles from "../css/joinMovement.module.css";

export default function JoinMovement() {
  return (
    <div className={styles.joinContainer}>
      {/*<div >*/}
        <img src={curls} alt="curls" className={styles.curlsWrapper}/>
      {/*</div>*/}

      <div className={styles.contentGrid}>
        <div className={styles.textSection}>
          <p className={styles.heading}>
            Join the <span>Upskill Africa</span> <br />
            Movement
          </p>
          <p className={styles.subText}>
            Whether you're a student, tech enthusiast, or <br/>
              professional, UpSkill Africa provides the knowledge, <br/>
              network, and opportunities to thrive in Web3.
          </p>
          <div className={styles.buttons}>
            <button className={styles.joinBtn}>Join Our Community</button>
            <button className={styles.partnerBtn}>Become a Partner</button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img src={partner} alt="partner" />
        </div>
      </div>
    </div>
  );
}
