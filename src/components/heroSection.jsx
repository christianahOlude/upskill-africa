import React from "react";
import styles from "../css/heroSection.module.css";
import lady from "../assets/lady.png";
import curve from "../assets/curve.png";
import line from "../assets/line.png";
import laptop from "../assets/laptop.png";
// import curves from "../assets/curves.png"

export default function HeroSection() {
    return (
        <div className={styles.background}>
            <div className={styles.hero}>
                {/* Left side - Lady image */}
                <div className={styles.leftImage}>
                    <img src={lady} alt="lady" width={300} height={400} style={{ marginLeft: "-70px"}}/>
                </div>

                {/* Center content */}
                <div className={styles.centerContent}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.mainTitle}>
                            Unlock the Future with
                            <br/>
                            <span className={styles.titleWithLine}>
                                Blockchain & Web3
                                <img src={line} alt="line" className={styles.underline}/>
                            </span>
                        </h1>
                        
                        {/* Curve decoration */}
                        <img 
                            src={curve} 
                            alt="curve" 
                            className={styles.curveDecoration}
                        />
                    </div>

                        <div className={styles.description}>
                            <p>
                                Upskill Africa is on a mission to equip young Africans with
                                Blockchain and Web3 skills, ensuring they are not just users but
                                innovators, builders, and shapers of the next digital economy.
                            </p>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button className={`${styles.btn} ${styles.primaryBtn}`}>
                                Start Learning
                            </button>
                            <button className={`${styles.btn} ${styles.secondaryBtn}`}>
                                Become a Partner
                            </button>
                        </div>
                    </div>

                    {/* Right side - Laptop image */}
                    <div className={styles.rightImage}>
                        <img src={laptop} alt="laptop" width={300} height={400} />
                    </div>
            </div>
            {/*<img src={curves} alt="curves" width={300} className={styles.curves}/>*/}
        </div>
    );
}