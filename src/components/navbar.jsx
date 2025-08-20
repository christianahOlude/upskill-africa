import React from 'react'
import "tailwindcss";
import upskill from "../assets/UpskillAfricaLogoIcon.png";
import styles from "../css/navbar.module.css";

export default function Navbar() {
    return (
          <div className={styles.nav}>
            <div className={styles.navbar}>
                <img src={upskill} alt="UpskillAfricaLogoIcon"/>
                <p>Upskill Africa</p>
            </div>
        </div>
    )
}
