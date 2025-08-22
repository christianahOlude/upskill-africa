import React from 'react';
import impact from '../assets/impact.png';
import handsOn from '../assets/handsOn.png';
import meetups from '../assets/meetups.png';
import community from '../assets/community.png';
import programs from '../assets/programs.png';
import placement from '../assets/placement.png';
import support from '../assets/support.png';
import './Impact.css';

export default function Impact() {
  return (
    <section className="impact-container">
      {/* Title Section */}
      <div className="impact-title-section">
        <img src={impact} alt="impact" className="impact-icon" />
        <h2 className="impact-title">
          How We're Making<br/>
          an <span className="impact-highlight">Impact</span>
        </h2>
      </div>

      {/* Content Grid */}
      <div className="impact-content-grid">

        {/* Left Section - Physical Meetups */}
        <div className="impact-card left-card">
          <div className="card-content">
            <img src={handsOn} alt="Physical Meetups" className="section-icon" />
            <h3 className="section-title">Physical Meetups & Virtual<br/>Workshops</h3>
            <p className="section-description">We've successfully hosted events to<br/>educate and inspire.</p>
            <div className="meetup-image">
              <img src={meetups} alt="meetups" width={300} className="meetup-photo" />
            </div>
          </div>
        </div>

        {/* Center Section - Community Circle */}
        <div className="impact-card center-card">
          <div className="card-content">
            <div className="community-circle">
              <div className="center-logo">
                <div className="upskill-logo"></div>
              </div>

              {/* Profile circles around the center */}
              <div className="profile-circle profile-1"></div>
              <div className="profile-circle profile-2"></div>
              <div className="profile-circle profile-3"></div>
              <div className="profile-circle profile-4"></div>
              <div className="profile-circle profile-5"></div>
              <div className="profile-circle profile-6"></div>
            </div>

            <div className="community-section-bottom">
              <img src={programs} alt="Community Programs" className="section-icon" />
              <h3 className="section-title">University & Tech Community<br/>Programs</h3>
              <p className="section-description">Bringing Web3 education to campuses<br/>and hubs across Africa.</p>
            </div>
          </div>
        </div>

        {/* Right Section - Job Placement */}
        <div className="impact-card right-card">
          <div className="card-content">
            <div className="job-placement-image">
              <img src={placement} alt="job placement" width={300} className="job-photo" />
            </div>
            <img src={support} alt="Job Placement" className="section-icon job-icon" />
            <h3 className="section-title">Job Placement Support</h3>
            <p className="section-description">Helping skilled Africans secure roles in<br/>the fast-growing Blockchain industry.</p>
          </div>
        </div>

      </div>
    </section>
  );
}