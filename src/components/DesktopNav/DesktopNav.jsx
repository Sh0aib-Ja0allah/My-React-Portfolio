import React from 'react'
import home from '../assets/home.png'
import about from '../assets/about.png'
import skills from '../assets/skills.png'
import services from '../assets/services.png'
import contact from '../assets/contact.png'
import projects from '../assets/projects.png'

import './DesktopNav.css'

function Nav() {
    return (
    <div className="desktopNav">
        <span className="desktopNavChild homeIcon">
            <abbr title="Home Section"><a href='#home'><img className='docImg' src={home} alt="" /></a></abbr>
        </span>
        <span className="desktopNavChild aboutIcon">
            <abbr title="About Section"><a href='#about'><img className='docImg' src={about} alt="" /></a></abbr>
        </span>
        <span className="desktopNavChild skillsIcon">
            <abbr title=" Skills Section"><a href='#skills'><img className='docImg' src={skills} alt="" /></a></abbr>
        </span>
        <span className="desktopNavChild projectsIcon">
            <abbr title="Projects Section"><a href='#projects'><img className='docImg' src={projects} alt="" /></a></abbr>
        </span>
        <span className="desktopNavChild servicesIcon">
            <abbr title="Services Section"><a href='#services'><img className='docImg' src={services} alt="" /></a></abbr>
        </span>
        <span className="desktopNavChild contactIcon">
            <abbr title="Contacts Section"><a href='#contact'><img className='docImg' src={contact} alt="" /></a></abbr>
        </span>
    </div>
    )
}

export default Nav
