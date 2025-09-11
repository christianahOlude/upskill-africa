import React from "react";
import underline from "../assets/underline.png";
import man from "../assets/man.png";
import styles from "../css/web3Section.module.css";
import curl from "../assets/curl.png";

export default function Web3Section() {
  return (
    <div>
      <div className={styles.web3Section}>
        <div className={styles.web3Content}>
          <h2>
            Why <span className={styles.web3Word}>Web3<img src={underline} alt="underline" className={styles.wordUnderline} /></span>
          </h2>
          <p
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "18px",
              color: "#2C2C2C",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
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
      <img src={curl} alt="curl" width={480} className={styles.curlDecoration} />
    </div>
  );
}
