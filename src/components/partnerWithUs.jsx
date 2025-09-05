// import React from 'react'
// import upskill from "../assets/Upskill-Logo.png";
// import img from "../assets/img.png";
// import phone from "../assets/phone.png";
// import email from "../assets/email.png";
// import linkedIn from "../assets/linkedIn.png";
// import facebook from "../assets/facebook.png";
// import x from "../assets/x.png";
// import insta from "../assets/insta.png";
// import liner from "../assets/liner.png";
//
// export default function PartnerWithUs() {
//     return (
//         <div style={{backgroundColor: '#F0F0F0'}}>
//             <div style={{paddingLeft: '50px', paddingRight: '50px', paddingBottom: "10", fontFamily: 'Helvetica, Arial, sans-serif'}}>
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                     <img src={img} width={"15%"} alt="img" />
//                 </div>
//                 <div style={{ display: 'flex', justifyContent: 'space-between'}}>
//                     <div >
//                         <img src={upskill} alt="upskill"/>
//                         <p style={{color: '#2C2C2C', fontSize: '20px', fontFamily: 'Helvetica, Arial, sans-serif'}}>Partner with us (Schools,<br/>
//                             Organisations, Sponsors)</p>
//                         <div>
//                             <img src={linkedIn} alt="linkedIn" width={20} style={{paddingRight: '10px'}}/>
//                             <img src={facebook} alt="facebook" width={20} style={{paddingRight: '10px'}}/>
//                             <img src={x} alt="x" width={20} style={{marginRight: '10px'}}/>
//                             <img src={insta} alt="insta" width={20} style={{marginRight: '10px'}}/>
//                             </div>
//                     </div>
//                     <div>
//                         <p><img src={phone} alt="phone" width={15}/> +234 103 148 469</p>
//                         <p><img src={email} alt="email" width={15}/>upskillafrica01@gmail.com</p>
//                     </div>
//
//
//                 </div>
//                 <div >
//                     <img src={liner} alt="liner" height={"2%"} width={"100%"}/>
//                     <p>🚀 Africa’s Web3 Revolution Starts Here – Be Part of It!</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, {useEffect, useState} from 'react'
import upskill from "../assets/Upskill-Logo.png";
import img from "../assets/img.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import linkedIn from "../assets/linkedIn.png";
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";
import insta from "../assets/insta.png";
import liner from "../assets/liner.png";
import '../css/partnerWithUs.module.css'

export default function PartnerWithUs() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <div className="partner-container" style={{backgroundColor: '#F0F0F0'}}>
            <div className="center-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img} className="center-img" width={"15%"} alt="img" />
            </div>

            <div
                style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                gap: "20px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: isMobile ? "flex-start" : "center",
                        position: "relative",
                        right: isMobile ? "0" : "100px",
                    }}
                >
                    <div className="left-section">
                        <img src={upskill} className="upskill-logo" alt="upskill"/>
                        <p className="partner-text" style={{color: '#2C2C2C', fontSize: '20px', fontFamily: 'Helvetica, Arial, sans-serif'}}>Partner with us (Schools,<br/>
                            Organisations, Sponsors)</p>
                        <div className="social-icons-container">
                            <img src={linkedIn} className="social-icon" alt="linkedIn" width={20} style={{paddingRight: '10px'}}/>
                            <img src={facebook} className="social-icon" alt="facebook" width={20} style={{paddingRight: '10px'}}/>
                            <img src={x} className="social-icon" alt="x" width={20} style={{marginRight: '10px'}}/>
                            <img src={insta} className="social-icon" alt="insta" width={20} style={{marginRight: '10px'}}/>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: isMobile ? "flex-start" : "center",
                        position: "relative",
                        left: isMobile ? "0" : "100px",
                        // alignItems: "center",
                    }}
                >
                    <div className="right-section">
                        <p className="contact-item"><img src={phone} className="contact-icon" alt="phone" width={15}/> +234 103 148 469</p>
                        <p className="contact-item"><img src={email} className="contact-icon" alt="email" width={15}/>upskillafrica01@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className="bottom-section"
                style={{
                    position: "relative",
                    left: isMobile ? "0" : "100px",
                }}
            >
                <img src={liner} className="liner-img" alt="liner" height={"2%"} width={"80%"}/>
                <p className="revolution-text">🚀 Africa's Web3 Revolution Starts Here – Be Part of It!</p>
            </div>

            {/*<div className="partner-content" style={{paddingLeft: '50px', paddingRight: '50px', paddingBottom: "10", fontFamily: 'Helvetica, Arial, sans-serif'}}>*/}
            {/*    <div className="center-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>*/}
            {/*        <img src={img} className="center-img" width={"15%"} alt="img" />*/}
            {/*    </div>*/}
            {/*    <div className="main-content-container" style={{ display: 'flex', justifyContent: 'space-between'}}>*/}
            {/*        <div className="left-section">*/}
            {/*            <img src={upskill} className="upskill-logo" alt="upskill"/>*/}
            {/*            <p className="partner-text" style={{color: '#2C2C2C', fontSize: '20px', fontFamily: 'Helvetica, Arial, sans-serif'}}>Partner with us (Schools,<br/>*/}
            {/*                Organisations, Sponsors)</p>*/}
            {/*            <div className="social-icons-container">*/}
            {/*                <img src={linkedIn} className="social-icon" alt="linkedIn" width={20} style={{paddingRight: '10px'}}/>*/}
            {/*                <img src={facebook} className="social-icon" alt="facebook" width={20} style={{paddingRight: '10px'}}/>*/}
            {/*                <img src={x} className="social-icon" alt="x" width={20} style={{marginRight: '10px'}}/>*/}
            {/*                <img src={insta} className="social-icon" alt="insta" width={20} style={{marginRight: '10px'}}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="right-section">*/}
            {/*            <p className="contact-item"><img src={phone} className="contact-icon" alt="phone" width={15}/> +234 103 148 469</p>*/}
            {/*            <p className="contact-item"><img src={email} className="contact-icon" alt="email" width={15}/>upskillafrica01@gmail.com</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="bottom-section">*/}
            {/*        <img src={liner} className="liner-img" alt="liner" height={"2%"} width={"100%"}/>*/}
            {/*        <p className="revolution-text">🚀 Africa's Web3 Revolution Starts Here – Be Part of It!</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}