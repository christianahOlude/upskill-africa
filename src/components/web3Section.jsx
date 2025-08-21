import React from 'react';
import underline from "../assets/underline.png";
import man from "../assets/man.png";
import styles from '../css/web3Section.module.css';

export default function Web3Section() {
  return (
    <div className={styles.web3Section}>
      <div className={styles.web3Content}>
        <h2>Why <span>Web3</span></h2>
        <img src={underline} alt="underline" className={styles.underline}/>
        <p>
          Web3 is still in its early stages, and this is Africa’s <br />
          opportunity to be early adopters—not just followers. <br />
          Unlike Web2, where Africa lagged behind, Web3 presents <br />
          a level playing field where African talent can thrive, <br />
          create, and earn.
        </p>
        <button>Explore Web3</button>
      </div>
      <div className={styles.web3Image}>
        <img src={man} alt="man" />
      </div>
    </div>
  );
}