import React from 'react';
import '../About/About.css';
import AboutImage from '../assets/About3.jpg';

function About() {
    return (
    <div className="AboutMe" id='about'>
        <div className="AboutImage">
            <img className="image" src={AboutImage} alt= ""></img>
        </div>
        <div className="AboutData">
            <h1 className="AboutTitle">About Me</h1>
            <h3 className="SubTitle">Software Engineer&<br /> Front-end Developer,</h3>
            <div className="description">
            A Computer systems engineer& Front-End developer trying to learn new things daily. And most of my tech
            experience is focused on all the technologies and projects shown in this portfolio and my GitHub profile and I will be adding
            whatever I learn in the future into the stack.
            </div>
            <div className="Reach"><a href='#contact'>Let's talk</a></div>
        </div>
    </div>
    )
}

export default About
