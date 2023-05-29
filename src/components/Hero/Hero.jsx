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
        {/* Mobile menu Icon*/}
        <img src={menu} alt="" className="menu" />

        {/* Mobile NavMenu Section */}
        <div className="navMobile">
          <span>
              <abbr title="Home Section"><a className="navMobileChild homeMobile" href='#home'><img className='docImg' src={home} alt="" /><div className="navMobileChildText">Home</div></a></abbr>
          </span>
          <span>
              <abbr title="About Section"><a className="navMobileChild aboutMobile" href='#about'><img className='docImg' src={about} alt="" /><div className="navMobileChildText">About</div></a></abbr>
          </span>
          <span>
              <abbr title=" Skills Section"><a className="navMobileChild skillsMobile" href='#skills'><img className='docImg' src={skills} alt="" /><div className="navMobileChildText">Skills</div></a></abbr>
          </span>
          <span>
              <abbr title="Projects Section"><a className="navMobileChild projectsMobile" href='#projects'><img className='docImg' src={projects} alt="" /><div className="navMobileChildText">Projects</div></a></abbr>
          </span>
          <span>
              <abbr title="Services Section"><a className="navMobileChild servicesMobile" href='#services'><img className='docImg' src={services} alt="" /><div className="navMobileChildText">Services</div></a></abbr>
          </span>
          <span>
              <abbr title="Contacts Section"><a className="navMobileChild contactMobile" href='#contact'><img className='docImg' src={contact} alt="" /><div className="navMobileChildText">Contacts</div></a></abbr>
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
          <a className='CV' href={CV} download>Download CV</a>
        </span>
      </div>

      {/* Desktop Navbar */}
      <DesktopNav />
    </div>
  )
}

export default hero