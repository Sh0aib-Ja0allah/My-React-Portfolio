import React, {useState} from 'react';
import '../Projects2/Projects2.css';
import {ProjectsData2} from "./ProjectsData2.jsx";

function Projects2() {

    const [counter, setCounter] = useState(0);
    const Length = ProjectsData2.length;
    console.log(Length)

    return (
    <div className="Projects2" id='projects'>
        <div className="ProjectsChild2">
            <h1 className="ProjectsTitle2">Portfolio</h1>
            {/* <div>{Length}</div> */}
        </div>
        <div className="ProjectsChild Project2">
            <div className="leftSide2 ProjectsSubChild2">
                <div className="projectTitleRow2">
                    <div className="projectTitle2">{ProjectsData2[counter].title}</div>
                    <div className="projectDate2 tech2">{ProjectsData2[counter].date}</div>
                    <div id="index" className='tech2'>Project - {ProjectsData2[counter].index}</div>
                </div>
                <div className="ProjectDescription2">{ProjectsData2[counter].description}</div>
                <div className="projectTechRow2">
                {ProjectsData2[counter].technologies.map((projectTech, i) => (
                    <div className="tech2">{projectTech}</div>
                ))}
                </div>
                <div className="projectButtonsRow2">

                    <button onClick={() => {
                            counter === 0 ? setCounter(Length - 1):
                            setCounter((Prev) => Prev - 1)
                        }} className="Button2">Previous</button>

                    <a className="Button2" href={ProjectsData2[counter].button1Source}>{ProjectsData2[counter].button1Text}</a>
                    <a className="Button2" href={ProjectsData2[counter].button2Source}>{ProjectsData2[counter].button2Text}</a>
                    
                    <button onClick={() => {
                            counter === Length - 1 ? setCounter(0):
                            setCounter((Prev) => Prev + 1)
                    }} className="Button2">Next</button>
                </div>
            </div>
            <div className="rightSide2 ProjectsSubChild2">
                <img src={ProjectsData2[counter].image} alt={ProjectsData2[counter].alt} />
            </div>
        </div>
    </div>
    )
}

export default Projects2