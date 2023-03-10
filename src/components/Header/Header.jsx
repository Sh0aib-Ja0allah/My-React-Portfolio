import React from 'react'
import "../Header/Header.css";
import menu from "../assets/menu.png"

function Header() {
  return (
    <div className="header">
      {/* <div className='name'>
        <span className="color">S</span>hoaib <span className="color">J</span>adallah
      </div> */}

      <img src={menu} alt="" className="menu" />

    </div>
  )
}

export default Header
