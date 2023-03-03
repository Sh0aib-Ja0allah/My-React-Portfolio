import React from 'react'
import home from '../assets/home.png'
import about from '../assets/about.png'
import skills from '../assets/skills.png'
import services from '../assets/services.png'
import contact from '../assets/contact.png'
import projects from '../assets/projects.png'

import '../Nav/Nav.css'

function Nav() {
    return (
    <div className="nav">
        <span className="navChild home">
            <abbr title="Home Section"><a href='#home'><img className='docImg' src={home} alt="" /></a></abbr>
        </span>
        <span className="navChild about">
            <abbr title="About Section"><a href='#about'><img className='docImg' src={about} alt="" /></a></abbr>
        </span>
        <span className="navChild skills">
            <abbr title=" Skills Section"><a href='#skills'><img className='docImg' src={skills} alt="" /></a></abbr>
        </span>
        <span className="navChild projects">
            <abbr title="Projects Section"><a href='#projects'><img className='docImg' src={projects} alt="" /></a></abbr>
        </span>
        <span className="navChild services">
            <abbr title="Services Section"><a href='#services'><img className='docImg' src={services} alt="" /></a></abbr>
        </span>
        <span className="navChild contact">
            <abbr title="Contacts Section"><a href='#contact'><img className='docImg' src={contact} alt="" /></a></abbr>
        </span>
    </div>
    )
}

export default Nav
