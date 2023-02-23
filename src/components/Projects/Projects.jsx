import React from 'react';
import '../Projects/Projects.css';
import sho3la from '../assets/Projects/sho3la.png';
import senior from '../assets/Projects/senior.png';
import gym from '../assets/Projects/gym.png';
import practice from '../assets/Projects/practice.png';
import lightup from '../assets/Projects/lightup.png';
import shertee from '../assets/Projects/shertee.png';
import smart from '../assets/Projects/smart.png';
import portfolio1 from '../assets/Projects/portfolio1.png';
import portfolio2 from '../assets/Projects/portfolio2.png';

function Projects() {
    return (
    <div className="Projects" id='projects'>
        <div className="ProjectsChild">
            <h1 className="ProjectsTitle">Portfolio</h1>
        </div>
        <div className="ProjectsChild">
            <div className="ProjectsList">
                <div className="project">
                    <img className="projectImage" src={senior} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                Graduation Project,
                            </h2>
                        </div>
                        <div className="projectDescription">
                            Medical project called <span className='color'><abbr title='Medical Semi-Automated System For Injectable Drugs'>MSSID</abbr></span>, Divided in two parts Software& Hardware -Flutter app& Arduino machine- implemented to deliver liquid drugs via veins.
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                8-2-2023
                            </div>
                            <a href="https://docs.google.com/document/d/1el_w-adDc8cdTNEVmeYEDAaunRzNXwXm/edit?usp=share_link&ouid=114413823834034757164&rtpof=true&sd=true" className="link">
                                See Doc
                            </a>
                            <a href="https://docs.google.com/presentation/d/1yq587V2ebd8nZqrdlb--sz64VwMYG1zC-amFWFr70Ek/edit?usp=share_link" className="link">
                                PPT
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={sho3la} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                Sho3lat-Fikr Website MVC,
                            </h2>
                        </div>
                        <div className="projectDescription">
                            {/* As a member in Sho3lat-Fikr cultural club in AAUP, I have
                            worked on this web site to make it as a descriptor about it with <span className='color'>
                            ASP.Net Core MVC</span>. */}
                            asp.net core MVC project which called Sho3lat-Fikr and it's a cultural club in
							AAUP & for more information you can visit us at:
							<a className='color' href="https://www.instagram.com/sho3lat_fikr/">@sh03lat_fikr</a>
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                28-6-2022
                            </div>
                            <a href="https://github.com/Sh0aib-Ja0allah/Sho3lat-Fikr-website-asp.net-core-MVC" className="link">
                                Github
                            </a>
                            <a href="https://docs.google.com/presentation/d/1xFwSjWbscWRrF2LfPgJx6_Y3WbZzLaF9/edit?usp=share_link&ouid=114413823834034757164&rtpof=true&sd=true" className="link">
                                PPT
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={gym} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                GYM Website - ReactJS,
                            </h2>
                        </div>
                        <div className="projectDescription">
                        A project was developed as a practice in React framework, That describes a GYM and it's training programs.                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                2-11-2022
                            </div>
                            <a href="https://github.com/Sh0aib-Ja0allah/React-GYM-website" className="link">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={smart} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                Smart House,
                            </h2>
                        </div>
                        <div className="projectDescription">
                        This project was prepared for Engineering project management course, 
                        It's all about tha smart homes and how to plan & prepare for a project 
                        as an engineer.
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                23-6-2022
                            </div>
                            <a href="https://docs.google.com/document/d/14bUGlzoYIyUXu3oqN27Y8p_s2DRnWRGB/edit?usp=share_link&ouid=114413823834034757164&rtpof=true&sd=true" className="link">
                                See Doc
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={shertee} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                SHERTEE -Clothes Factory,
                            </h2>
                        </div>
                        <div className="projectDescription">
                            This project was prepared for Software engineering course, 
                            It's all about a clothes factory and how to plan & prepare for 
                            projects works on agile process as an engineer.
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                5-2-2022
                            </div>
                            <a href="https://drive.google.com/file/d/1pVmK8nT8LEIj9cF18FRjgjwdVfrql2RS/view?usp=sharing" className="link">
                                See Doc
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={practice} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                HTML& CSS Practice,
                            </h2>
                        </div>
                        <div className="projectDescription">
                            That's my practice in HTML, CSS& JS, You can find
                            all of this in my Github profile.
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                20-7-2022
                            </div>
                            <a href="https://github.com/Sh0aib-Ja0allah/CSS-HTML-Practice" className="link">
                            Github
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={lightup} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                Light Up Website,
                            </h2>
                        </div>
                        <div className="projectDescription">
                        a small & simple light website built using (HTML, CSS & JS), 
                        In the future maybe I will improve it to do 
                        more functional things and can access to multiple pages from it.
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                15-9-2022
                            </div>
                            <a href="https://github.com/Sh0aib-Ja0allah/Light-Up-WebSite" className="link">
                                Github
                            </a>
                            <a href="https://sh0aib-ja0allah.github.io/Light-Up-WebSite/" className="link">
                                Run
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={portfolio1} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                Shoaib Jadallah Portfolio,
                            </h2>
                        </div>
                        <div className="projectDescription">
                            I have made this web site as a web profile -CV, so
                            that I can publish my progress and my work on it.
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                18-10-2022
                            </div>
                            <a href="https://github.com/Sh0aib-Ja0allah/My-Portfolio" className="link">
                                Github
                            </a>
                            <a href="https://sh0aib-ja0allah.github.io/My-Portfolio/" className="link">
                                Run
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <img className="projectImage" src={portfolio2} alt="" />
                    <div className="ProjectDetails">
                        <div className="name">
                            <h2 className="projectName">
                                React Portfolio,
                            </h2>
                        </div>
                        <div className="projectDescription">
                            That's is the latest version of my Portfolio, 
                            It's developed using ReactJS, With a good clean code& Responsive design.
                        </div>
                        <div className="LinkDate">
                            <div className="ProjectDate">
                                22-2-2023
                            </div>
                            <a href="" className="link">
                                Github
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    )
}

export default Projects
