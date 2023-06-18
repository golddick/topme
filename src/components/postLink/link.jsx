import React, { useState } from 'react';
import './link.scss'
import {  NavLink } from 'react-router-dom';

function link() {

  const [clickedColor, setClickedColor] = useState('black');
  const [activeColor, setActiveColor] = useState('#68EDCB');
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setClickedColor(' black');
  };


  return (
    <div className='postLink'>
        <span
          className={`link ${activeLink === 'all' ? 'active' : ''}`}
          style={{ color: activeLink === 'all' ? activeColor : clickedColor }}
          onClick={() => handleLinkClick('all')}
        >
           <NavLink to='/donor' className='navLink' >
          All campaigns
          </NavLink>
        </span>
        <span
          className={`link ${activeLink === 'ongoing' ? 'active' : ''}`}
          style={{ color: activeLink === 'ongoing' ? activeColor : clickedColor }}
          onClick={() => handleLinkClick('ongoing')}
        > 
          Ongoing campaigns
        </span>
        <span
          className={`link ${activeLink === 'completed' ? 'active' : ''}`}
          style={{ color: activeLink === 'completed' ? activeColor : clickedColor }}
          onClick={() => handleLinkClick('completed')}
        >
          Completed campaigns
        </span>
    </div>
  )
}

export default link