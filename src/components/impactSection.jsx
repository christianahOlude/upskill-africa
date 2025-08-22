import React from 'react';
import impact from '../assets/impact.png';
import handsOn from '../assets/handsOn.png';
import meetups from '../assets/meetups.png';
import community from '../assets/community.png';
import programs from '../assets/programs.png';
import placement from '../assets/placement.png';
import support from '../assets/support.png';
import styles from '../css/impactSection.module.css';

export default function Impact() {
  return (
    <section className={styles.impactSection}>
        <div style={{display: 'flex', justifyContent: 'center', padding: '50px 0'}}>

            <img src={impact} alt="impact" className={styles.impactIcon} />
            <h2 className={styles.heading}>
              How We're Making <br />
              an <span>Impact</span>
            </h2>

        </div>

      <div className={styles.grid}>
        {/* First column */}
        <div >
          <div className={styles.card}>
            <img src={handsOn} alt="handsOn" className={styles.smallIcon} />
            <p className={styles.cardTitle}>
              Physical Meetups & Virtual <br />
              Workshops
            </p>
            <p className={styles.cardDesc}>
              We've successfully hosted events to <br />
              educate and inspire
            </p>
          </div>
          <img src={meetups} alt="meetups" className={styles.cardImage} />
        </div>

        {/*Second column*/}
        <div className={styles.card}>
          <img src={community} alt="community" className={styles.cardImage} />
          <img src={programs} alt="programs" className={styles.smallIcon} />
          <p className={styles.cardTitle}>
            University & Tech Community <br /> Programs
          </p>
        </div>
        {/*Third column*/}
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px'}}>
          <img src={placement} alt="placement" className={styles.cardImage} />
          <div className={styles.card}>
            <img src={support} alt="support" className={styles.smallIcon} />
            <p className={styles.cardTitle}>Job Placement Support</p>
            <p className={styles.cardDesc}>
              Helping skilled Africans secure roles in the fast-growing
              Blockchain industry.
            </p>
          </div>
          </div>
      </div>
    </section>
  );
}
