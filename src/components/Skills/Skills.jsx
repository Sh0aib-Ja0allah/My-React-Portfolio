import React from 'react'
import '../Skills/Skills.css'
import check from '../assets/check.png'

function Skills() {
    return (
    <div className='Skills' id='skills'>
        <h1 className='SkillsTitle'>My Skills</h1>
        <div className='SkillsChild'>
            <div className="SubChild Front-end">
                <h1 className='Subtitle'>Front-end Development</h1>
                <div className='skill'><img src={check}></img><span></span>HTML .</div>
                <div className='skill'><img src={check}></img><span></span>CSS .</div>
                <div className='skill'><img src={check}></img><span></span>Javascript .</div>
                <div className='skill'><img src={check}></img><span></span>Bootstrap .</div>
                <div className='skill'><img src={check}></img><span></span>ReactJS .</div>
            </div>
            <div className="SubChild Back-end">
                <h1 className='Subtitle'>Back-end Development</h1>
                <div className='skill'><img src={check}></img><span></span>C++ .</div>
                <div className='skill'><img src={check}></img><span></span>Python .</div>
                <div className='skill'><img src={check}></img><span></span>Java .</div>
                <div className='skill'><img src={check}></img><span></span>ASP.Net Core MVC .</div>
            </div>
            <div className="SubChild other">
                <h1 className='Subtitle'>Other Skills</h1>
                <div className='skill'><img src={check}></img><span></span>Flutter Tech .</div>
                <div className='skill'><img src={check}></img><span></span>LINUX .</div>
                <div className='skill'><img src={check}></img><span></span>SQL, PL/SQL .</div>
                <div className='skill'><img src={check}></img><span></span>Git .</div>
                <div className='skill'><img src={check}></img><span></span>Github .</div>
            </div>
        </div>
    </div>
    )
}

export default Skills
