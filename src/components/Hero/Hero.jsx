import React from 'react';
import "../Hero/Hero.css";
import DesktopNav from "../DesktopNav/DesktopNav"
import CV from "../assets/ShoaibJadallah's-CV.pdf"


import home from '../assets/home.png'
import about from '../assets/about.png'
import skills from '../assets/skills.png'
import services from '../assets/services.png'
import contact from '../assets/contact.png'
import projects from '../assets/projects.png'

import menu from "../assets/menu.png"

function hero() {
  return (
    <div className='hero' id='home'>
      <div className="displayMenu">
        {/* Mobile menu */}
        <img src={menu} alt="" className="menu" />

        {/* Mobile NavMenu */}
        <div className="navMobile">
          <span className="navMobileChild homeMobile">
              <div className="navMobileChildText">Home</div>
              <abbr title="Home Section"><a href='#home'><img className='docImg' src={home} alt="" /></a></abbr>
          </span>
          <span className="navMobileChild aboutMobile">
              <div className="navMobileChildText">About</div>
              <abbr title="About Section"><a href='#about'><img className='docImg' src={about} alt="" /></a></abbr>
          </span>
          <span className="navMobileChild skillsMobile">
              <div className="navMobileChildText">Skills</div>
              <abbr title=" Skills Section"><a href='#skills'><img className='docImg' src={skills} alt="" /></a></abbr>
          </span>
          <span className="navMobileChild projectsMobile">
              <div className="navMobileChildText">Projects</div>
              <abbr title="Projects Section"><a href='#projects'><img className='docImg' src={projects} alt="" /></a></abbr>
          </span>
          <span className="navMobileChild servicesMobile">
              <div className="navMobileChildText">Services</div>
              <abbr title="Services Section"><a href='#services'><img className='docImg' src={services} alt="" /></a></abbr>
          </span>
          <span className="navMobileChild contactMobile">
              <div className="navMobileChildText">Contacts</div>
              <abbr title="Contacts Section"><a href='#contact'><img className='docImg' src={contact} alt="" /></a></abbr>
          </span>
        </div>
      </div>

      {/* Hero Data Display */}
      <div className='display'>
        <h3 className='heroChild Hello'>
          Hello world, I'm
        </h3>
        <h1 className='heroChild Name'>
          <div><span className="color"></span>Shoaib </div><div className='none'>-</div><div><span className="color">Jadallah</span></div>
        </h1>
        <span className='heroChild CSE'>
          I'm a Computer Systems Engineer.
        </span>
        <span className='heroChild displayCV'>
          <a className='CV' href={CV} download>Download CV</a>{/* <img className='docImg' src={doc} alt="this is the CV doc icon" /> */}
        </span>
      </div>

      {/* Desktop Navbar */}
      <DesktopNav />
    </div>
  )
}

export default hero