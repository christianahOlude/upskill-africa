import React from 'react'
import linear from "../assets/linear.png";
import upskills from "../assets/UpskillAfricaLogoIcon.png";
import styles from '../css/buildAndEarn.module.css';
export default function BuildAndEarn() {
    return (
        <div style={{padding: '100px 0'}}>
            <div style={{justifyContent: 'center', textAlign: 'center', padding: '50px 0',  fontFamily: 'Helvetica, Arial, sans-serif'}}>
                <p className={styles.text}> Build. Earn. Lead. <br/>Africa's <span style={{fontFamily: '', color: '#F04824'}}>Web3 Future</span></p>
                <p>Africa's Web3 Opportunity</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 100px'}}>
                <div>
                    <div>
                    <img src={linear} alt="linear"/>
                    </div>
                    <img src={upskills} alt="upskills"/>
                    <p style={{fontSize: '25px'}}>$100K+ Salaries</p>
                    <p style={{fontSize: '20px', color: '#2C2C2C'}}>Skilled Blockchain devs earn 5x <br/>
                        the average African income.</p>
                </div>
                <div>
                    <div>
                        <img src={linear} alt="linear"/>
                    </div>
                    <img src={upskills} alt="upskills"/>
                    <p style={{fontSize: '25px'}}>No Degree Required</p>
                    <p style={{fontSize: '20px', color: '#2C2C2C'}}>Skills > Certificates. We focus on <br/>
                        real-world projects..</p>
                </div>
                <div>
                      <div>
                        <img src={linear} alt="linear"/>
                    </div>
                    <img src={upskills} alt="upskills"/>
                    <p style={{fontSize: '25px'}}>Be An Early Mover</p>
                    <p style={{fontSize: '20px', color: '#2C2C2C'}}>Skilled Blockchain devs earn 5x <br/>
                        the average African income.</p>
                </div>
            </div>
        </div>
    )
}