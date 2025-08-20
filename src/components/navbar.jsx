import React, {useState} from 'react'
import "tailwindcss";
import upskill from "../assets/Upskill-Logo.png";
import styles from "../css/navbar.module.css";

export default function Navbar() {

        const [isMenuOpen, setIsMenuOpen] = useState(false);
            const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen)
        };
            return (
              <div className={styles.navbar}>
                    <div >
                        <img src={upskill} alt="Upskill-LogoIcon"/>
                    </div>
                 <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
                      <a href="#">Home</a>
                      <a href="#">About</a>
                      <a href="#">Community</a>
                      <a href="#">Contact</a>
                  </div>
                  <div style={{gap: '8px', display: 'flex'}}>
                      <button style={{backgroundColor: '#f1f5f9'}} className={styles.btn}>Join Community</button>
                      <button style={{ backgroundColor:'#34D399', color: 'white'}} className={styles.btn}>Start Learning</button>
                  </div>
            </div>
    )
}
