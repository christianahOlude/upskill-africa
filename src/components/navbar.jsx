import React, { useState } from 'react';
import upskill from "../assets/Upskill-Logo.png";
import styles from "../css/navbar.module.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            {/* Desktop and Mobile Container */}
            <div className={styles.container}>
                <div className={styles.navContent}>


                    <div className={styles.logo}>
                        <img src={upskill} alt="Upskill-LogoIcon" className={styles.logoImg}/>
                    </div>

                    {/* Desktop Links - Hidden on mobile */}
                    <div className={styles.desktopLinks}>
                        <a href="#" className={styles.navLink}>Home</a>
                        <a href="#" className={styles.navLink}>About</a>
                        <a href="#" className={styles.navLink}>Community</a>
                        <a href="#" className={styles.navLink}>Contact</a>
                    </div>

                    {/* Desktop Buttons - Hidden on mobile */}
                    <div className={styles.desktopButtons}>
                        <button className={`${styles.btn} ${styles.btnSecondary}`}>
                            Join Community
                        </button>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>
                            Start Learning
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className={styles.mobileMenuButton}>
                        <button
                            onClick={toggleMenu}
                            className={styles.menuToggle}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Slides down when open */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <a href="#" className={styles.mobileNavLink}>Home</a>
                    <a href="#" className={styles.mobileNavLink}>About</a>
                    <a href="#" className={styles.mobileNavLink}>Community</a>
                    <a href="#" className={styles.mobileNavLink}>Contact</a>

                    {/* Mobile Buttons */}
                    <div className={styles.mobileButtons}>
                        <button className={`${styles.btn} ${styles.btnSecondary} ${styles.btnMobile}`}>
                            Join Community
                        </button>
                        <button className={`${styles.btn} ${styles.btnPrimary} ${styles.btnMobile}`}>
                            Start Learning
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}