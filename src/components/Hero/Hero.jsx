import React from 'react'
import Header from '../Header/Header';
import "../Hero/Hero.css";
import doc from '../assets/document.png'; // that's gives the CV image path
import Nav from '../Nav/Nav';

function hero() {
  return (
    <div className='hero' id='home'>
      <Header />
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
          <a download className='CV' href="%PUBLIC_URL%/shoaibjadallahcv.pdf">Download CV</a>{/* <img className='docImg' src={doc} alt="this is the CV doc icon" /> */}
        </span>
      </div>
      <Nav />
    </div>
  )
}

export default hero
