import React from 'react'
import upskill from "../assets/Upskill-Logo.png";
import img from "../assets/img.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import linkedIn from "../assets/linkedIn.png";
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";
import insta from "../assets/insta.png";
import liner from "../assets/liner.png";

export default function PartnerWithUs() {
    return (
        <div style={{backgroundColor: '#F0F0F0'}}>
            <div style={{paddingLeft: '50px', paddingRight: '50px', paddingBottom: "10", fontFamily: 'Helvetica, Arial, sans-serif'}}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={img} width={"15%"} alt="img" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div >
                        <img src={upskill} alt="upskill"/>
                        <p style={{color: '#2C2C2C', fontSize: '20px', fontFamily: 'Helvetica, Arial, sans-serif'}}>Partner with us (Schools,<br/>
                            Organisations, Sponsors)</p>
                        <div>
                            <img src={linkedIn} alt="linkedIn" width={20} style={{paddingRight: '10px'}}/>
                            <img src={facebook} alt="facebook" width={20} style={{paddingRight: '10px'}}/>
                            <img src={x} alt="x" width={20} style={{marginRight: '10px'}}/>
                            <img src={insta} alt="insta" width={20} style={{marginRight: '10px'}}/>
                            </div>
                    </div>
                    <div>
                        <p><img src={phone} alt="phone" width={15}/> +234 103 148 469</p>
                        <p><img src={email} alt="email" width={15}/>upskillafrica01@gmail.com</p>
                    </div>


                </div>
                <div >
                    <img src={liner} alt="liner" height={"2%"} width={"100%"}/>
                    <p>🚀 Africa’s Web3 Revolution Starts Here – Be Part of It!</p>
                </div>
            </div>
        </div>
    )
}
