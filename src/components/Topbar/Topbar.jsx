import './topbar.scss'
import React, { useState, useEffect, useRef } from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import Logo from '../../assets/blacklogo.svg'
import {  NavLink } from 'react-router-dom';



function Topbar() {


  return (
        <div className="mobileTopbar">
          <div className="innerbar">
          <div className="profilePic">
            <img src='https://images.pexels.com/photos/6805653/pexels-photo-6805653.jpeg?cs=srgb&dl=pexels-atc-comm-photo-6805653.jpg&fm=jpg' alt="" />
          </div>
        <NavLink to='/' className='navLink'>
          <img src={Logo} alt="" />
          </NavLink>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.8 19.4H21.2M2 12.2H21.2M2 5H21.2" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
          </div>
      </div>
    
  )
}

export default Topbar

          


