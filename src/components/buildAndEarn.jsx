import React from 'react'
import linear from "../assets/linear.png";
import upskills from "../assets/UpskillAfricaLogoIcon.png";
import styles from '../css/buildAndEarn.module.css';

export default function BuildAndEarn() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.text}>
                    Build. Earn. Lead. <br />
                    Africa's <span className={styles.highlight}>Web3 Future</span>
                </p>
                <p className={styles.web}>Africa's Web3 Opportunity</p>
            </div>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <div>
                        <img src={linear} alt="linear" />
                    </div>
                    <img src={upskills} alt="upskills" />
                    <p className={styles.title}>$100K+ Salaries</p>
                    <p className={styles.desc}>
                        Skilled Blockchain devs earn 5x <br />
                        the average African income.
                    </p>
                </div>

                <div className={styles.card}>
                    <div>
                        <img src={linear} alt="linear" />
                    </div>
                    <img src={upskills} alt="upskills" />
                    <p className={styles.title}>No Degree Required</p>
                    <p className={styles.desc}>
                        Skills &gt; Certificates. We focus on <br />
                        real-world projects.
                    </p>
                </div>

                <div className={styles.card}>
                    <div>
                        <img src={linear} alt="linear" />
                    </div>
                    <img src={upskills} alt="upskills" />
                    <p className={styles.title}>Be An Early Mover</p>
                    <p className={styles.desc}>
                        Skilled Blockchain devs earn 5x <br />
                        the average African income.
                    </p>
                </div>
            </div>
        </div>
    )
}
