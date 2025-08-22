import React from 'react'
import curls from "../assets/curls.png"
import partner from "../assets/partner.png"

export default function JoinMovement() {
    return (
        <div style={{paddingTop: '10%', display: '', marginLeft: '10%', marginRight: '10%', gap: '40%'}}>
            <div style={{ marginLeft: "190px" }}>
                <img src={ curls} alt="curls" width={"30%"}/>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', alignItems: 'center'}}>
                <div >
                    <p style={{fontFamily: 'Helvetica', fontSize: '30px'}}>Join the <span style={{color: '#04A965', fontFamily: 'monospace'}}>Upskill Africa</span> <br/>
                        Movement</p>
                    <p>Whether you're a student, tech enthusiast, or <br/>
                        professional, UpSkill Africa provides the knowledge, <br/>
                        network, and opportunities to thrive in Web3.</p>
                    <button style={{marginTop: '20px', padding: "12px 16px", backgroundColor: "#22c55e", marginRight: '10px', borderRadius: '10px', border: 'none', color: 'white', fontFamily: 'sans-serif'}}>Join Our Community</button>
                    <button style={{marginTop: '20px', padding: "12px 16px", backgroundColor: 'lightgray',  borderRadius: '10px', border: 'none'}}>Become a Partner</button>
                </div>
                <img src={partner} alt="partner" width={"90%"} />
            </div>
        </div>
    )
}