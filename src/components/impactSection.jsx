import React from 'react'
import impact from '../assets/impact.png'
import handsOn from '../assets/handsOn.png'
import meetups from '../assets/meetups.png'
import community from '../assets/community.png'
import programs from '../assets/programs.png'
import placement from '../assets/placement.png'
import support from '../assets/support.png'

export default function Impact () {
    return (
        <section style={{ paddingTop: '50px', textAlign: 'center', fontFamily: "Helvetica, Arial, sans-serif" }}>
            <div style={{ display: 'inline-block' }}>
                <img src={impact} alt="impact" style={{ display: 'block', margin: '0 auto 12px', position: "relative", right: "190px", top: "40px" }} width={"10%"} />
                <h2 style={{ fontSize: '40px', margin: 0 }}>
                    How We're Making <br/>
                    an <span style={{ color: '#02BE71' }}>Impact</span>
                </h2>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "80px", paddingTop: "60px", marginLeft: "130px", marginRight: "130px"}}>
                <div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
                        <img src={handsOn} alt="handsOn" width={"10%"}/>
                        <p style={{fontSize: "20px", fontFamily: "Helvetica", textAlign: "start"}}>Physical Meetups & Virtual <br/>
                        Workshops</p>
                        <p style={{fontFamily: "Helvetica", textAlign: "start"}}>We've successfully hosted events to <br/>educate and inspire</p>

                    </div>
                    <div>
                         <img src={meetups} alt="meetups" width={"100%"}/>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }}>
                    <img src={community} alt="community" width={"100%"} />
                    <img src={programs} alt="programs" width={"10%"} />
                    <p style={{fontSize: "20px", fontFamily: "Helvetica", textAlign: "start"}}>University & Tech Community <br/>Programs</p>
                </div>
                <div>
                    <div>
                        <img src={placement} alt="placement" width={"100%"}/>
                    </div>
                    <div>
                        <img src={support} alt="support" width={"10%"}/>
                        <p style={{fontSize: "20px"}}>Job Placement Support</p>
                        <p>Helping skilled Africans secure roles in the fast-growing Blockchain industry.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}