// import React from 'react'
// import underline2 from "../assets/underline2.png";
// import styles from "../css/ourMission.module.css";
// import threeCubes from "../assets/threeCubes.png";
// import handsOn from "../assets/handsOn.png";
// import connect from "../assets/connect.png";
//
// export default function OurMission() {
//   return (
//       <div>
//           <div style={{fontSize: "50px", justifyContent: "center", fontFamily: "Helvetica, Arial, sans-serif", textAlign: "center", padding: "50px 0"}}>
//               <p>Our <span style={{color: "#F04824"}}>Mission </span></p>
//                   <img src={underline2} alt="underline2" className={styles.underline}/>
//           </div>
//
//           <div style={{display: "flex"}}>
//               <div className={styles.missionCard}>
//                   <img src={threeCubes} alt="threeCubes" width={70} className={styles.missionIcon} />
//                   <p className={styles.missionText}>Teach in-demand Web3 <br/>
//                       & Blockchain skills</p>
//               </div>
//               <div className={styles.missionCard}>
//                   <img src={handsOn} alt="handsOn" width={90} className={styles.missionIcon} />
//                   <p className={styles.missionText}>Provide hands-on training <br/>
//                       through boot camps, <br/>
//                       workshops, and meetups
//                     </p>
//               </div>
//               <div className={styles.missionCard}   >
//                   <img src={connect} alt="connect" width={90}/>
//                   <p >Connect learners with <br/>
//                       job opportunities in the <br/>
//                       global tech space
//                   </p>
//               </div>
//           </div>
//       </div>
//   )
// }

import React from 'react';
import underline2 from "../assets/underline2.png";
import threeCubes from "../assets/threeCubes.png";
import handsOn from "../assets/handsOn.png";
import connect from "../assets/connect.png";
import styles from '../css/ourMission.module.css';

export default function OurMission() {
  return (
    <div className={styles.ourMissionContainer}>
      {/* Mission Title Section */}
      <div className={styles.missionTitleSection}>
        <h2 className={styles.missionTitle}>
          Our <span className={styles.missionHighlight}>Mission</span>
        </h2>
        <img src={underline2} alt="underline" className={styles.titleUnderline}/>
      </div>

      {/* Mission Cards Section */}
      <div className={styles.missionCardsContainer}>
        <div className={styles.missionCard}>
          <div className={styles.missionIconWrapper}>
            <img src={threeCubes} alt="Web3 Skills" className={styles.missionIcon} />
          </div>
          <p className={styles.missionText}>
            Teach in-demand Web3<br/>
            & Blockchain skills
          </p>
        </div>

        <div className={styles.missionCard}>
          <div className={styles.missionIconWrapper}>
            <img src={handsOn} alt="Hands-on Training" className={`${styles.missionIcon} ${styles.handsOnIcon}`} />
          </div>
          <p className={styles.missionText}>
            Provide hands-on training<br/>
            through boot camps,<br/>
            workshops, and meetups
          </p>
        </div>

        <div className={styles.missionCard}>
          <div className={styles.missionIconWrapper}>
            <img src={connect} alt="Connect Opportunities" className={`${styles.missionIcon} ${styles.ConnectIcon}`}/>
          </div>
          <p className={styles.missionText}>
            Connect learners with<br/>
            job opportunities in the<br/>
            global tech space
          </p>
        </div>
      </div>
    </div>
  );
}