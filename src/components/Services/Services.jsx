import React from 'react'
import '../Services/Services.css'
import bug  from '../assets/Services/bug.png';
import check from '../assets/Services/check.png';
import bot from '../assets/Services/bot.png';

function Services() {
    return (
    <div className='Services' id='services'>
        <div className="ServicesChild ServicesTitle">
            <h1 className='Title'>Services</h1>
        </div>
        <div className="ServicesChild">
            <div className="service">
                <div className="Icon">
                    <img src={bug} alt="" />
                </div>
                <div className="serviceTitle">
                    Web Development,
                </div>
                <div className="serviceDescription">
                    Every website should be built with two primary goals: 
                    Firstly, it needs to work across all devices with a nice view. 
                    Secondly, it needs to be fast as possible. And both of these 
                    I can provide it to your website.
                </div>
                <div className="linkDiv">
                    <a href="#contact" className="link">
                        Contact
                    </a>
                </div>
            </div>
            <div className="service">
                <div className="Icon">
                    <img src={check} alt="" />
                </div>
                <div className="serviceTitle">
                    Back-end Mentor,
                </div>
                <div className="serviceDescription">
                    I can give an advice in programming languages like: 
                    Java, Python ... etc, So on these coding information 
                    let me tell you that I can develope any code that you need.
                </div>
                <div className="linkDiv">
                    <a href="#contact" className="link">
                        Contact
                    </a>
                </div>
            </div>
            <div className="service">
                <div className="Icon">
                    <img src={bot} alt="" />
                </div>
                <div className="serviceTitle">
                    Computer hardware maintenance,
                </div>
                <div className="serviceDescription">
                    Replacing all SSD/Hdd types, 
                    Boots &install all Operating systems types, 
                    Formatting data, installation & gather the devices.
                </div>
                <div className="linkDiv">
                    <a href="#contact" className="link">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Services
